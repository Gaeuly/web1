import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Music, TowerControl as GameController2, Users, MessageSquare, Bell, BarChart3, Settings, Crown, Zap, Heart, Star } from 'lucide-react';

const Features = () => {
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const features = [
    {
      icon: Shield,
      title: 'Advanced Moderation',
      description: 'Automatic spam detection, customizable filters, and intelligent auto-moderation to keep your server clean.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Music,
      title: 'High-Quality Music',
      description: 'Crystal clear audio streaming from multiple platforms with advanced queue management and DJ controls.',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: GameController2,
      title: 'Interactive Games',
      description: 'Built-in mini-games, trivia, and entertainment features to keep your community engaged and active.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Role Management',
      description: 'Sophisticated role assignment system with reaction roles, level-based roles, and custom triggers.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: MessageSquare,
      title: 'Smart Responses',
      description: 'AI-powered chatbot responses and custom command creation with advanced scripting capabilities.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Bell,
      title: 'Notification System',
      description: 'Smart notifications for events, announcements, and important server activities with customizable triggers.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive server analytics with member activity tracking and detailed engagement reports.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Intuitive setup process with web dashboard for easy configuration and real-time settings management.',
      gradient: 'from-slate-500 to-gray-500',
    },
    {
      icon: Crown,
      title: 'Premium Features',
      description: 'Exclusive premium commands, advanced customization options, and priority support for subscribers.',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times and efficient resource usage.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Community Tools',
      description: 'Polls, surveys, event scheduling, and community engagement features to build stronger connections.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Star,
      title: '24/7 Reliability',
      description: 'Rock-solid uptime with redundant systems and automatic failover for uninterrupted service.',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of features that make Moonveil the most advanced Discord bot for your server.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { type: 'spring', damping: 15, stiffness: 300 },
              }}
              className="group relative bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Sharp pointed edges effect */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent border-b-purple-500/20 group-hover:border-b-purple-500/40 transition-all duration-300" />
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br ${feature.gradient} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to experience all these features?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of servers already using Moonveil to create amazing Discord communities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Invite Moonveil Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;