import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';
import image from "@astrojs/image"
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://astro-blog.netlify.app',
  integrations: [astroIcon({
    collections: 'all'
  }), mdx(),image({serviceEntryPoint: '@astrojs/image/sharp'}),sitemap()]
});