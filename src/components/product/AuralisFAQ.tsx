import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AURALIS_PRODUCT_FAQS } from '@/data/site';

export function AuralisFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          label="Frequently Asked Questions"
          title={
            <>
              Everything You Need to Know About{' '}
              <span className="gradient-text">Auralis AI</span>
            </>
          }
          description="Clear answers regarding architecture, security isolation, supported data connectors, and private VPC deployment."
        />

        <div className="mt-14 space-y-4">
          {AURALIS_PRODUCT_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-base-400/70 bg-base-900/70 backdrop-blur-md transition-colors hover:border-accent-cyan/40"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors sm:p-6"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4 w-4 shrink-0 text-accent-cyan" />
                    <span className="font-display text-sm font-semibold text-ink-50 sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-accent-cyan' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-base-400/40 px-5 pb-5 pt-3 text-xs leading-relaxed text-ink-300 sm:px-6 sm:pb-6 sm:text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
