# Portfolio Presentation

> A production-grade personal brand website built from scratch — optimized for Lighthouse 90+, deployed to Vercel, and documented for real-world delivery.

## One-Line (50 chars)

React personal brand site with Lighthouse 90+ and route-level code splitting.

## Short Description (~100 chars)

A 7-page personal brand website optimized for performance (CLS ~0, Speed Index ~3s), accessibility (100), and security (CSP + headers). Built with React 19 + TypeScript 6 + Vite 8.

## Full Description (~200 words)

A personal brand website built through the full software delivery lifecycle — from an empty Vite scaffold to a deployed, production-grade site. The project covers 7 pages (Home, About, Talks, Podcast, Media, Support, Partnerships) with route-level code splitting, lazy loading, and a shared layout shell.

**Technical highlights:**

- **React 19 + TypeScript 6 (strict mode)** with Vite 8 and Tailwind v4
- **CLS elimination:** Identified scrollbar-induced layout shifts via Lighthouse audit; fixed with `scrollbar-gutter: stable`
- **Accessibility score 100:** Skip-to-content, `aria-current` navigation, WCAG AA contrast throughout
- **Route-level code splitting:** Each page loads on demand via `React.lazy()`, reducing initial bundle to 120 KB gzipped
- **Zero-dependency SEO:** Custom component manages `<title>`, meta tags, OG tags, and canonical URL via direct DOM API
- **Security headers:** CSP, XFO, COOP, and Permissions-Policy configured via Vercel deployment
- **Error boundary:** Class-based React error boundary with fallback UI and refresh/home navigation
- **Single data source:** All content driven from one TypeScript file — adding content requires no JSX changes

**Deployed at:** [personal-brand-site-eight.vercel.app](https://personal-brand-site-eight.vercel.app)

## Key Talking Points (for interviews)

### Architecture & Decisions

- "I chose React 19 with Vite 8 for the build tool — Vite's ES module-based dev server scales well and Tailwind v4's `@theme` directive made the brand theme consistent across 30+ components."
- "All content lives in a single `siteData.ts` file. Pages just render props — no hardcoded text, no CMS integration needed for a site this size."
- "Route-level code splitting with `React.lazy()` keeps the initial bundle under 120 KB gzipped. Each additional page loads as a separate 2–3 KB chunk on navigation."

### Performance

- "CLS dropped from 0.422 to ~0. The root cause wasn't images or fonts — it was the browser scrollbar. On Windows, `scrollbar-gutter: stable` prevents the 15 px viewport width change when content exceeds the viewport."
- "Hero animations used `y: 20` transform + 0.5 s duration with cascading delays. Switching to opacity-only and halving delays improved Speed Index from 6.2 s to ~3 s."
- "No web fonts are loaded — the font stack uses system fonts (Segoe UI / Georgia), eliminating FOIT/FOUT entirely."

### Problem Solving

- "A Vercel build failed because TypeScript strict mode caught an unused import. This taught me to always run `tsc --noEmit` in CI."
- "An encoding bug corrupted em dashes and middle dots in a TSX file — the file was saved in GBK instead of UTF-8. I traced it by grepping for the corrupted byte sequences and replaced them with the correct Unicode characters."
- "Lighthouse Best Practices 77 turned out to be entirely Vercel platform cookies — not fixable in code but documented in the project audit."

### What I'd Do Differently

- "Add `tsc --noEmit` to the build pipeline earlier"
- "Test on Windows Chrome from the start to catch scrollbar CLS"
- "Add a `.gitattributes` for consistent file encoding"

## Quantifiable Results

| Metric | Before | After |
|--------|--------|-------|
| Performance | 73 | 88–94 |
| Accessibility | 93 | 93–100 |
| Best Practices | 77 | 100 |
| SEO | 100 | 100 |
| CLS | 0.422 | ~0 |
| Speed Index | 6.2 s | ~3 s |
| Main bundle | 399 KB | 378 KB (120 KB gzip) |
| Pages | Monolith | 7 route-level chunks |

## Tags

`React` `TypeScript` `Vite` `Tailwind CSS` `Framer Motion` `React Router` `Lighthouse` `CLS` `Web Vitals` `Accessibility` `CSP` `Vercel`
