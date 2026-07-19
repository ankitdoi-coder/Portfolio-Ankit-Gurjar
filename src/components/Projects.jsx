// eslint-disable-next-line no-unused-vars
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Zap, PlayCircle, Star, X, Maximize2 } from 'lucide-react';

// ─── SCREENSHOT PLACEHOLDER IMPORTS ────────────────────────────────
// Replace these with your actual screenshot files once ready.
// Suggested folder: src/assets/screenshots/<project-name>/<file>.png

// Healthcare System — role-based views
import healthcareAdminDashboard from '../assets/screenshots/healthcare/admin-dashboard.png';
import healthcareAdminAnalytics from '../assets/screenshots/healthcare/admin-analytics.png';
import healthcareDoctorDashboard from '../assets/screenshots/healthcare/doctor-dashboard.png';
import healthcareDoctorPatientRecords from '../assets/screenshots/healthcare/doctor-patient-records.png';
import healthcareDoctorPatientCalender from '../assets/screenshots/healthcare/doctor-patient-calender.jpg';
import healthcarePatientDashboard from '../assets/screenshots/healthcare/patient-dashboard.png';
import healthcarePatientBooking from '../assets/screenshots/healthcare/patient-appointment-booking.png';
import healthcarePatientMyAppointment from '../assets/screenshots/healthcare/patient-my-appointments.jpg';
import healthcarePatientFindDoctor from '../assets/screenshots/healthcare/patient-find-doctor.jpg';
import healthcareLoginOAuth from '../assets/screenshots/healthcare/login-oauth-screen.png';
import healthcareBillingInvoice from '../assets/screenshots/healthcare/billing-payment-invoice.png';
import healthcareAdminEnq from '../assets/screenshots/healthcare/admin-enquiry.jpg';

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
  ],
  tech: ['Java 17', 'Spring Boot 3.5', 'Spring Security', 'JWT', 'Redis', 'OAuth2', 'Razorpay', 'MySQL', 'React 19', 'Swagger'],
  github: 'https://github.com/ankitdoi-coder/HealthCare-Appointment-and-Record-System-OverView.git',
  demo: 'https://youtube.com/playlist?list=PLmiLUrj3djKIWV-G-5VEgdpI8kFtuCUl1&si=o9EaHzYOURz_UD20',
  demoType: 'video',
  gradient: 'from-cyan-500 to-blue-600',
  screenshots: [
    { role: 'Admin', label: 'Admin Dashboard', img: healthcareAdminDashboard, desc: 'Staff, department & platform-wide oversight.' },
    { role: 'Admin', label: 'Revenue Analytics', img: healthcareAdminAnalytics, desc: 'Real-time billing & revenue analytics.' },
    { role: 'Admin', label: 'Enquires', img: healthcareAdminEnq, desc: 'Real-time Enquiry Data.' },
    { role: 'Doctor', label: 'Doctor Dashboard', img: healthcareDoctorDashboard, desc: 'Manage schedule and upcoming consultations.' },
    { role: 'Doctor', label: 'Patient Records', img: healthcareDoctorPatientRecords, desc: 'Full patient history & prescriptions.' },
    { role: 'Doctor', label: 'Appointment Calender', img: healthcareDoctorPatientCalender, desc: 'Full Calender View of the Appointments.' },
    { role: 'Patient', label: 'Patient Dashboard', img: healthcarePatientDashboard, desc: 'Overview of appointments & records.' },
    { role: 'Patient', label: 'Appointment Booking', img: healthcarePatientBooking, desc: 'Real-time slot booking flow.' },
    { role: 'Patient', label: 'Appointment Tracking', img: healthcarePatientMyAppointment, desc: 'Real-time Appointment Tracking.' },
    { role: 'Patient', label: 'Find Doctors', img: healthcarePatientFindDoctor, desc: 'Find Doctors Available in the Clinic.' },
    { role: 'Auth', label: 'Login / OAuth2', img: healthcareLoginOAuth, desc: 'JWT + Google OAuth2 secure login.' },
    { role: 'Billing', label: 'Payment & Invoice', img: healthcareBillingInvoice, desc: 'Razorpay checkout with verified signatures.' },
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
    gradient: 'from-orange-500 to-red-600',
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
    gradient: 'from-green-500 to-emerald-600',
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
    gradient: 'from-red-500 to-orange-500',
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
    gradient: 'from-purple-500 to-pink-600',
    screenshots: [
      { label: 'Homepage & Catalog', img: bookstoreHomepage, desc: 'Browse available books.' },
      { label: 'Cart & Checkout', img: bookstoreCartCheckout, desc: 'Cart management & checkout flow.' },
      { label: 'Admin Product Panel', img: bookstoreAdminPanel, desc: 'Admin CRUD for inventory.' },
    ],
  },
];

function TechTags({ tech, gradient }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map((t) => (
        <span
          key={t}
          className={`px-3 py-1.5 bg-gradient-to-r ${gradient} bg-opacity-10 rounded-lg text-sm font-medium border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ github, demo, demoType, gradient }) {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source code on GitHub"
        className={`flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-gradient-to-r ${gradient} rounded-lg transition-all duration-300 hover:scale-105 group/btn`}
      >
        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
        <span className="font-semibold">Code</span>
      </a>
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={demoType === 'video' ? 'Watch demo video' : 'Open live demo'}
        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn`}
      >
        {demoType === 'video' ? (
          <PlayCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
        ) : (
          <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        )}
        <span className="font-semibold">{demoType === 'video' ? 'Demo Video' : 'Live Demo'}</span>
      </a>
    </div>
  );
}

// ─── SCREENSHOT GALLERY ─────────────────────────────────────────────
// Groups screenshots by `role` if present (multi-role systems like the
// Healthcare project), otherwise shows a flat tab list of screens.
function ScreenshotGallery({ screenshots, gradient }) {
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
        <div className="flex flex-wrap gap-2 mb-3">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleChange(role)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                activeRole === role
                  ? `bg-gradient-to-r ${gradient} text-white shadow-md scale-105`
                  : 'bg-slate-900 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      )}

      {/* Screen tabs within the active role */}
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleShots.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActiveIndex(i)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
              activeIndex === i
                ? 'bg-slate-700 text-white'
                : 'bg-slate-900/60 text-slate-500 hover:text-slate-300'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Active screenshot */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950/60 group/shot">
        <button
          onClick={() => setLightboxOpen(true)}
          className="block w-full text-left"
          aria-label={`View ${active.label} full size`}
        >
          <img
            src={active.img}
            alt={active.label}
            loading="lazy"
            className="w-full max-h-[420px] object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.02]"
          />
          <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur text-xs text-slate-300 opacity-0 group-hover/shot:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" /> Expand
          </span>
        </button>
        <div className="px-4 py-3 border-t border-slate-800 bg-slate-900/60">
          <div className="text-sm font-semibold text-slate-200">{active.label}</div>
          <p className="text-xs text-slate-500 mt-0.5">{active.desc}</p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={active.img}
              alt={active.label}
              className="max-w-full max-h-full rounded-xl shadow-2xl"
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
            Projects I've Built
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world backend systems focused on security, scalability, and clean API design.
          </p>
        </motion.div>

        {/* Featured project — flagship, full-width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="group relative mb-8"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${featuredProject.gradient} rounded-3xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-500`}></div>

          <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-700 hover:border-slate-600 transition-all duration-500">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${featuredProject.gradient} rounded-t-3xl`}></div>

            <div className="flex items-center gap-2 mb-4">
              <span className={`flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${featuredProject.gradient} rounded-full text-xs font-bold uppercase tracking-wide`}>
                <Star className="w-3.5 h-3.5 fill-current" />
                Flagship Project
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {featuredProject.title}
            </h3>
            <p className="text-slate-400 mb-6">{featuredProject.tagline}</p>

            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {featuredProject.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-slate-300 text-sm leading-relaxed">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${featuredProject.gradient} shrink-0`}></span>
                  {h}
                </li>
              ))}
            </ul>

            <TechTags tech={featuredProject.tech} gradient={featuredProject.gradient} />

            {/* Preview Screenshots — role-tabbed for Admin/Doctor/Patient */}
            <ScreenshotGallery screenshots={featuredProject.screenshots} gradient={featuredProject.gradient} />

            <ProjectLinks
              github={featuredProject.github}
              demo={featuredProject.demo}
              demoType={featuredProject.demoType}
              gradient={featuredProject.gradient}
            />
          </div>
        </motion.div>

        {/* Remaining projects — grid */}
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

              <div className="relative h-full flex flex-col bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} rounded-t-3xl`}></div>

                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">{project.tagline}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`}></span>
                      {h}
                    </li>
                  ))}
                </ul>

                <TechTags tech={project.tech} gradient={project.gradient} />

                {/* Preview Screenshots */}
                <ScreenshotGallery screenshots={project.screenshots} gradient={project.gradient} />

                <div className="mt-auto">
                  <ProjectLinks github={project.github} demo={project.demo} demoType={project.demoType} gradient={project.gradient} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-slate-400 mb-4">Other Practice Projects</h3>
          <ul className="text-slate-500 text-sm space-y-1 max-w-2xl mx-auto">
            <li>• Portfolio Website — React, Tailwind CSS, Framer Motion</li>
            <li>• Music Player (Spotify Clone) — HTML, CSS, JavaScript</li>
            <li>• Netflix UI Clone — HTML, CSS, JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}