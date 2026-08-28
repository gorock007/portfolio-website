# Design — Gorock Shetty

A locked design system for the portfolio. Every route shares this compact, personal interface.

## Genre

Modern-minimal: direct, personal, technical without looking like a product landing page.

## Macrostructure family

- Home: Index-First profile — identity, two project cards, recent public activity.
- Content indexes: Index-First — links and dates provide the structure.
- Content pages: Long Document — comfortable prose with no decorative labels.

## Theme

- `--color-paper`: pure white in light mode, near-black in dark mode.
- `--color-ink`: near-black in light mode, near-white in dark mode.
- `--color-rule`: zero-chroma neutral separator.
- Accent: none. Project imagery may retain its own real product colour.
- Activity levels: monochrome steps only.

## Typography

- Display / body / utility: Inter, weights 400 / 500 / 600 / 700.
- Display tracking: `-0.065em`.
- Home display anchor: `clamp(2rem, 4vw, 3rem)`.
- Single-font system is intentional: the personal writing and product imagery carry the character.

## Spacing

4-point named scale in `tokens.css`. Home content is constrained to `--compact-max` so the main story stays visible with little scrolling.

## Motion

- Avatar: a quiet blink and glance.
- Project cards: one-pixel lift and image scale.
- Activity: opacity-only arrival.
- Reduced-motion fallback: all loops stop and transitions shorten.

## Microinteractions stance

- Visible, immediate focus ring.
- One signal on hover.
- Presses move one pixel; no glow, bounce, or fake chrome.

## Navigation and footer

- Nav: N9 edge-aligned, all links always visible; never a dropdown.
- Footer: Ft2 single-line credit with GitHub and LinkedIn only.
- Theme control: visible text control, white by default and dark on request.

## Per-page allowances

- Home may use the animated portrait, real product captures, and factual GitHub public-event data.
- About and Writing use typography and rules only.
- Real product images never receive simulated browser chrome.

## Exports

### tokens.css

The canonical implementation is [tokens.css](./tokens.css). It defines the light and dark modes plus every typography, spacing, motion, rule, and radius token used by the app.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(100% 0 0);
  --color-ink: oklch(14% 0 0);
  --color-rule: oklch(88% 0 0);
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --spacing-md: 1.5rem;
  --text-md: 1.125rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper": { "$value": "oklch(100% 0 0)", "$type": "color" },
    "ink": { "$value": "oklch(14% 0 0)", "$type": "color" },
    "rule": { "$value": "oklch(88% 0 0)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Inter", "$type": "fontFamily" },
    "body": { "$value": "Inter", "$type": "fontFamily" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 100% 0 0;
  --foreground: 14% 0 0;
  --primary: 14% 0 0;
  --primary-foreground: 100% 0 0;
  --muted: 88% 0 0;
  --muted-foreground: 49% 0 0;
  --border: 88% 0 0;
  --ring: 42% 0 0;
  --radius: 0.65rem;
}
```
