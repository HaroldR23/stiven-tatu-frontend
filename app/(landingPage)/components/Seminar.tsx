import { motion } from 'motion/react';
import { GraduationCap, Star, Users, ArrowRight, Zap } from 'lucide-react';
import { SeminarSectionProps } from '@/app/models';
import { useRouter } from 'next/navigation';
import { useInView } from '@/app/hooks/useInView';
import { SeminarSecionContent } from '@/app/constants';



const SeminarSection = ({ language }: SeminarSectionProps) => {
  const navigation = useRouter();
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const c = SeminarSecionContent[language];

  return (
    <section
      id="seminar"
      ref={ref}
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)' }}
    >
      {/* Decorative golden accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #F1B111, transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(241,177,17,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: '#F1B111' }}
            >
              {c.eyebrow}
            </span>

            <h2
              className="text-4xl sm:text-5xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)', color: '#fff' }}
            >
              {c.title}
            </h2>

            <div className="w-16 h-0.5 mb-6" style={{ background: '#F1B111' }} />

            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              {c.subtitle}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic border-l-2 pl-4" style={{ borderColor: '#F1B111' }}>
              "{c.teaser}"
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigation.push('/seminario')}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: '#F1B111',
                color: '#000',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {c.cta}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {c.highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex flex-col items-center justify-center p-8 border text-center"
                  style={{
                    borderColor: 'rgba(241,177,17,0.18)',
                    background: 'rgba(241,177,17,0.03)',
                  }}
                >
                  <Icon className="w-8 h-8 mb-3" style={{ color: '#F1B111' }} />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(241,177,17,0.3), transparent)' }}
      />
    </section>
  );
}

export default SeminarSection;
