import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { WORKFLOW_STEPS } from '@/data/site';

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section id="how-it-works">
      <SectionHeading
        label="How Morphiic Works"
        title="A Seven-Stage Transformation Workflow"
        description="From ingestion to delivery, each stage progressively refines raw enterprise data into AI-ready intelligence."
      />

      <div ref={ref} className="relative mt-16 pl-6 md:pl-0">
        {/* Vertical progress line (desktop) */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-base-400/60 md:left-1/2 md:block">
          <motion.div
            style={{ height: lineHeight }}
            className="w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-violet"
          />
        </div>

        <div className="flex flex-col gap-8 md:gap-2">
          {WORKFLOW_STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center gap-6 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
              >
                {/* Node */}
                <span
                  className={`absolute top-3 hidden h-3 w-3 rounded-full border border-accent-cyan bg-base-950 md:block ${
                    isLeft ? '-right-1.5' : '-left-1.5'
                  }`}
                />

                <div className="w-full rounded-lg border border-base-400/60 bg-base-800/40 p-5">
                  <div className={`flex items-center gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
                    <TechLabel bright>{step.num}</TechLabel>
                    <span className="h-px w-6 bg-accent-cyan/40" />
                    <span className="font-display text-sm font-semibold text-ink-50">{step.title}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
