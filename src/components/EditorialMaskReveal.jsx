import React, { useEffect, useRef, useState } from 'react';

/**
 * EditorialMaskReveal — Editorial curtain / mask reveal for high-end photography (Section 10)
 * Directions: 'bottom-to-top' | 'left-to-right' | 'right-to-left' | 'top-to-bottom'
 */
export default function EditorialMaskReveal({
  children,
  direction = 'bottom-to-top',
  delay = 0,
  duration = 800,
  className = '',
  maskColor = '#FAF8F5'
}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Compute transform for mask based on direction
  const getMaskTransform = () => {
    if (!isRevealed) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'left-to-right':
        return 'translate3d(101%, 0, 0)';
      case 'right-to-left':
        return 'translate3d(-101%, 0, 0)';
      case 'top-to-bottom':
        return 'translate3d(0, 101%, 0)';
      case 'bottom-to-top':
      default:
        return 'translate3d(0, -101%, 0)';
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Content / Image */}
      <div
        className="w-full h-full transition-transform ease-out will-change-transform"
        style={{
          transform: isRevealed ? 'scale(1)' : 'scale(1.06)',
          transitionDuration: `${duration + 200}ms`,
          transitionDelay: `${delay}ms`
        }}
      >
        {children}
      </div>

      {/* Editorial Mask Shutter */}
      <div
        className="absolute inset-0 z-20 pointer-events-none will-change-transform"
        style={{
          backgroundColor: maskColor,
          transform: getMaskTransform(),
          transition: `transform ${duration}ms cubic-bezier(0.77, 0, 0.175, 1) ${delay}ms`
        }}
      />
    </div>
  );
}
