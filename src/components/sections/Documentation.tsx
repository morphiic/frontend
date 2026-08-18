import { motion } from 'framer-motion';
import { FileText, BookOpen, Code2, Terminal } from 'lucide-react';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { DOC_ITEMS } from '@/data/site';

const ICONS = [FileText, BookOpen, Code2, Terminal];

export function Documentation() {
  return (
    <Section id="docs">
      <SectionHeading
        label="Developer Platform"
        title="Developer API & Documentation"
        description="A developer platform for integrating Morphiic into your data stack — currently in development."
      />

      <div className="mt-10 flex justify-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-violet/30 bg-accent-violet/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-violet" />
            <TechLabel className="text-accent-violet">Status: Coming Soon</TechLabel>
          </div>
        </FadeIn>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DOC_ITEMS.map((doc, i) => (
          <FadeIn key={doc.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-lg border border-base-400/60 bg-base-800/40 p-5">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-violet/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-base-400 bg-base-700 text-accent-violet">
                {(() => {
                  const Icon = ICONS[i];
                  return <Icon className="h-5 w-5" />;
                })()}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-50">{doc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{doc.description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-base-400/60 pt-4">
                <TechLabel className="text-[0.6rem]">{doc.status}</TechLabel>
                <motion.span className="text-ink-600 transition-colors group-hover:text-accent-violet">
                  →
                </motion.span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
