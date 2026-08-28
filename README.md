# Portfolio Website

Personal portfolio for Gorock Shetty: an AI-native product builder and maker of NaatiAce and Revisit. A bento-tile site built with React 18, Vite, Tailwind CSS v4, and Framer Motion, deployed to Netlify from `master`.

## Local development

Requires Node.js 22.12 or newer. The repository includes an `.nvmrc`, so nvm users can run:

```sh
nvm use
npm ci
npm run dev
```

Create a production build with `npm run build` and preview it locally with `npm run preview`.

## Project structure

- Routes and pages: `src/views/` — Home, About, Work, Writing, WritingPost, NotFound
- Layout and primitives: `src/components/` — `Nav`, `Layout`, `Tile`, `TileGrid`, `GridTopBar`, `Tooltip`, `Icons`, `ListView`
- Individual grid tiles: `src/components/tiles/`
- Content: `src/data/` — `projects.js`, `writing.js`, `about.js`, `manifesto.js`, `siteLinks.js`
- Design tokens and base layer: `src/index.css`; component styles in `src/styles/`
- Netlify deployment configuration: `netlify.toml`

Adding a project to `src/data/projects.js` or a note to `src/data/writing.js` updates the home grid, the Work page, and the Writing index automatically. The writing index keeps a working empty state.
