import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '/blog', internal: true },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-border-light">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan via-purple to-green"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-18 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading text-xl font-800 tracking-tight cursor-pointer group"
          >
            <span className="gradient-text">G</span>
            <span className="text-ink group-hover:text-cyan transition-colors duration-300">orock</span>
            <span className="gradient-text">.</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={toggle}
            className="md:hidden text-ink-light text-xl hover:text-cyan transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.label}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-ink transition-all duration-300 hover:bg-ink/[0.03]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                          ? 'text-cyan bg-accent-bg'
                          : 'text-muted hover:text-ink hover:bg-ink/[0.03]'
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
