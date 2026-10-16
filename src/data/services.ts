import {
  siAstro,
  siExpress,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from 'simple-icons';
import { categorySlug, projectsInCategory, type ProjectCategory } from './projects';

export type ServiceIcon = 'code' | 'monitor' | 'sparkles' | 'globe' | 'smartphone' | 'megaphone';

export interface Service {
  /** Used for /services#<slug> and /contact?service=<slug> */
  slug: string;
  title: string;
  /** Section headline on the Services page */
  headline: string;
  /** Short text for cards */
  summary: string;
  /** Longer intro for the Services page section */
  description: string;
  bullets: [string, string, string];
  icon: ServiceIcon;
  /** Primary button label on the Services page */
  ctaLabel: string;
  /** Projects in this category power the "See our work" link (hidden when there are none). */
  workCategory?: ProjectCategory;
  /**
   * Optional image file name in src/assets/services/ (e.g. "pos-systems.webp").
   * Falls back to a neutral placeholder when empty or missing.
   */
  image?: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software',
    headline: 'Software tailored to the way you work.',
    summary: 'Software made for the way your business actually works.',
    description:
      'When off-the-shelf tools don’t fit, we design and build software around your processes, from internal dashboards to full business platforms.',
    bullets: [
      'Web-based business systems and dashboards',
      'Integrations with the tools you already use',
      'Clean, maintainable and documented code',
    ],
    icon: 'code',
    ctaLabel: 'Discuss this service',
    workCategory: 'Web Platforms',
    imageAlt: 'Illustration of a custom business dashboard',
  },
  {
    slug: 'pos-systems',
    title: 'POS Systems',
    headline: 'A POS that keeps selling, even offline.',
    summary: 'MuchLogic POS: offline-first sales and inventory for retail shops.',
    description:
      'MuchLogic POS is our own point of sale and inventory software for Windows retail businesses. It keeps selling even when the internet goes down.',
    bullets: [
      'Fast billing that works offline',
      'Stock, purchasing and supplier tracking',
      'Sales reports to help you make decisions',
    ],
    icon: 'monitor',
    ctaLabel: 'Book a demo',
    workCategory: 'POS & Retail',
    imageAlt: 'Illustration of a point of sale screen on a Windows computer',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    headline: 'Put repetitive work on autopilot.',
    summary: 'Chatbots, smart tools and automations that save hours every week.',
    description:
      'We find the repetitive work in your business and automate it, using AI where it genuinely helps and simple automation where it doesn’t.',
    bullets: [
      'Chatbots and assistants trained on your content',
      'Workflow automation between your apps',
      'Document and data processing with AI',
    ],
    icon: 'sparkles',
    ctaLabel: 'Discuss this service',
    workCategory: 'AI & Automation',
    imageAlt: 'Illustration of an automated workflow',
  },
  {
    slug: 'web-ecommerce',
    title: 'Web & E-commerce',
    headline: 'A digital storefront that converts.',
    summary: 'Fast websites and online stores that turn visitors into customers.',
    description:
      'Modern, fast and search-friendly websites and online stores that are easy for you to update and easy for customers to use.',
    bullets: [
      'Company websites and landing pages',
      'Online stores with payments and delivery',
      'SEO-friendly, fast and mobile-first',
    ],
    icon: 'globe',
    ctaLabel: 'Discuss this service',
    workCategory: 'Websites',
    imageAlt: 'Illustration of a responsive website on desktop and mobile',
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    headline: 'Your business in every pocket.',
    summary: 'Android and iOS apps your customers will enjoy using.',
    description:
      'Cross-platform mobile apps for your customers or your team, connected to the systems you already run.',
    bullets: [
      'Android and iOS from one codebase',
      'Connected to your existing systems',
      'Help with app store publishing',
    ],
    icon: 'smartphone',
    ctaLabel: 'Discuss this service',
    workCategory: 'Mobile Apps',
    imageAlt: 'Illustration of a mobile app on a phone',
  },
  {
    slug: 'brand-marketing',
    title: 'Brand & Digital Marketing',
    headline: 'A brand people remember.',
    summary: 'Logos, brand identity, SEO and campaigns that bring in customers.',
    description:
      'A clear brand and a steady online presence, so the right customers can find you and trust you.',
    bullets: [
      'Logo and brand identity',
      'Search engine optimisation (SEO)',
      'Social media and online campaigns',
    ],
    icon: 'megaphone',
    ctaLabel: 'Discuss this service',
    imageAlt: 'Illustration of brand and marketing materials',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** "See our work" target for a service, or undefined while it has no matching projects. */
export function serviceWorkHref(service: Service): string | undefined {
  if (!service.workCategory || projectsInCategory(service.workCategory).length === 0) return undefined;
  return `/work?category=${categorySlug(service.workCategory)}`;
}

/** Small tags under the Services hero */
export const serviceHeroTags = ['Plan to launch', 'Design and development', 'Support after launch'];

export interface ServicePillar {
  title: string;
  description: string;
  icon: 'compass' | 'code' | 'trending-up';
}

/** "One team for planning, building and growing" cards on the Services page */
export const servicePillars: ServicePillar[] = [
  {
    title: 'Plan',
    description:
      'We map your goals, users and workflow, then agree a clear scope, roadmap and architecture.',
    icon: 'compass',
  },
  {
    title: 'Build',
    description:
      'Clean, tested code on a modern stack, with regular demos so you see progress as it happens.',
    icon: 'code',
  },
  {
    title: 'Grow',
    description:
      'Support, updates and marketing after launch, so your software keeps improving with your business.',
    icon: 'trending-up',
  },
];

export interface Technology {
  name: string;
  /** Logo from simple-icons; omit when there is none and only the name is shown */
  icon?: SimpleIcon;
}

/** Technologies we use (confirmed). TODO: add the MuchLogic POS tech once confirmed. */
export const technologies: Technology[] = [
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Astro', icon: siAstro },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express', icon: siExpress },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Prisma', icon: siPrisma },
  { name: 'Vercel', icon: siVercel },
];

/** Logo for a technology name (e.g. from a project's tech list), if we have one */
export function techIcon(name: string): SimpleIcon | undefined {
  return technologies.find((t) => t.name.toLowerCase() === name.toLowerCase())?.icon;
}
