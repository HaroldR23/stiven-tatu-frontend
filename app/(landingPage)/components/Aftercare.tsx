import { motion } from 'motion/react';
import { AftercareProps } from '@/app/models';
import { aftercareContent } from '@/app/constants';

const Aftercare = ({ language }: AftercareProps) => {
  return (
    <section id="aftercare" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {aftercareContent[language].title}
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">{aftercareContent[language].subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aftercareContent[language].steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 border-2 border-accent/30 rounded-full"
                  >
                    <Icon className="w-10 h-10 text-accent" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 text-xs rounded-full">
                    {step.day}
                  </div>
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Aftercare;
