import { Link } from 'react-router-dom';
import { ArrowLeft, Boxes } from 'lucide-react';

export function LegalHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-base-400/60 bg-base-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-accent-cyan/30 bg-base-800">
            <Boxes className="h-4 w-4 text-accent-cyan" />
            <span className="absolute inset-0 rounded-md bg-accent-cyan/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink-50">Morphiic</span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md border border-base-400 bg-base-700/60 px-4 py-2 text-sm font-medium text-ink-200 backdrop-blur-sm transition-colors hover:border-accent-cyan/40 hover:text-ink-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </nav>
    </header>
  );
}
