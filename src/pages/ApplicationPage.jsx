import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SCHOOL_INFO } from '../data/schoolData';
import { ScrollReveal } from '../components/ScrollReveal';

export default function ApplicationPage() {
  usePageMeta(
    "Start Your Application | R.J",
    "Begin your candidate profile for the upcoming academic session at R.J."
  );

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    stageOfEntry: 'Primary (Grades 1–5)',
    session: '2026–2027 Session',
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
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      stageOfEntry: 'Primary (Grades 1–5)',
      session: '2026–2027 Session',
      notes: ''
    });
  };

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
          
          {/* LEFT COLUMN: Institutional Overview & Application Guidance */}
          <ScrollReveal className="lg:col-span-5 space-y-6 sm:space-y-8" delay={40}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131E18]/5 border border-[#131E18]/10 text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-[#C59A3F] mb-3 sm:mb-4">
                <Sparkles className="w-3 h-3 text-[#C59A3F]" />
                <span>{SCHOOL_INFO.name} · {SCHOOL_INFO.cityCountry.toUpperCase()}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#131E18] font-normal leading-[1.15] tracking-tight">
                Start Your Application
              </h1>
              <p className="text-base sm:text-lg text-[#131E18]/75 font-sans mt-3 sm:mt-4 leading-relaxed">
                Begin your candidate profile for the upcoming academic session.
              </p>
            </div>

            {/* Application Progression Guide */}
            <div className="p-6 bg-[#F5F2EA] border border-[#131E18]/10 space-y-5">
              <span className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C59A3F] block">
                APPLICATION STAGES
              </span>
              <div className="space-y-4">
                <div className="card-interactive p-3 rounded-none bg-white/50 hover:bg-white transition-all flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#131E18] text-[#FAF8F5] text-xs font-sans font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#131E18] font-medium">Candidate Profile Submission</h4>
                    <p className="text-xs text-[#131E18]/70 font-sans mt-0.5 leading-relaxed">
                      Complete the introductory form on this page to open your family’s admissions dossier.
                    </p>
                  </div>
                </div>

                <div className="card-interactive p-3 rounded-none bg-white/50 hover:bg-white transition-all flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#131E18]/20 text-[#131E18] text-xs font-sans font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#131E18] font-medium">Document Review & Dialogue</h4>
                    <p className="text-xs text-[#131E18]/70 font-sans mt-0.5 leading-relaxed">
                      Our admissions committee reviews prior academic records and invites the student for an interactive session.
                    </p>
                  </div>
                </div>

                <div className="card-interactive p-3 rounded-none bg-white/50 hover:bg-white transition-all flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#131E18]/20 text-[#131E18] text-xs font-sans font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#131E18] font-medium">Formal Enrolment & Onboarding</h4>
                    <p className="text-xs text-[#131E18]/70 font-sans mt-0.5 leading-relaxed">
                      Following a mutual fit confirmation, formal admission is extended with welcoming guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Admissions Assistance & Visit Prompt */}
            <div className="space-y-4 text-xs sm:text-sm text-[#131E18]/75 font-sans">
              <div className="p-5 border border-[#131E18]/10 bg-white/70 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#131E18]/60 block">
                  ADMISSIONS DESK ASSISTANCE
                </span>
                <p className="flex items-center gap-2.5 text-[#131E18]">
                  <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                  <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-[#C59A3F] transition-colors">
                    {SCHOOL_INFO.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5 text-[#131E18]">
                  <Mail className="w-4 h-4 text-[#C59A3F] shrink-0" />
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-[#C59A3F] transition-colors">
                    {SCHOOL_INFO.email}
                  </a>
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#C59A3F]/50 flex items-center justify-between gap-4 card-interactive">
                <div>
                  <span className="block font-medium text-[#131E18] text-xs">Want to see the campus first?</span>
                  <span className="block text-[11px] text-[#131E18]/60">Book an in-person tour before submitting.</span>
                </div>
                <Link
                  to="/admissions/visit"
                  className="btn-interactive shrink-0 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] hover:text-[#131E18] transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] py-1 px-2"
                >
                  <span>Schedule Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: The Application Form or Confirmation Screen */}
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
                      DOSSIER INITIATED
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18]">
                      Application Successfully Submitted
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#131E18]/75 max-w-lg mx-auto leading-relaxed">
                    Thank you for applying to <strong className="text-[#131E18]">{SCHOOL_INFO.name}</strong> for{' '}
                    <strong className="text-[#131E18]">{formData.studentName}</strong>. A confirmation summary and preliminary prospectus have been recorded for{' '}
                    <strong className="text-[#131E18]">{formData.email}</strong>.
                  </p>

                  <div className="bg-[#FAF8F5] p-5 sm:p-6 border border-[#131E18]/10 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm font-sans">
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Candidate:</span>
                      <span className="font-medium text-[#131E18]">{formData.studentName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Parent / Guardian:</span>
                      <span className="font-medium text-[#131E18]">{formData.parentName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#131E18]/10 pb-2">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Stage of Entry:</span>
                      <span className="font-medium text-[#131E18]">{formData.stageOfEntry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#131E18]/60 uppercase tracking-wider text-[11px]">Academic Session:</span>
                      <span className="font-medium text-[#131E18]">{formData.session}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#131E18]/50 max-w-md mx-auto pt-2">
                    * Demonstration Interaction: Since this is an institutional preview showcase, no external transmission took place.
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
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Application Form */
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                  <div className="border-b border-[#131E18]/10 pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#131E18] font-normal">
                      Student & Family Dossier
                    </h3>
                    <p className="text-xs text-[#131E18]/60 font-sans mt-1">
                      Fields marked with an asterisk (*) are mandatory for registration.
                    </p>
                  </div>

                  {/* Student Full Name & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="apply-student-name"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Student Full Name *
                      </label>
                      <input
                        id="apply-student-name"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Siddharth Rao"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="apply-parent-name"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Parent / Guardian Name *
                      </label>
                      <input
                        id="apply-parent-name"
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Lakshmi Rao"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="apply-email"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="apply-email"
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
                        htmlFor="apply-phone"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Contact Phone Number *
                      </label>
                      <input
                        id="apply-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 422 298 0000"
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Stage of Entry & Intended Academic Session */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="apply-stage"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Stage of Entry *
                      </label>
                      <select
                        id="apply-stage"
                        value={formData.stageOfEntry}
                        onChange={(e) => setFormData({ ...formData, stageOfEntry: e.target.value })}
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
                        htmlFor="apply-session"
                        className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                      >
                        Intended Academic Session
                      </label>
                      <select
                        id="apply-session"
                        value={formData.session}
                        onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                        className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 cursor-pointer"
                      >
                        <option value="2026–2027 Session">2026–2027 Session (Upcoming)</option>
                        <option value="2027–2028 Session">2027–2028 Session</option>
                        <option value="Immediate Mid-Term Transfer">Immediate Mid-Term Transfer</option>
                      </select>
                    </div>
                  </div>

                  {/* Questions or Specific Interests */}
                  <div>
                    <label
                      htmlFor="apply-notes"
                      className="block text-xs font-sans uppercase tracking-wider text-[#131E18]/80 font-medium mb-1.5"
                    >
                      Questions or Specific Interests
                    </label>
                    <textarea
                      id="apply-notes"
                      rows="4"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share details regarding the candidate’s interests, sports, arts passions, language preferences, or any specific questions for the admissions committee..."
                      className="w-full px-4 py-3 min-h-[44px] bg-[#FAF8F5]/60 border border-[#131E18]/20 focus:border-[#C59A3F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C59A3F] text-base sm:text-sm text-[#131E18] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submission Footer with Notice & Submit Button */}
                  <div className="pt-4 border-t border-[#131E18]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-[#131E18]/60 font-sans">
                      Admissions office responds within 24 hours.
                    </span>
                    <button
                      type="submit"
                      className="btn-primary cursor-pointer"
                    >
                      <span>SUBMIT APPLICATION</span>
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
