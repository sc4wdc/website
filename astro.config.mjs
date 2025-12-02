import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sc4wdc.com',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets'
  }
});

