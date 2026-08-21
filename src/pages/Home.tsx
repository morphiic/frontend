import { Hero } from '@/components/hero/Hero';
import { HeroAboutBand } from '@/components/hero/HeroAboutBand';
import { Overview } from '@/components/sections/Overview';
import { Problem } from '@/components/sections/Problem';
import { Features } from '@/components/sections/Features';
import { Capabilities } from '@/components/sections/Capabilities';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ArchitectureDiagram } from '@/components/sections/ArchitectureDiagram';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { TargetUsers } from '@/components/sections/TargetUsers';
import { Scalability } from '@/components/sections/Scalability';
import { Pricing } from '@/components/sections/Pricing';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { Documentation } from '@/components/sections/Documentation';
import { CTA } from '@/components/sections/CTA';

export function Home() {
  return (
    <>
      <Hero />

      <Overview />
      <Problem />
      <Features />
      <Capabilities />
      <HowItWorks />
 
      <DashboardPreview />
      <TargetUsers />
      <Scalability />
      <Pricing />
      <About />
      <FAQ />
      <Documentation />
      <CTA />
    </>
  );
}
