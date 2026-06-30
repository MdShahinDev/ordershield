import { motion } from 'motion/react';
import { Shield, ShieldAlert, ShieldCheck, Globe, PhoneOff, ArrowRight, BookOpen, Star, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [blockedCount, setBlockedCount] = useState(1482);
  const [pulseActive, setPulseActive] = useState(false);

  // Trigger a fake block alert pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(true);
      setBlockedCount(prev => prev + 1);
      setTimeout(() => setPulseActive(false), 2000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCta = () => {
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById('dashboard-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-bg-main">
      {/* Visual background enhancements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Grid line effect (SaaS style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Hero Copy (7 columns) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-start flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold font-mono uppercase tracking-wider"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            <span>WooCommerce Fake Order Protection</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]"
          >
            Stop <span className="text-accent-primary inline-block relative">Fake Orders</span> <br />
            Before They Cost You Money.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans font-medium text-sm text-paragraph leading-relaxed max-w-2xl"
          >
            Order Shield wraps your WooCommerce checkout in an advanced, real-time security barrier. 
            Leveraging machine-learning IP intelligence, high-accuracy billing phone validation, custom 
            restriction windows, and bulletproof blocklists to block scammers, bots, and card testers instantly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <button
              onClick={handleScrollToCta}
              className="px-8 py-4 rounded-xl bg-accent-primary text-white font-sans font-bold text-base hover:bg-accent-primary/90 hover:shadow-[0_0_30px_rgba(255,122,0,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Download Free Plugin</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
            <Link to={"/docs"}
              className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/5 text-white font-sans font-semibold text-base hover:bg-white/[0.08] hover:border-white/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <BookOpen className="w-4.5 h-4.5 text-muted" />
              <span>Read Documentation</span>
            </Link >
          </motion.div>

          {/* Ratings & Endorsements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-primary fill-accent-primary" />
              ))}
              <span className="text-white text-xs font-bold ml-2 font-mono">5.0 Star Rated</span>
            </div>
            <div className="text-xs text-muted font-sans font-medium">
              Trusted by <span className="text-white font-semibold">12,000+</span> WooCommerce Store Owners worldwide
            </div>
          </motion.div>
        </div>

        {/* Hero Dashboard Cards Visual (5 columns) */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[460px] md:h-[500px]">
          {/* Animated Central Shield Core */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-44 h-44 rounded-full bg-[#121B2B]/40 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md"
          >
            {/* Spinning background rings */}
            <div className="absolute inset-[-15px] border border-accent-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-30px] border border-accent-secondary/5 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
            
            {/* Glowing Shield Shape */}
            <div className={`p-6 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 transition-all duration-500 ${pulseActive ? 'scale-110 rotate-12 shadow-[0_0_50px_rgba(255,122,0,0.5)]' : ''}`}>
              <Shield className={`w-16 h-16 text-accent-primary transition-transform duration-500 ${pulseActive ? 'text-accent-primary animate-pulse' : 'text-accent-primary/90'}`} />
            </div>
          </motion.div>

          {/* Dashboard floating card 1: Fake Order Blocked Alert */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 4, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-4 left-0 right-auto sm:-left-6 z-20 w-64 bg-card-bg/95 border ${pulseActive ? 'border-danger/50 shadow-[0_0_30px_rgba(239,68,68,0.3)] bg-[#24131B]' : 'border-white/5'} p-4 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-500`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${pulseActive ? 'bg-danger/20 text-danger animate-bounce' : 'bg-danger/10 text-danger'}`}>
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-danger">ATTACK BLOCKED</span>
                  <span className="text-[10px] font-mono text-muted">Active</span>
                </div>
                <h4 className="text-sm font-semibold text-white mt-1 truncate">Fake Checkout Stopped</h4>
                <p className="text-xs text-paragraph mt-1 font-mono bg-black/30 p-1.5 rounded text-[11px] leading-tight">
                  IP: <span className="text-accent-primary font-semibold">185.220.101.5</span> <br />
                  Reason: Multiple Order Submit
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dashboard floating card 2: Telemetry Counters */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              x: [0, -4, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-4 right-0 sm:-right-6 z-20 w-56 bg-card-bg/95 border border-white/5 p-4 rounded-xl shadow-2xl backdrop-blur-md text-left"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2.5">
              <span className="text-xs font-mono text-muted">GLOBAL STATS</span>
              <RefreshCw className={`w-3.5 h-3.5 text-accent-secondary ${pulseActive ? 'animate-spin' : ''}`} />
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-[10px] font-mono text-muted block">TOTAL BLOCKED</span>
                <div className="flex items-baseline space-x-1.5">
                  <span className={`text-2xl font-bold font-display text-white transition-all duration-500 ${pulseActive ? 'text-accent-primary scale-105 inline-block' : ''}`}>
                    {blockedCount.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono font-semibold text-danger">+4m</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5">
                <div>
                  <span className="text-[9px] font-mono text-muted block">ACCURACY</span>
                  <span className="text-xs font-bold text-success">98.98%</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-muted block">CHARGEBACKS</span>
                  <span className="text-xs font-bold text-white">0%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard floating card 3: Whitelist Success Check */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              x: [0, -6, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 -right-4 md:-right-10 z-20 w-56 bg-card-bg/95 border border-white/5 p-3.5 rounded-xl shadow-2xl backdrop-blur-md text-left hidden sm:block"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-success/10 text-success">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono text-success block font-bold">TRUSTED BUYER</span>
                <span className="text-xs font-semibold text-white truncate block">agency-partner@company.com</span>
              </div>
            </div>
          </motion.div>

          {/* Dashboard floating card 4: Phone Validated badge */}
          <motion.div
            animate={{
              y: [0, 6, 0],
              x: [0, 4, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/2 -left-6 md:-left-12 z-20 w-48 bg-card-bg/95 border border-white/5 p-3 rounded-xl shadow-2xl backdrop-blur-md text-left hidden sm:block"
          >
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-accent-secondary animate-pulse" />
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-muted block">IP LOCATION MATCH</span>
                <span className="text-[11px] font-bold text-white">United States (US)</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
