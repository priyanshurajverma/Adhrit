'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Services', href: '/#services' },
      { label: 'Solutions', href: '/#solutions' },
      { label: 'Technology', href: '/#technology' },
    ],
    Company: [
      { label: 'About', href: '/#about' },
      { label: 'Contact', href: '/#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
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
              <Image
                src="/adhrit-logo.svg"
                alt="Adhrit Technologies"
                width={220}
                height={55}
                className="h-10 md:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300">From Coding to Control Systems</p>
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
                  <li key={i}>
                    <a href={link.href} className="text-gray-300 hover:text-sky-primary transition-colors">
                      {link.label}
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
              <span>sales@adhrittechnologies.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-sky-primary" />
              <span>+91-8796091105</span>
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
