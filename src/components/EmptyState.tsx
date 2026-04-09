'use client';
import { motion } from 'framer-motion';

export default function EmptyState({ query }: { query: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto py-24 flex flex-col items-center justify-center text-center glass-island rounded-3xl"
    >
      <div className="relative mb-8">
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -left-12 opacity-40 glass-island p-3 rounded-full"
        >
          <span className="material-symbols-outlined text-outline-variant text-[32px]">question_mark</span>
        </motion.div>
        
        <motion.div 
          animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full border-4 border-dashed border-outline-variant/30 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-outline-variant text-[48px]">search_off</span>
        </motion.div>
      </div>

      <h3 className="text-2xl font-headline font-bold text-on-background mb-3">
        No spatial icons found
      </h3>
      <p className="text-on-surface-variant max-w-sm mx-auto mb-8">
        We couldn't find anything matching "<span className="font-bold text-on-surface">{query}</span>". Try tweaking your search terms or explore our categories.
      </p>

      <button className="px-6 py-3 rounded-full bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-colors shadow-sm cursor-pointer">
        Clear Search
      </button>
    </motion.div>
  );
}
