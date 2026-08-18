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
              A New Transformation Layer for Enterprise Data
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative overflow-hidden rounded-xl border border-base-400/60 bg-base-900/40 p-8">
            <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative space-y-5 text-base leading-relaxed text-ink-300">
              <p>
                Morphiic exists to simplify the complex process of preparing enterprise data for
                modern analytics and AI systems. Where teams once spent weeks on schema mapping,
                cleaning, and enrichment, Morphiic applies an intelligent transformation layer that
                automates the work end-to-end.
              </p>
              <p>
                The platform ingests data from any source — databases, APIs, files, applications,
                operational systems — and delivers structured, enriched, validated, and AI-ready
                intelligence back to the systems that depend on it.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-base-400/60 pt-5">
                {['AI-Powered', 'Automated', 'Enriched', 'Validated', 'Scalable'].map((t) => (
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
