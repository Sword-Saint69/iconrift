'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative"
    >
      {children}
    </motion.div>
  );
};

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
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-headline font-extrabold tracking-tight text-on-background mb-4">
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
            whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
            className="perspective-1000 glass-island aspect-square rounded-xl shadow-lg border border-white/40 hover:bg-white/80 transition-colors cursor-pointer group"
          >
            <TiltCard>
              <div className="flex flex-col items-center justify-center gap-3 w-full h-full p-4" style={{ transform: "translateZ(50px)" }}>
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <span className="material-symbols-outlined text-[28px] text-slate-700 group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                  {item.name}
                </span>
              </div>
            </TiltCard>
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
