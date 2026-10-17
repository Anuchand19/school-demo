import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { usePageMeta } from '../hooks/usePageMeta';
import { INSTITUTIONAL_VALUES, LEADERSHIP_TEAM, SCHOOL_INFO } from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function AboutPage() {
  usePageMeta(
    "About R.J | Excellence Through Education",
    "At R.J, academic development, creative exploration, character and personal growth come together in one cohesive learning experience."
  );

  // Vertical interactive list state for OUR VALUES
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const activeValue = INSTITUTIONAL_VALUES[activeValueIndex];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="ABOUT R.J"
        title="Education built around the whole student."
        description="At R.J, academic development, creative exploration, character and personal growth come together in one cohesive learning experience."
        imageSrc={IMAGES.aboutHero}
        imageAlt={`${SCHOOL_INFO.name} Campus and Community`}
        imageCaption="Main Academic Campus · Coimbatore, Tamil Nadu"
      />

      {/* 01 OUR STORY: Large Image + Story */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
                01 — OUR STORY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal leading-tight">
                Founded with a simple idea.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed">
              <p>
                R.J was established with the belief that students learn best when they are known, challenged and encouraged to explore. Over time, that idea has grown into a vibrant school community serving students across multiple stages of learning.
              </p>
              <p>
                Located in Coimbatore, Tamil Nadu, our campus was designed to provide a calm, intellectually stimulating environment where children feel secure taking creative and intellectual risks.
              </p>
              <p>
                Rather than treating education solely as preparation for examinations, our teachers guide students to develop genuine curiosity, clear communication, and the practical confidence to solve real-world problems.
              </p>
            </div>

          </div>

          {/* Documentary Image: Preserves exact native ratio with zero crop or over-enlargement */}
          <div className="mt-10 sm:mt-16 relative max-w-4xl mx-auto overflow-hidden bg-[#131E18] shadow-xl flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-20 scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${IMAGES.aboutCampusArch})` }}
            />
            <img
              src={IMAGES.aboutCampusArch}
              alt="R.J school main entrance gate and campus exterior"
              className="relative z-10 max-h-[460px] w-auto max-w-full object-contain filter brightness-[0.98]"
              style={{ imageRendering: 'crisp-edges' }}
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 bg-[#131E18]/85 backdrop-blur-md px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-sans text-white/90 border border-white/10">
              Campus Entrance Gate & Welcome Grounds
            </div>
          </div>
        </div>
      </section>

      {/* 02 OUR PHILOSOPHY: Large Editorial Statement */}
      <section className="py-16 sm:py-24 lg:py-36 bg-[#F5F2EA] border-b border-[#131E18]/10 text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-6 sm:space-y-8">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C59A3F] block">
            02 — OUR PHILOSOPHY
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.25] tracking-tight">
            “Learning should give students the confidence to ask better questions, explore their interests and contribute meaningfully to the world around them.”
          </blockquote>
          <p className="text-xs sm:text-sm text-[#131E18]/60 font-sans uppercase tracking-[0.24em] pt-2 sm:pt-4">
            The Educational Core
          </p>
        </div>
      </section>

      {/* 03 OUR VALUES: Vertical Interactive List */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              03 — OUR VALUES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              Principles that guide our daily life
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* Vertical Interactive List */}
            <div className="lg:col-span-5 divide-y divide-[#131E18]/15 border-y border-[#131E18]/15">
              {INSTITUTIONAL_VALUES.map((val, idx) => {
                const isActive = activeValueIndex === idx;
                return (
                  <button
                    key={val.id}
                    onClick={() => setActiveValueIndex(idx)}
                    className={`w-full text-left py-4 sm:py-6 px-4 sm:px-6 transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] ${
                      isActive ? 'bg-[#F5F2EA] pl-6 sm:pl-8' : 'hover:bg-[#F5F2EA]/40'
                    }`}
                  >
                    <div className="flex items-baseline gap-3.5 sm:gap-4">
                      <span className={`font-serif text-xl sm:text-2xl ${isActive ? 'text-[#C59A3F]' : 'text-[#131E18]/30'}`}>
                        {val.short}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
                        {val.name}
                      </span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-all ${
                      isActive ? 'text-[#C59A3F] translate-x-1 opacity-100' : 'text-[#131E18]/20 opacity-0'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Dynamic Value Explanation Panel */}
            <div className="lg:col-span-7 bg-[#F5F2EA] p-6 sm:p-10 lg:p-12 border border-[#131E18]/10 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-[#131E18]/10 pb-3 sm:pb-4">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-semibold font-sans">
                  VALUE {activeValue.short} · {activeValue.name.toUpperCase()}
                </span>
                <span className="text-xs font-sans text-[#131E18]/50">
                  Guiding Tenet
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#131E18] font-normal">
                {activeValue.tagline}
              </h3>

              <p className="text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed">
                {activeValue.description}
              </p>

              <blockquote className="text-xs sm:text-sm font-serif italic text-[#131E18]/70 border-l-2 border-[#C59A3F] pl-4 pt-1">
                “{activeValue.quote}”
              </blockquote>
            </div>

          </div>

        </div>
      </section>

      {/* 04 LEADERSHIP: Principal & Academic Team */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              04 — LEADERSHIP
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              Stewards of institutional vision
            </h2>
          </div>

          {/* Featured Principal Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#F5F2EA] border border-[#131E18]/10 p-6 sm:p-10 lg:p-12 mb-10 sm:mb-16">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#131E18] shadow-md flex items-center justify-center">
                <img
                  src={LEADERSHIP_TEAM[0].image}
                  alt={LEADERSHIP_TEAM[0].name}
                  className="w-full h-full object-contain filter brightness-[0.98]"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C59A3F] font-semibold font-sans">
                {LEADERSHIP_TEAM[0].role}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal">
                {LEADERSHIP_TEAM[0].name}
              </h3>
              <p className="text-xs text-[#131E18]/60 font-sans">
                {LEADERSHIP_TEAM[0].degrees}
              </p>
              <blockquote className="font-serif text-base sm:text-lg lg:text-xl text-[#131E18]/85 italic leading-snug pt-1 sm:pt-2">
                “{LEADERSHIP_TEAM[0].quote}”
              </blockquote>
              <p className="text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed pt-1 sm:pt-2">
                {LEADERSHIP_TEAM[0].bio}
              </p>
            </div>
          </div>

          {/* Academic Coordinators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {LEADERSHIP_TEAM.slice(1).map((leader, idx) => (
              <div key={idx} className="space-y-3 sm:space-y-4 border-t border-[#131E18]/15 pt-5 sm:pt-6">
                <div className="aspect-[4/3] overflow-hidden bg-[#131E18] flex items-center justify-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ imageRendering: 'crisp-edges' }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#131E18] font-normal">
                    {leader.name}
                  </h4>
                  <div className="text-xs uppercase tracking-wider text-[#C59A3F] font-sans font-medium mt-0.5">
                    {leader.role}
                  </div>
                  <div className="text-[11px] text-[#131E18]/60 font-sans mt-0.5">
                    {leader.degrees}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 OUR COMMUNITY */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              05 — OUR COMMUNITY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              Students, teachers and families working together
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/70 font-sans mt-2 sm:mt-3 leading-relaxed">
              Our school brings together an engaged community of learners, educators and parents who share a common commitment to curiosity, character and mutual respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="aspect-[4/3] overflow-hidden bg-[#131E18] flex items-center justify-center">
                <img
                  src={IMAGES.aboutFounders}
                  alt="R.J school faculty and staff community"
                  className="w-full h-full object-contain filter brightness-[0.98]"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#131E18]">Faculty Mentors</h4>
              <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                Dedicated educators who know their students well, encouraging independent thinking, clear reasoning, and kind collaboration.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="aspect-[4/3] overflow-hidden bg-[#131E18] flex items-center justify-center">
                <img
                  src={IMAGES.academicsSeminar}
                  alt="R.J classroom session and learners"
                  className="w-full h-full object-contain filter brightness-[0.98]"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#131E18]">Curious Learners</h4>
              <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                Students from Pre-KG to Grade 12 who are encouraged to ask questions, explore diverse subjects, and learn through practical experience.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="aspect-[4/3] overflow-hidden bg-[#131E18] flex items-center justify-center">
                <img
                  src={IMAGES.admissionsWalk}
                  alt="R.J school campus entrance with arch and green hedge"
                  className="w-full h-full object-contain filter brightness-[0.98]"
                  style={{ imageRendering: 'crisp-edges' }}
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#131E18]">Engaged Families</h4>
              <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                Parents who actively partner with the school through dialogues, school events, and supportive community initiatives.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* End with "Discover R.J" CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 space-y-5 sm:space-y-6">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
            NEXT STEPS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal">
            Discover R.J
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            The best way to understand our ethos is to experience a morning seminar in session. We welcome you to arrange a personal visit to R.J.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/admissions/visit"
              className="btn-primary"
            >
              <span>Book a Visit</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/academics"
              className="btn-secondary"
            >
              Explore Academics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
