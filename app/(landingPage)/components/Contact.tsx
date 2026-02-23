import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { contactContent, contactItems } from '@/app/constants';
import { ContactProps } from '@/app/models';


const Contact = ({ language }: ContactProps) => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            {contactContent[language].title}
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">{contactContent[language].subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactItems(language).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  href={item.isLink ? `${item.linkPrefix}${item.value.replace(/[\s+\(\)\-]/g, '')}` : undefined}
                  key={item.label}
                  target={item.isLink ? '_blank' : undefined}
                  rel={item.isLink ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-card border border-white/5 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-white/5 overflow-hidden aspect-4/3 lg:aspect-auto rounded-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.088996040979!2d-58.38055779472944!3d-34.622559767156694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2d125e1c01%3A0xacd97607979875ab!2sSan%20Telmo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1771804240698!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="eager" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Stiventatu - San Telmo, Buenos Aires"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
