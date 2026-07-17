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
    <section id="process" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
            How I Work
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            From Idea to Production
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The same process for a client website and a production backend system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shrink-0">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-500 text-sm font-mono">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
