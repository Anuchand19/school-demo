import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import SportsPage from './pages/SportsPage';
import CampusPage from './pages/CampusPage';
import StudentLifePage from './pages/StudentLifePage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ApplicationPage from './pages/ApplicationPage';
import ScheduleVisitPage from './pages/ScheduleVisitPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { PreloaderProvider } from './context/PreloaderContext';
import LogoJourneyPreloader from './components/LogoJourneyPreloader';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <BrowserRouter>
      <PreloaderProvider>
        <LogoJourneyPreloader />
        <ScrollToTop />
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-3 focus:bg-[#131E18] focus:text-[#FAF8F5] focus:font-sans focus:text-xs focus:uppercase focus:tracking-widest focus:ring-2 focus:ring-[#C59A3F] focus:shadow-2xl"
        >
          Skip to main content
        </a>

        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#131E18] overflow-x-hidden">
          {/* Global Floating Header */}
          <Header />

          {/* Main Content Area */}
          <main id="main-content" tabIndex="-1" className="flex-1 focus:outline-none">
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/academics" element={<AcademicsPage />} />
                <Route path="/sports" element={<SportsPage />} />
                <Route path="/facilities" element={<CampusPage />} />
                <Route path="/campus" element={<CampusPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/student-life" element={<StudentLifePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/admissions" element={<AdmissionsPage />} />
                <Route path="/admissions/apply" element={<ApplicationPage />} />
                <Route path="/admissions/visit" element={<ScheduleVisitPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageTransition>
          </main>

          {/* Global Institutional Footer */}
          <Footer />
        </div>
      </PreloaderProvider>
    </BrowserRouter>
  );
}

export default App;
