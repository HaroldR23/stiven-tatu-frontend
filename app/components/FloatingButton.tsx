import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, CalendarDays } from 'lucide-react';
import { FloatingHelpButtonProps } from '../models';
import { floatingContent, whatsappUrl } from '../constants';


const FloatingHelpButton = ({ language, onBookingClick }: FloatingHelpButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = floatingContent[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsApp = () => {
    const message = t.whatsappMessage;
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFormClick = () => {
    setIsOpen(false);
    onBookingClick();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          className="fixed bottom-6 right-6 z-9999"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Help Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 bg-[#151515] rounded-2xl shadow-2xl shadow-black/50 p-6 mb-2 w-80 border border-white/10"
              >
                <div className="mb-5">
                  <h3 className="text-[#F1B111] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#a0a0a0]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.subtitle}
                  </p>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02]"
                >
                  <MessageCircle size={20} />
                  {t.whatsapp}
                </button>

                <button
                  onClick={handleFormClick}
                  className="w-full mt-3 bg-[#F1B111] hover:bg-[#d9a010] text-[#0a0a0a] px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02]"
                >
                  <CalendarDays size={20} />
                  {t.form}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.div className="relative">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-16 h-16 bg-[#F1B111] rounded-full shadow-2xl shadow-[#F1B111]/30 flex items-center justify-center text-[#0a0a0a] hover:shadow-[0_10px_40px_rgba(241,177,17,0.4)] transition-all duration-300"
              style={{ zIndex: 10000 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={28} strokeWidth={2.5} /> : <MessageCircle size={28} strokeWidth={2.5} />}
              </motion.div>
            </motion.button>

            {/* Pulse Effect */}
            {!isOpen && (
              <motion.div
                className="absolute inset-0 bg-[#F1B111] rounded-full pointer-events-none"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingHelpButton;
