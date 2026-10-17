import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import PageIntro from '../components/PageIntro';
import { usePageMeta } from '../hooks/usePageMeta';
import { SCHOOL_INFO } from '../data/schoolData';
import { IMAGES } from '../data/images';

export default function ContactPage() {
  usePageMeta(
    "Contact | R.J",
    `Contact R.J in ${SCHOOL_INFO.location}. Schedule an advisory dialogue or submit an admission enquiry.`
  );

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Primary (Grades 1–5)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent / Guardian Name is required';
    }
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a complete contact number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="CONTACT & VISIT"
        title="We welcome dialogue, questions, and personal visits."
        description={`Our campus is located at ${SCHOOL_INFO.fullAddress}. Connect directly with our admissions team and school administration.`}
        imageSrc={IMAGES.contactHero}
        imageAlt="R.J school main entrance gate and administration reception"
        imageCaption={`Campus Entrance & Visitors Reception · ${SCHOOL_INFO.locationBadge}`}
      />

      {/* Main Grid: Details + Polished Enquiry Form */}
      <section className="py-14 sm:py-20 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 border-b border-[#131E18]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Campus Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
                CAMPUS DETAILS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal">
                Direct Communication
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#131E18]/80 font-sans leading-relaxed">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0 mt-1" />
                <span>{SCHOOL_INFO.fullAddress}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-[#C59A3F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                  {SCHOOL_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-[#C59A3F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]">
                  {SCHOOL_INFO.email}
                </a>
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#F5F2EA] border border-[#131E18]/10 space-y-2 text-xs font-sans">
              <div className="flex items-center gap-2 text-[#131E18] font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#C59A3F]" />
                <span>Admissions Office Hours</span>
              </div>
              <p className="text-[#131E18]/70 leading-relaxed pl-6">
                {SCHOOL_INFO.hours}
              </p>
              <p className="text-[#131E18]/50 pl-6 pt-1">
                * Note: Demonstration website for R.J · Excellence Through Education.
              </p>
            </div>
          </div>

          {/* Right Column: Polished Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#131E18]/15 p-6 sm:p-10 lg:p-12 shadow-sm">
            
            {submitted ? (
              <div className="py-10 sm:py-12 text-center space-y-4 animate-fade-up">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#E7EDE7] flex items-center justify-center text-[#1A2821]">
                  <CheckCircle2 className="w-8 h-8 text-[#7C9283]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#131E18] font-normal">
                  Thank you.
                </h3>
                <p className="text-sm sm:text-base text-[#131E18]/80 max-w-md mx-auto font-sans leading-relaxed">
                  Your enquiry has been received.<br />
                  Our admissions team will contact you shortly.
                </p>
                <p className="text-xs text-[#131E18]/50 pt-2 font-sans">
                  * Demonstration Confirmation: Since this is a demo site, no live message has been transmitted.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ parentName: '', studentName: '', email: '', phone: '', grade: 'Primary (Grades 1–5)', message: '' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 min-h-[44px] bg-[#131E18] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#1A2821] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-[#C59A3F] font-sans font-semibold block">
                    ONLINE ENQUIRY
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#131E18] font-normal">
                    Submit an Admission Enquiry
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-parent-name" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="contact-parent-name"
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: null });
                      }}
                      placeholder="e.g. Maya Krishnan"
                      className={`w-full px-3.5 py-3 min-h-[44px] bg-white border text-base sm:text-sm text-[#131E18] focus:outline-none transition-colors ${
                        errors.parentName ? 'border-red-500' : 'border-[#131E18]/20 focus:border-[#131E18]'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" /> {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-student-name" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1.5">
                      Student Name *
                    </label>
                    <input
                      id="contact-student-name"
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => {
                        setFormData({ ...formData, studentName: e.target.value });
                        if (errors.studentName) setErrors({ ...errors, studentName: null });
                      }}
                      placeholder="e.g. Vikram Krishnan"
                      className={`w-full px-3.5 py-3 min-h-[44px] bg-white border text-base sm:text-sm text-[#131E18] focus:outline-none transition-colors ${
                        errors.studentName ? 'border-red-500' : 'border-[#131E18]/20 focus:border-[#131E18]'
                      }`}
                    />
                    {errors.studentName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" /> {errors.studentName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="parent@domain.com"
                      className={`w-full px-3.5 py-3 min-h-[44px] bg-white border text-base sm:text-sm text-[#131E18] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#131E18]/20 focus:border-[#131E18]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1.5">
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      placeholder="+91 44 2400 0000"
                      className={`w-full px-3.5 py-3 min-h-[44px] bg-white border text-base sm:text-sm text-[#131E18] focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#131E18]/20 focus:border-[#131E18]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-grade" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1.5">
                    Grade Interested In *
                  </label>
                  <select
                    id="contact-grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-3 min-h-[44px] bg-white border border-[#131E18]/20 focus:border-[#131E18] focus:outline-none text-base sm:text-sm text-[#131E18]"
                  >
                    <option value="Early Years (Pre-KG – UKG · Ages 3–5)">Early Years (Pre-KG – UKG · Ages 3–5)</option>
                    <option value="Primary (Grades 1–5)">Primary (Grades 1–5)</option>
                    <option value="Middle School (Grades 6–8)">Middle School (Grades 6–8)</option>
                    <option value="Secondary (Grades 9–12)">Secondary (Grades 9–12)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-sans uppercase tracking-wider text-[#131E18]/70 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Tell us about the student's background, academic interests, or questions for our admissions team..."
                    className={`w-full px-3.5 py-3 min-h-[44px] bg-white border text-base sm:text-sm text-[#131E18] focus:outline-none resize-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-[#131E18]/20 focus:border-[#131E18]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] text-[#131E18]/50 font-sans">
                    Demonstration interaction · No external email sent
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto btn-primary cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Styled Campus Map Canvas */}
      <section className="py-16 sm:py-24 bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.26em] uppercase text-[#C59A3F] block mb-1.5 sm:mb-2">
              CAMPUS LOCATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#131E18] font-normal">
              Find Our Campus in {SCHOOL_INFO.cityCountry}
            </h2>
          </div>

          <div className="relative w-full h-72 sm:h-96 bg-[#131E18] border border-[#131E18]/20 overflow-hidden shadow-xl flex flex-col justify-between p-5 sm:p-8 text-[#FAF8F5]">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5]/10 backdrop-blur-md px-3 py-1.5 sm:px-3.5 border border-white/10 text-[11px] sm:text-xs">
                <Navigation className="w-3.5 h-3.5 text-[#C59A3F] shrink-0" />
                <span className="tracking-wider truncate">{SCHOOL_INFO.fullAddress}</span>
              </div>
            </div>

            <div className="relative z-10 max-w-sm bg-[#1A2821]/95 border border-[#C59A3F]/40 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#C59A3F] text-[10px] tracking-widest uppercase font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-[#C59A3F] animate-pulse" />
                {SCHOOL_INFO.name}
              </div>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                {SCHOOL_INFO.fullAddress}
              </p>
            </div>

            <div className="relative z-10 text-[11px] sm:text-xs text-white/60 font-sans">
              30 mins from Coimbatore International Airport · Private Campus Coach Routes
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
