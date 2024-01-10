import SkillSection from './SkillSection';
import { useApp } from '@/app/hooks/useApp';

const Skills = () => {
  const { state } = useApp();

  return (
    <section
      className={`${
        state.currentSection === 'skills' ? 'slide-in-left' : ''
      } p-8 pt-20 lg:pt-0 h-fit min-h-screen w-full text-center flex items-center lg:w-3/4 lg:m-auto`}
    >
      <div
        className={`${
          state.theme.id === 'theme1' ? '' : ''
        } min-h-[700px] lg:min-h-fit h-fit text-baseText text-lg justify-evenly rounded-lg py-4 w-full relative `}
      >
        <p className="text-4xl text-accent mb-12">What I can do for you...</p>
        <div className="flex flex-col lg:flex-row">
          <SkillSection label={'Core Skills'} type={'core'} />
          <SkillSection label={'Broad Proficiencies'} type={'broad'} />
          <SkillSection label={'Intangibles'} type={'intangible'} />
        </div>
        <div className="mt-20"></div>
      </div>
    </section>
  );
};

export default Skills;
