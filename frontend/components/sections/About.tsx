'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">About Adhrit Technologies</h2>
          <div className="section-subtitle space-y-3 md:space-y-4 max-w-3xl mx-auto text-sm md:text-base">
            <p>Adhrit Technologies is an engineering-driven company focused on Industrial IoT (IIoT), digitalization, and automation solutions.</p>
            <p>We specialize in delivering end-to-end smart industrial systems—from data acquisition to intelligent decision-making platforms.</p>
            <p>We help industries transform conventional operations into smart, connected, and efficient factories aligned with Industry 4.0.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'To deliver innovative, efficient, and scalable industrial solutions—from coding to control systems.',
            },
            {
              icon: Lightbulb,
              title: 'Our Vision',
              desc: 'To lead industrial transformation by integrating digital intelligence with control systems.',
            },
            {
              icon: CheckCircle,
              title: 'What Makes Us Different',
              desc: 'Advanced software development (Python, Node.js), industrial automation expertise (PLC, SCADA, HMI), and seamless IT-OT integration capabilities.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card"
            >
              <item.icon className="w-10 md:w-12 h-10 md:h-12 text-sky-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-deep-blue mb-2 md:mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-sky-light to-white rounded-xl border border-sky-primary border-opacity-30"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-deep-blue mb-4">Why Choose Adhrit?</h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  '20+ years experience',
                  'Software + Automation expertise',
                  'Real shopfloor understanding',
                  'Custom-built solutions',
                  'ROI-focused approach',
                  'Reliable support',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle size={18} className="text-teal-accent flex-shrink-0 mt-0.5 md:mt-1" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gradient-to-br from-sky-primary to-teal-accent rounded-lg p-8 text-white flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-4xl font-bold">20+</p>
                <p className="text-lg">Years of Excellence in Industrial Automation & Software</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
