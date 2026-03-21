import React from 'react';
import { Sprout, Twitter, Instagram, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark-950 border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="FarmSmart Logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-lg text-white">FarmSmart</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Connecting farmers, empowering agriculture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-farm-green-400 transition-colors">AgriSup AI</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-farm-green-400 transition-colors">Pest Detection</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-farm-green-400 transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-farm-green-400 transition-colors">Crop Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get the App</h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 hover:bg-white/10 py-3 rounded-xl transition-colors">
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 leading-none">Download on the</div>
                  <div className="text-sm font-semibold text-white leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 hover:bg-white/10 py-3 rounded-xl transition-colors">
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 leading-none">GET IT ON</div>
                  <div className="text-sm font-semibold text-white leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} FarmSmart. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
