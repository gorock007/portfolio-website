import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '/writings', internal: true },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-editorial !max-w-5xl h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading text-xl font-extrabold tracking-tight cursor-pointer text-ink"
        >
          Gorock<span className="text-accent">.</span>
        </button>

        {/* Hamburger */}
        <button
          onClick={toggle}
          className="md:hidden text-ink-light text-xl hover:text-ink transition-colors cursor-pointer"
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.internal ? (
                <Link
                  to={link.href}
                  className="text-sm font-medium text-ink-light hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-ink-light hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
