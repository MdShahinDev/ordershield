import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#0F1725] relative z-20 border-t border-white/5">
      {/* Background glow shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked Queries.
          </h2>
          <p className="font-sans font-medium text-paragraph text-xs sm:text-sm">
            Answers to common implementation, support, and billing questions about the WooCommerce Order Shield plugin.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 relative z-10 text-left">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`bg-[#121B2B] rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-accent-primary/30 shadow-lg' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-white focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-bg-main border border-white/5 text-muted transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-accent-primary border-accent-primary/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Dynamic Height Expand Content with motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-paragraph leading-relaxed font-sans font-medium border-t border-white/[0.02] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
