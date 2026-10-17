import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  SCHOOL_INFO,
  PILLARS,
  STUDENT_EVENTS
} from '../data/schoolData';
import { IMAGES } from '../data/images';
import { usePageMeta } from '../hooks/usePageMeta';
import { usePreloader } from '../context/PreloaderContext';
import { ScrollReveal } from '../components/ScrollReveal';

export default function HomePage() {
  usePageMeta(
    "R.J | Excellence Through Education",
    "R.J — Excellence Through Education. An education built around curiosity, character and the confidence to explore what comes next."
  );

  let preloaderData = null;
  try {
    preloaderData = usePreloader();
  } catch (e) {
    preloaderData = null;
  }

  const isSettled = preloaderData?.isSettled ?? true;
  const heroImageRevealed = preloaderData ? (preloaderData.heroImageRevealed || isSettled) : true;
  const heroTextRevealed = preloaderData ? (preloaderData.heroTextRevealed || isSettled) : true;
  const isReducedMotion = preloaderData?.isReducedMotion ?? false;

  // Active Pillar for Introduction Section
  const [activePillar, setActivePillar] = useState(0);

  // 3 Structured Academic Divisions (Section 13)
  const academicStages = [
    {
      id: "foundation",
      stage: "STAGE 01",
      title: "FOUNDATION",
      grades: "Pre-KG – Kindergarten · Ages 3 – 5",
      description: "Curiosity, sensory exploration, early language acquisition, and social discovery through purposeful guided play.",
      image: IMAGES.studentsCelebration,
      link: "/academics"
    },
    {
      id: "primary",
      stage: "STAGE 02",
      title: "PRIMARY",
      grades: "Grades 1 – 5 · Ages 6 – 10",
      description: "Foundational literacy, mathematical reasoning, scientific inquiry, digital literacy, and collaborative problem-solving.",
      image: IMAGES.classroomSession,
      link: "/academics"
    },
    {
      id: "secondary",
      stage: "STAGE 03",
      title: "SECONDARY",
      grades: "Grades 6 – 12 · Ages 11 – 18",
      description: "Advanced subject mastery, laboratory sciences, analytical writing, independent research electives, and university preparation.",
      image: IMAGES.studentAchievement,
      link: "/academics"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#FAF8F5]">

      {/* =========================================================================
          01 — HERO SECTION (Section 6 & 7: Simplified, balanced, photographic)
          ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden border-b border-[#131E18]/10">
        
        {/* Photographic Canvas: Official R.J Campus Building */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/rj/rj-hero-campus.png"
            onError={(e) => {
              if (!e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = 'true';
                e.currentTarget.src = '/rj-campus-building.png';
              }
            }}
            alt="R.J School Campus Architecture"
            className="w-full h-full object-cover object-[62%_center] md:object-[70%_center] lg:object-[68%_center] will-change-transform"
            style={{
              transform: heroImageRevealed ? 'scale(1) translate3d(0, 0, 0)' : 'scale(1.05) translate3d(0, 0, 0)',
              opacity: heroImageRevealed ? 1 : 0.8,
              imageRendering: 'auto',
              WebkitBackfaceVisibility: 'hidden',
              transition: isReducedMotion ? 'none' : 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out'
            }}
            loading="eager"
            fetchPriority="high"
          />

          {/* Targeted Editorial Gradient: Left soft warm gradient behind text only, crystal clear building view on right */}
          <div 
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(250, 248, 245, 0.94) 0%, rgba(250, 248, 245, 0.75) 28%, rgba(250, 248, 245, 0.18) 46%, rgba(250, 248, 245, 0) 62%)'
            }}
          />
          <div 
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(250, 248, 245, 0.94) 0%, rgba(250, 248, 245, 0.65) 50%, rgba(250, 248, 245, 0.15) 75%, rgba(250, 248, 245, 0) 100%)'
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-xl space-y-6 sm:space-y-7">
            
            {/* Brand & Tagline Eyebrow */}
            <div 
              className="space-y-1.5 transition-all duration-500 ease-out"
              style={{
                opacity: heroTextRevealed ? 1 : 0,
                transform: heroTextRevealed ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: '80ms'
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-5 sm:w-6 h-[1.5px] bg-[#C59A3F] animate-draw-line" />
                <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.24em] uppercase text-[#131E18]">
                  R.J
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C59A3F] block pl-8 sm:pl-9">
                EXCELLENCE THROUGH EDUCATION
              </span>
            </div>

            {/* Main Institutional Headline */}
            <h1 
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#131E18] font-normal leading-[1.12] tracking-tight transition-all duration-500 ease-out"
              style={{
                opacity: heroTextRevealed ? 1 : 0,
                transform: heroTextRevealed ? 'translateY(0)' : 'translateY(18px)',
                transitionDelay: '180ms'
              }}
            >
              Learning that shapes who you become.
            </h1>

            {/* Supporting Description */}
            <p 
              className="text-sm sm:text-base md:text-lg text-[#131E18]/80 font-sans leading-relaxed max-w-lg font-normal transition-all duration-500 ease-out"
              style={{
                opacity: heroTextRevealed ? 1 : 0,
                transform: heroTextRevealed ? 'translateY(0)' : 'translateY(14px)',
                transitionDelay: '280ms'
              }}
            >
              An environment where curiosity, character and confidence grow together.
            </p>

            {/* Two Action Buttons (Section 18 Button System) */}
            <div 
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 transition-all duration-500 ease-out"
              style={{
                opacity: heroTextRevealed ? 1 : 0,
                transform: heroTextRevealed ? 'translateY(0)' : 'translateY(14px)',
                transitionDelay: '380ms'
              }}
            >
              <Link to="/about" className="btn-primary group">
                <span>EXPLORE R.J</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link to="/admissions/apply" className="btn-secondary group">
                <span>ADMISSIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — INTRODUCTION (Who R.J is — Ethos & Foundational Pillars)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Consistent Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C59A3F]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                ABOUT R.J
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.18] tracking-tight">
              An education built on purpose, character and intellectual confidence.
            </h2>
            <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed mt-4">
              At R.J, students develop the curiosity to question deeply, the discipline to master foundational knowledge, and the independence to pursue excellence across academics, the arts, and community leadership.
            </p>
          </div>

          {/* Two-Column Editorial Narrative: 3 Pillars + Campus Community Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: 3 Guiding Pillars */}
            <div className="lg:col-span-6 divide-y divide-[#131E18]/15 border-y border-[#131E18]/15">
              {PILLARS.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <div
                    key={pillar.number}
                    onMouseEnter={() => setActivePillar(idx)}
                    onClick={() => setActivePillar(idx)}
                    className={`py-6 sm:py-7 px-4 sm:px-6 transition-all duration-200 cursor-pointer flex items-start gap-5 sm:gap-6 ${
                      isActive ? 'bg-[#F5F2EA]/70 pl-6 sm:pl-8' : 'hover:bg-[#F5F2EA]/30'
                    }`}
                  >
                    <span className={`font-serif text-2xl sm:text-3xl font-light shrink-0 ${
                      isActive ? 'text-[#C59A3F]' : 'text-[#131E18]/30'
                    }`}>
                      {pillar.number}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans text-[#131E18]/70 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Community & Staff Photograph */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#131E18] shadow-lg border border-[#131E18]/10 group">
                <img
                  src={IMAGES.aboutFounders}
                  alt="R.J School leadership, educators, and community"
                  className="w-full h-full object-cover img-interactive filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#131E18]/85 backdrop-blur-md px-4 py-2 border border-white/10 text-white">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#C59A3F] font-sans font-semibold block">
                    EDUCATIONAL MENTORSHIP
                  </span>
                  <p className="font-serif text-sm font-normal text-white/90">
                    Experienced educators dedicated to every student's growth
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/about" className="btn-secondary group">
                  <span>LEARN MORE ABOUT OUR ETHOS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

        </ScrollReveal>
      </section>

      {/* =========================================================================
          03 — ACADEMICS (How students learn — 3 Clear Curricular Stages, Section 13)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Consistent Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C59A3F]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                ACADEMICS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.18] tracking-tight">
              Learning beyond the classroom.
            </h2>
            <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed mt-4">
              Our curriculum balances rigorous foundational mastery with guided discovery, developing analytical reasoning, articulate expression, and intellectual humility at every stage.
            </p>
          </div>

          {/* 3 Clear Academic Stage Cards (Section 13: Foundation, Primary, Secondary) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {academicStages.map((stage) => (
              <article 
                key={stage.id} 
                className="bg-[#FAF8F5] border border-[#131E18]/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#131E18]/30 group"
              >
                <div className="space-y-4">
                  {/* Small Visual */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#131E18]">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover img-interactive filter brightness-[0.98]"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#131E18]/85 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-sans font-semibold text-[#C59A3F]">
                      {stage.stage}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#131E18] font-normal">
                      {stage.title}
                    </h3>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-[#C59A3F] font-sans font-semibold">
                      {stage.grades}
                    </div>
                    <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#131E18]/10 mt-6">
                  <Link 
                    to={stage.link}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#131E18] hover:text-[#C59A3F] transition-colors"
                  >
                    <span>EXPLORE STAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/academics" className="btn-primary group">
              <span>EXPLORE COMPLETE CURRICULUM</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </ScrollReveal>
      </section>

      {/* =========================================================================
          04 — CAMPUS (Where students learn — Visually calm, hero image, Section 14)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Consistent Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C59A3F]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                OUR CAMPUS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.18] tracking-tight">
              A place designed for learning, community and growth.
            </h2>
            <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed mt-4">
              An environment shaped to encourage focus, collaboration and purposeful discovery. From modern learning studios and laboratories to open-air courtyards, every space is built around how students learn best.
            </p>
          </div>

          {/* Section 14: One Large, Prominent School-Building Photograph */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#131E18] shadow-xl border border-[#131E18]/10 group">
            <img
              src="/images/rj/rj-campus-entrance-day.png"
              alt="R.J School Campus Entrance and Architectural Welcome Pavilion"
              className="w-full h-full object-cover img-interactive filter brightness-[0.98]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131E18]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C59A3F] font-sans font-semibold block">
                  MAIN CAMPUS ARCHITECTURE
                </span>
                <p className="font-serif text-lg sm:text-2xl text-white font-normal">
                  Purpose-built educational facilities in Coimbatore
                </p>
              </div>
              <Link to="/campus" className="btn-secondary group !bg-white/10 !border-white/30 !text-white hover:!bg-white/20">
                <span>VIEW CAMPUS SPACES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Three Purposeful Architectural Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10">
            <div className="border-l-2 border-[#C59A3F] pl-4 sm:pl-5 space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#C59A3F] font-semibold">01 · STUDIOS</span>
              <h4 className="font-serif text-lg text-[#131E18] font-normal">Learning Studios & Library</h4>
              <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                Acoustically treated, light-filled rooms with modular collaborative furniture.
              </p>
            </div>
            <div className="border-l-2 border-[#131E18]/20 pl-4 sm:pl-5 space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#C59A3F] font-semibold">02 · LABORATORIES</span>
              <h4 className="font-serif text-lg text-[#131E18] font-normal">Science & Technology Labs</h4>
              <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                Dedicated physics, chemistry, and computing facilities for empirical research.
              </p>
            </div>
            <div className="border-l-2 border-[#131E18]/20 pl-4 sm:pl-5 space-y-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#C59A3F] font-semibold">03 · GROUNDS</span>
              <h4 className="font-serif text-lg text-[#131E18] font-normal">Courtyards & Gathering Grounds</h4>
              <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                Open-air community spaces for assemblies, athletic activity, and peer dialogue.
              </p>
            </div>
          </div>

        </ScrollReveal>
      </section>

      {/* =========================================================================
          05 — STUDENT LIFE (How students experience school, Section 12)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Consistent Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C59A3F]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                STUDENT LIFE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.18] tracking-tight">
              Student Life at R.J
            </h2>
            <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed mt-4">
              Education at R.J extends far beyond examinations. Through sports, musical performance, student leadership, and community service, our students develop lasting friendships, genuine curiosity, and personal confidence.
            </p>
          </div>

          {/* Section 12: One Strong Visual Composition with Real Student Photograph as Primary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Primary Visual: Real Student Celebration Photograph */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#131E18] shadow-xl border border-[#131E18]/10 group card-sports rounded-xl">
                <img
                  src={IMAGES.studentsCelebration}
                  alt="R.J students celebrating achievements and community milestones"
                  className="w-full h-full object-cover img-unified filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="img-unified-overlay" />
                <div className="absolute top-4 left-4 z-20 bg-[#131E18]/85 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] uppercase tracking-[0.22em] font-sans font-semibold text-[#C59A3F] rounded-sm">
                  COMMUNITY & STUDENT SPIRIT
                </div>
              </div>
            </div>

            {/* Narrative & 3 Core Facets */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="border-l-2 border-[#C59A3F] pl-4 space-y-1">
                  <h4 className="font-serif text-xl text-[#131E18] font-normal">Athletics & Well-being</h4>
                  <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                    Track, football, swimming, and cooperative sports cultivating resilience, discipline, and healthy team spirit.
                  </p>
                </div>

                <div className="border-l-2 border-[#131E18]/20 pl-4 space-y-1">
                  <h4 className="font-serif text-xl text-[#131E18] font-normal">Performing Arts & Expression</h4>
                  <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                    Orchestral music, theatre, classical arts, and choral performance on our dedicated stage venue.
                  </p>
                </div>

                <div className="border-l-2 border-[#131E18]/20 pl-4 space-y-1">
                  <h4 className="font-serif text-xl text-[#131E18] font-normal">Leadership & Community Service</h4>
                  <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                    Student council, scientific debate societies, and active environmental outreach initiatives.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link to="/sports" className="btn-primary">
                  <span>Sports Programme</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <Link to="/student-life" className="btn-secondary">
                  <span>Explore Student Life</span>
                </Link>
              </div>
            </div>

          </div>

        </ScrollReveal>
      </section>

      {/* =========================================================================
          06 — EVENTS & COMMUNITY (How students connect and participate, Section 15)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Consistent Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C59A3F]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                EVENTS & COMMUNITY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.18] tracking-tight">
              Moments that bring our learning community together.
            </h2>
            <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed mt-4">
              Annual performances, academic symposiums, athletic championships, and community assemblies create a shared sense of pride and belonging for students and families.
            </p>
          </div>

          {/* Section 15: Featured Event + Supporting Calendar Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Featured Event: Real Stage Performance Photograph */}
            <article className="lg:col-span-7 bg-[#F5F2EA] border border-[#131E18]/10 p-5 sm:p-7 space-y-4 group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#131E18]">
                <img
                  src={STUDENT_EVENTS[0].image}
                  alt={STUDENT_EVENTS[0].title}
                  className="w-full h-full object-cover img-interactive filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#131E18]/90 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-[0.22em] font-sans font-semibold text-[#C59A3F]">
                  FEATURED EVENT
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em]">
                  <span className="text-[#C59A3F] font-semibold">{STUDENT_EVENTS[0].category}</span>
                  <span className="text-[#131E18]/30">•</span>
                  <span className="text-[#131E18]/60">{STUDENT_EVENTS[0].date}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal leading-snug">
                  {STUDENT_EVENTS[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#131E18]/70 font-sans leading-relaxed">
                  {STUDENT_EVENTS[0].description}
                </p>
              </div>
            </article>

            {/* Upcoming Event Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#131E18]/50 font-sans font-semibold block pb-1 border-b border-[#131E18]/10">
                UPCOMING COMMUNITY CALENDAR
              </span>

              <div className="divide-y divide-[#131E18]/10">
                {STUDENT_EVENTS.slice(1, 4).map((evt, idx) => (
                  <div key={idx} className="py-4 space-y-1.5 group">
                    <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-[0.18em]">
                      <span className="text-[#C59A3F] font-semibold">{evt.category}</span>
                      <span className="text-[#131E18]/50">{evt.date}</span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg text-[#131E18] font-normal leading-snug group-hover:text-[#C59A3F] transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-[#131E18]/65 font-sans leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/events" className="btn-secondary group w-full justify-center">
                  <span>VIEW ALL EVENTS & TRADITIONS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

        </ScrollReveal>
      </section>

      {/* =========================================================================
          07 — ADMISSIONS CTA (Section 16: Clear, spacious, two distinct actions)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10 relative overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-5 h-[1.5px] bg-[#C59A3F]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F]">
                  ADMISSIONS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.16] tracking-tight">
                Ready to begin your journey at R.J?
              </h2>

              <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed">
                We welcome families who value academic curiosity, personal integrity, and a supportive community. Discover our admissions process or schedule an on-campus visit to experience R.J in person.
              </p>

              {/* Two Clear Unambiguous Conversion Buttons (Section 16 & 18) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link to="/admissions/apply" className="btn-primary group">
                  <span>START YOUR APPLICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link to="/admissions/visit" className="btn-secondary group">
                  <span>SCHEDULE A VISIT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Welcome Pavilion Visual */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] overflow-hidden bg-[#131E18] shadow-xl border border-[#131E18]/10 group">
                <img
                  src={IMAGES.schoolGate}
                  alt="R.J school campus entrance gate and welcome archway"
                  className="w-full h-full object-cover img-interactive filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-[#131E18]/85 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] uppercase tracking-[0.22em] font-sans font-semibold text-[#C59A3F]">
                  R.J CAMPUS · WELCOME PAVILION
                </div>
              </div>
            </div>

          </div>

        </ScrollReveal>
      </section>

    </div>
  );
}
