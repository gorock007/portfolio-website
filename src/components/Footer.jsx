import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaTiktok, FaPaperPlane } from 'react-icons/fa';

const socialLinks = [
  { icon: FaEnvelope, href: 'mailto:gorock397@gmail.com', label: 'Email', hoverColor: '#ea4335' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@gorockbits', label: 'TikTok', hoverColor: '#000000' },
  { icon: FaTwitter, href: 'https://x.com/gorock_bits', label: 'Twitter', hoverColor: '#1da1f2' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/gorakhshetty/', label: 'LinkedIn', hoverColor: '#0077b5' },
  { icon: FaGithub, href: 'https://github.com/gorock007/', label: 'GitHub', hoverColor: '#333' },
];

const Footer = () => {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <footer id="contact" className="relative py-28 px-8 sm:px-12 lg:px-20">
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">04</span>
          <div className="h-[1px] w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-800 tracking-tight mb-4 text-ink"
        >
          Let's <span className="gradient-text">connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted mb-12 max-w-md text-[15px]"
        >
          Have a project in mind, want to collaborate on content, or just want to chat? Drop me a message.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-surface rounded-2xl border border-border p-6 md:p-8 space-y-5 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-xs ${
                    focusedField === 'name'
                      ? '-top-2.5 text-cyan bg-surface px-1.5 rounded'
                      : 'top-3.5 text-muted'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface-alt border border-border text-ink text-sm transition-all duration-300"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-xs ${
                    focusedField === 'email'
                      ? '-top-2.5 text-cyan bg-surface px-1.5 rounded'
                      : 'top-3.5 text-muted'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface-alt border border-border text-ink text-sm transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-xs ${
                  focusedField === 'message'
                    ? '-top-2.5 text-cyan bg-surface px-1.5 rounded'
                    : 'top-3.5 text-muted'
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                onFocus={() => setFocusedField('message')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full px-4 py-3.5 rounded-xl bg-surface-alt border border-border text-ink text-sm resize-none transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white overflow-hidden cursor-pointer shadow-lg shadow-cyan/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan to-purple" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                Send Message
                <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.form>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs text-muted mb-2 tracking-widest uppercase">Location</p>
              <p className="text-ink text-lg font-medium mb-8">Sydney, Australia</p>

              <p className="font-mono text-xs text-muted mb-4 tracking-widest uppercase">Socials</p>
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-ink-light transition-all duration-300 hover:border-cyan/30 hover:shadow-md hover:scale-105"
                    >
                      <Icon
                        className="text-lg transition-colors duration-300"
                        onMouseEnter={(e) => e.currentTarget.style.color = social.hoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Terminal decoration */}
            <div className="code-block rounded-xl p-4 font-mono text-[11px] hidden lg:block border border-white/[0.06]">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f38ba8]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f9e2af]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#a6e3a1]/80" />
              </div>
              <p><span className="text-[#a6e3a1]">~</span> <span className="text-[#89dceb]">$</span> <span className="text-[#cdd6f4]">echo $STATUS</span></p>
              <p className="text-[#a6e3a1] mt-1">Open to opportunities</p>
              <p className="mt-2"><span className="text-[#a6e3a1]">~</span> <span className="text-[#89dceb]">$</span> <span className="text-[#cdd6f4]">cat socials.txt</span></p>
              <p className="text-[#cdd6f4] mt-1">@gorockbits <span className="text-[#6c7086]">// TikTok + X</span></p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted text-xs font-mono">&copy; {new Date().getFullYear()} Gorock Shetty</p>
            <p className="text-muted/50 text-xs font-mono">Built with React + Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
