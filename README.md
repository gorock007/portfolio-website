# Portfolio Website

Personal portfolio for Gorock Shetty, founder of NaatiAce. Built with React 18, Vite, Tailwind CSS v4, and Framer Motion, and deployed to Netlify from `master`.

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
- Reusable page sections: `src/components/`
- Project and writing content: `src/components/ProjectsData.js` and `src/components/BlogData.js`
- Design tokens and global styles: `src/index.css`
- Netlify deployment configuration: `netlify.toml`
