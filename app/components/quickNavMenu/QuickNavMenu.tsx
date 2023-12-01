'use client';

import { useApp } from '@/app/hooks/useApp';
import QuickNavButton from './QuickNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';

const QuickNavMenu = () => {
  const { state } = useApp();

  const calculateTranslateX = (buttonIndex: number) => {
    const startingPoint = 250;
    const scrollYPosition = Math.max(state.offset - startingPoint, 0);

    // The initial negative offset so that buttons start off-screen
    const initialXOffset = -350 * (buttonIndex + 1);

    // Calculate the translation needed based on scroll position
    let translateX = initialXOffset + scrollYPosition;

    // Ensure that the translateX doesn't go beyond the initial position
    translateX = Math.min(translateX, 0);

    return translateX;
  };

  return (
    <div className={`flex justify-evenly w-2/3 mx-auto absolute`}>
      <QuickNavButton
        icon={<GiPerson />}
        sectionId={'about'}
        translateX={calculateTranslateX(0)}
        additionalCSS={'text-cyan-200'}
      />
      <QuickNavButton
        icon={<GiSkills />}
        sectionId={'skills'}
        translateX={calculateTranslateX(0)}
        additionalCSS={'text-amber-200'}
      />
      <QuickNavButton
        icon={<GiWoodFrame />}
        sectionId={'portfolio'}
        translateX={calculateTranslateX(0)}
        additionalCSS={'text-violet-200'}
      />
      <QuickNavButton
        icon={<GiEnvelope />}
        sectionId={'contact'}
        translateX={calculateTranslateX(0)}
        additionalCSS={'text-emerald-200'}
      />
    </div>
  );
};

export default QuickNavMenu;
