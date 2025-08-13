import React, { useState, useEffect } from 'react';
import { Shield, Music, Gamepad2, Users, MessageSquare, Bell, BarChart3, Settings, Crown, Zap, Heart, Star, Moon, Sparkles, ChevronDown, ChevronUp, Terminal, Copy, Check } from 'lucide-react';

const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [copiedCommand, setCopiedCommand] = useState('');

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

  const copyCommand = (command) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  const features = [
    {
      icon: Shield,
      title: 'Advanced Moderation',
      description: 'Comprehensive moderation system with auto-detection, custom filters, and intelligent protection against spam, raids, and toxic behavior.',
      gradient: 'from-red-400 via-pink-400 to-red-600',
      color: 'text-red-400',
      commands: [
        { cmd: '/ban @user [reason]', desc: 'Ban a user from the server with optional reason' },
        { cmd: '/kick @user [reason]', desc: 'Kick a user from the server' },
        { cmd: '/mute @user [duration]', desc: 'Temporarily mute a user (e.g., 1h, 30m, 1d)' },
        { cmd: '/warn @user [reason]', desc: 'Give a warning to a user' },
        { cmd: '/purge [amount]', desc: 'Delete multiple messages (up to 100)' },
        { cmd: '/automod setup', desc: 'Configure automatic moderation settings' },
        { cmd: '/filter add [word]', desc: 'Add words to the filter blacklist' },
        { cmd: '/slowmode [seconds]', desc: 'Set channel slowmode (0-21600 seconds)' }
      ]
    },
    {
      icon: Music,
      title: 'Premium Music System',
      description: 'High-quality music streaming from Spotify, YouTube, SoundCloud with advanced queue management, DJ controls, and crystal-clear audio.',
      gradient: 'from-purple-400 via-violet-400 to-blue-500',
      color: 'text-purple-400',
      commands: [
        { cmd: '/play [song/url]', desc: 'Play music from various platforms' },
        { cmd: '/skip', desc: 'Skip the current song' },
        { cmd: '/queue', desc: 'View the current music queue' },
        { cmd: '/pause', desc: 'Pause the current song' },
        { cmd: '/resume', desc: 'Resume paused music' },
        { cmd: '/volume [1-100]', desc: 'Adjust music volume' },
        { cmd: '/loop [song/queue/off]', desc: 'Set loop mode for songs or queue' },
        { cmd: '/shuffle', desc: 'Shuffle the music queue' },
        { cmd: '/lyrics', desc: 'Get lyrics for the current song' }
      ]
    },
    {
      icon: Gamepad2,
      title: 'Interactive Games & Fun',
      description: 'Engaging mini-games, trivia contests, economy system, and entertainment features to boost community interaction and engagement.',
      gradient: 'from-green-400 via-emerald-400 to-teal-500',
      color: 'text-green-400',
      commands: [
        { cmd: '/trivia [category]', desc: 'Start a trivia game with different categories' },
        { cmd: '/8ball [question]', desc: 'Ask the magic 8-ball a question' },
        { cmd: '/coinflip', desc: 'Flip a coin (heads or tails)' },
        { cmd: '/dice [sides]', desc: 'Roll a dice with specified sides' },
        { cmd: '/rps @user', desc: 'Play rock-paper-scissors with someone' },
        { cmd: '/balance', desc: 'Check your server currency balance' },
        { cmd: '/daily', desc: 'Claim your daily currency reward' },
        { cmd: '/leaderboard', desc: 'View server activity leaderboard' }
      ]
    },
    {
      icon: Users,
      title: 'Smart Role Management',
      description: 'Advanced role system with reaction roles, auto-roles, level-based roles, custom triggers, and comprehensive permission management.',
      gradient: 'from-orange-400 via-amber-400 to-red-500',
      color: 'text-orange-400',
      commands: [
        { cmd: '/role add @user @role', desc: 'Add a role to a user' },
        { cmd: '/role remove @user @role', desc: 'Remove a role from a user' },
        { cmd: '/autorole setup @role', desc: 'Set automatic role for new members' },
        { cmd: '/reactionrole create', desc: 'Create reaction roles for messages' },
        { cmd: '/levelrole set [level] @role', desc: 'Set role rewards for specific levels' },
        { cmd: '/role info @role', desc: 'Get detailed information about a role' },
        { cmd: '/role list @user', desc: 'List all roles of a user' },
        { cmd: '/role color @role [hex]', desc: 'Change role color' }
      ]
    },
    {
      icon: MessageSquare,
      title: 'AI Smart Responses',
      description: 'Intelligent chatbot with natural language processing, custom commands, auto-responses, and advanced conversation capabilities.',
      gradient: 'from-indigo-400 via-purple-500 to-violet-600',
      color: 'text-indigo-400',
      commands: [
        { cmd: '/ai chat [message]', desc: 'Chat with AI assistant' },
        { cmd: '/autoresponse add [trigger] [response]', desc: 'Create automatic responses' },
        { cmd: '/command create [name] [response]', desc: 'Create custom commands' },
        { cmd: '/translate [text] [language]', desc: 'Translate text to different languages' },
        { cmd: '/define [word]', desc: 'Get definition of a word' },
        { cmd: '/weather [location]', desc: 'Get weather information' },
        { cmd: '/news [topic]', desc: 'Get latest news on a topic' },
        { cmd: '/quote', desc: 'Get an inspiring quote' }
      ]
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Intelligent notification system for events, announcements, reminders, and important server activities with customizable triggers.',
      gradient: 'from-yellow-400 via-orange-400 to-amber-500',
      color: 'text-yellow-400',
      commands: [
        { cmd: '/announce [message]', desc: 'Send server-wide announcements' },
        { cmd: '/remind me [time] [message]', desc: 'Set personal reminders' },
        { cmd: '/notify add [event] [channel]', desc: 'Set up event notifications' },
        { cmd: '/welcome setup', desc: 'Configure welcome messages for new members' },
        { cmd: '/goodbye setup', desc: 'Configure goodbye messages' },
        { cmd: '/birthday add [date]', desc: 'Add birthday to notification list' },
        { cmd: '/event create [title] [date]', desc: 'Create server events with notifications' },
        { cmd: '/poll create [question] [options]', desc: 'Create polls with notifications' }
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive server analytics with member activity tracking, detailed engagement reports, and growth insights.',
      gradient: 'from-cyan-400 via-blue-400 to-indigo-500',
      color: 'text-cyan-400',
      commands: [
        { cmd: '/stats server', desc: 'View comprehensive server statistics' },
        { cmd: '/stats user @user', desc: 'View user activity statistics' },
        { cmd: '/analytics growth', desc: 'View server growth analytics' },
        { cmd: '/leaderboard activity', desc: 'Most active members leaderboard' },
        { cmd: '/report generate', desc: 'Generate detailed activity report' },
        { cmd: '/insights channel #channel', desc: 'Get channel-specific insights' },
        { cmd: '/metrics voice', desc: 'Voice channel usage metrics' },
        { cmd: '/dashboard', desc: 'Access web analytics dashboard' }
      ]
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Intuitive setup process with web dashboard, real-time settings management, and comprehensive configuration options.',
      gradient: 'from-slate-400 via-gray-400 to-zinc-500',
      color: 'text-slate-400',
      commands: [
        { cmd: '/setup wizard', desc: 'Run the initial setup wizard' },
        { cmd: '/config view', desc: 'View current server configuration' },
        { cmd: '/config set [setting] [value]', desc: 'Update configuration settings' },
        { cmd: '/dashboard', desc: 'Access web configuration dashboard' },
        { cmd: '/backup create', desc: 'Create backup of server settings' },
        { cmd: '/backup restore', desc: 'Restore from backup' },
        { cmd: '/reset [module]', desc: 'Reset specific module settings' },
        { cmd: '/help [command]', desc: 'Get help for specific commands' }
      ]
    },
    {
      icon: Crown,
      title: 'Premium Features',
      description: 'Exclusive premium commands, advanced customization options, priority support, and enhanced limits for premium subscribers.',
      gradient: 'from-amber-400 via-yellow-400 to-gold-500',
      color: 'text-amber-400',
      commands: [
        { cmd: '/premium status', desc: 'Check premium subscription status' },
        { cmd: '/custom embed create', desc: 'Create custom rich embeds' },
        { cmd: '/webhook manage', desc: 'Advanced webhook management' },
        { cmd: '/backup unlimited', desc: 'Unlimited backup storage' },
        { cmd: '/analytics export', desc: 'Export detailed analytics data' },
        { cmd: '/support priority', desc: 'Access priority support channel' },
        { cmd: '/custom bot [name]', desc: 'Custom bot branding (Enterprise)' },
        { cmd: '/api access', desc: 'API access for custom integrations' }
      ]
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized performance with sub-second response times, efficient resource usage, and advanced caching systems.',
      gradient: 'from-blue-400 via-cyan-400 to-teal-500',
      color: 'text-blue-400',
      commands: [
        { cmd: '/ping', desc: 'Check bot latency and response time' },
        { cmd: '/status', desc: 'View bot system status and uptime' },
        { cmd: '/cache clear', desc: 'Clear cached data for better performance' },
        { cmd: '/optimize server', desc: 'Run server optimization checks' },
        { cmd: '/performance report', desc: 'Get detailed performance metrics' },
        { cmd: '/uptime', desc: 'Check bot uptime statistics' },
        { cmd: '/version', desc: 'View bot version and update info' },
        { cmd: '/debug [module]', desc: 'Debug specific bot modules' }
      ]
    },
    {
      icon: Heart,
      title: 'Community Tools',
      description: 'Advanced community building tools including polls, surveys, event scheduling, and member engagement features.',
      gradient: 'from-pink-400 via-rose-400 to-red-500',
      color: 'text-pink-400',
      commands: [
        { cmd: '/poll create [question]', desc: 'Create interactive polls with multiple options' },
        { cmd: '/survey create [title]', desc: 'Create detailed member surveys' },
        { cmd: '/event schedule [title] [date]', desc: 'Schedule server events' },
        { cmd: '/giveaway start [prize] [duration]', desc: 'Create giveaways for community' },
        { cmd: '/suggestion setup', desc: 'Set up suggestion system' },
        { cmd: '/feedback collect', desc: 'Collect community feedback' },
        { cmd: '/member spotlight @user', desc: 'Feature community members' },
        { cmd: '/community stats', desc: 'View community engagement stats' }
      ]
    },
    {
      icon: Star,
      title: '24/7 Reliability',
      description: 'Rock-solid uptime with redundant systems, automatic failover, global CDN, and enterprise-grade infrastructure.',
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      color: 'text-violet-400',
      commands: [
        { cmd: '/status global', desc: 'Check global bot status across all servers' },
        { cmd: '/uptime stats', desc: 'View detailed uptime statistics' },
        { cmd: '/health check', desc: 'Run comprehensive health diagnostics' },
        { cmd: '/failover test', desc: 'Test automatic failover systems' },
        { cmd: '/maintenance schedule', desc: 'View scheduled maintenance windows' },
        { cmd: '/incident history', desc: 'View past incident reports' },
        { cmd: '/sla report', desc: 'Generate SLA compliance report' },
        { cmd: '/monitoring alerts', desc: 'Configure system monitoring alerts' }
      ]
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
          {[...Array(55)].map((_, i) => (
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
              Powerful Features
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
              Powerful Features
            </div>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-6 shadow-lg"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of features and commands that make Moonveil the most advanced Discord bot for your server.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${feature.color} group-hover:text-purple-300 transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      {expandedFeature === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4">
                    {feature.description}
                  </p>

                  {/* Commands Section */}
                  {expandedFeature === index && (
                    <div className="border-t border-purple-400/20 pt-4 mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-purple-400">Available Commands</span>
                      </div>
                      <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                        {feature.commands.map((command, cmdIndex) => (
                          <div key={cmdIndex} className="bg-black/40 rounded-lg p-3 border border-purple-400/20">
                            <div className="flex items-center justify-between mb-1">
                              <code className="text-sm font-mono text-purple-300 bg-purple-900/30 px-2 py-1 rounded">
                                {command.cmd}
                              </code>
                              <button
                                onClick={() => copyCommand(command.cmd)}
                                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                                title="Copy command"
                              >
                                {copiedCommand === command.cmd ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {command.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
              <h2 className="text-3xl font-bold text-purple-400 mb-6 drop-shadow-lg">
                Ready to Experience All These Features?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Join thousands of Discord communities already using Moonveil's powerful features and slash commands to create amazing server experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="group/btn relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300"></div>
                  <button className="relative bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40 hover:scale-105">
                    Invite Moonveil Now
                  </button>
                </div>
                <div className="group/btn relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl blur-lg opacity-50 group-hover/btn:opacity-75 transition-all duration-300"></div>
                  <button className="relative bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-500 hover:to-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 border border-gray-400/20 hover:border-gray-400/40 hover:scale-105">
                    View Documentation
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
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 py-12 px-4 border-t border-purple-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <Terminal className="w-10 h-10 mx-auto text-purple-400 mb-4 opacity-80 drop-shadow-lg" />
          <p className="text-gray-200 text-lg font-medium">
            "Over 200+ slash commands ready to transform your Discord server"
          </p>
          <p className="text-purple-400/80 text-sm mt-3 font-semibold tracking-wide">
            — Moonveil Command Center
          </p>
        </div>
      </section>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.4);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Features;
