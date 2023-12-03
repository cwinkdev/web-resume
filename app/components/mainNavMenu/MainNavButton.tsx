'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useApp } from '../../hooks/useApp';

interface MainNavButtonProps {
  label: string;
  icon: ReactNode;
  additionalCSS: string;
  sectionId: string;
}

const MainNavButton = ({
  label,
  icon,
  additionalCSS,
  sectionId,
}: MainNavButtonProps) => {
  const { handleClick } = useApp();

  return (
    <Link
      href={`#${sectionId}`}
      onClick={(e) => handleClick(e, sectionId)}
      className="w-40 h-40 text-center my-20 "
    >
      <div
        className={`h-3/4 w-3/4 flex bg-base mx-auto border-2 nav-button-custom border-base3 p-1.5 rounded-full ${additionalCSS}`}
      >
        <div className="m-auto text-7xl appearAnimation">{icon}</div>
      </div>
      <p className="text-lg mt-4 h-1/4 font-light  appearAnimation ">{label}</p>
    </Link>
  );
};

export default MainNavButton;
