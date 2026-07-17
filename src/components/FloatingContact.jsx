// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

// Uses the same phone/email already shown in Contact.jsx — update both
// places together if either one changes.
const actions = [
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/919352134907',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    label: 'Call',
    icon: Phone,
    href: 'tel:+919352134907',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:ankitdoi82@gmail.com',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div className="flex flex-col items-end gap-3">
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={action.label}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3"
              >
                <span className="hidden sm:block px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm font-medium text-slate-200 shadow-lg whitespace-nowrap">
                  {action.label}
                </span>
                <div className={`p-3.5 bg-gradient-to-br ${action.gradient} rounded-full shadow-lg shadow-black/30`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        className="relative p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-xl shadow-cyan-500/30"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-cyan-500/60 animate-ping"></span>
        )}
        <span className="relative block">
          {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
        </span>
      </motion.button>
    </div>
  );
}
