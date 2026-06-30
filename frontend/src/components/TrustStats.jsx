import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Zap, Server, ShieldCheck, TrendingUp } from 'lucide-react';

export default function TrustStats() {
  const [stats, setStats] = useState([
    { label: 'Fake Orders Blocked', value: 184520, suffix: '+', icon: ShieldAlert, description: 'Interceptions of spam checkouts, bots, and card testers since 2024.' },
    { label: 'WooCommerce Store Load', value: 0, suffix: 'ms', icon: Zap, description: 'Virtually zero server overhead. Checks complete locally in the blink of an eye.' },
    { label: 'Stores Protected', value: 12400, suffix: '+', icon: Server, description: 'Active WooCommerce store installations worldwide relying on Order Shield.' },
    { label: 'Threat Accuracy Rate', value: 99.9, suffix: '%', icon: ShieldCheck, description: 'Precision threat classification prevents false positives for real buyers.' },
  ]);

  // Simulated animated counter on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats([
        { label: 'Fake Orders Intercepted', value: 1600, suffix: '+', icon: ShieldAlert, description: 'Interceptions of spam checkouts, bots, and card testers since 2024.' },
        { label: 'Local Evaluation Overhead', value: 12, suffix: 'ms', icon: Zap, description: 'Virtually zero server overhead. Checks complete locally in the blink of an eye.' },
        { label: 'Active Store Installs', value: 40, suffix: '+', icon: Server, description: 'Active WooCommerce store installations worldwide relying on Order Shield.' },
        { label: 'Security Accuracy Rate', value: 98.98, suffix: '%', icon: ShieldCheck, description: 'Precision threat classification prevents false positives for real buyers.' },
      ]);
    }, 100);

    // Minor updates to stats to represent live telemetry
    const liveUpdate = setInterval(() => {
      setStats(prev => {
        const copy = [...prev];
        copy[0] = { ...copy[0], value: copy[0].value + Math.floor(Math.random() * 2) };
        return copy;
      });
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearInterval(liveUpdate);
    };
  }, []);

  return (
    <div className="border-y border-white/5 bg-bg-sec/50 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label} 
                className={`pt-6 lg:pt-0 lg:px-6 first:pt-0 lg:first:pl-0 flex flex-col space-y-2 text-left group`}
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-muted group-hover:text-accent-primary group-hover:border-accent-primary/20 transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-muted tracking-wider uppercase group-hover:text-white transition-colors">
                    {stat.label}
                  </span>
                </div>
                
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-lg font-bold text-accent-primary font-display">{stat.suffix}</span>
                </div>

                <p className="text-xs text-muted font-sans leading-relaxed group-hover:text-paragraph transition-colors max-w-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
