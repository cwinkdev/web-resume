import { useState } from 'react';
import { aboutMeText } from '../../data/aboutMe';
import { splitIntoLines } from '../../utils/splitParagraph';
import { useInView } from 'react-intersection-observer';

interface AboutModeToggleProps {
  isLongVersion: boolean;
  setIsLongVersion: (isLongVersion: boolean) => void;
}

const AboutModeToggle = ({
  setIsLongVersion,
  isLongVersion,
}: AboutModeToggleProps) => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <div
      ref={ref}
      className={`${
        inView ? 'slide-in-left' : 'slide-off-right'
      } flex w-56 justify-center mx-auto text-center text-sm my-4`}
    >
      <p className="my-auto text-primary">Version:</p>
      <div className="w-40 h-6 mx-auto rounded-full flex shadow-md shadow-baseShadow bg-base1 text-baseText relative font-light box-border border border-base3">
        <div
          onClick={() => setIsLongVersion(false)}
          className={`${
            isLongVersion ? 'font-normal' : 'font-bold'
          } w-1/2 flex h-full rounded-l-full duration-300`}
        >
          <p className="m-auto"> Short</p>
        </div>
        <div
          className={`${
            isLongVersion ? 'font-bold' : 'font-normal'
          } w-1/2 flex h-full rounded-r-full duration-300 `}
          onClick={() => setIsLongVersion(true)}
        >
          <p className="m-auto">Long</p>
        </div>
        <div
          className={`${
            isLongVersion ? 'right-0' : 'right-20'
          } absolute duration-500 shadow-md shadow-baseShadow h-full w-1/2 border border-secondary bg-white bg-opacity-10 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default AboutModeToggle;
