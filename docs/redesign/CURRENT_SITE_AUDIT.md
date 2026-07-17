# Current Site Audit
_Phase 1 — completed 2026-07-17. No production code was modified._

## 1. Technology

| Area | Finding |
| --- | --- |
| Framework | None — hand-written static HTML/CSS/JS. No package.json, no build step, no bundler. |
| Routing | File-based: `index.html` + 7 standalone pages in `pages/`. |
| Styling | Two plain CSS files: `css/main.css` (741 lines, landing) and `css/project.css` (877 lines, project template). No CSS variables audit yet; no preprocessor. |
| Animation | Hand-rolled vanilla JS only. No GSAP/Framer/Lottie/Three.js. |
| JS modules | `js/main.js` (nav + fullscreen overlay menu), `js/i18n.js` (EN/AR dictionary + RTL switching, 233 lines), `js/loop.js` (auto-scrolling vertical image strip w/ hover control; static gallery on mobile), `js/phone.js` (draggable iPhone mockup slider), `js/preload.js` (preloads every project image after `load`). |
| Fonts | Google Fonts: **Syne** (display), **Inter** (body), **Cairo** (Arabic). Loaded per page via `<link>`. |
| i18n | Full EN/AR translation dictionary with `data-i18n` attributes and a lang toggle on every page. This is real, working functionality. |
| SEO | `<title>` only. **No** meta description, Open Graph, favicon, sitemap.xml, robots.txt, canonical URLs, or structured data. |
| Analytics | None detected. |
| Dev server | `.claude/launch.json`: `python -m http.server` on ports 5500/5512. |
| Deployment | Unknown from the repo (no CNAME, no netlify.toml, no CI). **Needs confirmation from Rayan.** |
| Git | Single `main` branch, clean tree, version-style commits V1.0 → V3.0. |

## 2. Content inventory

**Landing page (`index.html`):** dark theme; fixed nav + fullscreen overlay menu; hero (memoji + name + bio + kicker "Product Designer · UX / UI / AI"); horizontal accordion of 7 project panels; contact section (email, LinkedIn, WhatsApp); integrated resume download; minimal footer.

**Projects (7):**

| # | Page | Type | Left-panel treatment | Assets |
| --- | --- | --- | --- | --- |
| 01 | `autorag.html` | UI/UX + Frontend (graduation project, In Progress) | **Live embedded prototype** (iframe → Netlify app) in a mock browser frame, lazy-loaded, fullscreen + new-tab | 9 PNG (6.3 MB) |
| 02 | `dshopper.html` | Product Design | Interactive iPhone mockup slider (`phone.js`) | 28 PNG (8.1 MB) |
| 03 | `csc.html` | UI/UX (CSC club website, KSU) | Looping vertical strip (`loop.js`) | 6 PNG (9.8 MB) |
| 04 | `rknh.html` | Brand identity | Looping strip | 7 PNG (736 KB) |
| 05 | `routine.html` | Graphic design | Looping strip | 26 JPG (**69 MB**) |
| 06 | `tamakan.html` | Graphic design | Looping strip | 2 JPG (1.4 MB) |
| 07 | `mosbah.html` | Graphic design | Looping strip | 8 files (**18 MB**) |

**Other assets:** thumbnails (7 × ~25 KB), memoji PNG (3.1 MB), resume PDF (`assets/resume/rayan-al-omaireeni-cv.pdf`, 64 KB).

**Docs:** `CLAUDE.md` (states *dark* direction — now superseded by the redesign brief; must be updated once the new direction is approved), `CONTENT.md` (1–2-line overviews per project), `PROJECT_PLAN.md` (old plan).

## 3. Functionality that must not be silently lost

1. **EN/AR bilingual toggle + RTL layout** — works site-wide today.
2. **AutoRAG live prototype embed** (`benevolent-dieffenbachia-e21c30.netlify.app`) with mobile fallback to a new tab.
3. **Resume PDF** download.
4. Contact links: `rayanomaireeni@gmail.com`, LinkedIn `/in/rayan-omaireeni/`, WhatsApp `wa.me/966565759145`.
5. iPhone-mockup interaction for D Shopper (drag/swipe/keys) — a nice pattern worth carrying forward in some form.

## 4. Technical risks

| Risk | Severity | Notes |
| --- | --- | --- |
| **~103 MB of unoptimized images** (routine 69 MB, mosbah 18 MB, csc 9.8 MB) + `preload.js` fetches *all* of them on landing load | High | Must convert to WebP/AVIF, resize, and lazy-load. Preload-everything must go. |
| No SEO layer at all (no OG/meta/sitemap/favicon) | Medium | Redesign must add it, not just preserve it. |
| Bilingual expressive typography | Medium | An art-directed display layout must work in Arabic RTL too — font pairing and mirrored compositions need explicit design decisions. |
| Case-study content is thin | High | CONTENT.md has 1–2 lines per project. A credible Product-Designer portfolio needs problem/role/process/impact per flagship project — content that only Rayan can supply. |
| No build tooling | Low | Fine for a static site, but rules out heavy npm-based stacks unless we deliberately introduce one. |
| Email inconsistency | Low | Site uses gmail; user profile email is `r.alemaireni@nojom.com`. Needs a decision. |

## 5. Retain / refactor / remove / rebuild

- **Retain:** project imagery (re-encoded), resume PDF, AutoRAG prototype embed concept, i18n dictionary content (if bilingual is kept), contact links, git history.
- **Refactor:** i18n mechanism (keep approach, re-key for new content), phone-mockup interaction (rebuild inside new design system).
- **Remove:** `preload.js` (preload-everything), current dark visual identity, accordion work list, `PROJECT_PLAN.md` (superseded).
- **Rebuild from scratch:** all HTML/CSS, design tokens, motion system, project/case-study template, navigation, footer, SEO layer.
