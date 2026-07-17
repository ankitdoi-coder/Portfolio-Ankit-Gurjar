// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, Loader2 } from 'lucide-react';
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

    return (
        <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>

            <div className="relative max-w-6xl mx-auto">
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
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Let's Connect
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Two ways to work with me — pick the one that fits.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                >
                    <div className="p-6 bg-slate-800/80 border border-cyan-500/30 rounded-2xl">
                        <h3 className="text-lg font-bold text-cyan-400 mb-2">Looking for a Java Developer?</h3>
                        <p className="text-slate-400 text-sm">Let's connect — I'm open to Java / Spring Boot backend and full-stack roles.</p>
                    </div>
                    <div className="p-6 bg-slate-800/80 border border-orange-500/30 rounded-2xl">
                        <h3 className="text-lg font-bold text-orange-400 mb-2">Have a website or software idea?</h3>
                        <p className="text-slate-400 text-sm">Let's build it — from a business site to a custom full-stack application.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'ankitdoi82@gmail.com', gradient: 'from-cyan-500 to-blue-600' },
                                { icon: Phone, label: 'Phone', value: '+919352134907', gradient: 'from-purple-500 to-pink-600' },
                                { icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan', gradient: 'from-green-500 to-emerald-600' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                    <div className="relative flex items-start gap-4 p-6 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
                                        <div className={`p-4 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                                            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

                            <div className="relative p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700">
                                <h4 className="font-bold text-xl mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Open for Opportunities
                                </h4>
                                <p className="text-slate-400 leading-relaxed">
                                    I help businesses fix and extend Spring Boot applications.
                                    <br />

                                    ✔ Bug fixing & feature additions
                                    <br />
                                    ✔ REST API development
                                    <br />
                                    ✔ Database & performance optimization <br />
                                    ✔ Angular + Backend integration <br />

                                    I focus on fast turnaround and clear communication.

                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

                        <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6 p-8 bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold mb-3 text-slate-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-slate-900/80 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-slate-500"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold mb-3 text-slate-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-slate-900/80 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-slate-500"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold mb-3 text-slate-300">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-5 py-4 bg-slate-900/80 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none text-white placeholder-slate-500"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group/btn relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            Send Message
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-center font-medium">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
