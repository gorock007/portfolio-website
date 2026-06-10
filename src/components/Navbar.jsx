import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '/writings', internal: true },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ toggle, isOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/' + href); // e.g. "/#work" — Home scrolls to it on load
    }
  };

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-surface focus:border focus:border-border focus:rounded-full focus:px-4 focus:py-2 text-sm font-medium text-ink"
      >
        Skip to main content
      </a>
      <div className="container-editorial !max-w-5xl h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Gorock — home"
          className="font-heading text-xl font-extrabold tracking-tight text-ink"
        >
          Gorock<span className="text-accent">.</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggle}
          className="md:hidden w-11 h-11 -mr-2.5 flex items-center justify-center text-ink-light text-xl hover:text-ink active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <FaBars />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.internal && pathname.startsWith(link.href);
            const linkClass = `inline-block py-2 text-sm font-medium transition-colors duration-200 ${
              isActive ? 'text-ink' : 'text-ink-light hover:text-ink'
            }`;
            return (
              <li key={link.label}>
                {link.internal ? (
                  <Link to={link.href} aria-current={isActive ? 'page' : undefined} className={linkClass}>
                    {link.label}
                    {isActive && <span className="block h-px bg-accent" />}
                  </Link>
                ) : (
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClass}>
                    {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
