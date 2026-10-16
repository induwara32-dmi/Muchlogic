// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://muchlogic.com',
  // Internal links, canonicals and the sitemap all use URLs without a trailing slash
  trailingSlash: 'never',
  // Static by default; only routes with `export const prerender = false` (the contact API) run on demand.
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/thank-you'),
    }),
  ],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        default: 'onboarding@resend.dev',
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
