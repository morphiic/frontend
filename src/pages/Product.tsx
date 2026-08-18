import { motion } from 'framer-motion';
import { ProductHero } from '@/components/sections/ProductHero';
import { ProductSidebar } from '@/components/sections/ProductSidebar';
import { ProductDashboard } from '@/components/sections/ProductDashboard';
import { PipelineEditor } from '@/components/sections/PipelineEditor';
import { DataQualityPanel } from '@/components/sections/DataQualityPanel';
import { TechnologyShowcase } from '@/components/sections/TechnologyShowcase';
import { TechLabel } from '@/components/ui/TechLabel';

export function Product() {
  return (
    <div className="relative min-h-screen bg-base-950">
      <ProductHero />

      {/* Dashboard shell */}
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="flex">
          <ProductSidebar />

          <div className="flex-1 space-y-6 px-4 py-6 md:px-6">
            {/* Terminal-style header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-base-400/60 bg-base-900/60 px-5 py-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent-cyan" />
                <TechLabel bright>DATA OPERATIONS / OVERVIEW</TechLabel>
              </div>
              <TechLabel className="text-[0.6rem]">SESSION: 0xA4F2 · LIVE</TechLabel>
            </motion.div>

            <ProductDashboard />
            <PipelineEditor />
            <DataQualityPanel />
            <TechnologyShowcase />
          </div>
        </div>
      </div>
    </div>
  );
}
