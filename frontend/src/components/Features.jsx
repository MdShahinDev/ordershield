import { motion } from 'motion/react';
import { 
  Globe, PhoneCall, Clock, Sliders, 
  ShieldCheck, ShieldAlert, Terminal, 
  Download, BarChart3, HelpCircle 
} from 'lucide-react';
import { FEATURES_DATA } from '../data';

// Map icon string names to dynamic React components safely
const ICON_MAP= {
  Globe: Globe,
  PhoneCall: PhoneCall,
  Clock: Clock,
  Sliders: Sliders,
  ShieldCheck: ShieldCheck,
  ShieldAlert: ShieldAlert,
  Terminal: Terminal,
  Download: Download,
  BarChart3: BarChart3
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-bg-main relative z-20">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="max-w-3xl text-left mb-20 flex flex-col space-y-4">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold font-mono uppercase tracking-wider self-start">
            <Sliders className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Comprehensive Checkout Security.
          </h2>
          <p className="font-sans font-medium text-paragraph text-base md:text-lg max-w-2xl">
            Order Shield consolidates standard fraud mitigation practices into a single, light-weight, native WooCommerce plugin.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feat, idx) => {
            const FeatureIcon = ICON_MAP[feat.icon] || HelpCircle;
            
            // Create intentional visual rhythm by styling specific cards differently
            const isLarge = idx === 0 || idx === 6; // Smart IP & Debug Logging
            const gridClass = isLarge 
              ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#121B2B] via-[#121B2B] to-[#121b2b]/80' 
              : 'col-span-1 bg-[#121B2B]';

            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${gridClass}`}
              >
                {/* Micro hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top line with Icon & optional Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-xl bg-[#0F1725] border border-white/5 text-muted group-hover:text-accent-primary group-hover:border-accent-primary/20 transition-all shadow-inner">
                      <FeatureIcon className="w-5.5 h-5.5 transition-colors" />
                    </div>
                    {feat.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-[9px] font-bold uppercase tracking-wider">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  {/* Text copy */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-accent-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-sans font-medium text-paragraph text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Aesthetic accent bottom tag */}
                <div className="mt-8 pt-4 border-t border-white/[0.02] flex items-center justify-between text-muted font-mono text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Integrated Node</span>
                  <span>Active Pro</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
