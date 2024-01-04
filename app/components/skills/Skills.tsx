import { useInView } from 'react-intersection-observer';
import SkillSection from './SkillSection';
import { useApp } from '@/app/hooks/useApp';
import { useEffect } from 'react';

const Skills = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state, setState } = useApp();
  useEffect(() => {
    if (inView) {
      setState((prevState) => ({
        ...prevState,
        currentSection: 'skills',
      }));
    }
  }, [inView, state.currentSection]);
  return (
    <section
      id="skills"
      className={`${
        inView ? 'slide-in-left' : 'slide-off-right'
      } p-8 pt-20 h-fit min-h-screen w-full text-center lg:w-1/2 lg:m-auto`}
    >
      <div
        ref={ref}
        className={`${
          state.theme.id === 'theme1' ? '' : ''
        } min-h-[700px] lg:min-h-fit h-fit text-baseText text-lg justify-evenly rounded-lg py-4 w-full relative `}
      >
        <div className="flex flex-col lg:flex-row ">
          <SkillSection label={'Core Skills'} type={'core'} />
          <SkillSection label={'Broad Proficiencies'} type={'broad'} />
          <SkillSection label={'Intangibles'} type={'intangible'} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
