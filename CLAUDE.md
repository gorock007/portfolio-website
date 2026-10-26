# Portfolio Website

Personal portfolio of Gorock Shetty (founder of NaatiAce, maker of Revisit). Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4 (preflight only; styles are hand-written CSS), deployed on Vercel at gorock.sh.

- Routes live in `app/` (`/`, `/about`, `/work`, `/writings`, `/writings/[id]`, `not-found.tsx`). `Layout` renders the `<main>` region; `app/layout.tsx` renders `Header` and `Footer` around the route slot so they persist across navigation.
- Server components by default. The client boundaries are `Header` (for `aria-current`), `SkyClock`, `Analemma`, and `RouteFocus`.
- All content is data-driven: `data/` (`projects.ts`, `writing.ts`, `about.ts`, `manifesto.ts`, `siteLinks.ts`, shapes in `types.ts`). Every project has a `tier` (`product` | `tool`), a `kind`, and a `started` date (`YYYY-MM-DD`, the repo's first day) — the date is what places it on the loop and on its stamp.
- `data/activity.json` is a committed snapshot of the GitHub contribution counts. `lib/year.ts` lays live counts from the public mirror over it, so the loop never draws empty. Refresh it with `npm run snapshot:activity`.
- `lib/sun.ts` is the astronomy (NOAA solar position for Sydney) and the locale-free date helpers. `lib/sky.ts` decides day or night and holds `SKY_SCRIPT`, the pre-paint copy of the same maths. If you change one, change the other.
- Site-wide constants in `lib/site.ts` — the canonical origin, Open Graph and Twitter defaults, read by every page's metadata plus `sitemap.ts` and `robots.ts`. Never hard-code the domain anywhere else.
- Styles: `styles/globals.css` (tokens, base, header, footer) imports `analemma.css`, `pages.css`, `prose.css`.
- Images live in `assets/images/` and are imported statically so `next/image` gets their dimensions at build time. `public/og.jpg` is the social card (the loop beside "i build things.").
- Runtime: Node.js 22.12 or newer (see `.nvmrc`).
- Build: `npm run dev` / `npm run build` / `npm run typecheck`.

## Design system rules

The site is **an almanac kept by the sun**. The home page plots the last 365 days on the noon-sun analemma over Sydney — the figure-eight the sun draws if you photograph it at the same hour every day — one dot per day, darker the more code was shipped that day, ringed where something launched or an essay was published. Everything else follows from that one idea. This is a committed direction — keep it coherent, don't drift.

### The three devices
- **The loop** (`components/Analemma.tsx`). Real geometry: altitude and azimuth at 12:00 AEST (standard time, never DST — daylight saving tears the figure in two), east–west stretched ×3 (`EAST_WEST_STRETCH`). Don't fake or redraw the shape.
- **The stamp** (`components/SunStamp.tsx`). Every dated thing — a project, a note, the 404 — carries a tiny copy of that year's loop with a dot on its day, like a postmark. New dated content gets one; nothing undated does.
- **The sky**. `<html data-sky="day|night">` follows whether the sun is up in Sydney right now, set before first paint by `SKY_SCRIPT` and kept current by `SkyClock`. Every visitor gets Sydney's sky, wherever they are; there is no override and no `prefers-color-scheme` theme — the sky *is* the theme. (`SKY_SCRIPT` clears the old `localStorage.sky` pin so no one stays stuck on it.)

### Color
- Tokens live in `:root` / `:root[data-sky="night"]` in `styles/globals.css`: `--paper`, `--ink`, `--ink-2`, `--sun`, `--rule`, `--wash` (hover ground), `--press` (active ground), `--image-dim`. Never invent inline hex values; derive with `color-mix()` from a token.
- **The only colour is the sun** (`--sun`): today's dot on the loop, the glyph in the header, a stamp's dot on hover or on an entry page. Screenshots and photos keep their own colours (the portrait is greyscale until hovered). Nothing else is coloured.
- Exactly two text inks. `--ink-2` is 5.74:1 on day paper and 5.28:1 on `--wash` (the hover ground); 7.0:1 at night. Measure new pairings against `--wash`, not just paper, and in **both** skies.
- Drawn SVG covers get `.is-drawing` so night inverts them instead of leaving a pale slab.
- Never communicate state by colour alone (the active nav item is underlined).

### Typography
- Geist for what is read, Geist Mono for what is measured (dates, altitudes, counts, kinds). No third family.
- Sizes: 12 (mono only — the one exception is the event labels inside the loop, 12px sans, because mono is too wide for their columns), 14 (labels, captions), 16 and 18 (interface, lists, body), 19 (article body), 22 (lead, article h2, tool titles), and the display classes `.display`, `.page-title`, `.article-title`, `.entry-title`/`.note-title`. No other ad-hoc sizes.
- No all-caps labels. Section labels are `.ledger-label`: 14px, `--ink-2`, sentence case — except on the home page and in the footer, which speak in the manifesto's lowercase voice with a closing full stop ("work.", "elsewhere.").
- The manifesto keeps its lowercase voice.

### Layout
- One section shape: `Ledger` — a 200px label column (`--label-col`, sticky) and a wide body, ruled off by a 1px `--rule`. Page heads use the same two columns so everything lines up down the page.
- Lists are `.index` rows: stamp, title, description, mono meta, arrow. Hairlines between rows, `--wash` on hover. No cards, no tiles, no shadows; captures get a 1px `--rule` ring and a 6px radius, nothing more.
- Spacing comes from the `--s-1`…`--s-9` scale (4, 8, 12, 16, 24, 32, 48, 64, 96). Ledger labels drop to the first line of their body via the `:has()` rules in `pages.css` — add one when a ledger body starts with something new.
- One-line `.index` rows and two-column product entries only start at 1240px; below that they stack, so nothing folds into a narrow tower in the 1000–1240 band.
- Content width tops out at 1280px with a `clamp(16px, 4vw, 48px)` gutter; notes read in a 720px column.
- Below 560px the loop drops its label columns and zooms (`--crop`) so the figure fills the width; the readout names the days instead.

### Motion
- CSS only — there is no animation library. The loop draws itself in date order on load (`--i` × 3.5ms), then its rings, labels and the sun. Pages fade up 8px on mount (0.4s). State transitions stay within 0.2–0.3s. A change of sky is one View Transition crossfade of the whole page (`applySky`), never per-token CSS transitions, which pass through unreadable in-between greys.
- `styles/globals.css` has a `prefers-reduced-motion` block that flattens every animation and transition — keep it intact.

### Accessibility (non-negotiable)
- The loop: pointing previews a day, clicking pins it and focuses the slider so the arrow keys carry on from there (with a Back to today button), Escape or End returns to today. Earlier / Later buttons under it step between the ringed days, which is how a phone gets around. A mouse resting on the figure never overrides a keyboard selection.
- The loop is one tab stop: `role="slider"` with `aria-valuetext` describing the day ("Fri 18 Sep 2026, 35 contributions, started Jev Atlas"); arrows step a day, Page Up/Down a week, Home/End the ends. The svg itself is `aria-hidden`. Everything on it is also in the Work and Writing lists as real links.
- `role="list"` on every styled `<ul>`/`<ol>` — the global `list-style: none` makes Safari drop the role.
- Never remove focus outlines; never put `border-radius` on `:focus-visible`.
- Semantic HTML: `<button>` for actions, `<a>` for navigation, one `<h1>` per page, no skipped heading levels.
- Every meaningful image gets descriptive `alt`; decorative ones (a capture beside its own title) get `alt=""`.
- Hit targets ≥ 44px tall for nav, footer, the loop's readout buttons and closing links. Inline text links are exempt.
- Hover grounds sit inside `@media (hover: hover)`; every hover has a matching `:focus-visible`, and pressables get `--press` on `:active`.
- `@media (forced-colors: active)` in `analemma.css` maps the SVG fills to system colours — extend it for any new SVG.
- External links carry a visually hidden "(opens in a new tab)" where they are list rows.
- Route changes move focus into `<main>` (`RouteFocus.tsx`); keep that behaviour when touching routing.
- Times and dates are formatted locale-free (`formatDay`) or after mount (`SkyClock`), so server and client render the same text.

### Banned patterns (AI slop)
- Decorative emoji in headlines, buttons, or lists.
- Gradients of any kind; coloured surfaces; a second accent colour.
- Cards, tiles, drop shadows, glassmorphism.
- Pure `#FFFFFF` on pure `#000000` (night paper is `#0b0b0c`, night ink `#ececec`).
- Lorem ipsum, "Learn more" links to nowhere, redundant headline + subheading pairs.
- Fake data on the loop. Every dot is a real day, every ring a real date from `data/`.

## Review skills

`.claude/skills/` contains five design-review skills:

- `accessibility-audit` — WCAG/keyboard/motion/forms review
- `ai-slop-check` — detect generic AI-design tropes
- `hierarchy-rhythm-review` — visual hierarchy and spacing/type-scale discipline
- `interaction-states-pass` — hover/active/disabled/focus/loading completeness
- `polish-pass` — umbrella quality gate; run before shipping any redesigned page

After meaningful visual changes, run `polish-pass` (or the relevant narrower skill) before considering the work done.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
