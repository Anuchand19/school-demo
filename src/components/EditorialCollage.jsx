import React, { useState } from 'react';

/**
 * EditorialCollage — Layered 3-photograph editorial composition with interactive depth hover (Sections 11 & 12)
 */
export default function EditorialCollage({
  primary,
  secondaryLeft,
  secondaryRight,
  className = ''
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const images = [
    { ...secondaryLeft, defaultPos: 'left' },
    { ...primary, defaultPos: 'center' },
    { ...secondaryRight, defaultPos: 'right' }
  ];

  return (
    <div className={`relative w-full py-6 sm:py-10 select-none ${className}`}>
      {/* Desktop & Tablet: Layered Composition */}
      <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center">
        
        {/* 1. LEFT LAYERED PHOTOGRAPH */}
        <div
          onMouseEnter={() => setHoveredIdx(0)}
          onMouseLeave={() => setHoveredIdx(null)}
          className={`absolute left-0 sm:left-4 lg:left-8 top-8 sm:top-12 w-[55%] sm:w-[46%] lg:w-[42%] aspect-[4/3] rounded-sm overflow-hidden bg-[#131E18] shadow-xl border border-white/20 transition-all duration-500 ease-out cursor-pointer ${
            hoveredIdx === 0
              ? 'z-30 scale-105 rotate-0 shadow-2xl brightness-100'
              : hoveredIdx !== null
              ? 'z-10 scale-95 opacity-70 -rotate-3'
              : 'z-10 -rotate-2 hover:rotate-0 brightness-[0.96]'
          }`}
        >
          <img
            src={secondaryLeft.src}
            alt={secondaryLeft.alt || 'R.J School photograph'}
            className="w-full h-full object-cover img-interactive"
            loading="lazy"
          />
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-[#131E18]/85 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[8.5px] sm:text-[9.5px] tracking-[0.2em] uppercase font-sans text-white/90">
            {secondaryLeft.caption || 'Academic Culture'}
          </div>
        </div>

        {/* 2. RIGHT LAYERED PHOTOGRAPH */}
        <div
          onMouseEnter={() => setHoveredIdx(2)}
          onMouseLeave={() => setHoveredIdx(null)}
          className={`absolute right-0 sm:right-4 lg:right-8 bottom-6 sm:bottom-10 w-[55%] sm:w-[46%] lg:w-[42%] aspect-[4/3] rounded-sm overflow-hidden bg-[#131E18] shadow-xl border border-white/20 transition-all duration-500 ease-out cursor-pointer ${
            hoveredIdx === 2
              ? 'z-30 scale-105 rotate-0 shadow-2xl brightness-100'
              : hoveredIdx !== null
              ? 'z-10 scale-95 opacity-70 rotate-3'
              : 'z-10 rotate-2 hover:rotate-0 brightness-[0.96]'
          }`}
        >
          <img
            src={secondaryRight.src}
            alt={secondaryRight.alt || 'R.J School photograph'}
            className="w-full h-full object-cover img-interactive"
            loading="lazy"
          />
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#131E18]/85 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[8.5px] sm:text-[9.5px] tracking-[0.2em] uppercase font-sans text-white/90">
            {secondaryRight.caption || 'Student Expression'}
          </div>
        </div>

        {/* 3. CENTER PRIMARY PHOTOGRAPH (Prominent Hero in the Stack) */}
        <div
          onMouseEnter={() => setHoveredIdx(1)}
          onMouseLeave={() => setHoveredIdx(null)}
          className={`relative w-[78%] sm:w-[68%] lg:w-[62%] aspect-[16/10] rounded-sm overflow-hidden bg-[#131E18] shadow-2xl border-2 border-white/30 transition-all duration-500 ease-out cursor-pointer ${
            hoveredIdx === 1
              ? 'z-30 scale-[1.03] rotate-0 shadow-[0_25px_60px_rgba(19,30,24,0.35)]'
              : hoveredIdx !== null
              ? 'z-10 scale-95 opacity-80'
              : 'z-20 scale-100 rotate-0'
          }`}
        >
          <img
            src={primary.src}
            alt={primary.alt || 'R.J School main feature'}
            className="w-full h-full object-cover img-interactive"
            loading="lazy"
          />
          <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#131E18]/90 backdrop-blur-md px-3 py-1.5 border border-[#C59A3F]/40 text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#C59A3F] font-sans font-semibold">
            {primary.badge || 'FEATURED'}
          </div>
          <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 max-w-[80%] bg-[#131E18]/85 backdrop-blur-md px-3 py-2 border border-white/10">
            <span className="font-serif text-white text-xs sm:text-sm font-normal block">
              {primary.caption || 'Community & Leadership at R.J'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
