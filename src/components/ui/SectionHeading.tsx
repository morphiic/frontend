import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TechLabel } from './TechLabel';

type SectionHeadingProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-accent-cyan/60" />
          <TechLabel bright>{label}</TechLabel>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-base leading-relaxed text-ink-400 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
