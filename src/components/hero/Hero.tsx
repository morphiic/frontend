import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const KEYFRAMES = `
@keyframes arcFlicker {
  0%, 100% { opacity: 0; }
  2%  { opacity: 1; }
  4%  { opacity: .2; }
  6%  { opacity: .9; }
  9%  { opacity: 0; }
  40% { opacity: 0; }
  42% { opacity: .7; }
  44% { opacity: 0; }
}
@keyframes driftA {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-1.5%, 1%) rotate(0.6deg); }
}
@keyframes driftB {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(1.2%, -1.2%) rotate(-0.5deg); }
}
`;

export function Hero() {
  return (
    <div className="relative w-full bg-base-950 font-sans overflow-hidden">
      <style>{KEYFRAMES}</style>

      <section id="home" className="relative min-h-[860px] w-full overflow-hidden pt-16">
        {/* wave layer A */}
        <div
          className="absolute inset-0"
          style={{ animation: 'driftA 14s ease-in-out infinite' }}
        >
          <svg
            viewBox="0 0 860 860"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="60%">
                <stop offset="0%" stopColor="#062A3A" stopOpacity="0" />
                <stop offset="35%" stopColor="#0E4D6E" stopOpacity="0.55" />
                <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#062A3A" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ribbon2" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#052230" stopOpacity="0" />
                <stop offset="45%" stopColor="#0C5A80" stopOpacity="0.5" />
                <stop offset="75%" stopColor="#67E8F9" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#052230" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A5F3FC" stopOpacity="0" />
                <stop offset="50%" stopColor="#CFFAFE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#A5F3FC" stopOpacity="0" />
              </linearGradient>
              <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="18" />
              </filter>
              <filter id="tight" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.2" />
              </filter>
            </defs>

            {/* soft fill bands */}
            <path
              d="M-60,120 C140,40 280,220 480,180 C680,140 760,20 1000,60 L1000,520 C780,400 680,580 480,540 C280,500 140,660 -60,580 Z"
              fill="url(#ribbon1)"
              filter="url(#soft)"
            />
            <path
              d="M-40,340 C160,240 300,480 500,420 C700,360 780,220 1000,280 L1000,860 C780,740 700,800 500,760 C300,720 160,860 -40,780 Z"
              fill="url(#ribbon2)"
              filter="url(#soft)"
              opacity="0.85"
            />

            {/* bright edge highlights */}
            <path
              d="M-60,120 C140,40 280,220 480,180 C680,140 760,20 1000,60"
              fill="none"
              stroke="url(#edgeGlow)"
              strokeWidth="2.5"
              filter="url(#tight)"
            />
            <path
              d="M-40,460 C160,360 300,540 500,480 C700,420 780,300 1000,360"
              fill="none"
              stroke="url(#edgeGlow)"
              strokeWidth="2"
              filter="url(#tight)"
              opacity="0.8"
            />
            <path
              d="M-20,640 C160,560 320,700 520,660 C720,620 800,540 1000,580"
              fill="none"
              stroke="url(#edgeGlow)"
              strokeWidth="1.6"
              filter="url(#tight)"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* wave layer B — thinner accent lines */}
        <div
          className="absolute inset-0"
          style={{ animation: 'driftB 18s ease-in-out infinite' }}
        >
          <svg
            viewBox="0 0 860 860"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M200,40 C400,-20 480,180 680,120 C820,80 860,10 1000,20"
              fill="none"
              stroke="#67E8F9"
              strokeWidth="1"
              opacity="0.3"
            />
            <path
              d="M160,220 C360,120 460,360 660,300 C800,260 860,160 1000,180"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="1"
              opacity="0.25"
            />
          </svg>
        </div>

        {/* vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,6,8,.5) 0%, transparent 40%, transparent 60%, rgba(5,6,8,.3) 100%), linear-gradient(0deg, rgba(5,6,8,.6) 0%, transparent 40%)',
          }}
        />

        {/* wordmark */}
        <div className="relative z-10 mt-8 sm:mt-12 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex items-center justify-center leading-none"
            style={{
              fontFamily: '"Archivo Expanded", system-ui, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(3rem, 13vw, 11rem)',
              letterSpacing: '-0.01em',
              color: '#E2E8F0',
            }}
          >
            <span>MORPH</span>
            <span className="relative inline-block" style={{ width: '0.32em' }}>
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block"
                style={{
                  width: '0.28em',
                  height: '2px',
                  background: '#22D3EE',
                }}
              />
              <svg
                viewBox="0 0 60 40"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '1.2em',
                  height: '1.2em',
                  animation: 'arcFlicker 9s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 6px #22D3EE)',
                }}
              >
                <polyline
                  points="26,2 14,20 27,20 18,38 44,16 30,16 38,2"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>IIC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            Your data already contains the answers. Morphiic transforms fragmented, inconsistent, and
            complex enterprise information into structured, enriched, analysis-ready data — automatically.
            <br className="hidden sm:block" />
            Transform faster. Improve data quality. Build better AI foundations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/product"
              className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-accent-cyan !px-2.5 !py-1 !text-[10px] font-medium text-base-950 shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_32px_-4px_rgba(34,211,238,0.8)] sm:!px-5 sm:!py-2.5 sm:!text-sm"
            >
              Explore Auralis AI
              <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              className="group inline-flex items-center justify-center gap-1.5 rounded-md bg-base-700/40 !px-2.5 !py-1 !text-[10px] font-medium text-ink-200 backdrop-blur-sm transition-colors hover:text-ink-50 sm:!px-5 sm:!py-2.5 sm:!text-sm"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {[
              { value: '10x', label: 'Faster Ingestion' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: 'SOC 2', label: 'Compliant' },
              { value: '<200ms', label: 'Avg Response' },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-1.5">
                <span className="text-[18px] font-semibold text-ink-50">{m.value}</span>
                <span className="text-[13px] font-mono text-ink-500">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* social media strip — right edge */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col items-center gap-4">
          <div className="w-px h-10 bg-base-400/50" />
          {[
            { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { label: 'GitHub', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
            { label: 'Discord', path: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z' },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-base-400/50 bg-base-900/60 backdrop-blur transition-colors hover:border-accent-cyan/60 hover:bg-accent-cyan/10"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-ink-500 transition-colors group-hover:fill-accent-cyan">
                <path d={s.path} />
              </svg>
            </a>
          ))}
          <div className="w-px h-10 bg-base-400/50" />
        </div>

        {/* stat cards — hidden on mobile, in flow below metrics on tablet, floating on desktop */}
        <div className="relative z-10 mx-auto mt-12 hidden w-full flex-wrap items-stretch justify-center gap-6 px-6 sm:flex sm:max-w-2xl sm:gap-8 lg:absolute lg:left-8 lg:bottom-40 xl:bottom-48 lg:mx-0 lg:mt-0 lg:w-[200px] lg:flex-col lg:flex-nowrap lg:gap-4">
          {/* Sensors Monitored */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-[200px] rounded-xl border border-base-400/40 bg-base-950/40 p-4 backdrop-blur-md"
          >
            <span className="text-[20px] font-semibold text-ink-50 leading-none">2M+</span>
            <span className="block mt-1 text-[10px] font-mono tracking-tech text-ink-500">Sensors Monitored</span>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="flex shrink-0 items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                <span className="text-[10px] font-mono text-ink-400">Active</span>
                <span className="text-[11px] font-mono font-medium text-ink-200">89%</span>
              </span>
              <span className="flex shrink-0 items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
                <span className="text-[10px] font-mono text-ink-400">Alert</span>
                <span className="text-[11px] font-mono font-medium text-ink-200">7%</span>
              </span>
              <span className="flex shrink-0 items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
                <span className="text-[10px] font-mono text-ink-400">Idle</span>
                <span className="text-[11px] font-mono font-medium text-ink-200">4%</span>
              </span>
            </div>
          </motion.div>

          {/* System Uptime */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-[200px] rounded-xl border border-base-400/40 bg-base-950/40 p-4 backdrop-blur-md"
          >
            <span className="block text-[10px] font-mono tracking-tech text-ink-500">System Uptime</span>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-[20px] font-semibold text-ink-50 leading-none">99.7%</span>
              <span className="text-[10px] font-mono text-ink-500">SLA guaranteed</span>
            </div>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent-cyan/10 px-2 py-0.5 text-[9px] font-mono text-accent-cyan">
              <span className="h-1 w-1 rounded-full bg-accent-cyan animate-pulse" />
              Live
            </span>
          </motion.div>

          {/* Ingestion + Latency */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid w-[200px] grid-cols-2 gap-3 rounded-xl border border-base-400/40 bg-base-950/40 p-4 backdrop-blur-md"
          >
            <div>
              <span className="text-[16px] font-semibold text-ink-50 leading-none">50TB</span>
              <span className="block mt-1 text-[9px] font-mono tracking-tech text-ink-500">Daily Ingestion</span>
            </div>
            <div>
              <span className="text-[16px] font-semibold text-ink-50 leading-none">&lt;50ms</span>
              <span className="block mt-1 text-[9px] font-mono tracking-tech text-ink-500">Latency</span>
            </div>
          </motion.div>

          {/* Enterprise Sources */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-[200px] rounded-xl border border-base-400/40 bg-base-950/40 p-4 backdrop-blur-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
              <span className="min-w-0 text-[13px] font-medium leading-snug text-ink-50">Enterprise Sources</span>
              <span className="shrink-0 text-[9px] font-mono tracking-wide bg-accent-cyan text-base-950 rounded px-1.5 py-0.5">8+</span>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex w-[200px] items-stretch"
          >
            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 px-3 py-2.5 text-[11px] font-mono tracking-wide text-accent-cyan transition-colors hover:bg-accent-cyan/20"
            >
              Contact Us
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" />
              </svg>
            </a>
          </motion.div>
</div>


      </section>
    </div>
  );
}
