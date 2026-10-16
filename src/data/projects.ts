/**
 * Projects — powers the Home "featured" section, /work and /work/[slug].
 *
 * Images: drop a screenshot into src/assets/projects/ and put its file name in `image`
 * (e.g. image: 'muchlogic-pos.webp'). Empty or missing files fall back to a neutral placeholder.
 */

export const projectCategories = [
  'POS & Retail',
  'Web Platforms',
  'Websites',
  'AI & Automation',
  'Mobile Apps',
  'Healthcare',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  /** One or two sentences for cards */
  summary: string;
  /** Longer text for the case study page */
  description: string;
  whatWeDid: string[];
  tech: string[];
  liveUrl?: string;
  /** File name in src/assets/projects/ — empty = placeholder */
  image: string;
  imageAlt: string;
  featured: boolean;
  /** Shows a visible "Prototype" badge */
  prototype?: boolean;
  /** Service slugs from services.ts, shown as "Services" on the case study */
  services: string[];
}

export const projects: Project[] = [
  {
    slug: 'muchlogic-pos',
    title: 'MuchLogic POS',
    category: 'POS & Retail',
    client: 'Internal product',
    summary: 'Offline-first POS and inventory software for Windows retail businesses.',
    description:
      'MuchLogic POS is our own point of sale and inventory software for Windows retail businesses. It is built offline-first, so shops can keep billing even without an internet connection.',
    whatWeDid: [
      'TODO: confirm what to list here (e.g. product design, development, support)',
    ],
    tech: [], // TODO: confirm tech stack (the design contradicts itself)
    // liveUrl: '', // TODO: product page or download URL
    image: '', // TODO: add screenshot, e.g. 'muchlogic-pos.webp'
    imageAlt: 'MuchLogic POS screenshot',
    featured: true,
    services: ['pos-systems'],
  },
  {
    slug: 'designkoolama',
    title: 'Designkoolama.lk',
    category: 'Websites',
    client: 'Designkoolama Pvt Ltd, Matara',
    summary:
      'Portfolio website rebuilt from WordPress/Elementor into Next.js, with portfolio filtering, dark/light mode and WhatsApp integration.',
    description:
      'Designkoolama’s portfolio website was rebuilt from WordPress/Elementor into Next.js, with portfolio filtering, dark/light mode and WhatsApp integration.',
    whatWeDid: [
      'Rebuilt the site from WordPress/Elementor into Next.js',
      'Portfolio filtering',
      'Dark/light mode',
      'WhatsApp integration',
    ],
    tech: ['Next.js', 'React', 'PostgreSQL', 'Vercel'],
    liveUrl: 'https://www.designkoolama.lk',
    image: '', // TODO: add screenshot, e.g. 'designkoolama.webp'
    imageAlt: 'Designkoolama.lk website homepage',
    featured: true,
    services: ['web-ecommerce'],
  },
  {
    slug: 'shanu-ceylon-tours',
    title: 'Shanu Ceylon Tours',
    category: 'Websites',
    client: 'Shanu Ceylon Tours', // TODO: confirm client name
    summary: 'Tour company website for shanuceylontours.com.',
    description: 'Tour company website for shanuceylontours.com.', // TODO: confirm description and status
    whatWeDid: ['TODO: confirm what we did'],
    tech: [], // TODO: confirm tech stack
    // liveUrl: 'https://shanuceylontours.com', // TODO: confirm the site is live before enabling
    image: '', // TODO: add screenshot, e.g. 'shanu-ceylon-tours.webp'
    imageAlt: 'Shanu Ceylon Tours website homepage',
    featured: false,
    services: ['web-ecommerce'],
  },
  {
    // TODO: confirm AgriLink should appear as a MuchLogic project
    slug: 'agrilink',
    title: 'AgriLink',
    category: 'Web Platforms',
    client: 'Internal project',
    summary: 'Marketplace connecting farmers, buyers, transporters and admins.',
    description: 'A marketplace platform connecting farmers, buyers, transporters and admins.',
    whatWeDid: ['TODO: confirm what we did'],
    tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://agrilink-iota.vercel.app',
    image: '', // TODO: add screenshot, e.g. 'agrilink.webp'
    imageAlt: 'AgriLink marketplace dashboard',
    featured: true,
    services: ['custom-software'],
  },
  {
    slug: 'doc365',
    title: 'Doc365',
    category: 'Healthcare',
    client: 'TODO: confirm client', // TODO: confirm client
    summary:
      'Prototype of a consent-based health record and e-prescription exchange using FHIR.',
    description:
      'A prototype of a consent-based health record and e-prescription exchange using FHIR.',
    whatWeDid: ['TODO: confirm what we did'],
    tech: [], // TODO: confirm tech stack
    image: '', // TODO: add screenshot, e.g. 'doc365.webp'
    imageAlt: 'Doc365 prototype screen',
    featured: false,
    prototype: true,
    services: ['custom-software'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Categories that currently have at least one project, in the canonical order. */
export const activeCategories = projectCategories.filter((c) =>
  projects.some((p) => p.category === c),
);

export function projectsInCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

/** URL-safe value for ?category= (e.g. "POS & Retail" → "pos-retail") */
export function categorySlug(category: ProjectCategory): string {
  return category
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
