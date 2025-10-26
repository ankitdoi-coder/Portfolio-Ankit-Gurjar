// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        title: 'Freelance Web Developer & Software Engineer',
        company: 'Self-Employed',
        period: 'jan 2024 - Present',
        description: 'Providing web development and software engineering services to clients, specializing in full-stack Java applications with Spring Boot and React.',
        achievements: [
            'Developed and deployed full-stack Java applications using Spring Boot and React',
            'Code bug fixing and debugging',
            'Wrote comprehensive unit and integration tests',
            'Contributed to database design and optimization'
        ]
    }
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-20 bg-slate-900 text-white px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
                    <p className="text-slate-400 text-lg">My professional journey</p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-orange-500"
                        >
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                <Briefcase className="w-3 h-3 text-slate-900" />
                            </div>

                            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-orange-500">{exp.title}</h3>
                                        <p className="text-xl text-slate-300">{exp.company}</p>
                                    </div>
                                    <span className="text-slate-400 mt-2 md:mt-0">{exp.period}</span>
                                </div>

                                <p className="text-slate-300 mb-4">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement) => (
                                        <li key={achievement} className="text-slate-400 flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>{achievement}</span>
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
