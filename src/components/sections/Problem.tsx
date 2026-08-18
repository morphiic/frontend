import { motion } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROBLEMS } from '@/data/site';

export function Problem() {
  return (
    <Section id="problem" className="border-y border-base-400/40 bg-base-900/30">
      <SectionHeading
        label="The Problem"
        title="Enterprise Data Is Complex, Fragmented, and Hard to Prepare"
        description="Before analytics and AI can deliver value, data must be wrestled into shape — a process that consumes engineering time and slows every downstream initiative."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROBLEMS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-lg border border-base-400/60 bg-base-800/40 p-5 transition-colors hover:border-accent-cyan/30">
              {/* Architecture-map corner marks */}
              <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-base-300/60" />
              <span className="absolute right-2 top-2 h-2 w-2 border-r border-t border-base-300/60" />
              <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-base-300/60" />
              <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-base-300/60" />

              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-cyan">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-50">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.description}</p>

              {/* Hover glow line */}
              <motion.span
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
