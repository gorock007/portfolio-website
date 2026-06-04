import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './ProjectsData';

const Projects = () => {
  const project = projectsData[0];

  return (
    <section id="work" className="relative section-rhythm border-t border-border-light">
      <div className="container-editorial">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs text-muted tracking-[0.2em] uppercase">Work</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Product visual */}
          <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-alt">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-3 text-[11px] text-muted">naatiace.com</span>
            </div>
            {project.img ? (
              <img src={project.img} alt={project.title} className="w-full object-cover" />
            ) : (
              // TODO: replace placeholder with real screenshot once provided
              <div className="aspect-[16/10] flex flex-col items-center justify-center gap-2 bg-surface-alt">
                <span className="font-heading text-4xl font-extrabold text-ink">NaatiAce</span>
                <span className="text-xs text-muted">product preview</span>
              </div>
            )}
          </div>

          {/* Case study copy */}
          <div>
            <h2 className="font-heading text-3xl md:text-[2.4rem] font-bold leading-[1.1] mb-3">
              {project.title}
            </h2>
            <p className="text-ink-light text-lg mb-8">{project.oneLiner}</p>

            <div className="space-y-6 text-[15px] leading-relaxed mb-8">
              <div>
                <h3 className="text-xs text-muted tracking-[0.18em] uppercase mb-2">The problem</h3>
                <p className="text-ink-light">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-xs text-muted tracking-[0.18em] uppercase mb-2">What I built</h3>
                <p className="text-ink-light">{project.built}</p>
              </div>
              <div>
                <h3 className="text-xs text-muted tracking-[0.18em] uppercase mb-2">Outcome</h3>
                <p className="text-ink-light">{project.outcome}</p>
              </div>
            </div>

            {/* Facts */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8 text-sm text-ink-light">
              {project.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>

            {/* Tags + link */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[12px] text-ink-light border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-0.5 transition-colors"
              >
                Try NaatiAce
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;
