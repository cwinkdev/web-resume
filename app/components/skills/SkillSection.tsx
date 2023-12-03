import { skillsList } from '../../data/skillsList';
interface SkillSectionProps {
  label: string;
  type: string;
}
const SkillSection = ({ label, type }: SkillSectionProps) => {
  return (
    <div className="my-2 border-2 pb-2 border-base3 bg-base1 rounded-lg skill-section-custom shadow-md shadow-black">
      <p className="text-primary border-b border-base2 text-left font-semibold py-2 px-4 rounded-t-lg bg-base">
        {label}
      </p>
      <ul className="">
        {skillsList.map((skill) =>
          skill.type === type ? (
            <li
              key={skill.key}
              className={`${skill.additionalCSS} my-1.5 flex px-6 bg-base1`}
            >
              <div className="mr-4 w-1 h-1 my-auto bg-secondary"></div>
              <p className="text-baseText">{skill.key}</p>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default SkillSection;
