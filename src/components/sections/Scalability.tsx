import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { SCALABILITY_METRICS } from '@/data/site';

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const display = useTransform(spring, (v) => v.toFixed(value.includes('.') ? 2 : 0));

  useEffect(() => {
    if (inView) mv.set(parseFloat(value));
  }, [inView, value, mv]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{display}</motion.span>
      {suffix && <span className="ml-0.5 text-lg text-accent-cyan">{suffix}</span>}
    </span>
  );
}

export function Scalability() {
  return (
    <Section id="scalability" className="border-y border-base-400/40 bg-base-900/30">
      <SectionHeading
        label="Scalability"
        title="Designed to Transform Data at Enterprise Scale"
        description="High-volume processing, automated workflows, and continuous transformation — engineered for the demands of enterprise environments."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SCALABILITY_METRICS.map((m, i) => (
          <FadeIn key={m.label} delay={i * 0.08}>
            <div className="relative h-full overflow-hidden rounded-lg border border-base-400/60 bg-base-800/40 p-6">
              <TechLabel className="mb-4 block">{m.label}</TechLabel>
              <p className="font-display text-4xl font-semibold text-ink-50 md:text-5xl">
                <AnimatedNumber value={m.value} suffix={m.suffix} />
              </p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-accent-cyan/40 to-transparent" />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-lg border border-base-400/60 bg-base-800/30 px-6 py-5">
          {['Large-Scale Processing', 'High-Volume Data', 'Automated Workflows', 'Continuous Transformation', 'Enterprise Reliability'].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/70" />
              <span className="text-sm text-ink-300">{label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
