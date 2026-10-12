// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 45, suffix: '+', label: 'REST APIs built' },
  { value: 5, suffix: '', label: 'full-stack Java apps shipped' },
  { value: 20, suffix: '+', label: 'APIs running in production' },
  { value: 480, suffix: '+', label: 'commits, sole engineer (flagship)' },
];

function AnimatedNumber({ value, suffix, isInView }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function QuickStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative border-y border-[#232A32] bg-[#0B0E11] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#8B96A3]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7EE787]" />
            system metrics · live production stats
          </div>
          <div className="hidden font-['JetBrains_Mono'] text-[11px] text-[#7EE787]/80 sm:block">
            // low-latency & high-concurrency
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 divide-x divide-[#232A32] md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="px-4 py-2 text-center transition-colors first:pl-0 hover:bg-[#12161B]/40 md:text-left md:first:pl-0"
            >
              <div className="font-['Space_Grotesk'] text-3xl font-semibold text-white md:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="mt-1 font-['JetBrains_Mono'] text-xs text-[#8B96A3]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}