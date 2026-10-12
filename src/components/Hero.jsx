// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Copy, Check } from 'lucide-react';
import pfp from '../assets/pfp.png';

const STACK = ['Java 17', 'Spring Boot 3', 'WebSockets', 'Spring Events', 'PostgreSQL', 'Redis', 'REST APIs'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('curl -s https://api.ankit.dev/profile | jq');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0E11] px-4 pt-28 pb-16 text-[#E6E9EC] sm:px-6">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#232A32 1px, transparent 1px), linear-gradient(90deg, #232A32 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      
      {/* Animated glowing ambient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#7EE787]/20 blur-[130px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#7EE787]/[0.06] to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* LEFT: pitch */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-4 flex flex-wrap items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-lg border border-[#232A32]">
              <img src={pfp} alt="Ankit Kumar Gurjar" className="h-full w-full object-cover" loading="eager" />
            </div>
            <span className="font-['JetBrains_Mono'] text-xs tracking-wide text-[#8B96A3]">
              <span className="text-[#7EE787]">$</span> whoami
            </span>

            {/* Live Role Pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7EE787]/30 bg-[#7EE787]/10 px-3 py-1 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7EE787] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7EE787]" />
              </span>
              Building Real-Time Trading @ Navrasa
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-['Space_Grotesk'] text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Backend systems that hold up when it's not a demo anymore.
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-lg text-lg leading-relaxed text-[#8B96A3]">
            I'm Ankit — a Java / Spring Boot engineer specializing in high-throughput real-time systems, 
            WebSockets, and secure REST APIs that perform under heavy production load.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-2">
            {STACK.map((s) => (
              <motion.span
                key={s}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex cursor-default items-center gap-1.5 rounded-md border border-[#232A32] bg-[#12161B] px-3 py-1.5 font-['JetBrains_Mono'] text-xs text-[#C4CBD2] transition-colors hover:border-[#7EE787]/40 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
                {s}
              </motion.span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#7EE787] px-6 py-3.5 font-['Space_Grotesk'] text-sm font-semibold text-[#0B0E11] shadow-lg shadow-[#7EE787]/20 transition-all hover:shadow-[#7EE787]/30"
            >
              Fix or Build Backend APIs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="rounded-lg border border-[#232A32] px-6 py-3.5 font-['Space_Grotesk'] text-sm font-semibold text-[#E6E9EC] transition-colors hover:border-[#7EE787]/50 hover:text-[#7EE787]"
            >
              Explore Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1mYUUA8vQKMGI79utD4Dt0d2X4OVzW7Lm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              download="Ankit_Kumar_Gurjar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[#232A32] px-5 py-3.5 text-sm font-medium text-[#8B96A3] transition-colors hover:text-[#E6E9EC]"
            >
              <Download className="h-4 w-4" /> Resume
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/ankitdoi-coder', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ankit-kumar-gurjar/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ankitdoi82@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-items-center rounded-lg border border-[#232A32] text-[#8B96A3] transition-colors hover:border-[#7EE787]/50 hover:text-[#7EE787]"
              >
                <Icon className="h-4.5 w-4.5" />
              </motion.a>
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
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A424B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A424B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3A424B]" />
                </div>
                <span className="ml-2 font-['JetBrains_Mono'] text-xs text-[#8B96A3]">terminal</span>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  title="Copy curl command"
                  className="flex items-center gap-1 rounded border border-[#232A32] bg-[#12161B] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] text-[#8B96A3] transition-colors hover:border-[#7EE787]/40 hover:text-[#7EE787]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-[#7EE787]" />
                      <span className="text-[#7EE787]">copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>copy curl</span>
                    </>
                  )}
                </button>
                <span className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[11px] text-[#7EE787]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7EE787]" />
                  200 OK · 42ms
                </span>
              </div>
            </div>

            <div className="p-5 font-['JetBrains_Mono'] text-[13px] leading-relaxed">
              <p className="text-[#8B96A3]">
                <span className="text-[#7EE787]">$</span> curl -s api.ankit.dev/profile | jq
              </p>
              <pre className="mt-3 whitespace-pre-wrap text-[#C4CBD2]">
{`{
  "name": "Ankit Kumar Gurjar",
  "role": "Backend Engineer",
  "company": "Navrasa IT Solutions",
  "focus": ["Spring Boot", "WebSockets", "Spring Events", "REST APIs"],
  "specialty": "Real-time trading & concurrency",
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
              <div className="font-['Space_Grotesk'] text-lg font-semibold text-white">1.5+ yrs</div>
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