export const profile = {
  name: 'Gorock Shetty',
  location: 'Sydney, Australia',
} as const

// The X profile doubles as the contact route now that email is off the site.
export const contactUrl = 'https://x.com/gorockbits'
export const contactHandle = '@gorockbits'

export type SocialLink = {
  id: string
  /** The platform, which is what the link is called on the page. */
  label: string
  handle: string
  href: string
}

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', handle: '@gorock007', href: 'https://github.com/gorock007' },
  { id: 'x', label: 'X', handle: '@gorockbits', href: contactUrl },
  { id: 'linkedin', label: 'LinkedIn', handle: 'gorakhshetty', href: 'https://www.linkedin.com/in/gorakhshetty/' },
  { id: 'instagram', label: 'Instagram', handle: '@gorockbits', href: 'https://www.instagram.com/gorockbits/' },
  { id: 'tiktok', label: 'TikTok', handle: '@gorockbits', href: 'https://www.tiktok.com/@gorockbits' },
]

export type NavItem = { to: string; label: string }

// The name in the header is the way home, so Home is not repeated here.
export const navItems: NavItem[] = [
  { to: '/work', label: 'Work' },
  { to: '/writings', label: 'Writing' },
  { to: '/about', label: 'About' },
]

export const stack = ['Claude Code', 'Codex', 'MCP', 'Swift', 'React', 'Next.js', 'Stripe', 'Supabase']
