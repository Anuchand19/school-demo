import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Award, Shield, CheckCircle2, Compass } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { ScrollReveal, AnimatedCounter } from '../components/ScrollReveal';
import UnifiedImage from '../components/UnifiedImage';
import {
  SPORTS_PROGRAM_DATA,
  SPORTS_CATEGORIES,
  SPORTS_ACHIEVEMENTS,
  SPORTS_FACILITIES,
  SCHOOL_INFO
} from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function SportsPage() {
  usePageMeta(
    "Sports | R.J School",
    "Discover a culture of discipline, teamwork, confidence and sporting excellence at R.J School."
  );

  return (
    <div className="bg-[#FAF8F5]">
      {/* ==================================================
          1. CINEMATIC SPORTS HERO SECTION (Prompt Section 2)
          Slow scale 1.00 -> 1.05, subtle drift, clean typography
          ================================================== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#131E18] text-[#FAF8F5]">
        {/* Background Image Container with Slow Cinematic Drift (1.00 -> 1.045) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={IMAGES.sportsHero}
            alt="R.J athletes on the running track"
            className="w-full h-full object-cover filter brightness-[0.42] contrast-[1.05] animate-hero-cinematic"
            style={{ imageRendering: 'crisp-edges' }}
            loading="eager"
          />
          {/* Subtle Directional Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131E18] via-[#131E18]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131E18]/80 via-transparent to-[#131E18]/60" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#FAF8F5]/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] mb-6 sm:mb-8 rounded-full animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] animate-pulse" />
            <span>{SPORTS_PROGRAM_DATA.hero.tagline}</span>
          </div>

          {/* Main Heading: "PLAY. PERFORM. EXCEL." */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] font-normal tracking-tight leading-[1.08] mb-5 sm:mb-7 animate-fade-up-delay-1">
            PLAY. PERFORM. EXCEL.
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-xl text-[#FAF8F5]/85 leading-relaxed font-normal mb-8 sm:mb-10 animate-fade-up-delay-2">
            Discover a culture of discipline, teamwork, confidence and sporting excellence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
            <a
              href="#our-sports"
              className="w-full sm:w-auto btn-primary"
            >
              <span>Explore Our Sports</span>
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
            <Link
              to="/admissions/visit"
              className="w-full sm:w-auto btn-secondary !text-[#FAF8F5] !border-white/30 hover:!border-white hover:!bg-white/10"
            >
              Schedule a Sports Visit
            </Link>
          </div>
        </div>

        {/* Bottom Editorial Accent Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59A3F]/50 to-transparent" />
      </section>

      {/* ==================================================
          2. SPORTS INTRODUCTION: "MORE THAN A GAME" (Section 3)
          2-column: Left = Image, Right = Narrative + 6 Virtues
          ================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#131E18]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-18 items-center">
            
            {/* Left Column: Large Unified Sports Image with Staggered Viewport Reveal */}
            <div className="lg:col-span-6">
              <UnifiedImage
                src={IMAGES.sportsIntro}
                alt="R.J athletes training with coach on sports field"
                aspectRatio="aspect-[4/3]"
                badge="ATHLETIC CULTURE"
                caption="Mentored training programs developing lifelong athletic character"
                interactive={true}
                overlay={true}
                className="rounded-xl"
              />
            </div>

            {/* Right Column: Heading, Narrative & 6 Athletic Virtues */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <ScrollReveal delay={50}>
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-2">
                  01 — ATHLETIC PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-tight tracking-tight">
                  MORE THAN A GAME
                </h2>
                <p className="text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed mt-4">
                  {SPORTS_PROGRAM_DATA.introduction.narrative}
                </p>
              </ScrollReveal>

              {/* 6 Virtues Grid */}
              <ScrollReveal delay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2 border-t border-[#131E18]/10">
                {SPORTS_PROGRAM_DATA.introduction.values.map((v, idx) => (
                  <div key={idx} className="p-3.5 bg-[#F5F2EA] border border-[#131E18]/10 rounded-lg space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F]" />
                      <h4 className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#131E18]">
                        {v.name}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#131E18]/70 font-sans leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </ScrollReveal>

              <ScrollReveal delay={150} className="pt-2">
                <Link
                  to="/admissions/visit"
                  className="btn-primary"
                >
                  <span>Experience Our Sports Grounds</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. SPORTS CATEGORIES: "OUR SPORTS" (Section 4 & 5)
          8 Cards with smooth hover zoom & reversible transitions
          ================================================== */}
      <section id="our-sports" className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-2">
              02 — SPORTS DISCIPLINES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              OUR SPORTS
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/75 font-sans mt-3 leading-relaxed">
              Eight structured athletic and competitive disciplines cultivating technical competence, mental grit, and collaborative spirit under expert mentorship.
            </p>
          </ScrollReveal>

          {/* 8 Sports Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {SPORTS_CATEGORIES.map((sport, idx) => (
              <ScrollReveal
                key={sport.id}
                delay={idx * 40}
                className="group card-sports bg-[#FAF8F5] border border-[#131E18]/12 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm cursor-pointer"
              >
                {/* Image Wrap with Unified Hover Zoom */}
                <div className="img-unified-wrap aspect-[4/3] bg-[#131E18]">
                  <img
                    src={sport.image}
                    alt={`${sport.name} program at ${SCHOOL_INFO.name}`}
                    className="w-full h-full object-cover img-unified filter brightness-[0.96]"
                    style={{ imageRendering: 'crisp-edges' }}
                    loading="lazy"
                  />
                  <div className="img-unified-overlay" />
                  <div className="absolute top-3 left-3 z-30 bg-[#131E18]/85 backdrop-blur-md px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-sans font-semibold text-white/90 rounded-sm">
                    {sport.season}
                  </div>
                  <div className="absolute bottom-3 right-3 z-30 card-arrow-shift text-white/90">
                    <ArrowRight className="w-4 h-4 text-[#C59A3F]" />
                  </div>
                </div>

                {/* Card Content with Subtle Upward Motion on Hover */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 card-text-shift">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#C59A3F] font-sans font-semibold mb-1">
                      {sport.grades}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal leading-snug">
                      {sport.name}
                    </h3>
                    <p className="text-xs text-[#131E18]/60 font-sans italic mt-0.5">
                      {sport.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed mt-2.5">
                      {sport.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#131E18]/10 text-[10px] uppercase tracking-wider text-[#131E18]/60 font-sans flex items-center justify-between">
                    <span>Teams: {sport.teams}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. SPORTS ACHIEVEMENTS: "BEYOND THE CLASSROOM" (Section 6)
          Animated Counters with professional school stats
          ================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#131E18] text-[#FAF8F5] border-b border-white/10 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header */}
          <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-2">
              03 — ATHLETIC HONORS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-normal tracking-tight">
              BEYOND THE CLASSROOM
            </h2>
            <p className="text-sm sm:text-base text-white/75 font-sans mt-3 leading-relaxed">
              Competitive fixtures, inter-house traditions, and regional honors reflecting the perseverance of our student athletes and coaching faculty.
            </p>
          </ScrollReveal>

          {/* 4 Animated Achievement Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-white/15 pt-8 sm:pt-10">
            {SPORTS_ACHIEVEMENTS.map((item, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 60}
                className="space-y-2 p-5 sm:p-6 bg-white/[0.04] border border-white/10 rounded-xl backdrop-blur-sm card-sports"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#C59A3F] font-normal tracking-tight flex items-baseline">
                  <AnimatedCounter end={item.number} suffix={item.suffix} />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-white/90">
                  {item.label}
                </div>
                <p className="text-xs text-white/65 font-sans leading-relaxed pt-1">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. SPORTS FACILITIES: "OUR SPORTING FACILITIES" (Section 7)
          Editorial visual layout for 6 major athletic spaces
          ================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header */}
          <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-2">
              04 — INFRASTRUCTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              OUR SPORTING FACILITIES
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/75 font-sans mt-3 leading-relaxed">
              Purpose-built grounds, all-weather running tracks, climate-conditioned pavilions, and competition pools maintaining the highest safety and performance standards.
            </p>
          </ScrollReveal>

          {/* 6 Facilities Editorial Staggered Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SPORTS_FACILITIES.map((facility, idx) => (
              <ScrollReveal
                key={facility.id}
                delay={idx * 50}
                className="group card-sports bg-[#F5F2EA] border border-[#131E18]/12 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer"
              >
                {/* Facility Image with Unified Zoom */}
                <div className="img-unified-wrap aspect-[16/10] bg-[#131E18]">
                  <img
                    src={facility.image}
                    alt={`${facility.title} at ${SCHOOL_INFO.name}`}
                    className="w-full h-full object-cover img-unified filter brightness-[0.97]"
                    style={{ imageRendering: 'crisp-edges' }}
                    loading="lazy"
                  />
                  <div className="img-unified-overlay" />
                  <div className="absolute top-3 left-3 z-30 bg-[#131E18]/85 backdrop-blur-md px-3 py-1 text-[9px] uppercase tracking-wider font-sans font-semibold text-white/90 rounded-sm">
                    {facility.badge}
                  </div>
                </div>

                {/* Facility Narrative */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between card-text-shift">
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C59A3F] font-sans font-semibold block">
                      {facility.specs}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed pt-1">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#131E18]/10 flex items-center justify-between text-xs text-[#131E18]/60 font-sans">
                    <span>{facility.category}</span>
                    <span className="card-arrow-shift text-[#131E18] font-medium flex items-center gap-1">
                      View Ground <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F]" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. SPORTS CTA SECTION (Section 8)
          "FIND YOUR GAME. BUILD YOUR TEAM."
          Large visual CTA with slow background movement
          ================================================== */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#131E18] text-[#FAF8F5] text-center">
        {/* Background Sports Image with Subtle Cinematic Zoom */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={IMAGES.sportsCta}
            alt="R.J athletic stadium"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05] animate-hero-cinematic"
            style={{ imageRendering: 'crisp-edges' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131E18] via-[#131E18]/50 to-[#131E18]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C59A3F] block">
            NEXT STEPS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal tracking-tight">
            FIND YOUR GAME. BUILD YOUR TEAM.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Explore the opportunities our sports programme offers to every student.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions/visit"
              className="w-full sm:w-auto btn-primary !bg-[#C59A3F] !border-[#C59A3F] !text-[#131E18] hover:!bg-[#D4A84D]"
            >
              <span>Explore Our Sports Programme</span>
              <span className="btn-arrow !text-[#131E18]" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/facilities"
              className="w-full sm:w-auto btn-secondary !text-[#FAF8F5] !border-white/35 hover:!border-white hover:!bg-white/10"
            >
              Tour Campus Facilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
