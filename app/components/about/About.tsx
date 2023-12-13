import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutModeToggle from './AboutModeToggle';
import AboutCard from './AboutCard';

const About = () => {
  const [isLongVersion, setIsLongVersion] = useState<boolean>(false);
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <section
      id="about"
      className="pt-20 p-8 min-h-fit h-screen w-full text-center"
    >
      <div
        ref={ref}
        className={`${
          inView ? 'slide-in-right' : 'slide-off-left'
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
