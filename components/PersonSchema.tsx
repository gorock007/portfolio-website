import { socialLinks } from '@/data/siteLinks'
import { absoluteUrl, site } from '@/lib/site'

/**
 * A schema.org Person, so search engines treat "Gorock Shetty" and "Gorakh
 * Shetty" as one identity rather than two people who happen to share a
 * surname, and tie this site to the profiles that carry each spelling.
 *
 * `sameAs` is the claim that does the work: it links the site to the accounts
 * it belongs to, which is how a knowledge panel gets assembled. It reads from
 * the same socialLinks the footer renders, so a new profile is published here
 * the moment it appears on the page.
 */
const PersonSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: site.alternateName,
    url: absoluteUrl('/'),
    description: site.description,
    jobTitle: 'Product builder',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressCountry: 'AU',
    },
    sameAs: socialLinks.map((link) => link.href),
  }

  return (
    <script
      type="application/ld+json"
      // Escaping "<" is what keeps a future string in the data from being able
      // to close this tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default PersonSchema
