import React, { useState, useEffect } from 'react';
import { Bot, Heart, Trophy, Moon, Sparkles, Zap, Shield, Star, Crown, Rocket, Users, MessageSquare, Settings } from 'lucide-react';

const Home = () => {
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
      icon: <Bot className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: 'Advanced AI algorithms that learn and adapt to your server needs',
      gradient: 'from-purple-400 via-violet-400 to-purple-600',
      color: 'text-purple-400'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Moderation',
      description: 'Comprehensive moderation tools with smart detection and prevention',
      gradient: 'from-violet-400 via-purple-500 to-violet-600',
      color: 'text-violet-400'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Custom Commands',
      description: 'Create personalized commands tailored to your community',
      gradient: 'from-purple-500 via-violet-600 to-purple-700',
      color: 'text-purple-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with 99.9% uptime guarantee',
      gradient: 'from-violet-500 via-purple-600 to-violet-700',
      color: 'text-violet-500'
    }
  ];

  const stats = [
    { label: 'Active Servers', value: '50,000+', icon: <Settings className="w-6 h-6" /> },
    { label: 'Happy Users', value: '2.5M+', icon: <Users className="w-6 h-6" /> },
    { label: 'Commands', value: '200+', icon: <MessageSquare className="w-6 h-6" /> }
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
          {[...Array(60)].map((_, i) => (
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

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo with Rotating Ring */}
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <div 
                className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"
                style={{
                  transform: `rotate(${scrollY * 0.5}deg)`
                }}
              />
              <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 via-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-purple-400/30">
                <Moon className="w-16 h-16 text-white drop-shadow-lg" />
                <div className="absolute -top-1 -right-2 w-4 h-4">
                  <Sparkles className="w-full h-full text-purple-300 animate-spin" style={{animationDuration: '3s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              Moonveil
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Moonveil
            </div>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-8 shadow-lg"></div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The most advanced Discord bot for your server. Experience the future of Discord automation with powerful features and seamless integration.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <button className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105">
                <Bot className="w-6 h-6 mr-2 inline" />
                Invite Bot
              </button>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <button className="relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 border border-amber-400/20 hover:border-amber-400/40 hover:scale-105">
                <Trophy className="w-6 h-6 mr-2 inline" />
                Vote on Top.gg
              </button>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <button className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40 hover:scale-105">
                <Heart className="w-6 h-6 mr-2 inline" />
                Support Server
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
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
                
                <div className="relative z-10 p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black shadow-lg group-hover:scale-110 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
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
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Discover the features that make Moonveil the ultimate Discord companion
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.002 * (index + 1)}px)`
                }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/3 via-violet-400/3 to-purple-600/3 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <div className="text-black">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-3xl font-bold ${feature.color} group-hover:text-purple-300 transition-colors duration-300 drop-shadow-sm mb-4`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
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

      {/* Call to Action Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900/90 via-purple-900/20 to-black/90 backdrop-blur-xl border border-purple-400/40 hover:border-purple-400/70 transition-all duration-500 p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            
            {/* Royal Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
            
            <div className="text-center relative z-10">
              <div className="mb-6">
                <Rocket className="w-12 h-12 mx-auto text-purple-400 drop-shadow-lg" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400 mb-6 drop-shadow-lg">
                Ready to Transform Your Server?
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Join thousands of Discord communities already using Moonveil to enhance their server experience.
              </p>
              <div className="group/btn relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300"></div>
                <button className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-12 py-4 rounded-xl font-bold text-xl shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105">
                  <Bot className="w-6 h-6 mr-3 inline" />
                  Get Started Now
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
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-purple-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Moon className="w-10 h-10 mx-auto text-purple-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium">
            "Elevating Discord communities to the next level"
          </p>
          <p className="text-purple-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Moonveil Discord Bot
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
