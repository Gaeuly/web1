import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, ChevronDown, ChevronUp, Send, ExternalLink, HelpCircle, Zap } from 'lucide-react';

const Support = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [activeAccordion, setActiveAccordion] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          {[...Array(50)].map((_, i) => (
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
                Support Center
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
                Support Center
              </div>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-8 shadow-lg"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get help with Moonveil, report issues, or connect with our community support team.
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: 'Discord Support Server',
                description: 'Join our official Discord server for real-time support, community discussions, and the latest updates. Our team and community are ready to help!',
                buttonText: 'Join Server',
                buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
                gradient: 'from-blue-500 to-cyan-500',
                buttonGradient: 'from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email Support',
                description: 'Prefer email? Send us a detailed message using the contact form below, and we\'ll get back to you within 24 hours.',
                buttonText: 'Send Message',
                buttonIcon: <Send className="w-4 h-4 ml-2" />,
                gradient: 'from-purple-500 to-violet-500',
                buttonGradient: 'from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500'
              }
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.001 * (index + 1)}px)`
                }}
              >
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-black">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {card.description}
                  </p>
                  
                  <div className="group/btn relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.buttonGradient} rounded-lg blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300`}></div>
                    <button
                      onClick={() => {
                        if (index === 1) {
                          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`relative inline-flex items-center px-6 py-3 bg-gradient-to-r ${card.buttonGradient} text-white font-semibold rounded-lg transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105 shadow-xl`}
                    >
                      {card.buttonText}
                      {card.buttonIcon}
                    </button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-6"></div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                <span>Find answers to common questions</span>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `translateY(${scrollY * -0.0005 * (index + 1)}px)`
                  }}
                >
                  {/* Royal Corner Decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                  
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-200 relative z-10"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-black" />
                    </div>
                  </button>
                  
                  {activeAccordion === index && (
                    <div className="px-6 pb-6 relative z-10">
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-4"></div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-6"></div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>We'll get back to you within 24 hours</span>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="group relative bg-gradient-to-b from-gray-900/90 via-purple-900/20 to-black/90 backdrop-blur-xl border border-purple-400/40 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
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
                      placeholder="What can we help you with?"
                    />
                  </div>
                  
                  <div className="mb-8">
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
                      placeholder="Please describe your issue or question in detail..."
                    />
                  </div>
                  
                  <div className="group/btn relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300"></div>
                    <button
                      type="submit"
                      className="relative w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold text-lg shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105 rounded-xl"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
