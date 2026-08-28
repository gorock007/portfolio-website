export const profile = {
  name: 'Gorock Shetty',
  location: 'Sydney, Australia',
  email: 'gorock397@gmail.com',
  building: { label: 'NaatiAce', url: 'https://naatiace.com/' },
}

// Only links with a real destination are rendered in the nav icon row.
// TODO: add Instagram and TikTok once the handles are confirmed.
export const socialLinks = [
  { id: 'email', label: 'Email me', href: `mailto:${profile.email}`, icon: 'mail' },
  { id: 'github', label: '@gorock007', href: 'https://github.com/gorock007', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gorakhshetty/', icon: 'linkedin' },
  { id: 'x', label: '@gorockbits', href: 'https://x.com/gorockbits', icon: 'x' },
  // { id: 'instagram', label: '@handle', href: 'https://instagram.com/HANDLE', icon: 'instagram' },
  // { id: 'tiktok', label: '@handle', href: 'https://tiktok.com/@HANDLE', icon: 'tiktok' },
]

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/writings', label: 'Writing' },
]

export const stack = ['Claude Code', 'Codex', 'MCP', 'React', 'Stripe', 'Supabase']
