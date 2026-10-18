/**
 * Company details — single source of truth for header, footer, contact page, SEO and JSON-LD.
 * Anything marked TODO is a placeholder and must be confirmed before launch.
 */

export interface SocialLink {
  label: string;
  icon: 'linkedin' | 'facebook' | 'instagram';
  /** Leave empty until the real URL exists — empty links are not rendered. */
  url: string;
}

export const site = {
  name: 'MuchLogic',
  legalName: 'MuchLogic', // TODO: confirm registered legal name (e.g. "MuchLogic (Pvt) Ltd")
  url: 'https://muchlogic.com',
  tagline: 'Software, POS systems and AI solutions for modern businesses.',
  description:
    'MuchLogic is a Sri Lankan software company building POS systems, custom software, websites, mobile apps and AI automation for growing businesses.',

  location: {
    country: 'Sri Lanka',
    countryCode: 'LK',
    city: '', // TODO: confirm city
    streetAddress: '', // TODO: confirm address (or leave empty to show "Based in Sri Lanka")
  },

  email: 'hello@muchlogic.com', // TODO: confirm

  /** One number for calls and WhatsApp — every link and label is derived from this. */
  phone: {
    display: '+94 72 123 3296',
    e164: '+94721233296',
  },

  whatsapp: {
    /** Pre-filled message when someone opens the WhatsApp chat */
    message: 'Hi MuchLogic, I’d like to talk about a project.',
  },

  social: [
    { label: 'LinkedIn', icon: 'linkedin', url: '' }, // TODO: LinkedIn company page URL
    { label: 'Facebook', icon: 'facebook', url: '' }, // TODO: Facebook page URL
    { label: 'Instagram', icon: 'instagram', url: '' }, // TODO: Instagram profile URL
  ] satisfies SocialLink[],
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
] as const;

/** True while a value still contains placeholder characters (e.g. "+94 7X XXX XXXX"). */
export function isPlaceholder(value: string): boolean {
  // "XX" is case-sensitive so real values like "maxx@…" are not treated as placeholders
  return value.trim() === '' || /X{2,}/.test(value) || /TODO/i.test(value);
}

export const locationLabel = site.location.city
  ? `${site.location.city}, ${site.location.country}`
  : site.location.country;

/** tel: link — opens the phone's call app */
export const phoneHref = `tel:${site.phone.e164}`;
/** wa.me needs digits only, country code first */
export const whatsappNumber = site.phone.e164.replace(/\D/g, '');
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(site.whatsapp.message)}`;
export const whatsappLabel = `WhatsApp ${site.phone.display}`;
export const emailHref = `mailto:${site.email}`;
export const activeSocials = site.social.filter((s) => s.url !== '');
