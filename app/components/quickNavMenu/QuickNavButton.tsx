'use client';

import { useApp } from '@/app/hooks/useApp';
import Link from 'next/link';
import { ReactNode } from 'react';

interface QuickNavButtonProps {
  icon: ReactNode;
  sectionId: string;
  translateX: number;
  additionalCSS: string;
}

const QuickNavButton = ({
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
        className={`flex h-10 lg:h-16 lg:w-16 py-1 text-center bg-base ${
          state.currentSection === sectionId
            ? ` opacity-80`
            : ' opacity-100 scale-110 shadow-md shadow-baseShadow'
        } ${
          state.theme.id === 'theme1' ? 'rounded-sm' : 'rounded-full'
        } duration-300 text-2xl border-base3 border-2 p-2 m-auto ${additionalCSS}`}
      >
        <div className="m-auto">{icon}</div>
      </div>
    </Link>
  );
};

export default QuickNavButton;
