import { motion } from 'framer-motion';
import { Database, Brain, Zap, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { AURALIS_WORKFLOW } from '@/data/site';

const STAGE_ICONS = [Database, Brain, Zap, ShieldCheck, Send];

export function AuralisWorkflow() {
  return (
    <section id="workflow" className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32 bg-base-900/30">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Execution Pipeline"
          title={
            <>
              How Auralis AI Operates from{' '}
              <span className="gradient-text">Ingestion to Delivery</span>
            </>
          }
          description="Auralis AI transforms disparate enterprise data flows through an autonomous 5-stage GPU-accelerated pipeline, converting raw streams into clean, context-rich tables in milliseconds."
        />

        <div className="mt-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-12 bg-gradient-to-r from-accent-cyan/20 via-accent-blue/30 to-accent-violet/20" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {AURALIS_WORKFLOW.map((step, idx) => {
              const StepIcon = STAGE_ICONS[idx] || Database;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative flex flex-col justify-between rounded-xl border border-base-400/70 bg-base-900/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-accent-cyan/50 hover:bg-base-850"
                >
                  <div>
                    {/* Header badge with step number and icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan transition-transform group-hover:scale-110">
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-ink-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mt-4">
                      <TechLabel bright className="text-[0.58rem]">
                        {step.phase}
                      </TechLabel>
                      <h4 className="mt-1.5 font-display text-base font-semibold text-ink-50">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Capabilities checklist */}
                    <div className="mt-4 space-y-1.5 border-t border-base-400/40 pt-3">
                      {step.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-1.5 text-[0.68rem] text-ink-400">
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-accent-cyan/80" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Underlying Tech reference pill */}
                  <div className="mt-5 rounded bg-base-950/80 px-2.5 py-1.5 text-[0.62rem] font-mono text-accent-cyan border border-base-400/40">
                    ⚡ {step.techRef}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
