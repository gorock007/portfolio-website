import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram, FaArrowRight } from 'react-icons/fa';

const channels = [
  { icon: FaTiktok, label: 'TikTok', handle: '@gorockbits', href: 'https://www.tiktok.com/@gorockbits' },
  { icon: FaInstagram, label: 'Instagram', handle: '@gorockbits', href: 'https://www.instagram.com/gorockbits/' },
];

const ContentStrip = () => {
  return (
    <section id="content" className="relative section-rhythm bg-surface-alt border-t border-border-light">
      <div className="container-editorial">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs text-muted tracking-[0.2em] uppercase">Content</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-[1.1] mb-6">
              I make AI content, in public.
            </h2>
            <p className="text-ink-light text-lg leading-relaxed">
              I share what I'm building, the tools I'm testing, and what I learn along the way —
              breaking down AI so it's easy to actually use. Follow along
              <span className="text-ink font-medium"> @gorockbits</span>.
            </p>
          </motion.div>

          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border hover:border-ink/30 active:scale-[0.99] transition-all duration-300"
                >
                  <span className="w-11 h-11 shrink-0 rounded-full bg-paper border border-border flex items-center justify-center text-ink-light group-hover:text-ink transition-colors">
                    <Icon className="text-lg" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-base font-medium text-ink">{c.label}</span>
                    <span className="block text-sm text-muted">{c.handle}</span>
                  </span>
                  <FaArrowRight className="text-sm text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentStrip;
