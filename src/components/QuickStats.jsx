// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// NOTE: Every number here is pulled from what's already documented elsewhere
// in this codebase (Experience.jsx, Projects.jsx). Update these constants if
// your real numbers change — never inflate them.
const stats = [
  { value: '45+', label: 'REST APIs built' },
  { value: '5', label: 'Full-stack Java apps shipped' },
  { value: '15+', label: 'APIs running in production' },
  { value: '420+', label: 'Commits as sole engineer (flagship project)' },
];

export default function QuickStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative bg-slate-900 border-y border-slate-800/80 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
