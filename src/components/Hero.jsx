import React from 'react';
import { motion } from 'framer-motion';
import naatiace from '../images/naatiace.jpg';

const proofPoints = ['55 languages', 'Live with paying customers', 'Built & run solo'];

const Hero = () => {
  const ease = [0.22, 1, 0.36, 1];
  const fade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container-editorial section-rhythm w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            {/* Status chip */}
            <motion.div
              {...fade(0.05)}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-xs text-ink-light tracking-wide">
                Building NaatiAce · open to interesting work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fade(0.12)}
              className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-6"
            >
              I build AI products people actually pay for.
            </motion.h1>

            {/* Empathy + proof */}
            <motion.p
              {...fade(0.22)}
              className="text-ink-light text-lg md:text-xl leading-relaxed mb-8"
            >
              Most AI ideas die as demos. I take them from zero to a live product —
              design, build, ship, and run the whole thing, most recently{' '}
              <span className="text-ink font-medium">NaatiAce</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.32)} className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-base font-medium text-paper hover:bg-ink-light active:scale-[0.98] transition-all duration-300"
              >
                Work with me
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://naatiace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative before:absolute before:-inset-x-1 before:-inset-y-3 before:content-[''] text-sm font-medium text-ink border-b border-ink/40 hover:border-ink active:text-ink-light pb-0.5 transition-colors"
              >
                See NaatiAce
              </a>
            </motion.div>

            {/* Proof row */}
            <motion.ul
              {...fade(0.42)}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-light"
            >
              {proofPoints.map((point, i) => (
                <li key={point} className="flex items-center gap-3">
                  {i > 0 && <span className="text-border" aria-hidden="true">·</span>}
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-alt">
              <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden="true" />
              <span className="ml-3 text-xs text-muted">naatiace.com</span>
            </div>
            <img
              src={naatiace}
              alt="The NaatiAce platform — an AI exam-prep tool for the NAATI CCL test"
              width={1600}
              height={868}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
