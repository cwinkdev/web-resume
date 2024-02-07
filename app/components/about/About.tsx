import { useState } from 'react';
import AboutModeToggle from './AboutModeToggle';
import AboutCard from './AboutCard';
import { useApp } from '@/app/hooks/useApp';

const About = () => {
  const { state } = useApp();
  const [isLongVersion, setIsLongVersion] = useState<boolean>(false);

  return (
    <section className="h-screen p-8 pt-32 text-center min-h-fit xl:mx-auto">
      <div
        style={{
          backgroundImage: 'url(./i.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`${
          state.currentSection === 'about' ? 'slide-in-right' : ''
        } border-2 border-base3 rounded-full shadow-md shadow-baseShadow h-40 bg-base2 w-40 mx-auto my-4`}
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
