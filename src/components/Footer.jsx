import { Link } from 'react-router-dom'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gorakhshetty/' },
  { label: 'GitHub', href: 'https://github.com/gorock007/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@gorockbits' },
  { label: 'Instagram', href: 'https://www.instagram.com/gorockbits/' },
  { label: 'X', href: 'https://x.com/gorockbits' },
]

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-container">
        <div className="footer-top">
          <div>
            <p className="section-label">Say hello</p>
            <h2>Have a problem worth turning into a product?</h2>
          </div>
          <a href="mailto:gorock397@gmail.com" className="button button-light">
            Email me <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gorock Shetty · Sydney</p>
          <nav aria-label="Footer navigation">
            <Link to="/writings">Writing</Link>
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
