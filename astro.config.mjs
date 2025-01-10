import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';
import image from "@astrojs/image"

import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [astroIcon({
    collections: 'all'
  }), mdx(),image({serviceEntryPoint: '@astrojs/image/sharp'})]
});