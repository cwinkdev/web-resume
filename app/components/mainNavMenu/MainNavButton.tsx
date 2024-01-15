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
      } w-40 h-40 text-center duration-300 group `}
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
        } relative h-3/4 w-3/4 flex bg-base shadow-md group-hover:scale-110 group-hover:border-accent shadow-baseShadow mx-auto duration-500 border-2 border-base3 ${additionalCSS}`}
      >
        <div className="m-auto text-7xl z-10">{icon}</div>
        <div
          className={`${
            state.theme.id === 'theme1'
              ? 'rounded-sm'
              : state.theme.id === ''
              ? 'rounded-xl'
              : 'rounded-full'
          } absolute left-0 h-full bg-base2 transform w-[0%] group-hover:w-[100%] duration-700`}
        ></div>
      </div>
      <p className="text-lg mt-4 h-1/4 font-light group-hover:text-accent">
        {label}
      </p>
    </Link>
  );
};

export default MainNavButton;
