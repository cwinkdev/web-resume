import { useState } from 'react';
import AboutModeToggle from './AboutModeToggle';
import AboutCard from './AboutCard';
import { useApp } from '@/app/hooks/useApp';

const About = () => {
  const { state } = useApp();
  const [isLongVersion, setIsLongVersion] = useState<boolean>(false);

  return (
    <section className="pt-32 p-8 min-h-fit h-screen w-full text-center xl:w-1/2 xl:mx-auto">
      <div
        className={`${
          state.currentSection === 'about' ? 'slide-in-right' : ''
        } border-2 border-base3 rounded-full shadow-md shadow-baseShadow mx-auto h-40 bg-base2 w-40 mx-auto my-4`}
      ></div>
      <AboutModeToggle
        isLongVersion={isLongVersion}
        setIsLongVersion={setIsLongVersion}
      />
      <AboutCard isLongVersion={isLongVersion} />
    </section>
  );
};

export default About;
