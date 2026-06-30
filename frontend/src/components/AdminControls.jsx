import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, Check, HelpCircle, PhoneCall, 
  AlertOctagon, ShieldCheck, Terminal, Layers 
} from 'lucide-react';

export default function AdminControls() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const controlsExplanation = [
    {
      id: 'enable',
      title: 'Enable Plugin Switch',
      desc: 'Activate or suspend all shielding algorithms globally. Keeps database filters ready without deleting rules.',
      type: 'Boolean Toggle'
    },
    {
      id: 'restriction',
      title: 'Restriction Window (Hours)',
      desc: 'Set the hourly evaluation bucket (e.g., 24 hours) used to calculate frequency and velocity checkouts from a single IP address.',
      type: 'Integer Range'
    },
    {
      id: 'attempts',
      title: 'Allowed Attempt Counter',
      desc: 'Maximum transactions a single buyer or card sequence is allowed to submit before triggers block them.',
      type: 'Integer Range'
    },
    {
      id: 'status',
      title: 'Confirmed Status Selector',
      desc: 'Define what constitutes a "valid order". Restricts velocity counters to paid and completed orders.',
      type: 'Dropdown selection'
    },
    {
      id: 'logging',
      title: 'Deep Debug Logs',
      desc: 'Writes evaluation decisions locally in your WordPress options list. Ideal for developers debugging payment APIs.',
      type: 'Boolean Toggle'
    },
    {
      id: 'popup',
      title: 'Popup Warning message',
      desc: 'The custom notification visible to malicious buyers or bots attempting checkout after blocks trigger.',
      type: 'Custom String text'
    },
    {
      id: 'fb-url',
      title: 'Facebook Support URL',
      desc: 'Route blocked genuine buyers directly to your Facebook messenger support URL so they can resolve false positives immediately.',
      type: 'Secure URL string'
    }
  ];

  return (
    <section id="admin-controls" className="py-24 md:py-32 bg-[#0F1725] relative z-20 border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Educational (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold font-mono uppercase tracking-wider self-start">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Shop Administration</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Total Control In Your Hands.
            </h2>
            <p className="font-sans font-medium text-paragraph text-sm sm:text-base leading-relaxed">
              Order Shield fits natively into your WordPress WooCommerce dashboard. You don't need complex external API accounts, high subscriptions, or developer skills. Customize your thresholds, configure alerts, and deploy defenses in under five minutes.
            </p>

            {/* List of features description */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              {controlsExplanation.slice(0, 4).map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTooltip(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                    activeTooltip === item.id 
                      ? 'bg-[#121B2B] border-accent-primary/30' 
                      : 'bg-[#121B2B]/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white font-display">{item.title}</span>
                    <span className="text-[10px] font-mono text-muted uppercase bg-black/20 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Mock WordPress Admin Controls Panel (7 cols) */}
          <div className="lg:col-span-7 bg-[#121B2B] border border-white/5 p-6 rounded-2xl shadow-3xl relative text-left">
            {/* Header branding */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center space-x-2.5">
                <Settings className="w-5 h-5 text-accent-primary animate-spin-slow" />
                <span className="font-display font-bold text-base text-white">Order Shield Admin Configurations</span>
              </div>
              <span className="text-[10px] font-mono text-muted bg-white/[0.02] border border-white/5 px-2 py-1 rounded">
                WordPress Active Plugin
              </span>
            </div>

            <p className="text-xs text-muted mb-6 leading-relaxed">
              Below is the actual admin view representing the PHP configuration. Hover over the question icons to reveal dynamic instruction help descriptors.
            </p>

            {/* Form list replica */}
            <div className="space-y-6">
              {/* Row 1: Enable Plugin */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border-b border-white/[0.02] pb-4">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Enable Order Shield</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('enable')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7">
                  <div className="flex items-center space-x-3">
                    <button className="relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 bg-accent-primary">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-5" />
                    </button>
                    <span className="text-xs font-mono text-success font-bold">ACTIVE (Intercepting Threats)</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Restriction Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border-b border-white/[0.02] pb-4">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Restriction Hours</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('restriction')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7 flex items-center space-x-3">
                  <input 
                    type="number" 
                    readOnly 
                    value="24"
                    className="bg-black/40 border border-white/5 rounded px-2.5 py-1 text-xs text-white font-mono w-24 focus:outline-none"
                  />
                  <span className="text-xs text-muted">Evaluation window (Default: 24h)</span>
                </div>
              </div>

              {/* Row 3: Allowed Attempts */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border-b border-white/[0.02] pb-4">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Allowed Attempts</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('attempts')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7 flex items-center space-x-3">
                  <input 
                    type="number" 
                    readOnly 
                    value="3"
                    className="bg-black/40 border border-white/5 rounded px-2.5 py-1 text-xs text-white font-mono w-24 focus:outline-none"
                  />
                  <span className="text-xs text-muted">Checkout tries before blocking (Default: 3)</span>
                </div>
              </div>

              {/* Row 4: Confirmed Status */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border-b border-white/[0.02] pb-4">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Confirmed Status</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('status')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7">
                  <select 
                    disabled 
                    className="bg-black/40 border border-white/5 rounded px-2 py-1 text-xs text-white font-mono w-full focus:outline-none"
                  >
                    <option>completed (Completed Status Only)</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Debug Logging */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border-b border-white/[0.02] pb-4">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Enable Debug Logging</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('logging')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7">
                  <div className="flex items-center space-x-3">
                    <button className="relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 bg-accent-primary">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-5" />
                    </button>
                    <span className="text-xs font-mono text-muted">Logs evaluate on 'wc-logs' directory</span>
                  </div>
                </div>
              </div>

              {/* Row 6: Popup Warning */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border-b border-white/[0.02] pb-4">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Popup warning Alert</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('popup')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7">
                  <input 
                    type="text" 
                    readOnly 
                    value="🛡️ Order Blocked: Velocity limit reached. Please contact Support."
                    className="w-full bg-black/40 border border-white/5 rounded px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 7: Facebook Support URL */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-5 flex items-center space-x-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Facebook support URL</label>
                  <HelpCircle 
                    onClick={() => setActiveTooltip('fb-url')}
                    className="w-3.5 h-3.5 text-muted hover:text-white cursor-pointer" 
                  />
                </div>
                <div className="sm:col-span-7 flex items-center space-x-2">
                  <input 
                    type="url" 
                    readOnly 
                    value="https://m.me/ordershield.wp"
                    className="w-full bg-black/40 border border-white/5 rounded px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Dynamic tooltips explanation container */}
            <AnimatePresence>
              {activeTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/10 text-xs text-white flex items-start space-x-3"
                >
                  <AlertOctagon className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold block text-[11px] uppercase tracking-wider text-accent-primary">
                      Field Help: {controlsExplanation.find(c => c.id === activeTooltip)?.title}
                    </span>
                    <p className="font-sans leading-relaxed text-paragraph">
                      {controlsExplanation.find(c => c.id === activeTooltip)?.desc}
                    </p>
                    <button 
                      onClick={() => setActiveTooltip(null)}
                      className="text-[10px] text-accent-primary hover:text-white font-mono mt-1 underline cursor-pointer"
                    >
                      Dismiss help tips
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
