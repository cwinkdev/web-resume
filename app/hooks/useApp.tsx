'use client';

import { useContext, useEffect, useState, useCallback } from 'react';
import { AppStateContext } from '../StateContext';

export function useApp() {
  const { state, setState } = useContext(AppStateContext);

  const changeTheme = useCallback((theme: string) => {
    try {
      document.querySelector('html')?.setAttribute('data-theme', theme);
    } catch (error) {
      console.error('Error changing theme:', error);
    }
  }, []);

  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      sectionId: string,
    ) => {
      e.preventDefault();
      try {
        const element = document.getElementById(sectionId);
        if (element) {
          setState((prevState) => ({
            ...prevState,
            currentSection: sectionId,
          }));
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error navigating to section:', error);
      }
    },
    [setState],
  );

  // Initialize scroll position on mount
  useEffect(() => {
    const initializeScroll = () => {
      try {
        const maxScroll = window.innerWidth > 640 ? 800 : 1000;
        const initialScroll = Math.min(
          window.innerWidth > 640 ? window.scrollY * 1.5 : window.scrollY,
          maxScroll,
        );

        // Set initial offset
        setState((prevState) => ({
          ...prevState,
          offset: initialScroll,
        }));

        // Set initial showQuickNav based on scroll position
        const shouldShowQuickNav =
          (initialScroll > 700 && window.innerWidth > 640) ||
          (initialScroll > 100 && window.innerWidth <= 640);

        setState((prevState) => ({
          ...prevState,
          showQuickNav: shouldShowQuickNav,
        }));
      } catch (error) {
        console.error('Error initializing scroll:', error);
      }
    };

    // Run on mount
    initializeScroll();
  }, [setState]);

  useEffect(() => {
    let lastScrollTime = 0;
    let isMounted = true;
    const throttleDelay = 16; // ~60fps

    const handleScroll = () => {
      if (!isMounted) return;
      const now = Date.now();
      if (now - lastScrollTime >= throttleDelay) {
        try {
          const maxScroll = window.innerWidth > 640 ? 800 : 1000;
          const newPos = Math.min(
            window.innerWidth > 640 ? window.scrollY * 1.5 : window.scrollY,
            maxScroll,
          );
          if (isMounted) {
            setState((prevState) => ({
              ...prevState,
              offset: newPos,
            }));
          }
          lastScrollTime = now;
        } catch (error) {
          console.error('Error handling scroll:', error);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setState]);

  const [typedText, setTypedText] = useState('');
  const fullText = 'web_resume';

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 150);

      return () => clearTimeout(timeoutId);
    }
  }, [typedText, fullText]);

  useEffect(() => {
    let isMounted = true;

    if (state.offset > 700 && window.innerWidth > 640) {
      if (isMounted) {
        setTypedText('');
        setState((prevState) => ({
          ...prevState,
          showQuickNav: true,
        }));
      }
    } else if (state.offset > 100 && window.innerWidth <= 640) {
      if (isMounted) {
        setTypedText('');
        setState((prevState) => ({
          ...prevState,
          showQuickNav: true,
        }));
      }
    } else if (state.offset <= 700 && window.innerWidth > 640) {
      if (isMounted) {
        setState((prevState) => ({
          ...prevState,
          showQuickNav: false,
        }));
      }
    } else if (state.offset <= 100 && window.innerWidth <= 640) {
      if (isMounted) {
        setState((prevState) => ({
          ...prevState,
          showQuickNav: false,
        }));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [state.offset, setState]);

  return {
    state,
    setState,
    handleClick,
    typedText,
    changeTheme,
  };
}
