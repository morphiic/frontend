import { motion } from 'framer-motion';
import { Layers, TrendingUp, Sparkles, Activity } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { AURALIS_USE_CASES } from '@/data/site';

const USE_CASE_ICONS = [Layers, TrendingUp, Sparkles, Activity];

export function AuralisUseCases() {
  return (
    <section id="use-cases" className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32 bg-base-900/30">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Enterprise Impact"
          title={
            <>
              Proven Across Mission-Critical{' '}
              <span className="gradient-text">Enterprise Environments</span>
            </>
          }
          description="From financial services to life sciences, Auralis AI powers the data pipelines behind high-velocity analytics, intelligent automation, and foundation model training."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AURALIS_USE_CASES.map((uc, i) => {
            const Icon = USE_CASE_ICONS[i] || Layers;
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-xl border border-base-400/70 bg-base-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent-cyan/50 hover:bg-base-850"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-ink-50 sm:text-lg">
                          {uc.title}
                        </h4>
                        <TechLabel className="text-[0.55rem] text-accent-cyan">
                          {uc.category}
                        </TechLabel>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-xs leading-relaxed text-ink-300 sm:text-sm">
                    <div className="rounded-lg border border-base-400/40 bg-base-950/60 p-3">
                      <span className="text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-red-400 block mb-1">
                        Challenge
                      </span>
                      <p className="text-ink-400">{uc.challenge}</p>
                    </div>

                    <div className="rounded-lg border border-base-400/40 bg-base-950/60 p-3">
                      <span className="text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-accent-cyan block mb-1">
                        Auralis AI Solution
                      </span>
                      <p className="text-ink-200">{uc.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3">
                  <span className="text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                    Operational Outcome
                  </span>
                  <p className="text-xs font-medium text-emerald-300">{uc.outcome}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
