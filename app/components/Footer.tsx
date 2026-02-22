"use client";

import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Icon } from 'lucide-react';
import usePreferences from '../hooks/usePreferences';
import { footerContent, networkLinks, studyName } from '../constants';

const Footer = () => {
  const { language } = usePreferences();



  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl tracking-wider"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {studyName[0]}<span className="text-accent">{studyName[1]}</span>
          </motion.div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm italic">{footerContent[language].tagline}</p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {networkLinks.map((network, index) => (
              <motion.a
                key={index}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-accent hover:text-accent transition-all"
              >
                <network.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10"></div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">{footerContent[language].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
