import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { TechLabel } from '@/components/ui/TechLabel';

export function CTA() {
  return (
    <section id="contact" className="relative w-full overflow-hidden px-6 py-28 md:px-10 md:py-36">
      <BackgroundGrid variant="dense" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex items-center justify-center gap-2.5"
        >
          <span className="h-2 w-2 rounded-full bg-accent-cyan" />
          <TechLabel bright>Get Started</TechLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink-50 text-balance sm:text-4xl md:text-5xl"
        >
          Turn Complex Enterprise Data Into{' '}
          <span className="gradient-text">AI-Ready Intelligence.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
        >
          Build a reliable data foundation for analytics, machine learning, and next-generation AI
          applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton to="/product" variant="primary" className="w-full sm:w-auto">
            Explore the Platform
          </LinkButton>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-base-400 bg-base-700/40 px-5 py-2.5 text-sm font-medium text-ink-200 backdrop-blur-sm transition-colors hover:border-accent-cyan/40 hover:text-ink-50 sm:w-auto"
          >
            Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
