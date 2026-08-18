import { motion } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';

const FLOW = ['Fragmented Data', 'Morphiic', 'Structured + Enriched + Validated', 'Analytics & AI'];

export function Overview() {
  return (
    <Section id="overview">
      <SectionHeading
        label="Overview"
        title="The Intelligent Transformation Layer for Enterprise Data"
        description="Enterprise data is distributed across databases, APIs, applications, files, operational systems, and cloud environments. Preparing that information for analytics and AI typically requires manual engineering, repetitive transformations, cleaning, schema mapping, validation, standardization, and enrichment. Morphiic introduces an intelligent transformation layer that automates these processes."
      />

      <FadeIn delay={0.15} className="mt-14">
        <div className="relative rounded-xl border border-base-400/60 bg-base-900/40 p-6 md:p-10">
          <div className="grid-bg-fine pointer-events-none absolute inset-0 rounded-xl opacity-30" />
          <div className="relative flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
            {FLOW.map((step, i) => (
              <div key={step} className="flex flex-1 flex-col items-center gap-3 md:flex-row">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className={`w-full rounded-lg border px-5 py-4 text-center ${
                    i === 1
                      ? 'border-accent-cyan/40 bg-accent-cyan/5 text-ink-50'
                      : 'border-base-400 bg-base-800/60 text-ink-300'
                  }`}
                >
                  <TechLabel bright={i === 1} className="mb-1.5 block">
                    Stage {i + 1}
                  </TechLabel>
                  <p className="text-sm font-medium">{step}</p>
                </motion.div>
                {i < FLOW.length - 1 && (
                  <span className="hidden px-2 text-ink-600 md:block">↓</span>
                )}
                {i < FLOW.length - 1 && (
                  <span className="block px-2 text-center text-ink-600 md:hidden">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
