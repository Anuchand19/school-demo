import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { usePageMeta } from '../hooks/usePageMeta';
import { ACADEMIC_DIVISIONS, ACADEMIC_PHILOSOPHY_BLOCKS, SCHOOL_INFO } from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function AcademicsPage() {
  usePageMeta(
    "Academics | R.J",
    `Learning that builds depth and perspective. Explore our four learning stages from Early Years to Secondary at ${SCHOOL_INFO.name}.`
  );

  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const division = ACADEMIC_DIVISIONS[activeDivisionIndex];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="ACADEMICS"
        title="Academics at R.J"
        description="Our curriculum encourages students to think critically, explore ideas across disciplines and apply what they learn to real situations."
        imageSrc={IMAGES.academicsHero}
        imageAlt="R.J classroom session and academic presentation"
        imageCaption="Academic Lecture & Presentation Hall · R.J School"
      />

      {/* Persistent Academic Navigation with Touch-Friendly Horizontal Scrolling */}
      <section className="sticky top-[58px] sm:top-[68px] z-30 bg-[#FAF8F5]/96 backdrop-blur-md border-y border-[#131E18]/15 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#C59A3F] font-sans font-semibold shrink-0 hidden sm:inline">
              STAGES:
            </span>
            <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto -mx-5 px-5 sm:mx-0 sm:px-0">
              {ACADEMIC_DIVISIONS.map((div, idx) => {
                const isSelected = activeDivisionIndex === idx;
                return (
                  <button
                    key={div.id}
                    onClick={() => setActiveDivisionIndex(idx)}
                    className={`text-xs sm:text-sm uppercase tracking-[0.18em] font-sans transition-all duration-200 cursor-pointer py-2 px-1 relative shrink-0 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] ${
                      isSelected
                        ? 'text-[#131E18] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#131E18]'
                        : 'text-[#131E18]/50 hover:text-[#131E18]'
                    }`}
                  >
                    {div.navLabel}
                  </button>
                );
              })}
            </div>
            <Link
              to="/admissions/visit"
              className="text-[11px] uppercase tracking-[0.16em] text-[#131E18] font-semibold hover:text-[#C59A3F] transition-colors shrink-0 hidden md:inline-flex min-h-[44px] px-2 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
            >
              Observe a Class →
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Selected Division Breakdown */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 border-b border-[#131E18]/10">
        <div className="space-y-8 sm:space-y-12">
          
          {/* Header Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-end border-b border-[#131E18]/10 pb-6 sm:pb-8">
            <div className="lg:col-span-8 space-y-1.5 sm:space-y-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-semibold font-sans">
                STAGE 0{activeDivisionIndex + 1} · {division.grades} ({division.ageRange})
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
                {division.title}
              </h2>
              <p className="text-sm sm:text-base font-serif italic text-[#131E18]/80 pt-1">
                “{division.description}”
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <span className="inline-block px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#F5F2EA] text-[#131E18] text-[11px] sm:text-xs font-sans uppercase tracking-wider border border-[#131E18]/10">
                {division.subtitle}
              </span>
            </div>
          </div>

          {/* Division Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Focus Areas */}
              <div className="p-4 sm:p-5 bg-[#F5F2EA] border border-[#131E18]/10 space-y-1.5 sm:space-y-2">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C59A3F] font-sans font-semibold block">
                  CORE FOCUS AREAS
                </span>
                <p className="text-sm font-sans text-[#131E18] font-medium leading-relaxed">
                  {division.focus}
                </p>
              </div>

              {/* Learning Approach */}
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-sans font-semibold">
                  Learning Approach
                </h3>
                <p className="text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed">
                  {division.learningApproach}
                </p>
              </div>

              {/* Core Subjects */}
              <div className="space-y-2.5 sm:space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-sans font-semibold">
                  Key Subjects & Disciplines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {division.coreSubjects.map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#131E18]/75 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-2.5 sm:space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-sans font-semibold">
                  Co-Curricular Projects & Exploration
                </h3>
                <div className="space-y-2">
                  {division.activities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#131E18]/75 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Environment */}
              <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-[#131E18]/10">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-sans font-semibold">
                  Learning Environment
                </h3>
                <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed">
                  {division.environment}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  to="/admissions/visit"
                  className="px-6 py-3.5 min-h-[44px] bg-[#131E18] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#1A2821] transition-colors flex items-center justify-center shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                >
                  Book Classroom Visit
                </Link>
                <Link
                  to="/admissions/apply"
                  className="px-6 py-3.5 min-h-[44px] border border-[#131E18]/25 text-[#131E18] text-xs uppercase tracking-[0.16em] font-semibold hover:border-[#131E18] hover:bg-[#F5F2EA] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                >
                  Apply for {division.title}
                </Link>
              </div>
            </div>

            {/* Context Image for Division */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4 pt-2 sm:pt-0">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-[#131E18] shadow-xl flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${division.image})` }}
                />
                <img
                  key={division.id}
                  src={division.image}
                  alt={division.title}
                  className="relative z-10 max-h-full max-w-full object-contain filter brightness-[0.98] transition-opacity duration-500"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-[#131E18]/50 font-sans tracking-wide">
                * Demonstration photography representing learning spaces at R.J.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Academic Philosophy: 4 Editorial Blocks (ASK, EXPLORE, CREATE, REFLECT) */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              ACADEMIC PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              How We Teach
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/70 font-sans mt-2 sm:mt-3 leading-relaxed">
              Our learning methodology follows a purposeful cycle of investigation, application, and reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {ACADEMIC_PHILOSOPHY_BLOCKS.map((block) => (
              <div key={block.id} className="p-5 sm:p-7 lg:p-8 bg-[#FAF8F5] border border-[#131E18]/10 space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl sm:text-3xl text-[#C59A3F] font-light">
                    {block.step}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#131E18]/50 font-semibold">
                    {block.title}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal leading-snug">
                  {block.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Logical User Journey Next Step */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 space-y-5 sm:space-y-6">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
            CONTINUE YOUR EXPLORATION
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal">
            See where learning happens
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            Our campus in Coimbatore brings together modern learning facilities, natural green spaces and collaborative areas designed for focus and creativity.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/campus"
              className="btn-primary"
            >
              <span>Take the Campus Tour</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/admissions"
              className="btn-secondary"
            >
              Admissions Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
