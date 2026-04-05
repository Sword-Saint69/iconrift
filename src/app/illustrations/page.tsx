'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  PaintBrushIcon, 
  CubeTransparentIcon 
} from '@heroicons/react/24/outline';

const illustrations = [
  {
    title: 'Spatial Nodes',
    description: 'A deep dive into interconnected 3D spatial networks with vibrant cyan and violet glows.',
    image: '/illustrations/nodes.png',
    tag: 'Abstract',
    icon: CubeTransparentIcon
  },
  {
    title: 'Fluid Layers',
    description: 'Iridescent translucent fluid layers exploring depth and light in a soft spectrum.',
    image: '/illustrations/fluid.png',
    tag: 'Ambient',
    icon: SparklesIcon
  },
  {
    title: 'Refractive Prism',
    description: 'Geometric glass refraction capturing the dispersion of light in a spatial prism.',
    image: '/illustrations/prism.png',
    tag: 'Geometric',
    icon: PaintBrushIcon
  }
];

export default function IllustrationsPage() {
  return (
    <div className="relative selection:bg-primary-container selection:text-on-primary-container pt-32 pb-32">
      <main className="relative z-10 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Vector Artworks</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-background mb-8"
          >
            Spatial <span className="font-display italic font-normal text-slate-500">Visuals</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Our illustrations are crafted for high-fidelity spatial interfaces, exploring the intersection of light, geometry, and dimension.
          </motion.p>
        </header>

        <section className="space-y-32">
          {illustrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] blur-2xl group-hover:from-primary/20 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                <div className="relative glass-island overflow-hidden rounded-[2rem] shadow-2xl border border-white/40">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">{item.tag}</span>
                </div>
                
                <h2 className="text-4xl font-bold text-on-background mb-6 leading-tight">
                  {item.title}
                </h2>
                
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  {item.description}
                </p>
                
                <button className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-primary hover:gap-6 transition-all group">
                  Download Project Source
                  <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                    download
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
