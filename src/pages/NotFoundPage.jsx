import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SCHOOL_INFO } from '../data/schoolData';

export default function NotFoundPage() {
  usePageMeta(
    `Page Not Found | ${SCHOOL_INFO.name}`,
    `The page you are looking for does not exist. Return to the ${SCHOOL_INFO.name} home page.`
  );

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 bg-[#FAF8F5]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F5F2EA] border border-[#131E18]/10 text-[#C59A3F] text-xs font-sans uppercase tracking-[0.24em] font-semibold">
          <span>Error 404</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#131E18] font-normal tracking-tight">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-[#131E18]/75 font-sans leading-relaxed">
          The requested page could not be located. Please check the URL or return to our homepage to explore {SCHOOL_INFO.name}.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#131E18] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#1A2821] transition-colors shadow-sm"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F]" />
          </Link>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#131E18]/25 text-[#131E18] text-xs uppercase tracking-[0.18em] font-semibold hover:border-[#131E18] hover:bg-[#F5F2EA] transition-colors"
          >
            <span>Admissions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
