'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { collections } from '@/data/collections';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import CodeModal from '@/components/CodeModal';

const iconContainerVariants: Variants = {
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

export default function CollectionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedIcon, setSelectedIcon] = useState<{ name: string; component: any } | null>(null);

  const id = params?.id as string;
  const collection = collections.find((c) => c.id === id);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Collection not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative selection:bg-primary-container selection:text-on-primary-container pt-32 pb-32">
      <div className="px-6 max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/collections')}
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors mb-10 group"
          >
            <ChevronLeftIcon className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Collections
          </motion.button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-background"
              >
                {collection.name}
              </motion.h1>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-20">
          {collection.icons.map((icon, i) => (
            <motion.div
              key={icon.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + (i * 0.03) }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedIcon(icon)}
              className="glass-island aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer relative group border border-white/40 hover:bg-white/60 transition-all shadow-lg hover:shadow-xl overflow-hidden"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-white shadow-inner flex items-center justify-center animated-icon-container"
                variants={iconContainerVariants}
                initial="normal"
                whileHover="animate"
              >
                <icon.component className={`w-8 h-8 ${collection.color}`} />
              </motion.div>
              
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-on-background transition-colors">
                {icon.name}
              </span>
            </motion.div>
          ))}
        </section>

        <CodeModal 
          isOpen={!!selectedIcon} 
          onClose={() => setSelectedIcon(null)} 
          icon={selectedIcon}
          color={collection.color}
        />
      </div>
    </div>
  );
}
