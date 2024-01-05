import { useInView } from 'react-intersection-observer';
import { skillsList } from '../../data/skillsList';
import { useApp } from '@/app/hooks/useApp';
interface SkillSectionProps {
  label: string;
  type: string;
}
const SkillSection = ({ label, type }: SkillSectionProps) => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state } = useApp();

  return (
    <div
      ref={ref}
      style={{
        backgroundImage:
          state.theme.id === 'theme1' ? 'url(./abstractCardBG.png)' : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`${inView ? 'slide-in-right' : 'slide-off-left'} ${
        state.theme.id === 'theme1'
          ? 'border border-base3 rounded-sm'
          : state.theme.id === ''
          ? 'rounded-xl border-t border-secondary'
          : 'border-t border-secondary rounded-2xl'
      } my-2 pb-2 bg-gradient-radial from-base2 to-base1 skill-section-custom shadow-md shadow-baseShadow lg:w-1/3 lg:m-2`}
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
      <ul className="w-full mx-auto flex flex-wrap items-center justify-evenly pb-2 pt-4">
        {skillsList.map((skill) =>
          skill.type === type ? (
            <li
              key={skill.key}
              className={`${skill.additionalCSS} flex flex-col bg-base border border-base2 shadow-baseShadow0 shadow-sm rounded-lg px-4 items-center justify-center m-1 py-4`}
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-baseText font-bold mt-2">{skill.key}</p>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default SkillSection;
