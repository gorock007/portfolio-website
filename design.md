# Design — Gorock Shetty

A locked design system for the portfolio. Every page reads this before visual changes are made.

## Genre

Editorial: personal, direct, warm, and lightly technical.

## Macrostructure family

- Marketing pages: Marquee Hero; the statement is the main visual, with proof below as an index.
- Content indexes: Index-First; links and dates are the layout.
- Content pages: Long Document; readable prose with generous measure and no decorative section labels.

## Theme

- `--color-paper`: `oklch(96% 0.014 82)`
- `--color-paper-2`: `oklch(93% 0.017 82)`
- `--color-paper-3`: `oklch(89% 0.019 82)`
- `--color-ink`: `oklch(18% 0.014 76)`
- `--color-ink-2`: `oklch(29% 0.014 76)`
- `--color-rule`: `oklch(82% 0.018 82)`
- `--color-accent`: `oklch(62% 0.19 36)`
- `--color-focus`: `oklch(55% 0.2 36)`

## Typography

- Display: Instrument Serif, weight 400, roman.
- Body: Instrument Sans, weight 400.
- Outlier: Instrument Sans, weight 600, used only for the wordmark and small utility text.
- Display tracking: `-0.035em`.
- Display scale anchor: `clamp(3rem, 6vw + 0.5rem, 5.25rem)`.

## Spacing

4-point named scale. Values live in `tokens.css`; production styles use named tokens rather than raw spacing values.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out` from `tokens.css`.
- One page-load reveal, restrained link motion, and one character loop for the requested avatar.
- Reduced-motion fallback: static avatar and opacity-only transitions at no more than 150 ms.

## Microinteractions stance

- Focus is immediate and visibly outlined.
- Hover changes one signal only.
- Button presses move by one pixel; no bounce or glow.

## CTA voice

- Primary CTA: typographic link with an animated underline or ink-swap treatment.
- Secondary CTA: plain text link with a directional arrow.

## Per-page allowances

- The homepage may use one Tier-B hand-built SVG avatar.
- About and Writing use typography only.
- Project images are real screenshots with a hairline edge and no simulated browser chrome.

## What pages must share

- Wordmark, palette, type pairing, navigation, focus treatment, and footer rhythm.
- Accent occupies no more than a small highlight area in each viewport.
- Headings remain roman; italics are reserved for running prose.

## What pages may differ on

- Homepage uses the Marquee Hero structure.
- Writing index uses link rows.
- About and article pages use long-form prose measures.

## Exports

### tokens.css

The canonical implementation is in `tokens.css` at the project root.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(96% 0.014 82);
  --color-paper-2: oklch(93% 0.017 82);
  --color-paper-3: oklch(89% 0.019 82);
  --color-ink: oklch(18% 0.014 76);
  --color-ink-2: oklch(29% 0.014 76);
  --color-muted: oklch(43% 0.012 76);
  --color-rule: oklch(82% 0.018 82);
  --color-accent: oklch(62% 0.19 36);
  --color-focus: oklch(55% 0.2 36);
  --font-display: "Instrument Serif", ui-serif, serif;
  --font-body: "Instrument Sans", ui-sans-serif, sans-serif;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 2.5rem;
  --text-md: 1.25rem;
  --text-xl: 1.9531rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(96% 0.014 82)", "$type": "color" },
    "ink": { "$value": "oklch(18% 0.014 76)", "$type": "color" },
    "accent": { "$value": "oklch(62% 0.19 36)", "$type": "color" },
    "focus": { "$value": "oklch(55% 0.2 36)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Instrument Serif, ui-serif, serif", "$type": "fontFamily" },
    "body": { "$value": "Instrument Sans, ui-sans-serif, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "sm": { "$value": "1rem", "$type": "dimension" },
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "lg": { "$value": "2rem", "$type": "dimension" }
  },
  "duration": {
    "micro": { "$value": "120ms", "$type": "duration" },
    "short": { "$value": "220ms", "$type": "duration" },
    "long": { "$value": "420ms", "$type": "duration" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 96% 0.014 82;
  --foreground: 18% 0.014 76;
  --card: 93% 0.017 82;
  --card-foreground: 18% 0.014 76;
  --primary: 62% 0.19 36;
  --primary-foreground: 98% 0.009 82;
  --secondary: 89% 0.019 82;
  --secondary-foreground: 29% 0.014 76;
  --muted: 82% 0.018 82;
  --muted-foreground: 43% 0.012 76;
  --border: 82% 0.018 82;
  --input: 82% 0.018 82;
  --ring: 55% 0.2 36;
  --radius: 0.75rem;
}
```
