// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Monitor, Building } from 'lucide-react';

const services = [
  {
    title: 'Backend Development & APIs (Spring Boot)',
    icon: Server,
    items: ['REST APIs', 'Authentication', 'Database-backed systems', 'Performance fixes'],
    description: 'Secure, well-architected backend systems built on Spring Boot — the foundation everything else runs on.',
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan-500',
    size: 'large'
  },
  {
    title: 'Custom Web Applications',
    icon: Monitor,
    items: ['Admin panels', 'Dashboards', 'Business tools'],
    description: 'Complete web applications tailored to your business needs',
    gradient: 'from-orange-500 to-red-600',
    glowColor: 'orange-500',
    size: 'medium'
  },
  {
    title: 'Business Websites & Booking Systems',
    icon: Building,
    items: ['Hotels', 'Restros', 'Local businesses'],
    description: 'Professional websites and booking systems for local businesses',
    gradient: 'from-green-500 to-emerald-600',
    glowColor: 'green-500',
    size: 'small'
  }
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>

            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                            Services
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        What I Offer
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Specialized backend development and complete web solutions for modern businesses
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative ${service.size === 'large' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : service.size === 'medium' ? 'md:col-span-1' : 'md:col-span-1'}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                            <div className={`relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${service.size === 'large' ? 'h-full' : service.size === 'small' ? 'p-6' : ''}`}>
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-3xl`}></div>

                                <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg mb-6 ${service.size === 'small' ? 'p-3' : ''}`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className={`font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent ${service.size === 'large' ? 'text-2xl' : service.size === 'small' ? 'text-lg' : 'text-xl'}`}>
                                    {service.title}
                                </h3>

                                <p className={`text-slate-400 mb-6 ${service.size === 'small' ? 'text-sm' : ''}`}>
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                                            className="text-slate-300 flex items-center gap-3 group/item"
                                        >
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full group-hover/item:scale-150 transition-transform duration-300`}></div>
                                            <span className="group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">{item}</span>
                                        </motion.li>
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