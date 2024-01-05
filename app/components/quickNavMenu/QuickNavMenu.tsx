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
    // Calculate initialXOffset when component mounts
    const xOffset = window.innerWidth > 640 ? -700 : -700; // Adjust your logic as needed
    setInitialXOffset(xOffset);
  }, []);

  const calculateTranslateX = (buttonIndex: number) => {
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
      className={`flex lg:flex-col lg:h-screen justify-evenly w-full lg:w-28 mx-auto lg:bg-black lg:bg-opacity-20  absolute top-0 p-3`}
    >
      <ThemeSwitcher
        translateX={calculateTranslateX(0)}
        additionalCSS="text-2xl rounded-full"
        showName={false}
      />
      <QuickNavButton
        icon={<GiPerson />}
        sectionId={'about'}
        translateX={calculateTranslateX(0)}
        additionalCSS={
          state.theme.id === '' ? 'text-cyan-200' : 'text-cyan-500'
        }
      />
      <QuickNavButton
        icon={<GiSkills />}
        sectionId={'skills'}
        translateX={calculateTranslateX(0)}
        additionalCSS={
          state.theme.id === '' ? 'text-amber-200' : 'text-amber-500'
        }
      />
      <QuickNavButton
        icon={<GiWoodFrame />}
        sectionId={'portfolio'}
        translateX={calculateTranslateX(0)}
        additionalCSS={
          state.theme.id === '' ? 'text-violet-200' : 'text-violet-500'
        }
      />
      <QuickNavButton
        icon={<GiEnvelope />}
        sectionId={'contact'}
        translateX={calculateTranslateX(0)}
        additionalCSS={
          state.theme.id === '' ? 'text-emerald-200' : 'text-emerald-500'
        }
      />
    </div>
  );
};

export default QuickNavMenu;
