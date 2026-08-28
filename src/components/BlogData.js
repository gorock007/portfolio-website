import aiSkillsCover from '../images/ai-skills-cover.jpg'

// Writing entries. Add new notes here; the homepage and writing index update automatically.
export const blogPosts = [
  {
    id: 'ai-skills-that-compound',
    title: 'The AI Skills That Won’t Become Obsolete',
    excerpt: 'As AI makes implementation cheaper, understanding reality, thinking clearly, articulating intent, and judgment become more valuable.',
    date: '28 August 2026',
    readTime: '8 min read',
    tags: ['AI', 'Building', 'Judgment'],
    coverImage: aiSkillsCover,
    coverImageAlt: 'Editorial illustration of a builder choosing a single path from many abstract options',
    sourceUrl: 'https://x.com/kunchenguid/status/2093042507580067889?s=20',
    sourceLabel: 'Inspired by a post from @kunchenguid on X',
    content: `I recently came across a post that made me rethink what I’m actually trying to get good at in AI.

The author had been building agents since the GPT-4 days. Back then, even getting a model to reliably edit a file was difficult. Developers built all kinds of harness-level tricks around the models just to make them useful.

Then the models got better.

Claude 3.5 Sonnet arrived with much stronger coding and tool-use capabilities, and suddenly many of those clever workarounds weren’t nearly as important.

The author’s point was simple: **eventually, the models just know.**

They connected this to Rich Sutton’s *The Bitter Lesson*: general methods that scale with computation and learning tend to eventually outperform systems built around carefully engineered human knowledge.

That idea has been stuck in my head, because I think it changes what we should actually be learning.

## We might be optimizing for skills with very short expiry dates

Look at how we work with coding agents today.

We have CLAUDE.md files, AGENTS.md files, custom skills, context engineering, compaction strategies, planning modes, subagents, carefully designed prompts, and increasingly sophisticated agent harnesses.

I use many of these things myself. They’re useful.

But I’m starting to think there’s a difference between **using these techniques** and **building your expertise around them**.

A perfectly engineered CLAUDE.md might make an agent significantly better today. But what happens when the next generation of models understands your repository well enough that it barely needs one?

What happens when context compaction becomes something the model does better than anything we could manually design? Or when planning, code review, and tool selection become native model capabilities?

The specific techniques might disappear. The underlying problems won’t.

## Learning by building has changed the order for me

Instead of learning software development in the traditional order — fundamentals, courses, tutorials, small projects, then eventually something real — I’ve increasingly been doing almost the reverse.

**Build something real first, then investigate the fundamentals as the product forces me to confront them.**

Claude Code, Codex, and other AI tools can now take care of a surprising amount of implementation. But something interesting happens when you actually ship.

AI can write the authentication code. I still need to understand why authentication is designed that way.

It can create the database schema. I need to understand the consequences of that architecture.

It can implement rate limiting. I need to understand what we’re protecting, what could fail, and what trade-offs we’re making.

It can suggest five different solutions. Somebody still has to decide which one belongs in the product.

The better these tools become, the more I’ve found myself asking:

**Why is it built this way?**

**What assumption are we making?**

**What breaks if we change this?**

**What trade-off did we just accept?**

**Is this solving the actual problem, or just producing technically impressive code?**

AI hasn’t made understanding less important. It has made it possible to reach the situations where understanding matters much faster.

## What actually compounds

The original post proposed three fundamentals that remain valuable even as models improve. I think they’re a useful framework.

### 1. Understanding the world

Before asking AI to solve something, you need good inputs.

What are people actually doing? What problems are they experiencing? Which problems are painful enough to solve? What constraints exist outside your codebase? What will somebody actually pay for?

A sufficiently capable model might generate 100 SaaS ideas before breakfast. That doesn’t mean any of them matter.

Understanding reality is what separates something that *can be built* from something that *should be built*.

### 2. First-principles thinking

Once you understand the situation, you need to reason about it.

Instead of following the trend because “AI agents are growing,” ask what became possible that wasn’t possible before. Ask what became dramatically cheaper. Ask which assumptions about existing products no longer need to be true. Ask where the bottleneck moves if intelligence becomes abundant.

Tools can help answer these questions. Learning how to think from constraints rather than trends is much harder to obsolete.

### 3. Articulating your thoughts

This might become one of the most underrated skills of the AI era.

Imagine models becoming capable enough to build almost anything you can reasonably describe. At that point, the bottleneck isn’t necessarily implementation. It’s intent.

Can you explain what you’re trying to accomplish? Can you describe the problem precisely? Can you communicate the constraints? Can you distinguish what matters from what doesn’t? Can you explain what success looks like?

That’s very different from memorising “good prompts.” Prompt engineering may change. Clear thinking expressed clearly probably won’t.

### 4. Judgment

This is the part I keep coming back to.

If AI makes execution increasingly cheap, choosing what deserves execution becomes more expensive.

An agent can give you five architectures, ten feature ideas, three positioning strategies, four possible database designs, and twenty improvements to your product. Generating the options is no longer the hard part. Deciding becomes the hard part.

Which architecture is appropriate for where the product is today? Which feature solves an actual user problem? Which technical debt matters? Which recommendation should you ignore? What should you not build?

Judgment doesn’t come from collecting more AI tricks. It comes from building things, making decisions, seeing consequences, talking to people, being wrong, revisiting assumptions, and gradually developing a better model of how things work.

## The implementation layer keeps moving

None of this means I’m going to stop learning Claude Code, Codex, agents, or whatever comes next. Quite the opposite. I want to use them aggressively.

But I’m trying not to confuse knowledge of today’s interface with knowledge of the underlying problem.

Being great at writing a CLAUDE.md file is useful today. Understanding **how to give an autonomous system the right context, constraints, and definition of success** is more durable.

Knowing today’s best context-compaction technique is useful. Understanding **what information matters and what can safely be discarded** is more durable.

Knowing how to configure a code-review agent is useful. Developing **the judgment to recognise good software and bad software** is more durable.

The implementation changes. The underlying skill compounds.

## Maybe that’s the real AI skill

There’s enormous pressure right now to keep up: a new model, a new agent framework, a new MCP server, a new prompting technique, a new coding workflow, a new “you need to learn this immediately” post.

I enjoy experimenting with all of it. But increasingly, I’m asking myself a different question:

**Will becoming good at this make me better five years from now, or just better at using this week’s tool?**

Ideally, we do both. Use the newest tools. Experiment with the weird stuff. Build with the best models available.

Underneath all of that, keep developing the things that compound: understand reality, think from first principles, articulate your intent, and develop judgment.

If the models really do eventually “just know,” the interesting question won’t be how much the AI knows. It will be whether we know what to ask it to do, why it matters, and whether what it produced is actually any good.`,
  },
]
