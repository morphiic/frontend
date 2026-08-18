import { motion } from 'framer-motion';
import { TechLabel } from '@/components/ui/TechLabel';
import { PIPELINE_STAGES } from '@/data/site';

export function PipelineEditor() {
  return (
    <div className="rounded-lg border border-base-400/60 bg-base-950/60 p-5">
      <div className="mb-5 flex items-center justify-between">
        <TechLabel bright>Pipeline Visualizer</TechLabel>
        <span className="tech-label text-[0.6rem]">EXECUTION FLOW</span>
      </div>

      <div className="grid-bg-fine relative -mx-2 overflow-hidden rounded-md border border-base-400/40 p-4">
        {/* Desktop horizontal flow */}
        <div className="hidden flex-col gap-2 md:flex">
          {PIPELINE_STAGES.map((stage, i) => (
            <div key={stage.name} className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group flex w-48 flex-shrink-0 items-center gap-3 rounded-md border border-base-400/60 bg-base-800/60 px-3 py-2.5 transition-colors hover:border-accent-cyan/40"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded border border-base-400 bg-base-700 tech-label-bright text-[0.55rem]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-xs font-medium text-ink-50">{stage.name}</p>
                  <p className="tech-label text-[0.5rem]">{stage.count} rec</p>
                </div>
              </motion.div>

              {/* Metrics */}
              <div className="flex flex-1 items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="tech-label text-[0.55rem]">TIME</span>
                  <span className="text-xs text-ink-300">{stage.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="tech-label text-[0.55rem]">SUCCESS</span>
                  <span className="text-xs text-emerald-400">{stage.rate}</span>
                </div>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-base-600">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: stage.rate }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 + 0.2, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                  />
                </div>
              </div>

              {i < PIPELINE_STAGES.length - 1 && (
                <span className="text-ink-600">↓</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="flex flex-col gap-2 md:hidden">
          {PIPELINE_STAGES.map((stage, i) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-md border border-base-400/60 bg-base-800/60 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded border border-base-400 bg-base-700 tech-label-bright text-[0.5rem]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium text-ink-50">{stage.name}</span>
                </div>
                <span className="tech-label text-[0.5rem]">{stage.count}</span>
              </div>
              <div className="mt-2 flex items-center gap-3 pl-8">
                <span className="tech-label text-[0.5rem]">TIME</span>
                <span className="text-xs text-ink-300">{stage.time}</span>
                <span className="tech-label text-[0.5rem]">RATE</span>
                <span className="text-xs text-emerald-400">{stage.rate}</span>
              </div>
              {i < PIPELINE_STAGES.length - 1 && (
                <div className="flex justify-center pt-1 text-ink-600">↓</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
