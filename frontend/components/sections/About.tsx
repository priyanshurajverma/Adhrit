'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Adhrit Technologies</h2>
          <p className="section-subtitle">
            Leading the digital transformation in manufacturing with innovative automation solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'Empower manufacturers with intelligent automation to maximize efficiency, reduce downtime, and achieve sustainable growth.',
            },
            {
              icon: Lightbulb,
              title: 'Our Vision',
              desc: 'Create a future where smart factories operate seamlessly, driving innovation and productivity across the globe.',
            },
            {
              icon: CheckCircle,
              title: 'Our Commitment',
              desc: 'Deliver world-class solutions with unparalleled expertise, customer focus, and continuous innovation.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card"
            >
              <item.icon className="w-12 h-12 text-sky-primary mb-4" />
              <h3 className="text-xl font-bold text-deep-blue mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-gradient-to-r from-sky-light to-white rounded-xl border border-sky-primary border-opacity-30"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Why Choose Adhrit?</h3>
              <ul className="space-y-3">
                {[
                  'Proven expertise with 10+ years in industrial automation',
                  'Certified partnerships with industry leaders (EXOR, Eurotherm, Mitsubishi)',
                  'Customized solutions tailored to your manufacturing needs',
                  'End-to-end support from consultation to implementation',
                  'Dedicated team of engineers and technical specialists',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle size={20} className="text-teal-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-br from-sky-primary to-teal-accent rounded-lg p-8 text-white flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-lg">Years of Excellence in Industrial Automation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
