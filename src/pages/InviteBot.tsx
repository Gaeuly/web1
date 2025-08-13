import React, { useState, useEffect } from 'react';
import { Bot, Shield, Users, Zap, Star, ExternalLink, CheckCircle, Moon, Sparkles, Crown, Rocket } from 'lucide-react';

const InviteBot = () => {
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
      rating: 5,
      message: 'Moonveil transformed our server! The moderation features are incredible and the music quality is crystal clear.',
    },
    {
      name: 'Sarah Johnson',
      server: 'Creative Hub',
      rating: 5,
      message: 'Best Discord bot we\'ve used. Easy setup, tons of features, and amazing support from the team.',
    },
    {
      name: 'Mike Rodriguez',
      server: 'Tech Community',
      rating: 5,
      message: 'The analytics and engagement features helped us grow our community from 500 to over 5,000 members!',
    },
  ];

  const features = [
    { 
      icon: Shield, 
      title: 'Advanced Security', 
      description: 'Protect your community with smart moderation',
      gradient: 'from-purple-400 via-violet-400 to-purple-600',
      color: 'text-purple-400'
    },
    { 
      icon: Users, 
      title: 'Member Management', 
      description: 'Streamline administration and engagement',
      gradient: 'from-violet-400 via-purple-500 to-violet-600',
      color: 'text-violet-400'
    },
    { 
      icon: Zap, 
      title: 'Lightning Fast', 
      description: 'Instant responses with 99.9% uptime',
      gradient: 'from-purple-500 via-violet-600 to-purple-700',
      color: 'text-purple-500'
    },
    { 
      icon: Star, 
      title: 'Premium Quality', 
      description: 'Enterprise-grade features for every server',
      gradient: 'from-violet-500 via-purple-600 to-violet-700',
      color: 'text-violet-500'
    },
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
                <Bot className="w-16 h-16 text-white drop-shadow-lg" />
                <div className="absolute -top-1 -right-2 w-4 h-4">
                  <Sparkles className="w-full h-full text-purple-300 animate-spin" style={{animationDuration: '3s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              Invite Moonveil
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Invite Moonveil
            </div>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-8 shadow-lg"></div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to supercharge your Discord server? Add Moonveil now and unlock powerful features that will transform your community experience.
          </p>

          {/* Main CTA Button */}
          <div className="mb-16">
            <div className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <a
                href="https://discord.com/oauth2/authorize?client_id=moonveil&scope=bot%20applications.commands&permissions=8"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-12 py-6 rounded-xl font-bold text-2xl shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105 flex items-center"
              >
                <Bot className="w-8 h-8 mr-3" />
                Add to Server
                <ExternalLink className="w-6 h-6 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
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
                
                <div className="relative z-10 p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className={`text-lg font-semibold ${feature.color} mb-2 group-hover:text-purple-300 transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
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

      {/* Main Content Grid */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Permissions */}
            <div className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
              {/* Royal Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              
              <div className="relative z-10 p-8">
                <h2 className="text-3xl font-bold text-purple-400 mb-6 drop-shadow-lg flex items-center">
                  <Shield className="w-8 h-8 mr-3" />
                  Required Permissions
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Moonveil needs these permissions to function properly. Don't worry - we only use them for their intended features and never abuse them.
                </p>
                <div className="space-y-3 mb-6">
                  {permissions.map((permission, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 opacity-0 animate-pulse"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{permission}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-900/40 via-violet-900/30 to-purple-900/40 rounded-lg border border-purple-500/30">
                  <p className="text-sm text-purple-300">
                    <Crown className="w-4 h-4 inline mr-2" />
                    <strong>Pro Tip:</strong> You can always adjust permissions later in your server settings. Start with recommended permissions for the best experience.
                  </p>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
              </div>
            </div>

            {/* Setup Steps */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-purple-400 mb-4 drop-shadow-lg">Setup Steps</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 mx-auto"></div>
              </div>
              
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
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{
                    transform: `translateY(${scrollY * -0.002 * (index + 1)}px)`
                  }}
                >
                  {/* Royal Corner Decorations */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex items-start space-x-4 p-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-500">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
                What Server Owners Say
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {testimonial.server}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300">
                    "{testimonial.message}"
                  </p>
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

      {/* Bottom CTA */}
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
              <h3 className="text-4xl font-bold text-purple-400 mb-6 drop-shadow-lg">
                Join 50,000+ Servers
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Don't let your server fall behind. Add Moonveil today and give your community the premium Discord experience they deserve.
              </p>
              <div className="group/btn relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300"></div>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=moonveil&scope=bot%20applications.commands&permissions=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-12 py-4 rounded-xl font-bold text-xl shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105 flex items-center"
                >
                  <Bot className="w-6 h-6 mr-3" />
                  Add Moonveil Now
                  <ExternalLink className="w-5 h-5 ml-3" />
                </a>
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
            "Transform your Discord server with the power of Moonveil"
          </p>
          <p className="text-purple-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Ready to invite? Just one click away.
          </p>
        </div>
      </section>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default InviteBot;
