import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { blogPosts } from '../components/BlogData';

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-paper min-h-screen relative">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />

      <main id="main" className="relative z-10 container-editorial !max-w-2xl pt-32 pb-24">
        {/* Back link */}
        <Link
          to="/"
          className="relative before:absolute before:-inset-2 before:content-[''] inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-300 mb-12"
        >
          <FaArrowLeft className="text-xs" />
          Back to home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-4">
            Writing<span className="text-accent">.</span>
          </h1>
          <p className="text-ink-light text-lg leading-relaxed max-w-md">
            Short pieces on building AI products — what I'm learning as I ship.
          </p>
        </motion.div>

        {blogPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-dashed border-border p-10 text-center"
          >
            <p className="font-heading text-xl font-bold mb-2">Notes coming soon</p>
            <p className="text-muted text-base">
              I'm writing the first few pieces. Check back shortly.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-10">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <Link to={`/writings/${post.id}`} className="block group">
                  <div className="flex items-center gap-3 text-xs text-muted mb-2">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl mb-2 group-hover:text-accent group-hover:underline underline-offset-4 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-ink-light text-base leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
