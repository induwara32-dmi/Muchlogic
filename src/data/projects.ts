/**
 * Projects — powers the Home "featured" section, /work and /work/[slug].
 *
 * Images: drop a screenshot into src/assets/projects/ and put its file name in `image`
 * (e.g. image: 'muchlogic-pos.webp'). Empty or missing files fall back to a neutral placeholder.
 */

/** Order here = order of the filter chips on /work */
export const projectCategories = [
  'Websites',
  'Web Platforms',
  'AI & Automation',
  'POS & Retail',
  'Mobile Apps',
  'Healthcare',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  /** Shown as "Industry" on the case study; leave empty to hide the row */
  industry: string;
  /** One or two sentences for cards */
  summary: string;
  /** Longer text for the case study page */
  description: string;
  /**
   * Optional meta description for the case study (search results, max ~160 characters).
   * Without it, one is built from the title and summary.
   */
  seoDescription?: string;
  whatWeDid: string[];
  tech: string[];
  liveUrl?: string;
  /** App download page (e.g. Microsoft Store). Shows a "Download" button on the case study */
  downloadUrl?: string;
  /** File name in src/assets/projects/ — empty = placeholder */
  image: string;
  imageAlt: string;
  featured: boolean;
  /** Shows a visible "Prototype" badge */
  prototype?: boolean;
  /** Left out of the whole site (no page, cards, filters, counters, prev/next or sitemap entry) */
  hidden?: boolean;
  /** Service slugs from services.ts, shown as "Services" on the case study */
  services: string[];
}

/** Every project, including hidden ones. Use `projects` everywhere else. */
const allProjects: Project[] = [
  {
    slug: 'designkoolama',
    title: 'Designkoolama.lk',
    category: 'Websites',
    client: 'Designkoolama Pvt Ltd, Matara',
    industry: 'Creative & Design',
    summary:
      'Portfolio website rebuilt from WordPress/Elementor into Next.js, with portfolio filtering, dark/light mode and WhatsApp integration.',
    description:
      'Designkoolama’s portfolio website was rebuilt from WordPress/Elementor into Next.js, with portfolio filtering, dark/light mode and WhatsApp integration.',
    seoDescription:
      'Designkoolama.lk case study: a portfolio website rebuilt from WordPress into Next.js, with portfolio filtering and dark/light mode.',
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
    slug: 'agrilink',
    title: 'AgriLink',
    category: 'Web Platforms',
    client: 'Internal project',
    industry: 'Agriculture',
    summary: 'Marketplace connecting farmers, buyers, transporters and admins.',
    description: 'A marketplace platform connecting farmers, buyers, transporters and admins.',
    whatWeDid: [
      'Built a marketplace connecting four user types: farmers, buyers, transporters and admins',
      'Built the frontend with Next.js and TypeScript, and the REST API with Express',
      'Designed the PostgreSQL database with Prisma ORM, hosted on Neon',
      'Deployed the frontend on Vercel',
    ],
    tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://agrilink-iota.vercel.app',
    image: '', // TODO: add screenshot, e.g. 'agrilink.webp'
    imageAlt: 'AgriLink marketplace dashboard',
    featured: true,
    services: ['custom-software'],
  },
  {
    slug: 'muchlogic-pos',
    title: 'MuchLogic POS',
    category: 'POS & Retail',
    client: 'Internal product',
    industry: 'Retail',
    summary: 'Offline-first POS and inventory software for Windows retail businesses.',
    description:
      'MuchLogic POS is our own point of sale and inventory software for Windows retail businesses. It is built offline-first, so shops can keep billing even without an internet connection.',
    whatWeDid: [
      'TODO: confirm what to list here (e.g. product design, development, support)',
    ],
    tech: [], // TODO: confirm tech stack (the design contradicts itself)
    downloadUrl: 'https://apps.microsoft.com/detail/9NH6BKDXQSQW?hl=en-us&gl=US&ocid=pdpshare',
    image: 'muchlogic-pos.webp',
    imageAlt: 'MuchLogic POS till screen showing a bill with items, quantities, discounts and payment options',
    featured: true,
    services: ['pos-systems'],
  },
  {
    slug: 'shanu-ceylon-tours',
    title: 'Shanu Ceylon Tours',
    category: 'Websites',
    client: 'Shanu Ceylon Tours', // TODO: confirm client name
    industry: 'Tourism',
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
    slug: 'doc365',
    title: 'Doc365',
    category: 'Healthcare',
    client: 'TODO: confirm client', // TODO: confirm client
    industry: 'Healthcare',
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
    hidden: true, // TODO: unhide once Doc365 is ready to show
    services: ['custom-software'],
  },
];

/** Visible projects — the single list every page, filter, counter and route uses. */
export const projects: Project[] = allProjects.filter((p) => !p.hidden);

export const featuredProjects = projects.filter((p) => p.featured);

/** True for empty values and anything still marked TODO — such values are never rendered. */
export function isTodo(value: string | undefined): boolean {
  return !value || /TODO/i.test(value);
}

/** Fields of a project that are safe to show (placeholders removed). */
export function publicDetails(project: Project) {
  return {
    client: isTodo(project.client) ? undefined : project.client,
    industry: isTodo(project.industry) ? undefined : project.industry,
    whatWeDid: project.whatWeDid.filter((item) => !isTodo(item)),
    tech: project.tech.filter((item) => !isTodo(item)),
  };
}

/** 1-based position, used for "Case 01" labels */
export function caseNumber(project: Project): string {
  return String(projects.indexOf(project) + 1).padStart(2, '0');
}

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
