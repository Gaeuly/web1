import React from 'react';
import { motion } from 'framer-motion';
import { Github, MessageCircle, Moon } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-10 bg-dark-card/50 backdrop-blur-sm border-t border-purple-500/20 py-8 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Moon className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Moonveil
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
              <span>GitHub</span>
            </a>
            <a
              href="https://discord.gg/moonveil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
              <span>Discord Server</span>
            </a>
          </div>

          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            Made by <span className="text-purple-400 font-medium">Gaeuly</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;