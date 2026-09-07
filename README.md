# Portfolio Website

Personal portfolio for Gorock Shetty: an AI-native product builder and maker of NaatiAce and Revisit. A bento-tile site built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion, deployed to Vercel from `master` at [gorakh.sh](https://gorakh.sh).

## Local development

Requires Node.js 22.12 or newer. The repository includes an `.nvmrc`, so nvm users can run:

```sh
nvm use
npm ci
npm run dev
```

Create a production build with `npm run build` and serve it locally with `npm run start`. `npm run typecheck` runs TypeScript on its own.

## Project structure

- Routes: `app/` — `/`, `/about`, `/work`, `/writings`, `/writings/[id]`, plus `not-found.tsx`, `sitemap.ts`, and `robots.ts`
- Layout and primitives: `components/` — `Nav`, `Layout`, `Tile`, `TileGrid`, `ViewSwitcher`, `GridTopBar`, `Tooltip`, `Icons`, `ListView`
- Individual grid tiles: `components/tiles/`
- Content: `data/` — `projects.ts`, `writing.ts`, `about.ts`, `manifesto.ts`, `siteLinks.ts`, with the shared shapes in `types.ts`
- Site-wide constants and the font: `lib/` — `site.ts` (canonical origin, Open Graph, Twitter), `fonts.ts`, `renderContent.tsx`
- Design tokens and base layer: `styles/globals.css`; component styles alongside it in `styles/`
- Images: `assets/images/`, imported statically so `next/image` gets their dimensions at build time

Adding a project to `data/projects.ts` or a note to `data/writing.ts` updates the home grid, the Work page, the Writing index, and the sitemap automatically. The writing index keeps a working empty state.

## Rendering

Everything is a server component by default. The client boundaries are the ones that need them: `Providers` (`MotionConfig`), `Tile`, `Nav`, `DotPattern`, `Tooltip`, `ReadingRoom`, `RouteFocus`, `FadeIn`, `ActivityTile`, and `ViewSwitcher`, which owns the grid/list toggle so the pages around it stay on the server. Every route prerenders to static HTML, so each one is directly addressable and refresh-safe.

## Deployment

Vercel builds the project natively — no `vercel.json` and no adapter. `next build` is the whole build step.
