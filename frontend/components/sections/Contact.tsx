'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const apiUrl = '/api';
      await axios.post(`${apiUrl}/contact`, data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error: any) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
      if (error.response && error.response.data && error.response.data.details) {
        setErrorMessage(error.response.data.details);
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
      setTimeout(() => setSubmitStatus('idle'), 15000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-sky-light to-white">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can transform your manufacturing operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {[
            {
              icon: Mail,
              title: 'Email',
              value: 'sales@adhrittechnologies.in',
            },
            {
              icon: Phone,
              title: 'Phone',
              value: '+91-8796091105',
            },
            {
              icon: Globe,
              title: 'Website',
              value: 'www.adhrittechnologies.in',
            },
          ].map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card text-center"
            >
              <contact.icon className="w-10 md:w-12 h-10 md:h-12 text-sky-primary mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-deep-blue mb-1 md:mb-2 text-sm md:text-base">{contact.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm break-all">{contact.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label className="block text-xs md:text-sm font-medium text-deep-blue mb-1.5 md:mb-2">
                Full Name *
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-primary text-sm md:text-base"
                placeholder="Your name"
              />
              {errors.name && <span className="text-red-500 text-xs md:text-sm">{errors.name.message}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-deep-blue mb-1.5 md:mb-2">
                  Email *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
                  })}
                  type="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-primary text-sm md:text-base"
                  placeholder="your@email.com"
                />
                {errors.email && <span className="text-red-500 text-xs md:text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-deep-blue mb-1.5 md:mb-2">
                  Phone
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-primary text-sm md:text-base"
                  placeholder="+91 (0) 123 456 7890"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-deep-blue mb-1.5 md:mb-2">
                Company
              </label>
              <input
                {...register('company')}
                type="text"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-primary text-sm md:text-base"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-deep-blue mb-1.5 md:mb-2">
                Message *
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-primary resize-none text-sm md:text-base"
                placeholder="Tell us about your project..."
              ></textarea>
              {errors.message && <span className="text-red-500 text-xs md:text-sm">{errors.message.message}</span>}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </motion.button>

            {submitStatus === 'success' && (
              <div className="p-3 md:p-4 bg-green-100 text-green-800 rounded-lg text-sm md:text-base">
                ✓ Message sent successfully! We'll be in touch soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 md:p-4 bg-red-100 text-red-800 rounded-lg whitespace-pre-wrap break-words text-xs md:text-sm">
                ✗ {errorMessage}
              </div>
            )}
          </motion.form>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-deep-blue mb-3 md:mb-4">Why Contact Us?</h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Free consultation on your automation needs',
                  'Customized proposal within 48 hours',
                  'Dedicated project manager for your journey',
                  'Ongoing support and maintenance',
                  'Access to our technical expertise',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-sky-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-sky-primary">
              <h4 className="font-bold text-deep-blue mb-3">Response Time</h4>
              <p className="text-gray-600">
                We typically respond to inquiries within <span className="font-bold">24 hours</span>. For urgent matters, call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
