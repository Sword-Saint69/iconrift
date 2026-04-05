import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative z-40 flex flex-col items-center gap-6 px-12 py-16 bg-white/60 backdrop-blur-xl rounded-t-[4rem] border-t border-white/40 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] w-full">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex gap-10 items-center">
          <Link className="text-slate-400 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest" href="/">Icons</Link>
          <Link className="text-slate-400 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest" href="/illustrations">Illustrations</Link>
          <Link className="text-slate-400 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest" href="/collections">Collections</Link>
        </div>
        
        <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
        
        <div className="flex gap-10 items-center">
          <Link className="text-slate-400 hover:text-primary transition-colors text-xs uppercase tracking-widest" href="#">Manifesto</Link>
          <Link className="text-slate-400 hover:text-primary transition-colors text-xs uppercase tracking-widest" href="#">Privacy</Link>
          <Link className="text-slate-400 hover:text-primary transition-colors text-xs uppercase tracking-widest" href="#">Terms</Link>
        </div>
      </div>
      
      <div className="text-slate-400 text-[10px] uppercase font-black tracking-[0.2em] opacity-40 text-center">
        © 2026 Iconrift Celestial Lab · Crafted for the next generation of spatial interfaces
      </div>
    </footer>
  );
};

export default Footer;
