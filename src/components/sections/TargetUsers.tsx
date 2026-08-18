import { motion } from 'framer-motion';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TARGET_USERS } from '@/data/site';

export function TargetUsers() {
  return (
    <Section id="users">
      <SectionHeading
        label="Target Users"
        title="Built for Teams That Depend on Data"
        description="From data engineering to machine learning, Morphiic serves every team that needs reliable, AI-ready information."
      />

      <FadeIn delay={0.15} className="mt-14">
        {/* Ecosystem visualization: central hub with surrounding nodes */}
        <div className="relative mx-auto max-w-4xl">
          <div className="grid-bg-fine pointer-events-none absolute inset-0 rounded-xl opacity-30" />

          <div className="relative flex flex-wrap items-center justify-center gap-3 rounded-xl border border-base-400/60 bg-base-900/40 p-8 md:p-12">
            {/* Center */}
            <div className="relative z-10 mb-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-accent-cyan/40 bg-base-800 md:mb-0">
              <span className="font-display text-xs font-semibold text-ink-50">Morphiic</span>
              <span className="tech-label text-[0.5rem]">HUB</span>
              <div className="absolute inset-0 rounded-full bg-accent-cyan/10 blur-lg" />
            </div>

            {/* Nodes */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {TARGET_USERS.map((u, i) => (
                <motion.div
                  key={u.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="group flex flex-col items-center gap-2 rounded-lg border border-base-400/60 bg-base-800/50 p-4 text-center transition-colors hover:border-accent-cyan/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-cyan">
                    <u.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs text-ink-300 group-hover:text-ink-50">{u.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
