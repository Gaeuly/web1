import React, { useState, useEffect } from 'react';
import { Rocket, Shield, Zap, Users, Star, Code, Moon, Sparkles, Brain, Crown, Target, Layers, Globe, Award, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Lightning Fast Performance',
      description: 'Built with cutting-edge technology for instant response times and seamless user experience',
      gradient: 'from-purple-400 via-violet-400 to-purple-600',
      color: 'text-purple-400'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols with 99.9% uptime guarantee and data protection',
      gradient: 'from-violet-400 via-purple-500 to-violet-600',
      color: 'text-violet-400'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that adapt and learn from your server patterns',
      gradient: 'from-purple-500 via-violet-600 to-purple-700',
      color: 'text-purple-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Driven',
      description: 'Built by the community, for the community with continuous feedback integration',
      gradient: 'from-violet-500 via-purple-600 to-violet-700',
      color: 'text-violet-500'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Professional-grade features with enterprise-level support and documentation',
      gradient: 'from-purple-600 via-violet-700 to-purple-800',
      color: 'text-purple-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Always Evolving',
      description: 'Regular updates with cutting-edge features to keep your server ahead of the curve',
      gradient: 'from-violet-600 via-purple-700 to-violet-800',
      color: 'text-violet-600'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Active Servers', icon: <Globe className="w-6 h-6" /> },
    { value: '2.5M+', label: 'Happy Users', icon: <Users className="w-6 h-6" /> },
    { value: '99.9%', label: 'Uptime', icon: <Clock className="w-6 h-6" /> },
    { value: '200+', label: 'Commands', icon: <Code className="w-6 h-6" /> }
  ];

  const journey = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To revolutionize Discord communities by providing intelligent automation tools that enhance engagement and streamline management.',
      gradient: 'from-purple-400 to-violet-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Our Vision',
      description: 'Creating the most trusted and innovative Discord bot ecosystem that empowers communities worldwide to thrive and grow.',
      gradient: 'from-violet-400 to-purple-600'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Our Values',
      description: 'Innovation, reliability, community-first approach, and continuous improvement drive everything we build and deliver.',
      gradient: 'from-purple-500 to-violet-700'
    }
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

      {/* Header Section */}
      <section className="relative z-10 pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 relative">
            <Moon className="w-14 h-14 mx-auto text-purple-400 mb-4 animate-pulse drop-shadow-lg" />
            <div className="absolute -top-1 -right-2 w-3 h-3">
              <Sparkles className="w-full h-full text-purple-300 animate-spin drop-shadow-sm" style={{animationDuration: '4s'}} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              About Moonveil
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              About Moonveil
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            More than just a Discord bot — a comprehensive solution designed to transform your server into a thriving, intelligent community ecosystem.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-gradient-to-b from-gray-900/90 via-purple-900/20 to-black/90 backdrop-blur-xl border border-purple-400/40 p-8 mb-12 relative overflow-hidden group"
            style={{
              transform: `translateY(${scrollY * -0.01}px)`
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            
            {/* Royal Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left - Text Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-400 mb-6 drop-shadow-lg">
                  The Future of Discord Automation
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Born from the need for truly intelligent Discord automation, Moonveil combines advanced AI algorithms with intuitive design. Our mission is to provide server owners with tools that don't just manage communities, but help them flourish.
                  </p>
                  <p>
                    Whether you're running a small gaming server or managing a massive community, Moonveil adapts to your needs with smart automation, powerful moderation tools, and engaging interactive features.
                  </p>
                  <p>
                    With over 50,000 servers and 2.5 million users trusting Moonveil, we've proven that exceptional Discord bots are built on innovation, reliability, and community feedback.
                  </p>
                </div>
              </div>

              {/* Right - Animated Grid */}
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"
                  style={{
                    transform: `rotate(${scrollY * 0.1}deg)`
                  }}
                />
                <div className="relative bg-gradient-to-br from-purple-900/50 to-violet-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                  <div className="grid grid-cols-3 gap-4">
                    {[Rocket, Shield, Brain, Users, Crown, Code].map((Icon, index) => (
                      <div
                        key={index}
                        className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)`
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.002 * (index + 1)}px)`
                }}
              >
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <div className="text-black">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-sm mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                Why Choose Moonveil?
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
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
                
                <div className="relative z-10 p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${feature.color} group-hover:text-purple-300 transition-colors duration-300 mb-3`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900/90 via-purple-900/20 to-black/90 backdrop-blur-xl border border-purple-400/40 hover:border-purple-400/70 transition-all duration-500 p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            
            {/* Royal Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center text-purple-400 mb-8 drop-shadow-lg">
                Trusted by Thousands Worldwide
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 mx-auto mb-8"></div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group/stat">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black shadow-lg group-hover/stat:scale-110 transition-all duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2 group-hover/stat:text-purple-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-purple-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Moon className="w-10 h-10 mx-auto text-purple-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium">
            "Innovation meets community - transforming Discord one server at a time"
          </p>
          <p className="text-purple-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Moonveil Team
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
