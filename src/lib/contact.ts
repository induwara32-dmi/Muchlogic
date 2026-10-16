/**
 * Contact form: server-side schema and email formatting.
 * Field names here must match the `name` attributes in ContactForm.astro.
 */
import { z } from 'astro/zod';
import { services } from '../data/services';
import { budgetOptions, NOT_SURE_SERVICE } from '../data/contact';

export const serviceValues: [string, ...string[]] = [
  NOT_SURE_SERVICE.slug,
  ...services.map((s) => s.slug),
];
export const budgetValues = budgetOptions.map((b) => b.value) as unknown as [string, ...string[]];

/** Honeypot field: hidden from people, often filled in by bots */
export const HONEYPOT_FIELD = 'contact_address';
/** Milliseconds between page load and submit, set by the form script */
export const ELAPSED_FIELD = 'elapsed_ms';
export const MIN_FILL_TIME_MS = 3000;

export const LIMITS = {
  name: { min: 2, max: 100 },
  company: { max: 120 },
  website: { max: 200 },
  details: { min: 10, max: 5000 },
};

const PHONE_PATTERN = /^\+?[0-9][0-9\s\-()]{6,19}$/;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters.`)
    .optional()
    .transform((v) => (v ? v : undefined));

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(LIMITS.name.min, 'Please enter your full name.')
    .max(LIMITS.name.max, 'Please keep your name under 100 characters.'),
  email: z.string().trim().pipe(z.email('Please enter a valid email address.')),
  phone: z
    .string()
    .trim()
    .regex(PHONE_PATTERN, 'Please enter a valid phone number, e.g. +94 7X XXX XXXX.'),
  company: optionalText(LIMITS.company.max),
  website: optionalText(LIMITS.website.max).refine(
    (v) => !v || isLikelyUrl(v),
    'Please enter a valid website, e.g. example.com.',
  ),
  service: z.enum(serviceValues, { error: 'Please choose a service.' }),
  budget: z.enum(budgetValues, { error: 'Please choose a budget range.' }),
  details: z
    .string()
    .trim()
    .min(LIMITS.details.min, 'Please tell us a little more about your project (at least 10 characters).')
    .max(LIMITS.details.max, 'Please keep project details under 5,000 characters.'),
  consent: z.literal('on', { error: 'Please accept the privacy policy so we can reply.' }),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

function isLikelyUrl(value: string): boolean {
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return url.hostname.includes('.');
  } catch {
    return false;
  }
}

/** First error message per field */
export function fieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactInput | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}

const serviceTitle = (slug: string) =>
  services.find((s) => s.slug === slug)?.title ?? NOT_SURE_SERVICE.title;
const budgetLabel = (value: string) => budgetOptions.find((b) => b.value === value)?.label ?? value;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Builds the notification email sent to the MuchLogic inbox */
export function buildEmail(data: ContactInput) {
  const service = serviceTitle(data.service);
  // No line breaks in headers
  const subject = `New inquiry: ${service} – ${data.name}`.replace(/[\r\n]+/g, ' ');

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Company', data.company ?? '—'],
    ['Website', data.website ?? '—'],
    ['Service', service],
    ['Budget', budgetLabel(data.budget)],
  ];

  const text = [
    subject,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Project details:',
    data.details,
    '',
    '— Sent from the contact form on muchlogic.com. Reply to this email to answer the sender directly.',
  ].join('\n');

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f7f7f8;font-family:Arial,Helvetica,sans-serif;color:#111827">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px">
<tr><td style="padding:24px 28px">
<h1 style="margin:0 0 16px;font-size:20px">${escapeHtml(subject)}</h1>
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:15px;line-height:1.5">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#4b5563;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
  )
  .join('\n')}
</table>
<h2 style="margin:20px 0 8px;font-size:16px">Project details</h2>
<p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(data.details)}</p>
<p style="margin:24px 0 0;font-size:13px;color:#6b7280">Sent from the contact form on muchlogic.com. Reply to this email to answer the sender directly.</p>
</td></tr></table></body></html>`;

  return { subject, text, html };
}
