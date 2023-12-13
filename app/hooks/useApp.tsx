'use client';

import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../StateContext';

export function useApp() {
  const { state, setState } = useContext(AppStateContext);

  const changeTheme = (theme: string) => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      setState((prevState) => ({
        ...prevState,
        currentSection: sectionId,
      }));
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

  return {
    state,
    setState,
    handleClick,
    typedText,
    changeTheme,
  };
}
