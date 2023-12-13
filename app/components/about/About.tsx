import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutModeToggle from './AboutModeToggle';
import AboutCard from './AboutCard';
import { useApp } from '@/app/hooks/useApp';

const About = () => {
  const { state, setState } = useApp();

  const [isLongVersion, setIsLongVersion] = useState<boolean>(false);
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  useEffect(() => {
    if (inView) {
      setState((prevState) => ({
        ...prevState,
        currentSection: 'about',
      }));
    }
  }, [inView, state.currentSection]);

  return (
    <section
      id="about"
      ref={ref}
      className="pt-20 p-8 min-h-fit h-screen w-full text-center"
    >
      <div
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
