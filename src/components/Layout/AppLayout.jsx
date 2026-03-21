import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-dark-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-farm-green-600/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-emerald-500/10 blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-dark-600/30 blur-[150px]"></div>
      </div>
      
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
