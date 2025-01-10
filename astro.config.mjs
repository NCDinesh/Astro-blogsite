import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [astroIcon({
    collections: 'all'
  }), mdx()],
});