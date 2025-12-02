import SkillSection from './SkillSection';
import { useApp } from '@/app/hooks/useApp';

const Skills = () => {
  const { state } = useApp();

  return (
    <section
      className={`${
        state.currentSection === 'skills' ? 'slide-in-left' : ''
      } p-8 xl:pt-0 h-fit min-h-screen w-full text-center flex items-center xl:w-3/4 xl:m-auto`}
      aria-labelledby="skills-heading"
    >
      <div
        className={`${
          state.theme.id === 'theme1' ? '' : ''
        } min-h-[700px] xl:min-h-fit h-fit text-baseText text-lg justify-evenly rounded-lg py-4 w-full relative `}
      >
        <h2
          id="skills-heading"
          className={`text-4xl text-accent mb-12 ${
            state.currentSection === 'skills' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          What I can do for you...
        </h2>
        <div className="flex flex-col xl:flex-row">
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
