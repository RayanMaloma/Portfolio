import { defineConfig } from 'astro/config';

// Static output (default). `site` is a placeholder until hosting is confirmed
// (see docs/redesign/ASTRO_MIGRATION_PLAN.md §5) — required later for sitemap/canonicals.
export default defineConfig({
  site: 'https://rayanmaloma.github.io',
  trailingSlash: 'ignore',
});
