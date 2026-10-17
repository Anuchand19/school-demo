import React, { useEffect, useRef, useState } from 'react';

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 700,
  distance = '28px',
  threshold = 0.12,
  triggerOnce = true
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={`will-change-[transform,opacity] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance})`,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// Animated Counter for verified school stats (Section 26)
export function AnimatedCounter({ value, end, duration = 1800, prefix = '', suffix = '' }) {
  // Parse value string if provided
  let targetNumber = typeof end === 'number' ? end : null;
  let parsedPrefix = prefix;
  let parsedSuffix = suffix;
  let isStatic = false;

  if (targetNumber === null && typeof value === 'string') {
    const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
    if (match) {
      parsedPrefix = prefix || match[1];
      targetNumber = parseInt(match[2], 10);
      parsedSuffix = suffix || match[3];
    } else {
      isStatic = true;
    }
  }

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isStatic || targetNumber === null) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(targetNumber);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, started, isStatic]);

  useEffect(() => {
    if (!started || isStatic || targetNumber === null) return;

    let startTime;
    let animId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * targetNumber));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [started, targetNumber, duration, isStatic]);

  if (isStatic) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {parsedPrefix}{count}{parsedSuffix}
    </span>
  );
}
