import { GraduationCap } from 'lucide-react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-accent rounded-xl rotate-45 opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 border-2 border-accent rounded-lg rotate-12"></div>
      <GraduationCap className="w-6 h-6 text-accent relative z-10" />
    </div>
    <div className="flex flex-col">
      <span className="font-display font-extrabold text-xl leading-none text-primary">Clemtrix</span>
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-accent opacity-80">Education</span>
    </div>
  </div>
);
