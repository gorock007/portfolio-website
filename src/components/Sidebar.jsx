import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '/writings', internal: true },
  { label: 'Contact', href: '#contact' },
];

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  const restoreMenuFocus = () => {
    requestAnimationFrame(() => document.getElementById('mobile-menu-button')?.focus());
  };

  const closeMenu = () => {
    toggle();
    restoreMenuFocus();
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        toggle();
        restoreMenuFocus();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, toggle]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    if (pathname === '/') {
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
    } else {
      navigate('/' + href); // e.g. "/#work" — Home scrolls to it on load
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            aria-hidden="true"
            className="fixed inset-0 z-[998] bg-ink/20 backdrop-blur-sm"
          />
          <motion.aside
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[min(80vw,320px)] z-[999] bg-surface border-l border-border shadow-2xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                className="w-11 h-11 rounded-full bg-surface-alt flex items-center justify-center text-muted hover:text-ink active:scale-95 transition-all duration-200 cursor-pointer"
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
                      onClick={closeMenu}
                      aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                      className={`block py-3 px-4 rounded-xl text-lg font-heading font-semibold transition-all duration-300 ${
                        pathname.startsWith(link.href)
                          ? 'text-ink bg-surface-alt'
                          : 'text-ink-light hover:text-ink hover:bg-surface-alt'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3 px-4 rounded-xl text-lg font-heading font-semibold text-ink-light hover:text-ink hover:bg-surface-alt transition-all duration-300"
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
