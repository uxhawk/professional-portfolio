// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://uxhawk.com',
  // Case studies moved from /ux-projects/ to /projects/; keep old URLs working
  redirects: {
    '/ux-projects/[slug]': '/projects/[slug]',
  },
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
