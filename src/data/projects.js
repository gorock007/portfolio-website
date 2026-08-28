import naatiace from '../images/naatiace.jpg'
import revisit from '../images/revisit-live.jpg'
import summaize from '../images/summaize.png'
import imagegenerator from '../images/imagegenerator.png'
import crypto from '../images/crypto.png'
import podcast from '../images/podcast.jpeg'
import scorekeeper from '../images/scorekeeper.png'
import dbs from '../images/dbs.png'

// `size` maps to a tile class; the first two carry the home grid.
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
    imgAlt: 'Revisit Mac app showing prompts, useful notes, and a send action inside a project workspace',
    urlLabel: 'revisit.gorockshetty.com',
    url: 'https://revisit.gorockshetty.com/',
    size: 'xl',
    featured: true,
  },
  {
    id: 'make-product-viral',
    title: 'make-product-viral',
    subtitle: 'A Claude Code skill that audits a landing page for virality.',
    detail: 'Scores any product page against the 32 Principles of a Viral Product and returns prioritised fixes.',
    proof: ['Open source', 'Claude Code skill'],
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/make-product-viral',
    size: 'wide',
  },
  {
    id: 'summaize',
    title: 'summAIze',
    subtitle: 'Article and URL summaries in a click.',
    img: summaize,
    imgAlt: 'summAIze web app condensing an article URL into a short summary',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/summAIze',
    size: 'sm',
  },
  {
    id: 'image-generator',
    title: 'AI Image Generator',
    subtitle: 'Text-to-image, built to learn the pipeline.',
    img: imagegenerator,
    imgAlt: 'AI image generator interface with a text prompt and generated result',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/ai-image-generator',
    size: 'sm',
  },
  {
    id: 'podcast-summarizer',
    title: 'Podcast Summarizer',
    subtitle: 'Transcribe an episode, keep the argument.',
    img: podcast,
    imgAlt: 'Podcast summarizer output showing a transcript condensed into key points',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/podcast-summarizer',
    size: 'sm',
  },
  {
    id: 'crypto-app',
    title: 'Crypto App',
    subtitle: 'Live market data, charted.',
    img: crypto,
    imgAlt: 'Cryptocurrency tracking app showing price charts and market data',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/crypto-app',
    size: 'sm',
  },
  {
    id: 'dbs-consulting',
    title: 'DBS Consulting',
    subtitle: 'A consulting site, built for a client.',
    img: dbs,
    imgAlt: 'DBS Consulting marketing website homepage',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/dbs-consulting',
    size: 'sm',
  },
  {
    id: 'scorekeeper',
    title: 'Ping Pong ScoreKeeper',
    subtitle: 'The first thing I ever shipped.',
    img: scorekeeper,
    imgAlt: 'Ping pong score keeper web app with two player scores',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/PingPong-ScoreKeeper',
    size: 'sm',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
