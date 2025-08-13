import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Users, Zap, Star, ExternalLink, CheckCircle } from 'lucide-react';

const InviteBot = () => {
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

  const permissions = [
    'Send Messages & Embed Links',
    'Read Message History',
    'Manage Messages (for moderation)',
    'Manage Roles (for auto-roles)',
    'Connect & Speak (for music)',
    'Use Voice Activity (for music)',
    'Add Reactions',
    'Use External Emojis',
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      server: 'Gaming Central',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      message: 'Moonveil transformed our server! The moderation features are incredible and the music quality is crystal clear.',
    },
    {
      name: 'Sarah Johnson',
      server: 'Creative Hub',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      message: 'Best Discord bot we\'ve used. Easy setup, tons of features, and amazing support from the team.',
    },
    {
      name: 'Mike Rodriguez',
      server: 'Tech Community',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      message: 'The analytics and engagement features helped us grow our community from 500 to over 5,000 members!',
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
            Invite Moonveil
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to supercharge your Discord server? Add Moonveil now and unlock powerful features that will transform your community experience.
          </p>

          {/* Main CTA */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=moonveil&scope=bot%20applications.commands&permissions=8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Bot className="w-8 h-8 mr-3 relative z-10" />
              <span className="relative z-10">Add to Server</span>
              <ExternalLink className="w-6 h-6 ml-3 relative z-10" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
            </a>
          </motion.div>
        </motion.div>

        {/* Features Preview */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Shield, title: 'Advanced Security', description: 'Protect your community' },
            { icon: Users, title: 'Member Management', description: 'Streamline administration' },
            { icon: Zap, title: 'Lightning Fast', description: 'Instant responses' },
            { icon: Star, title: 'Premium Quality', description: 'Enterprise-grade features' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 text-center group hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Permissions */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-8">Required Permissions</h2>
            <div className="bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Moonveil needs these permissions to function properly. Don't worry - we only use them for their intended features and never abuse them.
              </p>
              <div className="space-y-3">
                {permissions.map((permission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{permission}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                <p className="text-sm text-purple-300">
                  💡 <strong>Pro Tip:</strong> You can always adjust permissions later in your server settings. Start with recommended permissions for the best experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Setup Steps */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-8">Setup Steps</h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Click "Add to Server"',
                  description: 'Select your server from the dropdown list',
                },
                {
                  step: '2',
                  title: 'Review Permissions',
                  description: 'Ensure all recommended permissions are selected',
                },
                {
                  step: '3',
                  title: 'Authorize',
                  description: 'Click "Authorize" to add Moonveil to your server',
                },
                {
                  step: '4',
                  title: 'Start Using',
                  description: 'Type /help to see all available commands',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Server Owners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.server}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.message}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join 50,000+ Servers
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't let your server fall behind. Add Moonveil today and give your community the premium Discord experience they deserve.
            </p>
            <motion.a
              href="https://discord.com/oauth2/authorize?client_id=moonveil&scope=bot%20applications.commands&permissions=8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Bot className="w-6 h-6 mr-2" />
              Add Moonveil Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InviteBot;