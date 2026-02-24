import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { blogPosts } from '../components/BlogData';
import profileImg from '../images/profile3.jpg';

const tagColors = {
  AI: 'bg-accent-bg text-cyan',
  'Vibe Coding': 'bg-purple-bg text-purple',
  Productivity: 'bg-green-bg text-green',
  'Web Dev': 'bg-accent-bg text-cyan',
  Tutorial: 'bg-purple-bg text-purple',
  'Content Creation': 'bg-green-bg text-green',
  Growth: 'bg-accent-bg text-cyan',
  TikTok: 'bg-purple-bg text-purple',
};

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-base min-h-screen relative noise-overlay">
      {/* Ambient blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[180px]" />
        <div className="absolute top-[50%] -left-[10%] w-[400px] h-[400px] bg-purple/[0.03] rounded-full blur-[180px]" />
      </div>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 pt-28 pb-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors duration-300 mb-10"
          >
            <FaArrowLeft className="text-xs" />
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="font-heading font-800 text-4xl sm:text-5xl tracking-tight text-ink mb-3">
            Writing<span className="text-cyan">.</span>
          </h1>
          <p className="text-muted text-[15px] leading-relaxed max-w-md">
            Thoughts on AI, vibe coding, content creation, and building in public.
          </p>
        </motion.div>

        {/* Post feed */}
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/[0.04] transition-all duration-300">
                  {/* Author row */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={profileImg}
                      alt="Gorock"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">Gorock Shetty</p>
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-[10px]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-[10px]" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & excerpt */}
                  <h2 className="font-heading font-700 text-lg sm:text-xl text-ink group-hover:text-cyan transition-colors duration-300 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium ${tagColors[tag] || 'bg-accent-bg text-cyan'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
