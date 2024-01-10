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
    >
      <div
        className={`flex h-10 xl:h-16 xl:w-16 py-1 text-center ${
          state.currentSection === sectionId
            ? ` opacity-80 bg-base border-secondary`
            : ' opacity-100 scale-110 shadow-md shadow-baseShadow bg-base2  border-base3'
        } ${
          state.theme.id === 'theme1' ? 'rounded-sm ' : 'rounded-full'
        } duration-300 text-2xl border-base3 border-2 p-2 m-auto ${additionalCSS}`}
      >
        <div className="m-auto">{icon}</div>
      </div>
      <p
        className={`text-center mt-2 duration-300 hidden xl:block ${
          state.currentSection === sectionId ? ` opacity-100 ` : ' opacity-70 '
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default QuickNavButton;
