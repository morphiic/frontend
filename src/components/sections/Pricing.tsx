import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { Button } from '@/components/ui/Button';
import { PaymentPopup } from '@/components/ui/PaymentPopup';
import { PLANS } from '@/data/site';

export function Pricing() {
  const [popup, setPopup] = useState<{ open: boolean; planName: string; amount: number; currency: string }>({
    open: false,
    planName: '',
    amount: 0,
    currency: 'USD',
  });

  const openPopup = (planName: string, amount: number, currency: string) => {
    setPopup({ open: true, planName, amount, currency });
  };

  return (
    <Section id="pricing">
      <SectionHeading
        label="Pricing"
        title="A Data Transformation Model That Grows With Your Business"
        description="Your data needs change as your organization grows. Morphiic gives you flexible ways to scale from early transformation workflows to enterprise-wide data operations — without forcing your business into a one-size-fits-all model."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative flex h-full flex-col rounded-xl border p-6 ${
                plan.highlighted
                  ? 'border-accent-cyan/40 bg-base-800/60 shadow-[0_0_40px_-12px_rgba(34,211,238,0.3)]'
                  : 'border-base-400/60 bg-base-800/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-6 rounded-full border border-accent-cyan/40 bg-base-950 px-3 py-1">
                  <TechLabel bright className="text-[0.55rem]">
                    Most Popular
                  </TechLabel>
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-ink-50">{plan.name}</h3>
                <TechLabel className="text-[0.6rem]">{plan.priceNote}</TechLabel>
              </div>
              <p className="mt-1 text-sm text-ink-400">{plan.tagline}</p>

              {plan.priceAmount !== undefined && plan.priceAmount > 0 && (
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-ink-50">${plan.priceAmount}</span>
                  <span className="text-sm text-ink-400">/mo</span>
                </div>
              )}

              <p className="mt-4 text-sm leading-relaxed text-ink-300">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-300">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-accent-cyan/40 text-accent-cyan">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.priceAmount !== undefined ? (
                  <Button
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                    onClick={() => openPopup(plan.name, plan.priceAmount!, plan.currency ?? 'USD')}
                  >
                    {plan.cta}
                  </Button>
                ) : plan.name === 'Developer' ? (
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => openPopup('Business', 45, 'USD')}
                  >
                    {plan.cta}
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.cta}
                  </Button>
                )}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          {['Subscription SaaS', 'Enterprise Licensing', 'Usage-Based Transformation', 'API Access', 'Dedicated Deployments'].map((m) => (
            <span key={m} className="tech-label text-[0.6rem]">
              {m}
            </span>
          ))}
        </div>
      </FadeIn>

      <PaymentPopup
        open={popup.open}
        onClose={() => setPopup((p) => ({ ...p, open: false }))}
        planName={popup.planName}
        amount={popup.amount}
        currency={popup.currency}
      />
    </Section>
  );
}
