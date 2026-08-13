// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://uxhawk.com',
  // Case studies moved from /ux-projects/ to /projects/, the article listing
  // from /blog/ to /articles/, and articles from /<category>/<slug> to
  // /articles/<slug>; keep old URLs working
  redirects: {
    '/ux-projects/[slug]': '/projects/[slug]',
    '/blog': '/articles',
    '/design-leadership/[slug]': '/articles/[slug]',
    '/ux/[slug]': '/articles/[slug]',
  },
  integrations: [mdx(), react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
