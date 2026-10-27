// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const experiences = [
    {
        title: 'Backend Engineer (Java / Spring Boot)',
        company: 'Navrasa IT Solutions',
        period: 'July 2026 - Present',
        current: true,
        tags: ['Spring Boot', 'WebSockets', 'Spring Events', 'PostgreSQL', 'High Concurrency'],
        description: 'Engineering high-throughput backend services for a real-time stock and cryptocurrency trading platform, tackling critical data synchronization, concurrency, and real-time streaming challenges.',
        achievements: [
            'Architected real-time market data streaming using Spring WebSockets (STOMP), broadcasting live stock and crypto tick updates to active client sessions',
            'Implemented an in-memory event-driven architecture using Spring Events (@EventListener & ApplicationEventPublisher) to asynchronously process and decouple trading events with high reliability and zero external broker overhead',
            'Resolved complex real-time concurrency bottlenecks and race conditions during high-volatility trading using thread-safe synchronization and strict transactional isolation',
            'Mitigated WebSocket connection drops and stale price feeds by implementing heartbeat monitoring, reconnection resilience, and optimized payload serialization',
            'Optimized database queries and indexing for time-critical order books and trade history to achieve low-latency read and write performance'
        ]
    },
    {
        title: 'Software Developer (Backend – Spring Boot)',
        company: 'SAG Infotech Pvt. Ltd.',
        period: 'Nov 2025 - Feb 2026',
        current: false,
        tags: ['Spring Boot', 'PostgreSQL', 'JWT', 'REST APIs', 'Angular'],
        achievements: [
            'Developed 15+ Spring Boot REST APIs currently running in production',
            'Reduced API response time by optimizing PostgreSQL queries',
            'Implemented JWT-based role access for 3 user roles',
            'Fixed 20+ production bugs with zero downtime deployments',
            'Integrated Angular frontend with Spring Boot backend services'
        ]
    },
    {
        title: 'Freelance Backend Developer (Java / Spring Boot)',
        company: 'Self-Employed',
        period: 'Jan 2025 - Nov 2025',
        current: false,
        tags: ['Java', 'Spring Boot', 'React', 'REST APIs', 'SQL'],
        description: 'Providing web development and software engineering services to clients, specializing in full-stack Java applications with Spring Boot and React.',
        achievements: [
            'Built and improved Spring Boot backend systems',
            'Fixed bugs and enhanced existing Java applications',
            'Developed secure REST APIs with JWT authentication',
            'Designed database schemas and optimized queries',
            'Delivered clean, maintainable code with clear communication'
        ]
    }
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="relative overflow-hidden bg-[#0B0E11] px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
                        // experience
                    </div>
                    <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
                        Professional Experience
                    </h2>
                    <p className="mt-3 max-w-xl text-[#8B96A3]">
                        Hands-on experience building, fixing, and maintaining production-grade applications.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative ml-2 sm:ml-0 border-l-2 border-[#232A32] pl-6 sm:pl-8 transition-colors hover:border-[#7EE787]/40"
                        >
                            {/* Icon Indicator */}
                            <div className={`absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full ${
                                exp.current ? 'bg-[#7EE787] shadow-lg shadow-[#7EE787]/40 ring-4 ring-[#7EE787]/20' : 'bg-[#7EE787]'
                            }`}>
                                <Briefcase className="h-3 w-3 text-[#0B0E11]" />
                            </div>

                            <SpotlightCard className="p-6 sm:p-7">
                                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">{exp.title}</h3>
                                            {exp.current && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7EE787]/40 bg-[#7EE787]/10 px-2.5 py-0.5 font-['JetBrains_Mono'] text-[10px] font-medium text-[#7EE787]">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787] animate-pulse" />
                                                    CURRENT ROLE
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-lg text-[#C4CBD2]">{exp.company}</p>
                                    </div>
                                    <span className="font-['JetBrains_Mono'] text-xs text-[#7EE787] shrink-0 self-start md:self-auto rounded-md border border-[#232A32] bg-[#0F1317] px-3 py-1">
                                        {exp.period}
                                    </span>
                                </div>

                                {exp.description && (
                                    <p className="mb-4 text-sm leading-relaxed text-[#8B96A3]">{exp.description}</p>
                                )}

                                <ul className="space-y-2.5 mb-5">
                                    {exp.achievements.map((achievement) => (
                                        <li key={achievement} className="flex items-start gap-3 text-sm text-[#8B96A3] leading-relaxed">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.tags && (
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#232A32]/70">
                                        {exp.tags.map((tag) => (
                                            <motion.span
                                                key={tag}
                                                whileHover={{ y: -1, scale: 1.05 }}
                                                className="rounded-md border border-[#232A32] bg-[#0F1317] px-2.5 py-0.5 font-['JetBrains_Mono'] text-[11px] text-[#A6B2BE]"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                )}
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 rounded-2xl border border-dashed border-[#232A32] px-6 py-5 text-center">
                    <p className="font-['JetBrains_Mono'] text-sm text-[#8B96A3]">
                        <span className="text-[#7EE787]">note:</span> comfortable working on existing codebases,
                        resolving concurrency issues and scaling them without breaking production systems.
                    </p>
                </div>
            </div>
        </section>
    );
}