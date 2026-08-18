import { motion } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { ARCH_SOURCES, ARCH_STAGES, ARCH_DESTINATIONS } from '@/data/site';

export function ArchitectureDiagram() {
  return (
    <Section id="architecture" className="border-y border-base-400/40 bg-base-900/30">
      <SectionHeading
        label="Enterprise Data Architecture"
        title="A Single Engine Across the Entire Data Stack"
        description="Morphiic sits between your data sources and your AI systems — ingesting, transforming, enriching, validating, and optimizing at scale."
      />

      <FadeIn delay={0.15} className="mt-14">
        <div className="relative overflow-hidden rounded-xl border border-base-400/60 bg-base-950/60 p-6 md:p-10">
          <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative space-y-8">
            {/* Sources */}
            <div>
              <TechLabel className="mb-4 block">Data Sources</TechLabel>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
                {ARCH_SOURCES.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center gap-2 rounded-md border border-base-400/60 bg-base-800/50 px-2 py-3 text-center"
                  >
                    <s.icon className="h-4 w-4 text-accent-cyan" />
                    <span className="tech-label text-[0.55rem]">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Connector />

            {/* Morphiic Engine band */}
            <div className="relative rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 px-6 py-6 text-center">
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-accent-cyan/5 blur-xl" />
              <TechLabel bright className="relative block">
                Morphiic Engine
              </TechLabel>
            </div>

            <Connector />

            {/* Stages */}
            <div>
              <TechLabel className="mb-4 block">Processing Stages</TechLabel>
              <div className="flex flex-col gap-2">
                {ARCH_STAGES.map((stage, i) => (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="tech-label-bright w-6 text-[0.55rem]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-px w-6 bg-accent-cyan/40" />
                    <span className="rounded-md border border-base-400/60 bg-base-800/50 px-4 py-2 text-sm text-ink-200">
                      {stage}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Connector />

            {/* AI-ready data band */}
            <div className="relative rounded-lg border border-accent-blue/30 bg-accent-blue/5 px-6 py-6 text-center">
              <TechLabel bright className="block text-accent-blue">
                AI-Ready Data
              </TechLabel>
            </div>

            <Connector />

            {/* Destinations */}
            <div>
              <TechLabel className="mb-4 block">Downstream Systems</TechLabel>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {ARCH_DESTINATIONS.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-md border border-base-400/60 bg-base-800/50 px-3 py-3 text-center"
                  >
                    <span className="tech-label text-[0.6rem]">{d}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

function Connector() {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="h-8 w-px origin-top bg-gradient-to-b from-accent-cyan/60 to-accent-cyan/0"
      />
    </div>
  );
}
