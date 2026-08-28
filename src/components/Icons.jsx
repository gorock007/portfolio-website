// 24×24 line icons, drawn inline so the nav has no icon-font dependency.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

const solid = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true', focusable: 'false' }

export const MailIcon = () => (
  <svg {...base}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
    <path d="m3.5 7.5 7.2 5.1a2.2 2.2 0 0 0 2.6 0l7.2-5.1" />
  </svg>
)

export const GitHubIcon = () => (
  <svg {...solid}>
    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.5l-.01-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9l-.01 2.82c0 .28.18.6.69.5A10.03 10.03 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
  </svg>
)

export const LinkedInIcon = () => (
  <svg {...solid}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.74-2.75-1.75 0-2.02 1.31-2.02 2.66v5.14h-4v-11Z" />
  </svg>
)

export const XIcon = () => (
  <svg {...solid}>
    <path d="M17.2 3h3.2l-7 8 8.24 10h-6.45l-5.06-6.1L4.4 21H1.2l7.5-8.57L.8 3h6.6l4.58 5.58L17.2 3Zm-1.13 16.1h1.78L7.02 4.8H5.11l10.96 14.3Z" />
  </svg>
)

export const InstagramIcon = () => (
  <svg {...base}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const TikTokIcon = () => (
  <svg {...solid}>
    <path d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.1-2.55V9.5a5.85 5.85 0 1 0 5.1 5.8V8.9a6.6 6.6 0 0 0 4 1.35v-3.2A3.55 3.55 0 0 1 16.5 2Z" />
  </svg>
)

export const GridIcon = () => (
  <svg {...base}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
  </svg>
)

export const ListIcon = () => (
  <svg {...base}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </svg>
)

export const icons = {
  mail: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
}
