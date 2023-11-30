import SkillSection from '../skills/skillSection';

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8 pt-32 h-screen w-full text-center bg-neutral-950"
    >
      <div
        className={` border-emerald-400 bg-gradient-to-b from-neutral-900 to-neutral-950 justify-evenly flex flex-col rounded-lg border-y py-4 px-6 h-full top w-full relative shadow-inner shadow-black`}
      >
        <SkillSection label={'Core Skills'} type={'core'} />
        <SkillSection label={'Broad Skills'} type={'broad'} />
        <SkillSection label={'Intangibles'} type={'intangible'} />
      </div>
    </section>
  );
};

export default Skills;
