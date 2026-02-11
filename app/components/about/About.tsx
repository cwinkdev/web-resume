import { useState } from 'react';
import AboutModeToggle from './AboutModeToggle';
import AboutCard from './AboutCard';
import { useApp } from '@/app/hooks/useApp';

const About = () => {
  const { state } = useApp();
  const [isLongVersion, setIsLongVersion] = useState<boolean>(false);

  return (
    <section
      className="h-screen p-4 xl:p-8 pt-24 xl:pt-32 text-center min-h-screen xl:mx-auto bg-base1 relative"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">About Me</h2>
      <div
        style={{
          backgroundImage: 'url(./i.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`${
          state.currentSection === 'about' ? 'slide-in-right' : ''
        } border-2 border-base3 rounded-full shadow-md shadow-baseShadow h-48 w-48 xl:h-64 xl:w-64 mx-auto my-4`}
        role="img"
        aria-label="Profile picture of Christian Winkler"
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
