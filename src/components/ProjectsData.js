import naatiace from '../images/naatiace.jpg'
import revisit from '../images/revisit-product.jpg'

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
    description: 'A local-first Mac scratchpad for keeping the useful parts of AI work.',
    proof: ['One-time purchase', 'Stripe checkout', 'No tracking'],
    img: revisit,
    imgAlt: 'Revisit Mac app showing saved AI notes in a compact local-first workspace',
    urlLabel: 'revisit.gorockshetty.com',
    liveUrl: 'https://revisit.gorockshetty.com/',
    theme: 'graphite',
  },
]
