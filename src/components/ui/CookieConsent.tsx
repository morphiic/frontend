import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('morphiic-cookies');
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (value: string) => {
    localStorage.setItem('morphiic-cookies', value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-base-400/60 bg-base-900/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,.4)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-accent-cyan">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm-1-13h2v2h-2Zm0 4h2v6h-2Z" />
                  </svg>
                  <span className="text-sm font-medium text-ink-50">Cookie Preferences</span>
                </div>
                <p className="text-[13px] leading-relaxed text-ink-400">
                  We use cookies to enhance your experience, analyze site traffic, and personalize content.
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => dismiss('necessary')}
                  className="rounded-lg border border-base-400 bg-base-700/40 px-4 py-2 text-[12px] font-mono tracking-wide text-ink-300 transition-colors hover:border-base-300 hover:text-ink-50"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => dismiss('all')}
                  className="rounded-lg bg-accent-cyan px-4 py-2 text-[12px] font-mono tracking-wide text-base-950 transition-colors hover:bg-accent-cyan/90"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
