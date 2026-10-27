import type { Metadata } from 'next'
import Link from 'next/link'
import Analemma from '@/components/Analemma'
import External from '@/components/External'
import Layout from '@/components/Layout'
import Ledger from '@/components/Ledger'
import WorkIndex from '@/components/WorkIndex'
import WritingIndex from '@/components/WritingIndex'
import { beliefs, statement } from '@/data/manifesto'
import { productProjects, toolProjects } from '@/data/projects'
import { contactUrl, socialLinks } from '@/data/siteLinks'
import { blogPosts } from '@/data/writing'
import { site } from '@/lib/site'
import { getYear } from '@/lib/year'

export const metadata: Metadata = {
  title: site.title,
  alternates: { canonical: '/' },
}

// The loop ends on today and counts today's work, so the page is rebuilt
// every 15 minutes to keep up with it.
export const revalidate = 900

const linkedinUrl = socialLinks.find((link) => link.id === 'linkedin')?.href

const HomePage = async () => {
  const year = await getYear()

  return (
    <Layout>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-head">
          {/* The name is in the header already; it stays in the h1 for the
              document outline and search, but isn't shown twice. */}
          <h1 id="hero-title" className="display hero-title">
            <span className="visually-hidden">Gorock Shetty: </span>
            {statement}
          </h1>

          <div className="hero-intro">
            <p className="lead">I’m Gorock, a builder and founder based in Sydney.</p>
            <p>
              I build software, experiment with AI, and turn ideas into products. Some have paying
              customers. Some are open source. Others are experiments that taught me something worth
              knowing.
            </p>
            <p>
              My background is in enterprise IT, but most of what I know about building products came
              from figuring things out myself.
            </p>
            <p>
              I don’t always know how to do something when I start. I’ve just gotten comfortable with
              that.
            </p>
          </div>

          <p className="go-links">
            <Link href="/work">
              Explore my work <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/about">
              More about me <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        <figure className="hero-figure">
          <Analemma days={year.days} />
          <figcaption className="figure-note meta">
            My last year on the noon sun over Sydney — one dot a day, darker the more I shipped.
          </figcaption>
        </figure>
      </section>

      <Ledger
        id="beliefs-label"
        label="a few things i believe."
        more={{ href: '/writings', label: 'Read more of my thinking' }}
      >
        <ol className="beliefs" role="list">
          {beliefs.map((belief) => (
            <li key={belief.line}>
              <p className="belief">{belief.line}</p>
              <p className="belief-why">{belief.why}</p>
            </li>
          ))}
        </ol>
      </Ledger>

      <Ledger id="work-label" label="work." more={{ href: '/work', label: 'All work, in detail' }}>
        <div className="ledger-copy">
          <p>A few things I’ve built, shipped, and put into the world.</p>
        </div>
        <WorkIndex projects={productProjects} />
      </Ledger>

      <Ledger id="tools-label" label="open source.">
        <div className="ledger-copy">
          <p>I build a lot of tools to solve my own problems. Some turn out useful enough to share.</p>
        </div>
        <WorkIndex projects={toolProjects} />
      </Ledger>

      <Ledger id="writing-label" label="writing.">
        <div className="ledger-copy">
          <p>
            I spend a lot of time thinking about where technology is taking us, what intelligence
            actually is, and what it means to be human in a world increasingly shaped by AI.
          </p>
          <p>I don’t have answers to most of these questions. I write to figure out what I think.</p>
        </div>
        <WritingIndex posts={blogPosts} />
      </Ledger>

      <Ledger id="now-label" label="now.">
        <div className="ledger-copy ledger-copy--main">
          <p>
            I’m building products, experimenting with AI agents, and learning as much as I can about
            the technology that’s changing how we work and live.
          </p>
          <p>
            Outside my own projects, I work with enterprise systems and bring builders together
            through developer workshops in Sydney.
          </p>
          <p>
            Long term, I want to build something that matters. Something people genuinely need, that
            can grow beyond just me.
          </p>
          <p>I’m not there yet. But that’s what I’m working towards.</p>
        </div>
      </Ledger>

      <Ledger id="contact-label" label="let’s build something.">
        <div className="ledger-copy ledger-copy--main">
          <p>
            I’m always interested in meeting ambitious people, especially those working on difficult
            problems, early-stage products, and new applications of AI.
          </p>
          <p>I don’t need to have solved a problem before to be interested in taking it on.</p>
          <p>If you’re building something interesting and think I could contribute, reach out.</p>
        </div>
        <p className="go-links">
          <External href={contactUrl}>Let’s talk on X</External>
          {linkedinUrl && <External href={linkedinUrl}>Connect on LinkedIn</External>}
        </p>
      </Ledger>
    </Layout>
  )
}

export default HomePage
