import { skillsList } from '../../data/skillsList';
import { useApp } from '@/app/hooks/useApp';
interface SkillSectionProps {
  label: string;
  type: string;
}
const SkillSection = ({ label, type }: SkillSectionProps) => {
  const { state } = useApp();

  return (
    <div
      style={{
        backgroundImage:
          state.theme.id === 'theme1' ? 'url(./abstractCardBG.png)' : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`${
        state.theme.id === 'theme1'
          ? 'border border-base3 rounded-sm bg-gradient-radial from-base2 to-base1'
          : state.theme.id === ''
          ? 'rounded-xl border-t border-secondary bg-gradient-radial from-base2 to-base1'
          : 'border-t border-secondary rounded-2xl bg-base2'
      } my-2 pb-2 shadow-md shadow-baseShadow xl:w-1/3 xl:m-2`}
    >
      <p
        className={`text-primary text-xl border-b border-base2 bg-base shadow-baseShadow shadow-sm text-center font-semibold py-4 ${
          state.theme.id === 'theme1'
            ? 'rounded-t-sm'
            : state.theme.id === ''
            ? 'rounded-t-xl'
            : 'rounded-t-2xl'
        }`}
      >
        {label}
      </p>
      <ul className="flex flex-wrap items-center w-full pt-4 pb-2 mx-auto justify-evenly">
        {skillsList.map((skill) =>
          skill.type === type ? (
            <li
              key={skill.key}
              className={`${skill.additionalCSS} flex flex-col bg-base1 border border-base2 shadow-baseShadow0 shadow-sm rounded-lg px-4 items-center justify-center m-1 py-4`}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="mt-2 font-bold text-baseText">{skill.key}</p>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default SkillSection;
