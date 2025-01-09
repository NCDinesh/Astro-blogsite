import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

export default defineConfig({
  integrations: [
    astroIcon({
      collections: 'all'
    }),
  ],
});
