import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get in touch via email',
      details: 'support@moonveil.bot',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageCircle,
      title: 'Discord Server',
      description: 'Join our community',
      details: 'discord.gg/moonveil',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Average response',
      details: '< 24 hours',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Coverage',
      description: 'Global support',
      details: 'Worldwide 24/7',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need help? We're here to assist you. Reach out through any of our channels.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r ${info.gradient} rounded-lg`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{info.description}</p>
              <p className="text-purple-400 font-medium">{info.details}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">
                    Inquiry Type
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card/30 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Please provide as much detail as possible..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Send className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Contact Us?</h2>
              <div className="space-y-4">
                {[
                  'Get personalized help with bot setup and configuration',
                  'Report bugs or issues you encounter with Moonveil',
                  'Request new features or suggest improvements',
                  'Inquire about partnership or integration opportunities',
                  'Get technical support for advanced use cases',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
              <p className="text-gray-300 mb-4">
                We strive to respond to all inquiries within 24 hours. For urgent technical issues, consider joining our Discord server for faster community-driven support.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-purple-400 font-medium">General Inquiries:</span>
                  <p className="text-gray-400">24-48 hours</p>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Technical Support:</span>
                  <p className="text-gray-400">12-24 hours</p>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Bug Reports:</span>
                  <p className="text-gray-400">6-12 hours</p>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Discord Support:</span>
                  <p className="text-gray-400">Real-time</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Before You Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Check our FAQ section for common questions</li>
                <li>• Search our Discord server for similar issues</li>
                <li>• Include relevant details like server ID, error messages</li>
                <li>• Describe the steps to reproduce any issues</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;