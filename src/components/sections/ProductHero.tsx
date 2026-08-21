import { motion } from 'framer-motion';
import { Boxes, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { TechLabel } from '@/components/ui/TechLabel';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function ProductHero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden pt-16">
      <BackgroundGrid variant="dense" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="mb-6 flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent-cyan/30 bg-base-800">
              <Boxes className="h-3.5 w-3.5 text-accent-cyan" />
            </span>
            <TechLabel bright>Morphiic / Product</TechLabel>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-50 text-balance sm:text-5xl md:text-6xl"
          >
            The Enterprise Data{' '}
            <span className="gradient-text">Transformation Engine</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            Transform, enrich, validate, and optimize enterprise data through intelligent
            processing workflows.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent-cyan px-5 py-2.5 text-sm font-medium text-base-950 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] transition-all hover:shadow-[0_0_32px_-4px_rgba(34,211,238,0.8)]">
              Request Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-base-400 bg-base-700/40 px-5 py-2.5 text-sm font-medium text-ink-200 backdrop-blur-sm transition-colors hover:border-accent-cyan/40 hover:text-ink-50"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
