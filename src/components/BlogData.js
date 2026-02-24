export const blogPosts = [
  {
    id: 1,
    title: 'Why I Started Vibe Coding — And You Should Too',
    excerpt:
      'Vibe coding changed how I build software. Instead of fighting frameworks, I started describing what I wanted and letting AI handle the boilerplate. Here\'s what I learned after shipping 6 projects this way.',
    content: `Vibe coding changed how I build software. Instead of fighting frameworks, I started describing what I wanted and letting AI handle the boilerplate.

The idea is simple: you describe the vibe — the feel, the flow, the outcome — and use AI tools like Claude Code and Cursor to translate that into working code. It's not about replacing your brain. It's about redirecting your energy from syntax to strategy.

## How I got started

I was building a podcast summarizer and spent two hours debugging a Webpack config. That was my breaking point. I opened Claude, described what I needed, and had a working config in 90 seconds. From that moment, I was hooked.

## What vibe coding actually looks like

1. **Start with a clear outcome.** "I want a card grid with hover animations and gradient borders" beats "make it look cool."
2. **Iterate in conversation.** Treat the AI like a pair programmer. Show it your existing code, ask it to match the style.
3. **Own the architecture.** Let AI write components, but you decide how they connect.
4. **Review everything.** AI-generated code is a first draft, not a final product.

## The results

In three months of vibe coding, I shipped more projects than in the previous year. The quality was higher because I spent time on design decisions instead of boilerplate.

## My toolkit

- **Claude Code** for complex logic and multi-file refactors
- **Cursor** for inline edits and quick iterations
- **ChatGPT** for brainstorming and rubber-ducking

The future isn't about writing every line yourself. It's about knowing what to build and communicating that clearly. Vibe coding is just the beginning.`,
    date: 'Feb 15, 2026',
    readTime: '4 min read',
    tags: ['AI', 'Vibe Coding', 'Productivity'],
  },
  {
    id: 2,
    title: 'Building AI Apps Without a Machine Learning Degree',
    excerpt:
      'You don\'t need to understand transformers to build useful AI products. I\'ve shipped 6 AI-powered apps using APIs and a bit of creativity. Here\'s the practical playbook.',
    content: `You don't need to understand transformers to build useful AI products. I've shipped 6 AI-powered apps using APIs and a bit of creativity.

The barrier to entry for AI development has never been lower. If you can call a REST API, you can build an AI app. Here's how I approach it.

## The API-first mindset

Instead of training models, I use them. OpenAI, Anthropic, and others offer APIs that turn complex AI capabilities into simple HTTP requests. My job is to build great user experiences around those capabilities.

## Project #1: Podcast Summarizer

My first AI app took podcast RSS feeds, extracted episodes, and used GPT-4 with function calling to generate newsletter-style summaries. The AI part was maybe 20% of the work. The other 80% was:

- Building a clean Streamlit UI
- Handling RSS feed parsing edge cases
- Designing the summary format
- Deploying on Modal for serverless execution

## Project #2: SummAIze

An article summarizer that takes any URL and produces a concise summary. Built with React and Redux for state management. The key insight was that the UX around the AI — loading states, error handling, history — matters more than the AI call itself.

## The pattern I follow

Every AI app I build follows the same structure:

1. **Input** — Get data from the user (URL, text, file)
2. **Process** — Send it to an AI API with a well-crafted prompt
3. **Transform** — Shape the response into something useful
4. **Present** — Display it in a clean, intuitive interface

## What I've learned

- **Prompt engineering > model selection.** A well-prompted GPT-3.5 often beats a lazy GPT-4 prompt.
- **Error handling is everything.** APIs fail. Rate limits hit. Tokens run out. Plan for it.
- **Start with the UI.** Design the experience first, then figure out which AI calls you need.

You don't need a PhD. You need curiosity, an API key, and the willingness to ship.`,
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    tags: ['AI', 'Web Dev', 'Tutorial'],
  },
  {
    id: 3,
    title: 'My Content Creation Stack: From Zero to 600K Views',
    excerpt:
      'Breaking down the exact tools, workflow, and mindset that helped me grow a tech content presence on TikTok and beyond.',
    content: `Breaking down the exact tools, workflow, and mindset that helped me grow a tech content presence on TikTok and beyond.

When I started creating content about AI tools, I had zero followers and no idea what I was doing. Here's what worked.

## The content loop

Every piece of content I create follows this loop:

1. **Learn something new** — Try a tool, build a project, read a paper
2. **Document the process** — Screen record, take notes, save screenshots
3. **Distill the insight** — What's the one thing someone needs to know?
4. **Create the content** — Short-form video, blog post, or tweet thread

## My tools

- **CapCut** for video editing (free, fast, good enough)
- **Screen Studio** for cool screen recording demos
- **Notion** for content planning and scripting
- **Canva** for thumbnails and graphics
- **TikTok + Instagram Reels** for distribution

## What actually grows an audience

It's not about going viral. It's about being consistent and useful.

- **Post regularly.** I aim for 3-4 videos per week.
- **Solve real problems.** "How to use Claude Code to build a React app" beats "AI is amazing."
- **Show, don't tell.** Screen recordings of real workflows outperform talking-head explanations.
- **Engage with comments.** Every comment is a content idea.

## The numbers

- **Month 1:** 50 followers, 2K total views
- **Month 3:** 500 followers, 50K total views
- **Month 6:** 3K followers, 200K total views
- **Month 12:** 10K+ followers, 600K+ total views

## The mindset shift

The biggest unlock was realizing that content creation is a skill, not a talent. Every video I made was slightly better than the last. The first 50 were rough. By video 100, I had a system.

Stop waiting for the perfect idea. Start documenting what you're already doing.`,
    date: 'Jan 10, 2026',
    readTime: '4 min read',
    tags: ['Content Creation', 'Growth', 'TikTok'],
  },
];
