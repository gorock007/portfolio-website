export type AboutBlock = { label: string; paragraphs: string[] }

// The first block opens the page beside the portrait; the rest are ledgers.
export const aboutBlocks: AboutBlock[] = [
  {
    label: 'a little about me.',
    paragraphs: [
      'I’m Gorock. I live in Sydney, work in IT, and spend most of my time outside work building things.',
      'I’ve always been curious about how things work. Not just technology, but people, intelligence, the world, and why things are the way they are.',
      'Somewhere along the way, building software became more than something I enjoyed doing. It became what I wanted to do with my life.',
    ],
  },
  {
    label: 'how i got here.',
    paragraphs: [
      'I studied software development and now work in enterprise IT operations, dealing with systems that real businesses depend on. It’s taught me how technology works outside tutorials and side projects. Things break, people depend on them, and sometimes you have to figure things out without knowing where to start.',
      'But I’ve always wanted to build my own things.',
      'To take an idea from my head, turn it into something real, put it in front of people, and see what happens.',
      'So I started doing exactly that.',
      'I’ve built web apps, native apps, AI tools, and plenty of experiments that never went anywhere. One of them, NaatiAce, became a real product with paying customers. Others are still evolving. Some I abandoned halfway through.',
      'And almost all of them taught me something.',
    ],
  },
  {
    label: 'figuring things out.',
    paragraphs: [
      'I used to think I needed to know enough before starting something. Now I think that’s backwards.',
      'Some of the most interesting things I’ve built started with me having no idea how I was going to pull them off.',
      'I’d start, get stuck, read, experiment, break things, ask questions, and keep going until I figured it out.',
      'AI has changed that process even more. Things that once felt completely out of reach are suddenly possible for someone willing to put in the effort.',
      'It doesn’t mean I can build anything overnight. But it has changed how I think about my own limitations.',
      'I don’t want to measure what I’m capable of only by what I know today. I’d rather take on something difficult and grow into the person who can deliver it.',
    ],
  },
  {
    label: 'the part i’m still figuring out.',
    paragraphs: [
      'I change my mind a lot. I get excited about ideas, sometimes too excited.',
      'I’ve started projects convinced they were going to become something huge. I’d imagine the product, the company, the freedom of working on something I genuinely cared about.',
      'And when things didn’t work out the way I’d imagined, it used to hit me pretty hard. I’d lose motivation, stop building, and sometimes waste days doing things I didn’t even enjoy.',
      'For a long time, I treated unfinished projects like evidence that I wasn’t getting anywhere.',
      'I don’t see it that way anymore.',
      'I’m learning to separate the excitement of starting something from the discipline of seeing it through. And that something not working out doesn’t mean the time was wasted.',
      'I still fall off track sometimes. But I come back.',
      'And each time, I understand a little more about what it takes to keep going.',
    ],
  },
  {
    label: 'what i’m chasing.',
    paragraphs: [
      'I want to build something big. Not just another side project that looks good on my portfolio.',
      'I want to create products people genuinely need, turn them into real businesses, and eventually build something that can grow beyond me.',
      'I want the freedom to spend my time working on problems I care about, alongside people who are equally curious and ambitious.',
      'I’m especially fascinated by AI. Not just what we can build with it today, but the bigger questions it raises about intelligence, consciousness, and what it means to be human.',
      'Outside my own projects, I organise developer workshops in Sydney, meet other builders, and increasingly share what I’m learning and thinking in public.',
      'For a long time, I was mostly building things quietly. I’m realising there’s value in putting yourself out there, even before you feel ready.',
      'I don’t know exactly where all of this will take me.',
      'But I know the kind of life I want to build.',
      'And I’d rather spend my time trying to make it happen than wondering what could have been.',
    ],
  },
]
