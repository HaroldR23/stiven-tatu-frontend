import { motion } from 'motion/react';
import { BookOpen, Pen, Shield, Award } from 'lucide-react';
import { coursesContent } from '@/app/constants';
import { CoursesProps } from '@/app/models';


const Courses = ({ language }: CoursesProps) => {
  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            {coursesContent[language].title}
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">{coursesContent[language].subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {coursesContent[language].courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card border border-white/5 p-8 hover:border-accent/30 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6"
                >
                  <Icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-2xl mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Duración: </span>
                    <span className="text-accent">{course.duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Nivel: </span>
                    <span className="text-accent">{course.level}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
          >
            {coursesContent[language].cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
