import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, MapPin, Phone, Globe, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';

const TURNSTILE_SITE_KEY = '0x4AAAAAAEWlZ9ImZYDkX7DX';

const TURNSTILE_CSS = `
@media (max-width: 420px) {
  .turnstile-scale { transform: scale(0.8); transform-origin: top left; }
}
`;

declare global {
  interface Window {
    turnstile?: { render: (container: string | HTMLElement, options: Record<string, unknown>) => string; reset: (widgetId: string) => void };
  }
}

export function CTA() {
  const [state, handleSubmit, reset] = useForm('mbgrqbbo');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>('');

  useEffect(() => {
    if (!turnstileRef.current || !window.turnstile) return;

    const renderWidget = () => {
      if (!turnstileRef.current || !window.turnstile) return;
      if (widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
        widgetIdRef.current = '';
        if (turnstileRef.current) {
          turnstileRef.current.innerHTML = '';
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  return (
    <section id="contact" className="relative w-full overflow-hidden px-6 py-28 md:px-10 md:py-36">
      <style>{TURNSTILE_CSS}</style>
      <BackgroundGrid variant="dense" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Get Started"
          title={
            <>
              Turn Your Data Complexity Into a{' '}
              <span className="gradient-text">Competitive Advantage.</span>
            </>
          }
          description={
            <>
              Your enterprise data holds valuable intelligence. Morphiic helps you transform fragmented,
              inconsistent information into structured, enriched, and reliable data built for analytics,
              machine learning, and enterprise AI.
              <br className="hidden sm:block" />
              Reduce transformation effort. Improve data quality. Build a stronger foundation for what&apos;s next.
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]"
        >
          {/* Contact Details */}
          <div className="min-w-0 text-left">
            <h3 className="font-display text-lg font-semibold text-ink-50 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <ContactBlock
                title="Sri Lanka"
                company="Morphiic Systems (Pvt) Ltd"
                address="17A Flower Road, Colombo 07, Sri Lanka"
                phone="+94 11 283 6154"
              />
              <ContactBlock
                title="USA"
                company="Morphiic Systems Inc."
                address="101 California Street, Suite 4560, San Francisco, CA 94111, USA"
                phone="+1 415 555 4372"
              />

              <div className="flex items-center gap-3 text-sm text-ink-300">
                <Globe className="h-4 w-4 flex-shrink-0 text-accent-cyan" />
                <a href="https://morphiic.com" target="_blank" rel="noreferrer" className="text-accent-cyan underline underline-offset-2 hover:text-cyan-300 transition-colors">
                  https://morphiic.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-accent-cyan/40 bg-base-800/50 p-10 text-center backdrop-blur-sm">
              <CheckCircle className="h-12 w-12 text-accent-cyan mb-4" />
              <h3 className="font-display text-xl font-semibold text-ink-50">Message Sent!</h3>
              <p className="mt-2 text-sm text-ink-400">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              <p className="mt-4 text-xs text-ink-500">The form will reset automatically in a few seconds...</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="min-w-0 rounded-xl border border-base-400/60 bg-base-800/50 p-4 text-left backdrop-blur-sm sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="mb-1 block text-xs text-ink-400">Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name here"
                    className="w-full rounded-md border border-base-400/60 bg-base-900 px-3 py-2 text-sm text-ink-50 placeholder-ink-500 outline-none transition-colors focus:border-accent-cyan/60"
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className="mb-1 block text-xs text-ink-400">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email here"
                    className="w-full rounded-md border border-base-400/60 bg-base-900 px-3 py-2 text-sm text-ink-50 placeholder-ink-500 outline-none transition-colors focus:border-accent-cyan/60"
                  />
                  <ValidationError field="email" errors={state.errors} className="mt-1 block text-xs text-red-400" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="cf-company" className="mb-1 block text-xs text-ink-400">Company</label>
                <input
                  id="cf-company"
                  type="text"
                  name="company"
                  placeholder="Enter your company name here"
                  className="w-full rounded-md border border-base-400/60 bg-base-900 px-3 py-2 text-sm text-ink-50 placeholder-ink-500 outline-none transition-colors focus:border-accent-cyan/60"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="cf-message" className="mb-1 block text-xs text-ink-400">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Enter your message here"
                  className="w-full resize-none rounded-md border border-base-400/60 bg-base-900 px-3 py-2 text-sm text-ink-50 placeholder-ink-500 outline-none transition-colors focus:border-accent-cyan/60"
                />
                <ValidationError field="message" errors={state.errors} className="mt-1 block text-xs text-red-400" />
              </div>

              <div className="mt-4 w-full max-w-full overflow-hidden">
                <div ref={turnstileRef} className="turnstile-scale" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-accent-cyan px-5 py-2.5 text-sm font-medium text-base-950 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_32px_-4px_rgba(34,211,238,0.8)] disabled:opacity-60"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ContactBlock({ title, company, address, phone }: { title: string; company: string; address: string; phone: string }) {
  return (
    <div className="rounded-lg border border-base-400/40 bg-base-800/30 p-4">
      <h4 className="text-sm font-semibold text-ink-50 mb-2">{title}</h4>
      <p className="text-xs text-ink-400 mb-2">{company}</p>
      <div className="space-y-2">
        <div className="flex items-start gap-2 text-sm text-ink-300">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-cyan" />
          <span className="min-w-0 break-words">{address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-ink-300">
          <Phone className="h-4 w-4 flex-shrink-0 text-accent-cyan" />
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-ink-50 transition-colors">{phone}</a>
        </div>
      </div>
    </div>
  );
}
