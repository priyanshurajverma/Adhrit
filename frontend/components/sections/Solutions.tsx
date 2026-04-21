'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Gauge,
  Wrench,
  AlertTriangle,
  Leaf,
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'OEE Improvement',
      desc: 'Increase Overall Equipment Effectiveness through data-driven insights and real-time monitoring.',
      metrics: '+35% Average Improvement',
    },
    {
      icon: Gauge,
      title: 'Productivity Optimization',
      desc: 'Streamline workflows and eliminate bottlenecks to maximize output and efficiency.',
      metrics: '+40% Output',
    },
    {
      icon: Wrench,
      title: 'Predictive Maintenance',
      desc: 'AI-powered maintenance scheduling reduces downtime and extends equipment lifespan.',
      metrics: '-60% Downtime',
    },
    {
      icon: AlertTriangle,
      title: 'EHS Management',
      desc: 'Comprehensive Environment, Health & Safety solutions for compliant operations.',
      metrics: '100% Compliance',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      desc: 'Reduce energy consumption and environmental impact while improving profitability.',
      metrics: '-30% Energy Use',
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Solutions & Expertise</h2>
          <p className="section-subtitle">
            Proven solutions delivering measurable results across manufacturing industries
          </p>
        </motion.div>

        <div className="space-y-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex gap-6 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-gradient-to-br from-sky-primary to-teal-accent rounded-lg text-white flex-shrink-0"
                  >
                    <solution.icon size={32} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-deep-blue mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.desc}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-sky-light px-6 py-3 rounded-lg text-center flex-shrink-0"
                >
                  <p className="text-sm text-gray-600">Average Result</p>
                  <p className="font-bold text-teal-accent text-lg">{solution.metrics}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
