// One featured case study. Structured for additional entries later.
// img: drop a real screenshot into src/images/ and import it here when available.

export const projectsData = [
  {
    id: 1,
    title: 'NaatiAce',
    img: null, // TODO: replace with real screenshot in src/images/
    oneLiner: 'An AI platform that helps people pass the NAATI CCL exam.',
    problem:
      'The NAATI CCL exam gates migration points for thousands of people, but realistic practice is scarce, expensive, and slow to grade. Most candidates study blind, with no way to know if they’re actually ready.',
    built:
      'A full AI exam-prep platform: it generates realistic practice tests across 55 languages, scores spoken responses with AI, and returns detailed feedback and progress tracking — the whole loop a candidate needs to improve. I designed, built, and run it end to end, including payments and the free-to-paid funnel.',
    outcome:
      'Live with paying customers, a free tier feeding paid plans, and candidates practicing in their own language on demand.',
    facts: [
      '55 languages',
      'AI-generated practice tests',
      'AI scoring & feedback',
      'Progress tracking',
      'Free tier + paid plans',
      'Paying customers',
    ],
    tags: ['AI', 'Full-stack', 'Payments'],
    liveUrl: 'https://naatiace.com',
  },
];
