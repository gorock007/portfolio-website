# Portfolio Website

Personal portfolio for Gorock Shetty: an AI-native product builder and maker of NaatiAce and Revisit. Built with React 18, Vite, Tailwind CSS v4, and Framer Motion, and deployed to Netlify from `master`.

## Local development

Requires Node.js 22.12 or newer. The repository includes an `.nvmrc`, so nvm users can run:

```sh
nvm use
npm ci
npm run dev
```

Create a production build with `npm run build` and preview it locally with `npm run preview`.

## Project structure

- Routes and pages: `src/views/`
- Reusable homepage and writing sections: `src/components/`
- Featured products: `src/components/ProjectsData.js`
- Future writing entries: `src/components/BlogData.js`
- Design tokens and global styles: `src/index.css`
- Netlify deployment configuration: `netlify.toml`

The writing index intentionally supports an empty state. Add entries to `BlogData.js` when a note is ready to publish; both the homepage preview and writing route update automatically.
