import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { Section, FadeIn } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechLabel } from '@/components/ui/TechLabel';
import { LinkButton } from '@/components/ui/Button';
import {
  PIPELINE_STATUS,
  RECENT_PIPELINES,
  PROCESSING_CHART,
  TRANSFORMATION_CHART,
} from '@/data/site';

const STATUS_COLORS: Record<string, string> = {
  COMPLETED: 'text-emerald-400',
  PROCESSING: 'text-accent-cyan',
  VALIDATING: 'text-amber-400',
};

const BAR_COLORS = ['#22D3EE', '#3B82F6', '#8B5CF6', '#22D3EE', '#3B82F6'];

export function DashboardPreview() {
  return (
    <Section id="dashboard-preview">
      <SectionHeading
        label="Platform Preview"
        title="The Morphiic Data Operations Dashboard"
        description="A glimpse into the operations center — pipeline status, processing throughput, data quality, and transformation progress, all in real time."
      />

      <FadeIn delay={0.15} className="mt-14">
        <div className="relative overflow-hidden rounded-xl border border-base-400/60 bg-base-950/60">
          <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-30" />

          {/* Window chrome */}
          <div className="relative flex items-center justify-between border-b border-base-400/60 bg-base-900/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <TechLabel className="text-[0.6rem]">morphiic / data-operations</TechLabel>
            <TechLabel bright className="text-[0.6rem]">
              LIVE
            </TechLabel>
          </div>

          <div className="relative grid gap-4 p-5 lg:grid-cols-[1fr_1.2fr]">
            {/* Left column: pipeline status + recent */}
            <div className="flex flex-col gap-4">
              {/* Pipeline status */}
              <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
                <TechLabel className="mb-4 block">Pipeline Status</TechLabel>
                <div className="grid grid-cols-2 gap-3">
                  {PIPELINE_STATUS.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="rounded-md border border-base-400/60 bg-base-700/40 p-3"
                    >
                      <p className="font-display text-2xl font-semibold text-ink-50">{s.value}</p>
                      <p className="mt-1 text-xs text-ink-400">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent pipelines */}
              <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
                <TechLabel className="mb-4 block">Recent Pipelines</TechLabel>
                <div className="space-y-2">
                  {RECENT_PIPELINES.map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center justify-between rounded-md border border-base-400/40 bg-base-700/30 px-3 py-2.5"
                    >
                      <span className="text-xs text-ink-200">{p.name}</span>
                      <span className={`tech-label text-[0.55rem] ${STATUS_COLORS[p.status] ?? 'text-ink-400'}`}>
                        {p.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: charts */}
            <div className="flex flex-col gap-4">
              {/* Processing chart */}
              <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <TechLabel>Data Processing</TechLabel>
                  <span className="tech-label-bright text-[0.6rem]">12.8M records</span>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PROCESSING_CHART} margin={{ top: 4, right: 4, bottom: 0, left: -28 }}>
                      <defs>
                        <linearGradient id="procGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22D3EE" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#22D3EE" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" tick={{ fill: '#475569', fontSize: 9 }} axisLine={false} tickLine={false} />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#22D3EE"
                        strokeWidth={1.5}
                        fill="url(#procGrad)"
                        animationDuration={1200}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Quality + transformation */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
                  <TechLabel className="mb-3 block">Quality Score</TechLabel>
                  <p className="font-display text-3xl font-semibold text-ink-50">
                    97.8<span className="text-lg text-accent-cyan">%</span>
                  </p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-base-600">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '97.8%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
                  <TechLabel className="mb-3 block">Transformation Status</TechLabel>
                  <div className="h-20">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={TRANSFORMATION_CHART} margin={{ top: 0, right: 0, bottom: 0, left: -32 }}>
                        <XAxis dataKey="stage" tick={{ fill: '#475569', fontSize: 8 }} axisLine={false} tickLine={false} />
                        <Bar dataKey="value" radius={[2, 2, 0, 0]} animationDuration={1000}>
                          {TRANSFORMATION_CHART.map((_, i) => (
                            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative flex items-center justify-between border-t border-base-400/60 bg-base-900/60 px-5 py-4">
            <p className="text-xs text-ink-400">Explore the full platform experience</p>
            <LinkButton to="/product" variant="primary" className="text-xs">
              Explore the Product
            </LinkButton>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
