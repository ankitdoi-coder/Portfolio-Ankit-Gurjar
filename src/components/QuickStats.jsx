// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// NOTE: Every number here is pulled from what's already documented elsewhere
// in this codebase (Experience.jsx, Projects.jsx). Update these constants if
// your real numbers change — never inflate them.
const stats = [
  { value: '45+', label: 'REST APIs built' },
  { value: '5', label: 'full-stack Java apps shipped' },
  { value: '15+', label: 'APIs running in production' },
  { value: '480+', label: 'commits, sole engineer (flagship)' },
];

export default function QuickStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative border-y border-[#232A32] bg-[#0B0E11] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#8B96A3]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7EE787]" />
          system metrics · last updated: production
        </div>

        <div ref={ref} className="grid grid-cols-2 divide-x divide-[#232A32] md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 py-2 text-center first:pl-0 md:text-left md:first:pl-0"
            >
              <div className="font-['Space_Grotesk'] text-3xl font-semibold text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-['JetBrains_Mono'] text-xs text-[#8B96A3]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}