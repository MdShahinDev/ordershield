import { motion } from 'motion/react';
import { COMPARISON_ROWS } from '../data';
import { HelpCircle, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 md:py-32 bg-bg-main relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="max-w-3xl text-left mb-20 flex flex-col space-y-4">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold font-mono uppercase tracking-wider self-start">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Competitive Edge</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            With or Without Order Shield.
          </h2>
          <p className="font-sans font-medium text-paragraph text-base md:text-lg max-w-2xl">
            See how the default WooCommerce checkout stacks up against an Order Shield fortified payment grid.
          </p>
        </div>

        {/* Responsive Desktop Table & Mobile Cards */}
        <div className="overflow-hidden bg-[#121B2B] border border-white/5 rounded-2xl shadow-3xl">
          {/* Desktop Table Layout (hidden on small screens) */}
          <div className="hidden md:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-[#0F1725]">
                  <th className="p-6 text-sm font-bold text-white uppercase tracking-wider font-display">Feature Integrity</th>
                  <th className="p-6 text-sm font-bold text-danger uppercase tracking-wider font-display bg-danger/[0.02]">Standard WooCommerce</th>
                  <th className="p-6 text-sm font-bold text-success uppercase tracking-wider font-display bg-success/[0.02]">Order Shield Fortified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-6 text-sm font-bold text-white">{row.feature}</td>
                    
                    {/* Without Column */}
                    <td className="p-6 text-xs text-paragraph/90 bg-danger/[0.01]">
                      <div className="flex items-start  space-x-2.5">
                        
                        <span>{row.withoutShield}</span>
                      </div>
                    </td>

                    {/* With Column */}
                    <td className="p-6 text-xs text-white bg-success/[0.01]">
                      <div className="flex items-start space-x-2.5">
                        <span className="p-1 rounded bg-success/10 text-success shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-semibold">{row.withShield}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Table Cards Layout (hidden on desktop) */}
          <div className="block md:hidden divide-y divide-white/5">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="p-5 space-y-4 text-left">
                <h4 className="text-sm font-bold text-white font-display border-b border-white/[0.02] pb-2">
                  {row.feature}
                </h4>
                
                <div className="space-y-3">
                  {/* Without */}
                  <div className="bg-danger/[0.03] p-3 rounded-lg border border-danger/10">
                    <span className="text-[10px] font-mono font-bold text-danger block uppercase mb-1">Standard WC Checkout</span>
                    <div className="flex items-start space-x-2 text-xs text-paragraph">
                      <span>{row.withoutShield}</span>
                    </div>
                  </div>

                  {/* With */}
                  <div className="bg-success/[0.03] p-3 rounded-lg border border-success/10">
                    <span className="text-[10px] font-mono font-bold text-success block uppercase mb-1">Order Shield Fortified</span>
                    <div className="flex items-start space-x-2 text-xs text-white">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{row.withShield}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
