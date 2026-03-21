import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, CheckCircle2, ChevronRight, Sprout } from 'lucide-react';

const HowItWorks = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-farm-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* App UI Visual Showcase */}
          <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
            {/* Ambient Background Glow for Phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-farm-green-500/20 to-transparent rounded-[3rem] blur-3xl"></div>
            
            {/* CSS Constructed Phone Mockup */}
            <motion.div 
              style={{ y: y1 }}
              className="relative w-[300px] h-[600px] bg-dark-950 border-[6px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden z-20 flex flex-col"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-30"></div>
              
              {/* App Content */}
              <div className="flex-1 bg-dark-900 pt-12 px-5 pb-6 flex flex-col relative">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Scan Crop</h3>
                    <p className="text-xs text-slate-400">Pest & Disease Detection</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Sprout size={14} className="text-farm-green-400" />
                  </div>
                </div>

                {/* Camera Viewfinder Mockup */}
                <div className="relative w-full aspect-[3/4] rounded-2xl bg-dark-800 border-2 border-dashed border-farm-green-500/50 mb-6 overflow-hidden flex items-center justify-center group">
                  <motion.div 
                    animate={{ y: [-100, 100, -100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-1 bg-farm-green-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
                  />
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                  
                  <div className="relative z-20 w-16 h-16 rounded-full bg-farm-green-500/20 backdrop-blur-md flex items-center justify-center border border-farm-green-500/30">
                    <Camera className="text-farm-green-400" size={24} />
                  </div>
                </div>

                <div className="bg-dark-800 rounded-xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Analysis Complete</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">Aphid Infestation</h4>
                  <p className="text-xs text-slate-400">98% Confidence. Treatment recommended within 48h.</p>
                </div>
                
                <button className="mt-auto w-full py-3 rounded-xl bg-farm-green-500 text-white font-semibold text-sm shadow-lg shadow-farm-green-500/20">
                  View Treatment Plan
                </button>
              </div>
            </motion.div>

            {/* Floating Elements next to phone */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -right-12 top-1/4 glass-panel p-4 rounded-2xl z-30 hidden md:flex items-center gap-3 border-emerald-500/30"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="text-emerald-400" size={20} />
              </div>
              <div>
                <p className="text-white font-medium text-sm text-shadow">Treatment Match</p>
                <p className="text-xs text-emerald-400">Found 3 solutions</p>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Detect, Treat, and <span className="text-gradient">Protect in seconds.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Our image recognition engine takes the guesswork out of farming. Simply snap a photo of your crop, and let FarmSmart do the rest—combining CNN architecture with PaddleOCR to provide immediate, actionable advice and treatment steps.
              </p>

              <div className="space-y-6">
                 {[
                  { title: "Point & Shoot", desc: "Use your device camera to capture images of leaves, stems, or pests." },
                  { title: "CNN & PaddleOCR Analysis", desc: "Our advanced models instantly process the image to identify specific pests and diseases." },
                  { title: "Actionable Plan", desc: "Receive immediate treatment protocols tailored to protect your yield." }
                 ].map((step, idx) => (
                   <div key={idx} className="flex gap-4 items-start group">
                     <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-farm-green-400 font-bold shrink-0 mt-1 group-hover:bg-farm-green-500 group-hover:text-white transition-colors">
                       {idx + 1}
                     </div>
                     <div>
                       <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                       <p className="text-slate-400">{step.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>

              <button className="mt-10 flex items-center gap-2 text-farm-green-400 font-semibold hover:text-farm-green-300 transition-colors group">
                <span>Explore all AI capabilities</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
