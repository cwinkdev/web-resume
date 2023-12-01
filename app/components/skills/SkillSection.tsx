import { skillsList } from '../../data/skillsList';
interface SkillSectionProps {
  label: string;
  type: string;
}
const SkillSection = ({ label, type }: SkillSectionProps) => {
  return (
    <div className="my-2 border-2 pb-2 border-neutral-600 rounded-lg bg-neutral-900 shadow-md shadow-black">
      <p className="text-emerald-300 border-b border-neutral-800 text-left font-semibold py-2 px-4 rounded-t-lg bg-gradient-to-r from-black to-transparent">
        {label}
      </p>
      <ul className="">
        {skillsList.map((skill) =>
          skill.type === type ? (
            <li
              key={skill.key}
              className={`${skill.additionalCSS} my-1.5 flex px-6`}
            >
              <div className="mr-4 w-1 h-1 my-auto bg-emerald-300"></div>
              <p>{skill.key}</p>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default SkillSection;
