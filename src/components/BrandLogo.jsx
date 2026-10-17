import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../data/schoolData';
import rjLogo from '../assets/rj-logo.png';
import { usePreloader } from '../context/PreloaderContext';

export default function BrandLogo({
  variant = 'dark',
  showSubtitle = true,
  compactMobile = true,
  isHeaderLogo = false
}) {
  const isLight = variant === 'light';
  const logoSlotRef = useRef(null);

  // Grab preloader context if this is the active header logo
  let preloaderData = null;
  try {
    preloaderData = usePreloader();
  } catch (e) {
    preloaderData = null;
  }

  const phase = preloaderData?.phase || 'settled';
  const isSettled = preloaderData?.isSettled ?? true;
  const isReducedMotion = preloaderData?.isReducedMotion ?? false;
  const registerTargetSlot = preloaderData?.registerTargetSlot;

  // Track initial mount for the 3-step intro animation (opacity 0, scale 0.75, rot -8deg -> 1.05 -> 1.0)
  const [hasEntered, setHasEntered] = useState(false);
  useEffect(() => {
    if (!isHeaderLogo || isSettled) return;
    const timer = requestAnimationFrame(() => {
      setHasEntered(true);
    });
    return () => cancelAnimationFrame(timer);
  }, [isHeaderLogo, isSettled]);

  // Compute initial fallback coordinates so there is zero flash of unpositioned content
  const [slotCoords, setSlotCoords] = useState(() => {
    if (typeof window === 'undefined') return { deltaX: 0, deltaY: 0, centerScale: 2.7 };
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight * 0.42;
    const isDesk = window.innerWidth >= 640;
    const approxTargetX = isDesk ? 56 : 36;
    const approxTargetY = isDesk ? 36 : 28;
    const centerDiameter = isDesk ? 120 : 96;
    return {
      deltaX: centerX - approxTargetX,
      deltaY: centerY - approxTargetY,
      centerScale: centerDiameter / 44
    };
  });

  useLayoutEffect(() => {
    if (!isHeaderLogo || isSettled || isReducedMotion) return;

    const measureSlot = () => {
      if (logoSlotRef.current) {
        const rect = logoSlotRef.current.getBoundingClientRect();
        if (registerTargetSlot) registerTargetSlot(rect);

        // Viewport center for loading screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight * 0.42;

        // Target logo slot center in the header
        const targetCenterX = rect.left + rect.width / 2;
        const targetCenterY = rect.top + rect.height / 2;

        const deltaX = centerX - targetCenterX;
        const deltaY = centerY - targetCenterY;

        // Centered emblem size: 120px desktop, 96px mobile
        const centerDiameter = window.innerWidth >= 640 ? 120 : 96;
        const centerScale = centerDiameter / (rect.width || 44);

        setSlotCoords({ deltaX, deltaY, centerScale });
      }
    };

    measureSlot();
    window.addEventListener('resize', measureSlot);
    return () => window.removeEventListener('resize', measureSlot);
  }, [isHeaderLogo, isSettled, isReducedMotion, registerTargetSlot]);

  // 1. OUTER WRAPPER STYLE (Controls physical position deltaX, deltaY -> 0, 0 with spring pushback)
  let emblemWrapperStyle = {};
  if (isHeaderLogo && !isSettled && !isReducedMotion) {
    const { deltaX, deltaY, centerScale } = slotCoords;

    if (phase === 'traveling') {
      // Physical journey to header: cubic-bezier(0.16, 1.18, 0.3, 1) provides the spring overshoot & pushback
      emblemWrapperStyle = {
        transform: 'translate3d(0px, 0px, 0) scale(1)',
        transition: 'transform 600ms cubic-bezier(0.16, 1.18, 0.3, 1)',
        zIndex: 70
      };
    } else {
      // Centered on the preloader screen
      emblemWrapperStyle = {
        transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${centerScale})`,
        transition: 'none',
        zIndex: 70
      };
    }
  }

  // 2. INNER LOGO MOTION STYLE (Sections 2, 3 & 8: intro scale/rotate curve & anticipation enlarge)
  let logoMotionStyle = {};
  if (isHeaderLogo && !isSettled && !isReducedMotion) {
    if (phase === 'intro-enter') {
      if (!hasEntered) {
        logoMotionStyle = {
          opacity: 0,
          transform: 'scale(0.75) rotate(-8deg)'
        };
      } else {
        logoMotionStyle = {
          opacity: 1,
          transform: 'scale(1.05) rotate(0deg)',
          transition: 'opacity 300ms ease-out, transform 320ms cubic-bezier(0.16, 1, 0.3, 1)'
        };
      }
    } else if (phase === 'intro-settle') {
      logoMotionStyle = {
        opacity: 1,
        transform: 'scale(1.0) rotate(0deg)',
        transition: 'transform 180ms cubic-bezier(0.25, 1, 0.5, 1)'
      };
    } else if (phase === 'loading') {
      logoMotionStyle = {
        opacity: 1,
        transform: 'scale(1.0) rotate(0deg)'
      };
    } else if (phase === 'anticipation') {
      // Enlarge slightly right before traveling to header (Section 8: pushback anticipation)
      logoMotionStyle = {
        opacity: 1,
        transform: 'scale(1.07) rotate(0deg)',
        transition: 'transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1)'
      };
    } else if (phase === 'traveling') {
      logoMotionStyle = {
        opacity: 1,
        transform: 'scale(1.0) rotate(0deg)',
        transition: 'transform 450ms ease-out'
      };
    }
  }

  // Brand text appearance timing (glides in alongside docked emblem once settled)
  let textStyle = {};
  if (isHeaderLogo && !isSettled && !isReducedMotion) {
    const isRevealing = phase === 'traveling' || phase === 'settled';
    textStyle = {
      opacity: isRevealing ? 1 : 0,
      transform: isRevealing ? 'translateX(0)' : 'translateX(-12px)',
      transition: 'opacity 380ms ease-out 250ms, transform 450ms cubic-bezier(0.16, 1, 0.3, 1) 250ms'
    };
  }

  return (
    <Link 
      to="/" 
      className="group inline-flex items-center gap-3 sm:gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
      aria-label={`${SCHOOL_INFO.name} - ${SCHOOL_INFO.tagline}`}
    >
      {/* Official R.J School Crest / Emblem Reserved Slot */}
      <div 
        ref={logoSlotRef}
        className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 ${
          isSettled ? 'group-hover:scale-105' : ''
        } ${
          isLight
            ? 'w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0.5 shadow-sm ring-1 ring-white/20'
            : 'w-10 h-10 sm:w-11 sm:h-11'
        }`}
      >
        {/* The Continuous R.J Emblem Element (Center -> Header Journey) */}
        <div
          style={emblemWrapperStyle}
          className="w-full h-full flex items-center justify-center will-change-transform pointer-events-none"
        >
          <div 
            style={logoMotionStyle}
            className="w-full h-full flex items-center justify-center will-change-transform"
          >
            <img
              src={rjLogo}
              alt={`${SCHOOL_INFO.name} Crest`}
              className={`w-full h-full object-contain ${
                isLight ? '' : 'mix-blend-multiply'
              }`}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Brand Typography Lockup */}
      <div 
        style={textStyle}
        className="flex flex-col text-left justify-center select-none"
      >
        <span className={`font-serif tracking-[0.14em] text-lg sm:text-xl font-bold leading-none transition-colors duration-200 ${
          isLight ? 'text-[#FAF8F5] group-hover:text-[#D99B26]' : 'text-[#131E18] group-hover:text-[#B82025]'
        }`}>
          {SCHOOL_INFO.name}
        </span>
        {showSubtitle && (
          <span className={`text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.16em] uppercase font-sans font-medium mt-1 leading-none ${
            compactMobile ? 'hidden sm:block' : 'block'
          } ${
            isLight ? 'text-white/70' : 'text-[#131E18]/70'
          }`}>
            {SCHOOL_INFO.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
