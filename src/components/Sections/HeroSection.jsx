import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #10B981 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-farm-green-500/30 bg-farm-green-500/10 text-farm-green-400 mb-8 backdrop-blur-md"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Empowering Sri Lankan Farmers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight"
          >
            Smart Farming for a <br className="hidden md:block" />
            <span className="text-gradient">Better Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empowering Sri Lankan farmers with weather intelligence, expert advisory, and a direct marketplace to maximize yield and profit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-farm-green-600 space-x-2 to-emerald-400 text-white font-semibold text-lg flex items-center justify-center gap-2 group shadow-lg shadow-farm-green-500/25 hover:shadow-farm-green-500/40 hover:-translate-y-1 transition-all">
              <span>Download the App</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-md">
              <Play size={20} className="fill-white" />
              <span>Watch Demo</span>
            </button>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Minor update: EnhanceHeroSectionlayoutcomponents

// Minor update: OptimizeHeroSectionrenderingperformance
