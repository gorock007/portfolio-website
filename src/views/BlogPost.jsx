import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const BlogPost = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="bg-base min-h-screen relative noise-overlay">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 pt-28 pb-20 text-center">
          <h1 className="font-heading font-800 text-3xl text-ink mb-4">Post not found</h1>
          <Link to="/blog" className="text-cyan hover:underline text-sm">
            Back to blog
          </Link>
        </main>
      </div>
    );
  }

  // Render markdown-like content with basic formatting
  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      // Heading
      if (block.startsWith('## ')) {
        return (
          <h2
            key={i}
            className="font-heading font-700 text-xl sm:text-2xl text-ink mt-10 mb-4"
          >
            {block.replace('## ', '')}
          </h2>
        );
      }

      // Ordered list
      if (/^\d+\.\s/.test(block)) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-ink-light text-[15px] leading-relaxed">
            {items.map((item, j) => {
              const text = item.replace(/^\d+\.\s/, '');
              return (
                <li key={j}>
                  {text.split(/(\*\*.*?\*\*)/).map((part, k) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                      <strong key={k} className="text-ink font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ol>
        );
      }

      // Unordered list
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ul key={i} className="list-disc list-inside space-y-2 my-4 text-ink-light text-[15px] leading-relaxed">
            {items.map((item, j) => {
              const text = item.replace(/^-\s/, '');
              return (
                <li key={j}>
                  {text.split(/(\*\*.*?\*\*)/).map((part, k) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                      <strong key={k} className="text-ink font-semibold">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ul>
        );
      }

      // Paragraph
      return (
        <p key={i} className="text-ink-light text-[15px] leading-[1.85] mb-4">
          {block.split(/(\*\*.*?\*\*)/).map((part, k) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={k} className="text-ink font-semibold">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

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
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors duration-300 mb-10"
          >
            <FaArrowLeft className="text-xs" />
            Back to blog
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${tagColors[tag] || 'bg-accent-bg text-cyan'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-heading font-800 text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.1] text-ink mb-8">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
            <img
              src={profileImg}
              alt="Gorock"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-ink">Gorock Shetty</p>
              <div className="flex items-center gap-4 text-xs text-muted mt-0.5">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[10px]" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaClock className="text-[10px]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose-custom">{renderContent(post.content)}</div>
        </motion.article>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors duration-300"
          >
            <FaArrowLeft className="text-xs" />
            All posts
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
