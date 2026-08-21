import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STAGES = ['INGEST', 'UNDERSTAND', 'TRANSFORM', 'ENRICH', 'VALIDATE', 'OPTIMIZE', 'DELIVER'];

export function HeroAboutBand() {
  const [gaugeReady, setGaugeReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGaugeReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  const circumference = 2 * Math.PI * 54;
  const sweepFraction = (STAGES.length / 10) * 0.9;

  return (
    <section className="relative bg-base-900 border-t border-base-400/40 px-6 sm:px-10 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-10 items-center">
        {/* AI-Powered card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-base-400/70 bg-base-800/60 p-5"
        >
          <span className="text-[10px] font-mono tracking-tech text-ink-500">
            AI-POWERED
          </span>
          <div className="mt-4 flex flex-col items-center">
            <svg width="46" height="40" viewBox="0 0 46 40" className="mb-3">
              <polyline
                points="23,4 6,34 40,34"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-[22px] font-light text-ink-50 leading-none">
              Zero
            </span>
            <span className="text-[22px] font-light text-ink-50 leading-none">
              Manual
            </span>
          </div>
        </motion.div>

        {/* copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="12" height="18" viewBox="0 0 12 18">
              <polyline points="7,1 2,10 6,10 4,17 10,7 6,7 8,1" fill="#22D3EE" />
            </svg>
            <span className="text-[11px] font-mono tracking-tech-wide text-accent-cyan">
              ABOUT MORPHIIC
            </span>
          </div>
          <h2
            className="text-ink-300 font-light"
            style={{
              fontFamily: '"Archivo Expanded", system-ui, sans-serif',
              fontSize: 'clamp(1.6rem, 3.6vw, 2.6rem)',
              lineHeight: 1.25,
            }}
          >
            The ultimate intelligent and automated
            <br className="hidden sm:block" /> choice for enterprise data.
          </h2>
        </motion.div>

        {/* Pipeline stages gauge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-base-400/70 bg-base-800/60 p-5 flex flex-col items-center"
        >
          <span className="text-[10px] font-mono tracking-tech text-ink-500 self-start">
            PIPELINE STAGES
          </span>
          <div className="relative w-28 h-28 mt-3">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#242B38"
                strokeWidth="6"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={
                  gaugeReady
                    ? circumference * (1 - sweepFraction)
                    : circumference
                }
                style={{
                  transition: 'stroke-dashoffset 1.4s ease-out',
                  filter: 'drop-shadow(0 0 5px rgba(34,211,238,.6))',
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[20px] font-medium text-ink-50 leading-none">
                {STAGES.length}
              </span>
              <span className="text-[11px] font-mono text-ink-500 mt-1">
                STAGES
              </span>
            </div>
          </div>
          <span className="mt-4 text-[10px] font-mono tracking-tech text-accent-cyan">
            UNINTERRUPTED
          </span>
        </motion.div>
      </div>
    </section>
  );
}
