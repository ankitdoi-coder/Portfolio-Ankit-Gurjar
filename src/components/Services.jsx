// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Monitor, Building } from 'lucide-react';

const services = [
  {
    title: 'Backend Development & APIs (Spring Boot)',
    icon: Server,
    items: ['REST APIs', 'Authentication', 'Database-backed systems', 'Performance fixes'],
    description: 'Secure, well-architected backend systems built on Spring Boot — the foundation everything else runs on.',
    size: 'large',
  },
  {
    title: 'Custom Web Applications',
    icon: Monitor,
    items: ['Admin panels', 'Dashboards', 'Business tools'],
    description: 'Complete web applications tailored to your business needs.',
    size: 'medium',
  },
  {
    title: 'Business Websites & Booking Systems',
    icon: Building,
    items: ['Hotels', 'Restros', 'Local businesses'],
    description: 'Professional websites and booking systems for local businesses.',
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
            // services
          </div>
          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
            What I Offer
          </h2>
          <p className="mt-3 max-w-xl text-[#8B96A3]">
            Specialized backend development and complete web solutions for modern businesses.
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
              <div
                className={`h-full rounded-3xl border border-[#232A32] bg-[#12161B] transition-colors hover:border-[#7EE787]/30 ${
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}