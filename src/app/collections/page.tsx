'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AmbientBackground from '@/components/AmbientBackground';
import Link from 'next/link';
import { collections } from '@/data/collections';

const iconVariants: Variants = {
  normal: { 
    scale: 1, 
    rotate: 0,
    "--path-offset": 0
  } as any,
  animate: { 
    scale: [1, 1.15, 1], 
    rotate: [0, 5, -5, 0],
    "--path-offset": [100, 0],
    transition: { 
      duration: 1.2, 
      ease: "easeInOut",
      "--path-offset": { duration: 1.8, ease: "easeInOut" }
    } 
  }
};

export default function CollectionsPage() {
  return (
    <div className="relative selection:bg-primary-container selection:text-on-primary-container pt-32">
      <main className="relative z-10 pb-32 px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Library Collections</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-background mb-8"
          >
            Curated <span className="font-display italic font-normal text-slate-500">Categories</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Explore our library through logical groupings. Each collection is optimized for specific use cases and design languages.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, i) => (
            <Link key={collection.id} href={`/collections/${collection.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-island p-8 rounded-3xl flex flex-col h-full gap-6 cursor-pointer group hover:shadow-2xl transition-all duration-500 border border-white/40"
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center animated-icon-container"
                  variants={iconVariants}
                  initial="normal"
                  whileHover="animate"
                >
                  <collection.icon className={`w-8 h-8 ${collection.color}`} />
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-bold text-on-background mb-2 group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {collection.description}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {collection.icons.length} Icons
                  </span>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
