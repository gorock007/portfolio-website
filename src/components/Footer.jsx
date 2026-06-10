import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTiktok, FaInstagram } from 'react-icons/fa';

// Official X logo (react-icons 4.8 predates fa6's FaXTwitter); inline SVG renders like the others.
const FaX = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: FaEnvelope, href: 'mailto:gorock397@gmail.com', label: 'Email' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@gorockbits', label: 'TikTok' },
  { icon: FaInstagram, href: 'https://www.instagram.com/gorockbits/', label: 'Instagram' },
  { icon: FaX, href: 'https://x.com/gorockbits', label: 'X' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/gorakhshetty/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/gorock007/', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative section-rhythm border-t border-border-light">
      <div className="container-editorial">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs text-muted tracking-[0.2em] uppercase">Contact</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-3xl md:text-[2.6rem] font-bold leading-[1.1] mb-6">
            Have a problem worth solving? Let's talk.
          </h2>
          <p className="text-ink-light text-lg leading-relaxed mb-10">
            Whether you're building an AI product, exploring an idea, or hiring for interesting
            work — my inbox is open.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-12">
            <a
              href="mailto:gorock397@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-base font-medium text-paper hover:bg-ink-light active:scale-[0.98] transition-all duration-300"
            >
              <FaEnvelope className="text-sm" />
              Email me
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-ink-light hover:text-ink hover:border-ink/40 active:scale-95 transition-all duration-300"
                >
                  <Icon className="text-base" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-border-light">
          <p className="text-muted text-xs">&copy; {new Date().getFullYear()} Gorock Shetty · Sydney, Australia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
