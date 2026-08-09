import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQContent } from '@/app/constants';
import { FAQProps } from '@/app/models';


const INITIAL_VISIBLE = 6;

const FAQ = ({ language }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allFaqs = FAQContent[language].faqs;
  const visibleFaqs = showAll ? allFaqs : allFaqs.slice(0, INITIAL_VISIBLE);
  const hasMore = allFaqs.length > INITIAL_VISIBLE;
 
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
          {visibleFaqs.map((faq, index) => (
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

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <span>
                {showAll
                  ? (language === 'es' ? 'Ver menos' : 'Show less')
                  : (language === 'es' ? 'Ver más preguntas' : 'Show more questions')}
              </span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
