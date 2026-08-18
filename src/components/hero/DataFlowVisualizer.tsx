import { motion } from 'framer-motion';
import { DATA_SOURCES, DATA_OUTPUTS } from '@/data/site';
import { TechLabel } from '@/components/ui/TechLabel';

/**
 * Signature hero visual: enterprise data sources flow into the Morphiic
 * AI Transformation Engine, which outputs AI-ready data. Animated SVG
 * connectors carry flowing particles through the pipeline.
 */
export function DataFlowVisualizer() {
  return (
    <div className="relative w-full">
      <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        {/* Sources */}
        <div className="order-2 flex flex-col gap-2 md:order-1">
          <TechLabel className="mb-2 hidden md:block">Enterprise Data Sources</TechLabel>
          {DATA_SOURCES.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className="group flex items-center gap-3 rounded-md border border-base-400/70 bg-base-800/60 px-3 py-2 backdrop-blur-sm transition-colors hover:border-accent-cyan/40"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded border border-base-400 bg-base-700 text-accent-cyan">
                <s.icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs text-ink-300 group-hover:text-ink-50">{s.label}</span>
              <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-accent-cyan/60 md:block" />
            </motion.div>
          ))}
        </div>

        {/* Center engine */}
        <div className="order-1 flex justify-center md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex h-44 w-44 items-center justify-center md:h-56 md:w-56"
          >
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-accent-cyan/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border border-accent-blue/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border border-accent-violet/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-accent-cyan/10 blur-2xl" />

            {/* Core */}
            <div className="relative flex flex-col items-center">
              <TechLabel bright className="text-[0.6rem]">
                Morphiic
              </TechLabel>
              <p className="mt-1 text-center font-display text-sm font-semibold leading-tight text-ink-50 md:text-base">
                AI Transformation
              </p>
              <p className="text-center font-display text-sm font-semibold leading-tight text-ink-50 md:text-base">
                Engine
              </p>
              <span className="mt-2 h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
            </div>

            {/* SVG connectors (desktop) */}
            <svg className="pointer-events-none absolute left-0 top-0 hidden h-full w-full md:block" viewBox="0 0 224 224" fill="none">
              {[40, 70, 100, 130, 160, 190].map((y, i) => (
                <motion.line
                  key={i}
                  x1="0"
                  y1={y}
                  x2="60"
                  y2="112"
                  stroke="url(#flowGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.8 }}
                />
              ))}
              {[40, 70, 100, 130, 160, 190].map((y, i) => (
                <motion.line
                  key={`r${i}`}
                  x1="164"
                  y1="112"
                  x2="224"
                  y2={y}
                  stroke="url(#flowGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.8 }}
                />
              ))}
              <defs>
                <linearGradient id="flowGrad" x1="0" y1="0" x2="224" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22D3EE" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Outputs */}
        <div className="order-3 flex flex-col gap-2">
          <TechLabel className="mb-2 hidden md:block" bright>
            AI-Ready Output
          </TechLabel>
          {DATA_OUTPUTS.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="group flex items-center gap-3 rounded-md border border-accent-cyan/20 bg-base-800/60 px-3 py-2 backdrop-blur-sm transition-colors hover:border-accent-cyan/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              <span className="text-xs text-ink-200 group-hover:text-ink-50">{o.label}</span>
              <span className="ml-auto tech-label text-[0.55rem]">READY</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pipeline stages row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 border-t border-base-400/60 pt-6"
      >
        {['INGEST', 'UNDERSTAND', 'TRANSFORM', 'ENRICH', 'VALIDATE', 'OPTIMIZE', 'DELIVER'].map((stage, i, arr) => (
          <div key={stage} className="flex items-center gap-2">
            <span className="tech-label-bright text-[0.6rem]">{stage}</span>
            {i < arr.length - 1 && <span className="text-ink-600">→</span>}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
