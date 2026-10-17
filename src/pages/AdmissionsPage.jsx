import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  ADMISSIONS_4_STEPS,
  REQUIRED_DOCUMENTS_LIST,
  ADMISSIONS_FAQS,
  SCHOOL_INFO
} from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function AdmissionsPage() {
  usePageMeta(
    "Admissions | R.J",
    `Admissions at R.J. Review our four-step admissions process, age criteria, required documents, and frequently asked questions.`
  );

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="ADMISSIONS"
        title="Admissions at R.J"
        description="We welcome families who share our belief in a curious, balanced and thoughtful education. Learn about our admissions process and how to apply."
        imageSrc={IMAGES.admissionsHero}
        imageAlt="R.J school campus entrance with arch and green hedge"
        imageCaption="Campus Entrance & Welcome Gate · Coimbatore, Tamil Nadu"
      />

      {/* Why Families Choose R.J */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 border-b border-[#131E18]/10">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
            THE {SCHOOL_INFO.name} EXPERIENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
            Why families choose our school
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#131E18]/15">
          <div className="space-y-2.5 sm:space-y-3 pt-3 md:pt-0 md:pr-8">
            <span className="text-xs uppercase tracking-widest text-[#C59A3F] font-sans font-semibold">
              01 · Curiosity & Character
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
              A Balanced Education
            </h3>
            <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
              We balance rigorous academic exploration with the development of character, empathy, and the confidence to question conventional assumptions.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3 pt-5 md:pt-0 md:px-8">
            <span className="text-xs uppercase tracking-widest text-[#C59A3F] font-sans font-semibold">
              02 · 1:12 Mentorship Ratio
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
              Known and Supported
            </h3>
            <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
              Small class groups ensure that teachers know each child's strengths, interests, and growth areas, offering continuous encouragement and individual guidance.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3 pt-5 md:pt-0 md:pl-8">
            <span className="text-xs uppercase tracking-widest text-[#C59A3F] font-sans font-semibold">
              03 · Purposeful Environment
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
              Spaces That Inspire
            </h3>
            <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
              Our Coimbatore campus brings together naturally lit classrooms, laboratories, sports grounds, and green courtyards designed for focused learning and wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Simple 4-Step Timeline */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] border-b border-[#131E18]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              ADMISSIONS PROCESS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
              A clear four-step journey
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/70 font-sans mt-2 sm:mt-3">
              We guide each family personally from initial inquiry through enrolment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-[#131E18]/15 pt-6 sm:pt-8">
            {ADMISSIONS_4_STEPS.map((step) => (
              <div key={step.step} className="space-y-2.5 sm:space-y-3 p-5 sm:p-6 bg-[#FAF8F5] border border-[#131E18]/10">
                <span className="font-serif text-3xl sm:text-5xl text-[#C59A3F] font-light block">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 border-b border-[#131E18]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
              CHECKLIST
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal leading-tight">
              Required Documents
            </h2>
            <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
              To help our admissions team review your child's application smoothly, please prepare the following records for digital submission.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#F5F2EA] p-6 sm:p-8 lg:p-10 border border-[#131E18]/10 space-y-3">
            {REQUIRED_DOCUMENTS_LIST.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#131E18]/80 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 lg:py-32 max-w-4xl mx-auto px-5 sm:px-8 border-b border-[#131E18]/10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {ADMISSIONS_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#131E18]/15 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg lg:text-xl text-[#131E18] font-normal leading-snug">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-full text-[#131E18]/60 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#C59A3F]" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#131E18]/75 font-sans leading-relaxed border-t border-[#131E18]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Finish with: BOOK A VISIT & START AN APPLICATION */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F5F2EA] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-5 sm:space-y-6">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
            TAKE THE NEXT STEP
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal">
            Begin Your Journey
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            Our admissions team is available to answer questions, guide you through application requirements, and arrange your family visit to R.J.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/admissions/visit"
              className="btn-primary"
            >
              <span>Book a Visit</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/admissions/apply"
              className="btn-secondary"
            >
              Start an Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
