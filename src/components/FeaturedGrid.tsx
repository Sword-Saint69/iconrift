'use client';

import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  { name: 'Home', icon: 'home' },
  { name: 'Settings', icon: 'settings' },
  { name: 'Search', icon: 'search' },
  { name: 'User', icon: 'person' },
  { name: 'Mail', icon: 'mail' },
  { name: 'Cloud', icon: 'cloud' },
  { name: 'Star', icon: 'star' },
  { name: 'Heart', icon: 'favorite' },
  { name: 'Music', icon: 'music_note' },
  { name: 'Camera', icon: 'photo_camera' },
  { name: 'Video', icon: 'videocam' },
  { name: 'Lock', icon: 'lock' },
  { name: 'Moon', icon: 'dark_mode' },
  { name: 'Sun', icon: 'light_mode' },
  { name: 'Bolt', icon: 'bolt' },
  { name: 'Rocket', icon: 'rocket_launch' },
];

const FeaturedGrid = () => {
  return (
    <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-background mb-4">
          Handcrafted <span className="font-display italic font-normal">Precision</span>
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Every icon is digitally balanced and optimized for clarity at any scale. Ready for the next generation of spatial interfaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
        {icons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: (i % 8) * 0.05,
              ease: [0.23, 1, 0.32, 1]
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-island aspect-square flex flex-col items-center justify-center gap-3 p-4 rounded-xl shadow-lg border border-white/40 hover:bg-white/80 transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[28px] text-slate-700 group-hover:text-primary transition-colors">
                {item.icon}
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex justify-center"
      >
        <button className="px-8 py-4 rounded-full bg-on-background text-surface text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
          View full library
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturedGrid;
