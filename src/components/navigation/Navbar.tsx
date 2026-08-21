import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Boxes } from 'lucide-react';
import { NAV_LINKS } from '@/data/site';
import { LinkButton } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isProduct = location.pathname.startsWith('/product');

  useEffect(() => {
    if (isProduct) {
      setActiveId('');
      return;
    }
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const onScroll = () => {
      const marker = window.scrollY + 120;
      let current = '';
      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = section.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isProduct, location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-base-400/60 bg-base-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-accent-cyan/30 bg-base-800">
            <Boxes className="h-4 w-4 text-accent-cyan" />
            <span className="absolute inset-0 rounded-md bg-accent-cyan/10 blur-md transition-opacity group-hover:opacity-100 opacity-0" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink-50">Morphiic</span>
        </Link>

        {/* Desktop links */}
        {!isProduct && (
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = activeId === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative px-3.5 py-2 text-sm transition-colors hover:text-ink-50 ${
                    active ? 'text-ink-50' : 'text-ink-300'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 bottom-1 h-px origin-left bg-accent-cyan/60 transition-transform duration-300 group-hover:scale-x-100 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>
        )}
        {isProduct && (
          <div className="hidden items-center gap-2 lg:flex">
            <span className="tech-label">PRODUCT / DATA OPERATIONS</span>
          </div>
        )}

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton to="/product" variant="primary" className="text-xs">
            Auralis AI
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-base-400 text-ink-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-base-400/60 bg-base-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {!isProduct &&
                NAV_LINKS.map((link, i) => {
                  const active = activeId === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className={`rounded-md px-3 py-2.5 text-sm hover:bg-base-700/60 hover:text-ink-50 ${
                        active ? 'bg-base-700/60 text-ink-50' : 'text-ink-300'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              <LinkButton to="/product" variant="primary" className="mt-3 w-full">
                Auralis AI
              </LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
