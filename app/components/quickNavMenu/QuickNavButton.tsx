'use client';

import { useApp } from '@/app/hooks/useApp';
import Link from 'next/link';
import { ReactNode } from 'react';

interface QuickNavButtonProps {
  label: string;
  icon: ReactNode;
  sectionId: string;
  translateX: number;
  additionalCSS: string;
}

const QuickNavButton = ({
  label,
  icon,
  sectionId,
  translateX,
  additionalCSS,
}: QuickNavButtonProps) => {
  const { state, handleClick } = useApp();

  return (
    <Link
      href={`#${sectionId}`}
      onClick={(e) => handleClick(e, sectionId)}
      style={{ transform: `translateX(${translateX}px)` }}
      className="group"
    >
      <div
        className={`flex h-10 xl:h-16 xl:w-16 text-center ${
          state.currentSection === sectionId
            ? ` opacity-80 bg-base1 border-secondary`
            : ' opacity-100 scale-110 shadow-md shadow-baseShadow bg-base border-base3'
        } ${
          state.theme.id === 'theme1'
            ? 'rounded-sm'
            : state.theme.id === ''
            ? 'rounded-xl'
            : 'rounded-full'
        } duration-300 text-2xl relative group-hover:border-accent border-base3 border-2 px-1.5 m-auto ${additionalCSS}`}
      >
        <div
          className={`${
            state.theme.id === 'theme1'
              ? 'rounded-sm'
              : state.theme.id === ''
              ? 'rounded-xl'
              : 'rounded-full'
          } absolute left-0 h-full bg-base2 transform opacity-0 group-hover:opacity-100 w-[0%] group-hover:w-[100%] duration-700`}
        ></div>
        <div className="z-10 m-auto">{icon}</div>
      </div>
      <p
        className={`text-center mt-2 duration-300 group-hover:text-accent hidden xl:block ${
          state.currentSection === sectionId ? ` opacity-100 ` : ' opacity-70 '
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default QuickNavButton;
