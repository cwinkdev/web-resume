import { useInView } from 'react-intersection-observer';
import SkillSection from './SkillSection';
import { useApp } from '@/app/hooks/useApp';

const Skills = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state } = useApp();

  return (
    <section
      ref={ref}
      id="skills"
      className={`${
        inView ? 'slide-in-left' : 'slide-off-right'
      } p-8 pt-20 min-h-fit h-screen w-full text-center`}
    >
      <div
        className={`${
          state.theme.id === 'theme1'
            ? 'border-y border-base3'
            : 'shadow-md shadow-baseShadow'
        } min-h-[700px] h-fit bg-base text-baseText justify-evenly flex flex-col rounded-lg py-4 px-6 w-full relative `}
      >
        <SkillSection label={'Core Skills'} type={'core'} />
        <SkillSection label={'Broad Skills'} type={'broad'} />
        <SkillSection label={'Intangibles'} type={'intangible'} />
      </div>
    </section>
  );
};

export default Skills;
