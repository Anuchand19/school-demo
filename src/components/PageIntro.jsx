import React from 'react';

export default function PageIntro({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  children
}) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 lg:pb-20 border-b border-[#131E18]/10 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Intro Typography Lockup */}
        <div className="max-w-3xl space-y-4 mb-8 sm:mb-12 lg:mb-16 animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="w-5 sm:w-6 h-[1.5px] bg-[#C59A3F] animate-draw-line" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
              {label}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#131E18] font-normal leading-[1.14] tracking-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#131E18]/75 font-sans leading-relaxed font-normal pt-1 sm:pt-2">
            {description}
          </p>

          {children && <div className="pt-2">{children}</div>}
        </div>

        {/* Supporting Visual Element: Preserves Natural Aspect Ratio & Maximum Clarity */}
        {imageSrc && (
          <div 
            className="group relative w-full max-w-5xl mx-auto rounded-none overflow-hidden bg-[#131E18] shadow-2xl animate-fade-up-delay-1 border border-[#131E18]/20 flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[480px]"
          >
            {/* Ambient subtle background fill to frame the uncropped photograph gracefully */}
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-25 scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${imageSrc})` }}
            />

            {/* Crystal-Clear Uncropped Photograph in its True Aspect Ratio */}
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="relative z-10 max-h-[360px] sm:max-h-[480px] lg:max-h-[540px] w-auto max-w-full object-contain mx-auto transition-transform duration-500 img-interactive"
              style={{
                imageRendering: 'crisp-edges',
                WebkitFontSmoothing: 'antialiased'
              }}
              loading="eager"
            />

            {/* Subtle bottom vignette to ensure caption readability */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#131E18]/80 to-transparent pointer-events-none z-15" />

            {/* Institutional Caption Pill */}
            {imageCaption && (
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 z-20 bg-[#131E18]/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 border border-white/10 text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-[#FAF8F5] font-sans">
                {imageCaption}
              </div>
            )}

            {/* Subtle View Badge on Hover */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 z-20 bg-[#131E18]/90 backdrop-blur-md px-3 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-[#FAF8F5] border border-white/10 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block">
              VIEW ARCHIVE →
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
