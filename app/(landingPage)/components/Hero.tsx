import { heroContent } from '@/app/constants';
import { HeroProps } from '@/app/models';
import { motion } from 'motion/react';


const Hero = ({ language, onBookingClick }: HeroProps) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/tattoo_video_desktop.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source
            src="/tattoo_video_mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black" />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {heroContent[language].title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 tracking-wide"
        >
          {heroContent[language].subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={onBookingClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-accent-foreground tracking-wide hover:bg-accent/90 min-w-50"
          >
            {heroContent[language].cta1}
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('reviews')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border border-white/30 tracking-wide hover:bg-white/5 min-w-50"
          >
            {heroContent[language].cta2}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
