import React from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ImageGallery from '../components/ImageGallery';
import { ScrollReveal } from '../components/ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { CAMPUS_AREAS, SCHOOL_INFO } from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function CampusPage() {
  usePageMeta(
    "Campus | R.J",
    `Life at R.J. Explore our classrooms, library, laboratories, arts studios, and green courtyards in Coimbatore.`
  );

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction with Official R.J Entrance */}
      <PageIntro
        label="OUR CAMPUS"
        title="Life at R.J"
        description="Set in Coimbatore, our campus brings together modern learning facilities, natural green spaces and collaborative areas designed to help students focus, create and connect."
        imageSrc={IMAGES.campusHero}
        imageAlt="R.J school campus entrance with arch and green hedge"
        imageCaption="Campus Entrance & Welcome Gate · Coimbatore, Tamil Nadu"
      />

      {/* Scroll-Based Storytelling Visual Tour */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16 lg:mb-20" delay={40}>
          <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
            <span className="w-5 h-[1.5px] bg-[#C59A3F] animate-draw-line" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
              CAMPUS AREAS
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
            Spaces designed for discovery
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans mt-2 sm:mt-3 leading-relaxed">
            Bright classrooms, specialist learning spaces, places to create and spaces to simply pause. Each area is shaped to support different modes of learning.
          </p>
        </ScrollReveal>

        {/* 6 Tour Stops with Consistent Mobile Flow & Alternating Desktop Layouts */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-36">
          {CAMPUS_AREAS.map((section, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <ScrollReveal
                key={section.id}
                id={section.id}
                delay={idx * 50}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div 
                    className="relative aspect-[16/10] overflow-hidden bg-[#131E18] shadow-xl group card-sports rounded-xl flex items-center justify-center cursor-pointer"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                      style={{ backgroundImage: `url(${section.image})` }}
                    />
                    <img
                      src={section.image}
                      alt={section.title}
                      className="relative z-10 max-h-full max-w-full object-contain filter brightness-[0.98] img-unified"
                      style={{ imageRendering: 'crisp-edges' }}
                      loading="lazy"
                    />
                    <div className="img-unified-overlay" />
                    <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 bg-[#131E18]/85 backdrop-blur-md px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-sans text-white/90 border border-white/10 rounded-sm">
                      {section.tag}
                    </div>
                    <div className="absolute bottom-3.5 right-3.5 z-20 bg-[#131E18]/85 backdrop-blur-md text-[#FAF8F5] text-[10px] tracking-wider uppercase px-2.5 py-1 card-arrow-shift pointer-events-none hidden sm:block rounded-sm">
                      VIEW SPACE →
                    </div>
                  </div>
                </div>

                {/* Narrative & Category Label */}
                <div className={`lg:col-span-5 space-y-3 sm:space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl sm:text-3xl text-[#C59A3F] font-light">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.24em] uppercase text-[#131E18]/50">
                      {section.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal tracking-tight">
                    {section.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed">
                    {section.description}
                  </p>

                  <div className="pt-2 text-xs font-sans text-[#131E18]/60 border-t border-[#131E18]/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] shrink-0" />
                    <span>{section.caption}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Official 10-Photograph Editorial Gallery with Interactive Lightbox */}
      <ImageGallery
        title="Campus & Community Gallery"
        subtitle="Explore the campus architecture, students, faculty, and celebrations across R.J."
      />

      {/* Logical User Journey Next Step */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-5 sm:px-8 space-y-5 sm:space-y-6" delay={40}>
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-4 h-[1.5px] bg-[#C59A3F]" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
              VISIT IN PERSON
            </span>
            <span className="w-4 h-[1.5px] bg-[#C59A3F]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal">
            Experience our spaces firsthand
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            Photographs capture the physical forms, but only a campus walk conveys the energy, focus, and warmth of our learning community.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/admissions/visit"
              className="btn-primary"
            >
              <span>Schedule Campus Visit</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/student-life"
              className="btn-secondary"
            >
              Explore Student Life
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
