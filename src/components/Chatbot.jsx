import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaRegCommentDots, FaTimes, FaArrowUp, FaExclamationCircle } from 'react-icons/fa';

// Server-side endpoint (Netlify Function). Holds the OpenAI key + all security controls.
const ENDPOINT = '/.netlify/functions/chat';
const MAX_CHARS = 1000; // mirror the server-side per-message cap

const GREETING =
  "Hi — I'm Gorock (well, an AI answering in my voice). Ask me anything about my projects, skills, or background.";

const SUGGESTIONS = ['What is NaatiAce?', 'What can you build?', 'How can I get in touch?'];

const Chatbot = ({ onOpenChange }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // real turns only: { role: 'user'|'assistant', content }
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  // Close and return focus to the launcher (so keyboard users don't lose their place).
  const closePanel = () => {
    setOpen(false);
    launcherRef.current?.focus();
  };

  // Tell the parent when open state changes (so it can hide the scroll-to-top button).
  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  // Focus the input when the panel opens and after a request finishes (while it's enabled).
  useEffect(() => {
    if (open && !loading) inputRef.current?.focus();
  }, [open, loading]);

  // Keep the conversation scrolled to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError('');
    setInput('');
    const next = [...messages, { role: 'user', content: trimmed }].slice(-12);
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || 'Something went wrong — please try again.');
        return;
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError("I couldn't reach the assistant — please check your connection and try again.");
    } finally {
      setLoading(false); // the open/loading effect re-focuses the input once it's enabled again
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Chat with Gorock's AI assistant"
            onKeyDown={(e) => e.key === 'Escape' && closePanel()}
            className="fixed z-50 bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[22rem] max-h-[min(70vh,32rem)] flex flex-col rounded-2xl bg-surface border border-border shadow-xl shadow-ink/5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-border-light">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <h2 className="font-heading text-base font-bold text-ink leading-none">Ask me anything</h2>
                </div>
                <p className="text-xs text-muted mt-1.5">AI assistant · answers as Gorock</p>
              </div>
              <button
                type="button"
                onClick={closePanel}
                aria-label="Close chat"
                className="shrink-0 w-11 h-11 -mr-2.5 -mt-2.5 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-surface-alt active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-3"
              aria-live="polite"
              aria-atomic="false"
            >
              <Bubble role="assistant">{GREETING}</Bubble>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="px-3 py-1.5 rounded-full text-xs text-ink-light border border-border hover:border-ink/40 hover:text-ink active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <Bubble key={i} role={m.role}>
                  {m.content}
                </Bubble>
              ))}

              {loading && <Typing />}

              {error && (
                <p role="alert" className="flex items-start gap-2 text-sm text-accent leading-relaxed">
                  <FaExclamationCircle aria-hidden="true" className="mt-1 shrink-0" />
                  <span>{error}</span>
                </p>
              )}
            </div>

            {/* Composer */}
            <form onSubmit={onSubmit} className="flex items-end gap-2 p-3 border-t border-border-light">
              <label htmlFor="chat-input" className="sr-only">
                Your message
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                type="text"
                value={input}
                maxLength={MAX_CHARS}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my work…"
                autoComplete="off"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-paper border border-border text-base text-ink placeholder:text-muted focus:outline-none focus:border-ink disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="shrink-0 w-11 h-11 rounded-full bg-ink text-paper flex items-center justify-center hover:bg-ink-light active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
              >
                <FaArrowUp className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? closePanel() : setOpen(true))}
        aria-label={open ? 'Close chat' : 'Open chat — ask about my work'}
        aria-expanded={open}
        whileTap={{ scale: 0.92 }}
        className="fixed z-50 bottom-6 right-4 sm:right-6 w-14 h-14 rounded-full bg-ink text-paper shadow-lg shadow-ink/15 flex items-center justify-center hover:bg-ink-light transition-colors duration-200 cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-lg" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FaRegCommentDots className="text-lg" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

const Bubble = ({ role, children }) => {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-base leading-relaxed ${
          isUser
            ? 'bg-ink text-paper rounded-br-md'
            : 'bg-surface-alt text-ink-light rounded-bl-md'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Typing = () => {
  const reduce = useReducedMotion();
  return (
    <div className="flex justify-start" aria-label="Assistant is typing">
      <div className="bg-surface-alt rounded-2xl rounded-bl-md px-4 py-2.5 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted"
            animate={reduce ? { opacity: 0.6 } : { opacity: [0.3, 1, 0.3] }}
            transition={reduce ? { duration: 0 } : { duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
