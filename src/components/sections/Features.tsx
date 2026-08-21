import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { FEATURES } from '@/data/site';

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        label="Features"
        title="Everything You Need to Turn Difficult Data Into Usable Intelligence"
        description="Your data doesn't need another disconnected tool. You need a smarter way to transform what you already have — across databases, APIs, applications, files, and cloud environments — into data your teams can trust and your AI systems can actually use. Morphiic brings the transformation journey together in one intelligent layer."
      />

      <div className="mt-14 space-y-6">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-xl border border-base-400/60 bg-base-800/40 p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-cyan/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-cyan transition-colors group-hover:border-accent-cyan/40">
                  <f.icon className="h-5 w-5" />
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <TechLabel>{f.meta}</TechLabel>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-ink-50">{f.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-300">{f.subtitle}</p>

                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{f.description}</p>

                  <div className="mt-4 flex items-center gap-2 border-t border-base-400/40 pt-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/60 transition-colors group-hover:bg-accent-cyan" />
                    <span className="text-xs font-medium italic text-ink-500">{f.closing}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-14 text-center">
        <p className="text-base text-ink-400 max-w-2xl mx-auto">
          Your Data Has More Potential. Unlock It.
          <br />
          <span className="text-sm text-ink-500">
            Connect your sources. Transform what you have. Improve its quality. Add context. Prepare it for intelligence.
            Morphiic helps you move from data complexity to a foundation your enterprise can build on.
          </span>
        </p>
        <Link
          to="/product"
          className="group mt-6 inline-flex items-center gap-2 rounded-md bg-accent-cyan px-6 py-3 text-sm font-medium text-base-950 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_32px_-4px_rgba(34,211,238,0.8)]"
        >
          Explore the Morphiic Platform
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </FadeIn>
    </Section>
  );
}
