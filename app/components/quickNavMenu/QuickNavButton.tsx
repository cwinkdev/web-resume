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
        className={`flex rounded-full h-10 py-1 text-center ${
          state.currentSection === sectionId
            ? 'border-emerald-400 opacity-100'
            : 'border-neutral-500 opacity-70'
        } duration-300 text-2xl border-2 bg-neutral-800 p-2 m-auto ${additionalCSS}`}
      >
        <div className="m-auto">{icon}</div>
      </div>
    </Link>
  );
};

export default QuickNavButton;
