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

| 13 | 2026-07-17 | **Selected Work approved + P3 resolved: project colors final** | AutoRAG `#2B4BF2`/wash `#E8ECFF`; D Shopper emerald `#0E8F62`/wash `#E2F4EB` (keep emerald, not teal); CSC `#0A6E93`/wash `#E1F0F4` (bluer + darker than D Shopper). Background transitions between LIGHT WASHES only, discrete cross-fades on block dominance, text stays on global ink. Alternating desktop composition; constant mobile order (media→meta→title→summary→link). Code-native frames only (no photorealistic mockups); D Shopper homepage shows 2–3 layered screens, not the 28-screen slider. Labeled factual placeholders where interview content missing. Hover timing provisional until Juan Work recording. |
| 14 | 2026-07-17 | Step 7 implemented | Selected Work built + verified (desktop 1280 & narrow); /work/* labeled stub pages keep links live pre-template. Noted: D Shopper's own UI accents are pink/red while its approved world is emerald — flagged to Rayan, proceeding per approval. |

| 15 | 2026-07-17 | **Selected Work revision (supersedes #13 colors)** | AutoRAG media = 3-screen story: documents workspace (primary, structure) · chat (front card, core interaction) · guided setup (behind, RAG workflow) — note: assets contain no dedicated "overview" screen, so documents takes the primary slot; chat no longer avoided for hero-repetition reasons. Colors: D Shopper → soft pink `#D95C84`/`#B83E68`/wash `#FCE8EF` (matches app branding; deep pink carries small text 4.6:1); CSC → warm gray `#62666D`/`#35383D`/wash `#ECEDEF` (institutional; interest from dark CSC screens, not saturation). Wash sequence: sand → cobalt → pink → gray → sand. Contrast fixes: muted/coral-deep replaced on washes by ink-soft/accent-deep. |

| 16 | 2026-07-18 | **All remaining sections approved; full completion authorized** | P4 pillars = Product Strategy & UX / Interface & Design Systems / AI & Emerging Products (grounded in product design + CIS, never positioned as ML engineering). P5 memoji kept as controlled secondary character (About teaser, About, Playground header, 404). Playground teaser, About teaser, Contact/Footer approved. Rayan authorized end-to-end completion without further section approvals. |
| 17 | 2026-07-18 | **Public email = rayanmaloma@gmail.com** (supersedes #8's address) | Given in Rayan's instruction and verified against the CV, which prints rayanmaloma@gmail.com. Old address remains only in git history. |
| 18 | 2026-07-18 | Playground worlds use the actual brand palettes | RKNH deep green `#2E7D51`, Routine plum `#7A2260`, Tamakkan orange `#D95A25`, Mosbah gold `#B98045` — replacing VISUAL_DIRECTION's provisional set after inspecting the real assets. |
| 19 | 2026-07-18 | V4 complete on `redesign/astro` | 7 routes, SEO layer, legacy redirects, QA passed (see QA_REPORT.md). Case-study process/decisions/impact sections ship as labeled pending chips until interviews. |

## Pending decisions (awaiting Rayan)
- **P2:** Hero availability microline — include? exact text?
- **P3:** Project accent colors — confirm/replace provisional D Shopper green + CSC teal; AutoRAG cobalt OK?
- **P4:** Positioning pillars — approve "Product & UX / Interface & Systems / AI-era design" framing.
- **P5:** Memoji — recurring sticker character, or retired?
- **P6:** Behance/Dribbble link exists? WhatsApp stays public?
- **P7:** Case-study interview answers (CASE_STUDY_CONTENT_REQUIREMENTS.md).
- **P8:** Hero portrait photos per brief.
