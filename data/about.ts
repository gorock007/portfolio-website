export type AboutBlock = { label: string; paragraphs: string[] }

export const aboutBlocks: AboutBlock[] = [
  {
    label: 'Who I am',
    paragraphs: [
      'I change my mind a lot, usually by building the wrong thing first. Most days I’m in the middle of something: an idea, a project, a theory, a fear, a possibility.',
    ],
  },
  {
    label: 'How I think',
    paragraphs: [
      'When something catches me, I stay with it until I understand it from the inside. Confusion is usually where I start, not something I avoid.',
      'I think about meaning, identity, purpose, time and existence: what a life is beyond what I do or where I’m from.',
    ],
  },
  {
    label: 'What I do now',
    paragraphs: [
      'I build and run AI products from Sydney. NaatiAce is a subscription exam-practice product with paying customers across 55 languages. Revisit is a one-time-purchase Mac app that hands the right project context to Claude Code, Codex, and other MCP clients. Don’t Make It Ugly is a curated directory of design resources for people building software with coding agents.',
      'I learn in reverse: build something real first, then go back and investigate the fundamentals the product forces me to confront.',
    ],
  },
  {
    label: 'How I work',
    paragraphs: ['I fall off track and I come back. Coming back is the part I’ve got good at.'],
  },
  {
    label: 'What I’m after',
    paragraphs: [
      'I want to build something that lasts: a piece of software, a better version of myself, or a way of making sense of being here. Still working on all three.',
    ],
  },
]
