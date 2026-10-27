// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Monitor, Building } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    title: 'Java Backend Developer & Real-Time APIs',
    icon: Server,
    items: ['Spring Boot & Microservices', 'WebSockets & Event-Driven Systems', 'REST API Architecture', 'Database & Query Tuning', 'Concurrency & Race Condition Fixes'],
    description: 'High-throughput, resilient backend systems engineered with Java 17 and Spring Boot to withstand heavy concurrent loads with zero downtime.',
    size: 'large',
  },
  {
    title: 'Top Website Developer & Custom Web Apps',
    icon: Monitor,
    items: ['Modern Full-Stack Applications', 'Admin Panels & Dashboards', 'React & Vite Architecture', 'High Performance & Speed Optimization'],
    description: 'End-to-end web engineering delivering fast, responsive, and SEO-optimized web applications tailored for growing businesses.',
    size: 'medium',
  },
  {
    title: 'Business Websites & Engineering Services',
    icon: Building,
    items: ['Lead Generation & High CTR', 'Interactive Booking Systems', 'Mobile-First Responsive Design', 'Local SEO & Google Search Ranking'],
    description: 'High-converting business websites engineered for restaurants, clinics, and enterprises with seamless user experiences.',
    size: 'small',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative overflow-hidden bg-[#0B0E11] px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
            // engineering-services
          </div>
          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
            Top Website Developer &amp; Engineering Services
          </h2>
          <p className="mt-3 max-w-xl text-[#8B96A3]">
            As a dedicated Java backend developer and top website engineer, I provide high-concurrency systems, real-time APIs, and top-tier web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={
                service.size === 'large'
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2'
                  : 'md:col-span-1'
              }
            >
              <SpotlightCard
                className={`h-full ${
                  service.size === 'small' ? 'p-6' : 'p-8'
                }`}
              >
                <div
                  className={`mb-6 grid place-items-center rounded-xl border border-[#232A32] bg-[#0F1317] text-[#7EE787] ${
                    service.size === 'small' ? 'h-11 w-11' : 'h-14 w-14'
                  }`}
                >
                  <service.icon className={service.size === 'small' ? 'h-5 w-5' : 'h-6 w-6'} />
                </div>

                <h3
                  className={`mb-3 font-['Space_Grotesk'] font-semibold text-white ${
                    service.size === 'large' ? 'text-2xl' : service.size === 'small' ? 'text-lg' : 'text-xl'
                  }`}
                >
                  {service.title}
                </h3>

                <p className={`mb-6 text-[#8B96A3] ${service.size === 'small' ? 'text-sm' : ''}`}>
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#C4CBD2]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}