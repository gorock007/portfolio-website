// One featured case study. Structured for additional entries later.
import naatiace from '../images/naatiace.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'NaatiAce',
    img: naatiace,
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
  },
];
