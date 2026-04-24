'use client';

import { motion } from 'framer-motion';
import {
  Factory,
  Zap,
  Pill,
  Package,
  Activity,
  Droplets,
} from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing',
      desc: 'General manufacturing and production facilities',
    },
    {
      icon: Zap,
      name: 'Automotive',
      desc: 'Automotive parts and assembly manufacturing',
    },
    {
      icon: Package,
      name: 'FMCG',
      desc: 'Fast-moving consumer goods production',
    },
    {
      icon: Pill,
      name: 'Pharmaceuticals',
      desc: 'Pharmaceutical and healthcare manufacturing',
    },
    {
      icon: Zap,
      name: 'Energy & Utilities',
      desc: 'Power generation, distribution, and smart grid automation',
    },
    {
      icon: Droplets,
      name: 'Process Industries',
      desc: 'Chemical, oil & gas, and continuous process manufacturing',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Proven expertise across diverse manufacturing sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="card"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="inline-block p-4 bg-sky-primary bg-opacity-20 rounded-lg mb-4"
              >
                <industry.icon size={32} className="text-sky-primary" />
              </motion.div>
              <h3 className="text-lg font-bold text-deep-blue mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
