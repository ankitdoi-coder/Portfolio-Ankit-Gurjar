// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessagesSquare, Layers, Database, Server, MonitorSmartphone, FlaskConical, Rocket, Wrench } from 'lucide-react';

const steps = [
  { icon: MessagesSquare, title: 'Understand the requirement', desc: 'Clarify the actual business problem before writing a single line of code.' },
  { icon: Layers, title: 'Plan the architecture', desc: 'Decide how the system should be structured so it stays maintainable as it grows.' },
  { icon: Database, title: 'Design the database', desc: 'Model the data so queries stay fast and the schema doesn\u2019t need a rewrite later.' },
  { icon: Server, title: 'Build the backend & APIs', desc: 'Secure, documented REST APIs — the part that actually runs your business logic.' },
  { icon: MonitorSmartphone, title: 'Build the frontend', desc: 'A clean interface that connects to the backend without extra friction.' },
  { icon: FlaskConical, title: 'Test & integrate', desc: 'Check the pieces work together correctly before anything goes live.' },
  { icon: Rocket, title: 'Deploy', desc: 'Ship it to production with a process that doesn\u2019t break what already works.' },
  { icon: Wrench, title: 'Maintain & improve', desc: 'Stay involved after launch — bug fixes, performance tuning, new features.' },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative overflow-hidden bg-[#0B0E11] px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
            // how-i-work
          </div>
          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
            From Idea to Production
          </h2>
          <p className="mt-3 max-w-xl text-[#8B96A3]">
            The same process for a client website and a production backend system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative rounded-2xl border border-[#232A32] bg-[#12161B] p-6 transition-colors hover:border-[#7EE787]/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-[#232A32] bg-[#0F1317] text-[#7EE787]">
                  <step.icon className="h-4.5 w-4.5" />
                </div>
                <span className="font-['JetBrains_Mono'] text-sm text-[#7EE787]/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#8B96A3]">{step.desc}</p>

              {index < steps.length - 1 && (
                <span className="absolute -right-2.5 top-1/2 hidden h-px w-5 -translate-y-1/2 bg-[#232A32] lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}