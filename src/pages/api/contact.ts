/**
 * POST /api/contact — the only on-demand route.
 * - Without JS: normal form POST → 303 redirect to /contact/thank-you, or back to /contact#<error>
 * - With JS (Accept: application/json): JSON { ok, errors?, message? }
 */
import type { APIRoute } from 'astro';
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from 'astro:env/server';
import { site } from '../../data/site';
import {
  contactSchema,
  fieldErrors,
  buildEmail,
  HONEYPOT_FIELD,
  ELAPSED_FIELD,
  MIN_FILL_TIME_MS,
  type FieldErrors,
} from '../../lib/contact';

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

  const data = parsed.data;
  const email = buildEmail(data);
  const to = CONTACT_TO_EMAIL || site.email;

  if (!RESEND_API_KEY) {
    if (import.meta.env.DEV) {
      // Local testing without a Resend account: print the email instead of sending it
      console.log(
        [
          '',
          '──────── [contact] RESEND_API_KEY not set — email not sent (dev only) ────────',
          `From:     ${CONTACT_FROM_EMAIL}`,
          `To:       ${to}`,
          `Reply-To: ${data.email}`,
          `Subject:  ${email.subject}`,
          '',
          email.text,
          '──────────────────────────────────────────────────────────────────────────────',
        ].join('\n'),
      );
      return success();
    }
    console.error('[contact] RESEND_API_KEY is not configured');
    return failure('send', 500);
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [to],
        reply_to: data.email,
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    });
    if (!response.ok) {
      console.error(`[contact] Resend responded ${response.status}: ${await response.text()}`);
      return failure('send', 502);
    }
  } catch (error) {
    console.error('[contact] Resend request failed', error);
    return failure('send', 502);
  }

  return success();
};

// Anything other than POST (e.g. someone opening /api/contact) goes back to the form
export const ALL: APIRoute = ({ redirect }) => redirect('/contact', 303);
