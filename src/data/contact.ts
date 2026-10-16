import type { ProcessStep } from './process';

/** Small tags under the Contact hero */
export const contactHeroTags = ['Fast reply', 'Expert advice', 'Clear next steps'];

/** "What happens next" on the Contact page (rendered with ProcessSteps) */
export const nextSteps: ProcessStep[] = [
  {
    title: 'We review your inquiry',
    description: 'We read every message and get back to you within 1 business day.',
  },
  {
    title: 'Discovery call',
    description: 'A short call to understand your goals, your workflow and what you need.',
  },
  {
    title: 'Proposal and quote',
    description: 'A clear written scope, timeline and quote, so you know what to expect.',
  },
  {
    title: 'Build and launch',
    description: 'We build with regular demos, launch, and keep supporting you afterwards.',
  },
];

/**
 * Budget options in the contact form.
 * TODO: adjust the LKR ranges if needed. Keep `value` stable — it's what the API accepts.
 */
export const budgetOptions = [
  { value: 'under-150k', label: 'Under LKR 150,000' },
  { value: '150k-500k', label: 'LKR 150,000–500,000' },
  { value: '500k-1.5m', label: 'LKR 500,000–1.5M' },
  { value: '1.5m-plus', label: 'LKR 1.5M+' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

/** Extra option at the end of the service select */
export const NOT_SURE_SERVICE = { slug: 'not-sure', title: 'Not sure yet' } as const;
