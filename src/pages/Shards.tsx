import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users, Activity, Clock } from 'lucide-react';

const Shards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'from-green-500 to-emerald-500';
      case 'maintenance':
        return 'from-yellow-500 to-orange-500';
      case 'offline':
        return 'from-red-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusText = (status: string) => {
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
    <div className="min-h-screen px-4 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bot Shards
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time monitoring of Moonveil's distributed infrastructure across multiple regions for optimal performance.
          </p>
        </motion.div>

        {/* Overview Stats */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <div className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <Server className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">{totalGuilds.toLocaleString()}</span>
            </div>
            <p className="text-gray-400">Total Guilds</p>
          </div>
          
          <div className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">{(totalUsers / 1000000).toFixed(1)}M</span>
            </div>
            <p className="text-gray-400">Total Users</p>
          </div>
          
          <div className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">{averagePing}ms</span>
            </div>
            <p className="text-gray-400">Average Latency</p>
          </div>
          
          <div className="p-6 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">{onlineShards}/{shards.length}</span>
            </div>
            <p className="text-gray-400">Shards Online</p>
          </div>
        </motion.div>

        {/* Shards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {shards.map((shard, index) => (
            <motion.div
              key={shard.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { type: 'spring', damping: 15, stiffness: 300 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
            >
              {/* Status indicator */}
              <div className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent border-b-${shard.status === 'online' ? 'green' : shard.status === 'maintenance' ? 'yellow' : 'red'}-500/50`} />
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Shard {shard.id}</h3>
                    <p className="text-sm text-gray-400">{shard.region}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(shard.status)} text-white`}>
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
                    <span className={`font-medium ${shard.ping === 0 ? 'text-gray-500' : shard.ping < 50 ? 'text-green-400' : shard.ping < 100 ? 'text-yellow-400' : 'text-red-400'}`}>
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
                  <motion.div
                    animate={{
                      x: shard.status === 'online' ? ['0%', '100%'] : '0%',
                    }}
                    transition={{
                      duration: 2,
                      repeat: shard.status === 'online' ? Infinity : 0,
                      ease: 'linear',
                    }}
                    className={`h-full w-8 bg-gradient-to-r ${getStatusColor(shard.status)} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Chart Placeholder */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-dark-card/30 backdrop-blur-sm rounded-xl border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Global Performance Overview
          </h2>
          <div className="h-64 bg-gradient-to-b from-purple-900/20 to-transparent rounded-lg flex items-center justify-center border border-purple-500/10">
            <div className="text-center">
              <Activity className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <p className="text-gray-400">Real-time performance monitoring dashboard</p>
              <p className="text-sm text-gray-500 mt-2">Live charts and analytics coming soon</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Shards;