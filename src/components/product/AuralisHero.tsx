import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink, Zap, Shield, Database } from 'lucide-react';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { TechLabel } from '@/components/ui/TechLabel';
import { AURALIS_HERO_STATS } from '@/data/site';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function AuralisHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-20 pb-16">
      <BackgroundGrid variant="dense" />

      {/* Atmospheric glow halos */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-accent-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[500px] rounded-full bg-accent-blue/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-12 md:px-10 md:pt-16">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          {/* Top pill badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/5 px-4 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
            <TechLabel bright className="text-[0.68rem] tracking-wider">
              AURALIS AI · AUTONOMOUS DATA INTELLIGENCE
            </TechLabel>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={item}
            className="mx-auto mt-6 max-w-5xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-50 text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Autonomous Data Transformation{' '}
            <span className="gradient-text">at GPU Velocity</span>
          </motion.h1>

          {/* Subtitle / Product description */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg md:text-xl"
          >
            Auralis AI eliminates manual ETL scripts by autonomously harmonizing fragmented, multi-schema
            enterprise records across 240+ formats. Contextual enrichment, real-time deduplication, and
            anomaly-free delivery—built on accelerated data science.
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://workspace.morphiic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent-cyan px-7 py-3.5 text-sm font-semibold text-base-950 shadow-[0_0_30px_-4px_rgba(34,211,238,0.7)] transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_40px_-2px_rgba(34,211,238,0.9)] hover:scale-[1.02]"
            >
              <span>Launch Auralis Workspace</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-base-400 bg-base-800/80 px-6 py-3.5 text-sm font-medium text-ink-200 backdrop-blur-md transition-colors hover:border-accent-cyan/50 hover:bg-base-700 hover:text-ink-50"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="h-4 w-4 text-accent-cyan" />
            </a>
          </motion.div>

          {/* Telemetry Key Stat Pills */}
          <motion.div
            variants={item}
            className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4"
          >
            {AURALIS_HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-base-400/60 bg-base-900/60 p-4 text-left backdrop-blur-md transition-all duration-300 hover:border-accent-cyan/40 hover:bg-base-850"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent-cyan/5 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-bold tracking-tight text-ink-50 sm:text-3xl">
                    {stat.value}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-accent-cyan">{stat.label}</p>
                <p className="mt-0.5 text-[0.7rem] text-ink-500 leading-tight">{stat.sublabel}</p>
              </div>
            ))}
          </motion.div>

          {/* Visual Architecture Preview Band */}
          <motion.div
            variants={item}
            className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-base-400/80 bg-base-900/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7 text-left"
          >
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-base-400/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 tech-label text-[0.62rem] text-ink-400">AURALIS_ENGINE // ACTIVE_STREAM_01</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tech-label text-[0.6rem] text-emerald-400">PARALLEL PIPELINES OPERATIONAL</span>
              </div>
            </div>

            {/* Pipeline Stream Visualizer */}
            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-4">
              <div className="rounded-lg border border-base-400/50 bg-base-950/60 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="tech-label text-[0.55rem] text-ink-400">INPUT SOURCES</span>
                  <Database className="h-3.5 w-3.5 text-ink-400" />
                </div>
                <p className="text-sm font-semibold text-ink-100">240+ Multi-Schema</p>
                <p className="text-[0.7rem] text-ink-500 mt-1">SQL, JSON, Parquet, Kafka streams</p>
                <div className="mt-3 flex items-center justify-between border-t border-base-400/40 pt-2 text-[0.65rem] font-mono text-ink-400">
                  <span>Throughput</span>
                  <span className="text-accent-cyan">12.8M rec/s</span>
                </div>
              </div>

              <div className="rounded-lg border border-accent-cyan/40 bg-accent-cyan/5 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="tech-label-bright text-[0.55rem]">ACCELERATION LAYER</span>
                  <Zap className="h-3.5 w-3.5 text-accent-cyan" />
                </div>
                <p className="text-sm font-semibold text-ink-50">GPU-Accelerated ETL</p>
                <p className="text-[0.7rem] text-ink-300 mt-1">Instant tabular restructuring</p>
                <div className="mt-3 flex items-center justify-between border-t border-accent-cyan/20 pt-2 text-[0.65rem] font-mono text-accent-cyan">
                  <span>Engine</span>
                  <span>RAPIDS cuDF</span>
                </div>
              </div>

              <div className="rounded-lg border border-base-400/50 bg-base-950/60 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="tech-label text-[0.55rem] text-ink-400">SEMANTIC REASONING</span>
                  <Sparkles className="h-3.5 w-3.5 text-accent-blue" />
                </div>
                <p className="text-sm font-semibold text-ink-100">Local NER & Context</p>
                <p className="text-[0.7rem] text-ink-500 mt-1">Private enterprise entity signals</p>
                <div className="mt-3 flex items-center justify-between border-t border-base-400/40 pt-2 text-[0.65rem] font-mono text-ink-400">
                  <span>Framework</span>
                  <span className="text-accent-blue">NeMo LLMs</span>
                </div>
              </div>

              <div className="rounded-lg border border-base-400/50 bg-base-950/60 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="tech-label text-[0.55rem] text-ink-400">INTEGRITY GUARANTEE</span>
                  <Shield className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <p className="text-sm font-semibold text-ink-100">99.8% Clean Output</p>
                <p className="text-[0.7rem] text-ink-500 mt-1">Automated anomaly & duplicate scrub</p>
                <div className="mt-3 flex items-center justify-between border-t border-base-400/40 pt-2 text-[0.65rem] font-mono text-ink-400">
                  <span>Precision</span>
                  <span className="text-emerald-400">cuML ML</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
