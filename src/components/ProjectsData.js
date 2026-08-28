import naatiace from '../images/naatiace.jpg'
import revisit from '../images/revisit-live.jpg'

export const projectsData = [
  {
    id: 'naatiace',
    number: '01',
    title: 'NaatiAce',
    description: 'AI-powered NAATI CCL practice across 55 languages.',
    proof: ['Subscription product', 'Paying customers', 'Built and operated end to end'],
    img: naatiace,
    imgAlt: 'NaatiAce mock exam dashboard with AI scoring and interpretation feedback',
    urlLabel: 'naatiace.com',
    liveUrl: 'https://naatiace.com/',
    theme: 'mint',
  },
  {
    id: 'revisit',
    number: '02',
    title: 'Revisit',
    description: 'A private Mac project inbox that hands the right context to Claude Code, Codex, and other MCP clients.',
    proof: ['One-time purchase', 'Stripe checkout', 'No tracking'],
    img: revisit,
    imgAlt: 'Revisit Mac app showing prompts, useful notes, and a send action inside a project workspace',
    urlLabel: 'revisit.gorockshetty.com',
    liveUrl: 'https://revisit.gorockshetty.com/',
    theme: 'graphite',
  },
]
