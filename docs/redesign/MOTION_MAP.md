# Initial Motion Map
_Phase 4 companion — 2026-07-17. **Status: concept.** Items marked ⏳ derive from reference behavior not yet observed (recordings pending) — do not treat as final choreography. Nothing here blocks static implementation; motion is layered on last (implementation step 15)._

## Global system

| Concern | Decision |
| --- | --- |
| Smooth scroll | Lenis on desktop pointers only (`(pointer: fine)` + width ≥ 1024). Native scroll on touch. Lenis is *never* a dependency for reaching content. |
| Scroll reveals | One shared IntersectionObserver/ScrollTrigger pattern: `data-reveal` (fade+8px rise, `--dur-2`), `data-reveal="mask"` (clip-path text mask, `--dur-3`). Max 2 reveal styles site-wide. |
| Stagger | 60ms between siblings, cap 6 items. |
| Page transitions | Astro View Transitions API (crossfade + shared-element on project media where supported); full-page coral wipe reserved for Home→Case only. ⏳ pending Juan transition recording. |
| Reduced motion | `prefers-reduced-motion`: loader skipped, Lenis off, ScrollTriggers killed, `data-reveal` renders final state, marquees static, parallax/cursor effects off. Toasts/focus states remain. |
| Performance budget | Transforms + opacity + clip-path only. No layout-affecting animation. No always-running rAF except marquee (CSS-driven) and Lenis. 60fps target on M-series laptop AND mid-range Android. |

## Per-section

| Section | Entrance | Scroll-linked | Hover/cursor | Notes |
| --- | --- | --- | --- | --- |
| Loader | progress bar tracks load | — | — | exits via coral wipe ⏳ (style vs Juan) |
| Nav | slides down post-loader | hide on down-scroll, show on up | magnetic items ⏳ (strength vs Kevin) | |
| Hero | choreographed: type mask → portrait rise → cards settle (total ≤1.4s) | portrait/cards parallax at 3 rates; wordmark drift | cards tilt ≤4° toward cursor | mobile: entrance only |
| Selected Work | media clip-reveal, type mask | **background wash cross-fade per project world**; media subtle parallax | media scale 1.04, underline draw, arrow nudge ⏳ (vs Juan Work hover) | wash fade is the signature moment |
| Positioning | rows stagger, dividers draw | — | row expands to show sub-capabilities | CSS-only viable |
| Playground teaser | band slides in | marquee speed slightly scroll-influenced | marquee pauses; cards straighten | CSS marquee, duplicated track |
| About teaser | sticker rotates upright, chips stagger | — | sticker wiggle (spring, once) | |
| Contact/Footer | headline mask reveal | giant wordmark rises with footer entry ⏳ (vs Juan footer) | letter wave on wordmark hover; copy-email toast | |
| Case hero | title mask + wash floods in | meta strip pins briefly ⏳ | — | |
| Case body | standard `data-reveal` only | — | decision-cards lift 2px | restraint = credibility |
| Next-case card | — | wash of next project bleeds upward as user approaches end | card expands slightly | doubles as transition surface |

## Explicitly deferred (needs its own proposal per approved rules)
3D of any kind, WebGL, Lottie/Rive, custom cursor, sound. None are in v1 scope; any addition requires the design-reason/perf-cost/asset/fallback/lighter-alternative write-up first.
