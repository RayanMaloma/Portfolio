# QA Report — V4 completion pass
_2026-07-19 final production pass (supersedes 2026-07-18 numbers where they differ), branch `redesign/astro`._

## Final production pass (2026-07-19)
- 6 routes: `/`, `/work/autorag`, `/work/dshopper`, `/work/csc`, `/about`, `404` (+ legacy redirect stubs).
- `astro check` 0 errors · build clean · dist **1.6 MB**.
- Link crawl: 0 broken. Placeholder audit of built HTML: **0 hits** (no bracketed pending copy, no TEMP labels).
- Overflow harness: 5 routes × 360–1440px → 0 horizontal overflow.
- Live embeds verified: AutoRAG Netlify prototype and **cscksu.com render inside their frames** (headers checked: no X-Frame-Options/CSP blocks); posters hide correctly after load ([hidden] specificity bug found & fixed in three places).
- D Shopper screen switcher verified (default Products; tab swap works; ARIA tabs).
- Interim asset on record: hero desk scene is AI-generated, shipped unlabeled per decision 24 — replace via shoot brief.

## Build & checks

| Check | Result |
| --- | --- |
| `npm run build` (production) | ✅ 7 pages, clean |
| `astro check` (type check, strict tsconfig) | ✅ 0 errors, 0 warnings (56 informational hints, none quality-affecting) |
| Link/asset crawl over `dist/` (every local href/src/srcset resolved) | ✅ 0 broken after fixing the resume-PDF path (`public/assets/resume/` was missing — caught by crawler) |
| Horizontal overflow — all 7 routes × widths 360/390/430/768/1024/1280/1440 (iframe harness, `scrollWidth` vs viewport) | ✅ 0 overflows |
| Production payload | dist = **1.5 MB total** (down from ~103 MB of source imagery); largest page ≈ 600 KB with all images |
| Fonts | 2 variable woff2, 67 KB total, preloaded, `font-display: swap` |
| JS | No framework runtime; GSAP/ScrollTrigger + conditional Lenis + small vanilla modules |

## Responsive
Verified live at 1280 (desktop grids, alternating blocks), ~711 (tablet: single-column blocks, mobile nav brand), 390/375 (3-line hero wordmark, stacked sections, cue hidden). Overflow harness covered 360–1440. Playground marquee: hover-pause desktop / native scroll-snap touch.

## Reduced motion (by construction + spot-checked)
- Loader gated off pre-paint; Lenis never starts; GSAP wrapped in `matchMedia('(prefers-reduced-motion: no-preference)')`.
- `[data-reveal]` system: final layout is the CSS default; the hiding class is added only for motion-safe users.
- Marquee → static strip; wash cross-fade transition suppressed (background still switches — information preserved).

## Accessibility
- Skip link, semantic landmarks, one `h1` per page, `aria-label`s on sections, alt text on all content images (decorative = empty alt + `aria-hidden`).
- Focus-visible ring (cobalt, 2px) global; positioning rows focusable, reveal sub-skills on `:focus-within`.
- Contrast: ink 14.2:1 on washes; all per-world deep accents ≥ 4.5:1 (cobalt 7.7, pink 4.6, gray 10.0); `muted`/`coral-deep` replaced with compliant tokens on wash backgrounds.

## Known environment caveat
The embedded test browser freezes `requestAnimationFrame`, so entrance animations were verified via end-state inspection, not by watching them play. **One pass in a normal browser is recommended** (first visit per session shows loader + hero entrance; scroll through Selected Work for the wash cross-fades).

## Deliberately open items
- Domain/host not chosen → no `sitemap.xml`, no canonical URLs, `site` in `astro.config.mjs` is a placeholder. Netlify config + `_redirects` ready; GH Pages would need a workflow + real-path adjustments.
- Astro dev daemon may still be running locally (`npx astro dev stop` to stop).
