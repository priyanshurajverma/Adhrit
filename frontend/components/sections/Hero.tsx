'use client';

import { motion } from 'framer-motion';
import { Zap, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-sky-light via-white to-sky-light pt-24 md:pt-20 overflow-hidden flex items-center">
      {/* Animated Background Elements - Constrained to viewport */}
      <div className="absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-sky-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-10 -right-20 w-48 h-48 md:w-72 md:h-72 bg-teal-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6 md:space-y-8 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="leading-tight text-deep-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming Industries with{' '}
            <span className="bg-gradient-to-r from-sky-primary to-teal-accent bg-clip-text text-transparent">
              IIOT, Digitalization & Smart Automation
            </span>
          </h1>

          <div className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl space-y-3 md:space-y-4">
            <p>
              At Adhrit Technologies, we bridge the gap between software intelligence and industrial control systems. From writing efficient code to deploying robust automation solutions, we deliver end-to-end digital transformation for modern industries.
            </p>
            <p>
              With 20+ years of combined industry experience, we bring deep domain expertise, practical implementation knowledge, and proven engineering capabilities to every project.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 md:gap-4 pt-4 md:pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us <ChevronRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-sm md:text-base"
              onClick={() => {
                const solutionsSection = document.getElementById('solutions');
                if (solutionsSection) {
                  solutionsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Solutions
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8">
            {[
              { value: '500+', label: 'Projects' },
              { value: '50+', label: 'Clients' },
              { value: '20+', label: 'Years Experience' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-xl md:text-2xl font-bold text-deep-blue">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full hidden md:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Image
              src="/Image2.jpeg"
              alt="Manufacturing Solution"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
              alt="Manufacturing Solution"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
