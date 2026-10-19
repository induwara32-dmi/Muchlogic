# MuchLogic website

The marketing website for **MuchLogic** ([muchlogic.com](https://muchlogic.com)), a Sri Lankan software company that builds custom software, websites, web platforms, AI automation and mobile apps, and makes MuchLogic POS.

The site is fast and mostly static: every page is built ahead of time as plain HTML. The only part that runs on a server is the contact form, which sends each inquiry by email (Resend) and to WhatsApp (CallMeBot).

> **Before launch:** work through [TODO.md](TODO.md). It lists every placeholder that still needs real content.

---

## Contents

1. [Tech stack](#tech-stack)
2. [Folder structure](#folder-structure)
3. [Run it on your computer](#run-it-on-your-computer)
4. [Edit the content](#edit-the-content)
5. [Add a project, team photo or screenshot](#add-a-project-team-photo-or-screenshot)
6. [Environment variables](#environment-variables)
7. [Set up Resend (email)](#set-up-resend-email)
8. [Set up WhatsApp notifications (optional)](#set-up-whatsapp-notifications-optional)
9. [Deploy on Vercel with muchlogic.com](#deploy-on-vercel-with-muchlogiccom)
10. [Quality checks](#quality-checks)
11. [Brand assets](#brand-assets)

---

## Tech stack

| What | Used for |
|---|---|
| [Astro 7](https://astro.build) | Builds the pages. Almost everything is static HTML. |
| TypeScript (strict) | Catches mistakes in the code and data files. |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling. Colours, fonts and sizes live in one place (`src/styles/global.css`). |
| Inter + Plus Jakarta Sans | Self-hosted fonts (no Google Fonts requests). |
| [simple-icons](https://simpleicons.org) | Technology logos on the Services page. |
| `@astrojs/sitemap` | Creates `sitemap-index.xml` automatically. |
| `@astrojs/vercel` | Deploys to Vercel. Runs the contact form API as a serverless function. |
| [Resend](https://resend.com) | Sends contact form emails. |
| [CallMeBot](https://www.callmebot.com) | Sends contact form notifications to WhatsApp (optional). |

There is no React and no other front-end framework. The few interactive parts (mobile menu, project filters, contact form) use small scripts inside Astro components.

---

## Folder structure

```
muchlogic/
├── public/                 Files served as-is: favicons, share image, robots.txt, site.webmanifest
├── design/                 Design references (not deployed) and design/brand/og-default.svg
├── scripts/
│   └── check-text.mjs      Runs after every build; fails it if words are glued together
├── src/
│   ├── assets/             Images that Astro optimises (logos, screenshots, team photos)
│   │   ├── brand/          Logo files
│   │   ├── projects/       Project screenshots
│   │   ├── services/       (optional) Service images
│   │   ├── team/           Team photos
│   │   └── placeholders/   Neutral images shown until real ones are added
│   ├── components/
│   │   ├── layout/         Header, Footer, SEO tags, JSON-LD
│   │   ├── sections/       Page sections (hero, cards, form, FAQ, process steps…)
│   │   └── ui/             Small building blocks (Button, Icon, Badge, Section…)
│   ├── data/               ⭐ ALL website content lives here (see below)
│   ├── layouts/
│   │   └── BaseLayout.astro  The page shell used by every page
│   ├── lib/                Helpers: images, contact form validation, email/WhatsApp sending
│   ├── pages/              One file per page (the file name is the URL)
│   │   ├── api/contact.ts  The contact form endpoint (the only server code)
│   │   ├── contact/        /contact and /contact/thank-you
│   │   ├── work/           /work and one page per project (/work/<slug>)
│   │   └── …               index (home), services, about, privacy, terms, 404
│   └── styles/global.css   Design tokens (colours, fonts, radii) and base styles
├── .env.example            Template for your secret keys
├── astro.config.mjs        Astro settings (site URL, sitemap, env variables)
├── vercel.json             Security headers for Vercel
└── TODO.md                 Launch checklist
```

---

## Run it on your computer

You need **[Node.js](https://nodejs.org) 22.22 or newer**. Check with `node --version`.

```sh
# 1. Install everything (only needed once, or after pulling new changes)
npm install

# 2. Optional: create your local secrets file for the contact form
cp .env.example .env

# 3. Start the development server
npm run dev
```

Open **http://localhost:4321**. The page reloads by itself when you save a file.

Other useful commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the production site into `dist/` and runs the text check |
| `npx astro check` | Checks the TypeScript and Astro files for errors |
| `npm run check` | Runs both of the above |

**Testing the contact form without any keys:** leave `RESEND_API_KEY` and the CallMeBot keys empty. In `npm run dev`, a submitted form prints the email and the WhatsApp message in your terminal instead of sending them, then goes to the thank-you page.

---

## Edit the content

All text and company details live in **`src/data/`**. You rarely need to touch the page files.

| File | Controls |
|---|---|
| `site.ts` | Company name, email, **phone/WhatsApp number**, location, social links, menu links. Used by the header, footer, contact page, SEO and JSON-LD. |
| `services.ts` | The six services (titles, text, bullet points, buttons), the Plan/Build/Grow cards and the technology list on the Services page. |
| `projects.ts` | Every project on the home page, `/work` and the case study pages. |
| `team.ts` | The founders on the About page (name, role, bio, photo, LinkedIn, email, phone). |
| `faqs.ts` | The questions and answers on the Contact page. |
| `contact.ts` | The contact page steps (“What happens next”) and the **budget options** in the form. |
| `process.ts` | The 4-step process shown on Home and About. |
| `home.ts` | The “Why MuchLogic” cards on the home page. |
| `about.ts` | The mission cards and “Why businesses choose MuchLogic” on the About page. |
| `stats.ts` | Numbers row on the home page. **Empty = hidden.** Only add real, checkable numbers. |
| `testimonials.ts` | Client quotes on the Home page. Only entries with `approved: true` show; **none approved = hidden.** Set `approved` only after the client confirms their wording. |
| `clientLogos.ts` | “Trusted by” logo strip. **Empty = hidden.** Only real clients who agreed. |

Tips:

- Anything marked `TODO` in these files is a placeholder. Values that still contain `TODO` (or `XX` in phone numbers) are **never shown** on the site, so it’s safe to leave them while you collect the real details.
- Use typographic apostrophes and dashes in text: `’` (not `'`) and `–` for ranges.
- **Colours and fonts** are in `src/styles/global.css` under `@theme`. Change `--color-primary` to rebrand the orange everywhere.
- The **privacy policy** and **terms** are in `src/pages/privacy.astro` and `src/pages/terms.astro`. Update the `updated` date at the top of the file when you change them.

---

## Add a project, team photo or screenshot

### Add a project

1. Open `src/data/projects.ts` and copy an existing project block.
2. Give it a unique `slug` (lowercase, dashes only, e.g. `colombo-bakery`). This becomes the URL `/work/colombo-bakery`.
3. Fill in the fields. Use one of the existing `category` values (Websites, Web Platforms, AI & Automation, POS & Retail, Mobile Apps, Healthcare). The order of `projects` and `projectCategories` in the file is the order shown on the site.
4. Optional fields: `liveUrl` (adds a “Visit live site” button), `prototype: true` (shows a Prototype badge), `featured: true` (shows it on the home page; keep it to 3 featured projects), `hidden: true` (keeps it off the site completely until it’s ready).

The project automatically appears on `/work`, in the filters and counter, in the previous/next links and in the sitemap. A new category gets its own filter button automatically.

### Add a project screenshot

1. Save the screenshot as **WebP or PNG**, ideally **1600×1000 px** (16:10).
2. Put it in `src/assets/projects/`, e.g. `src/assets/projects/colombo-bakery.webp`.
3. In `projects.ts`, set `image: 'colombo-bakery.webp'` and describe it in `imageAlt` (what someone would see, e.g. “Colombo Bakery online shop homepage”).

Astro resizes and compresses it automatically. A real screenshot also becomes that page’s share image on social media.

### Add a team photo

1. Use a square photo, at least **400×400 px**, saved as WebP or JPG.
2. Put it in `src/assets/team/`, e.g. `src/assets/team/thisara.webp`.
3. In `team.ts`, set `photo: 'thisara.webp'` for that person.

Without a photo, the card shows the person’s initials instead.

### Add a service image

Put an image in `src/assets/services/` (e.g. `pos-systems.webp`, about 1200×1000 px) and set `image: 'pos-systems.webp'` on that service in `services.ts`. Until then, a neutral illustration is shown.

---

## Environment variables

Secrets go in a file called **`.env`** in the project folder (locally) and in **Vercel → Project → Settings → Environment Variables** (live site). They are server-only: they never reach visitors’ browsers. The `.env` file is ignored by Git, so it is never committed.

| Variable | Required? | What it is |
|---|---|---|
| `RESEND_API_KEY` | Yes, for email | Your Resend API key (starts with `re_`). |
| `CONTACT_TO_EMAIL` | Recommended | The inbox that receives inquiries. Defaults to the email in `site.ts`. |
| `CONTACT_FROM_EMAIL` | Yes, for production | The sender address, e.g. `website@muchlogic.com`. Must be on a domain verified in Resend. Defaults to `onboarding@resend.dev` (testing only). |
| `CALLMEBOT_API_KEY` | Optional | Your CallMeBot key for WhatsApp notifications. |
| `WHATSAPP_NOTIFY_PHONE` | Optional | The WhatsApp number that receives notifications, e.g. `+94721233296`. |

**How sending works:** each inquiry is sent by email and WhatsApp at the same time. If at least one of them works, the visitor sees the thank-you page. If both fail, they see an error and can try again. Failures are logged in Vercel (Project → Logs).

---

## Set up Resend (email)

1. Create a free account at [resend.com](https://resend.com).
2. **Verify the domain:** Resend → Domains → Add domain → `muchlogic.com`. Resend shows a few DNS records (TXT/MX). Add them where your domain’s DNS is managed, then click Verify. This can take a few minutes to a few hours.
3. **Create an API key:** Resend → API Keys → Create (permission: “Sending access”). Copy it; it’s only shown once.
4. Set the variables (locally in `.env`, and in Vercel):
   ```
   RESEND_API_KEY=re_...
   CONTACT_TO_EMAIL=hello@muchlogic.com
   CONTACT_FROM_EMAIL=website@muchlogic.com
   ```
5. Send a test from the live contact form.

> ⚠️ Until `muchlogic.com` is verified, you can only use `onboarding@resend.dev` as the sender, and Resend will only deliver to the email address of your Resend account. **Verify the domain before launch.**

Replies are easy: each email has **Reply-To** set to the visitor, so pressing Reply answers them directly.

## Set up WhatsApp notifications (optional)

CallMeBot is a free third-party service that forwards a message to your WhatsApp.

1. Follow the steps at [callmebot.com/blog/free-api-whatsapp-messages](https://www.callmebot.com/blog/free-api-whatsapp-messages/): add their number to your contacts and send the activation message from the WhatsApp number that should receive notifications.
2. They reply with your API key.
3. Set `CALLMEBOT_API_KEY` and `WHATSAPP_NOTIFY_PHONE` (with `+94…`) in `.env` and in Vercel.

Leave them empty to turn WhatsApp notifications off. To switch to the official WhatsApp Business Cloud API later, you only need to change `src/lib/notify/whatsapp.ts`.

---

## Deploy on Vercel with muchlogic.com

### 1. Put the code on GitHub

Create a private repository and push this project to it.

### 2. Import it into Vercel

1. Sign in at [vercel.com](https://vercel.com) → **Add New… → Project** → import the GitHub repository.
2. Vercel detects **Astro** automatically. Keep the default build command (`npm run build`).
3. Before the first deploy, open **Environment Variables** and add the variables from the table above (at least `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`).
4. Click **Deploy**. You’ll get a preview address like `muchlogic.vercel.app`. Check the site there first.

Every push to the main branch deploys automatically. Other branches get their own preview URLs.

### 3. Connect muchlogic.com

1. Vercel → your project → **Settings → Domains** → add `muchlogic.com` and `www.muchlogic.com`.
2. Vercel shows the DNS records to add (an **A** record for `muchlogic.com` and a **CNAME** for `www`). Add them at your domain registrar or DNS provider.
3. Choose `muchlogic.com` as the primary domain, so `www` redirects to it.
4. HTTPS certificates are created automatically once DNS is working.

The site address is set in `astro.config.mjs` (`site: 'https://muchlogic.com'`). It’s used for canonical links, the sitemap and share images, so keep it in sync with your real domain.

### 4. After the first deploy

- Check the security headers are live: `curl -I https://muchlogic.com` should list `x-frame-options: DENY`, `x-content-type-options: nosniff`, `referrer-policy` and `permissions-policy`.
- Submit `https://muchlogic.com/sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console).
- Send a test inquiry and check that both the email and the WhatsApp message arrive.

---

## Quality checks

Run before every release:

```sh
npx astro check   # TypeScript/Astro errors → must be 0
npm run build     # builds the site and runs scripts/check-text.mjs
```

`scripts/check-text.mjs` fails the build if words are glued together in the built pages (for example “softwarefor” or “MuchLogicwho”). Astro drops the line break between inline elements, so the fix is usually to add `{' '}` at the end of the line before the glued word.

Last Lighthouse audit (mobile, Phase 7): 99–100 in Performance, Accessibility, Best Practices and SEO on every main page.

---

## Brand assets

| File | What it is |
|---|---|
| `src/assets/brand/logo-*.png` | Logo mark and wordmark (dark and white versions) |
| `public/favicon.ico`, `favicon.svg`, `favicon-32.png` | Browser tab icons |
| `public/apple-touch-icon.png` | iPhone/iPad home screen icon (180×180) |
| `public/icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Icons for `site.webmanifest` (Android) |
| `public/og-default.png` | Default share image (1200×630) for links on social media |
| `design/brand/og-default.svg` | Editable source of the share image |

To change the share image: edit `design/brand/og-default.svg` (any vector editor, or a text editor), export it as a **1200×630 PNG**, and save it over `public/og-default.png`. A designed version is on the TODO list.

The current logo is a PNG, so `favicon.svg` contains a high-resolution PNG. When you have a vector (SVG) logo, replace the favicon files with versions made from it.
