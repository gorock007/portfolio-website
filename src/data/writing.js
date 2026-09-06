import agiSmearCover from '../images/agi-smear-cover.svg'
import aiSkillsCover from '../images/ai-skills-cover.jpg'

// Writing entries. Add new notes here; the homepage and writing index update automatically.
export const blogPosts = [
  {
    id: 'agi-is-a-smear',
    title: 'AGI Is a Smear, Not a Finish Line',
    excerpt: 'Paul Graham calls AGI a smear rather than a threshold — something with width, that we are already standing on. Which part you are standing on decides what you believe.',
    date: '7 September 2026',
    readTime: '5 min read',
    tags: ['AI', 'AGI', 'Essays'],
    coverImage: agiSmearCover,
    coverImageAlt: 'A wide band of dots, dense at the left and dissolving into bare paper at the right, with three markers standing at different points along it',
    sourceUrl: 'https://youtu.be/5bxp78i96S8',
    sourceLabel: 'Paul Graham on AGI, in conversation',
    content: `In a recent talk, Paul Graham said something about AGI that I haven’t been able to put down.

AGI is not a finish line.

It is more like a **smear**. And we are already on it.

A smear has width. Where you are standing on it decides what you see.

So AGI isn’t an event. It’s an era.

## We may have already reached it, and not reached it, at the same time

Everyone talks about AGI as a threshold. A door we walk through. A morning where humanity wakes up and says: *yesterday wasn’t AGI, today is.*

I don’t think that morning is coming.

“We have reached AGI” is probably the wrong way to put it. But so is “we haven’t.”

We are already in the AGI era — especially with models like Claude Fable 5.1 and GPT-6 Astra — in roughly the same way we are all on the same blue planet.

In some parts of the world there are robotaxis. In other parts there isn’t a proper road, or any reliable way to travel between two towns.

Humanity is in the same era. Individuals are not.

## The same is true inside a single model

This isn’t only about geography. It’s true of the systems themselves.

A model can be superhuman on one axis and strangely incompetent on another.

That’s essentially what Paul points to. We now hear about AI doing extraordinarily difficult mathematics — and the same systems can struggle to reliably tell you when a restaurant is open.

If intelligence arrived as a single quantity, that would be a contradiction. It isn’t one. The capability surface is jagged, and the smear runs across it too.

## The Turing test is the tell

Paul says one of the signs that made him feel we were getting close was that he had to go back and look up **exactly what the Turing test was**.

That’s a beautiful detail.

The Turing test was supposed to be the milestone. The bright line. And it was crossed so quietly that the people closest to it had to check the definition afterwards to see whether it had happened.

Thresholds don’t feel like thresholds from inside them. They feel like a Tuesday.

## Both sides are telling the truth

For someone who spends most of their day building with frontier models:

*“This is obviously intelligence.”*

For someone doing messy real-world work and watching it fail spectacularly at something a teenager would get right:

*“AGI? Are you kidding?”*

Both observations are correct from where they’re standing. That is what a smear does — it makes the disagreement about position rather than about facts.

Even the labs are standing on different parts of it. Two days before I wrote this, OpenAI shipped GPT-6 Astra and its president called it a generational leap that might eventually be seen as the arrival of AGI. A company launching a model and saying *this might be the thing* is exactly what you’d expect at a threshold — and exactly what you’d expect halfway along a smear, too. The claim doesn’t settle anything. It’s another data point about where the person making it happens to be standing.

Which is why I wouldn’t personally say “AGI has arrived” yet. I’d say something closer to Paul:

**The transition to AGI may already be happening. We just expected the transition to be an event.**

## From far away, transitions look like points

That’s the part I find most interesting.

From a distance, technological transitions look like dates in a history book. The Industrial Revolution. The internet. Electricity.

Up close they are messy periods — decades long, unevenly distributed, obvious to some people and invisible to others living at the same time.

We are inside one of those periods right now, and inside is the one place you can’t see its shape.

## The uneven part is the part that worries me

I think this era will create a polarised world.

Tokens are expensive. Access to intelligence is not going to be equally distributed — at least not soon, and not by default. I hope we figure that out, because “who is standing on which part of the smear” is going to be a question about money and infrastructure long before it’s a question about capability.

For those of us fully immersed in this — who know what can be achieved and roughly where it’s heading — we’re already in the AGI era for maybe 90% of what we do.

That number is a guess. Could be more, could be less. You get the point.

For someone else, the question is still: *what is AI?*

Same era. Same planet. Different width of the same smear.

---

*Written after a talk by Paul Graham on why AGI is better understood as a period than a threshold. The framing of the smear, the width, and the Turing test anecdote are his; the rest is where those ideas landed for me.*`,
  },
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

Claude 3.5 Sonnet arrived with much stronger coding and tool-use capabilities, and suddenly many of those clever workarounds weren't nearly as important.

The author's point was simple: **eventually, the models just know.**

They connected this to Rich Sutton's *The Bitter Lesson* — the observation that general methods that scale with computation and learning tend to eventually outperform systems built around carefully engineered human knowledge.

That idea has been stuck in my head.

Because I think it changes what we should actually be learning.

## We might be optimizing for skills with very short expiry dates

Look at how we work with coding agents today.

We have CLAUDE.md files, AGENTS.md files, custom skills, context engineering, compaction strategies, planning modes, subagents, carefully designed prompts and increasingly sophisticated agent harnesses.

I use many of these things myself.

And they're useful.

But I'm starting to think there's a difference between **using these techniques** and **building your expertise around them**.

A perfectly engineered CLAUDE.md might make an agent significantly better today.

But what happens when the next generation of models understands your repository well enough that it barely needs one?

What happens when context compaction becomes something the model does better than anything we could manually design?

Or when planning, code review and tool selection become native model capabilities?

The specific techniques might disappear.

The underlying problems won't.

And that distinction matters.

## This also changed how I think about learning to build with AI

I've been experiencing a smaller version of this myself.

Instead of learning software development in the traditional order —

fundamentals → courses → tutorials → small projects → eventually build something real —

I've increasingly been doing almost the reverse.

**Build something real first, then investigate the fundamentals as the product forces me to confront them.**

Claude Code, Codex and other AI tools can now take care of a surprising amount of implementation.

But something interesting happens when you actually ship.

The AI can write the authentication code.

But I still need to understand why authentication is designed that way.

It can create the database schema.

But I need to understand the consequences of that architecture.

It can implement rate limiting.

But I need to understand what we're protecting, what could fail and what trade-offs we're making.

It can suggest five different solutions.

But somebody still has to decide which one belongs in the product.

The better these tools become, the more I've found myself asking questions like:

**Why is it built this way?**

**What assumption are we making?**

**What breaks if we change this?**

**What trade-off did we just accept?**

**Is this solving the actual problem, or just producing technically impressive code?**

AI hasn't made understanding less important.

It has made it possible to reach the situations where understanding matters much faster.

## So what actually compounds?

The original post proposed three fundamentals that remain valuable even as models improve.

I think they're a useful framework.

### 1. Understanding the world

Before asking AI to solve something, you need good inputs.

What are people actually doing?

What problems are they experiencing?

Which problems are painful enough to solve?

What constraints exist outside your codebase?

What will somebody actually pay for?

A sufficiently capable model might generate 100 SaaS ideas before breakfast.

That doesn't mean any of them matter.

Understanding reality is what separates something that *can be built* from something that *should be built*.

### 2. First-principles thinking

Once you understand the situation, you need to reason about it.

Instead of:

"AI agents are growing, so I should build an AI agent."

Ask:

**What became possible that wasn't possible before?**

**What became dramatically cheaper?**

**Which assumptions about existing products no longer need to be true?**

**If intelligence becomes abundant, where does the bottleneck move?**

Tools can help answer these questions.

But learning how to think from constraints rather than trends is much harder to obsolete.

### 3. Articulating your thoughts

This might become one of the most underrated skills of the AI era.

Imagine models eventually becoming capable enough to build almost anything you can reasonably describe.

At that point, the bottleneck isn't necessarily implementation.

It's intent.

Can you explain what you're trying to accomplish?

Can you describe the problem precisely?

Can you communicate the constraints?

Can you distinguish what matters from what doesn't?

Can you explain what success actually looks like?

That's very different from memorizing "good prompts."

Prompt engineering may change.

Clear thinking expressed clearly probably won't.

## I would add a fourth: judgment

This is the part I keep coming back to.

If AI makes execution increasingly cheap, **choosing what deserves execution becomes more expensive.**

Suppose an agent gives you:

five architectures,

ten feature ideas,

three positioning strategies,

four possible database designs,

and twenty improvements to your product.

Generating the options is no longer the hard part.

Deciding becomes the hard part.

Which architecture is appropriate for where the product is today?

Which feature solves an actual user problem?

Which technical debt matters?

Which recommendation should you ignore?

And perhaps most importantly:

**What should you not build?**

That's judgment.

And judgment isn't something you develop by collecting more AI tricks.

You develop it by building things, making decisions, seeing consequences, talking to people, being wrong, revisiting assumptions and gradually developing a better model of how things work.

## The implementation layer keeps moving

None of this means I'm going to stop learning Claude Code, Codex, agents or whatever comes next.

Quite the opposite.

I want to use them aggressively.

But I'm trying not to confuse knowledge of today's interface with knowledge of the underlying problem.

Being great at writing a CLAUDE.md file is useful today.

Understanding **how to give an autonomous system the right context, constraints and definition of success** is more durable.

Knowing today's best context-compaction technique is useful.

Understanding **what information matters and what can safely be discarded** is more durable.

Knowing how to configure a code-review agent is useful.

Developing **the judgment to recognize good software and bad software** is more durable.

The implementation changes.

The underlying skill compounds.

## Maybe that's the real AI skill

There's enormous pressure right now to keep up.

A new model.

A new agent framework.

A new MCP server.

A new prompting technique.

A new coding workflow.

A new "you need to learn this immediately" post.

And I enjoy experimenting with all of it.

But increasingly, I'm asking myself a different question:

**Will becoming good at this make me better five years from now, or just better at using this week's tool?**

Ideally, we do both.

Use the newest tools.

Experiment with the weird stuff.

Build with the best models available.

But underneath all of that, keep developing the things that compound:

**Understand reality.**

**Think from first principles.**

**Articulate your intent.**

**Develop judgment.**

Because if the models really do eventually "just know," the interesting question won't be how much the AI knows.

It will be whether we know **what to ask it to do, why it matters, and whether what it produced is actually any good.**

---

*This article was inspired by a post from @kunchenguid on X, particularly their framing of understanding the world, first-principles thinking and articulation as three durable fundamentals in an era of rapidly improving AI models. Their post connected these ideas to Rich Sutton's “The Bitter Lesson.” I've expanded on that framework here through my own experience building software with AI agents, particularly around learning through building and the growing importance of judgment.*`,
  },
]
