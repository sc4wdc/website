import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sc4wdc.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: '_assets'
  }
});

