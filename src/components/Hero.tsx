'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Scroll orchestration
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const islandLeftX = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const islandRightX = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <main className="relative min-h-screen pt-32 pb-40 px-6 flex items-center justify-center overflow-hidden">
      {/* Island 2 (Left): Decorative Icon Grid */}
      <motion.div 
        style={{ x: islandLeftX, opacity, y: '-50%' }}
        className="hidden lg:flex absolute left-12 top-1/2 flex-col gap-6 p-8 glass-island rounded-xl shadow-2xl drift-slow" 
        style={{ '--rot': '-4deg' } as any}
      >
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: 'vignette', bg: 'bg-primary-container/20', text: 'text-primary' },
            { icon: 'pentagon', bg: 'bg-secondary-container/30', text: 'text-secondary' },
            { icon: 'filter_vintage', bg: 'bg-tertiary-container/30', text: 'text-tertiary' },
            { icon: 'precision_manufacturing', bg: 'bg-surface-container-high', text: 'text-on-surface-variant' },
            { icon: 'rocket_launch', bg: 'bg-primary/10', text: 'text-primary' },
            { icon: 'reorder', bg: 'bg-outline-variant/10', text: 'text-on-surface' },
            { icon: 'auto_awesome', bg: 'bg-purple-100', text: 'text-purple-600' },
            { icon: 'category', bg: 'bg-blue-100', text: 'text-blue-600' },
            { icon: 'token', bg: 'bg-slate-100', text: 'text-slate-600' }
          ].map((item, i) => (
            <div key={i} className={`w-12 h-12 flex items-center justify-center ${item.bg} rounded-lg ${item.text}`}>
              <span className="material-symbols-outlined text-3xl">{item.icon}</span>
            </div>
          ))}
        </div>
        <div className="h-px bg-outline-variant/20 w-full"></div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Library 2.4 Edition</div>
      </motion.div>

      {/* Main Island Panel (Island 1) */}
      <motion.section 
        style={{ opacity, scale, y }}
        className="glass-island px-16 py-16 md:px-20 md:py-24 rounded-xl shadow-[0_32px_80px_rgba(26,33,64,0.15)] text-center max-w-4xl relative z-10 mx-auto transition-transform hover:scale-[1.02] duration-700"
      >
        {/* Floating Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/40 shadow-sm mb-10">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#a02d70]"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">500+ animated icons · free forever</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-headline font-extrabold tracking-tight text-on-background mb-8 leading-[0.9]">
          <span className="font-display italic font-normal text-slate-700">Icons that feel</span>
          <br />
          <span className="letter-animate">
            <span className="text-primary">a</span>
            <span className="text-purple-500">l</span>
            <span className="text-tertiary">i</span>
            <span className="text-blue-400">v</span>
            <span className="text-secondary">e.</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-xl mx-auto leading-relaxed">
          High-fidelity vector animations crafted for the next generation of spatial interfaces. Weightless, precise, and entirely free.
        </p>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-10 py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-xl hover:scale-105 hover:shadow-primary/20 transition-all">
            Browse icons
          </button>
          <button className="px-10 py-5 rounded-full bg-white/40 backdrop-blur-md border border-white/40 text-on-background font-bold shadow-sm hover:bg-white/60 transition-all">
            View on Github
          </button>
        </div>
      </motion.section>

      {/* Island 3 (Right): Stats */}
      <motion.div 
        style={{ x: islandRightX, opacity, y: '-50%' }}
        className="hidden lg:flex absolute right-12 top-2/3 flex-col gap-8 p-10 glass-island rounded-xl shadow-2xl drift-slow" 
        style={{ '--rot': '3deg' } as any}
      >
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-extrabold text-on-background">500+</div>
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Vector Icons</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-extrabold text-on-background">12</div>
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Categories</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-4xl font-extrabold text-primary">Free</div>
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">For Creators</div>
        </div>
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div 
        className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
      >
        <div className="px-3 py-6 glass-island rounded-full flex flex-col items-center gap-2 shadow-lg">
          <div className="w-1 h-4 bg-primary/20 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary rounded-full animate-bounce"></div>
          </div>
          <span className="material-symbols-outlined text-primary">expand_more</span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant/60">Discover</span>
      </motion.div>
    </main>
  );
};

export default Hero;
