# Personal Brand Website

A production-grade personal brand website for Alex Chen — speaker, podcaster, and advocate for working mothers. Built as a hands-on practice project covering the full lifecycle from MVP to deployment and performance optimization.

**Live site:** [personal-brand-site-eight.vercel.app](https://personal-brand-site-eight.vercel.app)

## Lighthouse Results

Performance scores fluctuate with network and device conditions. The table below records the progression across optimization phases.

| Metric | Before Optimization | Performance Tuning | Final (with Security Headers) |
|--------|-------------------|-------------------|-------------------------------|
| Performance | 73 | 94 | 88 |
| Accessibility | 93 | 100 | 93 |
| Best Practices | 77 | 77 | 100 |
| SEO | 100 | 100 | 100 |

**Key outcomes:** Best Practices 100, SEO 100, Performance 85+.

## Tech Stack

| Category | Choice |
|----------|--------|
| Framework | React 19 |
| Language | TypeScript 6 (strict mode) |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| Animation | Framer Motion |
| Routing | React Router v7 |
| Icons | Lucide React |
| Deployment | Vercel (SPA fallback + custom security headers) |

## Key Achievements

- **Route-level code splitting** — 7 pages split into separate chunks via `React.lazy()`, reducing initial bundle to ~120 KB gzipped
- **Zero-dependency SEO** — Custom `SEO.tsx` component manages `<title>`, meta tags, OG tags, and canonical URL without external libraries
- **CLS optimization** — Cumulative Layout Shift reduced from 0.422 to ~0 by identifying scrollbar-induced shifts and fixing navbar dimensions
- **Accessibility score 93–100** — Skip-to-content link, `aria-current="page"` navigation, WCAG AA color contrast throughout
- **Security headers** — CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP configured via Vercel
- **Multi-language support** — Full English/Chinese toggle with per-page translations; type-safe via inferred `Content` type from locale modules
- **Theme switching** — Three themes (Warm/Cream/Dark) with CSS variable overrides; zero layout shift on switch, persists via `localStorage`
- **No form backend, no analytics, no third-party scripts** — Privacy-first by default

## Project Structure

```
src/
├── main.tsx                # Entry point (StrictMode + React 19)
├── App.tsx                 # Lazy-loaded routes + Suspense
├── index.css               # Tailwind + brand theme + dark/cream overrides
├── contexts/
│   ├── LanguageContext.tsx  # Multi-language provider (en/zh)
│   └── ThemeContext.tsx     # Theme provider (warm/cream/dark)
├── data/
│   ├── siteData.ts         # English content source of truth
│   └── locales/
│       ├── en.ts           # English re-exports from siteData
│       └── zh.ts           # Chinese translations
├── components/
│   ├── Layout.tsx           # Skip link + Navbar + ErrorBoundary + Footer
│   ├── Navbar.tsx           # Fixed nav, scroll detection, mobile menu, lang/theme toggles
│   ├── Footer.tsx           # Social links, contact, copyright
│   ├── SEO.tsx              # Per-page meta tags via DOM API
│   ├── Img.tsx              # Placeholder-gradient images with lazy loading
│   └── ErrorBoundary.tsx    # React class-based error boundary
└── pages/
    ├── Home.tsx             # Hero, stats strip, featured talk/episode, newsletter
    ├── About.tsx            # Bio, stats grid, timeline, skills
    ├── Talks.tsx            # Talk list with tag-based filtering
    ├── Podcast.tsx          # Podcast info, listening platforms, episode list
    ├── Media.tsx            # Press coverage card grid
    ├── Support.tsx          # Support programs, features, grant section
    ├── Partnerships.tsx     # Partner organization cards
    └── NotFound.tsx         # 404 page
```

## Architecture Decisions

- **Single data source**: All text content in `src/data/siteData.ts`. Pages render data — they don't hardcode text. Adding a new talk or episode requires zero JSX changes.
- **Route-level code splitting**: Non-home pages use `React.lazy()` so each page loads on demand. Home is eagerly loaded for instant first interaction.
- **Zero-dependency SEO**: A lightweight component manages `<title>`, meta description, OG tags, and canonical URL via direct DOM API — no `react-helmet` or similar.
- **Placeholder-first images**: The `Img` component renders CSS gradient placeholders with fixed `aspect-ratio` until real images are provided, preventing layout shift.
- **Custom brand theme**: Tailwind v4 `@theme` directive defines a warm brown palette (`brand-50` through `brand-950`) consistent across all components.
- **Component-based routing**: React Router v7 with a shared `<Layout />` shell (Navbar + ErrorBoundary + Footer) wrapping page routes.
- **Multi-language**: English and Chinese translations stored as TypeScript modules with identical export structure. A `LanguageContext` provides `useContent()` to all pages — switching language swaps the entire module, updating every page's text and SEO metadata simultaneously.
- **CSS variable theming**: Three themes (Warm/Cream/Dark) implemented via `[data-theme]` CSS custom property overrides. Theme switching requires zero component changes — Tailwind utilities resolve to different color values automatically. Anti-FOUC inline script reads `localStorage` before React hydrates. No runtime CSS injection, no layout shift on switch.

## Optimization Highlights

| Area | Before | After | Technique |
|------|--------|-------|-----------|
| CLS | 0.422 | ~0 | `scrollbar-gutter: stable`, explicit navbar height |
| Speed Index | 6.2 s | ~3–4 s | Reduced animation delays, opacity-only hero transitions |
| Initial bundle | 399 KB | 378 KB (120 KB gzip) | Route-level code splitting |
| Accessibility | 93 | 93–100 | `aria-current`, contrast fixes, skip link |
| Best Practices | 77 | 100 | CSP + security headers |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# TypeScript check (strict mode)
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment

Deployed via **Vercel** with automatic SPA fallback and custom security headers:

- Repository import triggers auto-deploy
- `vercel.json` configures SPA rewrites + security headers
- Favicon, `robots.txt`, and `sitemap.xml` served from `public/`

## Project Evolution

| Phase | Focus | Key Deliverables |
|-------|-------|------------------|
| 1 | MVP | 7 pages, routing, data layer, responsive layout |
| 2 | Visual polish | SEO component, image placeholders, theme tokens, animations |
| 3A | Deployment | 404 page, error boundary, accessibility, code splitting, robots/sitemap |
| 3B | Launch | Vercel deployment, build verification |
| 3C | Encoding fix | GBK/UTF-8 corruption repair |
| 3D | Performance | CLS fix, Speed Index optimization, accessibility tuning |
| 3E | Security | CSP + security headers, Lighthouse documentation |
| 4 | Close-out | README, retrospective, portfolio docs, final checklist |
| 5 | Multi-language & Theme | Chinese translations, en/zh toggle, 3 themes (warm/cream/dark) |

## Future Directions

- Form backend integration (serverless function or third-party)
- CMS integration for talk/episode/press content
- Real image assets replacing gradient placeholders
- PWA support (service worker + manifest)
- Blog section for long-form content
- Performance budget in CI
- Additional language translations (Japanese, Spanish)
- Theme color picker or system preference detection
