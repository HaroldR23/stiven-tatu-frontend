"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import usePreferences from '../hooks/usePreferences';
import { Languages } from '../models';
import { navItems, sections, studyName } from '../constants';

const Header = () => {
  const { language, setLanguage } = usePreferences();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-2xl tracking-wider"
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {studyName[0]}<span className="text-accent">{studyName[1]}</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(sections[index])}
                className="text-sm tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-secondary px-3 py-1.5 rounded-full">
              <button
                onClick={() => setLanguage(Languages.SPANISH)}
                className={`text-xs ${language === Languages.SPANISH ? 'text-accent' : 'text-muted-foreground'}`}
              >
                ES
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage(Languages.ENGLISH)}
                className={`text-xs ${language === Languages.ENGLISH ? 'text-accent' : 'text-muted-foreground'}`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(sections[index])}
                className="block w-full text-left py-3 px-4 hover:bg-secondary transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;
