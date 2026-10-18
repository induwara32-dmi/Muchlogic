/**
 * WhatsApp notification for new inquiries.
 *
 * Provider: CallMeBot (https://www.callmebot.com/blog/free-api-whatsapp-messages/).
 * All provider-specific code lives in this file. To switch to the official WhatsApp Business
 * Cloud API later, replace `deliver()` (and the env vars it reads) — callers only use
 * `sendWhatsAppNotification(inquiry)`.
 *
 * Env (server-only secrets, optional): CALLMEBOT_API_KEY, WHATSAPP_NOTIFY_PHONE (+94…).
 * When either is missing the notification is skipped (and printed to the console in dev).
 */
import { CALLMEBOT_API_KEY, WHATSAPP_NOTIFY_PHONE } from 'astro:env/server';
import { budgetLabel, serviceTitle, type ContactInput } from '../contact';
import type { NotifyResult } from './types';

const TIMEOUT_MS = 8000;
const MAX_DETAILS = 800;

/** Short plain-text message that reads well on a phone */
export function formatWhatsAppMessage(inquiry: ContactInput): string {
  const details =
    inquiry.details.length > MAX_DETAILS
      ? `${inquiry.details.slice(0, MAX_DETAILS).trimEnd()}…`
      : inquiry.details;

  return [
    '🆕 New MuchLogic inquiry',
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email}`,
    ...(inquiry.company ? [`Company: ${inquiry.company}`] : []),
    `Service: ${serviceTitle(inquiry.service)}`,
    `Budget: ${budgetLabel(inquiry.budget)}`,
    `Details: ${details}`,
  ].join('\n');
}

export async function sendWhatsAppNotification(inquiry: ContactInput): Promise<NotifyResult> {
  const text = formatWhatsAppMessage(inquiry);

  if (!CALLMEBOT_API_KEY || !WHATSAPP_NOTIFY_PHONE) {
    if (import.meta.env.DEV) {
      console.log(
        [
          '',
          '──────── [contact:whatsapp] CallMeBot not configured — message not sent (dev only) ────────',
          `To: ${WHATSAPP_NOTIFY_PHONE || '(WHATSAPP_NOTIFY_PHONE not set)'}`,
          '',
          text,
          '──────────────────────────────────────────────────────────────────────────────────────────',
        ].join('\n'),
      );
    }
    return { status: 'skipped', reason: 'CallMeBot env vars not set' };
  }

  await deliver(WHATSAPP_NOTIFY_PHONE, text, CALLMEBOT_API_KEY);
  return { status: 'sent' };
}

/** CallMeBot: GET https://api.callmebot.com/whatsapp.php?phone=…&text=…&apikey=… */
async function deliver(phone: string, text: string, apiKey: string): Promise<void> {
  const url = new URL('https://api.callmebot.com/whatsapp.php');
  url.searchParams.set('phone', phone);
  url.searchParams.set('text', text);
  url.searchParams.set('apikey', apiKey);

  // Never log `url` — it contains the API key
  const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  const body = await response.text();

  // CallMeBot can answer 200 with an error message in the body, so check both
  if (!response.ok || /error|invalid|not (?:valid|allowed|activated)/i.test(body)) {
    throw new Error(`CallMeBot responded ${response.status}: ${body.replace(/<[^>]+>/g, ' ').trim().slice(0, 200)}`);
  }
}
