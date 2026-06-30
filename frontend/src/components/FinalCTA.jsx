import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const startDownloadSimulation = () => {
    if (downloadComplete) return;
    setDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadComplete(true);
          
          // Initiate mock blank file download for realistic feedback
          const blob = new Blob(["Order Shield Mock Release Package v1.4.2"], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "order-shield-security-v1.4.2.zip";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="py-24 md:py-32 bg-bg-main relative z-20 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-[#121B2B] border border-white/5 rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-3xl">
          
          {/* Logo badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary mb-2">
            <Shield className="w-7 h-7" />
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              Secure Your WooCommerce Store Today.
            </h2>
            <p className="font-sans font-medium text-paragraph text-sm sm:text-base leading-relaxed">
              Block checkout floods, proxy cards, and fraud before orders process. Get immediate installation in seconds. Free open-source package release.
            </p>
          </div>

          {/* Interactive Simulated CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto">
            <button
              onClick={startDownloadSimulation}
              disabled={downloading}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all cursor-pointer ${
                downloadComplete 
                  ? 'bg-success text-white hover:bg-success/90 shadow-[0_4px_20px_rgba(34,197,94,0.3)]' 
                  : 'bg-accent-primary text-white hover:bg-accent-primary/95 hover:shadow-[0_4px_25px_rgba(255,122,0,0.3)]'
              }`}
            >
              {downloading ? (
                <span>Packing Release {downloadProgress}%...</span>
              ) : downloadComplete ? (
                <>
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <span>v1.4.2 Package Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4.5 h-4.5" />
                  <span>Download Plugin ZIP (Free)</span>
                </>
              )}
            </button>

            <Link to="/docs"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/[0.02] border border-white/5 text-white font-sans font-semibold text-sm hover:bg-white/[0.06] hover:border-white/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <FileText className="w-4.5 h-4.5 text-muted" />
              <span>Read Documentation</span>
            </Link>
          </div>

          {/* Micro telemetry list for confidence */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted font-mono pt-4 border-t border-white/[0.02]">
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>WooCommerce v8.4+ Ready</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>PHP 8.1+ Approved</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>Zero external API keys needed</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
