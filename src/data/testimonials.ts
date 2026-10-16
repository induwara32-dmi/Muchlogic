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

export interface Rating {
  /** e.g. '4.8' */
  value: string;
  count: number;
  sourceUrl?: string;
}

/**
 * TODO: only set this from a real, public source (e.g. your Google Business Profile).
 * The rating card is hidden while this is null.
 *
 * Example: { value: '4.8', count: 12, sourceUrl: 'https://g.page/r/...' }
 */
export const rating: Rating | null = null;
