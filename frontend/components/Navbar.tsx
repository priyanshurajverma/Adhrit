'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 left-0 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="/adhrit-logo.svg"
            alt="Adhrit Technologies"
            width={180}
            height={45}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="text-gray-700 hover:text-sky-primary transition-colors font-medium text-sm lg:text-base"
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-sm px-6 py-2"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-deep-blue flex-shrink-0 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Fixed Position to prevent layout shift */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden fixed left-0 right-0 top-16 bg-white shadow-lg z-40 max-w-full"
        >
          <div className="flex flex-col gap-2 px-4 py-4 max-w-full overflow-x-hidden">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-gray-700 hover:text-sky-primary font-medium py-2 px-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary w-full py-2 text-sm" onClick={() => setIsOpen(false)}>
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
