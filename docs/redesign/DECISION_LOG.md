# Decision Log

| # | Date | Decision | Detail |
| --- | --- | --- | --- |
| 1 | 2026-07-17 | Phase 1 audit approved | CURRENT_SITE_AUDIT.md accepted as-is |
| 2 | 2026-07-17 | Phase 2 reference analysis approved as draft | Motion details remain ⏳ pending 4 recordings (Juan home desktop, Juan work hover+transition, Juan home mobile, Kevin home w/ cursor+3D). Static planning proceeds unblocked; unobserved motion must not be invented. |
| 3 | 2026-07-17 | **Language: EN-only v1, RTL-ready architecture** | No Arabic implementation in v1; logical properties, externalized strings, single lang/dir config; existing AR dictionary archived to docs/redesign/AR_CONTENT_ARCHIVE.md during migration; bilingual constraints must not restrict v1 visual direction. |
| 4 | 2026-07-17 | **Hero: real portrait, Juan-style media hero** | Giant wordmark + integrated portrait + embedded UI cards + warm light base + coral/cobalt + controlled scroll/cursor motion. Labeled placeholder until photo delivered. Photography brief delivered (ASSET_MANIFEST.md §2). Three composition options presented — **choice pending**. No final hero implementation until chosen. |
| 5 | 2026-07-17 | **Project architecture: 3 + Playground** | Case studies: AutoRAG, D Shopper, CSC. Playground page: RKNH, Routine, Tamakan, Mosbah Omar — range without equal-case-study framing. |
| 6 | 2026-07-17 | **Visual direction: Desert Coral hybrid** | Juan-dominant art direction; warm off-white base, dark warm ink, coral primary, cobalt secondary, Veronica-style per-project color worlds, Kevin-grade restraint. Banned: monochrome, SaaS gradients, glassmorphism, Bento, floating blobs. |
| 7 | 2026-07-17 | **Stack: Astro static + GSAP + ScrollTrigger + conditional Lenis** | Reusable Astro components, content collections. No React unless a specific component requires it. Three.js/WebGL/Spline/Lottie/Rive banned without 5-point proposal (reason/perf/asset/fallback/lighter-alt). Repo history preserved; migration documented before replacement (ASTRO_MIGRATION_PLAN.md). |
| 8 | 2026-07-17 | **Contact: gmail primary** | `rayanomaireeni@gmail.com` public; Nojom work email never used on portfolio. LinkedIn/WhatsApp/resume links preserved unless replaced. |
| 9 | 2026-07-17 | **Deployment: host-agnostic static build** | Repo = github.com/RayanMaloma/Portfolio; GH Pages inactive at default URL; no Netlify/Vercel markers. Build prepared for Netlify (recommended) or GH Pages; configs documented in ASTRO_MIGRATION_PLAN.md §5; final host choice deferred, non-blocking. |
| 10 | 2026-07-17 | CLAUDE.md supersession noted | Current CLAUDE.md (dark theme, no-libraries, old structure) is superseded by decisions 6–7; rewrite scheduled as part of implementation step 1. |

| 11 | 2026-07-17 | **P1 resolved: Hero = Option 1 "Inline Interruption"** | Full-bleed environmental photo under coral wash + scrim, two-line bottom wordmark, AutoRAG UI card inline in line 1. Implemented with the AI-generated desk photo as a **visibly labeled temp asset** — final photo comes from the shoot brief (a real recreation of the desk scene is on the shoot list). |
| 12 | 2026-07-17 | Implementation steps 1–6 built on `redesign/astro` | Astro 7 scaffold, tokens, self-hosted fonts, base layout, loader, nav, Option 1 hero. Legacy site moved to `legacy/`, AR dictionary archived, CLAUDE.md rewritten. Verified: build passes; desktop + mobile renders; reduced-motion = static final layout by construction. |

## Pending decisions (awaiting Rayan)
- **P2:** Hero availability microline — include? exact text?
- **P3:** Project accent colors — confirm/replace provisional D Shopper green + CSC teal; AutoRAG cobalt OK?
- **P4:** Positioning pillars — approve "Product & UX / Interface & Systems / AI-era design" framing.
- **P5:** Memoji — recurring sticker character, or retired?
- **P6:** Behance/Dribbble link exists? WhatsApp stays public?
- **P7:** Case-study interview answers (CASE_STUDY_CONTENT_REQUIREMENTS.md).
- **P8:** Hero portrait photos per brief.
