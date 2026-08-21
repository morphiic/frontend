import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <FadeIn>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-cyan/60" />
              <TechLabel bright>About</TechLabel>
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-4xl">
              A Smarter Way to Prepare Enterprise Data for What&apos;s Next
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative overflow-hidden rounded-xl border border-base-400/60 bg-base-900/40 p-8">
            <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative space-y-5 text-base leading-relaxed text-ink-300">
              <p>
                Your teams shouldn&apos;t have to spend weeks cleaning, mapping, restructuring, and
                enriching data before they can put it to work. We provide an intelligent transformation
                layer that helps businesses bring data from databases, APIs, applications, files, and
                operational systems into a more consistent and usable form — without adding unnecessary
                complexity to the data stack.
              </p>
              <p>
                From the moment your data enters Morphiic, it can be transformed, standardized,
                enriched, and validated before reaching the analytics, machine learning, and AI systems
                that depend on it.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-base-400/60 pt-5">
                {['AI-POWERED', 'AUTOMATED', 'ENRICHED', 'VALIDATED', 'SCALABLE'].map((t) => (
                  <span key={t} className="rounded-full border border-base-400/60 bg-base-800/50 px-3 py-1 tech-label text-[0.6rem]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
