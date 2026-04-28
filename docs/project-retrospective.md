# Project Retrospective

## Overview

A personal brand website built as a solo practice project covering the full software delivery lifecycle — from an empty Vite scaffold to a deployed, Lighthouse-optimized production site. The project spanned 4 major phases and 7 sub-phases over multiple sessions.

## Development Journey

### Phase 1: MVP (Scaffold + Core Pages)

- Set up Vite + React 19 + TypeScript 6 + Tailwind v4 with `@tailwindcss/vite` plugin
- Implemented 7 page routes with React Router v7 and shared Layout shell
- Built a single `siteData.ts` file as the data layer — all content driven from one source
- Added Framer Motion for page entry animations and scroll-triggered reveals

**Key decision:** Single data file vs. CMS. Chose a data file for zero-infrastructure overhead. This kept the project self-contained and deployable anywhere.

### Phase 2: Visual Polish

- Applied a consistent brand theme (warm brown palette) via Tailwind `@theme`
- Built an `Img` component with CSS gradient placeholders and fixed `aspect-ratio`
- Added scroll-aware navbar (transparent → opaque on scroll)
- Refined mobile responsiveness and touch targets

### Phase 3A: Production Readiness

- Route-level code splitting via `React.lazy()` — each page becomes a separate chunk
- Custom `ErrorBoundary` class component with friendly fallback UI
- 404 Not Found page
- Accessibility fundamentals: skip-to-content link, `:focus-visible` styles, form labels
- `robots.txt` and `sitemap.xml`

### Phase 3B: Deployment

- Deployed to Vercel with SPA fallback rewrite
- Configured canonical URL in the SEO component
- Replaced default Vite favicon with brand "AC" monogram

### Phase 3C: Encoding Fix

- Discovered GBK/UTF-8 encoding corruption in `Talks.tsx` (em dash `—` and middle dot `·` rendered as CJK characters)
- Root cause: file was saved with UTF-8 content then re-saved in GBK encoding, corrupting multi-byte characters
- Fixed by replacing corrupted characters with correct Unicode code points

### Phase 3D: Lighthouse Optimization

- **CLS 0.422 → ~0:** The primary fix was `scrollbar-gutter: stable` on `<html>`. On Windows, the scrollbar appears when content exceeds the viewport, shrinking the viewport width by ~15 px and shifting all elements. This single CSS property accounted for the majority of CLS reduction.
- **Speed Index 6.2s → ~3-4s:** Removed `y: 20` transform from hero entry animations (opacity-only is faster) and cut animation delays by half.
- **Accessibility 93 → 100:** Added `aria-current="page"` to navigation, fixed color contrast for `text-gray-400` on white backgrounds by promoting to `text-gray-500`.

### Phase 3E: Security Headers

- Added CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and `Cross-Origin-Opener-Policy` via `vercel.json`
- CSP analysis required examining the built `index.html` to verify no inline scripts were present
- `style-src 'unsafe-inline'` required because React and Framer Motion render inline styles

## Problems Encountered

### 1. Encoding Corruption (Phase 3C)

**Symptom:** Text in `Talks.tsx` showed `閳` instead of `—` and `璺` instead of `·` on the live site.

**Root cause:** The file was originally created with correct UTF-8 characters. At some point, the file was opened and re-saved in a GBK/GB18030 encoding, which interpreted the UTF-8 byte sequences for `—` (E2 80 94) and `·` (C2 B7) as multi-byte CJK characters. The file then became permanently corrupted.

**Fix:** Replaced the corrupted character literals in source code. Verified with `grep` across the entire `src/` directory to ensure no other files were affected.

**Lesson:** Always verify file encoding when working across different operating systems or editors, especially with CJK locale settings.

### 2. GitHub Network Access (China Firewall)

**Symptom:** `git push` consistently failed with "Connection was reset."

**Root cause:** GitHub is blocked by China's national firewall.

**Workaround:** User configured a system-level proxy for git operations.

### 3. CLS Diagnosis (Phase 3D)

**Symptom:** Lighthouse reported CLS of 0.422 but no obvious layout shifts were visible during development.

**Root cause:** The shift was caused by the browser scrollbar appearing after content rendered past the viewport height. Since all visual debugging was done within the viewport, the shift was invisible during development.

**Fix:** `scrollbar-gutter: stable` reserves space for the scrollbar, preventing the viewport width from changing when the scrollbar appears.

**Lesson:** SPA scrollbar behavior is a common CLS source that's easy to miss during visual debugging.

### 4. Unused Import (Build Failure)

**Symptom:** Vercel build failed with `TS6133: 'ExternalLink' is declared but its value is never read.`

**Root cause:** During a refactor of `Talks.tsx`, the `ExternalLink` icon was removed from the JSX but not from the import statement. TypeScript strict mode (`noUnusedLocals: true`) treats this as an error.

**Fix:** Removed the unused import.

**Lesson:** Always run `npx tsc --noEmit` before pushing to catch strict-mode errors.

## Lighthouse Score Progression

| Phase | Performance | Accessibility | Best Practices | SEO |
|-------|-------------|---------------|----------------|-----|
| Initial (pre-optimization) | 73 | 93 | 77 | 100 |
| After CLS + Speed Index + a11y | 94 | 100 | 77 | 100 |
| After security headers | 88 | 93 | 100 | 100 |

Note: Scores fluctuate with network, device, and browser conditions. The trend matters more than any single measurement.

## Bundle Size Evolution

| Artifact | After MVP | After Code Splitting |
|----------|-----------|---------------------|
| Main JS bundle | 399 KB | 378 KB (120 KB gzipped) |
| Per-page chunks (avg) | — | ~2.5 KB per page |
| CSS | 28 KB | 28 KB |

Code splitting reduced the initial payload by ~5%, and more importantly, pages not yet visited download zero code.

## What Went Well

- **Staged delivery:** Breaking into phases prevented scope creep and made each session focused
- **Data-driven optimization:** Lighthouse scores provided clear targets instead of guessing what to improve
- **Minimal dependency philosophy:** 4 production dependencies (react, react-dom, react-router, framer-motion, lucide-react) kept the project lightweight
- **No form backend requirement:** Avoided adding a backend or third-party service

## What Could Be Improved

- **Earlier TypeScript check:** Adding `tsc --noEmit` to the build pipeline earlier would have caught the unused import before deployment
- **CLS testing methodology:** Testing on actual Windows Chrome (not just macOS/Linux) would have surfaced the scrollbar issue earlier
- **File encoding verification:** Adding a `.gitattributes` for consistent line endings and encoding would prevent corruption issues
