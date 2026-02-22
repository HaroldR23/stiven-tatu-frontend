import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQContent } from '@/app/constants';
import { FAQProps } from '@/app/models';


const FAQ = ({ language }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
              {FAQContent[language].title}
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </motion.div>

        <div className="space-y-4">
          {FAQContent[language].faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-accent shrink-0" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 mt-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
