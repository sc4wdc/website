import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sc4wdc.github.io',
  base: '/website',
  output: 'static',
  build: {
    assets: '_assets'
  }
});

