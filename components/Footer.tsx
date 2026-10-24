import { socialLinks } from '@/data/siteLinks'
import { SYDNEY } from '@/lib/sun'
import SkyControl from './SkyControl'

const coordinates = `${Math.abs(SYDNEY.lat).toFixed(4)}° S, ${SYDNEY.lon.toFixed(4)}° E`

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <section aria-labelledby="elsewhere-label">
        <h2 id="elsewhere-label" className="ledger-label">
          Elsewhere
        </h2>
        <ul className="elsewhere" role="list">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <span className="elsewhere-handle">{link.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <SkyControl />

      <p className="colophon">
        <span className="mono">{coordinates}</span>
        <span>
          The page is lit while the sun is up in Sydney and dark once it sets. The orange dot is the
          sun; nothing else here is coloured but the work.
        </span>
        <span>© {new Date().getFullYear()} Gorock Shetty. Set in Geist.</span>
      </p>
    </div>
  </footer>
)

export default Footer
