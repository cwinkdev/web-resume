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
        className={`flex rounded-full h-10 py-1 text-center bg-base ${
          state.currentSection === sectionId
            ? ` opacity-70`
            : ' opacity-100 scale-110 shadow-md shadow-baseShadow'
        } duration-300 text-2xl border-base3 border p-2 m-auto ${additionalCSS}`}
      >
        <div className="m-auto">{icon}</div>
      </div>
    </Link>
  );
};

export default QuickNavButton;
