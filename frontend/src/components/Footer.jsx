import { Shield, MessageSquare, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToNav = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-main border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12 md:mb-16">
          
          {/* Brand Col (4 cols) */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <div 
              onClick={handleScrollToNav}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Order<span className="text-accent-primary">Shield</span>
              </span>
            </div>
            <p className="font-sans font-medium text-xs text-paragraph leading-relaxed max-w-sm">
              Securing checkout pathways for WooCommerce. Preventing payment card testing attacks, disposable numbers, and botnet spams with modern real-time IP telemetry.
            </p>
            
            
          </div>

          {/* Navigation Links (3 cols of inner menu) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            
            {/* Column 1: Product links */}
            <div className="flex flex-col space-y-3.5">
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Product Scope</span>
              <ul className="space-y-2 text-xs font-sans font-medium text-paragraph">
                <li><a href="#features" className="hover:text-white transition-colors">Features Grid</a></li>
                <li><a href="#dashboard-demo" className="hover:text-white transition-colors">Live Demo Sandbox</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#admin-controls" className="hover:text-white transition-colors">Admin Settings</a></li>
              </ul>
            </div>

            {/* Column 2: Legal/License */}
            <div className="flex flex-col space-y-3.5">
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Integrity & Legal</span>
              <ul className="space-y-2 text-xs font-sans font-medium text-paragraph">
                <li><a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="https://wordpress.org/about/license/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GPLv3 License</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">GDPR Compliance</a></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col space-y-3.5 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Technical Help</span>
              <ul className="space-y-2 text-xs font-sans font-medium text-paragraph">
                <li><a href="https://wordpress.org/support/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WordPress Support</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ Accordion</a></li>
                <li><a href="#cta" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom line: Copyright, License statement */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <span>
            © {currentYear} Order Shield. Released under the GPLv3 Open Source License.
          </span>
          <div className="flex items-center space-x-1">
            <ShieldAlert className="w-3.5 h-3.5 text-accent-primary" />
            <span>Premium Web checkout security. Built with pride for WooCommerce.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
