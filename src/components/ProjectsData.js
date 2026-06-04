// Featured case studies. Add more entries as needed.
import naatiace from '../images/naatiace.jpg';
import caid from '../images/caid.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'NaatiAce',
    img: naatiace,
    urlLabel: 'naatiace.com',
    oneLiner: 'An AI platform that helps people pass the NAATI CCL exam.',
    problem:
      'The NAATI CCL exam gates migration points for thousands of people, but realistic practice is scarce, expensive, and slow to grade. Most candidates study blind, with no way to know if they’re actually ready.',
    built:
      'A full AI exam-prep platform: unlimited mock tests across 55 languages where candidates record spoken interpretations and get instant AI scoring on accuracy and fluency — graded with official NAATI deductive marking — plus detailed feedback and progress tracking. I designed, built, and run it end to end, including payments and the free-to-paid funnel.',
    outcome:
      'Live with paying customers, a free tier feeding paid plans, and candidates practicing in their own language on demand.',
    facts: [
      '55 languages',
      'Unlimited mock tests',
      'Official NAATI deductive marking',
      'AI scoring on accuracy & fluency',
      'Instant feedback & progress tracking',
      'Free tier + paid plans',
    ],
    tags: ['AI', 'Full-stack', 'Payments'],
    liveUrl: 'https://naatiace.com',
    ctaLabel: 'Try NaatiAce',
  },
  {
    id: 2,
    title: 'CAID',
    img: caid,
    urlLabel: 'localhost:3001',
    badge: 'Personal tool',
    oneLiner: 'A self-built, AI-powered content-operations dashboard for my gorockbits brand.',
    problem:
      'Running an AI content brand across TikTok, Instagram, and YouTube means juggling planning, analytics, trend research, and scripting across a dozen disconnected tools — slow, scattered, and easy to drop.',
    built:
      'A local web app, deliberately lightweight — vanilla HTML/CSS/JS with a zero-dependency Node proxy — that centralizes the whole operation: a content pipeline (kanban), live performance pulled from TikTok and Instagram (Apify) and YouTube (Data API), AI-assisted trend mining, a reusable hook-formula library, and one-click script generation, all powered by Claude through the local CLI.',
    outcome:
      'One control-room dashboard that automates trend research, hook writing, and content scripting while surfacing live cross-platform metrics — what I use to actually run the brand day to day.',
    facts: [
      'Vanilla JS · zero-dependency Node proxy',
      'Claude-powered scripting & research',
      'Apify TikTok + Instagram scrapers',
      'YouTube Data API metrics',
      'Trend mining + hook library',
      'Content pipeline (kanban)',
    ],
    tags: ['AI', 'Automation', 'Full-stack'],
    liveUrl: null, // local/personal tool — no public URL
    ctaLabel: null,
  },
];
