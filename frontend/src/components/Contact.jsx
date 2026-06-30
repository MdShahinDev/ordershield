import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Shield } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative subtle glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-primary/10 border border-accent-primary/20 px-4 py-1.5 rounded-full mb-4">
            <span className="flex h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-accent-primary font-bold">Secure Communication</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white">
            Get in Touch with our <span className="text-accent-primary">Security Experts</span>
          </h2>
          <p className="text-paragraph text-base md:text-lg mt-4 leading-relaxed">
            Have custom requirements or need technical deployment advice? Send our engineers a message and secure your store today.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Introduction mini card */}
              <div className="bg-[#0B101C]/50 border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full filter blur-xl pointer-events-none" />
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-primary/10 border border-accent-primary/20 rounded-xl flex items-center justify-center text-accent-primary flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">OrderShield Headquarters</h3>
                    <p className="text-sm text-paragraph mt-1 leading-relaxed">
                      Our global threat intelligence and engineering teams operate 24/7 to safeguard checkout workflows against high-velocity automated bot attacks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Coordinate Channels */}
              <div className="space-y-4">
                
                {/* Email Channel */}
                <a 
                  href="mailto:support@ordershield.io" 
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase tracking-wider">Email Inquiry</p>
                    <p className="text-sm font-bold text-white mt-0.5 group-hover:text-accent-primary transition-colors">hello.shahinofficial@gmail.com</p>
                    <p className="text-xs text-paragraph mt-0.5">Response within 2 hours</p>
                  </div>
                </a>

                {/* Phone Channel */}
                <a 
                  href="tel:+8801610545222" 
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase tracking-wider">Direct Hotline</p>
                    <p className="text-sm font-bold text-white mt-0.5 group-hover:text-blue-400 transition-colors">+8801610-545222</p>
                    <p className="text-xs text-paragraph mt-0.5">9am – 6pm BST</p>
                  </div>
                </a>

                {/* Location Channel */}
                <div className="flex items-center space-x-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted uppercase tracking-wider">Physical Office</p>
                    <p className="text-sm font-bold text-white mt-0.5">Dhaka, Bangladesh</p>
                    <p className="text-xs text-paragraph mt-0.5">Center Basabo, Sobujbag</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Status Ticker */}
            <div className="bg-[#070B14] border border-white/5 p-4 rounded-xl flex items-center justify-between text-xs font-mono text-muted">
              <span className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>ALL SYSTEMS ACTIVE</span>
              </span>
              <span>VERIFIED GPG SIGNED</span>
            </div>

          </div>

          {/* Right Column: High-Fi Interactive Form */}
          <div className="lg:col-span-7 bg-[#0B101C] border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center shadow-2xl">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted font-sans">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter full name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#070B14] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-muted/60"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted font-sans">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#070B14] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-muted/60"
                  />
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted font-sans">Inquiry details</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your store scale, challenges, or custom request details here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#070B14] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary/40 transition-colors placeholder:text-muted/60 resize-none"
                />
              </div>

              {/* Action buttons with submit response flow */}
              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs text-muted flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary inline-block" />
                  <span>Encrypted via secure end-to-end local routing</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="px-6 py-3.5 bg-gradient-to-r from-accent-primary to-[#FF4D00] text-sm font-bold text-white rounded-xl shadow-lg shadow-accent-primary/10 hover:brightness-110 disabled:brightness-75 transition-all flex items-center space-x-2 cursor-pointer"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Query</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Success Toast banner inside panel */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute inset-0 bg-[#070B14]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4 animate-bounce">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Transmitted Successfully</h4>
                  <p className="text-paragraph text-sm max-w-md mt-2">
                    Thank you. Your request is registered. One of our technical engineers will review your parameters and respond within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs text-accent-primary font-mono hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
