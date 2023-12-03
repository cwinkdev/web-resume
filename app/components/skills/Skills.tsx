import SkillSection from './SkillSection';

const Skills = () => {
  return (
    <section id="skills" className="p-8 pt-20 h-screen w-full text-center">
      <div
        className={`border-secondary min-h-[700px] h-fit bg-base text-baseText justify-evenly flex flex-col rounded-lg border-y py-4 px-6 w-full relative shadow-lg shadow-black`}
      >
        <SkillSection label={'Core Skills'} type={'core'} />
        <SkillSection label={'Broad Skills'} type={'broad'} />
        <SkillSection label={'Intangibles'} type={'intangible'} />
      </div>
    </section>
  );
};

export default Skills;
