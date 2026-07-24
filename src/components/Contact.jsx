// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are missing. Please check your .env file.");
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error('FAILED...', error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactItems = [
        { icon: Mail, label: 'Email', value: 'ankitdoi82@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+919352134907' },
        { icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan' }
    ];

    return (
        <section id="contact" className="relative bg-[#0B0E11] px-4 py-24 sm:px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7EE787]" />
                        // contact
                    </div>
                    <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold text-white sm:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mt-3 max-w-xl text-[#8B96A3]">
                        Two ways to work with me — pick the one that fits.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                    <div className="rounded-2xl border border-[#232A32] bg-[#12161B] p-6 transition-colors hover:border-[#7EE787]/25">
                        <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                            Looking for a Java Developer?
                        </h3>
                        <p className="mt-2 text-sm text-[#8B96A3]">
                            Let's connect — I'm open to Java / Spring Boot backend and full-stack roles.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-[#232A32] bg-[#12161B] p-6 transition-colors hover:border-[#7EE787]/25">
                        <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white">
                            Have a website or software idea?
                        </h3>
                        <p className="mt-2 text-sm text-[#8B96A3]">
                            Let's build it — from a business site to a custom full-stack application.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {contactItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                className="relative border-l-2 border-[#232A32] pl-8"
                            >
                                <div className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full bg-[#7EE787]">
                                    <item.icon className="h-3 w-3 text-[#0B0E11]" />
                                </div>
                                <div className="rounded-2xl border border-[#232A32] bg-[#12161B] p-5 transition-colors hover:border-[#7EE787]/25">
                                    <p className="font-['JetBrains_Mono'] text-xs text-[#7EE787]">{item.label}</p>
                                    <p className="mt-1 text-[#C4CBD2]">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="mt-8 rounded-2xl border border-dashed border-[#232A32] p-6"
                        >
                            <p className="font-['JetBrains_Mono'] text-xs text-[#7EE787]">// open for opportunities</p>
                            <p className="mt-3 text-sm leading-relaxed text-[#8B96A3]">
                                I help businesses fix and extend Spring Boot applications.
                            </p>
                            <ul className="mt-4 space-y-2">
                                {[
                                    'Bug fixing & feature additions',
                                    'REST API development',
                                    'Database & performance optimization',
                                    'Angular + Backend integration'
                                ].map((line) => (
                                    <li key={line} className="flex items-start gap-3 text-sm text-[#8B96A3]">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EE787]" />
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm leading-relaxed text-[#8B96A3]">
                                I focus on fast turnaround and clear communication.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-2xl border border-[#232A32] bg-[#12161B] p-6 sm:p-8"
                        >
                            <div>
                                <label htmlFor="name" className="mb-2 block font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                                    name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-[#232A32] bg-[#0B0E11] px-4 py-3 text-white placeholder-[#4B535C] transition-colors duration-300 focus:border-[#7EE787] focus:outline-none focus:ring-2 focus:ring-[#7EE787]/20"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                                    email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-[#232A32] bg-[#0B0E11] px-4 py-3 text-white placeholder-[#4B535C] transition-colors duration-300 focus:border-[#7EE787] focus:outline-none focus:ring-2 focus:ring-[#7EE787]/20"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block font-['JetBrains_Mono'] text-xs text-[#7EE787]">
                                    message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full resize-none rounded-xl border border-[#232A32] bg-[#0B0E11] px-4 py-3 text-white placeholder-[#4B535C] transition-colors duration-300 focus:border-[#7EE787] focus:outline-none focus:ring-2 focus:ring-[#7EE787]/20"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group/btn flex w-full items-center justify-center gap-3 rounded-xl bg-[#7EE787] px-8 py-4 font-['Space_Grotesk'] text-base font-semibold text-[#0B0E11] transition-all duration-300 hover:bg-[#8FF098] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-center font-['JetBrains_Mono'] text-sm text-[#7EE787]">
                                    message sent — thanks, I'll reply soon.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-center font-['JetBrains_Mono'] text-sm text-[#F87171]">
                                    something went wrong — please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}