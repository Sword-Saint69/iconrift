'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center cursor-help"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: 5, scale: 0.95, x: '-50%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute bottom-full left-1/2 mb-3 px-3 py-1.5 glass-island rounded-md text-[10px] text-on-background uppercase font-bold tracking-widest whitespace-nowrap z-50 pointer-events-none shadow-xl border border-white/20"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
