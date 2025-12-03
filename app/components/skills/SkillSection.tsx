import { skillsList } from '../../data/skillsList';
import { useApp } from '@/app/hooks/useApp';
interface SkillSectionProps {
  label: string;
  type: string;
  isSideSection?: boolean;
}
const SkillSection = ({ label, type, isSideSection = false }: SkillSectionProps) => {
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
      } my-2 pb-3 shadow-md shadow-baseShadow ${
        isSideSection
          ? 'xl:w-[165px] xl:flex-shrink-0 xl:scale-90'
          : 'xl:w-[195px] xl:flex-shrink-0 xl:scale-100'
      } xl:m-2`}
    >
      <p
        className={`text-primary ${
          isSideSection ? 'text-lg' : 'text-xl'
        } border-b border-base2 bg-base shadow-baseShadow shadow-sm text-center font-semibold py-3 ${
          state.theme.id === 'theme1'
            ? 'rounded-t-sm'
            : state.theme.id === ''
            ? 'rounded-t-xl'
            : 'rounded-t-2xl'
        }`}
      >
        {label}
      </p>
      <ul className="w-full pt-3 pb-2 px-3 space-y-2">
        {skillsList.map((skill) => {
          const colorClass = skill.additionalCSS
            .split(' ')
            .find((cls) => cls.startsWith('text-')) || 'text-baseText';
          return skill.type === type ? (
            <li
              key={skill.key}
              className="flex items-center gap-2.5 py-1 hover:bg-base1 transition-colors duration-200 rounded px-2"
            >
              <div className={`${
                isSideSection ? 'text-2xl' : 'text-3xl'
              } flex-shrink-0 ${colorClass}`}>
                {skill.icon}
              </div>
              <p className={`text-baseText ${
                isSideSection ? 'text-sm' : 'text-base'
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
