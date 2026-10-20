// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages: https://angelomig.github.io/brochure-shop/
  // With a custom domain later, set `site` to it and `base` to '/'.
  site: 'https://angelomig.github.io',
  base: '/brochure-shop',
  devToolbar: { enabled: false },
  // Inline the (small) CSS so it doesn't block the first paint on phones.
  build: { inlineStylesheets: 'always' },
});
