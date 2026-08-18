import { useState } from 'react';
import { motion } from 'framer-motion';
import { Boxes, ChevronRight } from 'lucide-react';
import { TechLabel } from '@/components/ui/TechLabel';
import { SIDEBAR_ITEMS } from '@/data/site';

export function ProductSidebar() {
  const [active, setActive] = useState('Overview');

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-60 flex-shrink-0 flex-col border-r border-base-400/60 bg-base-950/60 p-4 lg:flex">
      <div className="mb-6 flex items-center gap-2.5 border-b border-base-400/60 pb-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent-cyan/30 bg-base-800">
          <Boxes className="h-3.5 w-3.5 text-accent-cyan" />
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-ink-50">Morphiic</p>
          <TechLabel className="text-[0.55rem]">Data Operations</TechLabel>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {SIDEBAR_ITEMS.map((item, i) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
              active === item
                ? 'bg-accent-cyan/10 text-ink-50'
                : 'text-ink-400 hover:bg-base-700/40 hover:text-ink-200'
            }`}
          >
            <span
              className={`h-1 w-1 rounded-full transition-colors ${
                active === item ? 'bg-accent-cyan' : 'bg-base-300 group-hover:bg-ink-500'
              }`}
            />
            {item}
            {active === item && (
              <motion.span layoutId="sidebar-active" className="ml-auto">
                <ChevronRight className="h-3.5 w-3.5 text-accent-cyan" />
              </motion.span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-md border border-base-400/60 bg-base-800/40 p-3">
        <TechLabel className="mb-1 block">System Status</TechLabel>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs text-ink-300">All systems operational</span>
        </div>
      </div>
    </aside>
  );
}
