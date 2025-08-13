import React, { useState, useEffect } from 'react';
import { Server, Users, Activity, Clock, Zap, Globe, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const Shards = () => {
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

  // Mock shard data
  const shards = [
    {
      id: 0,
      status: 'online',
      guilds: 2847,
      users: 485203,
      ping: 23,
      uptime: '7d 14h 32m',
      region: 'US East',
    },
    {
      id: 1,
      status: 'online',
      guilds: 3156,
      users: 521847,
      ping: 31,
      uptime: '7d 14h 32m',
      region: 'US West',
    },
    {
      id: 2,
      status: 'online',
      guilds: 2934,
      users: 498563,
      ping: 18,
      uptime: '7d 14h 32m',
      region: 'Europe',
    },
    {
      id: 3,
      status: 'online',
      guilds: 1875,
      users: 324159,
      ping: 45,
      uptime: '7d 14h 32m',
      region: 'Asia Pacific',
    },
    {
      id: 4,
      status: 'online',
      guilds: 2641,
      users: 447892,
      ping: 28,
      uptime: '7d 14h 32m',
      region: 'South America',
    },
    {
      id: 5,
      status: 'maintenance',
      guilds: 2103,
      users: 378426,
      ping: 0,
      uptime: '0d 0h 15m',
      region: 'Australia',
    },
    {
      id: 6,
      status: 'online',
      guilds: 1962,
      users: 345672,
      ping: 52,
      uptime: '7d 14h 32m',
      region: 'India',
    },
    {
      id: 7,
      status: 'online',
      guilds: 2387,
      users: 412847,
      ping: 35,
      uptime: '7d 14h 32m',
      region: 'Canada',
    },
  ];

  // Mock traffic data
  const trafficData = [
    { time: '00:00', commands: 1200, messages: 8500, users: 12400 },
    { time: '04:00', commands: 800, messages: 5200, users: 8900 },
    { time: '08:00', commands: 2400, messages: 15600, users: 18200 },
    { time: '12:00', commands: 3200, messages: 21000, users: 24800 },
    { time: '16:00', commands: 2800, messages: 18400, users: 22100 },
    { time: '20:00', commands: 3800, messages: 25200, users: 28600 },
  ];

  const performanceData = [
    { time: '00:00', latency: 25, uptime: 99.9 },
    { time: '04:00', latency: 22, uptime: 99.8 },
    { time: '08:00', latency: 28, uptime: 99.9 },
    { time: '12:00', latency: 31, uptime: 99.7 },
    { time: '16:00', latency: 26, uptime: 99.9 },
    { time: '20:00', latency: 24, uptime: 99.9 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'from-emerald-500 to-green-500';
      case 'maintenance':
        return 'from-amber-500 to-orange-500';
      case 'offline':
        return 'from-red-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'maintenance':
        return 'Maintenance';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  const totalGuilds = shards.reduce((sum, shard) => sum + shard.guilds, 0);
  const totalUsers = shards.reduce((sum, shard) => sum + shard.users, 0);
  const averagePing = Math.round(shards.filter(s => s.status === 'online').reduce((sum, shard) => sum + shard.ping, 0) / shards.filter(s => s.status === 'online').length);
  const onlineShards = shards.filter(s => s.status === 'online').length;

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
          {[...Array(40)].map((_, i) => (
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
                Bot Shards
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent blur-lg opacity-40 -z-10">
                Bot Shards
              </div>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 mx-auto mb-8 shadow-lg"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring of Moonveil's distributed infrastructure across multiple regions for optimal performance.
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Server className="w-6 h-6" />, value: totalGuilds.toLocaleString(), label: 'Total Guilds', gradient: 'from-purple-400 to-violet-500' },
              { icon: <Users className="w-6 h-6" />, value: `${(totalUsers / 1000000).toFixed(1)}M`, label: 'Total Users', gradient: 'from-violet-400 to-purple-500' },
              { icon: <Activity className="w-6 h-6" />, value: `${averagePing}ms`, label: 'Average Latency', gradient: 'from-purple-500 to-violet-600' },
              { icon: <Clock className="w-6 h-6" />, value: `${onlineShards}/${shards.length}`, label: 'Shards Online', gradient: 'from-violet-500 to-purple-600' }
            ].map((stat, index) => (
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
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-black shadow-lg group-hover:scale-110 transition-all duration-500`}>
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

          {/* Traffic Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Traffic Chart */}
            <div className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
              {/* Royal Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      Traffic Overview
                    </h3>
                    <p className="text-gray-400 text-sm">Last 24 hours activity</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData}>
                      <defs>
                        <linearGradient id="commandsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="messagesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #6b46c1', 
                          borderRadius: '8px',
                          color: '#fff'
                        }} 
                      />
                      <Area
                        type="monotone"
                        dataKey="commands"
                        stroke="#a855f7"
                        fillOpacity={1}
                        fill="url(#commandsGradient)"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="messages"
                        stroke="#8b5cf6"
                        fillOpacity={1}
                        fill="url(#messagesGradient)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden">
              {/* Royal Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
              
              <div className="relative z-10 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                      Performance Metrics
                    </h3>
                    <p className="text-gray-400 text-sm">System health monitoring</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #6b46c1', 
                          borderRadius: '8px',
                          color: '#fff'
                        }} 
                      />
                      <Line
                        type="monotone"
                        dataKey="latency"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/2 via-transparent to-violet-400/2 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Shards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shards.map((shard, index) => (
              <div
                key={shard.id}
                className="group relative bg-gradient-to-b from-gray-900/70 via-purple-900/10 to-black/70 backdrop-blur-xl border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105"
                style={{
                  transform: `translateY(${scrollY * -0.002 * (index + 1)}px)`
                }}
              >
                {/* Status indicator corner */}
                <div className={`absolute top-0 right-0 w-0 h-0 border-l-[30px] border-b-[30px] border-l-transparent ${
                  shard.status === 'online' ? 'border-b-emerald-500/50' : 
                  shard.status === 'maintenance' ? 'border-b-amber-500/50' : 'border-b-red-500/50'
                }`} />
                
                {/* Royal Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400/40 group-hover:border-purple-400/80 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                        Shard {shard.id}
                      </h3>
                      <p className="text-sm text-gray-400 flex items-center">
                        <Globe className="w-3 h-3 mr-1" />
                        {shard.region}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(shard.status)} text-white shadow-lg`}>
                      {getStatusText(shard.status)}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm flex items-center">
                        <Server className="w-4 h-4 mr-2" />
                        Guilds
                      </span>
                      <span className="text-white font-medium">{shard.guilds.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Users
                      </span>
                      <span className="text-white font-medium">{(shard.users / 1000).toFixed(0)}K</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm flex items-center">
                        <Activity className="w-4 h-4 mr-2" />
                        Ping
                      </span>
                      <span className={`font-medium ${
                        shard.ping === 0 ? 'text-gray-500' : 
                        shard.ping < 50 ? 'text-emerald-400' : 
                        shard.ping < 100 ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {shard.ping === 0 ? 'N/A' : `${shard.ping}ms`}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Uptime
                      </span>
                      <span className="text-white font-medium text-xs">{shard.uptime}</span>
                    </div>
                  </div>

                  {/* Activity indicator */}
                  <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatusColor(shard.status)} rounded-full transition-all duration-1000 ${
                        shard.status === 'online' ? 'animate-pulse' : ''
                      }`}
                      style={{
                        width: shard.status === 'online' ? '100%' : shard.status === 'maintenance' ? '60%' : '0%'
                      }}
                    />
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
      </div>
    </div>
  );
};

export default Shards;
