import { motion } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { CAPABILITIES } from '@/data/site';

export function Capabilities() {
  return (
    <Section id="capabilities" className="border-y border-base-400/40 bg-base-900/30">
      <SectionHeading
        label="Capabilities"
        title="Built for the Complexity of Enterprise Data"
        description="Four interconnected modules — transformation, processing, enrichment, and quality — working as a single intelligent system."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((cap, i) => (
          <FadeIn key={cap.title} delay={i * 0.1}>
            <div className="group relative h-full rounded-lg border border-base-400/60 bg-base-800/40 p-6">
              {/* Connector lines between modules */}
              {i < CAPABILITIES.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-base-300/60 lg:block" />
              )}

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-cyan">
                  <cap.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink-50">{cap.title}</h3>
              </div>

              <ul className="mt-5 space-y-2.5">
                {cap.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2.5 text-sm text-ink-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-cyan/60" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 border-t border-base-400/60 pt-4">
                <TechLabel className="text-[0.6rem]">MODULE_{String(i + 1).padStart(2, '0')}</TechLabel>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
