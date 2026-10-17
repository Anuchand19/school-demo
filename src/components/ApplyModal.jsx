import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, ArrowRight, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function ApplyModal({ isOpen, onClose, initialMode = 'apply' }) {
  const [mode, setMode] = useState(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Primary (Grades 1–5)',
    preferredDate: '',
    notes: ''
  });

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#131E18]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#131E18] shadow-2xl border border-[#131E18]/15 overflow-hidden my-6 sm:my-8">
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-[#131E18] flex">
          <div className="h-full w-1/3 bg-[#C59A3F]" />
        </div>

        {/* Modal Header */}
        <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 border-b border-[#131E18]/10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#C59A3F] font-semibold">
                {SCHOOL_INFO.name} · {SCHOOL_INFO.cityCountry}
              </span>
            </div>
            <h3 id="modal-title" className="font-serif text-xl sm:text-3xl text-[#131E18]">
              {mode === 'apply' ? 'Start Your Application' : 'Book a Campus Visit'}
            </h3>
            <p className="text-xs sm:text-sm text-[#131E18]/70 mt-1 font-sans">
              {mode === 'apply'
                ? 'Begin your candidate profile for the upcoming academic session.'
                : 'Experience our classrooms, architecture, and learning ethos in person.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#131E18]/60 hover:text-[#131E18] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#131E18]/10 bg-[#F3EFE6]/60">
          <button
            onClick={() => setMode('apply')}
            className={`flex-1 py-3 sm:py-3.5 px-3 min-h-[44px] text-xs font-sans uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] ${
              mode === 'apply'
                ? 'bg-[#FAF8F5] text-[#131E18] border-b-2 border-[#131E18] font-semibold'
                : 'text-[#131E18]/60 hover:text-[#131E18]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#C59A3F] shrink-0" />
            <span>Application Enquiry</span>
          </button>
          <button
            onClick={() => setMode('visit')}
            className={`flex-1 py-3 sm:py-3.5 px-3 min-h-[44px] text-xs font-sans uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] ${
              mode === 'visit'
                ? 'bg-[#FAF8F5] text-[#131E18] border-b-2 border-[#131E18] font-semibold'
                : 'text-[#131E18]/60 hover:text-[#131E18]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#C59A3F] shrink-0" />
            <span>Schedule Visit</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-8">
          {submitted ? (
            <div className="py-8 sm:py-10 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E7EDE7] flex items-center justify-center text-[#1A2821]">
                <CheckCircle className="w-8 h-8 text-[#7C9283]" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#131E18]">
                {mode === 'apply' ? 'Application Initiated' : 'Visit Requested'}
              </h4>
              <p className="text-sm text-[#131E18]/70 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in {SCHOOL_INFO.name}. A confirmation message and sample prospectus have been generated for{' '}
                <strong className="text-[#131E18]">{formData.email || 'your email'}</strong>.
              </p>
              <p className="text-xs text-[#131E18]/50 pt-1">
                * Demonstration Interaction: Since this is a demo showcase, no real inquiry has been transmitted.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] bg-[#131E18] text-[#FAF8F5] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#1A2821] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="modal-student-name" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    id="modal-student-name"
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Siddharth Rao"
                    className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-parent-name" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    id="modal-parent-name"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Lakshmi Rao"
                    className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 44 2400 0000"
                    className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="modal-grade" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                    Stage of Entry *
                  </label>
                  <select
                    id="modal-grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  >
                    <option value="Early Years (Pre-KG – UKG · Ages 3–5)">Early Years (Pre-KG – UKG · Ages 3–5)</option>
                    <option value="Primary (Grades 1–5)">Primary (Grades 1–5)</option>
                    <option value="Middle School (Grades 6–8)">Middle School (Grades 6–8)</option>
                    <option value="Secondary (Grades 9–12)">Secondary (Grades 9–12)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-date" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                    {mode === 'visit' ? 'Preferred Tour Date *' : 'Intended Academic Session'}
                  </label>
                  <input
                    id="modal-date"
                    type={mode === 'visit' ? 'date' : 'text'}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    placeholder="2026–2027 Session"
                    className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1">
                  Questions or Specific Interests
                </label>
                <textarea
                  id="modal-notes"
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about the student's passions, extracurriculars, or relocation timelines..."
                  className="w-full px-3.5 py-2.5 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-[11px] text-[#131E18]/50">
                  Admissions office responds within 24 hours.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-[#131E18] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#1A2821] transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                >
                  <span>{mode === 'apply' ? 'Submit Application Dossier' : 'Confirm Visit Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
