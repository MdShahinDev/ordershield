import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, ExternalLink, Menu, Shield, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
  setIsOpen(false);

  // If we're on the docs page, go home first
  if (location.pathname === "/docs") {
    navigate("/", { state: { section: id } });
    return;
  }

  const element = document.getElementById(id);

  if (element) {
    const offset = 80;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

 const handleLogoClick = () => {
  navigate("/");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-main/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-colors">
            <Shield className="w-5 h-5 text-accent-primary" />
            <div className="absolute inset-0 bg-accent-primary/20 rounded-xl filter blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Order<span className="text-accent-primary">Shield</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['features', 'how-it-works', 'admin-controls', 'comparison', 'faq'].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="font-sans font-medium text-sm text-paragraph hover:text-white transition-colors capitalize cursor-pointer"
            >
              {sec.replace('-', ' ')}
            </button>
          ))}
          <button
  onClick={() => {
    navigate("/docs");
  }}
  className={`font-sans font-medium text-sm transition-all flex items-center space-x-1.5 px-3 py-1.5 rounded-lg cursor-pointer ${
    location.pathname === "/docs"
      ? "bg-accent-primary/10 border border-accent-primary/20 text-accent-primary"
      : "text-paragraph hover:text-white hover:bg-white/5"
  }`}
  id="nav-docs-tab"
>
  <BookOpen className="w-4 h-4 text-accent-primary" />
  <span>Docs</span>
  <span className="text-[9px] bg-accent-primary/20 text-accent-primary px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
    Wiki
  </span>
</button>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => scrollToSection('cta')}
            className="relative px-4 py-3 rounded-xl bg-accent-primary font-sans font-semibold text-xs text-white hover:bg-accent-primary/90 transition-all shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:shadow-[0_4px_25px_rgba(255,122,0,0.4)] hover:-translate-y-0.5 cursor-pointer flex items-center space-x-1"
          >
            <span>Download Plugin</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg border border-white/5 bg-white/[0.02] text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0E17]/95 backdrop-blur-lg border-b border-white/5 absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {['features', 'how-it-works', 'admin-controls', 'comparison', 'faq'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="font-sans font-medium text-left text-base text-paragraph hover:text-white py-2 transition-colors border-b border-white/5 capitalize cursor-pointer"
                >
                  {sec.replace('-', ' ')}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/docs");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-sans font-medium text-sm transition-all flex items-center space-x-1.5 px-3 py-1.5 rounded-lg cursor-pointer ${
    location.pathname === "/docs"
      ? "bg-accent-primary/10 border border-accent-primary/20 text-accent-primary"
      : "text-paragraph hover:text-white hover:bg-white/5"
  }`}
              >
                <span>Documentation</span>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-0.5 rounded uppercase font-bold font-mono">WIKI</span>
              </button>
              <div className="pt-4 flex flex-col space-y-3">
                
                <button
                  onClick={() => scrollToSection('cta')}
                  className="w-full py-3 rounded-xl bg-accent-primary font-sans font-semibold text-center text-white hover:bg-accent-primary/90 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Download Plugin (Free)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
