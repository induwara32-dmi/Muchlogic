import type { ImageMetadata } from 'astro';
import projectPlaceholder from '../assets/placeholders/project.svg';

type ImageMap = Record<string, ImageMetadata>;

const projectImages = import.meta.glob<ImageMetadata>(
  '../assets/projects/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
) as ImageMap;

function fromFolder(images: ImageMap, folder: string, file: string | undefined): ImageMetadata | undefined {
  if (!file) return undefined;
  const image = images[`../assets/${folder}/${file}`];
  if (!image && import.meta.env.DEV) {
    console.warn(`[images] src/assets/${folder}/${file} not found — using placeholder`);
  }
  return image;
}

export interface ResolvedImage {
  src: ImageMetadata;
  isPlaceholder: boolean;
}

/** Project screenshot from src/assets/projects/, or the neutral placeholder. */
export function getProjectImage(file: string | undefined): ResolvedImage {
  const image = fromFolder(projectImages, 'projects', file);
  return image
    ? { src: image, isPlaceholder: false }
    : { src: projectPlaceholder, isPlaceholder: true };
}
