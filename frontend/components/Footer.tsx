'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Services', 'Solutions', 'Technology', 'Industries'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
    Social: [
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Facebook, href: '#', label: 'Facebook' },
      { icon: Twitter, href: '#', label: 'Twitter' },
    ],
  };

  return (
    <footer className="bg-deep-blue text-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-primary to-teal-accent bg-clip-text text-transparent">
                ADHRIT
              </h3>
            </div>
            <p className="text-gray-300">Transforming manufacturing through intelligent automation and digital solutions.</p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).slice(0, 3).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={typeof link === 'string' ? link : `link-${i}`}>
                    <a href="#" className="text-gray-300 hover:text-sky-primary transition-colors">
                      {typeof link === 'string' ? link : (link as any).label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="gradient-divider mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-sky-primary" />
              <span>info@adhrittechnologies.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-sky-primary" />
              <span>+91 (0) 1234 567890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-sky-primary" />
              <span>India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {footerLinks.Social.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-sky-primary bg-opacity-20 p-3 rounded-full hover:bg-sky-primary hover:bg-opacity-40 transition-colors"
                title={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {currentYear} Adhrit Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
