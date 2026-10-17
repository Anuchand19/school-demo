import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { RJ_GALLERY_IMAGES } from '../data/images';

export default function ImageGallery({ 
  images = RJ_GALLERY_IMAGES,
  title = "Photographic Archive",
  subtitle = "Moments, spaces, and community life at R.J"
}) {
  const [activeIdx, setActiveIdx] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openLightbox = (index) => {
    setActiveIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
    document.body.style.overflow = 'unset';
  }, []);

  const showNext = useCallback(() => {
    setActiveIdx((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setActiveIdx((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, closeLightbox, showNext, showPrev]);

  // Clean body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Touch swipe support on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        showNext(); // Swipe left -> next
      } else {
        showPrev(); // Swipe right -> prev
      }
    }
  };

  // Dynamic column spans for balanced rhythm with 11 photographs
  const getColSpan = (idx) => {
    if (idx === 0) return 'lg:col-span-7';
    if (idx === 1) return 'lg:col-span-5';
    if (idx === 2 || idx === 3 || idx === 4) return 'lg:col-span-4';
    return 'lg:col-span-6';
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 pb-4 sm:pb-6 border-b border-[#131E18]/15">
          <div>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              CAMPUS & COMMUNITY GALLERY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              {title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#131E18]/65 font-sans mt-2 sm:mt-0 max-w-sm">
            {subtitle}
          </p>
        </div>

        {/* Editorial Masonry/Grid Layout — Preserving Exact Native Aspect Ratios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {images.map((item, idx) => {
            const colSpan = getColSpan(idx);

            return (
              <div
                key={item.id || idx}
                onClick={() => openLightbox(idx)}
                className={`${colSpan} group card-sports cursor-pointer relative bg-[#131E18] rounded-xl overflow-hidden shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]`}
                tabIndex={0}
                role="button"
                aria-label={`View larger image: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
              >
                {/* Fixed container with uncropped, contained photo presentation */}
                <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#131E18] flex items-center justify-center img-unified-wrap">
                  {/* Ambient subtle color aura matching the photograph */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${item.src})` }}
                  />

                  {/* Complete, uncropped, razor-sharp photograph in exact natural ratio */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="relative z-10 max-h-full max-w-full object-contain filter brightness-[0.98] img-unified"
                    style={{
                      imageRendering: 'crisp-edges'
                    }}
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay with smooth reversible transition */}
                  <div className="img-unified-overlay z-15" />

                  {/* Interactive VIEW -> Badge on Hover */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1.5 rounded-full bg-[#131E18]/85 backdrop-blur-md text-[#FAF8F5] border border-[#C59A3F]/40 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 shadow-lg">
                    <span className="text-[10px] font-sans font-bold tracking-[0.16em] uppercase text-[#C59A3F]">
                      VIEW
                    </span>
                    <span className="text-xs text-[#FAF8F5] card-arrow-shift">
                      →
                    </span>
                  </div>

                  {/* Card Label Lockup with subtle upward lift */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 z-20 text-[#FAF8F5] space-y-0.5 pointer-events-none card-text-shift">
                    <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#C59A3F] font-sans font-semibold block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-white font-normal truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL — Full HD Crystal-Clear Presentation */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-[#131E18]/96 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-fade-in select-none"
        >
          {/* Top Bar: Counter & Close */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.24em] font-sans text-[#C59A3F] font-semibold">
                R.J OFFICIAL GALLERY
              </span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-xs tracking-widest text-white/70 font-sans">
                {String(activeIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Stage: Image and Left/Right Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-3 sm:my-6 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 min-h-[44px] min-w-[44px] rounded-full bg-[#131E18]/80 hover:bg-[#131E18] text-white/80 hover:text-[#C59A3F] border border-white/15 transition-all cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Active Image — Exact Native Aspect Ratio & Maximum Sharpness */}
            <div className="max-w-5xl max-h-[75vh] w-full flex items-center justify-center px-4 sm:px-12">
              <img
                src={images[activeIdx].src}
                alt={images[activeIdx].alt}
                className="max-h-[72vh] max-w-full object-contain shadow-2xl transition-all duration-300"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 min-h-[44px] min-w-[44px] rounded-full bg-[#131E18]/80 hover:bg-[#131E18] text-white/80 hover:text-[#C59A3F] border border-white/15 transition-all cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Bottom Bar: Caption & Alt text */}
          <div className="max-w-4xl mx-auto w-full text-center space-y-1 pt-2 border-t border-white/10">
            <h4 className="font-serif text-lg sm:text-xl text-[#FAF8F5] font-normal">
              {images[activeIdx].title}
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-sans max-w-md mx-auto">
              {images[activeIdx].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
