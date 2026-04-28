# Personal Brand Website — Requirements

## Overview
A clean, modern, professional personal brand website for a speaker, podcaster, and advocate. The site serves as a central hub for audiences to learn about the person, explore their content, and initiate partnerships.

## Pages / Sections

| Section | Description |
|---------|-------------|
| Home | Hero with tagline, CTA buttons, stats strip |
| About | Bio, stats, timeline, areas of expertise |
| Talks | Speaking engagements list with filter |
| Podcast | Podcast show info, episodes list, platform links |
| Media | Press coverage cards with quotes |
| Support for Mothers | Programs, features list, grant info |
| Partnerships | Partner organization cards |

## Functional Requirements
- Responsive (mobile, tablet, desktop)
- Navigation bar fixed to top, highlights active page
- Smooth page transitions via React Router
- Tag-based filtering (Talks page)
- External links for social, media, and podcast platforms

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router v7
- Lucide React icons

## Non-functional
- Static site, no backend
- All data in single source file (`src/data/siteData.ts`)
- Component-based architecture
