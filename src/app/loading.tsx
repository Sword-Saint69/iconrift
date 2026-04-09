export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 perspective-1000">
        <div className="w-full h-full animate-[spin_3s_linear_infinite] transform-style-3d">
          {/* Top */}
          <div className="absolute inset-0 border-2 border-primary/40 bg-primary/10 rounded-xl" style={{ transform: 'translateZ(48px)' }}></div>
          {/* Bottom */}
          <div className="absolute inset-0 border-2 border-primary/40 bg-primary/10 rounded-xl" style={{ transform: 'translateZ(-48px)' }}></div>
          {/* Left */}
          <div className="absolute inset-0 border-2 border-primary/40 bg-primary/10 rounded-xl" style={{ transform: 'translateX(-48px) rotateY(-90deg)' }}></div>
          {/* Right */}
          <div className="absolute inset-0 border-2 border-primary/40 bg-primary/10 rounded-xl" style={{ transform: 'translateX(48px) rotateY(90deg)' }}></div>
          {/* Front */}
          <div className="absolute inset-0 border-2 border-primary/40 bg-primary/10 rounded-xl" style={{ transform: 'translateY(-48px) rotateX(90deg)' }}></div>
          {/* Back */}
          <div className="absolute inset-0 border-2 border-primary/40 bg-primary/10 rounded-xl" style={{ transform: 'translateY(48px) rotateX(-90deg)' }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_20px_var(--color-primary)]"></span>
        </div>
      </div>
      <div className="mt-12 text-sm font-bold tracking-widest uppercase text-on-surface-variant animate-pulse">
        Initializing Spatial Engine
      </div>
    </div>
  );
}
