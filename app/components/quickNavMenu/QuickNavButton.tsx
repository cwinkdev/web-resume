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
      className="group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded"
      aria-label={`Navigate to ${label} section`}
      aria-current={state.currentSection === sectionId ? 'page' : undefined}
    >
      <div
        className={`flex h-10 xl:h-16 xl:w-16 text-center ${
          state.currentSection === sectionId
            ? ` opacity-80 bg-base1 border-secondary border-2`
            : ' opacity-100 scale-110 border shadow-md shadow-baseShadow bg-base border-base3'
        } ${
          state.theme.id === 'theme1'
            ? 'rounded-sm'
            : state.theme.id === 'theme2'
            ? 'rounded-full'
            : 'rounded-xl'
        } duration-300 text-2xl relative xl:group-hover:border-accent border-base3 px-1.5 m-auto ${additionalCSS}`}
        role="button"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className={`${
            state.theme.id === 'theme1'
              ? 'rounded-sm'
              : state.theme.id === 'theme2'
              ? 'rounded-full'
              : 'rounded-xl'
          } absolute left-0 h-full bg-base2 transform opacity-0 xl:group-hover:opacity-100 w-[0%] xl:group-hover:w-[100%] duration-700`}
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
