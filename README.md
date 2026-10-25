# Portfolio Website

Personal portfolio for Gorock Shetty: an AI-native product builder and maker of NaatiAce and Revisit. Built with Next.js 16 (App Router), React 19 and TypeScript, styled with hand-written CSS, and deployed to Vercel from `master` at [gorock.sh](https://gorock.sh).

## The idea

If you photograph the sun from one spot at the same hour every day for a year, it draws a figure-eight across the sky called an analemma. The home page draws that loop for noon over Sydney across the last 365 days. Each dot is a day, shaded by that day's GitHub contributions, and the days with a launch or an essay are ringed and labelled. You can move along the loop with the pointer or the arrow keys to read any day.

Two more devices come from the same idea:

- **Stamps.** Every dated thing (a project, a note) carries a small copy of that year's loop with a dot where the sun stood that day.
- **The sky.** The page is light while the sun is up in Sydney and dark once it sets. The header shows where the sun is right now, and the footer lets you pin Day or Night instead.

The sun is the only colour on the site.

## Local development

Requires Node.js 22.12 or newer. The repository includes an `.nvmrc`, so nvm users can run:

```sh
nvm use
npm ci
npm run dev
```

Create a production build with `npm run build` and serve it locally with `npm run start`. `npm run typecheck` runs TypeScript on its own.

`npm run snapshot:activity` refreshes `data/activity.json`, the committed copy of the contribution counts. The live counts come from a public mirror of the GitHub graph and are re-read every 15 minutes. The snapshot is what the loop falls back on when the mirror can't be reached.

## Project structure

- Routes: `app/` — `/`, `/about`, `/work`, `/writings`, `/writings/[id]`, plus `not-found.tsx`, `sitemap.ts`, and `robots.ts`
- Components: `components/` — `Analemma` (the loop), `SunStamp`, `SkyClock`, `SkyControl`, `Header`, `Footer`, `Layout`, `Ledger`, `WorkIndex`, `WritingIndex`
- The astronomy and the year: `lib/sun.ts` (solar position over Sydney, date helpers), `lib/sky.ts` (day or night, plus the pre-paint script), `lib/year.ts` (the 365 days, their counts and events)
- Content: `data/` — `projects.ts`, `writing.ts`, `about.ts`, `manifesto.ts`, `siteLinks.ts`, `activity.json`, with the shared shapes in `types.ts`
- Styles: `styles/globals.css` (tokens for both skies, base, header, footer), `analemma.css`, `pages.css`, `prose.css`
- Images: `assets/images/`, imported statically so `next/image` gets their dimensions at build time

Adding a project to `data/projects.ts` (with its `started` date) or a note to `data/writing.ts` puts it on the home page lists, the Work or Writing page, the sitemap, and on the loop itself if it falls inside the last year.

## Rendering

Everything is a server component by default. The client components are `Header`, `SkyClock`, `SkyControl`, `Analemma` and `RouteFocus`. The home page is rebuilt every 15 minutes so the loop ends on today and picks up new contributions. Every other route prerenders to static HTML.

## Deployment

Vercel builds the project natively, with no adapter. `next build` is the whole build step.
