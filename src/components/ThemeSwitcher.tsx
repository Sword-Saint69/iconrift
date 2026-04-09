'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2 items-center px-4 py-2 glass-island rounded-full">
      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mr-2">Theme</span>
      <button 
        onClick={() => setTheme('light')} 
        className={`w-5 h-5 rounded-full border border-white/20 shadow-inner hover:scale-110 transition-transform ${theme === 'light' ? 'ring-2 ring-primary ring-offset-2 ring-offset-transparent' : ''} bg-[#f7f5ff]`} 
        title="Light" 
      />
      <button 
        onClick={() => setTheme('dark')} 
        className={`w-5 h-5 rounded-full border border-white/10 shadow-inner hover:scale-110 transition-transform ${theme === 'dark' ? 'ring-2 ring-primary ring-offset-2 ring-offset-transparent' : ''} bg-[#090a0f]`} 
        title="Dark" 
      />
      <button 
        onClick={() => setTheme('cyberpunk')} 
        className={`w-5 h-5 rounded-full border border-black/20 shadow-inner hover:scale-110 transition-transform ${theme === 'cyberpunk' ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-transparent' : ''} bg-[#fcee0a]`} 
        title="Cyberpunk" 
      />
      <button 
        onClick={() => setTheme('vaporwave')} 
        className={`w-5 h-5 rounded-full border border-white/20 shadow-inner hover:scale-110 transition-transform ${theme === 'vaporwave' ? 'ring-2 ring-[#ff71ce] ring-offset-2 ring-offset-transparent' : ''} bg-[#2b213a]`} 
        title="Vaporwave" 
      />
    </div>
  );
}
