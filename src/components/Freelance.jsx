// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImagePlus, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import khandelwalDental from '../assets/khandelwal-dental-clinic.png';
import pizzaWorld from '../assets/pizzaworld.jpg';
import kitchen21 from '../assets/theKitchen21.jpg';
import deliciousYard from '../assets/thedeliciousyard.jpg';

// TODO (Ankit): Replace the remaining placeholder entry with your next real
// delivered client project — business type, the problem the client had,
// what you built, a screenshot, and a live link if the site is still up.
const caseStudies = [
  {
    placeholder: false,
    business: 'The Delicious Yard — Luxury Family Restaurant',
    category: 'Restaurant & Garden Dining — Local Business Website',
    problem: 'Needed a luxury, celebration-focused website to stand out from typical restaurant pages — one that captured their lush garden setting and converted birthday/anniversary/kitty-party enquiries into WhatsApp bookings.',
    built: 'An elegant, motion-rich single-page site with a cinematic parallax hero, garden-themed gallery, categorized menu explorer, and dedicated celebrations showcase — all funneling straight into a WhatsApp reservation flow.',
    features: [
      'Parallax scroll hero with floating garden motifs',
      'Interactive tabbed menu (North Indian, Chinese, Italian, Desserts)',
      'Celebrations showcase (birthdays, anniversaries, kitty parties)',
      'Masonry photo gallery with hover reveals',
      'Guest reviews & Google rating summary',
      'WhatsApp reservation flow + embedded Google Map',
    ],
    tech: ['React', 'TanStack Router', 'Motion (Framer Motion)', 'Tailwind CSS', 'Vite'],
    status: 'Live & deployed',
    screenshot: deliciousYard,
    live: 'https://thedeliciousyardjaipur.netlify.app/',
  },
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
    <section id="freelance" className="relative overflow-hidden bg-[#0B0E11] px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
            // for-businesses
          </div>
          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
            I Build Digital Products for Businesses
          </h2>
          <p className="mt-3 max-w-2xl text-[#8B96A3]">
            Whether you need a professional website or a custom full-stack application, I can build and deliver it.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((project, index) =>
            project.placeholder ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col rounded-3xl border border-dashed border-[#232A32] p-8"
              >
                <div className="mb-6 flex h-40 items-center justify-center rounded-2xl border border-[#232A32] bg-[#0F1317] text-[#8B96A3]">
                  <ImagePlus className="h-9 w-9" />
                </div>
                <span className="mb-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wide text-[#8B96A3]">
                  case study placeholder
                </span>
                <h3 className="mb-3 font-['Space_Grotesk'] text-xl font-semibold text-[#C4CBD2]">
                  {project.category}
                </h3>
                <p className="mb-2 text-sm text-[#8B96A3]">
                  <span className="text-[#6C7784]">Problem: </span>{project.problem}
                </p>
                <p className="mb-4 text-sm text-[#8B96A3]">
                  <span className="text-[#6C7784]">Built: </span>{project.built}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#232A32] px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-[#6C7784]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#232A32] bg-[#12161B] transition-colors hover:border-[#7EE787]/30"
              >
                <div className="relative h-48 overflow-hidden border-b border-[#232A32]">
                  <img
                    src={project.screenshot}
                    alt={`${project.business} website screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md border border-[#7EE787]/30 bg-[#0B0E11]/90 px-3 py-1 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <span className="mb-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wide text-[#7EE787]">
                    {project.category}
                  </span>
                  <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-white">{project.business}</h3>
                  <p className="mb-3 text-sm text-[#8B96A3]">
                    <span className="font-semibold text-[#C4CBD2]">Problem: </span>{project.problem}
                  </p>
                  <p className="mb-4 text-sm text-[#8B96A3]">
                    <span className="font-semibold text-[#C4CBD2]">Built: </span>{project.built}
                  </p>

                  <ul className="mb-5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#C4CBD2]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[#232A32] bg-[#0F1317] px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-[#C4CBD2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7EE787] px-5 py-3 font-['Space_Grotesk'] text-sm font-semibold text-[#0B0E11] transition-transform hover:scale-[1.02]"
                  >
                    <ExternalLink className="h-4 w-4" />
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
          className="rounded-3xl border border-[#232A32] bg-[#12161B] p-10 text-center"
        >
          <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-semibold text-white sm:text-3xl">
            Have a project in mind?
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-[#8B96A3]">
            Let's build something that actually works for your business — from a landing page to a full custom application.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#7EE787] px-8 py-4 font-['Space_Grotesk'] text-lg font-semibold text-[#0B0E11] transition-transform hover:scale-[1.02]"
          >
            Let's Talk About Your Project
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}