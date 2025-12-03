import { skillsList } from '../../data/skillsList';
import { useApp } from '@/app/hooks/useApp';
interface SkillSectionProps {
  label: string;
  type: string;
  isSideSection?: boolean;
  isActive?: boolean;
}
const SkillSection = ({ label, type, isSideSection = false, isActive = false }: SkillSectionProps) => {
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
          ? `rounded-xl border-t ${
              isActive ? 'border-secondary bg-base2' : 'border-gray-500 bg-base1'
            } bg-gradient-radial from-base2 to-base1`
          : `border-t ${
              isActive ? 'border-secondary' : 'border-gray-500'
            } rounded-2xl ${isActive ? 'bg-base2' : 'bg-base1'}`
      } my-2 pb-3 shadow-md shadow-baseShadow ${
        isSideSection
          ? 'xl:w-[220px] xl:flex-shrink-0'
          : 'xl:w-[280px] xl:flex-shrink-0'
      } xl:m-2`}
    >
      <p
        className={`text-accent ${
          isSideSection ? 'text-xl' : 'text-2xl'
        } border-b border-base2 bg-base shadow-baseShadow shadow-sm text-center font-semibold py-4 ${
          state.theme.id === 'theme1'
            ? 'rounded-t-sm'
            : state.theme.id === ''
            ? 'rounded-t-xl'
            : 'rounded-t-2xl'
        }`}
      >
        {label}
      </p>
      <ul className="w-full pt-4 pb-3 px-4 space-y-3">
        {skillsList.map((skill) => {
          const colorClass = skill.additionalCSS
            .split(' ')
            .find((cls) => cls.startsWith('text-')) || 'text-baseText';
          return skill.type === type ? (
            <li
              key={skill.key}
              className="flex items-center gap-3 py-2 hover:bg-base1 transition-colors duration-200 rounded px-2"
            >
              <div className={`${
                isSideSection ? 'text-3xl' : 'text-4xl'
              } flex-shrink-0 ${colorClass}`}>
                {skill.icon}
              </div>
              <p className={`text-baseText ${
                isSideSection ? 'text-base' : 'text-lg'
              } font-medium text-left flex-grow`}>
                {skill.key}
              </p>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default SkillSection;
