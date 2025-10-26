// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Box, GitBranch, Cloud } from 'lucide-react';

const skills = [
  {
    category: 'Core Java & Backend',
    icon: Code2,
    items: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'Maven'],
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan-500'
  },
  {
    category: 'Frontend',
    icon: Box,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Thymeleaf', 'Tailwind CSS'],
    gradient: 'from-orange-500 to-red-600',
    glowColor: 'orange-500'
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MySQL'],
    gradient: 'from-green-500 to-emerald-600',
    glowColor: 'green-500'
  },
  {
    category: 'APIs & Security',
    icon: Server,
    items: ['REST APIs', 'Spring Security', 'JWT', 'Swagger'],
    gradient: 'from-purple-500 to-pink-600',
    glowColor: 'purple-500'
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    items: ['Git', 'GitHub'],
    gradient: 'from-pink-500 to-rose-600',
    glowColor: 'pink-500'
  },
  {
    category: 'DevOps',
    icon: Cloud,
    items: ['Docker (Basic)'],
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'blue-500'
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="relative max-w-6xl mx-auto">
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
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 bg-gradient-to-br ${skill.gradient} rounded-xl shadow-lg`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>

                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="text-slate-300 flex items-center gap-3 group/item"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${skill.gradient} rounded-full group-hover/item:scale-150 transition-transform duration-300`}></div>
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
