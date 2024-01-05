import { useState } from 'react';
import AboutModeToggle from './AboutModeToggle';
import AboutCard from './AboutCard';
import { useApp } from '@/app/hooks/useApp';

const About = () => {
  const { state } = useApp();
  const [isLongVersion, setIsLongVersion] = useState<boolean>(false);

  return (
    <section className="pt-20 p-8 min-h-fit h-screen w-full text-center lg:w-1/2 lg:mx-auto">
      <div
        className={`${
          state.currentSection === 'about' ? 'slide-in-right' : 'slide-off-left'
        } border-2 border-base3 rounded-full shadow-md shadow-baseShadow h-40 bg-base2 w-40 mx-auto my-4`}
      ></div>
      <AboutModeToggle
        isLongVersion={isLongVersion}
        setIsLongVersion={setIsLongVersion}
      />
      <div>
        <AboutCard isLongVersion={isLongVersion} />
      </div>
    </section>
  );
};

export default About;
