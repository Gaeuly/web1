import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Shards', path: '/shards' },
    { name: 'Support', path: '/support' },
    { name: 'Contact', path: '/contact' },
    { name: 'Invite Bot', path: '/invite' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-purple-400/30 shadow-lg shadow-purple-500/10'
        : 'bg-transparent'
    }`}>
      {/* Floating Particles for Navigation */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${10 + (i * 6)}%`,
                top: `${20 + Math.sin(i) * 30}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 via-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border border-purple-400/30 group-hover:scale-110 transition-all duration-300">
                <Moon className="w-5 h-5 text-white drop-shadow-lg" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2">
                  <Sparkles className="w-full h-full text-purple-300 animate-spin" style={{animationDuration: '3s'}} />
                </div>
              </div>
            </div>
            <span className="text-xl font-bold relative">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
                Moonveil
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-sm opacity-30 -z-10 group-hover:opacity-50 transition-all duration-300">
                Moonveil
              </div>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onClick={() => setActiveItem(item.name)}
              >
                <a
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                    activeItem === item.name
                      ? 'text-purple-300 bg-gradient-to-r from-purple-900/40 via-violet-900/30 to-purple-900/40 border border-purple-400/30'
                      : 'text-gray-300 hover:text-purple-300 hover:bg-purple-900/20'
                  }`}
                >
                  {/* Royal Corner Decorations for Active Item */}
                  {activeItem === item.name && (
                    <>
                      <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-purple-400/50"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-purple-400/50"></div>
                      <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-purple-400/50"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-purple-400/50"></div>
                    </>
                  )}
                  
                  {item.name}
                  
                  {/* Hover Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400/5 via-transparent to-violet-400/5"></div>
                  </div>
                </a>

                {/* Active Indicator */}
                {activeItem === item.name && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 rounded-full shadow-lg shadow-purple-400/50"></div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <div className="ml-4 relative group">
              <button
                onClick={toggleTheme}
                className="relative p-3 bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 rounded-lg transition-all duration-300 overflow-hidden group-hover:scale-105"
              >
                {/* Royal Corner Decorations */}
                <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-300"></div>
                <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-300"></div>
                <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-300"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                  ) : (
                    <Moon className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  )}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/3 via-transparent to-violet-400/3 animate-pulse"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-400" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-card/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeItem === item.name
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-purple-500/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
