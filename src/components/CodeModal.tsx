'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Terminal, Code2, Cpu, Settings2, Palette } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon: {
    name: string;
    component: any;
  } | null;
  color?: string;
}

const colors = [
  { name: 'Indigo', class: 'text-indigo-600', bg: 'bg-indigo-600' },
  { name: 'Emerald', class: 'text-emerald-600', bg: 'bg-emerald-600' },
  { name: 'Rose', class: 'text-rose-600', bg: 'bg-rose-600' },
  { name: 'Amber', class: 'text-amber-500', bg: 'bg-amber-500' },
  { name: 'Slate', class: 'text-slate-600', bg: 'bg-slate-600' },
];

const CodeModal = ({ isOpen, onClose, icon, color: initialColor = 'text-indigo-600' }: CodeModalProps) => {
  const [activeTab, setActiveTab] = useState<'jsx' | 'tsx' | 'install'>('jsx');
  const [copied, setCopied] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors.find(c => c.class === initialColor) || colors[0]);
  const [speed, setSpeed] = useState(1.2);
  const [stroke, setStroke] = useState(1.5);

  if (!icon) return null;

  const jsxCode = `import { motion } from 'framer-motion';
import { ${icon.name} } from 'lucide-react';

const AnimatedIcon = () => (
  <motion.div
    className="animated-icon-container"
    whileHover={{ 
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      "--path-offset": [100, 0] 
    }}
    transition={{ duration: ${speed.toFixed(1)}, ease: "easeInOut" }}
  >
    <${icon.name} 
      className="w-8 h-8 ${selectedColor.class}" 
      strokeWidth={${stroke.toFixed(1)}} 
    />
  </motion.div>
);`;

  const tsxCode = `import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ${icon.name}, LucideProps } from 'lucide-react';

interface AnimatedIconProps extends LucideProps {
  duration?: number;
  strokeWidth?: number;
}

const iconVariants: Variants = {
  normal: { scale: 1, rotate: 0, "--path-offset": 0 } as any,
  animate: { 
    scale: 1.2, 
    rotate: [0, 5, -5, 0], 
    "--path-offset": [100, 0],
    transition: { duration: ${speed.toFixed(1)}, ease: "easeInOut" }
  }
};

export const Animated${icon.name} = ({ 
  duration = ${speed.toFixed(1)}, 
  strokeWidth = ${stroke.toFixed(1)},
  ...props 
}: AnimatedIconProps) => (
  <motion.div
    className="animated-icon-container cursor-pointer"
    initial="normal"
    whileHover="animate"
    variants={iconVariants}
  >
    <${icon.name} 
      className="${selectedColor.class}" 
      strokeWidth={strokeWidth} 
      {...props} 
    />
  </motion.div>
);`;

  const installInstructions = `# Step 1: Install Dependencies
npm install framer-motion lucide-react

# Step 2: Add CSS to globals.css
.animated-icon-container svg * {
  stroke-dasharray: 100;
  stroke-dashoffset: var(--path-offset, 0);
  transition: stroke-dashoffset 0.8s ease-out;
}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-background/40 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white/90 rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden flex flex-col lg:flex-row h-full max-h-[800px]"
          >
            {/* Left: Preview & Customization Studio */}
            <div className="w-full lg:w-[400px] bg-slate-50/50 p-10 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-100 overflow-y-auto">
              <div className="flex-1 flex flex-col items-center justify-center mb-10">
                <motion.div
                  className="w-40 h-40 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center mb-6 animated-icon-container border border-slate-50"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    "--path-offset": [100, 0, 100]
                  }}
                  transition={{ 
                    duration: speed * 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <icon.component 
                    className={`w-20 h-20 ${selectedColor.class} transition-colors duration-500`} 
                    strokeWidth={stroke} 
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-2xl font-headline font-black text-on-background">{icon.name}</h3>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">Spatial Studio Pre-release</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-8">
                {/* Color Picker */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Palette className="w-3 h-3" /> Appearance
                  </div>
                  <div className="flex gap-4">
                    {colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded-full ${c.bg} transition-all relative ${
                          selectedColor.name === c.name ? 'scale-110 ring-4 ring-offset-4 ring-slate-100' : 'hover:scale-110 opacity-60 hover:opacity-100'
                        }`}
                      >
                        {selectedColor.name === c.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Speed Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <Settings2 className="w-3 h-3" /> Speed
                    </div>
                    <span className="text-xs font-bold text-slate-900">{speed.toFixed(1)}s</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Stroke Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <Settings2 className="w-3 h-3" /> Weight
                    </div>
                    <span className="text-xs font-bold text-slate-900">{stroke.toFixed(1)}px</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="3.0"
                    step="0.1"
                    value={stroke}
                    onChange={(e) => setStroke(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Right: Multi-tab Code Navigator */}
            <div className="flex-1 flex flex-col min-w-0 bg-white">
              <div className="flex items-center justify-between p-8 border-b border-slate-100">
                <div className="flex gap-2 p-1.5 bg-slate-100 rounded-[1.25rem]">
                  {[
                    { id: 'jsx', label: 'JSX', icon: Code2 },
                    { id: 'tsx', label: 'TSX', icon: Code2 },
                    { id: 'install', label: 'Install', icon: Terminal }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                        activeTab === tab.id 
                          ? 'bg-white text-primary shadow-sm' 
                          : 'text-slate-400 hover:text-on-background'
                      }`}
                    >
                      <tab.icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  ))}
                </div>
                <button onClick={onClose} className="p-3 hover:bg-slate-50 rounded-full transition-colors group">
                  <X className="w-6 h-6 text-slate-400 group-hover:text-on-background" />
                </button>
              </div>

              {/* Code Content Area */}
              <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50 font-mono text-[13px] group relative">
                <button
                  onClick={() => handleCopy(activeTab === 'jsx' ? jsxCode : activeTab === 'tsx' ? tsxCode : installInstructions)}
                  className={`absolute right-12 top-12 px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100 transition-all flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 ${
                    copied ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-white text-primary opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy Code'}
                </button>

                <pre className="text-slate-600 leading-relaxed overflow-x-auto whitespace-pre">
                  {activeTab === 'jsx' ? (
                    <code className="text-slate-800">{jsxCode}</code>
                  ) : activeTab === 'tsx' ? (
                    <code className="text-slate-800">{tsxCode}</code>
                  ) : (
                    <code className="text-slate-500">{installInstructions}</code>
                  )}
                </pre>
              </div>

              {/* Footer Studio Info */}
              <div className="p-8 bg-white border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-900">Adaptive Export</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Configured for {selectedColor.name} • {speed}s • {stroke}px</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CodeModal;
