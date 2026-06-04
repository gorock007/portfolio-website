import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaTiktok, FaInstagram } from 'react-icons/fa';
import resume from '../assets/Gorakh Resume.pdf';

const socialLinks = [
  { icon: FaEnvelope, href: 'mailto:gorock397@gmail.com', label: 'Email' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@gorockbits', label: 'TikTok' },
  { icon: FaInstagram, href: 'https://www.instagram.com/gorockbits/', label: 'Instagram' },
  { icon: FaTwitter, href: 'https://x.com/gorock_bits', label: 'X' },
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-base font-medium text-[#fafaf9] hover:bg-ink-light transition-colors duration-300"
            >
              <FaEnvelope className="text-sm" />
              Email me
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors"
            >
              Download resume
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
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-ink-light hover:text-ink hover:border-ink/40 transition-all duration-300"
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
