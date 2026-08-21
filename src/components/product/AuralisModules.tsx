import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles, ShieldCheck, Gauge, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { AURALIS_MODULES } from '@/data/site';

const ICONS_MAP: Record<string, typeof Cpu> = {
  transformation: Cpu,
  enrichment: Sparkles,
  quality: ShieldCheck,
  serving: Gauge,
};

export function AuralisModules() {
  const [activeTab, setActiveTab] = useState(AURALIS_MODULES[0].id);
  const currentModule = AURALIS_MODULES.find((m) => m.id === activeTab) || AURALIS_MODULES[0];
  const Icon = ICONS_MAP[currentModule.id] || Cpu;

  return (
    <section id="capabilities" className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Core Capabilities"
          title={
            <>
              Intelligent Modules Built for{' '}
              <span className="gradient-text">Complex Data Operations</span>
            </>
          }
          description="Auralis AI replaces fragile point-to-point transformation scripts with unified, autonomous neural modules designed to handle the most demanding enterprise workloads."
        />

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 border-b border-base-400/50 pb-4">
          {AURALIS_MODULES.map((module) => {
            const ModIcon = ICONS_MAP[module.id] || Cpu;
            const isActive = activeTab === module.id;
            return (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`relative flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-xs font-medium transition-all sm:text-sm ${
                  isActive
                    ? 'border border-accent-cyan/40 bg-accent-cyan/10 text-ink-50 shadow-[0_0_20px_-4px_rgba(34,211,238,0.3)]'
                    : 'border border-transparent bg-base-900/40 text-ink-400 hover:border-base-400/60 hover:bg-base-800/60 hover:text-ink-200'
                }`}
              >
                <ModIcon className={`h-4 w-4 ${isActive ? 'text-accent-cyan' : 'text-ink-500'}`} />
                <span>{module.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="module-active-pill"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-accent-cyan"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Module Detail Panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModule.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 rounded-2xl border border-base-400/80 bg-base-900/70 p-6 backdrop-blur-xl lg:grid-cols-[1.2fr_1fr] lg:p-10"
            >
              {/* Left Column: Description & Highlights */}
              <div className="flex flex-col justify-between space-y-6 text-left">
                <div>
                  <div className="inline-flex items-center gap-2 rounded border border-accent-cyan/30 bg-accent-cyan/5 px-2.5 py-1">
                    <Icon className="h-3.5 w-3.5 text-accent-cyan" />
                    <TechLabel bright className="text-[0.62rem]">
                      {currentModule.badge}
                    </TechLabel>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink-50 sm:text-3xl">
                    {currentModule.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-accent-cyan/90 sm:text-base">
                    {currentModule.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-ink-300 sm:text-base">
                    {currentModule.description}
                  </p>
                </div>

                {/* Key feature bullet points */}
                <div className="space-y-3 pt-2">
                  <TechLabel className="text-[0.62rem]">KEY ARCHITECTURAL ADVANTAGES</TechLabel>
                  <div className="grid gap-2.5 sm:grid-cols-1">
                    {currentModule.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-cyan/20 text-accent-cyan">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="text-xs text-ink-200 sm:text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://workspace.morphiic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan transition-colors hover:text-cyan-300 sm:text-sm"
                  >
                    <span>Test module in live workspace</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Telemetry Card & Benchmark Metric */}
              <div className="flex flex-col justify-between gap-4 rounded-xl border border-base-400/60 bg-base-950/80 p-6 text-left">
                <div>
                  <div className="flex items-center justify-between border-b border-base-400/50 pb-3">
                    <TechLabel bright className="text-[0.6rem]">
                      TELEMETRY & BENCHMARKS
                    </TechLabel>
                    <span className="flex items-center gap-1.5 text-[0.65rem] font-mono text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>

                  {/* Highlight Metric Badges */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {currentModule.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-base-400/50 bg-base-900/80 p-4"
                      >
                        <p className="font-display text-2xl font-bold text-ink-50 sm:text-3xl">
                          {m.val}
                        </p>
                        <p className="mt-1 text-[0.7rem] font-mono uppercase tracking-wider text-ink-400">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Process Stream Log */}
                  <div className="mt-6 rounded-lg border border-base-400/50 bg-base-900/90 p-4 font-mono text-xs text-ink-300">
                    <div className="flex items-center justify-between text-[0.65rem] text-ink-500 mb-2 border-b border-base-400/40 pb-1.5">
                      <span>MODULE_PROCESS_STREAM</span>
                      <span>BUFFER: 0ms</span>
                    </div>
                    <div className="space-y-1.5 text-[0.7rem]">
                      <p className="text-ink-400">
                        <span className="text-accent-cyan">[INIT]</span> Synchronizing schema topologies across distributed workers...
                      </p>
                      <p className="text-ink-300">
                        <span className="text-emerald-400">[GPU_EXEC]</span> Vectorized transformation kernel dispatched.
                      </p>
                      <p className="text-ink-400">
                        <span className="text-accent-blue">[NEURAL]</span> Contextual entities resolved with 0% external API leakage.
                      </p>
                      <p className="text-emerald-400">
                        <span className="text-emerald-400">[STATUS]</span> Zero schema drift detected · Ready for downstream ingestion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-base-400/40 pt-3 text-[0.7rem] text-ink-500">
                  ⚡ Powered by accelerated GPU computing runtime and local inference pipelines.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
