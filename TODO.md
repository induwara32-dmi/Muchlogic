# Launch checklist

Everything that still needs real content or a decision before muchlogic.com goes live, grouped by file.
Tick items off as you go. Placeholder values marked `TODO` are hidden on the site automatically,
so nothing broken shows while you work through this list. It just stays missing.

**Must do before launch** items are marked 🔴. The rest can follow later.

---

## Accounts and setup (outside the code)

- [ ] 🔴 **Resend:** verify `muchlogic.com` (Resend → Domains) and create an API key. See README → *Set up Resend*.
- [ ] 🔴 **Vercel environment variables:** set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (e.g. `website@muchlogic.com`).
- [ ] **WhatsApp notifications (optional):** activate CallMeBot and set `CALLMEBOT_API_KEY` and `WHATSAPP_NOTIFY_PHONE` in Vercel.
- [ ] 🔴 **Domain:** add `muchlogic.com` + `www.muchlogic.com` in Vercel and update DNS.
- [ ] 🔴 **After the first deploy:**
  - [ ] send a test inquiry and confirm the email (and WhatsApp) arrive;
  - [ ] run `curl -I https://muchlogic.com` and confirm the security headers from `vercel.json` are present.
- [ ] Submit `https://muchlogic.com/sitemap-index.xml` in Google Search Console.

---

## `src/data/site.ts`

- [ ] 🔴 `legalName`: registered company name (e.g. “MuchLogic (Pvt) Ltd”). Used in JSON-LD; add it to the legal pages too.
- [ ] 🔴 `email`: confirm `hello@muchlogic.com` exists and is monitored.
- [ ] `location.city`: city, if you want it shown (otherwise the site says “Based in Sri Lanka”).
- [ ] `location.streetAddress`: only if you want a public address.
- [ ] `social`: LinkedIn, Facebook and Instagram URLs. Empty links are hidden. The LinkedIn URL also turns on the LinkedIn card on /contact.

## `src/data/projects.ts`

- [ ] **MuchLogic POS:**
  - [ ] `whatWeDid`: 3–4 bullets (product design, development, support…);
  - [ ] `tech`: confirm the tech stack.
- [ ] **Designkoolama.lk:** `image`: add a screenshot to `src/assets/projects/`.
- [ ] **Shanu Ceylon Tours:**
  - [ ] confirm the client name, description and status;
  - [ ] add `whatWeDid` and `tech`;
  - [ ] enable `liveUrl` once the site is live;
  - [ ] add a screenshot.
- [ ] **AgriLink:** `image`: add a screenshot.
- [ ] **Doc365** (currently `hidden: true`, not on the site):
  - [ ] confirm the client, `whatWeDid` and `tech`;
  - [ ] add a screenshot;
  - [ ] then remove `hidden: true`.

## `src/data/team.ts`

- [ ] **Thisara C Prasanga:**
  - [ ] complete `role` (e.g. “Co-founder & CTO”);
  - [ ] add a one-line `bio`.
- [ ] **Induwara Rajapaksha:**
  - [ ] complete `role` (e.g. “Co-founder & CEO”);
  - [ ] add a one-line `bio`.
- [ ] Both founders’ personal phone numbers and emails are public (About page and header). Switch to company numbers and addresses if you prefer.

## `src/data/services.ts`

- [ ] Technologies list: add the MuchLogic POS tech once confirmed.
- [ ] Review the service headlines, descriptions and bullet points (written as a starting point).
- [ ] Optional: real images for the six services in `src/assets/services/`. Neutral illustrations are shown until then.

## `src/data/contact.ts`

- [ ] Budget options: confirm or adjust the LKR ranges. Keep each `value` unchanged; only edit `label`.

## `src/data/faqs.ts`

- [ ] Confirm the wording on **timelines** (“How long does a typical project take?”).
- [ ] Confirm the **pricing approach** (“How much does a project cost?”).
- [ ] Confirm the **support/maintenance** terms (“Do you provide support after launch?”).

## `src/data/stats.ts`, `testimonials.ts`, `clientLogos.ts`

These sections are hidden until they have data. Only add real, verifiable content:

- [ ] `stats.ts`: real numbers (e.g. projects delivered).
- [ ] `testimonials.ts`: real quotes from clients who agreed to be quoted, and optionally a `rating` from a public source such as Google reviews.
- [ ] `clientLogos.ts`: logos of real clients who agreed to be listed (files in `src/assets/clients/`).

## `src/pages/privacy.astro` and `src/pages/terms.astro`

- [ ] 🔴 **Have both reviewed** before launch. They were written with Sri Lanka’s PDPA (No. 9 of 2022) in mind, but they are not legal advice.
- [ ] Privacy:
  - [ ] confirm the **retention period** (currently 24 months);
  - [ ] add the registered company name and address;
  - [ ] decide whether you need to name a Data Protection Officer.
- [ ] Update the `updated` date in each file whenever the text changes.

## Brand assets

- [ ] `public/og-default.png` (source: `design/brand/og-default.svg`): replace with a designed share image (1200×630).
- [ ] `public/favicon.svg`: replace with a true vector version once you have an SVG logo (it currently contains a PNG).
- [ ] `src/assets/placeholders/project.svg`: shown for any project without a screenshot. Add the screenshots above to retire it.

---

## Later: Content Security Policy (optional hardening)

`vercel.json` already sets `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`. A strict
**Content-Security-Policy** was skipped for now. If you add one later, it must allow:

- the small **inline scripts** Astro adds (the `js` class switch in `BaseLayout`, the JSON-LD block, and the page scripts),
  for example via Astro’s experimental CSP support, which generates hashes;
- `connect-src 'self'` for the contact form (`/api/contact`). Resend and CallMeBot are called from the server, not the browser.
- `img-src 'self' data:` and `font-src 'self'`. Everything else is self-hosted, with no third-party scripts or fonts.
- If you add analytics, a chat widget or embedded maps later, their domains need to be added too.
