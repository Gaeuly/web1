import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Users, Star, Code } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: Rocket,
      title: 'Lightning Fast',
      description: 'Built with performance in mind, Moonveil responds instantly to your commands.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Advanced security measures and 99.9% uptime guarantee for peace of mind.',
    },
    {
      icon: Zap,
      title: 'Powerful Features',
      description: 'From moderation to entertainment, Moonveil has everything your server needs.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Features and updates based on feedback from our amazing community.',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Professional-grade bot with enterprise-level features and support.',
    },
    {
      icon: Code,
      title: 'Always Evolving',
      description: 'Regular updates and new features to keep your server ahead of the curve.',
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
            About Moonveil
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Moonveil is more than just a Discord bot – it's a comprehensive solution designed to transform your server into a thriving, engaged community. Built with cutting-edge technology and years of Discord expertise.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Future of Discord Automation
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Born from the need for a truly intelligent Discord bot, Moonveil combines the power of advanced algorithms with intuitive design. Our mission is to provide server owners with tools that not only manage their communities but help them flourish.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're running a small gaming server or managing a large community, Moonveil adapts to your needs with smart automation, powerful moderation tools, and engaging interactive features that keep your members coming back.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With over 50,000 servers and 2.5 million users trusting Moonveil, we've proven that exceptional Discord bots are built on reliability, innovation, and community feedback.
            </p>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-3 gap-4">
                {[Rocket, Shield, Zap, Users, Star, Code].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose Moonveil?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Trusted by Thousands
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Active Servers' },
              { value: '2.5M+', label: 'Happy Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '200+', label: 'Commands' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;