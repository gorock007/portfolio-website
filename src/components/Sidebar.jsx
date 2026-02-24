import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '/blog', internal: true },
  { label: 'Contact', href: '#contact' },
];

const Sidebar = ({ isOpen, toggle }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    toggle();
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggle}
            className="fixed inset-0 z-[998] bg-ink/20 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[min(80vw,320px)] z-[999] bg-surface border-l border-border shadow-2xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={toggle}
                className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-muted hover:text-cyan transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex-1 flex flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {link.internal ? (
                    <Link
                      to={link.href}
                      onClick={toggle}
                      className="block py-3 px-4 rounded-xl text-lg font-heading font-semibold text-muted hover:text-cyan hover:bg-accent-bg transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3 px-4 rounded-xl text-lg font-heading font-semibold text-muted hover:text-cyan hover:bg-accent-bg transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
