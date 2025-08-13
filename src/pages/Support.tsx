import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ChevronDown, ChevronUp, Send, ExternalLink } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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

  const faqs = [
    {
      question: 'How do I invite Moonveil to my server?',
      answer: 'Click the "Invite Bot" button and select the server you want to add Moonveil to. Make sure you have the "Manage Server" permission on that server.',
    },
    {
      question: 'What permissions does Moonveil need?',
      answer: 'Moonveil requires basic permissions like Send Messages, Read Message History, and Embed Links. Additional features may require permissions like Manage Roles, Manage Channels, or Voice Channel permissions.',
    },
    {
      question: 'Is Moonveil free to use?',
      answer: 'Yes! Moonveil offers a comprehensive free tier with most features. We also offer premium subscriptions for advanced features and priority support.',
    },
    {
      question: 'How can I customize Moonveil for my server?',
      answer: 'Use the web dashboard or in-server commands to configure Moonveil. You can set up custom prefixes, enable/disable modules, and configure moderation settings.',
    },
    {
      question: 'What should I do if Moonveil is offline?',
      answer: 'First, check our status page for any ongoing maintenance. If there are no issues reported, try removing and re-inviting the bot, or contact our support team.',
    },
    {
      question: 'How do I report a bug or suggest a feature?',
      answer: 'Join our Discord support server or use the contact form below. We actively review all feedback and bug reports from our community.',
    },
    {
      question: 'Can I use Moonveil in multiple servers?',
      answer: 'Absolutely! Moonveil can be added to as many servers as you want. Each server has its own independent configuration and settings.',
    },
    {
      question: 'How often is Moonveil updated?',
      answer: 'We regularly update Moonveil with new features, bug fixes, and improvements. Major updates are announced in our Discord server and changelog.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get help with Moonveil, report issues, or connect with our community support team.
          </p>
        </motion.div>

        {/* Quick Help Cards */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="group p-8 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Discord Support Server</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Join our official Discord server for real-time support, community discussions, and the latest updates. Our team and community are ready to help!
            </p>
            <a
              href="https://discord.gg/moonveil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group-hover:scale-105"
            >
              Join Server
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="group p-8 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Email Support</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Prefer email? Send us a detailed message using the contact form below, and we'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group-hover:scale-105"
            >
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} id="contact-form">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-primary/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-primary/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-primary/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                  placeholder="What can we help you with?"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-primary/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Please describe your issue or question in detail..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Support;