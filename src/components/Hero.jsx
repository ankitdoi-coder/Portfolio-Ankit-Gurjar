// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import pfp from '../assets/pfp.png';

const STACK = ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Redis', 'JWT', 'REST APIs', 'Angular'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0E11] px-4 pt-28 pb-16 text-[#E6E9EC] sm:px-6">
      {/* subtle grid, not a gradient blob */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#232A32 1px, transparent 1px), linear-gradient(90deg, #232A32 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#7EE787]/[0.06] to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* LEFT: pitch */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-6 flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-lg border border-[#232A32]">
              <img src={pfp} alt="Ankit Kumar Gurjar" className="h-full w-full object-cover" loading="eager" />
            </div>
            <span className="font-['JetBrains_Mono'] text-xs tracking-wide text-[#8B96A3]">
              <span className="text-[#7EE787]">$</span> whoami
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-['Space_Grotesk'] text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Backend systems that hold up when it's not a demo anymore.
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-lg text-lg leading-relaxed text-[#8B96A3]">
            I'm Ankit — a Java / Spring Boot developer building secure APIs and backend systems
            for startups, plus complete, production-ready websites for local businesses.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-2">
            {STACK.map((s) => (
              <span
                key={s}
                className="flex items-center gap-1.5 rounded-md border border-[#232A32] bg-[#12161B] px-3 py-1.5 font-['JetBrains_Mono'] text-xs text-[#C4CBD2]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#7EE787] px-6 py-3.5 font-['Space_Grotesk'] text-sm font-semibold text-[#0B0E11] transition-transform hover:scale-[1.02]"
            >
              Fix or Build Backend APIs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-[#232A32] px-6 py-3.5 font-['Space_Grotesk'] text-sm font-semibold text-[#E6E9EC] transition-colors hover:border-[#7EE787]/50 hover:text-[#7EE787]"
            >
              Build a Complete Website
            </a>
            <a
              href="/resume.pdf"
              download="Ankit_Kumar_Gurjar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[#232A32] px-5 py-3.5 text-sm font-medium text-[#8B96A3] transition-colors hover:text-[#E6E9EC]"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/ankitdoi-coder', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ankit-kumar-gurjar/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ankitdoi82@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#232A32] text-[#8B96A3] transition-colors hover:border-[#7EE787]/50 hover:text-[#7EE787]"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: signature terminal panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-[#232A32] bg-[#0F1317] shadow-[0_0_0_1px_rgba(126,231,135,0.06)]">
            <div className="flex items-center justify-between border-b border-[#232A32] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3A424B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3A424B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3A424B]" />
              </div>
              <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[11px] text-[#7EE787]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7EE787]" />
                200 OK · 42ms
              </span>
            </div>

            <div className="p-5 font-['JetBrains_Mono'] text-[13px] leading-relaxed">
              <p className="text-[#8B96A3]">
                <span className="text-[#7EE787]">$</span> curl -s api.ankit.dev/profile | jq
              </p>
              <pre className="mt-3 whitespace-pre-wrap text-[#C4CBD2]">
{`{
  "name": "Ankit Kumar Gurjar",
  "role": "Backend Developer",
  "focus": ["Spring Boot", "REST APIs", "Redis"],
  "also_ships": "full business websites",
  "status": "production-ready"
}`}
              </pre>
              <p className="mt-3 text-[#8B96A3]">
                <span className="text-[#7EE787]">$</span>{' '}
                <span className="inline-block h-3.5 w-2 animate-pulse bg-[#7EE787]/70 align-middle" />
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-[#232A32] bg-[#12161B] px-5 py-4">
            <div>
              <div className="font-['Space_Grotesk'] text-lg font-semibold text-white">3+ yrs</div>
              <div className="font-['JetBrains_Mono'] text-[11px] text-[#8B96A3]">production experience</div>
            </div>
            <div className="h-8 w-px bg-[#232A32]" />
            <div>
              <div className="font-['Space_Grotesk'] text-lg font-semibold text-white">4</div>
              <div className="font-['JetBrains_Mono'] text-[11px] text-[#8B96A3]">sites delivered</div>
            </div>
            <div className="h-8 w-px bg-[#232A32]" />
            <div>
              <div className="font-['Space_Grotesk'] text-lg font-semibold text-[#7EE787]">100%</div>
              <div className="font-['JetBrains_Mono'] text-[11px] text-[#8B96A3]">uptime record</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}