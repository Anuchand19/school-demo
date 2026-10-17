import React from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import ImageGallery from '../components/ImageGallery';
import { usePageMeta } from '../hooks/usePageMeta';
import { IMAGES, RJ_GALLERY_IMAGES } from '../data/images';
import { SCHOOL_INFO } from '../data/schoolData';

export default function GalleryPage() {
  usePageMeta(
    "Campus & Community Gallery | R.J School",
    "Explore the photographic archive of R.J School—capturing our architecture, learning studios, sports, and celebrations."
  );

  return (
    <div className="bg-[#FAF8F5]">
      {/* Visual Page Introduction */}
      <PageIntro
        label="PHOTOGRAPHIC ARCHIVE"
        title="Life & Spaces at R.J"
        description="A visual journey across our classrooms, grounds, performances, sports arenas, and vibrant community traditions."
        imageSrc={IMAGES.campusBuilding}
        imageAlt={`${SCHOOL_INFO.name} School Campus and Community`}
        imageCaption={`Main Academic Campus · ${SCHOOL_INFO.locationBadge}`}
      />

      {/* Official Editorial Image Gallery with Lightbox */}
      <ImageGallery
        images={RJ_GALLERY_IMAGES}
        title="Photographic Archive"
        subtitle="Moments, spaces, and community celebrations across R.J"
      />

      {/* Logical User Journey Next Step */}
      <section className="py-16 sm:py-24 bg-[#F5F2EA] text-center border-t border-[#131E18]/10">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 space-y-5">
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.28em] uppercase text-[#C59A3F] block">
            VISIT OUR CAMPUS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#131E18] font-normal">
            See the School in Session
          </h2>
          <p className="text-sm sm:text-base text-[#131E18]/75 font-sans leading-relaxed">
            Photographs offer a glimpse, but visiting our grounds in person conveys the authentic warmth, focus, and energy of our students.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <Link
              to="/admissions/visit"
              className="btn-primary"
            >
              <span>Schedule a Campus Visit</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/sports"
              className="btn-secondary"
            >
              Explore Sports Programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
