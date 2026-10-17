import React from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import { ScrollReveal } from '../components/ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { STUDENT_LIFE_DOMAINS, STUDENT_EVENTS, EDITORIAL_NEWS, SCHOOL_INFO } from '../data/schoolData';
import { IMAGES } from '../data/images';
import EditorialMaskReveal from '../components/EditorialMaskReveal';

export default function StudentLifePage() {
  usePageMeta(
    "Student Life | R.J",
    `Student Life at R.J. Discover sports, creative arts, student-led clubs, leadership programs, and community initiatives in Coimbatore.`
  );

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="STUDENT LIFE"
        title="Student Life at R.J"
        description={`Education at ${SCHOOL_INFO.name} extends far beyond the academic curriculum. Students discover passions, build friendships and develop character through a vibrant mix of activities.`}
        imageSrc={IMAGES.studentLifeHero}
        imageAlt="R.J students celebrating with arms raised"
        imageCaption="Student Community & Celebration · R.J School"
      />

      {/* Six Core Domains */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16" delay={40}>
          <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
            <span className="w-5 h-[1.5px] bg-[#C59A3F] animate-draw-line" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
              ACTIVITIES & PROGRAMS
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
            Six areas of exploration
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/70 font-sans mt-2 sm:mt-3 leading-relaxed">
            From competitive athletics and classical arts to student clubs and outdoor expeditions.
          </p>
        </ScrollReveal>

        {/* Alternating Asymmetric Visual Sections */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {STUDENT_LIFE_DOMAINS.map((domain, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <ScrollReveal
                key={domain.id}
                id={domain.id}
                delay={idx * 50}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center"
              >
                {/* Large Visual */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <EditorialMaskReveal direction={isReversed ? 'right-to-left' : 'left-to-right'} delay={60}>
                    <div 
                      className="relative aspect-[16/10] overflow-hidden bg-[#131E18] shadow-xl group card-sports rounded-xl flex items-center justify-center cursor-pointer"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                        style={{ backgroundImage: `url(${domain.image})` }}
                      />
                      <img
                        src={domain.image}
                        alt={domain.title}
                        className="relative z-10 max-h-full max-w-full object-contain filter brightness-[0.98] img-unified"
                        style={{ imageRendering: 'crisp-edges' }}
                        loading="lazy"
                      />
                      <div className="img-unified-overlay" />
                      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 bg-[#131E18]/85 backdrop-blur-md px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-sans text-white/90 border border-white/10 rounded-sm">
                        {domain.title}
                      </div>
                      <div className="absolute bottom-3.5 right-3.5 z-20 bg-[#131E18]/85 backdrop-blur-md text-[#FAF8F5] text-[10px] tracking-wider uppercase px-2.5 py-1 card-arrow-shift pointer-events-none hidden sm:block rounded-sm">
                        VIEW ACTIVITY →
                      </div>
                    </div>
                  </EditorialMaskReveal>
                </div>

                {/* Narrative */}
                <div className={`lg:col-span-5 space-y-3 sm:space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl sm:text-3xl text-[#C59A3F] font-light">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.24em] uppercase text-[#131E18]/50">
                      {domain.label}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal tracking-tight">
                    {domain.title}
                  </h3>

                  <div className="py-2 px-3 sm:px-3.5 bg-[#F5F2EA] border-l-2 border-[#C59A3F] text-xs font-sans font-medium text-[#131E18]">
                    {domain.subcategories}
                  </div>

                  <p className="text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed">
                    {domain.description}
                  </p>

                  {domain.id === 'sports' && (
                    <div className="pt-2">
                      <Link to="/sports" className="btn-primary">
                        <span>Explore Sports Programme</span>
                        <span className="btn-arrow" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Events Area with Fictional Demonstration Dates */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" delay={40}>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 pb-4 sm:pb-6 border-b border-[#131E18]/15">
            <div>
              <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                <span className="w-5 h-[1.5px] bg-[#C59A3F] animate-draw-line" />
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                  CAMPUS CALENDAR
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
                Upcoming school gatherings
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-sans text-[#131E18]/50 mt-2 sm:mt-0">
              * Demonstration Schedule
            </p>
          </div>

          <div className="divide-y divide-[#131E18]/15 border-y border-[#131E18]/15">
            {STUDENT_EVENTS.map((event, idx) => (
              <div
                key={idx}
                className="card-interactive py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start sm:items-center hover:bg-[#FAF8F5]/60 transition-colors px-3 sm:px-4 cursor-pointer"
              >
                <div className="sm:col-span-3">
                  <span className="font-serif text-xl sm:text-2xl text-[#C59A3F] font-normal block">
                    {event.date}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#131E18]/50">
                    {event.category}
                  </span>
                </div>

                <div className="sm:col-span-4">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#131E18] font-normal">
                    {event.title}
                  </h3>
                </div>

                <div className="sm:col-span-5 text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed">
                  {event.description}
                </div>
              </div>
            ))}
          </div>

        </ScrollReveal>
      </section>

      {/* Dispatches & Stories */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" delay={40}>
          
          <div className="max-w-2xl mb-10 sm:mb-16">
            <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
              <span className="w-5 h-[1.5px] bg-[#C59A3F] animate-draw-line" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                STORIES FROM CAMPUS
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              Learning in practice
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/70 font-sans mt-2 sm:mt-3">
              Highlights from our classrooms, studios, and student initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {EDITORIAL_NEWS.map((story) => (
              <article 
                key={story.id} 
                className="card-interactive group p-5 sm:p-7 lg:p-8 bg-[#F5F2EA] border border-[#131E18]/10 hover:border-[#131E18]/25 hover:shadow-md transition-all duration-300 space-y-3 sm:space-y-4"
              >
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-[#131E18] flex items-center justify-center cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                  <img
                    src={story.image}
                    alt={story.title}
                    className="relative z-10 max-h-full max-w-full object-contain filter brightness-[0.98] img-interactive"
                    style={{ imageRendering: 'crisp-edges' }}
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 z-20 bg-[#131E18]/85 backdrop-blur-md text-[#FAF8F5] text-[10px] tracking-wider uppercase px-2.5 py-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block">
                    VIEW DISPATCH →
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider font-sans">
                  <span className="text-[#C59A3F] font-semibold">{story.category}</span>
                  <span className="text-[#131E18]/40">•</span>
                  <span className="text-[#131E18]/60">{story.date}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#131E18] font-normal leading-snug group-hover:text-[#C59A3F] transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed">
                  {story.summary}
                </p>
              </article>
            ))}
          </div>

        </ScrollReveal>
      </section>

      {/* Logical User Journey Next Step */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] text-center">
        <ScrollReveal className="max-w-2xl mx-auto px-5 sm:px-8 space-y-5 sm:space-y-6" delay={40}>
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-4 h-[1.5px] bg-[#C59A3F]" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
              READY TO JOIN US?
            </span>
            <span className="w-4 h-[1.5px] bg-[#C59A3F]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal">
            Your journey begins with admissions
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            Discover our four-step application process, schedule a campus visit, or submit an enquiry.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/admissions"
              className="btn-primary"
            >
              <span>Review Admissions Process</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/admissions/visit"
              className="btn-secondary"
            >
              Book a Visit
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
