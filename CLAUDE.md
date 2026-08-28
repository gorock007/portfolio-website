# Portfolio Website

Personal portfolio of Gorock Shetty (founder of NaatiAce, maker of Revisit). React 18 + Vite + Tailwind CSS v4 + Framer Motion, deployed on Netlify.

- Pages live in `src/views/` (Home, About, Work, Writing, WritingPost, NotFound). `Layout` wraps every page with the nav and the footer social row.
- Reusable primitives in `src/components/`; individual grid tiles in `src/components/tiles/`.
- All content is data-driven: `src/data/` (`projects.js`, `writing.js`, `about.js`, `manifesto.js`, `siteLinks.js`).
- Styles: `src/index.css` holds the `@theme` tokens and base layer, and imports `src/styles/{nav,footer,tiles,prose}.css`. There is no tailwind.config — Tailwind v4 CSS-first config.
- Runtime: Node.js 22.12 or newer (see `.nvmrc`).
- Build: `npm run dev` / `npm run build`.

## Design system rules

The site is a **bento-tile portfolio**: a white page carrying a modular grid of large rounded grey tiles, a floating blurred pill nav, and one neutral neo-grotesque typeface. Light mode only. This is a committed direction — keep it coherent, don't drift.

### Color
- Use only the tokens in `@theme` (`paper`, `tile`, `ink`, `ink-display`, `ink-body`, `indicator`, `hairline`, `underline`, `nav-bg`, `tooltip`, `tooltip-ink`). Never invent inline hex values — derive shades with `color-mix()` from an existing token, as the activity heatmap does.
- There is no accent colour. Product screenshots keep their own real colours; nothing else is coloured.
- No dark mode. `#f7f7f9` tiles on `#ffffff` is the whole palette.
- Maintain WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text and UI elements. **Measure against `--color-tile` (`#f7f7f9`), not white** — almost all text sits on a tile, and that costs about 0.3 of a ratio point.
- There are exactly two greys. `--color-ink-display` (`#8a8a8a`, 3.23:1 on tile) is reserved for display type at 24px and above and must never be used at body size. `--color-ink-body` (`#6e6e6e`, 4.77:1 on tile) carries everything else.
- Never communicate state by colour alone.

### Typography
- One family: **Geist** (Google Fonts), weights 400/500/600. It stands in for the reference's Graphik/Söhne, which are commercially licensed — do not add a second family.
- Use the named type classes rather than ad-hoc sizes: `.display-heading`, `.display-2-heading`, `.page-h1`, `.page-h2`, `.project-title`, `.writing-title`, `.stat-label`, `.work-label`. Never set a font size inline.
- The small end of the scale is **12px** (uppercase labels only) and **14px** (meta, chips, captions). There is no 13px and no 15px — if a new size feels needed, one of these two is the answer.
- All-caps with letterspacing is reserved for small section labels (`.stat-label` / `.work-label`).

### Grid & tiles
- The module is **328px on a 16px gutter**. Rows are `minmax(328px, auto)` so a two-row tile is exactly 672px.
- Column bands: 4 columns ≥1392px (max 1360), 3 columns ≥1060px (max 1016), 2 columns ≥768px (max 672), 1 column below (max 328).
- Tile footprints: `sm`/`md` 1×1, `lg` 1×2, `wide` 2×1, `xl` 2×2, `auto` full-width and content-height.
- Every tile is `--color-tile` with `--radius-tile` (32px). Don't introduce other card treatments, borders, or shadows on tiles.
- Compose new tiles with `<Tile size="…">`; don't hand-roll a panel.
- Empty space inside a tile is intentional — the reference is airy. Don't fill it.

### Motion
- Framer Motion only. Tiles enter with the shared variant in `Tile.jsx`: `opacity 0→1`, `y 48→0`, `scale .8→1`, `viewport={{ once: true }}`.
- The app is wrapped in `<MotionConfig reducedMotion="user">` and `src/index.css` has a `prefers-reduced-motion` block — keep both intact.
- State-change transitions (hover, focus, nav indicator) stay in the 0.2–0.3s range.

### Accessibility (non-negotiable)
- Never remove focus outlines. The global `:focus-visible` style in `src/index.css` is the floor.
- Tooltips must open on **focus as well as hover** — see `Tooltip.jsx`.
- Semantic HTML: `<button>` for actions, `<a>` for navigation, one `<h1>` per page, no skipped heading levels.
- Every meaningful image gets descriptive `alt`; decorative ones get `alt=""`.
- Hit targets ≥ 44×44px (nav icons are a 44px box around a 24px glyph; the view toggle buttons are 44×44). Inline text links are exempt.
- Never put `border-radius` on `:focus-visible` — there is no `outline-radius`, so it reshapes the element it outlines.
- Route changes move focus into `<main>` (see `ScrollToTop.jsx`); keep that behaviour when touching routing.

### Banned patterns (AI slop)
- Decorative emoji in headlines, buttons, or lists.
- Gradients of any kind; coloured surfaces.
- Borders or drop shadows on tiles.
- Pure `#FFFFFF` text on pure `#000000` — the tooltip and skip link use `--color-tooltip` / `--color-tooltip-ink` (`#141414` on `#fafafa`) for exactly this reason.
- Lorem ipsum, "Learn more" links to nowhere, redundant headline + subheading pairs.

## Review skills

`.claude/skills/` contains five design-review skills:

- `accessibility-audit` — WCAG/keyboard/motion/forms review
- `ai-slop-check` — detect generic AI-design tropes
- `hierarchy-rhythm-review` — visual hierarchy and spacing/type-scale discipline
- `interaction-states-pass` — hover/active/disabled/focus/loading completeness
- `polish-pass` — umbrella quality gate; run before shipping any redesigned page

After meaningful visual changes, run `polish-pass` (or the relevant narrower skill) before considering the work done.
