/**
 * POST /api/contact — the only on-demand route.
 * - Without JS: normal form POST → 303 redirect to /contact/thank-you, or back to /contact#<error>
 * - With JS (Accept: application/json): JSON { ok, errors?, message? }
 */
import type { APIRoute } from 'astro';
import {
  contactSchema,
  fieldErrors,
  HONEYPOT_FIELD,
  ELAPSED_FIELD,
  MIN_FILL_TIME_MS,
  type FieldErrors,
} from '../../lib/contact';
import { sendEmailNotification } from '../../lib/notify/email';
import { sendWhatsAppNotification } from '../../lib/notify/whatsapp';
import type { NotifyResult } from '../../lib/notify/types';

export const prerender = false;

type ErrorCode = 'invalid' | 'too-fast' | 'send';

const MESSAGES: Record<ErrorCode, string> = {
  invalid: 'Some details need fixing. Please check the highlighted fields.',
  'too-fast': 'That was quick! Please wait a moment and send the form again.',
  send: 'Sorry, we couldn’t send your message. Please try again, or email us directly.',
};

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;

  const success = () => (wantsJson ? Response.json({ ok: true }) : redirect('/contact/thank-you', 303));
  const failure = (code: ErrorCode, status: number, errors?: FieldErrors) =>
    wantsJson
      ? Response.json({ ok: false, code, message: MESSAGES[code], errors }, { status })
      : redirect(`/contact#error-${code}`, 303);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return failure('invalid', 400);
  }

  // Spam: honeypot filled → pretend it worked so bots learn nothing
  if (String(form.get(HONEYPOT_FIELD) ?? '').trim() !== '') {
    console.warn('[contact] honeypot triggered — submission dropped');
    return success();
  }

  // Spam: submitted too soon after page load (only measurable when JS ran)
  const elapsed = Number(form.get(ELAPSED_FIELD));
  if (form.has(ELAPSED_FIELD) && Number.isFinite(elapsed) && elapsed < MIN_FILL_TIME_MS) {
    console.warn(`[contact] submitted after ${elapsed}ms — rejected as too fast`);
    return failure('too-fast', 429);
  }

  const raw = Object.fromEntries(
    ['name', 'email', 'phone', 'company', 'website', 'service', 'budget', 'details', 'consent'].map(
      (key) => [key, form.get(key) ?? undefined],
    ),
  );
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return failure('invalid', 422, fieldErrors(parsed.error));
  }

  // Email (Resend) and WhatsApp (CallMeBot) in parallel; one delivered channel is enough
  const channels = ['email', 'whatsapp'] as const;
  const results = await Promise.allSettled([
    sendEmailNotification(parsed.data),
    sendWhatsAppNotification(parsed.data),
  ]);

  let delivered = 0;
  results.forEach((result, i) => {
    const channel = channels[i];
    if (result.status === 'rejected') {
      console.error(`[contact] ${channel} notification failed:`, result.reason);
      return;
    }
    const outcome: NotifyResult = result.value;
    if (outcome.status === 'sent' || outcome.status === 'logged') delivered++;
    else if (import.meta.env.DEV) console.info(`[contact] ${channel} skipped: ${outcome.reason}`);
  });

  if (delivered === 0) {
    console.error('[contact] inquiry could not be delivered on any channel');
    return failure('send', 502);
  }
  return success();
};

// Anything other than POST (e.g. someone opening /api/contact) goes back to the form
export const ALL: APIRoute = ({ redirect }) => redirect('/contact', 303);
