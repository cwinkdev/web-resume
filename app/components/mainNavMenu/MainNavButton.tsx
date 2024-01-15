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
  const { state } = useApp();

  return (
    <Link
      href={`#${sectionId}`}
      onClick={(e) => handleClick(e, sectionId)}
      className={`${
        inView ? 'slide-in-left' : ''
      } w-40 h-40 text-center relative duration-300 hover:scale-110 hover:text-accent`}
      id={componentID}
      ref={ref}
    >
      <div
        style={{
          backgroundImage:
            state.theme.id === 'theme1' ? 'url(./abstractCardBG.png)' : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`${
          state.theme.id === 'theme1'
            ? 'rounded-sm'
            : state.theme.id === ''
            ? 'rounded-xl'
            : 'rounded-full'
        } h-3/4 w-3/4 flex bg-base shadow-md shadow-baseShadow mx-auto duration-300 border-2 border-base3 hover:border-accent p-1.5 ${additionalCSS}`}
      >
        <div className="m-auto text-7xl">{icon}</div>
      </div>
      <p className="text-lg mt-4 h-1/4 font-light">{label}</p>
    </Link>
  );
};

export default MainNavButton;
