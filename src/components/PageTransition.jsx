import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 160); // Quick, snappy 160ms fade-out
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div
      key={displayLocation.pathname}
      className={`transition-all duration-300 ease-out ${
        transitionStage === 'fadeIn'
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-1.5'
      }`}
    >
      {children}
    </div>
  );
}
