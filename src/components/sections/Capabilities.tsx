import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { CAPABILITIES } from '@/data/site';

export function Capabilities() {
  return (
    <Section id="capabilities" className="border-y border-base-400/40 bg-base-900/30">
      <SectionHeading
        label="Capabilities"
        title="Built Around the Way Enterprise Data Actually Works"
        description="Your data comes from different systems, arrives in different formats, and carries different levels of quality and context. Morphiic brings the essential transformation capabilities together in one intelligent system — so you can move from fragmented inputs to consistent, enriched, and reliable data without stitching together disconnected workflows."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((cap, i) => (
          <FadeIn key={cap.title} delay={i * 0.1}>
            <div className="group relative h-full rounded-lg border border-base-400/60 bg-base-800/40 p-6">
              {i < CAPABILITIES.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-base-300/60 lg:block" />
              )}

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-cyan">
                  <cap.icon className="h-5 w-5" />
                </span>
                <TechLabel className="text-[0.6rem]">MODULE_{String(i + 1).padStart(2, '0')}</TechLabel>
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-ink-50">{cap.title}</h3>
              <p className="mt-1 text-xs font-medium text-ink-300">{cap.subtitle}</p>

              <ul className="mt-4 space-y-2">
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
                <p className="text-xs text-ink-500 italic">{cap.closing}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-14 text-center">
        <p className="text-base font-medium text-ink-200">
          Four Capabilities. One Intelligent Data Layer.
        </p>
        <p className="mt-2 text-sm text-ink-400">
          Transform → Process → Enrich → Validate
        </p>
        <p className="mt-2 text-sm text-ink-500 max-w-2xl mx-auto">
          Morphiic connects every stage of the data preparation journey, helping you create a more reliable path from enterprise information to analytics and AI.
        </p>
        <Link
          to="/product"
          className="group mt-6 inline-flex items-center gap-2 rounded-md bg-accent-cyan px-6 py-3 text-sm font-medium text-base-950 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_32px_-4px_rgba(34,211,238,0.8)]"
        >
          Explore How Morphiic Works
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </FadeIn>
    </Section>
  );
}
