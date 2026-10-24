import type { Metadata } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Ledger from '@/components/Ledger'
import portrait from '@/assets/images/portrait.jpg'
import portraitLaughing from '@/assets/images/portrait-laughing.jpg'
import { aboutBlocks } from '@/data/about'
import { contactHandle, contactUrl, profile, stack } from '@/data/siteLinks'

const description =
  'Who Gorock Shetty is, how he thinks, what he is building from Sydney, and what he is after.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'About — Gorock Shetty', description, url: '/about' },
  twitter: { title: 'About — Gorock Shetty', description },
}

const SIZES = '(max-width: 899px) 100vw, 340px'

const AboutPage = () => {
  const [intro, ...rest] = aboutBlocks

  return (
    <Layout>
      <header className="about-head">
        <div>
          <h1 className="page-title">About</h1>
          <p className="lead">
            {intro.paragraphs[0]}
          </p>
        </div>

        <div className="portrait">
          <Image src={portrait} alt={`${profile.name}, photographed outdoors`} fill sizes={SIZES} preload />
          {/* The same frame, laughing and in colour, faded in under the
              cursor. Decorative: the image beneath already names him. */}
          <Image className="portrait-hover" src={portraitLaughing} alt="" aria-hidden="true" fill sizes={SIZES} />
        </div>
      </header>

      {rest.map((block, index) => (
        <Ledger key={block.label} id={`about-${index}`} label={block.label}>
          <div className="about-copy">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Ledger>
      ))}

      <Ledger id="about-tools" label="What I reach for">
        <ul className="chips" role="list">
          {stack.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </Ledger>

      <Ledger id="about-contact" label="Say hello">
        <p className="lead">
          I’m in {profile.location}. If you’re building something in this space, or you just want
          to argue about what AI actually changes, my DMs are open:{' '}
          <a href={contactUrl} target="_blank" rel="noopener noreferrer">
            {contactHandle} on X<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </Ledger>
    </Layout>
  )
}

export default AboutPage
