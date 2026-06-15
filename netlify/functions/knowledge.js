// Knowledge base for the portfolio chatbot.
//
// This is the ONLY source of truth the assistant may use. It is compiled by hand
// from the site's own content (Hero, AboutMe, Skills, ProjectsData, ContentStrip,
// Footer). Keep it in sync when that content changes.
//
// To add your CV or blog posts later: paste the text into the relevant section
// below (e.g. a new "## CV / Experience" or "## Writing" block). The chatbot will
// pick it up automatically — no other code changes needed.

export const KNOWLEDGE_BASE = `
# Who Gorock is

Name: Gorock Shetty.
Based in: Sydney, Australia.
Role: Founder of NaatiAce. Builder of AI products — designs, builds, and runs them end to end.
One-line: "I build AI systems that solve real-world problems."

Positioning: Takes messy real-world problems and turns them into working AI products —
idea to shipped — then puts them in front of real people who pay for them. Most recently
that's NaatiAce, an AI exam-prep platform he founded and operates end to end.

Personality / how he describes himself: A work in progress — curious to the point of
restless, always rebuilding, trying to turn confusion into clarity. Builds things to
understand them: software, ideas, and a slightly better version of himself.

Currently: Building NaatiAce, and open to interesting work.

# What Gorock can do

- Build end-to-end AI products: from the first idea to a running product — design,
  frontend, backend, and the AI layer that makes it useful.
- Agents, workflows & automation: wires up LLMs, APIs, and automation so software does
  the tedious work and reasons through real tasks.
- Ship & run real products: payments, free-to-paid funnels, and the unglamorous operating
  work that keeps paying customers happy.

# Tools & stack

Claude Code, Codex, OpenClaw, Hermes Agent, JavaScript, Node.js, React, APIs, Supabase, Apify.

# Projects / case studies

## NaatiAce  (https://naatiace.com — live, paying customers)
One-liner: An AI platform that helps people pass the NAATI CCL exam.
Problem: The NAATI CCL exam gates migration points for thousands of people, but realistic
practice is scarce, expensive, and slow to grade. Most candidates study blind, with no way
to know if they're actually ready.
What Gorock built: A full AI exam-prep platform — unlimited mock tests across 55 languages
where candidates record spoken interpretations and get instant AI scoring on accuracy and
fluency, graded with official NAATI deductive marking, plus detailed feedback and progress
tracking. He designed, built, and runs it end to end, including payments and the
free-to-paid funnel.
Outcome: Live with paying customers, a free tier feeding paid plans, and candidates
practicing in their own language on demand.
Key facts: 55 languages; unlimited mock tests; official NAATI deductive marking;
AI scoring on accuracy & fluency; instant feedback & progress tracking; free tier + paid plans.
Tags: AI, Full-stack, Payments.

## CAID  (personal tool — no public URL)
One-liner: A self-built, AI-powered content-operations dashboard for the gorockbits brand.
Problem: Running an AI content brand across TikTok, Instagram, and YouTube means juggling
planning, analytics, trend research, and scripting across a dozen disconnected tools —
slow, scattered, and easy to drop.
What Gorock built: A local web app, deliberately lightweight — vanilla HTML/CSS/JS with a
zero-dependency Node proxy — that centralizes the whole operation: a content pipeline
(kanban), live performance pulled from TikTok and Instagram (Apify) and YouTube (Data API),
AI-assisted trend mining, a reusable hook-formula library, and one-click script generation,
all powered by Claude through the local CLI.
Outcome: One control-room dashboard that automates trend research, hook writing, and content
scripting while surfacing live cross-platform metrics — what he uses to run the brand day to day.
Key facts: Vanilla JS with a zero-dependency Node proxy; Claude-powered scripting & research;
Apify TikTok + Instagram scrapers; YouTube Data API metrics; trend mining + hook library;
content pipeline (kanban).
Tags: AI, Automation, Full-stack.

# Content brand

Gorock makes AI content in public under the handle @gorockbits — sharing what he's building,
the tools he's testing, and what he learns, breaking down AI so it's easy to actually use.
Channels: TikTok (@gorockbits), Instagram (@gorockbits), YouTube.

# Contact & links

Email: gorock397@gmail.com (best way to reach him for work, ideas, or hiring).
LinkedIn: https://www.linkedin.com/in/gorakhshetty/
GitHub: https://github.com/gorock007/
X (Twitter): https://x.com/gorockbits
TikTok: https://www.tiktok.com/@gorockbits
Instagram: https://www.instagram.com/gorockbits/

# Writing / blog

No published blog posts yet. (When posts go live they'll be added here.)
`.trim();
