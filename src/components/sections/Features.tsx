import { motion } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { FEATURES } from '@/data/site';

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        label="Features"
        title="A Complete AI-Powered Transformation Toolkit"
        description="Every capability needed to turn raw, fragmented enterprise data into reliable, AI-ready intelligence — automated, monitored, and scalable."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-lg border border-base-400/60 bg-base-800/40 p-6"
            >
              {/* Hover gradient backdrop */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-cyan/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                  <f.icon className="h-5 w-5" />
                </span>
                <TechLabel className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {f.meta}
                </TechLabel>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-ink-50">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{f.description}</p>

              <div className="mt-5 flex items-center gap-2 border-t border-base-400/60 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/60 transition-colors group-hover:bg-accent-cyan" />
                <span className="tech-label text-[0.6rem]">{f.meta}</span>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
