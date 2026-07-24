import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative border-t border-[#232A32] bg-[#0B0E11] px-4 py-12">
            <div className="relative mx-auto max-w-5xl">
                <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7EE787]">
                            <Code2 className="h-5 w-5 text-[#0B0E11]" />
                        </div>
                        <span className="font-['Space_Grotesk'] text-xl font-semibold text-white">
                            Ankit Kumar Gurjar
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex gap-3"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/ankitdoi-coder', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/ankit-kumar-gurjar/', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:ankitdoi82@gmail.com', label: 'Email' }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-[#232A32] bg-[#12161B] p-3 text-[#8B96A3] transition-all duration-300 hover:border-[#7EE787]/40 hover:text-[#7EE787]"
                                aria-label={social.label}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="border-t border-[#232A32] pt-8 text-center"
                >
                    <p className="mb-2 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                        // built with react, tailwind css & framer motion
                    </p>
                    <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-[#8B96A3]">
                        © {new Date().getFullYear()} All rights reserved
                        <span className="inline-flex items-center gap-1">
                            • Made with <Heart className="h-4 w-4 fill-[#7EE787] text-[#7EE787]" /> by Ankit Kumar Gurjar (Software Engineer)
                        </span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}