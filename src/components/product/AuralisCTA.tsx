import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { TechLabel } from '@/components/ui/TechLabel';

export function AuralisCTA() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <BackgroundGrid variant="dense" />

      {/* Glow highlight */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-accent-cyan/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-accent-cyan/40 bg-gradient-to-b from-base-900/90 to-base-950/95 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-14"
        >
          {/* Subtle top badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/5 px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <TechLabel bright className="text-[0.62rem]">
              READY FOR DEPLOYMENT
            </TechLabel>
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
            Experience Autonomous Transformation with{' '}
            <span className="gradient-text">Auralis AI</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
            Stop losing engineering cycles to manual schema mappings and brittle transformations.
            Launch your workspace or connect with our enterprise architecture team today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://workspace.morphiic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent-cyan px-7 py-3.5 text-sm font-semibold text-base-950 shadow-[0_0_30px_-4px_rgba(34,211,238,0.8)] transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_40px_-2px_rgba(34,211,238,1)] hover:scale-[1.02]"
            >
              <span>Launch Auralis Workspace</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-base-400 bg-base-800/80 px-6 py-3.5 text-sm font-medium text-ink-200 backdrop-blur-md transition-colors hover:border-accent-cyan/50 hover:bg-base-700 hover:text-ink-50"
            >
              <span>Contact Solutions Architect</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Compliance & security trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-base-400/40 pt-8 text-xs text-ink-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent-cyan" />
              <span>Enterprise SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-accent-blue" />
              <span>100% Private On-Prem / VPC Isolation</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-400" />
              <span>Sub-50ms Processing SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
