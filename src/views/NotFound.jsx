import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PageTitle from '../components/PageTitle';

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);

  return (
    <div className="bg-paper min-h-screen relative">
      <PageTitle title="Page not found — Gorock Shetty" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />

      <main id="main" tabIndex="-1" className="relative z-10 container-editorial !max-w-2xl pt-32 pb-24 text-center">
        <p className="text-xs text-muted tracking-[0.2em] uppercase mb-4">404</p>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">Page not found</h1>
        <p className="text-ink-light text-base leading-relaxed mb-8">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-sm font-medium hover:bg-ink-light active:scale-[0.98] transition-all duration-300"
        >
          <FaArrowLeft className="text-xs" />
          Back to home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
