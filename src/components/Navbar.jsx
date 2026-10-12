// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import pfp from '../assets/pfp.png';

const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'freelance', href: '#freelance' },
    { name: 'experience', href: '#experience' },
    { name: 'contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 12);

            // Active section detection
            const sections = navLinks.map(l => l.name);
            const scrollPos = window.scrollY + 160;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Top Reading / Scroll Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7EE787] via-[#38BDF8] to-[#7EE787] origin-left z-[70]"
            />

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
                    scrolled ? 'border-[#232A32] bg-[#0B0E11]/90 backdrop-blur-lg' : 'border-transparent bg-transparent'
                }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex h-18 items-center justify-between py-3">
                        <a href="#home" className="group flex items-center gap-3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="h-10 w-10 overflow-hidden rounded-lg border border-[#232A32] transition-colors group-hover:border-[#7EE787]/50"
                            >
                                <img src={pfp} alt="Ankit Kumar Gurjar" className="h-full w-full object-cover" loading="eager" />
                            </motion.div>
                            <div className="leading-tight">
                                <div className="font-['Space_Grotesk'] text-base font-semibold text-white">
                                    Ankit Kumar Gurjar
                                </div>
                                <div className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] text-[#7EE787]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787] animate-pulse" />
                                    ~/backend-developer
                                </div>
                            </div>
                        </a>

                        <div className="hidden items-center gap-1 md:flex">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.name;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`group relative px-3.5 py-1.5 font-['JetBrains_Mono'] text-sm transition-colors duration-200 ${
                                            isActive ? 'text-white font-medium' : 'text-[#8B96A3] hover:text-[#E6E9EC]'
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNavPill"
                                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                                className="absolute inset-0 rounded-lg border border-[#7EE787]/30 bg-[#7EE787]/10"
                                            />
                                        )}
                                        <span className="relative z-10">
                                            <span className="text-[#7EE787]/60">/</span>
                                            {link.name}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="hidden items-center gap-3 md:flex">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://drive.google.com/file/d/1mYUUA8vQKMGI79utD4Dt0d2X4OVzW7Lm/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                download="Ankit_Kumar_Gurjar_Resume.pdf"
                                className="rounded-lg border border-[#232A32] px-5 py-2.5 font-['Space_Grotesk'] text-sm font-semibold text-[#E6E9EC] transition-colors hover:border-[#7EE787]/50 hover:text-[#7EE787]"
                            >
                                Resume
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                href="#contact"
                                className="rounded-lg bg-[#7EE787] px-5 py-2.5 font-['Space_Grotesk'] text-sm font-semibold text-[#0B0E11] shadow-lg shadow-[#7EE787]/15 transition-shadow hover:shadow-[#7EE787]/30"
                            >
                                Hire Me
                            </motion.a>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="grid h-11 w-11 place-items-center rounded-lg border border-[#232A32] text-[#E6E9EC] md:hidden"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pb-4 md:hidden"
                            >
                                <div className="space-y-1 border-t border-[#232A32] pt-3">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block rounded-lg px-3 py-3 font-['JetBrains_Mono'] text-sm transition-colors ${
                                                activeSection === link.name
                                                    ? 'bg-[#12161B] text-[#7EE787]'
                                                    : 'text-[#8B96A3] hover:bg-[#12161B] hover:text-white'
                                            }`}
                                        >
                                            <span className="text-[#7EE787]/70">/</span> {link.name}
                                        </a>
                                    ))}
                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="mt-2 block rounded-lg bg-[#7EE787] px-4 py-3 text-center font-['Space_Grotesk'] text-sm font-semibold text-[#0B0E11]"
                                    >
                                        Hire Me
                                    </a>
                                    <a
                                        href="https://drive.google.com/file/d/1mYUUA8vQKMGI79utD4Dt0d2X4OVzW7Lm/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer"
                                        download="Ankit_Kumar_Gurjar_Resume.pdf"
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-lg border border-[#232A32] px-4 py-3 text-center font-['Space_Grotesk'] text-sm font-semibold text-[#E6E9EC]"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
}