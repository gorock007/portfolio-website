import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './ProjectsData';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    setStyle({ transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)` });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: 'transform 0.15s ease-out' }}
      className="relative group"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at ${glowPos.x}% ${glowPos.y}%, rgba(8, 145, 178, 0.06), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 px-8 sm:px-12 lg:px-20">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">02</span>
          <div className="h-[1px] w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-800 tracking-tight mb-16 text-ink"
        >
          Things I've <span className="gradient-text">built</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard>
                <div className="relative z-10 bg-surface rounded-2xl border border-border overflow-hidden hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/[0.05] transition-all duration-400">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-cyan hover:border-cyan transition-all"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-ink hover:border-ink transition-all"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-base font-700 text-ink mb-2 group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono text-cyan bg-accent-bg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
