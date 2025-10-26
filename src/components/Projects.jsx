// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Smart Healthcare Appointment & Record System',
    description: 'Built a secure, role-based (Admin, Doctor, Patient) system with 30+ REST APIs for appointments and user management. Implemented JWT authentication with Spring Security and developed a dynamic React frontend with Tailwind CSS.',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security 6', 'JWT', 'MySQL', 'React 19', 'Tailwind CSS', 'Swagger'],
    github: 'https://github.com/ankitdoi-coder/HealthCare-Appointment-and-Record-System-OverView.git',
    live: 'https://youtu.be/SievMETGuTw?si=OW0TX9qmo-vR4Mmg',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Personal Expense Tracker System',
    description: 'Developed 25+ REST endpoints for transactions and reports. Created an analytics module with date-based filtering and visual charts using Thymeleaf. Implemented JWT-based security and deployed on Render.',
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Authentication', 'REST APIs','Multi-Users','BootStrap', 'Charts','OpenCSV'],
    github: 'https://github.com/ankitdoi-coder/Personal-Finance-Tracking-System-java-Full-Stack-App.git',
    live: 'https://youtu.be/U8WnXUyxxU8?si=Cf_c5rdlWF_JlGb4',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Online Book Store Web Application',
    description: 'Full-stack platform to add, delete, update, and manage cart items. Implemented role-based authentication (Admin, User) using Spring Security and JWT. Deployed live.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'Bootstrap', 'Spring Security', 'Multi-Role', 'MySQL', 'REST APIs'],
    github: 'https://github.com/ankitdoi-coder/Book-Store-E-Commerce-Full-Stack-Java.git',
    live: 'https://youtu.be/Eax4XVx56_0?si=vBGIMCr29KB4yJ4f',
    gradient: 'from-purple-500 to-pink-600'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden">
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
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} rounded-t-3xl`}></div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-lg text-sm font-medium border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-gradient-to-r ${project.gradient} rounded-lg transition-all duration-300 hover:scale-105 group/btn`}
                  >
                    <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn`}
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    <span className="font-semibold">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
