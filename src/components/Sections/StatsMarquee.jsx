import React from 'react';
import { motion } from 'framer-motion';

const StatsMarquee = () => {
  const stats = [
    { label: "Mobile Framework", value: "React Native" },
    { label: "Secure Payments", value: "Stripe" },
    { label: "Image Hosting", value: "Cloudinary" },
    { label: "Authentication", value: "Clerk" },
    { label: "Data Encryption", value: "Node.js" },
    { label: "UX Performance", value: "60fps Animations" }
  ];

  // Duplicate the array to create a seamless loop
  const marqueeItems = [...stats, ...stats, ...stats];

  return (
    <section className="py-8 bg-farm-green-600/10 border-y border-farm-green-500/20 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10"></div>

      <div className="flex w-[300%]">
        <div className="flex gap-16 md:gap-32 animate-marquee whitespace-nowrap pl-16">
          {marqueeItems.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-3xl md:text-5xl font-display font-extrabold text-farm-green-400">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-slate-300 uppercase tracking-wider whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMarquee;
