import { Link } from 'react-router-dom';
import { Boxes, Github, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative border-t border-base-400/60 bg-base-950">
      <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-cyan/30 bg-base-800">
                <Boxes className="h-4 w-4 text-accent-cyan" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink-50">Morphiic</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              The intelligent transformation layer for enterprise data — turning fragmented
              information into AI-ready intelligence.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-base-400 text-ink-400 transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <FooterCol title="Platform" links={[...NAV_LINKS, { label: 'Product', href: '/product' }]} internal />
          <FooterCol
            title="Resources"
            links={[
              { label: 'Documentation', href: '#docs' },
              { label: 'API Reference', href: '#docs' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
              { label: 'Security', href: '#' },
              { label: 'Privacy', href: '#' },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-base-400/60 pt-8 sm:flex-row sm:items-center">
          <p className="tech-label">© 2026 MORPHIIC · AI DATA TRANSFORMATION ENGINE</p>
          <p className="text-xs text-ink-500">Built for enterprise data operations.</p>
        </div>
      </div>
    </footer>
  );
}

type ColProps = {
  title: string;
  links: { label: string; href: string }[];
  internal?: boolean;
};

function FooterCol({ title, links, internal }: ColProps) {
  return (
    <div>
      <p className="tech-label mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) =>
          internal && l.href.startsWith('/') ? (
            <li key={l.label}>
              <Link to={l.href} className="text-sm text-ink-400 transition-colors hover:text-ink-50">
                {l.label}
              </Link>
            </li>
          ) : (
            <li key={l.label}>
              <a href={l.href} className="text-sm text-ink-400 transition-colors hover:text-ink-50">
                {l.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
