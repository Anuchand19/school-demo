import React, { useState, useEffect, useRef } from 'react';

/**
 * UnifiedImage
 * Reusable, high-performance image component embodying the unified animation language:
 * - Viewport scroll reveal: subtle scale (0.97 -> 1), opacity (0 -> 1), translateY (24px -> 0)
 * - Symmetrical hover & mouse-leave: scale (1.0 -> 1.045), zero snap/jerk on reverse
 * - Strict aspect ratio preservation, lazy loading, and prefers-reduced-motion compliance.
 */
export default function UnifiedImage({
  src,
  alt = 'R.J School photograph',
  aspectRatio = 'aspect-[16/10]',
  caption,
  badge,
  interactive = true,
  overlay = false,
  delay = 0,
  priority = false,
  className = '',
  imgClassName = '',
  onClick
}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(priority);

  useEffect(() => {
    if (priority || typeof window === 'undefined') return;

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
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      style={{
        transitionDelay: `${delay}ms`
      }}
      className={`group relative overflow-hidden bg-[#131E18] shadow-md ${aspectRatio} ${
        interactive ? 'card-sports cursor-pointer' : ''
      } ${
        priority ? '' : `scroll-image-reveal ${isRevealed ? 'is-revealed' : ''}`
      } ${className}`}
    >
      {/* Background Ambience Layer for letterbox/pillarbox prevention */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* Main Crisp Image with Symmetrical Transition */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`relative z-10 w-full h-full object-cover filter brightness-[0.98] ${
          interactive ? 'img-unified' : ''
        } ${imgClassName}`}
        style={{ imageRendering: 'crisp-edges' }}
      />

      {/* Optional Gradient Overlay (Seamless on hover & reverse) */}
      {(overlay || caption) && (
        <div className="img-unified-overlay z-20" />
      )}

      {/* Optional Editorial Badge */}
      {badge && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 bg-[#131E18]/85 backdrop-blur-md px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-white/90 border border-white/10 rounded-sm">
          {badge}
        </div>
      )}

      {/* Optional Bottom Caption / Action Label */}
      {caption && (
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-30 card-text-shift">
          <p className="text-xs sm:text-sm font-sans font-medium text-[#FAF8F5] drop-shadow-sm leading-snug">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
