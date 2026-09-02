import naatiace from '../images/naatiace.jpg'
import revisit from '../images/revisit-social-preview.png'

// `size` maps to a tile class; both of these carry the home grid.
export const projects = [
  {
    id: 'naatiace',
    title: 'NaatiAce',
    subtitle: 'AI-powered NAATI CCL practice across 55 languages.',
    detail:
      'A subscription product with paying customers. Mock exams, AI scoring, and interpretation feedback — designed, built, and operated end to end.',
    proof: ['Subscription', 'Paying customers', 'Built end to end'],
    img: naatiace,
    imgAlt: 'NaatiAce mock exam dashboard with AI scoring and interpretation feedback',
    urlLabel: 'naatiace.com',
    url: 'https://naatiace.com/',
    size: 'xl',
    featured: true,
  },
  {
    id: 'revisit',
    title: 'Revisit',
    subtitle: 'A private Mac project inbox for your coding agents.',
    detail:
      'Hands the right context to Claude Code, Codex, and other MCP clients. One-time purchase, Stripe checkout, no tracking.',
    proof: ['One-time purchase', 'Stripe checkout', 'No tracking'],
    img: revisit,
    imgAlt: 'Revisit — Capture the thought. Let your agent continue.',
    urlLabel: 'revisit.gorockshetty.com',
    url: 'https://revisit.gorockshetty.com/',
    size: 'xl',
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
