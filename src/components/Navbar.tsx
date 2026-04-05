import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center px-8 py-3 w-[calc(100%-3rem)] max-w-7xl glass-island rounded-full shadow-2xl font-body text-sm font-medium tracking-tight border border-white/40">
      <Link href="/" className="text-xl font-black tracking-tighter text-on-background flex items-center gap-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
        Iconrift
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link className="text-primary font-bold border-b-2 border-primary/50 pb-1 hover:text-primary-dim hover:scale-105 transition-all duration-300" href="/">Icons</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-all duration-300" href="/illustrations">Illustrations</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-all duration-300" href="/collections">Collections</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-all duration-300" href="#">Guidelines</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-[18px]">search</span>
          <input 
            className="bg-white/40 border border-white/20 rounded-full py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-primary/20 w-48 outline-none backdrop-blur-sm" 
            placeholder="Search library..." 
            type="text"
          />
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-all">
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
