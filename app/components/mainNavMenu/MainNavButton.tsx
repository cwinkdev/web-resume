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
      } w-48 h-48 xl:w-56 xl:h-56 text-center duration-300 group outline-none focus:outline-none focus:ring-1 focus:ring-accent/50 focus:ring-offset-1 focus:ring-offset-base rounded`}
      id={componentID}
      ref={ref}
      aria-label={`Navigate to ${label} section`}
    >
      <div
        className={`${
          state.theme.id === 'theme1'
            ? 'rounded-sm'
            : state.theme.id === 'theme2'
            ? 'rounded-full'
            : 'rounded-xl'
        } relative h-3/4 w-3/4 flex bg-base shadow-md xl:group-hover:scale-110 xl:group-hover:border-accent shadow-baseShadow mx-auto duration-500 border-2 border-base3 ${additionalCSS}`}
      >
        <div className="z-10 m-auto text-8xl xl:text-9xl">{icon}</div>
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
              : state.theme.id === 'theme2'
              ? 'rounded-full'
              : 'rounded-xl'
          } absolute left-0 h-full bg-base2 transform opacity-0 xl:group-hover:opacity-100 w-[0%] xl:group-hover:w-[100%] duration-700`}
        ></div>
      </div>
      <p className="mt-4 text-xl xl:text-2xl font-light h-1/4 xl:group-hover:text-accent xl:group-hover:font-normal xl:group-hover:text-2xl">
        {label}
      </p>
    </Link>
  );
};

export default MainNavButton;
