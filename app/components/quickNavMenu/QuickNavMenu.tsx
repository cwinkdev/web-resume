'use client';

import { useApp } from '@/app/hooks/useApp';
import QuickNavButton from './QuickNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from 'react';

const QuickNavMenu = () => {
  const { state } = useApp();
  const [initialXOffset, setInitialXOffset] = useState<number>(0);

  useEffect(() => {
    // Desktop: off-screen left for scroll-in effect. Mobile: smaller offset so nav appears sooner
    const xOffset = window.innerWidth >= 1280 ? -700 : -window.innerWidth;
    setInitialXOffset(xOffset);
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1280); // xl breakpoint
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const calculateTranslateX = (buttonIndex: number) => {
    // On desktop, if showQuickNav is false, keep it fully hidden
    if (!state.showQuickNav && isDesktop) {
      return initialXOffset * (buttonIndex + 1); // Keep at initial offset (fully hidden)
    }

    const startingPoint = 100;
    const scrollYPosition = Math.max(state.offset - startingPoint, 0);

    // Use initialXOffset from state
    let translateX = initialXOffset * (buttonIndex + 1) + scrollYPosition;
    translateX = Math.min(translateX, 0);

    return translateX;
  };

  return (
    <div
      style={{ transform: `translateX(${calculateTranslateX(0)}px)` }}
      className={`flex xl:flex-col xl:h-screen justify-evenly w-full xl:w-36 mx-auto duration-300 xl:bg-base xl:bg-opacity-40 absolute top-0 p-3 ${
        !state.showQuickNav ? 'xl:opacity-0 xl:pointer-events-none' : 'xl:opacity-100'
      }`}
    >
      <ThemeSwitcher
        translateX={calculateTranslateX(0)}
        additionalCSS="text-2xl rounded-full"
        showName={false}
      />
      <div className="w-6 h-6 mx-auto mt-2 border-r opacity-50 border-accent xl:border-b xl:h-0 xl:w-10"></div>
      <div className="flex w-3/4 h-full mx-auto xl:flex-col justify-evenly xl:w-28">
        <QuickNavButton
          label={'ABOUT'}
          icon={<GiPerson />}
          sectionId={'about'}
          translateX={calculateTranslateX(0)}
          additionalCSS={
            state.theme.id === ''
              ? 'text-cyan-200'
              : state.theme.id === 'theme2'
              ? 'text-cyan-300'
              : 'text-cyan-500'
          }
        />
        <QuickNavButton
          label={'SKILLS'}
          icon={<GiSkills />}
          sectionId={'skills'}
          translateX={calculateTranslateX(0)}
          additionalCSS={
            state.theme.id === ''
              ? 'text-amber-200'
              : state.theme.id === 'theme2'
              ? 'text-yellow-300'
              : 'text-amber-500'
          }
        />
        <QuickNavButton
          label={'PORTFOLIO'}
          icon={<GiWoodFrame />}
          sectionId={'portfolio'}
          translateX={calculateTranslateX(0)}
          additionalCSS={
            state.theme.id === ''
              ? 'text-violet-200'
              : state.theme.id === 'theme2'
              ? 'text-pink-300'
              : 'text-violet-500'
          }
        />
        <QuickNavButton
          label={'CONTACT'}
          icon={<GiEnvelope />}
          sectionId={'contact'}
          translateX={calculateTranslateX(0)}
          additionalCSS={
            state.theme.id === ''
              ? 'text-emerald-200'
              : state.theme.id === 'theme2'
              ? 'text-green-300'
              : 'text-emerald-500'
          }
        />
      </div>
    </div>
  );
};

export default QuickNavMenu;
