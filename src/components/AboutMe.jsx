import React from 'react';
import { motion } from 'framer-motion';
import img from '../images/profile3.jpg';

const highlights = ['AI products', 'Full-stack', 'Agents & automation', 'Shipping to real users'];

const AboutMe = () => {
  return (
    <section id="about" className="relative section-rhythm border-t border-border-light">
      <div className="container-editorial">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs text-muted tracking-[0.2em] uppercase">About</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-border">
              <img src={img} alt="Gorock Shetty" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <h2 className="font-heading text-3xl md:text-[2.6rem] font-bold leading-[1.1] mb-8 max-w-2xl">
              I turn messy real-world problems into working AI products.
            </h2>

            <div className="space-y-5 text-ink-light leading-relaxed text-lg max-w-2xl mb-10">
              <p>
                Idea to shipped — I design, build, and run the whole thing, then put it in front of
                real people who pay for it. Most recently that's <span className="text-ink font-medium">NaatiAce</span>,
                an AI exam-prep platform I founded and operate end to end.
              </p>
              <p className="text-muted">
                I'm a work in progress — curious to the point of restless, always rebuilding,
                trying to turn confusion into clarity. I build things to understand them: software,
                ideas, and a slightly better version of myself.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {highlights.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs text-ink-light border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
