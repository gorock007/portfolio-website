import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const ease = [0.22, 1, 0.36, 1];
  const fade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container-editorial py-32">
        <div className="max-w-3xl">
          {/* Status chip */}
          <motion.div
            {...fade(0.05)}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs text-ink-light tracking-wide">
              Building NaatiAce · open to interesting work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.12)}
            className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-8"
          >
            I build AI systems that solve real-world problems.
          </motion.h1>

          {/* Subline */}
          <motion.p
            {...fade(0.22)}
            className="text-ink-light text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          >
            Founder of <span className="text-ink font-medium">NaatiAce</span> — an AI platform
            that helps people pass the NAATI CCL exam across 55 languages, used by paying customers.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.32)} className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="https://naatiace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-base font-medium text-paper hover:bg-ink-light transition-colors duration-300"
            >
              Try NaatiAce
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
