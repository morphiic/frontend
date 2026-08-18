import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';
import { TechLabel } from '@/components/ui/TechLabel';
import { TECH_REFS } from '@/data/site';

export function TechnologyShowcase() {
  return (
    <div className="rounded-lg border border-base-400/60 bg-base-950/60 p-6">
      <div className="mb-5 flex items-center justify-between">
        <TechLabel bright>Technical Compatibility</TechLabel>
        <span className="tech-label text-[0.6rem]">ECOSYSTEM REFERENCES</span>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-ink-400">
        Morphiic is built for compatibility with accelerated data processing and AI infrastructure.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_REFS.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-md border border-base-400/60 bg-base-800/40 p-4"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent-cyan/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded border border-base-400 bg-base-700 text-accent-cyan">
                {i % 2 === 0 ? <Cpu className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
              </span>
              <p className="font-display text-sm font-semibold text-ink-50">{tech.name}</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-400">{tech.category}</p>
            <div className="mt-3 border-t border-base-400/60 pt-2">
              <TechLabel className="text-[0.55rem]">COMPATIBLE</TechLabel>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-md border border-base-400/40 bg-base-800/30 p-3">
        <p className="text-xs text-ink-500">
          Technology references indicate ecosystem compatibility for accelerated data processing
          and AI infrastructure. Morphiic is an independent platform.
        </p>
      </div>
    </div>
  );
}
