import { profile, socialLinks } from '@/data/siteLinks'

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <section className="footer-elsewhere" aria-labelledby="elsewhere-label">
        <h2 id="elsewhere-label" className="ledger-label">
          elsewhere.
        </h2>
        <ul className="elsewhere" role="list">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="elsewhere-name">{link.label}</span>
                <span className="elsewhere-handle">{link.handle}</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="colophon">
        <span>{profile.location}.</span>
        <span>© {new Date().getFullYear()} Gorock Shetty. Set in Geist and Geist Mono.</span>
      </p>
    </div>
  </footer>
)

export default Footer
