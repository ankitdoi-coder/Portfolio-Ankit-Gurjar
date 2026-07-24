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
  },
  {
    label: 'Call',
    icon: Phone,
    href: 'tel:+919352134907',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:ankitdoi82@gmail.com',
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
                <span className="hidden whitespace-nowrap rounded-lg border border-[#232A32] bg-[#12161B] px-3 py-1.5 font-['JetBrains_Mono'] text-xs text-[#8B96A3] shadow-lg sm:block">
                  {action.label}
                </span>
                <div className="rounded-full border border-[#232A32] bg-[#12161B] p-3.5 shadow-lg shadow-black/30 transition-colors duration-300 group-hover:border-[#7EE787]/40">
                  <action.icon className="h-5 w-5 text-[#7EE787]" />
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
        className="relative rounded-full bg-[#7EE787] p-4 shadow-xl shadow-[#7EE787]/20"
      >
        {!isOpen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#7EE787]/60"></span>
        )}
        <span className="relative block">
          {isOpen ? <X className="h-6 w-6 text-[#0B0E11]" /> : <MessageCircle className="h-6 w-6 text-[#0B0E11]" />}
        </span>
      </motion.button>
    </div>
  );
}