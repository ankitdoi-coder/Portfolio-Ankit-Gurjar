// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        title: 'Software Developer (Backend – Spring Boot)',
        company: 'SAG Infotech Pvt. Ltd.',
        period: 'Nov 2025 - Feb 2026',
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
        <section id="experience" className="relative bg-[#0B0E11] px-4 py-24 sm:px-6">
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

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative border-l-2 border-[#232A32] pl-8"
                        >
                            <div className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full bg-[#7EE787]">
                                <Briefcase className="h-3 w-3 text-[#0B0E11]" />
                            </div>

                            <div className="rounded-2xl border border-[#232A32] bg-[#12161B] p-6 transition-colors hover:border-[#7EE787]/25">
                                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">{exp.title}</h3>
                                        <p className="mt-0.5 text-lg text-[#C4CBD2]">{exp.company}</p>
                                    </div>
                                    <span className="mt-2 font-['JetBrains_Mono'] text-xs text-[#7EE787] md:mt-0">
                                        {exp.period}
                                    </span>
                                </div>

                                {exp.description && (
                                    <p className="mb-4 text-sm leading-relaxed text-[#8B96A3]">{exp.description}</p>
                                )}

                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement) => (
                                        <li key={achievement} className="flex items-start gap-3 text-sm text-[#8B96A3]">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 rounded-2xl border border-dashed border-[#232A32] px-6 py-5 text-center">
                    <p className="font-['JetBrains_Mono'] text-sm text-[#8B96A3]">
                        <span className="text-[#7EE787]">note:</span> comfortable working on existing codebases and
                        improving them without breaking production systems.
                    </p>
                </div>
            </div>
        </section>
    );
}