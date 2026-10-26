import type { Project } from './types'
import naatiace from '@/assets/images/naatiace.jpg'
import revisit from '@/assets/images/revisit-social-preview.png'
import dontMakeItUgly from '@/assets/images/dont-make-it-ugly-social-preview.png'
import klypst from '@/assets/images/klypst-social-preview.png'

// Newest first within each tier. `started` is the repository's first day, so
// the home page can place each one on the loop.
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
    tier: 'product',
    kind: 'Web product',
    started: '2026-04-02',
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
    tier: 'product',
    kind: 'Mac app',
    started: '2026-07-30',
  },
  {
    id: 'dont-make-it-ugly',
    title: 'Don’t Make It Ugly',
    subtitle: 'Good design references for whatever you’re building.',
    detail:
      'A curated directory of design inspiration, components, libraries, repositories, prompts, and agent resources for people building software with coding agents. Its skills put a DESIGN.md contract in the repo and check the build against it.',
    proof: ['Curated resources', 'Agent skills', 'Built end to end'],
    img: dontMakeItUgly,
    imgAlt:
      'Don’t Make It Ugly — good design references for whatever you’re building, beside a fanned stack of design site screenshots',
    urlLabel: 'dontmakeitugly.com',
    url: 'https://dontmakeitugly.com/',
    tier: 'product',
    kind: 'Directory',
    started: '2026-09-02',
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
      'The Klypst landing page: the mascot, a friendly stack of orange cards, beside “Your clipboard remembers.” and a Coming soon button, with saved clips floating around the edges.',
    urlLabel: 'klypst.vercel.app',
    url: 'https://klypst.vercel.app/',
    tier: 'product',
    kind: 'iPhone app',
    started: '2026-09-09',
  },

  {
    id: 'cc-usage-audit',
    title: 'cc-usage-audit',
    subtitle: 'Find out where your Claude Code usage actually goes.',
    detail:
      'Reads the session transcripts Claude Code already keeps, prices every request at API rates, and shows what drove the spend: models, subagents, cache reloads after an idle gap, headless hooks that fire on every stop, your worst five-hour window. One Python file, no dependencies, no network.',
    proof: ['Local only', 'One file', 'Python 3.8+'],
    urlLabel: 'github.com/gorock007/cc-usage-audit',
    url: 'https://github.com/gorock007/cc-usage-audit',
    tier: 'tool',
    kind: 'CLI',
    started: '2026-09-28',
  },
  {
    id: 'jev-atlas',
    title: 'Jev Atlas',
    subtitle: 'An evidence-first field guide to Jev, for people and coding agents.',
    detail:
      'Independent research on TypeSafe AI’s System One model: 31 build blueprints mapped to the property of Jev each one depends on, a fit checker for your own workflow, and every claim traced to its evidence — a vendor claim stays a vendor claim. Ships a read-only MCP server with five tools.',
    proof: ['Read-only MCP server', '31 blueprints', 'Independent'],
    urlLabel: 'jev.gorock.sh',
    url: 'https://jev.gorock.sh/',
    tier: 'tool',
    kind: 'Research site',
    started: '2026-09-18',
  },
  {
    id: 'jarvis',
    title: 'Jarvis',
    subtitle: 'You talk to one agent. A team of agents does the building.',
    detail:
      'An open-source Claude Code plugin. Jarvis writes the brief, starts workers — Claude Code, Codex, OpenCode — in their own terminals in Superset, Ultron or tmux, reviews what they hand back, and owns the commits. Routes each task to a model by the kind of decision in it, and spends less as your usage runs low.',
    proof: ['MIT licensed', 'Usage-aware model routing', 'Any agent CLI'],
    urlLabel: 'github.com/gorock007/jarvis',
    url: 'https://github.com/gorock007/jarvis',
    tier: 'tool',
    kind: 'Claude Code plugin',
    started: '2026-09-17',
  },
  {
    id: 'naatiace-practice-studio',
    title: 'NaatiAce Practice Studio',
    subtitle: 'Your own AI agent becomes your NAATI CCL examiner.',
    detail:
      'Built for the WebMCP Challenge. The page exposes WebMCP tools, so the agent in your browser picks the dialogue, plays each segment, waits while you interpret out loud, scores you against a band rubric and drills the terms you missed. No login, no keys, no backend.',
    proof: ['WebMCP-native', 'Works offline', 'AGPL-3.0'],
    urlLabel: 'github.com/gorock007/naatiace-practice-studio',
    url: 'https://github.com/gorock007/naatiace-practice-studio',
    tier: 'tool',
    kind: 'WebMCP app',
    started: '2026-08-31',
  },
  {
    id: 'make-product-viral',
    title: 'make-product-viral',
    subtitle: 'Grades a landing page against the 32 Principles of a Viral Product.',
    detail:
      'A Claude Code skill. It reads the public surface of your product — hero, pricing, OG image, CTA — scores all 32 principles with a file:line quote for each, writes before-and-after copy for the worst five, then makes the fixes you pick.',
    proof: ['Claude Code skill', 'Scores 0–100', 'Edits your code'],
    urlLabel: 'github.com/gorock007/make-product-viral',
    url: 'https://github.com/gorock007/make-product-viral',
    tier: 'tool',
    kind: 'Claude Code skill',
    started: '2026-08-18',
  },
]

export const productProjects = projects.filter((project) => project.tier === 'product')
export const toolProjects = projects.filter((project) => project.tier === 'tool')
