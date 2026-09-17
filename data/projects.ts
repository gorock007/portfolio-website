import type { Project } from './types'
import naatiace from '@/assets/images/naatiace.jpg'
import revisit from '@/assets/images/revisit-social-preview.png'
import dontMakeItUgly from '@/assets/images/dont-make-it-ugly-social-preview.png'
import klypst from '@/assets/images/klypst-social-preview.png'

// `size` maps to a tile class; the `featured` ones carry the home grid.
export const projects: Project[] = [
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
  {
    id: 'dont-make-it-ugly',
    title: "Don't Make It Ugly",
    subtitle: "Good design references for whatever you're building.",
    detail:
      'A curated directory of design inspiration, components, libraries, repositories, prompts, and agent resources for people building software with coding agents.',
    proof: ['Curated resources', 'Agent-friendly', 'Built end to end'],
    img: dontMakeItUgly,
    imgAlt:
      "Don't Make It Ugly — good design references for whatever you're building, beside a fanned stack of design site screenshots",
    urlLabel: 'dontmakeitugly.com',
    url: 'https://dontmakeitugly.com/',
    size: 'xl',
    featured: true,
  },
  {
    id: 'klypst',
    title: 'Klypst',
    subtitle: 'Private clipboard history for iPhone.',
    detail:
      'Save what you copy — text, links, images — and bring it back with one press of the Action Button. Built on App Intents and an iOS 26 interactive snippet; nothing leaves the device.',
    proof: ['On-device only', 'No clipboard monitoring', 'One press to capture'],
    img: klypst,
    imgAlt:
      'The Klypst mascot, a stack of orange cards with a face, beside the words “Your clipboard remembers.”',
    urlLabel: 'klypst.vercel.app',
    url: 'https://klypst.vercel.app/',
    size: 'xl',
  },
  {
    id: 'superset-jarvis',
    title: 'Superset Jarvis',
    subtitle: 'An open-source Superset skill: one lead agent, a fleet of workers.',
    detail:
      'You talk to Jarvis. It writes the brief, starts the workers in their own terminals, reviews what they hand back, and owns the commits.',
    proof: ['MIT licensed', 'Runs on Superset', 'Usage-aware model routing'],
    urlLabel: 'github.com',
    url: 'https://github.com/gorock007/superset-jarvis',
    size: 'wide',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
