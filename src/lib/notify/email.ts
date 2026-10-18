/**
 * Email notification via Resend (REST API, no SDK).
 * Sent from CONTACT_FROM_EMAIL to CONTACT_TO_EMAIL, with reply-to set to the visitor.
 */
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from 'astro:env/server';
import { site } from '../../data/site';
import { buildEmail, type ContactInput } from '../contact';
import type { NotifyResult } from './types';

const RESEND_URL = 'https://api.resend.com/emails';

export async function sendEmailNotification(inquiry: ContactInput): Promise<NotifyResult> {
  const email = buildEmail(inquiry);
  const to = CONTACT_TO_EMAIL || site.email;

  if (!RESEND_API_KEY) {
    if (import.meta.env.DEV) {
      // Local testing without a Resend account: print the email instead of sending it
      console.log(
        [
          '',
          '──────── [contact:email] RESEND_API_KEY not set — email not sent (dev only) ────────',
          `From:     ${CONTACT_FROM_EMAIL}`,
          `To:       ${to}`,
          `Reply-To: ${inquiry.email}`,
          `Subject:  ${email.subject}`,
          '',
          email.text,
          '─────────────────────────────────────────────────────────────────────────────────────',
        ].join('\n'),
      );
      return { status: 'logged' };
    }
    throw new Error('RESEND_API_KEY is not configured');
  }

  const response = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [to],
      reply_to: inquiry.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
  return { status: 'sent' };
}
