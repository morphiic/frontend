import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import { TechLabel } from '@/components/ui/TechLabel';
import { PIPELINE_ROWS, DASHBOARD_STATS, PROCESSING_CHART } from '@/data/site';

const STATUS_STYLES: Record<string, string> = {
  Processing: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30',
  Completed: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  Validating: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
};

export function ProductDashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Top stats */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border border-base-400/60 bg-base-800/40 p-4"
          >
            <TechLabel className="mb-2 block">{stat.label}</TechLabel>
            <p className="font-display text-2xl font-semibold text-ink-50">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Active pipelines table */}
      <div className="rounded-lg border border-base-400/60 bg-base-800/40">
        <div className="flex items-center justify-between border-b border-base-400/60 px-5 py-3">
          <TechLabel bright>Active Pipelines</TechLabel>
          <TechLabel className="text-[0.6rem]">4 ACTIVE</TechLabel>
        </div>
        <div className="divide-y divide-base-400/40">
          {/* Header */}
          <div className="hidden grid-cols-3 gap-4 px-5 py-2.5 sm:grid">
            <TechLabel className="text-[0.6rem]">Pipeline Name</TechLabel>
            <TechLabel className="text-[0.6rem]">Status</TechLabel>
            <TechLabel className="text-[0.6rem]">Progress</TechLabel>
          </div>
          {PIPELINE_ROWS.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="grid grid-cols-1 gap-2 px-5 py-3 sm:grid-cols-3 sm:items-center sm:gap-4"
            >
              <span className="text-sm text-ink-200">{row.name}</span>
              <span
                className={`inline-flex w-fit items-center rounded-full border px-2 py-0.5 tech-label text-[0.55rem] ${STATUS_STYLES[row.status]}`}
              >
                {row.status.toUpperCase()}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-base-600">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${row.progress}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                  />
                </div>
                <span className="tech-label-bright text-[0.55rem]">{row.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Data processing chart */}
      <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
        <div className="mb-4 flex items-center justify-between">
          <TechLabel bright>Data Processing</TechLabel>
          <span className="tech-label text-[0.6rem]">RECORDS / HOUR</span>
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PROCESSING_CHART} margin={{ top: 4, right: 4, bottom: 0, left: -28 }}>
              <defs>
                <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" tick={{ fill: '#475569', fontSize: 9 }} axisLine={false} tickLine={false} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#22D3EE"
                strokeWidth={1.5}
                fill="url(#dashGrad)"
                animationDuration={1400}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
