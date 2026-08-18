import { type ReactNode } from 'react';

export type TechLabelProps = {
  children: ReactNode;
  className?: string;
  bright?: boolean;
};

export function TechLabel({ children, className = '', bright = false }: TechLabelProps) {
  return (
    <span className={`${bright ? 'tech-label-bright' : 'tech-label'} ${className}`}>
      {children}
    </span>
  );
}
