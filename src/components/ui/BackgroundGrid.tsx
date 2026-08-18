import { motion } from 'framer-motion';

/**
 * Animated technical background: fine grid + scanning line + floating nodes.
 * Subtle, performant, and used behind hero / CTA sections.
 */
export function BackgroundGrid({ variant = 'default' }: { variant?: 'default' | 'dense' | 'minimal' }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className={`absolute inset-0 ${variant === 'dense' ? 'grid-bg-fine' : 'grid-bg'} mask-fade-b opacity-60`} />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent-cyan/5 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-blue/5 blur-[100px]" />

      {/* Scanning line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent animate-scan" />

      {/* Floating nodes */}
      {variant !== 'minimal' && (
        <>
          {NODES.map((n, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-accent-cyan/40"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
              transition={{ duration: n.d, repeat: Infinity, delay: n.delay }}
            />
          ))}
        </>
      )}
    </div>
  );
}

const NODES = [
  { x: 12, y: 22, d: 4, delay: 0 },
  { x: 84, y: 30, d: 5, delay: 1 },
  { x: 24, y: 68, d: 6, delay: 0.5 },
  { x: 72, y: 76, d: 4.5, delay: 1.5 },
  { x: 48, y: 14, d: 5.5, delay: 2 },
  { x: 92, y: 58, d: 7, delay: 0.8 },
  { x: 8, y: 48, d: 5, delay: 1.2 },
];
