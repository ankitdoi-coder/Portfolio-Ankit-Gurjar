// eslint-disable-next-line no-unused-vars
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, PlayCircle, X, Maximize2, ImagePlus } from 'lucide-react';

// ─── SCREENSHOT PLACEHOLDER IMPORTS ────────────────────────────────
// Replace these with your actual screenshot files once ready.
// Suggested folder: src/assets/screenshots/<project-name>/<file>.png

// Healthcare System — role-based views
import healthcareAdminDashboard from '../assets/screenshots/healthcare/admin-dashboard.png';
import healthcareAdminEnq from '../assets/screenshots/healthcare/admin-enquiry.jpg';
import healthcareAdminAnalytics from '../assets/screenshots/healthcare/admin-analytics.png';
import healthcareDoctorDashboard from '../assets/screenshots/healthcare/doctor-dashboard.png';
import healthcareDoctorPatientRecords from '../assets/screenshots/healthcare/doctor-patient-records.png';
import healthcareDoctorPatientCalender from '../assets/screenshots/healthcare/doctor-patient-calender.jpg';
import profileupdate from '../assets/screenshots/healthcare/doctor-profile-update.jpg';
import healthcarePatientDashboard from '../assets/screenshots/healthcare/patient-dashboard.png';
import healthcarePatientBooking from '../assets/screenshots/healthcare/patient-appointment-booking.png';
import healthcarePatientMyAppointment from '../assets/screenshots/healthcare/patient-my-appointments.jpg';
import healthcarePatientFindDoctor from '../assets/screenshots/healthcare/patient-find-doctor.jpg';
import healthcareLoginOAuth from '../assets/screenshots/healthcare/login-oauth-screen.png';
import healthcareBillingInvoice from '../assets/screenshots/healthcare/billing-payment-invoice.png';
import chatBot from '../assets/screenshots/healthcare/ai.jpg';

// API Gateway & Guardrail System
import apiGatewaySwaggerDocs from '../assets/screenshots/api-gateway/swagger-api-docs.png';
import apiGatewayRateLimitLogs from '../assets/screenshots/api-gateway/rate-limit-console-logs.png';
import apiGatewayArchitectureDiagram from '../assets/screenshots/api-gateway/architecture-diagram.png';

// Personal Finance Tracker
import financeDashboardOverview from '../assets/screenshots/finance-tracker/dashboard-overview.png';
import financeAnalyticsCharts from '../assets/screenshots/finance-tracker/analytics-charts.png';
import financeExpenseCategoryView from '../assets/screenshots/finance-tracker/expense-category-view.png';
import financeTransactionHistory from '../assets/screenshots/finance-tracker/transaction-history.png';

// Movie Streaming & Catalog Platform
import movieCatalogHomepage from '../assets/screenshots/movie-platform/catalog-homepage.png';
import movieAdminContentPanel from '../assets/screenshots/movie-platform/admin-content-panel.png';
import moviePlayerScreen from '../assets/screenshots/movie-platform/movie-player-screen.jpg';

// Online Book Store
import bookstoreHomepage from '../assets/screenshots/bookstore/homepage-catalog.png';
import bookstoreCartCheckout from '../assets/screenshots/bookstore/cart-checkout.png';
import bookstoreAdminPanel from '../assets/screenshots/bookstore/admin-product-panel.png';

// ─────────────────────────────────────────────────────────────────

// Flagship project — shown in a larger, featured card above the grid.
const featuredProject = {
  title: 'Smart Healthcare Appointment & Records System',
  tagline: 'Role-based healthcare platform — Admin / Doctor / Patient',
  highlights: [
    '45+ REST APIs across 9 domain modules, packaged by business feature so modules ship independently',
    'Stateless JWT auth with RBAC across 3 roles, Google OAuth2 login, and Redis-backed token blacklisting for true server-side logout',
    'Razorpay integration with server-side HMAC-SHA256 signature verification across the full order lifecycle',
    'Billing & revenue module with full payment audit trail and real-time analytics; server-side pagination across 8 list endpoints',
    'React 19 + Redux Toolkit frontend, 3 role-specific dashboards, fully documented with Swagger/OpenAPI — 420+ commits as sole engineer',
    'LLM-powered assistant layer (OpenAI API) for natural-language patient triage support — in progress',
  ],
  tech: ['Java 17', 'Spring Boot 3.5', 'Spring Security', 'JWT', 'Redis', 'OAuth2', 'Razorpay', 'MySQL', 'React 19', 'Swagger', 'OpenAI API'],
  github: 'https://github.com/ankitdoi-coder/HealthCare-Appointment-and-Record-System-OverView.git',
  demo: 'https://youtube.com/playlist?list=PLmiLUrj3djKIWV-G-5VEgdpI8kFtuCUl1&si=o9EaHzYOURz_UD20',
  demoType: 'video',
  screenshots: [
    { role: 'Admin', label: 'Admin Dashboard', img: healthcareAdminDashboard, desc: 'Staff, department & platform-wide oversight.' },
    { role: 'Admin', label: 'Revenue Analytics', img: healthcareAdminAnalytics, desc: 'Real-time billing & revenue analytics.' },
    { role: 'Admin', label: 'Enquires', img: healthcareAdminEnq, desc: 'Real-time Enquiry Data.' },
    { role: 'Doctor', label: 'Doctor Dashboard', img: healthcareDoctorDashboard, desc: 'Manage schedule and upcoming consultations.' },
    { role: 'Doctor', label: 'Patient Records', img: healthcareDoctorPatientRecords, desc: 'Full patient history & prescriptions.' },
    { role: 'Doctor', label: 'Appointment Calender', img: healthcareDoctorPatientCalender, desc: 'Full Calender View of the Appointments.' },
    { role: 'Doctor', label: 'Profile Update', img: profileupdate, desc: 'Full Calender View of the Appointments.' },
    { role: 'Patient', label: 'Patient Dashboard', img: healthcarePatientDashboard, desc: 'Overview of appointments & records.' },
    { role: 'Patient', label: 'Appointment Booking', img: healthcarePatientBooking, desc: 'Real-time slot booking flow.' },
    { role: 'Patient', label: 'Appointment Tracking', img: healthcarePatientMyAppointment, desc: 'Real-time Appointment Tracking.' },
    { role: 'Patient', label: 'Find Doctors', img: healthcarePatientFindDoctor, desc: 'Find Doctors Available in the Clinic.' },
    { role: 'Auth', label: 'Login / OAuth2', img: healthcareLoginOAuth, desc: 'JWT + Google OAuth2 secure login.' },
    { role: 'Billing', label: 'Payment & Invoice', img: healthcareBillingInvoice, desc: 'Razorpay checkout with verified signatures.' },
    // NOTE (Ankit): drop your LLM assistant screenshots in here once ready —
    // e.g. { role: 'LLM Integration', label: 'Symptom Assistant', img: yourImportedScreenshot, desc: '...' }
    { role: 'LLM Integration', label: 'AI Symptom Assistant', img: chatBot, desc: 'Natural-language patient triage support.' },
  ],
};

const projects = [
  {
    title: 'API Gateway & Guardrail System ( Backend Heavy )',
    tagline: 'Current Stage ( Developement )High-throughput Spring Boot microservice with atomic Redis guardrails',
    highlights: [
      'Handles test User 200+ concurrent requests atomically using Redis INCR to prevent race conditions',
      'Virality scoring engine with bot rate limiting via atomic Redis locks',
      'CRON-based sweeper for smart, batched notifications',
    ],
    tech: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'Rate Limiting'],
    github: 'https://github.com/ankitdoi-coder/Scalable-Social-API.git',
    demo: 'https://youtu.be/6ttpF7n_HyI?si=IhPihPZP-4IzlBxp',
    demoType: 'video',
    screenshots: [
      { label: 'API Docs (Swagger)', img: apiGatewaySwaggerDocs, desc: 'Full endpoint documentation via OpenAPI.' },
      { label: 'Rate Limit Console', img: apiGatewayRateLimitLogs, desc: 'Live guardrail logs under concurrent load.' },
      { label: 'System Architecture', img: apiGatewayArchitectureDiagram, desc: 'Redis-backed atomic request flow.' },
    ],
  },
  {
    title: 'Personal Finance Tracking System',
    tagline: 'Multi-user FinTech expense tracker with per-user data isolation',
    highlights: [
      '5 modular components (Dashboard, Expense, Category, Analytics, Profile) on a layered Spring Boot architecture',
      'Daily/monthly/yearly analytics dashboard across 50+ transactions with spending-category breakdowns',
      'Query optimization cut average response time from 2000ms to 1400ms',
    ],
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate', 'MySQL', 'Thymeleaf'],
    github: 'https://github.com/ankitdoi-coder/Personal-Finance-Tracking-System-java-Full-Stack-App.git',
    demo: 'https://youtu.be/U8WnXUyxxU8?si=Cf_c5rdlWF_JlGb4',
    demoType: 'video',
    screenshots: [
      { label: 'Analytics Charts', img: financeAnalyticsCharts, desc: 'Spending trends across time periods.' },
      { label: 'Dashboard Overview', img: financeDashboardOverview, desc: 'Monthly income vs expense summary.' },
      { label: 'Category Breakdown', img: financeExpenseCategoryView, desc: 'Expense split by category.' },
      { label: 'Transaction History', img: financeTransactionHistory, desc: 'Filterable transaction log.' },
    ],
  },
  {
    title: 'Movie Streaming & Catalog Platform',
    tagline: 'SPA for browsing and administering a movie catalog',
    highlights: [
      'Live Demo Can take up 50 sec to start the Backend Server.',
      'Dynamic catalog with real-time updates and secure JWT authentication',
      'Admin dashboard for content management, built on Angular + RxJS for reactive state',
      'Responsive UI tuned for a seamless experience across devices',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'Spring Boot', 'JWT'],
    github: 'https://github.com/ankitdoi-coder/Movie-Downloding-Platform.git',
    demo: 'https://ajay-movies-frontend.onrender.com',
    demoType: 'live',
    screenshots: [
      { label: 'Catalog Homepage', img: movieCatalogHomepage, desc: 'Browse & search the movie catalog.' },
      { label: 'Admin Content Panel', img: movieAdminContentPanel, desc: 'Manage catalog entries as admin.' },
      { label: 'Player Screen', img: moviePlayerScreen, desc: 'In-app streaming player view.' },
    ],
  },
  {
    title: 'Online Book Store Web Application',
    tagline: 'Full-stack CRUD e-commerce system with user/admin roles',
    highlights: [
      'Authentication, cart management, and product workflows on Spring Boot + MySQL',
      'Clean backend architecture focused on data consistency',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JSP'],
    github: 'https://github.com/ankitdoi-coder/Book-Store-E-Commerce-Full-Stack-Java.git',
    demo: 'https://youtu.be/Eax4XVx56_0?si=vBGIMCr29KB4yJ4f',
    demoType: 'video',
    screenshots: [
      { label: 'Homepage & Catalog', img: bookstoreHomepage, desc: 'Browse available books.' },
      { label: 'Cart & Checkout', img: bookstoreCartCheckout, desc: 'Cart management & checkout flow.' },
      { label: 'Admin Product Panel', img: bookstoreAdminPanel, desc: 'Admin CRUD for inventory.' },
    ],
  },
];

function TechTags({ tech }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-md border border-[#232A32] bg-[#0F1317] px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-[#C4CBD2] transition-colors hover:border-[#7EE787]/30"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ github, demo, demoType }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source code on GitHub"
        className="group/btn flex items-center gap-2 rounded-lg border border-[#232A32] bg-[#0F1317] px-4 py-2.5 font-['Space_Grotesk'] text-sm font-semibold text-[#E6E9EC] transition-colors hover:border-[#7EE787]/40"
      >
        <Github className="h-4 w-4 transition-transform group-hover/btn:rotate-6" />
        Code
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={demoType === 'video' ? 'Watch demo video' : 'Open live demo'}
        className="group/btn flex items-center gap-2 rounded-lg bg-[#7EE787] px-4 py-2.5 font-['Space_Grotesk'] text-sm font-semibold text-[#0B0E11] transition-transform hover:scale-[1.03]"
      >
        {demoType === 'video' ? (
          <PlayCircle className="h-4 w-4" />
        ) : (
          <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        )}
        {demoType === 'video' ? 'Demo Video' : 'Live Demo'}
      </a>
    </div>
  );
}

// ─── SCREENSHOT GALLERY ─────────────────────────────────────────────
// Groups screenshots by `role` if present (multi-role systems like the
// Healthcare project), otherwise shows a flat tab list of screens.
// Entries with img: null render a "coming soon" placeholder instead of
// being skipped — every documented screen stays visible in the tabs.
function ScreenshotGallery({ screenshots }) {
  const hasRoles = screenshots.some((s) => s.role);
  const roles = hasRoles ? [...new Set(screenshots.map((s) => s.role))] : null;

  const [activeRole, setActiveRole] = useState(roles ? roles[0] : null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const visibleShots = hasRoles
    ? screenshots.filter((s) => s.role === activeRole)
    : screenshots;

  const active = visibleShots[activeIndex] || visibleShots[0];

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setActiveIndex(0);
  };

  return (
    <div className="mb-6">
      {/* Role tabs (only for multi-role systems) */}
      {hasRoles && (
        <div className="mb-3 flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleChange(role)}
              className={`rounded-md px-3.5 py-1.5 font-['JetBrains_Mono'] text-xs uppercase tracking-wide transition-colors ${
                activeRole === role
                  ? 'bg-[#7EE787] text-[#0B0E11]'
                  : 'border border-[#232A32] bg-[#0F1317] text-[#8B96A3] hover:text-[#E6E9EC]'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      )}

      {/* Screen tabs within the active role */}
      <div className="mb-4 flex flex-wrap gap-2">
        {visibleShots.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActiveIndex(i)}
            className={`rounded-md px-3 py-1 font-['JetBrains_Mono'] text-xs transition-colors ${
              activeIndex === i
                ? 'bg-[#232A32] text-white'
                : 'text-[#8B96A3] hover:text-[#E6E9EC]'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Active screenshot */}
      <div className="group/shot relative overflow-hidden rounded-2xl border border-[#232A32] bg-[#0F1317]">
        {active.img ? (
          <button
            onClick={() => setLightboxOpen(true)}
            className="block w-full text-left"
            aria-label={`View ${active.label} full size`}
          >
            <img
              src={active.img}
              alt={active.label}
              loading="lazy"
              className="max-h-[420px] w-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02]"
            />
            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md bg-[#0B0E11]/85 px-2.5 py-1 font-['JetBrains_Mono'] text-xs text-[#8B96A3] opacity-0 backdrop-blur transition-opacity group-hover/shot:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" /> expand
            </span>
          </button>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center gap-3 border-b border-dashed border-[#232A32] text-[#8B96A3]">
            <ImagePlus className="h-8 w-8" />
            <span className="font-['JetBrains_Mono'] text-xs">screenshot coming soon</span>
          </div>
        )}
        <div className="border-t border-[#232A32] bg-[#12161B] px-4 py-3">
          <div className="font-['Space_Grotesk'] text-sm font-semibold text-white">{active.label}</div>
          <p className="mt-0.5 text-xs text-[#8B96A3]">{active.desc}</p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && active.img && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[#0B0E11]/95 p-4 backdrop-blur-md md:p-10"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-[#232A32] bg-[#12161B] transition-colors hover:border-[#7EE787]/40"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={active.img}
              alt={active.label}
              className="max-h-full max-w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0B0E11] px-4 py-24 sm:px-6">
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
            // projects
          </div>
          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
            Projects I've Built
          </h2>
          <p className="mt-3 max-w-xl text-[#8B96A3]">
            Real-world backend systems focused on security, scalability, and clean API design.
          </p>
        </motion.div>

        {/* Featured project — flagship, full-width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative mb-8 rounded-3xl border border-[#7EE787]/25 bg-[#12161B] p-8 md:p-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-md bg-[#7EE787] px-3 py-1 font-['JetBrains_Mono'] text-[11px] font-semibold uppercase tracking-wide text-[#0B0E11]">
              flagship project
            </span>
          </div>

          <h3 className="font-['Space_Grotesk'] text-3xl font-semibold text-white">{featuredProject.title}</h3>
          <p className="mt-2 text-[#8B96A3]">{featuredProject.tagline}</p>

          <ul className="mb-6 mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {featuredProject.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[#C4CBD2]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                {h}
              </li>
            ))}
          </ul>

          <TechTags tech={featuredProject.tech} />

          {/* Preview Screenshots — role-tabbed for Admin/Doctor/Patient/LLM Integration */}
          <ScreenshotGallery screenshots={featuredProject.screenshots} />

          <ProjectLinks
            github={featuredProject.github}
            demo={featuredProject.demo}
            demoType={featuredProject.demoType}
          />
        </motion.div>

        {/* Remaining projects — grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex h-full flex-col rounded-3xl border border-[#232A32] bg-[#12161B] p-7 transition-colors hover:border-[#7EE787]/30"
            >
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-[#8B96A3]">{project.tagline}</p>

              <ul className="my-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[#C4CBD2]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                    {h}
                  </li>
                ))}
              </ul>

              <TechTags tech={project.tech} />

              {/* Preview Screenshots */}
              <ScreenshotGallery screenshots={project.screenshots} />

              <div className="mt-auto">
                <ProjectLinks github={project.github} demo={project.demo} demoType={project.demoType} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-[#232A32] p-8 text-center">
          <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#8B96A3]">Other Practice Projects</h3>
          <ul className="mx-auto mt-4 max-w-2xl space-y-1 font-['JetBrains_Mono'] text-sm text-[#8B96A3]">
            <li>Portfolio Website — React, Tailwind CSS, Framer Motion</li>
            <li>Music Player (Spotify Clone) — HTML, CSS, JavaScript</li>
            <li>Netflix UI Clone — HTML, CSS, JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}