import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PreloaderContext = createContext(null);

export function PreloaderProvider({ children }) {
  // Detect prefers-reduced-motion
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      const listener = (e) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Preloader phases:
  // 'intro-enter'    : Logo enters (opacity 0 -> 1, scale 0.75 -> 1.05, rotate -8deg -> 0deg)
  // 'intro-settle'   : Logo settles into scale 1.0, 0deg
  // 'loading'        : Logo at center with subtle breathing, progress 00% -> 100%
  // 'anticipation'   : 100% reached, logo slightly enlarges (pushback prep), text fades
  // 'traveling'      : Logo travels toward header with spring overshoot, curtain lifts, hero reveals
  // 'settled'        : Logo docked in header, homepage fully interactive
  const [phase, setPhase] = useState('intro-enter');
  const [progress, setProgress] = useState(0);

  // Staggered reveal flags
  const [headerRevealed, setHeaderRevealed] = useState(false);
  const [heroImageRevealed, setHeroImageRevealed] = useState(false);
  const [heroTextRevealed, setHeroTextRevealed] = useState(false);

  // Exact target rectangle of the logo slot in Header
  const [targetRect, setTargetRect] = useState(null);

  const registerTargetSlot = useCallback((rect) => {
    if (rect) {
      setTargetRect({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
  }, []);

  // Choreographed Cinematic Loading Sequence
  useEffect(() => {
    if (isReducedMotion) {
      // Reduced motion: instant reveal
      const timer = setTimeout(() => {
        setPhase('settled');
        setHeaderRevealed(true);
        setHeroImageRevealed(true);
        setHeroTextRevealed(true);
      }, 150);
      return () => clearTimeout(timer);
    }

    // Safety fallback: ensure header and hero are revealed even if rAF is delayed or tab is in background
    const safetyTimer = setTimeout(() => {
      setPhase('settled');
      setHeaderRevealed(true);
      setHeroImageRevealed(true);
      setHeroTextRevealed(true);
    }, 2800);

    const introEnterDuration = 320;
    const introSettleDuration = 180;
    const loadingDuration = 650;

    // Step 1: Transition from intro-enter to intro-settle
    const enterTimer = setTimeout(() => {
      setPhase('intro-settle');
    }, introEnterDuration);

    // Step 2: Transition from intro-settle to loading with progress count
    let progressTimer;
    const settleTimer = setTimeout(() => {
      setPhase('loading');

      const startTime = Date.now();
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min(100, Math.floor((elapsed / loadingDuration) * 100));
        setProgress(pct);

        if (pct < 100) {
          progressTimer = requestAnimationFrame(updateProgress);
        } else {
          // Step 3: Brief hold at 100%, then anticipation / pushback prep
          setTimeout(() => {
            setPhase('anticipation');

            // Step 4: Traveling toward header with spring overshoot + curtain lift
            setTimeout(() => {
              setPhase('traveling');
              // Simultaneously reveal hero image underneath
              setHeroImageRevealed(true);

              // Staggered header navigation appearance
              setTimeout(() => {
                setHeaderRevealed(true);
              }, 220);

              // Step 5: Settle into exact header logo position
              setTimeout(() => {
                setPhase('settled');

                // Step 6: Hero typography & action buttons reveal
                setTimeout(() => {
                  setHeroTextRevealed(true);
                }, 100);

              }, 600); // 600ms travel & spring overshoot duration

            }, 180); // 180ms anticipation enlargement duration

          }, 100); // 100ms hold at 100%
        }
      };

      progressTimer = requestAnimationFrame(updateProgress);
    }, introEnterDuration + introSettleDuration);

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(enterTimer);
      clearTimeout(settleTimer);
      if (progressTimer) cancelAnimationFrame(progressTimer);
    };
  }, [isReducedMotion]);

  return (
    <PreloaderContext.Provider
      value={{
        phase,
        progress,
        isReducedMotion,
        headerRevealed,
        heroImageRevealed,
        heroTextRevealed,
        targetRect,
        registerTargetSlot,
        isSettled: phase === 'settled'
      }}
    >
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
}
