import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

import { BookingModalProps, FormData } from '@/app/models';
import BookingForm from './BookingForm';
import { initFormData } from '@/app/constants';


const BookingModal = ({ isOpen, onClose, language }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initFormData);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData(initFormData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  const toggleStyle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter(s => s !== style)
        : [...prev.styles, style]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-card border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-white/10 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {!isSubmitted && (
              <>
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= s ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && <div className="w-8 h-0.5 bg-secondary mx-1" />}
                  </div>
                ))}
              </>
            )}
          </div>
          <button onClick={handleClose} className="hover:text-accent transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <BookingForm 
          step={step}
          language={language}
          onClose={handleClose}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          setStep={setStep}
          toggleStyle={toggleStyle}
        />
      </motion.div>
    </div>
  );
}

export default BookingModal;
