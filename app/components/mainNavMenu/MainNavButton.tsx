'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useApp } from '../../hooks/useApp';
import { useInView } from 'react-intersection-observer';

interface MainNavButtonProps {
  label: string;
  icon: ReactNode;
  additionalCSS: string;
  sectionId: string;
  componentID: string;
}

const MainNavButton = ({
  label,
  icon,
  additionalCSS,
  sectionId,
  componentID,
}: MainNavButtonProps) => {
  const { handleClick } = useApp();
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <Link
      href={`#${sectionId}`}
      onClick={(e) => handleClick(e, sectionId)}
      className={`${
        inView ? 'slide-in-left' : 'slide-off-right'
      } w-40 h-40 text-center my-20 duration-300`}
      id={componentID}
      ref={ref}
    >
      <div
        className={`h-3/4 w-3/4 flex bg-base mx-auto border-2 border-base3 p-1.5 rounded-full ${additionalCSS}`}
      >
        <div className="m-auto text-7xl">{icon}</div>
      </div>
      <p className="text-lg mt-4 h-1/4 font-light ">{label}</p>
    </Link>
  );
};

export default MainNavButton;
