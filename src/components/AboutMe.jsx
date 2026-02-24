import React from 'react';
import { motion } from 'framer-motion';
import img from '../images/profile3.jpg';

const highlights = ['AI Tools', 'Node.js', 'APIs', 'AI Agents', 'Content Creation', 'Automation'];

const AboutMe = () => {
  return (
    <section id="about" className="relative py-28 px-8 sm:px-12 lg:px-20 dot-grid">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">01</span>
          <div className="h-[1px] w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="shrink-0 relative group"
          >
            <div className="absolute inset-[-12px] rounded-full bg-gradient-to-br from-cyan/15 via-purple/10 to-green/15 blur-xl animate-[glow-pulse_4s_ease-in-out_infinite]" />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full gradient-border p-[3px]">
              <div className="w-full h-full rounded-full bg-surface overflow-hidden">
                <motion.img
                  src={img}
                  alt="Gorock Shetty"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-md text-[10px] font-mono text-green flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Available
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-800 tracking-tight mb-8 text-ink">
              Exploring AI, building small apps, and
              <br />
              <span className="gradient-text">sharing what I learn</span>
            </h2>

            <div className="space-y-4 text-muted leading-relaxed text-[15px] mb-8">
              <p>
                I work in tech support while exploring the fast-moving world of AI tools and workflows. I enjoy building small apps using AI, testing new tools, and documenting what I learn along the way.
              </p>
              <p>
                My background in IT support gives me strong troubleshooting and systems thinking skills, while my curiosity drives me to experiment with APIs, automation, and emerging AI development workflows.
              </p>
              <p>
                Whether I’m debugging an issue, prototyping a vibe-coded app, or creating content about new tools, I’m motivated by making technology easier to understand and more accessible to others.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {highlights.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-3 py-1 rounded-full text-xs font-mono text-cyan bg-accent-bg border border-cyan/[0.15]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
