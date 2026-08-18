import { motion } from 'framer-motion';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { TechLabel } from '@/components/ui/TechLabel';
import { QUALITY_METRICS } from '@/data/site';

export function DataQualityPanel() {
  const overall = 97.8;

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
      {/* Overall score */}
      <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
        <TechLabel bright className="mb-4 block">
          Overall Quality
        </TechLabel>
        <div className="relative h-44">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={[{ value: overall, fill: '#22D3EE' }]}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar background={{ fill: '#1C222D' }} dataKey="value" cornerRadius={20} animationDuration={1200} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-4xl font-semibold text-ink-50">
              {overall}
              <span className="text-lg text-accent-cyan">%</span>
            </p>
            <TechLabel className="mt-1">QUALITY SCORE</TechLabel>
          </div>
        </div>
      </div>

      {/* Individual metrics */}
      <div className="rounded-lg border border-base-400/60 bg-base-800/40 p-5">
        <TechLabel bright className="mb-4 block">
          Quality Dimensions
        </TechLabel>
        <div className="space-y-3">
          {QUALITY_METRICS.map((m, i) => (
            <div key={m.label}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs text-ink-300">{m.label}</span>
                <span className="tech-label-bright text-[0.6rem]">{m.value}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-base-600">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.value}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
