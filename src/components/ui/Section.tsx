import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative w-full px-6 py-20 sm:py-28 md:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, y = 24, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
