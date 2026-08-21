import { motion } from 'framer-motion';
import { Cpu, Layers, Server, Terminal, Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { AURALIS_TECH_STACK } from '@/data/site';

const TECH_ICONS = [Layers, Cpu, Server, Terminal];

export function AuralisTechStack() {
  return (
    <section id="technology" className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Underlying Acceleration"
          title={
            <>
              Engineered on Accelerated{' '}
              <span className="gradient-text">Data Science & AI Infrastructure</span>
            </>
          }
          description="Auralis AI leverages dedicated GPU-accelerated toolchains and high-performance inference servers to achieve real-time throughput, total data privacy, and extreme computing efficiency."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AURALIS_TECH_STACK.map((tech, index) => {
            const TechIcon = TECH_ICONS[index] || Cpu;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-xl border border-base-400/80 bg-base-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent-cyan/50 hover:bg-base-850"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-cyan/40 bg-base-800 text-accent-cyan transition-transform group-hover:scale-110">
                        <TechIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-ink-50">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-accent-cyan/90 font-mono">
                          {tech.role}
                        </p>
                      </div>
                    </div>
                    <span className="tech-label text-[0.58rem] bg-base-800 border border-base-400/60 rounded px-2 py-1 text-ink-300">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-ink-300 sm:text-sm">
                    {tech.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mt-5 space-y-2 border-t border-base-400/50 pt-4">
                    {tech.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-accent-cyan/20 text-accent-cyan">
                          <Check className="h-2 w-2" />
                        </div>
                        <span className="text-xs text-ink-200">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-base-400/30 pt-3 text-[0.65rem] text-ink-500 font-mono">
                  <span>ENTERPRISE COMPATIBILITY</span>
                  <span className="text-emerald-400">OPTIMIZED RUNTIME</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer / ecosystem info badge */}
        <div className="mt-8 rounded-lg border border-base-400/50 bg-base-900/50 p-4 text-center">
          <p className="text-xs text-ink-400">
            Auralis AI orchestrates these accelerated libraries within a unified microservices architecture, providing an autonomous enterprise data transformation engine with no third-party API dependencies.
          </p>
        </div>
      </div>
    </section>
  );
}
