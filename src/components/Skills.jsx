// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Box, GitBranch, Network } from 'lucide-react';

const skills = [
  {
    category: 'Backend Development',
    icon: Code2,
    items: ['Java 17', 'Spring Boot', 'Spring MVC', 'REST API Design', 'Hibernate & JPA', 'SQL', 'Perf. optimization'],
  },
  {
    category: 'Frontend Integration',
    icon: Box,
    items: ['React.js', 'Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Schema design', 'Query optimization'],
  },
  {
    category: 'API Security & Auth',
    icon: Server,
    items: ['JWT', 'Spring Security', 'OAuth 2.0', 'RBAC', 'Swagger/OpenAPI', 'Bean validation'],
  },
  {
    category: 'Tools & Collaboration',
    icon: GitBranch,
    items: ['Git & GitHub', 'Maven', 'Docker', 'Postman', 'Cloudinary', 'Agile', 'Razorpay integration','Groq / LLM APIs'],
  },
  {
    category: 'Familiar with',
    icon: Network,
    items: ['Microservices', 'Eureka / API Gateway', 'JUnit', 'Jira', 'Jenkins', 'Kafka'],
    exploring: true,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative overflow-hidden bg-[#0B0E11] px-4 py-24 sm:px-6">
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
            // tech-stack
          </div>
          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-xl text-[#8B96A3]">
            The stack behind secure, scalable backend systems — grouped the way it actually gets used.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative rounded-2xl border p-6 transition-colors duration-300 ${
                skill.exploring
                  ? 'border-dashed border-[#232A32] bg-transparent hover:border-[#8B96A3]/50'
                  : 'border-[#232A32] bg-[#12161B] hover:border-[#7EE787]/40'
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#232A32] bg-[#0F1317] text-[#7EE787]">
                  <skill.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                  {skill.category}
                </h3>
                {skill.exploring && (
                  <span className="ml-auto font-['JetBrains_Mono'] text-[10px] uppercase tracking-wide text-[#8B96A3]">
                    exploring
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#232A32] bg-[#0F1317] px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-[#C4CBD2] transition-colors group-hover:border-[#7EE787]/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}