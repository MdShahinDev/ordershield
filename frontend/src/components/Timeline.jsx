import { motion } from 'motion/react';
import { TIMELINE_STEPS } from '../data';
import { CheckCircle2, Shield, Globe, ShieldAlert, Sliders, Play, ChevronRight, HelpCircle } from 'lucide-react';

const STEP_ICONS = [
  Play,          // Step 1: Places Order
  Globe,         // Step 2: IP Intelligence
  ShieldAlert,   // Step 3: Phone Validation
  Sliders,       // Step 4: Restriction Window
  Shield,        // Step 5: Whitelist / Blocklist
  CheckCircle2   // Step 6: Decision
];

export default function Timeline() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0F1725] relative z-20 border-y border-white/5">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 flex flex-col space-y-4">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold font-mono uppercase tracking-wider self-start">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>The Screening Pipeline</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            How Order Shield Secures Checkout.
          </h2>
          <p className="font-sans font-medium text-paragraph text-base md:text-md max-w-2xl">
            Within less than 20 milliseconds, Order Shield routes every transaction through a strict six-phase screening grid to verify identity and connection credentials.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          
          {/* Main horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[50px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-success/20 z-0" />

          {/* Grid structure of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const StepIcon = STEP_ICONS[idx] || Shield;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-start text-left bg-[#121B2B] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors h-full relative group"
                >
                  {/* Step counter badge */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono text-muted group-hover:text-accent-primary transition-colors">
                    {step.subtitle.split(' ')[1]}
                  </span>

                  {/* Icon Node */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-bg-main border border-white/10 text-white mb-6 group-hover:border-accent-primary/30 group-hover:text-accent-primary transition-all shadow-md">
                    <StepIcon className="w-5 h-5 text-muted group-hover:text-accent-primary transition-colors" />
                    <div className="absolute inset-0 bg-accent-primary/10 rounded-xl filter blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display font-bold text-base text-white mb-2 leading-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans font-medium text-xs text-paragraph leading-relaxed mt-auto">
                    {step.description}
                  </p>

                  {/* Mobile/Tablet connecting arrow */}
                  <div className="hidden md:block lg:hidden absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-muted/30">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
