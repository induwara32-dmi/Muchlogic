/**
 * WhatsApp click-to-chat (wa.me) for the contact form — runs in the browser, no API key.
 * The visitor's own WhatsApp opens with their details pre-filled; they press Send.
 * (Server-side WhatsApp notifications via CallMeBot live in lib/notify/whatsapp.ts.)
 */
import { site, whatsappNumber } from '../data/site';

export interface ChatDetails {
  name?: string;
  /** Human-readable service, e.g. "POS Systems" */
  service?: string;
  /** Human-readable budget, e.g. "LKR 150,000–500,000" */
  budget?: string;
  details?: string;
}

/** sessionStorage key: details handed from the form to the thank-you page (removed once read) */
export const CHAT_STORAGE_KEY = 'muchlogic:whatsapp-inquiry';

const MAX_DETAILS = 500;

/** Pre-filled message; empty fields are left out. No details → the generic site message. */
export function chatMessage(details?: ChatDetails | null): string {
  const lines = [
    ['Name', details?.name],
    ['Service', details?.service],
    ['Budget', details?.budget],
    ['Details', truncate(details?.details)],
  ]
    .filter((row): row is [string, string] => Boolean(row[1]?.trim()))
    .map(([label, value]) => `${label}: ${value.trim()}`);

  if (lines.length === 0) return site.whatsapp.message;
  return ['Hi MuchLogic, I just sent an inquiry from your website.', ...lines].join('\n');
}

/** https://wa.me/<number>?text=<message> */
export function chatUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function truncate(text: string | undefined): string | undefined {
  const value = text?.trim();
  if (!value || value.length <= MAX_DETAILS) return value;
  return `${value.slice(0, MAX_DETAILS).trimEnd()}…`;
}
