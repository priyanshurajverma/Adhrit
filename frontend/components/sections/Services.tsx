'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Wrench,
  Camera,
  Network,
  Zap,
  Globe,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Network,
      title: 'Industrial IoT (IIoT)',
      desc: 'Connected devices, data acquisition, and real-time analytics platforms',
    },
    {
      icon: Globe,
      title: 'Digitalization',
      desc: 'Complete digital overhaul of manufacturing operations aligned with Industry 4.0',
    },
    {
      icon: Cpu,
      title: 'Industrial Automation',
      desc: 'End-to-end automation solutions for smart manufacturing processes',
    },
    {
      icon: Wrench,
      title: 'Machine Retrofit & Upgrades',
      desc: 'Modernize existing machinery with advanced control systems',
    },
    {
      icon: Camera,
      title: 'Inspection & Vision Systems',
      desc: 'AI-powered visual inspection and quality control systems',
    },
    {
      icon: Zap,
      title: 'IT-OT Integration',
      desc: 'Seamless bridging of software intelligence and industrial control systems',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section-padding bg-sky-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive automation and digital transformation solutions for modern manufacturing
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-4 bg-sky-primary bg-opacity-20 rounded-lg mb-4"
              >
                <service.icon size={32} className="text-sky-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-deep-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
              <motion.div
                className="mt-4 flex items-center gap-2 text-sky-primary font-semibold cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-gradient-to-r from-deep-blue to-teal-accent rounded-xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Let our experts analyze your current setup and create a customized automation strategy tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-deep-blue px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
