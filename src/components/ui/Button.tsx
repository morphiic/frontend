import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-cyan text-base-950 hover:bg-cyan-300 px-5 py-2.5 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] hover:shadow-[0_0_32px_-4px_rgba(34,211,238,0.8)]',
  secondary:
    'border border-base-400 bg-base-700/60 text-ink-200 hover:border-accent-cyan/40 hover:text-ink-50 px-5 py-2.5 backdrop-blur-sm',
  ghost: 'text-ink-300 hover:text-ink-50 px-2 py-1',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  icon,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {icon ?? (variant === 'primary' && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />)}
    </button>
  );
}

type LinkButtonProps = BaseProps & { to: string };

export function LinkButton({ children, variant = 'primary', className = '', icon, to }: LinkButtonProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon ?? (variant === 'primary' && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />)}
    </Link>
  );
}
