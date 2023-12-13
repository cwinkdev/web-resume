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
          ? 'border border-base3'
          : ' border-y border-secondary'
      } my-2 pb-2 bg-base1 rounded-lg skill-section-custom shadow-md shadow-baseShadow`}
    >
      <p
        className={`bg-base2 text-primary border-b border-base2 text-left font-semibold py-2 px-4 rounded-t-lg`}
      >
        {label}
      </p>
      <ul className="">
        {skillsList.map((skill) =>
          skill.type === type ? (
            <li
              key={skill.key}
              className={`${skill.additionalCSS} my-1.5 flex px-6`}
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
