'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, ShareIcon, BoltIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  return (
    <div className="relative selection:bg-primary-container selection:text-on-primary-container pt-32 pb-32">
      <main className="relative z-10 px-6 max-w-5xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.3em] mb-10"
          >
            <SparklesIcon className="w-4 h-4" />
            The Vision
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-headline font-extrabold tracking-tight text-on-background mb-10"
          >
            About the <span className="font-display italic font-normal text-slate-500">Rift</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Iconrift is a dedicated celestial lab for the next generation of spatial interfaces. We craft high-fidelity, weightless icon animations that breathe life into premium digital environments.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-island p-10 rounded-[3rem] border border-white/40 flex flex-col gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
              <BoltIcon className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-on-background">Spatial Fidelity</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We believe motion should be deliberate, not decorative. Our animations use a 2-second redraw window, reflecting the natural flow of human ocular focus in 3D spatial environments. Weightless assets, massive impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-island p-10 rounded-[3rem] border border-white/40 flex flex-col gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <ShareIcon className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-on-background">Open Protocol</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Every icon in our library is entirely free, open-source, and ready to be integrated into your production workflow. We provide raw SVG paths optimized for Framer Motion, GSAP, or pure CSS orchestrations.
            </p>
          </motion.div>
        </section>

        <section className="glass-island p-16 rounded-[4rem] border border-white/40 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <h2 className="text-4xl font-extrabold text-on-background mb-8">Crafting the <span className="font-display italic font-normal text-slate-500 underline decoration-slate-200 underline-offset-8">Future</span></h2>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed mb-12">
            As computing moves beyond the screen and into our physical space, icons must evolve from static glyphs into interactive, responsive entities. Iconrift is our contribution to this spatial revolution.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-headline font-black text-primary">150+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Premium Icons</span>
            </div>
            <div className="w-px h-12 bg-slate-100"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-headline font-black text-primary">60fps</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Motion Sync</span>
            </div>
            <div className="w-px h-12 bg-slate-100"></div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-headline font-black text-primary">SVG</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Vector Native</span>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
