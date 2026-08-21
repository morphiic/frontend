import { useEffect } from 'react';
import { AuralisHero } from '@/components/product/AuralisHero';
import { AuralisModules } from '@/components/product/AuralisModules';
import { AuralisWorkflow } from '@/components/product/AuralisWorkflow';
import { AuralisTechStack } from '@/components/product/AuralisTechStack';
import { AuralisUseCases } from '@/components/product/AuralisUseCases';
import { AuralisFAQ } from '@/components/product/AuralisFAQ';
import { AuralisCTA } from '@/components/product/AuralisCTA';

export function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-base-950 font-sans text-ink-50 selection:bg-accent-cyan/20 selection:text-white">
      {/* 1. Hero Section */}
      <AuralisHero />

      {/* 2. Core Capabilities & Product Modules */}
      <AuralisModules />

      {/* 3. Execution Pipeline & End-to-End Workflow */}
      <AuralisWorkflow />

      {/* 4. Underlying Acceleration & Tech Stack */}
      <AuralisTechStack />

      {/* 5. Enterprise Use Cases & Impact */}
      <AuralisUseCases />

      {/* 6. Product FAQ */}
      <AuralisFAQ />

      {/* 7. Conversion CTA */}
      <AuralisCTA />
    </div>
  );
}
