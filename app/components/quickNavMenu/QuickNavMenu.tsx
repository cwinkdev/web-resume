'use client';

import { useApp } from '@/app/hooks/useApp';
import QuickNavButton from './QuickNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';
import ThemeSwitcher from './ThemeSwitcher';

const QuickNavMenu = () => {
  const { state } = useApp();

  const calculateTranslateX = (buttonIndex: number) => {
    const startingPoint = 100;
    const scrollYPosition = Math.max(state.offset - startingPoint, 0);

    // The initial negative offset so that buttons start off-screen
    const initialXOffset =
      window.innerWidth > 640
        ? -700 * (buttonIndex + 1)
        : -700 * (buttonIndex + 1);

    // Calculate the translation needed based on scroll position
    let translateX = initialXOffset + scrollYPosition;

    // Ensure that the translateX doesn't go beyond the initial position
    translateX = Math.min(translateX, 0);

    return translateX;
  };

  return (
    <div
      style={{ transform: `translateX(${calculateTranslateX(0)}px)` }}
      className={`flex lg:flex-col lg:h-screen justify-evenly w-full lg:w-28 mx-auto lg:bg-base lg:bg-opacity-10 absolute top-0 p-3`}
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
