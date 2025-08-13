import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Heart, Trophy, Moon } from 'lucide-react';

const Home = () => {
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

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 400,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-xl opacity-30"
            />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
              <Moon className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          Moonveil
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The most advanced Discord bot for your server. Experience the future of Discord automation with powerful features and seamless integration.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              to="/invite"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Bot className="w-6 h-6 mr-2 relative z-10" />
              <span className="relative z-10">Invite Bot</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
            </Link>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover">
            <a
              href="https://top.gg/bot/moonveil"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Trophy className="w-6 h-6 mr-2 relative z-10" />
              <span className="relative z-10">Vote</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
            </a>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              to="/support"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Heart className="w-6 h-6 mr-2 relative z-10" />
              <span className="relative z-10">Support Server</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          {[
            { label: 'Servers', value: '50,000+' },
            { label: 'Users', value: '2.5M+' },
            { label: 'Commands', value: '200+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;