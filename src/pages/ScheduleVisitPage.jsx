import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock, Calendar, Users, Sparkles, Building2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SCHOOL_INFO } from '../data/schoolData';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ScheduleVisitPage() {
  usePageMeta(
    "Schedule a Visit | R.J",
    "Experience the R.J campus and discover the learning environment in Coimbatore."
  );

  // Today's date formatted as YYYY-MM-DD for datepicker min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    currentGrade: 'Primary (Grades 1–5)',
    preferredDate: '',
    preferredTime: 'Morning · 10:00 AM',
    visitorCount: '2 Visitors',
    visitType: 'Campus Tour',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      studentName: '',
      email: '',
      phone: '',
      currentGrade: 'Primary (Grades 1–5)',
      preferredDate: '',
      preferredTime: 'Morning · 10:00 AM',
      visitorCount: '2 Visitors',
      visitType: 'Campus Tour',
      notes: ''
    });
  };

  const visitTypes = [
    {
      id: 'Campus Tour',
      title: 'Campus Tour',
      desc: 'Guided tour of academic wings, labs, arts center & grounds'
    },
    {
      id: 'Admissions Meeting',
      title: 'Admissions Meeting',
      desc: 'One-on-one session with our admissions director'
    },
    {
      id: 'General Enquiry',
      title: 'General Enquiry',
      desc: 'Informal walkthrough and curriculum consultation'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Back Navigation Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#131E18]/70 hover:text-[#C59A3F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
          >
            <span>← BACK TO ADMISSIONS</span>
          </Link>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN: Campus Visit Information & Tour Ethos */}
          <ScrollReveal className="lg:col-span-5 space-y-6 sm:space-y-8" delay={40}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131E18]/5 border border-[#131E18]/10 text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-[#C59A3F] mb-3 sm:mb-4">
                <Sparkles className="w-3 h-3 text-[#C59A3F]" />
                <span>{SCHOOL_INFO.name} · {SCHOOL_INFO.cityCountry.toUpperCase()}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.15] tracking-tight">
                Schedule a Visit
              </h1>
              <p className="text-base sm:text-lg text-[#131E18]/75 font-sans mt-3 sm:mt-4 leading-relaxed">
                Experience the R.J campus and discover the learning environment.
              </p>
            </div>

            {/* Introductory Narrative on Campus Experience */}
            <div className="p-6 bg-[#F5F2EA] border border-[#131E18]/10 space-y-4">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C59A3F] block">
                THE CAMPUS EXPERIENCE
              </span>
              <p className="text-xs sm:text-sm text-[#131E18]/80 font-sans leading-relaxed">
                We believe visiting our campus is the best way to understand the atmosphere, rhythm, and values that define {SCHOOL_INFO.name}. During your tour, you will experience:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#131E18]/80 font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] mt-2 shrink-0" />
                  <span>Naturally illuminated studio classrooms and collaborative breakout spaces</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] mt-2 shrink-0" />
                  <span>Advanced scientific laboratories, creative arts ateliers, and performance venues</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] mt-2 shrink-0" />
                  <span>Open green courtyards, sports fields, and student wellness amenities</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A3F] mt-2 shrink-0" />
                  <span>An informal discussion with our admissions team regarding curriculum and values</span>
                </li>
              </ul>
            </div>

            {/* Visiting Hours & Campus Address */}
            <div className="p-6 bg-white border border-[#131E18]/10 space-y-5">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C59A3F] block">
                VISITING SCHEDULE & DETAILS
              </span>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-[#131E18]/80 font-sans">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#131E18] font-medium">Visiting Hours:</strong>
                    <span className="text-[#131E18]/70 block">Monday – Friday: 9:00 AM – 4:00 PM</span>
                    <span className="text-[#131E18]/70 block">Saturday (by appointment): 9:30 AM – 1:00 PM</span>
                    <span className="text-[#131E18]/50 block text-[11px] mt-0.5">Sunday & Public Holidays: Closed</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#131E18]/10">
                  <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#131E18] font-medium">Campus Location:</strong>
                    <span className="text-[#131E18]/70">{SCHOOL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#131E18]/10">
                  <Phone className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#131E18] font-medium">Admissions Desk Direct:</strong>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="text-[#131E18]/70 hover:text-[#C59A3F] transition-colors block">
                      {SCHOOL_INFO.phone}
                    </a>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-[#131E18]/70 hover:text-[#C59A3F] transition-colors block">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link to Application */}
            <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#C59A3F]/50 flex items-center justify-between gap-4 card-interactive">
              <div>
                <span className="block font-medium text-[#131E18] text-xs">Ready to initiate an application?</span>
                <span className="block text-[11px] text-[#131E18]/60">Complete your student candidate profile directly.</span>
              </div>
              <Link
                to="/admissions/apply"
                className="btn-interactive shrink-0 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] hover:text-[#131E18] transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] py-1 px-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: The Visit Request Form or Confirmation Screen */}
          <ScrollReveal className="lg:col-span-7" delay={80}>
            <div className="bg-white border border-[#131E18]/15 shadow-xl relative overflow-hidden">
              {/* Gold Top Accent Line */}
              <div className="h-1.5 w-full bg-[#131E18] flex">
                <div className="h-full w-1/3 bg-[#C59A3F]" />
              </div>

              {submitted ? (
                /* Submission Confirmation State */
                <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-up">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#E7EDE7] flex items-center justify-center text-[#1A2821] shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-[#7C9283]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#C59A3F] font-sans font-semibold">
                      VISIT REQUEST REGISTERED
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18]">
                      We Look Forward to Welcoming You
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#131E18]/75 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#131E18]">{formData.parentName}</strong>. Our admissions office will confirm the visit time and send visitor parking & entry details to{' '}
                    <strong className="text-[#131E18]">{formData.email}</strong>.
                  </p>

                  <div className="bg-[#FAF8F5] p-5 sm:p-6 border border-[#131E18]/10 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm font-sans">
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Visit Type:</span>
                      <span className="font-medium text-[#131E18]">{formData.visitType}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Requested Date:</span>
                      <span className="font-medium text-[#131E18]">{formData.preferredDate || 'To be scheduled'}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Preferred Time:</span>
                      <span className="font-medium text-[#131E18]">{formData.preferredTime}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Party Size:</span>
                      <span className="font-medium text-[#131E18]">{formData.visitorCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Candidate Student:</span>
                      <span className="font-medium text-[#131E18]">{formData.studentName} ({formData.currentGrade})</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#131E18]/50 max-w-md mx-auto pt-2">
                    * Demonstration Interaction: Since this is an institutional preview showcase, no real booking has been dispatched.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      to="/admissions"
                      className="btn-interactive w-full sm:w-auto px-7 py-3 min-h-[44px] bg-[#131E18] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#1A2821] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                    >
                      Return to Admissions
                    </Link>
                    <button
                      onClick={handleReset}
                      className="btn-interactive w-full sm:w-auto px-6 py-3 min-h-[44px] border border-[#131E18]/25 text-[#131E18] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#FAF8F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                    >
                      Request Another Visit
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Visit Request Form */
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                  <div className="border-b border-[#131E18]/10 pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
                      Campus Visit Request Form
                    </h3>
                    <p className="text-xs text-[#131E18]/60 font-sans mt-1">
                      Please let us know your preferences so our admissions team can arrange a personalised walkthrough.
                    </p>
                  </div>

                  {/* Visit Type Selection Cards */}
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-2.5">
                      Select Visit Type *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {visitTypes.map((type) => {
                        const isSelected = formData.visitType === type.id;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setFormData({ ...formData, visitType: type.id })}
                            className={`card-interactive p-3.5 text-left border transition-all cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] ${
                              isSelected
                                ? 'bg-[#131E18] text-[#FAF8F5] border-[#131E18] shadow-md ring-1 ring-[#C59A3F]/50 -translate-y-0.5'
                                : 'bg-[#FAF8F5]/60 text-[#131E18] border-[#131E18]/20 hover:border-[#C59A3F] hover:bg-[#FAF8F5]'
                            }`}
                          >
                            <span className={`block font-serif text-sm font-medium ${isSelected ? 'text-[#C59A3F]' : 'text-[#131E18]'}`}>
                              {type.title}
                            </span>
                            <span className={`block text-[11px] mt-1 leading-snug ${isSelected ? 'text-white/70' : 'text-[#131E18]/60'}`}>
                              {type.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Parent / Guardian Name & Student Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="visit-parent-name"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Parent / Guardian Name *
                      </label>
                      <input
                        id="visit-parent-name"
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Lakshmi Rao"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="visit-student-name"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Student Name *
                      </label>
                      <input
                        id="visit-student-name"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Siddharth Rao"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="visit-email"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="visit-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="visit-phone"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Contact Phone Number *
                      </label>
                      <input
                        id="visit-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 422 298 0000"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Student's Current Grade & Number of Visitors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="visit-grade"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Student's Current Grade / Stage
                      </label>
                      <select
                        id="visit-grade"
                        value={formData.currentGrade}
                        onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 cursor-pointer"
                      >
                        <option value="Early Years (Pre-KG – UKG · Ages 3–5)">Early Years (Pre-KG – UKG · Ages 3–5)</option>
                        <option value="Primary (Grades 1–5)">Primary (Grades 1–5)</option>
                        <option value="Middle School (Grades 6–8)">Middle School (Grades 6–8)</option>
                        <option value="Secondary (Grades 9–12)">Secondary (Grades 9–12)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="visit-count"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Number of Visitors
                      </label>
                      <select
                        id="visit-count"
                        value={formData.visitorCount}
                        onChange={(e) => setFormData({ ...formData, visitorCount: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 cursor-pointer"
                      >
                        <option value="1 Visitor">1 Visitor (Student or Parent)</option>
                        <option value="2 Visitors">2 Visitors (Student + Parent)</option>
                        <option value="3 Visitors">3 Visitors (Family Group)</option>
                        <option value="4+ Visitors">4+ Visitors</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="visit-date"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Preferred Visit Date *
                      </label>
                      <input
                        id="visit-date"
                        type="date"
                        required
                        min={todayStr}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="visit-time"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Preferred Time *
                      </label>
                      <select
                        id="visit-time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 cursor-pointer"
                      >
                        <option value="Morning · 10:00 AM">Morning · 10:00 AM</option>
                        <option value="Mid-day · 11:30 AM">Mid-day · 11:30 AM</option>
                        <option value="Afternoon · 2:00 PM">Afternoon · 2:00 PM</option>
                        <option value="Afternoon · 3:30 PM">Afternoon · 3:30 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Questions or Specific Interests */}
                  <div>
                    <label
                      htmlFor="visit-notes"
                      className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                    >
                      Questions or Specific Interests
                    </label>
                    <textarea
                      id="visit-notes"
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Let us know what specific aspects of our campus, curriculum, arts facilities, or athletic centers you would especially like to explore..."
                      className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submission Footer with Notice & Submit Button */}
                  <div className="pt-4 border-t border-[#131E18]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-[#131E18]/60 font-sans">
                      Our admissions office will confirm the visit time.
                    </span>
                    <button
                      type="submit"
                      className="btn-primary cursor-pointer"
                    >
                      <span>REQUEST A CAMPUS VISIT</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
