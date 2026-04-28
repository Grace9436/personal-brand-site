# Personal Brand Website

A clean, modern, responsive personal brand website built for a speaker, podcaster, and advocate. Built with React + TypeScript + Vite.

## Tech Stack

| Category | Choice |
|----------|--------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Routing | React Router v7 |
| Icons | Lucide React |

## Project Structure

```
src/
├── main.tsx                # Entry point
├── App.tsx                 # Routes configuration
├── index.css               # Tailwind + theme tokens
├── data/
│   └── siteData.ts         # Single source of truth for all content
├── components/
│   ├── Layout.tsx           # Navbar + Outlet + Footer shell
│   ├── Navbar.tsx           # Fixed nav with mobile hamburger
│   ├── Footer.tsx           # Social links + copyright
│   ├── SEO.tsx              # Per-page meta tags (title, OG)
│   └── Img.tsx              # Image with gradient placeholder + lazy loading
└── pages/
    ├── Home.tsx             # Hero, stats, featured talk/episode, newsletter
    ├── About.tsx            # Bio, stats, timeline, skills
    ├── Talks.tsx            # Talk list with tag filter
    ├── Podcast.tsx          # Podcast info, platform links, episodes
    ├── Media.tsx            # Press coverage cards
    ├── Support.tsx          # Programs, features, grant info
    └── Partnerships.tsx    # Partner organization cards
```

## Architecture Decisions

- **Single data source**: All text content lives in `src/data/siteData.ts`. Page components only render — they don't hardcode text.
- **Zero-dependency SEO**: A lightweight `SEO.tsx` component uses `useEffect` to manage `<title>` and meta tags, avoiding heavy head-management libraries.
- **Placeholder-first images**: The `Img.tsx` component renders CSS gradient placeholders that look intentional until real images are provided.
- **Component-based routing**: React Router v7 with a shared `<Layout />` wrapper for Navbar + Footer.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# TypeScript check
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment

The project produces a static `dist/` folder. Deploy to any static host:

- **Netlify**: Connect repo → set build command to `npm run build` → publish directory `dist`
- **Vercel**: Import project → framework preset Vite → auto-detects settings
- **GitHub Pages**: Run `npm run build` → push `dist/` to `gh-pages` branch

## Project Status

- **Phase 1 (MVP)** — Complete: 7 pages, routing, data layer, responsive
- **Phase 2 (Polish)** — Complete: SEO, image placeholders, mobile UX, home page refinements
- **Phase 3 (Launch)** — Planned: custom domain, form backend, analytics
