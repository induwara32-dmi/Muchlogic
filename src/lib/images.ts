import type { ImageMetadata } from 'astro';
import projectPlaceholder from '../assets/placeholders/project.svg';

type ImageMap = Record<string, ImageMetadata>;

const projectImages = import.meta.glob<ImageMetadata>(
  '../assets/projects/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
) as ImageMap;

const serviceImages = import.meta.glob<ImageMetadata>(
  '../assets/services/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
) as ImageMap;

const teamPhotos = import.meta.glob<ImageMetadata>('../assets/team/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as ImageMap;

/** Team photo from src/assets/team/, or undefined (the card then shows initials). */
export function getTeamPhoto(file: string | undefined): ImageMetadata | undefined {
  return fromFolder(teamPhotos, 'team', file);
}

const servicePlaceholders =import.meta.glob<ImageMetadata>('../assets/placeholders/service-*.svg', {
  eager: true,
  import: 'default',
}) as ImageMap;

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
  return image ? { src: image, isPlaceholder: false } : { src: projectPlaceholder, isPlaceholder: true };
}

/** Service image from src/assets/services/, or that service's placeholder illustration. */
export function getServiceImage(slug: string, file: string | undefined): ResolvedImage {
  const image = fromFolder(serviceImages, 'services', file);
  if (image) return { src: image, isPlaceholder: false };
  const placeholder = servicePlaceholders[`../assets/placeholders/service-${slug}.svg`] ?? projectPlaceholder;
  return { src: placeholder, isPlaceholder: true };
}
