# Implementation Progress
_Branch: `redesign/astro`. Order per ASTRO_MIGRATION_PLAN.md §4._

| # | Step | Status | Notes |
| --- | --- | --- | --- |
| 1 | Technical cleanup | ✅ 2026-07-17 | Legacy → `legacy/`, AR archive, Astro 7 scaffold (gsap, lenis, sharp), CLAUDE.md rewritten, launch.json → python3 |
| 2 | Design tokens | ✅ | `src/styles/tokens.css` — Desert Coral system verbatim from VISUAL_DIRECTION.md |
| 3 | Typography | ✅ | Clash Display + General Sans variable woff2 self-hosted (+ licenses in `public/fonts/`) |
| 4 | Global layout & grid | ✅ | `base.css` (logical properties, focus, reduced-motion), `Base.astro` (SEO head, loader gate, skip-link, footer **stub**) |
| 5 | Navigation | ✅ | Pill nav, hide-on-scroll, mobile `R.A.` brand; magnetic hover deferred to motion refinement (⏳ recordings) |
| 6 | Hero | ✅ | **Option 1** with labeled temp photo (`hero-scene-*.webp`, ~90KB total); scrim added for wordmark legibility; entrance + conservative parallax; mobile 3-line break, cue hidden on touch |
| 7 | Selected Work | ⛔ awaiting section approval + P3 colors | Placeholder section with `#work` anchor shipped |
| 8–18 | … | pending | per plan |

## Verification notes (step 6)
- `npm run build` passes (static, 1 page).
- Verified in browser at ~711px and 375px: wash, scrim, wordmark, inline card, chip, nav, footer stub.
- Local test pane has frozen rAF, so GSAP entrance was emulated by clearing inline tween styles; needs a normal-browser pass during QA (step 18).
- Reduced-motion path: CSS default = final layout; GSAP wrapped in `matchMedia('(prefers-reduced-motion: no-preference)')`; loader gated off pre-paint.

## Known temp assets
- `public/assets/hero/hero-scene-*.webp` — AI-generated desk photo, **visibly labeled TEMP in the UI**, replace per ASSET_MANIFEST §2 (chip removal = part of final-photo swap).
- OG image, favicon set — pending identity finalization (after hero photo).
