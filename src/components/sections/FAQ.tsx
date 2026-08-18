import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { FAQS } from '@/data/site';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="border-y border-base-400/40 bg-base-900/30">
      <SectionHeading
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about how Morphiic transforms enterprise data."
      />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-base-400/60 overflow-hidden rounded-xl border border-base-400/60 bg-base-800/30">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-base-700/30"
              >
                <span className={`text-sm font-medium transition-colors ${isOpen ? 'text-ink-50' : 'text-ink-200'}`}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border ${
                    isOpen ? 'border-accent-cyan/40 text-accent-cyan' : 'border-base-400 text-ink-400'
                  }`}
                >
                  <Plus className="h-3.5 w-3.5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <TechLabel className="mb-2 block">A_{String(i + 1).padStart(2, '0')}</TechLabel>
                      <p className="text-sm leading-relaxed text-ink-400">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
