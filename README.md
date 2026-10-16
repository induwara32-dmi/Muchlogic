# MuchLogic website

Marketing site for [muchlogic.com](https://muchlogic.com), built with Astro, TypeScript (strict) and Tailwind CSS v4, deployed on Vercel.

> Work in progress. Full setup, environment and deployment docs and the TODO checklist are added in Phase 7.

## Quick start

```sh
npm install
cp .env.example .env   # only needed for the contact form
npm run dev            # http://localhost:4321
npm run build          # production build
npx astro check        # type check
```

## Where to edit

- Design tokens (colours, font, radii, container width): `src/styles/global.css` (`@theme`)
- Company details, nav, socials: `src/data/site.ts`
- Content: `src/data/` (services, projects, process, FAQs, team, testimonials, stats, client logos)
- Design reference: `design/`
