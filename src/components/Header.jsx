import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { Menu, X, ArrowUpRight, Calendar, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { usePreloader } from '../context/PreloaderContext';

function NavItem({ link, idx, location, headerRevealed, isSettled }) {
  const isCurrentActive = link.path === '/'
    ? location.pathname === '/'
    : location.pathname === link.path ||
      (link.path === '/facilities' && location.pathname === '/campus') ||
      (link.path === '/events' && location.pathname === '/student-life');

  return (
    <NavLink
      key={link.name}
      to={link.path}
      style={{
        opacity: headerRevealed ? 1 : 0,
        transform: headerRevealed ? 'translate3d(0, 0, 0)' : 'translate3d(0, -6px, 0)',
        transition: isSettled
          ? 'color 200ms'
          : `opacity 300ms ease-out ${40 + idx * 30}ms, transform 300ms ease-out ${40 + idx * 30}ms, color 200ms`
      }}
      className={`group relative text-[10px] xl:text-[11px] 2xl:text-[11.5px] tracking-[0.14em] xl:tracking-[0.18em] uppercase font-semibold font-sans py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] ${
        isCurrentActive ? 'text-[#131E18]' : 'text-[#131E18]/70 hover:text-[#131E18]'
      }`}
    >
      <span className="inline-block transition-transform duration-250 group-hover:-translate-y-0.5 whitespace-nowrap">
        {link.name}
      </span>
      {/* Active Solid Underline */}
      {isCurrentActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#131E18] transition-all duration-200" />
      )}
      {/* Hover Animated Gold Underline (Expands smoothly from left) */}
      {!isCurrentActive && (
        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C59A3F] transition-all duration-300 ease-out group-hover:w-full" />
      )}
    </NavLink>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  let preloaderData = null;
  try {
    preloaderData = usePreloader();
  } catch (e) {
    preloaderData = null;
  }

  const headerRevealed = preloaderData?.headerRevealed ?? true;
  const isSettled = preloaderData?.isSettled ?? true;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine whether scrolled past top threshold
      setScrolled(currentScrollY > 30);

      // Directional hide-on-scroll / show-on-scroll
      if (currentScrollY <= 40) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Scrolling down -> smoothly hide
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> smoothly reveal
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Sports', path: '/sports' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out flex justify-center ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled ? 'py-2 sm:py-2.5 px-3 sm:px-6' : 'py-3.5 sm:py-5 lg:py-6 px-3 sm:px-8 lg:px-12'
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ease-out flex items-center justify-between ${
            scrolled
              ? 'max-w-7xl bg-[#FAF8F5]/96 backdrop-blur-md px-4 sm:px-7 py-2 sm:py-2.5 border border-[#131E18]/10 shadow-[0_8px_30px_rgba(19,30,24,0.06)]'
              : 'max-w-7xl px-2 sm:px-0 py-0 bg-transparent'
          }`}
        >
          {/* LEFT: School Logo with Persistent Single-Element Journey Support */}
          <div className="flex items-center shrink-0">
            <BrandLogo
              variant="dark"
              showSubtitle={true}
              compactMobile={true}
              isHeaderLogo={true}
            />
          </div>

          {/* CENTER: Desktop Navigation (Styled with subtle magnetic feel & gold underline reveal) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-3 xl:space-x-5 2xl:space-x-7"
          >
            {navLinks.map((link, idx) => (
              <NavItem
                key={link.name}
                link={link}
                idx={idx}
                location={location}
                headerRevealed={headerRevealed}
                isSettled={isSettled}
              />
            ))}
          </nav>

          {/* RIGHT: Desktop Actions (VISIT US + APPLY ↗) */}
          <div 
            className="hidden lg:flex items-center space-x-5 xl:space-x-7 shrink-0"
            style={{
              opacity: headerRevealed ? 1 : 0,
              transform: headerRevealed ? 'translateY(0)' : 'translateY(-6px)',
              transition: isSettled ? 'none' : 'opacity 320ms ease-out 320ms, transform 320ms ease-out 320ms'
            }}
          >
            <Link
              to="/admissions/visit"
              className="text-[11.5px] tracking-[0.2em] uppercase font-semibold font-sans text-[#131E18]/80 hover:text-[#C59A3F] hover:-translate-y-0.5 transition-all duration-200 min-h-[44px] px-2 flex items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
            >
              VISIT US
            </Link>
            <Link
              to="/admissions/apply"
              className="group relative inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-bold font-sans text-[#FAF8F5] bg-[#131E18] hover:bg-[#1A2821] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] px-5 py-2.5 min-h-[44px] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
            >
              <span>APPLY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C59A3F] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* MOBILE: Refined Menu Button (Transforming between MENU and CLOSE) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] px-3.5 py-2 flex items-center justify-center gap-2 border border-[#131E18]/20 bg-[#FAF8F5]/85 backdrop-blur-sm text-[#131E18] hover:border-[#131E18] hover:bg-[#F5F2EA] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">
                {mobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
              <div className="w-4 h-4 relative flex items-center justify-center">
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-[#C59A3F]" />
                ) : (
                  <Menu className="w-4 h-4 text-[#131E18]" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION OVERLAY */}
      <div
        id="mobile-navigation-menu"
        ref={mobileMenuRef}
        className={`fixed inset-0 z-50 bg-[#131E18] text-[#FAF8F5] transition-all duration-300 ease-out lg:hidden flex flex-col ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <BrandLogo variant="light" isHeaderLogo={false} />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] min-w-[44px] px-3 py-2 flex items-center justify-center gap-2 border border-white/20 text-[#FAF8F5] hover:border-[#C59A3F] hover:text-[#C59A3F] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
            aria-label="Close navigation menu"
          >
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">
              CLOSE
            </span>
            <X className="w-4 h-4 text-[#C59A3F]" />
          </button>
        </div>

        {/* Navigation List & Actions */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C59A3F] font-sans font-semibold block">
              INSTITUTIONAL NAVIGATION
            </span>
            <nav className="space-y-1.5">
              {navLinks.map((link, idx) => {
                const isCurrentActive = link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname === link.path ||
                    (link.path === '/facilities' && location.pathname === '/campus') ||
                    (link.path === '/events' && location.pathname === '/student-life');
                return (
                  <div key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`min-h-[44px] flex items-center font-serif text-2xl sm:text-3xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] px-2 py-1 ${
                        isCurrentActive ? 'text-[#C59A3F] italic pl-4' : 'text-[#FAF8F5]/90 hover:text-[#C59A3F]'
                      }`}
                    >
                      <span className="text-xs font-sans tracking-widest text-[#C59A3F]/70 mr-3 shrink-0">
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </NavLink>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions: Book a Visit & Apply Now */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/admissions/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-5 border border-white/25 text-xs tracking-[0.18em] uppercase font-medium text-[#FAF8F5] hover:border-[#C59A3F] hover:text-[#C59A3F] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F]"
              >
                <Calendar className="w-4 h-4 text-[#C59A3F]" />
                <span>Book a Visit</span>
              </Link>
              <Link
                to="/admissions/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-5 bg-[#C59A3F] text-[#131E18] text-xs tracking-[0.18em] uppercase font-semibold hover:bg-[#D4A84D] transition-colors cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F5]"
              >
                <Compass className="w-4 h-4" />
                <span>Apply Now</span>
              </Link>
            </div>
            <div className="text-[11px] text-white/50 tracking-wider font-sans pt-1">
              {SCHOOL_INFO.location} · {SCHOOL_INFO.email}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
