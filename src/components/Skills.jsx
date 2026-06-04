import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Build end-to-end AI products',
    body: 'From the first idea to a running product — design, frontend, backend, and the AI layer that makes it useful.',
  },
  {
    title: 'Agents, workflows & automation',
    body: 'Wire up LLMs, APIs, and automation so software does the tedious work and reasons through real tasks.',
  },
  {
    title: 'Ship & run real products',
    body: 'Payments, free-to-paid funnels, and the unglamorous operating work that keeps paying customers happy.',
  },
];

const stack = [
  'Claude Code',
  'Codex',
  'OpenClaw',
  'Hermes Agent',
  'JavaScript',
  'Node.js',
  'React',
  'APIs',
  'Supabase',
  'Apify',
];

const Skills = () => {
  return (
    <section id="skills" className="relative section-rhythm border-t border-border-light">
      <div className="container-editorial">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs text-muted tracking-[0.2em] uppercase">What I can do</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-heading text-xl font-bold mb-3 leading-snug">{cap.title}</h3>
              <p className="text-ink-light text-[15px] leading-relaxed">{cap.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-8 border-t border-border-light"
        >
          <span className="text-xs text-muted tracking-[0.18em] uppercase mr-2">Tools</span>
          {stack.map((tool, i) => (
            <span key={tool} className="text-sm text-ink-light">
              {i > 0 && <span className="text-border mr-3">·</span>}
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
