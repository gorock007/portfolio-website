import { socialLinks } from '../data/siteLinks'
import { icons } from './Icons'
import Tooltip from './Tooltip'

const Footer = () => (
  <footer className="site-footer">
    <h2 className="stat-label">Elsewhere</h2>

    <ul className="footer-icons">
      {socialLinks.map((link) => {
        const Icon = icons[link.icon]
        if (!Icon) return null

        return (
          <li key={link.id}>
            <Tooltip label={link.label}>
              <a
                href={link.href}
                className="footer-icon"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            </Tooltip>
          </li>
        )
      })}
    </ul>
  </footer>
)

export default Footer
