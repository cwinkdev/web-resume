'use client';

import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../StateContext';

export function useApp() {
  const { state, setState } = useContext(AppStateContext);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 1000; // Maximum scroll value where the text is fully off-screen
      const newPos = Math.min(window.scrollY, maxScroll);
      setState((prevState) => ({
        ...prevState,
        offset: newPos,
      }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (state.offset > 250) {
      setTypedText('');
      setState((prevState) => ({
        ...prevState,
        showQuickNav: true,
      }));
    } else if (state.offset <= 250) {
      setState((prevState) => ({
        ...prevState,
        showQuickNav: false,
      }));
    }
  }, [state.offset]);

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id + ' is in view!');
          setState((prevState) => ({
            ...prevState,
            currentSection: entry.target.id,
          }));
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value based on when you want to switch 'active' sections
    };

    const observer = new IntersectionObserver(callback, options);

    // Select all sections to be observed
    const sections = document.querySelectorAll('section'); // Assuming all your sections are <section> elements
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setState]);

  return {
    state,
    setState,
    handleClick,
    typedText,
  };
}
