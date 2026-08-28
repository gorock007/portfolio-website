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
    <footer id="contact" className="revamp-footer">
      <div className="revamp-container revamp-footer-line">
        <p>© {new Date().getFullYear()} Gorock Shetty · Sydney</p>
        <nav aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/writings">Writing</Link>
          <a href="mailto:gorock397@gmail.com">Email</a>
          {links.slice(0, 2).map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
