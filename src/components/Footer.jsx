import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative bg-slate-900 border-t border-slate-800 text-white py-12 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>

            <div className="relative max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                            <div className="relative p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Ankit Kumar Gurjar
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex gap-4"
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
                                className="group p-3 bg-slate-800/50 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center pt-8 border-t border-slate-800"
                >
                    <p className="text-slate-400 mb-2">
                        Built with React, Tailwind CSS, and Framer Motion
                    </p>
                    <p className="text-slate-500 flex items-center justify-center gap-2">
                        © {new Date().getFullYear()} All rights reserved
                        <span className="inline-flex items-center gap-1">
                            • Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Ankit Kumar Gurjar (Software Engineer)
                        </span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
