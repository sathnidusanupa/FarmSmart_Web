import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarClock, Store, Zap, ShieldCheck } from 'lucide-react';

const FeaturesBento = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Everything you need to <span className="text-farm-green-400">grow smarter.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            FarmSmart combines location-awareness, intuitive planning, and secure marketplace tools to create the ultimate agricultural companion.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]"
        >
          {/* Smart Profiling */}
          <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-farm-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-farm-green-500/20"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-farm-green-400 mb-6 group-hover:scale-110 group-hover:bg-farm-green-500/20 transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Smart Agro-Ecological Profiling</h3>
                <p className="text-slate-400">No two farms are the same. FarmSmart uses advanced location services to instantly pinpoint your exact agro-ecological zone and provide perfectly tailored, hyper-local farming advice.</p>
              </div>
            </div>
          </motion.div>

          {/* Crop Calendar */}
          <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-dark-900 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                <CalendarClock size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Interactive Crop Calendar</h3>
                <p className="text-slate-400">Take the guesswork out of farming. Our intuitive calendar helps you visualize seasonal timelines, plan your planting cycles, and stay ahead of every harvest accurately.</p>
              </div>
            </div>
          </motion.div>

          {/* Marketplace */}
          <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Store size={28} />
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-300">Stripe Checkout</div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Secure Agricultural Marketplace</h3>
                <p className="text-slate-400">Browse, list, and buy equipment safely. Powered by Stripe for secure checkout and Cloudinary for rich product imagery.</p>
              </div>
            </div>
          </motion.div>

          {/* Performance */}
          <motion.div variants={item} className="col-span-1 lg:col-span-1 row-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group">
             <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-all duration-300">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Lightning-Fast</h3>
                <p className="text-sm text-slate-400">Built on React Native for a premium experience, 60fps animations, intuitive swiping, and fast load times.</p>
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div variants={item} className="col-span-1 lg:col-span-1 row-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group">
             <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-all duration-300">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Bank-Grade Security</h3>
                <p className="text-sm text-slate-400">Node.js encryption, Clerk authentication, and secure data storage keeping your digital farm locked down.</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesBento;

// Minor update: RefineFeaturesBentostylinglogic

// Minor update: ImproveFeaturesBentoresponsivebehavior
