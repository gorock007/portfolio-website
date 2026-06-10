# Portfolio Website

Personal portfolio of Gorock Shetty (founder of NaatiAce). React 18 + Vite + Tailwind CSS v4 + Framer Motion, deployed on Netlify.

- Pages live in `src/views/` (Home, Blog, BlogPost), sections in `src/components/`.
- All design tokens live in `src/index.css` under `@theme`. There is no tailwind.config — Tailwind v4 CSS-first config.
- Project/blog content is data-driven: `src/components/ProjectsData.js`, `src/components/BlogData.js`.
- Build: `npm run dev` / `npm run build`.

## Design system rules

The site follows a deliberate **mono-ink editorial** direction: warm paper background, near-black ink, one terracotta accent (`--color-accent`) used sparingly. This was a committed choice — keep it coherent, don't drift.

### Color
- Use only the tokens in `@theme` (`paper`, `surface`, `ink`, `ink-light`, `muted`, `border`, `accent`). Never invent inline hex values.
- The accent is for small emphasis (dots, hover tints, active markers) — never large fills.
- Maintain WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text and UI elements.
- Never communicate state by color alone.

### Typography
- Two families only: Syne (`font-heading`) for headings, Plus Jakarta Sans (`font-body`) for everything else.
- Snap font sizes to Tailwind's scale (`text-xs`, `text-sm`, `text-base`, `text-lg`, …). No arbitrary values like `text-[15px]` — body copy is `text-base` minimum, chip/meta labels are `text-xs`.
- All-caps with letterspacing is reserved for section labels (the `text-xs uppercase tracking-[0.2em]` pattern).

### Spacing & layout
- Stick to Tailwind's 4px-based spacing scale; no arbitrary pixel values.
- Sections use `container-editorial` (max-width 64rem) and `section-rhythm` (clamp-based vertical padding). Reuse them instead of ad-hoc padding.
- Empty space is intentional — don't fill it.

### Motion
- Framer Motion only, with the established pattern: fade + small y-offset, 0.4–0.7s, `viewport={{ once: true }}`.
- The app is wrapped in `<MotionConfig reducedMotion="user">` and `src/index.css` has a `prefers-reduced-motion` block — keep both intact when adding animation.
- State-change transitions (hover, focus) stay in the 0.2–0.3s range.

### Accessibility (non-negotiable)
- Never remove focus outlines. The global `:focus-visible` style in `src/index.css` is the floor.
- Semantic HTML: `<button>` for actions, `<a>` for navigation, one `<h1>` per page, no skipped heading levels.
- Every meaningful image gets descriptive `alt`; decorative ones get `alt=""`.
- Hit targets ≥ 44×44px (e.g., footer social icons are `w-11 h-11`).

### Banned patterns (AI slop)
- Decorative emoji in headlines, buttons, or lists.
- Rainbow / multi-stop gradients; large saturated gradient surfaces.
- The default `border-radius + border-left: 4px solid` card template.
- Pure `#FFFFFF` on pure `#000000`.
- Lorem ipsum, "Learn more" links to nowhere, redundant headline + subheading pairs.

## Review skills

`.claude/skills/` contains five design-review skills (adapted from [Trystan-SA/claude-design-system-prompt](https://github.com/Trystan-SA/claude-design-system-prompt)):

- `accessibility-audit` — WCAG/keyboard/motion/forms review
- `ai-slop-check` — detect generic AI-design tropes
- `hierarchy-rhythm-review` — visual hierarchy and spacing/type-scale discipline
- `interaction-states-pass` — hover/active/disabled/focus/loading completeness
- `polish-pass` — umbrella quality gate; run before shipping any redesigned page

After meaningful visual changes, run `polish-pass` (or the relevant narrower skill) before considering the work done.
