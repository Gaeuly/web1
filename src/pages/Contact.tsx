import React, { useState, useEffect } from 'react';
import { Send, Mail, MessageCircle, MapPin, Clock, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const handleChange = (e) => {
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
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: MapPin,
      title: 'Coverage',
      description: 'Global support',
      details: 'Worldwide 24/7',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const benefits = [
    'Get personalized help with bot setup and configuration',
    'Report bugs or issues you encounter with Moonveil',
    'Request new features or suggest improvements',
    'Inquire about partnership or integration opportunities',
    'Get technical support for advanced use cases',
  ];

  const beforeContactItems = [
    'Check our FAQ section for common questions',
    'Search our Discord server for similar issues',
    'Include relevant details like server ID, error messages',
    'Describe the steps to reproduce any issues'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Cursor Effect */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.2) 70%, transparent 100%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(45)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-25 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/8 to-violet-500/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            right: '15%',
            top: '25%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-violet-400/6 to-purple-600/6 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            left: '15%',
            bottom: '25%'
          }}
        />
      </div>

      <div className="relative z-10 px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
                Get in Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
                Get in Touch
              </div>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-8 shadow-lg"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions, feedback, or need help? We're here to assist you. Reach out through any of our channels.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105"
                style={{
                  transform: `translateY(${scrollY * -0.001 * (index + 1)}px)`
                }}
              >
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r ${info.gradient} rounded-full shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm mb-2">
                    {info.description}
                  </p>
                  <p className="text-white font-medium">{info.details}</p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="group relative bg-gradient-to-b from-gray-900/90 via-purple-900/20 to-black/90 backdrop-blur-xl border border-purple-400/40 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              
              {/* Royal Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    Send us a Message
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-purple-300 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>

                  <div className="group/btn relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300"></div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="relative w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold text-lg shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105 rounded-xl"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      Why Contact Us?
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {benefits.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
                </div>
              </div>

              {/* Response Time */}
              <div className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                      Response Time
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-6">
                    We strive to respond to all inquiries within 24 hours. For urgent technical issues, consider joining our Discord server for faster community-driven support.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {[
                      { label: 'General Inquiries:', time: '24-48 hours' },
                      { label: 'Technical Support:', time: '12-24 hours' },
                      { label: 'Bug Reports:', time: '6-12 hours' },
                      { label: 'Discord Support:', time: 'Real-time' }
                    ].map((item, index) => (
                      <div key={index}>
                        <span className="text-purple-400 font-medium">{item.label}</span>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
                </div>
              </div>

              {/* Before You Contact Us */}
              <div className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                      Before You Contact Us
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {beforeContactItems.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
