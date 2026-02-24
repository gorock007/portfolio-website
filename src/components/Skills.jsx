import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaBug, FaProjectDiagram, FaClipboardCheck, FaCode } from 'react-icons/fa';
import { SiOpenai, SiGoogle, SiZapier, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbApi, TbWebhook } from 'react-icons/tb';
import { VscJson } from 'react-icons/vsc';
import { BiTestTube } from 'react-icons/bi';
import openclawImg from '../images/openclaw.png';
import claudeImg from '../images/claude.png';

const categories = [
  {
    name: 'AI Tools',
    color: 'cyan',
    skills: [
      { name: 'Claude', img: claudeImg, iconColor: '#C87B5B' },
      { name: 'ChatGPT', icon: SiOpenai, iconColor: '#10a37f' },
      { name: 'Gemini', icon: SiGoogle, iconColor: '#4285F4' },
      { name: 'Cursor', icon: FaCode, iconColor: '#00b4d8' },
      { name: 'OpenClaw', img: openclawImg, iconColor: '#d05a4e' },
    ],
  },
  {
    name: 'APIs & Automation',
    color: 'purple',
    skills: [
      { name: 'REST APIs', icon: TbApi, iconColor: '#0891b2' },
      { name: 'JSON', icon: VscJson, iconColor: '#f9e2af' },
      { name: 'n8n', icon: FaProjectDiagram, iconColor: '#ea4b71' },
      { name: 'Webhooks', icon: TbWebhook, iconColor: '#7c3aed' },
      { name: 'Zapier', icon: SiZapier, iconColor: '#FF4A00' },
    ],
  },
  {
    name: 'Builder Stack',
    color: 'green',
    skills: [
      { name: 'React', icon: FaReact, iconColor: '#61DBFB' },
      { name: 'Next.js', icon: SiNextdotjs, iconColor: '#808080' },
      { name: 'JavaScript', icon: FaJs, iconColor: '#F0DB4F' },
      { name: 'Tailwind', icon: SiTailwindcss, iconColor: '#38BDF8' },
      { name: 'Node.js', icon: FaNodeJs, iconColor: '#68A063' },
      { name: 'HTML5', icon: FaHtml5, iconColor: '#F16529' },
      { name: 'CSS', icon: FaCss3Alt, iconColor: '#1572B6' },
      { name: 'SQL', icon: FaDatabase, iconColor: '#336791' },
    ],
  },
  {
    name: 'Support & Debugging',
    color: 'amber',
    skills: [
      { name: 'Troubleshooting', icon: FaBug, iconColor: '#ef4444' },
      { name: 'Log Analysis', icon: FaClipboardCheck, iconColor: '#f59e0b' },
      { name: 'System Flows', icon: FaProjectDiagram, iconColor: '#8b5cf6' },
      { name: 'Incident Support', icon: FaClipboardCheck, iconColor: '#f97316' },
      { name: 'Testing', icon: BiTestTube, iconColor: '#22d3ee' },
    ],
  },
];

const colorMap = {
  cyan: { dot: 'bg-cyan', text: 'text-cyan', pill: 'bg-accent-bg text-cyan border-cyan/[0.15]' },
  purple: { dot: 'bg-purple', text: 'text-purple', pill: 'bg-purple-bg text-purple border-purple/[0.15]' },
  green: { dot: 'bg-green', text: 'text-green', pill: 'bg-green-bg text-green border-green/[0.15]' },
  amber: { dot: 'bg-[#f59e0b]', text: 'text-[#f59e0b]', pill: 'bg-[#f59e0b]/[0.08] text-[#f59e0b] border-[#f59e0b]/[0.15]' },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 px-8 sm:px-12 lg:px-20 dot-grid">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">03</span>
          <div className="h-[1px] w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-800 tracking-tight mb-16 text-ink"
        >
          My <span className="gradient-text">toolkit</span>
        </motion.h2>

        <div className="space-y-10">
          {categories.map((cat, catIdx) => {
            const colors = colorMap[cat.color];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <span className={`font-mono text-sm font-medium ${colors.text}`}>{cat.name}</span>
                  <div className="flex-1 h-[1px] bg-border" />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 + i * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border cursor-default hover:shadow-md transition-all duration-300 ${colors.pill}`}
                      >
                        {skill.img ? (
                          <img src={skill.img} alt={skill.name} className="w-4 h-4 rounded-sm object-cover" />
                        ) : (
                          <Icon className="text-base" style={{ color: skill.iconColor }} />
                        )}
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
