// The home page's statement, and the beliefs it opens up into. The beliefs
// keep the statement's lowercase voice; the reasons under them are prose.
export const statement = 'i build things.'

export type Belief = { line: string; why: string }

export const beliefs: Belief[] = [
  {
    line: 'i think the fastest way to learn something is to build it.',
    why: 'Not another tutorial. Not another course. Start building, get stuck, figure it out, and keep going.',
  },
  {
    line: 'i think being willing to figure things out is more valuable than knowing everything.',
    why: 'I’ve started projects I had no idea how to build. Some worked, some didn’t. But every time, I came out knowing something I didn’t before.',
  },
  {
    line: 'i think AI is changing what it means to be a builder.',
    why: 'Implementation is getting cheaper. Ideas are easier to test. What matters more now is understanding problems, knowing what to build, and having the judgment to make it useful.',
  },
  {
    line: 'i think we’re still very early.',
    why: 'I don’t know exactly what the world looks like in ten years. But I want to be close enough to the frontier to help shape what comes next.',
  },
]
