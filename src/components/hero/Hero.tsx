import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { DataFlowVisualizer } from './DataFlowVisualizer';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16">
      <BackgroundGrid variant="dense" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10 md:pt-20">
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-4xl text-center">
          <motion.div variants={item} className="mx-auto mb-6 flex items-center justify-center gap-2.5">
            <span className="flex h-2 w-2 rounded-full bg-accent-cyan" />
            <span className="tech-label-bright">AI Data Transformation Engine</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-50 text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transform Enterprise Data Into{' '}
            <span className="gradient-text">AI-Ready Intelligence.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            Morphiic transforms fragmented enterprise data into structured, enriched, standardized,
            and analysis-ready information through intelligent AI-powered data processing.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton to="/product" variant="primary" className="w-full sm:w-auto">
              Explore the Platform
            </LinkButton>
            <a
              href="#how-it-works"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-base-400 bg-base-700/40 px-5 py-2.5 text-sm font-medium text-ink-200 backdrop-blur-sm transition-colors hover:border-accent-cyan/40 hover:text-ink-50 sm:w-auto"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Data flow visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-16 rounded-xl border border-base-400/60 bg-base-900/40 p-6 backdrop-blur-sm md:mt-20 md:p-10"
        >
          <div className="grid-bg-fine pointer-events-none absolute inset-0 rounded-xl opacity-40" />
          <div className="relative">
            <DataFlowVisualizer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
