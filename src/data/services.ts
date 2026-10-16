import type { ProjectCategory } from './projects';

export type ServiceIcon = 'code' | 'monitor' | 'sparkles' | 'globe' | 'smartphone' | 'megaphone';

export interface Service {
  /** Used for /services#<slug> and /contact?service=<slug> */
  slug: string;
  title: string;
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
    summary: 'Software made for the way your business actually works.',
    description:
      'When off-the-shelf tools don’t fit, we design and build software around your processes, from internal dashboards to full business platforms.',
    bullets: [
      'Web-based business systems and dashboards',
      'Integrations with the tools you already use',
      'Clean, documented code you own',
    ],
    icon: 'code',
    ctaLabel: 'Discuss this service',
    workCategory: 'Web Platforms',
    imageAlt: 'Illustration of a custom business dashboard',
  },
  {
    slug: 'pos-systems',
    title: 'POS Systems',
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

/** Technologies we actually use. TODO: confirm this list. */
export const technologies: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Astro',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Vercel',
];
