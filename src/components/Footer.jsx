import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ScrollReveal } from './ScrollReveal';
import rjLogo from '../assets/rj-logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#131E18] text-[#FAF8F5] pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 border-t border-[#131E18]">
      <ScrollReveal className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-24" delay={40}>
        
        {/* Top Tier: Monumental Typography & Crest Statement */}
        <div className="space-y-6 pb-10 sm:pb-16 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-white p-1 shadow-lg ring-2 ring-white/20 flex items-center justify-center">
              <img
                src={rjLogo}
                alt={`${SCHOOL_INFO.name} Crest`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-[0.08em] sm:tracking-[0.12em] text-[#FAF8F5] leading-none">
                {SCHOOL_INFO.name}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-[0.24em] font-sans text-[#C59A3F] font-semibold mt-2.5 sm:mt-3">
                {SCHOOL_INFO.tagline}
              </span>
            </div>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white/80 font-light italic max-w-xl leading-snug">
              “Learning that shapes who you become.”
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/admissions/visit"
                className="btn-interactive group w-full sm:w-auto px-6 py-3.5 min-h-[44px] border border-white/20 text-xs uppercase tracking-[0.18em] text-[#FAF8F5] hover:border-[#C59A3F] hover:text-[#C59A3F] transition-all cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              >
                <span>Book a Visit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/admissions/apply"
                className="btn-interactive group w-full sm:w-auto px-7 py-3.5 min-h-[44px] bg-[#C59A3F] text-[#131E18] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#D4A84D] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5]"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Tier: Multi-Column Navigation Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C59A3F] font-sans font-semibold">
              NAVIGATION
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-1.5 text-xs sm:text-sm text-white/70 font-sans">
              <li>
                <Link to="/" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">About</Link>
              </li>
              <li>
                <Link to="/academics" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Academics</Link>
              </li>
              <li>
                <Link to="/sports" className="inline-block py-1 text-[#C59A3F] font-semibold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Sports</Link>
              </li>
              <li>
                <Link to="/facilities" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Facilities</Link>
              </li>
              <li>
                <Link to="/events" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Direct Institutional Contacts */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C59A3F] font-sans font-semibold">
              CONTACT DETAILS
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.name}, {SCHOOL_INFO.cityCountry}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                  {SCHOOL_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                  {SCHOOL_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Actions & Social Icons */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C59A3F] font-sans font-semibold">
              QUICK ACTIONS
            </h4>
            <div className="space-y-2 font-sans text-xs sm:text-sm">
              <Link
                to="/admissions/visit"
                className="block py-1 text-white/80 hover:text-[#C59A3F] transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              >
                → Book a Campus Visit
              </Link>
              <Link
                to="/admissions/apply"
                className="block py-1 text-white/80 hover:text-[#C59A3F] transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              >
                → Start Admission Application
              </Link>
              <Link
                to="/admissions"
                className="block py-1 text-white/80 hover:text-[#C59A3F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              >
                → Review Admissions Roadmap
              </Link>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center space-x-5 text-xs text-white/60">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#C59A3F] transition-colors min-h-[36px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#C59A3F] transition-colors min-h-[36px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#C59A3F] transition-colors min-h-[36px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                YouTube
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#C59A3F] transition-colors min-h-[36px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                X
              </a>
            </div>
          </div>

          {/* Institution Status & Identity */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C59A3F] font-sans font-semibold">
              INSTITUTION
            </h4>
            <div className="p-3 bg-white/5 border border-white/10 text-[11px] text-white/60 leading-relaxed font-sans">
              <span className="text-[#C59A3F] block font-semibold mb-1">{SCHOOL_INFO.name}</span>
              {SCHOOL_INFO.tagline}
            </div>
          </div>

        </div>

        {/* Bottom Tier: Minimal Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} R.J. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] tracking-wider uppercase">
            <span>Privacy Policy</span>
            <span>Terms of Enrolment</span>
          </div>
        </div>

      </ScrollReveal>
    </footer>
  );
}
