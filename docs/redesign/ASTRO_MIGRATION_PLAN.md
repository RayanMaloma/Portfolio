# Astro Migration Plan + Component Architecture
_Phase 3/5 — 2026-07-17. Approved: Astro static output, no React unless a component genuinely requires it, GSAP + ScrollTrigger + Lenis (justified use), repo history preserved._

## 1. Migration strategy (history-safe)

1. **Branch:** all redesign work on `redesign/astro`; `main` stays the live V3.0 site until launch. Merge = launch.
2. **Legacy preservation (first commit on branch):** move current site into `legacy/` (`index.html`, `pages/`, `css/`, `js/`, `components/`) — excluded from Astro build, retained in tree for reference during content migration; deletable post-launch (history keeps it forever either way).
3. **AR content archive:** extract the full EN/AR dictionary from `js/i18n.js` into `docs/redesign/AR_CONTENT_ARCHIVE.md` before anything else. This is the bilingual insurance policy.
4. **Assets:** originals stay in `assets/` (git history); an `npm run optimize` script (sharp) produces resized WebP/AVIF into `src/assets/` for Astro's image pipeline. The 69MB Routine folder ships to production only as optimized derivatives (~2–4MB total budget for the whole Playground).
5. **Old URLs:** `public/pages/*.html` meta-refresh stubs + `public/_redirects` (Netlify) per the mapping in INFORMATION_ARCHITECTURE.md §1.
6. **CLAUDE.md rewrite** (first implementation commit): new direction (light/expressive), new stack, new structure — the current "dark, HTML/CSS/JS only" rules are superseded.

## 2. Target structure

```
/
├─ astro.config.mjs          # output: 'static', site URL, view transitions
├─ package.json              # astro, gsap, lenis, sharp (dev)
├─ public/
│  ├─ assets/resume/rayan-al-omaireeni-cv.pdf   # stable URL preserved
│  ├─ fonts/  (ClashDisplay, GeneralSans woff2)
│  ├─ pages/  (legacy-URL redirect stubs)
│  ├─ _redirects · robots.txt · favicon.svg · og/
├─ src/
│  ├─ config/site.ts         # name, links, email, lang/dir constants (RTL-ready)
│  ├─ content/
│  │  ├─ config.ts           # zod schemas
│  │  ├─ projects/           # autorag.mdx, dshopper.mdx, csc.mdx
│  │  ├─ playground/         # rknh.md, routine.md, tamakan.md, mosbah.md
│  │  └─ ui.json             # every interface string (RTL-ready, zero hardcoded copy)
│  ├─ styles/
│  │  ├─ tokens.css          # ALL design tokens (single source of truth)
│  │  ├─ base.css            # reset, logical-properties layout rules, focus, type classes
│  │  └─ themes.css          # [data-theme=…] project worlds
│  ├─ scripts/
│  │  ├─ motion.ts           # GSAP/ScrollTrigger registry, data-reveal system, reduced-motion guard
│  │  ├─ lenis.ts            # conditional smooth scroll
│  │  └─ ui.ts               # nav behavior, clipboard, marquee helpers
│  ├─ layouts/
│  │  ├─ Base.astro          # head/SEO/fonts/loader/nav/footer/skip-link
│  │  └─ CaseStudy.astro     # case template consuming a project entry
│  ├─ components/
│  │  ├─ global: Nav, Footer, Loader, Button, LinkArrow, SectionHead, Reveal
│  │  ├─ hero: Hero, HeroPortrait, UICard
│  │  ├─ work: ProjectBlock, MediaFrame(browser), PhoneFrame, ThemeScope
│  │  ├─ case: CaseHero, GistBar, DecisionCard, ArtifactFigure, PrototypeEmbed, NextCase
│  │  ├─ playground: MarqueeBand, CollageItem
│  │  └─ about: StickerImage, FactChips, Timeline, ToolsGrid
│  └─ pages/
│     ├─ index.astro · about.astro · playground.astro · 404.astro
│     └─ work/[slug].astro
```

### Content schema (`projects`)

```ts
{ title, slug, order, year, status: 'shipped'|'in-progress',
  client, role, team?, timeline?,
  summary,                       // 1-liner for Home
  theme: { accent, accentDeep, wash },
  cover: image, screens: image[],
  frame: 'browser' | 'phone',
  prototype?: { url, label },    // AutoRAG live embed
  gist: string[], impact?: { label, value }[],
  // long-form body = MDX sections (context/process/decisions/solution/lessons)
}
```

## 3. Library policy

| Library | Status | Justification |
| --- | --- | --- |
| GSAP + ScrollTrigger | ✅ in | Hero choreography, scroll-linked wash cross-fades, footer wordmark — beyond clean CSS reach; industry-standard, ~60KB gz combined, loaded deferred |
| Lenis | ✅ in (conditional) | The Juan-style scroll feel; desktop fine-pointer only; ~8KB |
| React/any UI framework | ❌ out | No component requires client-side state beyond vanilla scope (nav, clipboard, sliders) |
| Three.js/R3F/Spline/WebGL/Lottie/Rive | ❌ out of v1 | Each requires the full 5-point proposal per approved rules |
| sharp | dev-only | Image optimization script |

JS budget: < 90KB gz total site JS. Astro islands unused in v1 (no framework components); scripts are plain `<script>` modules.

## 4. Implementation order (per approved protocol)

1. Scaffold + legacy move + AR archive (technical cleanup)
2. `tokens.css` (design tokens)
3. Fonts + type classes
4. Base layout, grid, container, skip-link, SEO component
5. Nav
6. Hero (approved option; placeholder portrait)
7. Selected Work
8. Positioning · Playground teaser · About teaser
9. Contact/Footer
10. ~~Work index~~ (cut) → Playground page
11. Case-study template
12. AutoRAG → D Shopper → CSC case studies
13. About page
14. Responsive pass (1440/1280/1024/768/430/390/360)
15. Motion refinement (MOTION_MAP.md + recordings)
16. Accessibility pass (keyboard, focus, contrast, reduced-motion)
17. Performance pass (LCP < 2.5s on Fast 3G+mid Android; images lazy; fonts preloaded)
18. QA_REPORT.md + redirects verification

Each numbered step = reviewable commit(s) on `redesign/astro`. Steps 6–9 and 11 each get the Section Approval Protocol treatment before build.

## 5. SEO & deployment

**Built regardless of host:** per-page titles/descriptions, OG/Twitter cards + generated OG image, `sitemap.xml` (@astrojs/sitemap), `robots.txt`, canonical URLs, JSON-LD `Person` on Home + `CreativeWork` per case, favicon set, 404.

**Host decision deferred (documented, not blocking):**

| | Netlify (recommended) | GitHub Pages |
| --- | --- | --- |
| Config | `netlify.toml` (publish `dist/`) — already prepared | `.github/workflows/deploy.yml` (astro build → pages artifact) |
| Redirects | native `_redirects` ✅ | meta-refresh stubs only |
| Custom domain | trivial + HTTPS | CNAME file |
| Forms (future) | native | none |

Repo: `github.com/RayanMaloma/Portfolio` (GitHub Pages currently inactive at the default URL; no Netlify/Vercel markers found — current hosting still unconfirmed by Rayan, launch checklist includes "identify + point DNS").
