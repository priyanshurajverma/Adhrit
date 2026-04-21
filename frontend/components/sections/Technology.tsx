'use client';

import { motion } from 'framer-motion';

export default function Technology() {
  const partners = [
    { name: 'EXOR', category: 'Industrial Visualization' },
    { name: 'Eurotherm', category: 'Process Control' },
    { name: 'Mitsubishi', category: 'Automation Systems' },
    { name: 'Control Techniques', category: 'Drive Systems' },
  ];

  return (
    <section id="technology" className="section-padding bg-sky-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technology & Partners</h2>
          <p className="section-subtitle">
            We work with industry-leading brands to deliver cutting-edge solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card h-48 flex flex-col items-center justify-center text-center bg-white"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-sky-primary to-teal-accent rounded-lg flex items-center justify-center text-white font-bold text-2xl mb-4">
                {partner.name.slice(0, 2)}
              </div>
              <h3 className="text-xl font-bold text-deep-blue">{partner.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{partner.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-white rounded-xl border-2 border-sky-primary"
        >
          <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Technology Stack</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Automation Platforms',
                items: ['PLC Programming', 'SCADA Systems', 'HMI Development'],
              },
              {
                title: 'IoT & Data',
                items: ['Real-time Sensors', 'Cloud Integration', 'Analytics Platform'],
              },
              {
                title: 'Quality & Vision',
                items: ['Machine Vision', 'Image Processing', 'AI Detection'],
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-bold text-deep-blue mb-3">{tech.title}</h4>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-gray-600 flex items-center gap-2">
                      <div className="w-2 h-2 bg-sky-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
