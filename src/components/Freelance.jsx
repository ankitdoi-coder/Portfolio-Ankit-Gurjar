// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImagePlus, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import khandelwalDental from '../assets/khandelwal-dental-clinic.png';
import pizzaWorld from '../assets/pizzaworld.jpg';  
import kitchen21 from '../assets/theKitchen21.jpg';  

// TODO (Ankit): Replace the remaining placeholder entry with your next real
// delivered client project — business type, the problem the client had,
// what you built, a screenshot, and a live link if the site is still up.
const caseStudies = [
  {
    placeholder: false,
    business: 'Khandelwal Dental Clinic and Implant Centre',
    category: 'Dental Clinic — Local Business Website',
    problem: 'Needed a professional online presence to build trust with new patients and make it easy to see services, the doctor, and how to get in touch.',
    built: 'A fast, modern clinic website — services overview, doctor profile, clinic photos, and a clear path to book an appointment or call directly.',
    features: ['Services overview', 'Doctor profile', 'Clinic photos & results', 'Appointment / contact flow'],
    tech: ['React', 'Tailwind CSS', 'Vite'],
    status: 'Live & deployed',
    screenshot: khandelwalDental,
    live: 'https://khandelwalclinic.netlify.app',
  },
  {
    placeholder: false,
    business: 'Pizza World — The Unlimited Italian Food Factory',
    category: 'Restaurant & Buffet — Local Business Website',
    problem: 'Needed a bold, high-energy website to showcase the unlimited buffet concept, menu, and cafe experience, and turn visitors into table reservations.',
    built: 'A vibrant, animated single-page site with a cinematic hero, buffet walkthrough, interactive menu & gallery, live offers, and a direct reserve-table flow with map, call, and WhatsApp.',
    features: [
      'Animated hero & scroll-reveal sections',
      'Interactive menu grid with pricing',
      'Buffet "how it works" steps',
      'Photo gallery with lightbox',
      'Offers & reviews sections',
      'Reserve table via call / WhatsApp + embedded map',
    ],
    tech: ['React', 'TanStack Router', 'Tailwind CSS', 'Vite'],
    status: 'Live & deployed',
    screenshot: pizzaWorld,
    live: 'https://pizzaworldjaipur.netlify.app/',
  },
  {
    placeholder: false,
    business: 'The Kitchen 21 — Pure Veg Multi-Cuisine Family Restaurant',
    category: 'Restaurant & Dining — Local Business Website',
    problem: 'Needed an elegant and warm digital presence to showcase their decade-long legacy, multi-cuisine pure-veg menu, and inviting ambiance, while driving table reservations directly via WhatsApp.',
    built: 'A sophisticated, fully responsive single-page application featuring a cinematic hero with floating animations, signature dish showcases, categorized menus, an immersive gallery, and a seamless WhatsApp reservation system.',
    features: [
      'Cinematic hero with scroll-reveal & floating animations',
      'Signature dishes showcase with dynamic spice-level meters',
      'Categorized interactive menu grid with pricing',
      'Photo gallery with lightbox viewing',
      'Guest reviews, FAQ accordion, and daily offers sections',
      'Direct WhatsApp table reservation form & embedded Google Map',
    ],
    tech: ['React', 'TanStack Router', 'Tailwind CSS', 'Vite', 'Lucide React'],
    status: 'Live & deployed',
    screenshot: kitchen21, // Make sure to import your screenshot variable to match this
    live: 'https://thekitchen21.netlify.app/',
  },
];

export default function Freelance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="freelance" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold">
            For Businesses
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            I Build Digital Products for Businesses
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you need a professional website or a custom full-stack application, I can build and deliver it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((project, index) =>
            project.placeholder ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-slate-800/60 rounded-3xl border border-dashed border-slate-600 p-8 flex flex-col"
              >
                <div className="flex items-center justify-center h-40 mb-6 rounded-2xl bg-slate-900/60 border border-slate-700 text-slate-600">
                  <ImagePlus className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-orange-400/80 mb-2">Case study placeholder</span>
                <h3 className="text-xl font-bold mb-3 text-slate-200">{project.category}</h3>
                <p className="text-slate-400 text-sm mb-2"><span className="text-slate-500">Problem: </span>{project.problem}</p>
                <p className="text-slate-400 text-sm mb-4"><span className="text-slate-500">Built: </span>{project.built}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-900/60 border border-slate-700 rounded-lg text-xs text-slate-500">{t}</span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700 hover:border-orange-500/40 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden border-b border-slate-700">
                  <img
                    src={project.screenshot}
                    alt={`${project.business} website screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {project.status}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-orange-400 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.business}</h3>
                  <p className="text-slate-400 text-sm mb-3"><span className="text-slate-500 font-semibold">Problem: </span>{project.problem}</p>
                  <p className="text-slate-400 text-sm mb-4"><span className="text-slate-500 font-semibold">Built: </span>{project.built}</p>

                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-300 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shrink-0"></span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-900/60 border border-slate-700 rounded-lg text-xs text-slate-300">{t}</span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                </div>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700 rounded-3xl p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Have a project in mind?</h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Let's build something that actually works for your business — from a landing page to a full custom application.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Let's Talk About Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}