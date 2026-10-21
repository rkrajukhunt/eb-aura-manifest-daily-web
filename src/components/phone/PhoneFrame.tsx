import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

// A light iPhone shell. The screen inside always uses the app's light palette, like the App Store shots.
export default function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19.2] rounded-[48px] bg-[#1b1810] p-[9px] shadow-[0_50px_100px_-40px_rgba(27,24,16,0.55),0_0_0_1px_rgba(255,255,255,0.08)_inset] ${className}`}
    >
      <div className="app-light relative h-full w-full overflow-hidden rounded-[39px] bg-[#ece9df] text-[#1b1810] font-sans">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[30%] h-[22px] rounded-full bg-[#1b1810] z-30" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}

export function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`relative z-20 flex items-center justify-between px-6 pt-3.5 text-[11px] font-semibold ${
        light ? 'text-white' : 'text-[#1b1810]'
      }`}
      aria-hidden="true"
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h) => (
            <span key={h} className={`w-[3px] rounded-sm ${light ? 'bg-white' : 'bg-[#1b1810]'}`} style={{ height: h }} />
          ))}
        </span>
        <span className={`ml-1 w-[20px] h-[10px] rounded-[3px] border ${light ? 'border-white' : 'border-[#1b1810]'} p-[1px]`}>
          <span className={`block h-full w-3/4 rounded-[1px] ${light ? 'bg-white' : 'bg-[#1b1810]'}`} />
        </span>
      </span>
    </div>
  );
}
