import { bookingContent } from '@/app/constants';
import { BookingProcessProps } from '@/app/models';
import { MousePointerClick, User, Image, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';


const BookingProcess = ({ language, onBookingClick }: BookingProcessProps) => {
  const t = bookingContent[language];
  const icons = [MousePointerClick, User, Image, CheckCircle];

  return (
    <section className="py-24 px-6 bg-[#1a1a1a] relative overflow-hidden" id="booking-process">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F1B111] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F1B111] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair text-center mb-20 text-white"
        >
          {t.title}
        </motion.h2>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection lines */}
          <div className="absolute top-15 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-transparent via-[#F1B111]/30 to-transparent" />

          <div className="grid grid-cols-4 gap-8">
            {t.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-30 h-30 rounded-full bg-linear-to-br from-[#F1B111]/20 to-[#F1B111]/5 border-2 border-[#F1B111] flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-12 h-12 text-[#F1B111]" strokeWidth={1.5} />
                    </div>
                    {/* Step number */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F1B111] text-black font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="font-playfair text-lg mb-3 text-white min-h-14 flex items-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Process Flow */}
        <div className="lg:hidden space-y-8 mb-16">
          {t.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                {/* Icon container */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#F1B111]/20 to-[#F1B111]/5 border-2 border-[#F1B111] flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-[#F1B111]" strokeWidth={1.5} />
                  </div>
                  {/* Step number */}
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#F1B111] text-black font-bold text-xs flex items-center justify-center">
                    {index + 1}
                  </div>
                  {/* Vertical line connector (except for last item) */}
                  {index < t.steps.length - 1 && (
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-linear-to-b from-[#F1B111]/30 to-transparent" />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 pt-2">
                  <h3 className="font-playfair text-xl mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            onClick={onBookingClick}
            className="group relative px-12 py-4 bg-[#F1B111] text-black font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(241,177,17,0.5)]"
          >
            <span className="relative z-10">{t.button}</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#F1B111] via-[#FFD700] to-[#F1B111] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingProcess;
