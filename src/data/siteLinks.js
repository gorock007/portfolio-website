export const profile = {
  name: 'Gorock Shetty',
  location: 'Sydney, Australia',
  building: { label: 'NaatiAce', url: 'https://naatiace.com/' },
}

// The X profile doubles as the contact route now that email is off the site.
export const contactUrl = 'https://x.com/gorockbits'
export const contactHandle = '@gorockbits'

// Only links with a real destination are rendered in the footer icon row.
export const socialLinks = [
  // Labels name the platform as well as the handle: three of these share
  // @gorockbits, and identical link names pointing at different places are
  // ambiguous in a tooltip and unusable in a screen reader's link list.
  { id: 'github', label: 'GitHub @gorock007', href: 'https://github.com/gorock007', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gorakhshetty/', icon: 'linkedin' },
  { id: 'x', label: 'X @gorockbits', href: contactUrl, icon: 'x' },
  { id: 'instagram', label: 'Instagram @gorockbits', href: 'https://www.instagram.com/gorockbits/', icon: 'instagram' },
  { id: 'tiktok', label: 'TikTok @gorockbits', href: 'https://www.tiktok.com/@gorockbits', icon: 'tiktok' },
]

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/writings', label: 'Writing' },
]

export const stack = ['Claude Code', 'Codex', 'MCP', 'React', 'Stripe', 'Supabase']
