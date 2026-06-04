import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { blogPosts } from '../components/BlogData';
import profileImg from '../images/profile3.jpg';

const BlogPost = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="bg-base min-h-screen relative">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main className="relative z-10 container-editorial !max-w-2xl pt-32 pb-24 text-center">
          <h1 className="font-heading font-extrabold text-3xl mb-4">Post not found</h1>
          <Link to="/writings" className="text-accent hover:underline text-sm">
            Back to writing
          </Link>
        </main>
      </div>
    );
  }

  // Render markdown-like content with basic formatting
  const renderInline = (text) =>
    text.split(/(\*\*.*?\*\*)/).map((part, k) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={k} className="text-ink font-semibold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );

  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={i} className="font-heading font-bold text-xl sm:text-2xl mt-10 mb-4">
            {block.replace('## ', '')}
          </h2>
        );
      }

      if (/^\d+\.\s/.test(block)) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-ink-light text-[16px] leading-relaxed">
            {items.map((item, j) => (
              <li key={j}>{renderInline(item.replace(/^\d+\.\s/, ''))}</li>
            ))}
          </ol>
        );
      }

      if (block.startsWith('- ')) {
        const items = block.split('\n').filter(Boolean);
        return (
          <ul key={i} className="list-disc list-inside space-y-2 my-4 text-ink-light text-[16px] leading-relaxed">
            {items.map((item, j) => (
              <li key={j}>{renderInline(item.replace(/^-\s/, ''))}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={i} className="text-ink-light text-[16px] leading-[1.85] mb-5">
          {renderInline(block)}
        </p>
      );
    });
  };

  return (
    <div className="bg-base min-h-screen relative">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <main className="relative z-10 container-editorial !max-w-2xl pt-32 pb-24">
        {/* Back link */}
        <Link
          to="/writings"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-300 mb-10"
        >
          <FaArrowLeft className="text-xs" />
          Back to writing
        </Link>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs text-ink-light border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] mb-8">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
            <img src={profileImg} alt="Gorock" className="w-11 h-11 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-ink">Gorock Shetty</p>
              <div className="flex items-center gap-3 text-xs text-muted mt-0.5">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>{renderContent(post.content)}</div>
        </motion.article>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            to="/writings"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors duration-300"
          >
            <FaArrowLeft className="text-xs" />
            All writing
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
