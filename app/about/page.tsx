import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import External from '@/components/External'
import Layout from '@/components/Layout'
import Ledger from '@/components/Ledger'
import portrait from '@/assets/images/portrait.jpg'
import portraitLaughing from '@/assets/images/portrait-laughing.jpg'
import { aboutBlocks } from '@/data/about'
import { contactUrl, profile } from '@/data/siteLinks'

const description =
  'Who Gorock Shetty is, how he got here, how he figures things out, and what he is chasing.'

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
  const [lead, ...introRest] = intro.paragraphs

  return (
    <Layout>
      <header className="about-head">
        <div>
          <h1 className="page-title">{intro.label}</h1>
          <div className="about-intro">
            <p className="lead">{lead}</p>
            {introRest.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
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
          {index === rest.length - 1 && (
            <p className="go-links">
              <Link href="/work">
                See what I’m building <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <External href={contactUrl}>Find me on X</External>
            </p>
          )}
        </Ledger>
      ))}
    </Layout>
  )
}

export default AboutPage
