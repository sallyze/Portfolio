// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sallyze.dev',
  devToolbar: { enabled: false },
  // Only links marked data-astro-prefetch (the language switch) are fetched early.
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
