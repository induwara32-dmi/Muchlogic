export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional link to the original review (e.g. Google) */
  sourceUrl?: string;
}

/**
 * TODO: add real testimonials only, with the client's permission.
 * The testimonials section stays hidden while this is empty.
 *
 * Example:
 * {
 *   quote: 'Exact words from the client.',
 *   name: 'Client name',
 *   role: 'Owner',
 *   company: 'Company name',
 *   sourceUrl: 'https://g.page/r/...',
 * },
 */
export const testimonials: Testimonial[] = [];
