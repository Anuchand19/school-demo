import React from 'react';
import { usePreloader } from '../context/PreloaderContext';

export default function LogoJourneyPreloader() {
  const { phase, progress, isSettled, isReducedMotion } = usePreloader();

  // Remove completely from the DOM once fully settled
  if (isSettled) {
    return null;
  }

  // Preloader UI visibility states
  const isTraveling = phase === 'traveling';
  const showEditorialContent = phase === 'intro-enter' || phase === 'intro-settle' || phase === 'loading';
  const isAnticipating = phase === 'anticipation';

  // Format progress number as two digits (00 to 99, 100)
  const formattedProgress = String(progress).padStart(2, '0');

  return (
    <div
      aria-hidden={isSettled}
      aria-live="polite"
      className={`fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between overflow-hidden will-change-transform ${
        isTraveling
          ? 'transition-transform duration-[650ms] cubic-bezier(0.76, 0, 0.24, 1) -translate-y-full pointer-events-none'
          : 'translate-y-0'
      }`}
    >
      {/* =========================================================================
          1. EDITORIAL BACKGROUND LAYER (Subtle Oversized Watermark + Framing Lines)
          ========================================================================= */}
      {/* Oversized Faint Watermark Typography */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden transition-opacity duration-500"
        style={{ opacity: isAnticipating || isTraveling ? 0 : 1 }}
      >
        <span className="font-serif text-[32vw] sm:text-[22vw] leading-none text-[#131E18]/[0.032] tracking-widest font-light transition-transform duration-1000 ease-out">
          R.J
        </span>
      </div>

      {/* Thin Horizontal Editorial Framing Lines (Top & Bottom Canvas Frames) */}
      <div 
        className="absolute inset-x-6 sm:inset-x-12 top-16 sm:top-20 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isAnticipating || isTraveling ? 0 : 1 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-[#131E18]/8 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F]/70" />
            <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.28em] uppercase text-[#131E18]/50">
              R.J School · Institutional Canvas
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.24em] uppercase text-[#131E18]/40 hidden sm:block">
            Excellence Through Education
          </span>
        </div>
      </div>

      {/* Corner Registration Markings (High-end Editorial Accents) */}
      <div 
        className="absolute inset-8 sm:inset-14 pointer-events-none select-none transition-opacity duration-500 hidden md:block"
        style={{ opacity: isAnticipating || isTraveling ? 0 : 0.6 }}
      >
        <span className="absolute top-0 left-0 text-[#C59A3F] font-mono text-xs">+</span>
        <span className="absolute top-0 right-0 text-[#C59A3F] font-mono text-xs">+</span>
        <span className="absolute bottom-0 left-0 text-[#C59A3F] font-mono text-xs">+</span>
        <span className="absolute bottom-0 right-0 text-[#C59A3F] font-mono text-xs">+</span>
      </div>

      {/* =========================================================================
          2. CENTER EDITORIAL TYPOGRAPHY (Directly Below Centered R.J Logo)
          Note: The actual animated R.J Crest sits above this at z-index 70 from BrandLogo
          ========================================================================= */}
      <div 
        className="absolute left-1/2 top-[53%] sm:top-[54%] -translate-x-1/2 text-center w-full max-w-sm px-4 pointer-events-none transition-all duration-400 ease-out"
        style={{
          opacity: showEditorialContent ? 1 : 0,
          transform: `translate(-50%, ${showEditorialContent ? '0px' : '10px'})`
        }}
      >
        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl text-[#131E18] tracking-[0.22em] font-normal leading-none pl-1">
            R.J
          </h1>
          
          {/* Gold Accent Line */}
          <div className="w-7 h-[1.5px] bg-[#C59A3F] mx-auto opacity-80" />

          <p className="text-[9.5px] sm:text-[10.5px] font-sans font-semibold tracking-[0.28em] uppercase text-[#131E18]/70">
            EXCELLENCE THROUGH EDUCATION
          </p>
        </div>
      </div>

      {/* =========================================================================
          3. MINIMAL EDITORIAL PROGRESS INDICATOR (Near Bottom)
          Section 5: Typography + Very Thin Gold Line (NOT a generic progress bar)
          ========================================================================= */}
      <div 
        className="absolute bottom-10 sm:bottom-14 left-0 right-0 max-w-xs sm:max-w-sm mx-auto px-6 pointer-events-none transition-all duration-400 ease-out"
        style={{
          opacity: showEditorialContent ? 1 : 0,
          transform: `translateY(${showEditorialContent ? '0px' : '12px'})`
        }}
      >
        {/* Label and Running Percentage */}
        <div className="flex items-center justify-between text-[#131E18]">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.26em] uppercase text-[#131E18]/65">
            {progress < 100 ? 'LOADING R.J' : 'ENTERING R.J'}
          </span>
          <span className="font-serif text-sm sm:text-base font-normal tracking-[0.08em] text-[#131E18] tabular-nums">
            {formattedProgress}%
          </span>
        </div>

        {/* Razor-thin 1px Gold Line */}
        <div className="w-full h-[1px] bg-[#131E18]/10 relative overflow-hidden mt-2.5">
          <div 
            className="h-full bg-[#C59A3F] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

    </div>
  );
}
