'use client';

import { useEffect, useState } from 'react';
import { useApp } from '../hooks/useApp';

const ScrollIndicator = () => {
  const { state } = useApp();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const handleScroll = () => {
      if (!isMounted) return;
      // Hide indicator after scrolling past landing page
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    try {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to about section:', error);
    }
  };

  if (!isVisible) return null;

  const getIndicatorColor = () => {
    if (state.theme.id === 'theme2') return 'text-pink-400';
    if (state.theme.id === 'theme1') return 'text-amber-500';
    return 'text-accent';
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
      <p className="text-xs text-baseText opacity-60 mb-3 font-light italic animate-pulse">
        Or explore by scrolling down
      </p>
      <button
        onClick={handleClick}
        className="flex flex-col items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded-lg p-2 hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to about section"
        type="button"
      >
        <div className={`${getIndicatorColor()} animate-bounce`}>
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        <div className="mt-2 flex gap-1">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${getIndicatorColor()} opacity-60`}
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${dot * 0.2}s`,
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
};

export default ScrollIndicator;

