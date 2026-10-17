import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { usePageMeta } from '../hooks/usePageMeta';
import { ScrollReveal } from '../components/ScrollReveal';
import UnifiedImage from '../components/UnifiedImage';
import { STUDENT_EVENTS, SCHOOL_INFO } from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function EventsPage() {
  usePageMeta(
    "Events & Traditions | R.J School",
    "Discover the annual calendar of performances, symposia, athletic championships, and community traditions at R.J School."
  );

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="SCHOOL CALENDAR & TRADITIONS"
        title="Events & Gatherings"
        description="Throughout the academic year, our school gathers for musical concerts, scientific symposia, athletic championships, and open community dialogues."
        imageSrc={IMAGES.stagePerformance}
        imageAlt="R.J school student stage performance"
        imageCaption={`Main Auditorium & Performance Stage · ${SCHOOL_INFO.locationBadge}`}
      />

      {/* Featured Institutional Events List */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#131E18]/10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-2">
            ANNUAL FIXTURES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
            Key Institutional Events
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/70 font-sans mt-3 leading-relaxed">
            Major gatherings celebrating student achievement, artistic expression, and sporting excellence.
          </p>
        </ScrollReveal>

        <div className="space-y-12 sm:space-y-16">
          {STUDENT_EVENTS.map((event, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <ScrollReveal
                key={idx}
                delay={idx * 50}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#F5F2EA] border border-[#131E18]/10 rounded-xl overflow-hidden p-6 sm:p-8 lg:p-10 card-sports"
              >
                {/* Visual */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <UnifiedImage
                    src={event.image}
                    alt={event.title}
                    aspectRatio="aspect-[16/10]"
                    badge={event.category}
                    interactive={true}
                    overlay={true}
                    className="rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#131E18] text-[#FAF8F5] text-[10px] uppercase tracking-wider font-semibold font-sans rounded-sm">
                      <Calendar className="w-3 h-3 text-[#C59A3F]" />
                      {event.date}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-sans text-[#C59A3F] font-semibold">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#131E18] font-normal leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-sm text-[#131E18]/80 font-sans leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#131E18]/60">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>R.J Main Campus · Coimbatore</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Logical User Journey Next Step */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 space-y-5">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
            VISIT AN EVENT
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#131E18] font-normal">
            Join Us for Community Open Day
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            Interested prospective families are warmly welcomed to attend school events or schedule a personal weekday visit.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <Link
              to="/admissions/visit"
              className="btn-primary"
            >
              <span>Schedule Campus Visit</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/sports"
              className="btn-secondary"
            >
              View Sports Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
