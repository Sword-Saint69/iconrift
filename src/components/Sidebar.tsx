'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { 
  Home, 
  Grid2X2, 
  Info 
} from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const iconVariants: Variants = {
  normal: { 
    scale: 1, 
    rotate: 0,
    "--path-offset": 0
  } as any,
  animate: { 
    scale: 1.25, 
    rotate: [0, 5, -5, 0],
    "--path-offset": [100, 0],
    transition: { 
      duration: 1.2, 
      ease: "easeInOut",
      "--path-offset": { duration: 1.8, ease: "easeInOut" }
    } 
  }
};

const SidebarItem = ({ icon: Icon, label, href, external = false }: { icon: any, label: string, href: string, external?: boolean }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const content = (
    <motion.div
      className={`group relative p-4 rounded-full transition-all duration-300 flex items-center justify-center animated-icon-container ${
        isActive 
          ? 'bg-primary/10 text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]' 
          : 'text-on-surface-variant/60 hover:bg-white/50 hover:text-primary'
      }`}
      variants={iconVariants}
      initial="normal"
      whileHover="animate"
    >
      <Icon className="w-6 h-6 stroke-[1.5px]" />
      
      {/* Tooltip */}
      <div className="absolute left-full ml-4 px-3 py-1.5 bg-on-background text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all pointer-events-none shadow-xl border border-white/10 backdrop-blur-md">
        {label}
      </div>

      {isActive && (
        <div className="absolute -left-2 w-1 h-6 bg-primary rounded-r-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
      )}
    </motion.div>
  );

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return <Link href={href}>{content}</Link>;
};

const Sidebar = () => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 px-3 glass-island rounded-full h-fit py-8 shadow-2xl border border-white/40">
      <div className="text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant/40 rotate-180 [writing-mode:vertical-lr] mb-4">
        Explore
      </div>
      
      <div className="flex flex-col gap-3">
        <SidebarItem icon={Home} label="Home" href="/" />
        <SidebarItem icon={Grid2X2} label="Library" href="/collections" />
        <SidebarItem icon={GithubIcon} label="Github" href="https://github.com" external />
        <SidebarItem icon={Info} label="About" href="/about" />
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse mx-auto"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
