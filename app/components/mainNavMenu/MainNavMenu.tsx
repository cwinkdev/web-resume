import { useApp } from '@/app/hooks/useApp';
import MainNavButton from './MainNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';
import ThemeSwitcher from '../quickNavMenu/ThemeSwitcher';
import { useInView } from 'react-intersection-observer';

interface MainNavMenuProps {}

const MainNavMenu = ({}: MainNavMenuProps) => {
  const { state } = useApp();
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <div className="w-full flex flex-col text-center h-full my-auto">
      <div className="h-[400px] grid grid-rows-2 grid-cols-1 xl:flex xl:mx-auto">
        <div className="flex justify-center h-1/2">
          <MainNavButton
            label={'ABOUT'}
            icon={<GiPerson />}
            additionalCSS={`dropBounceLeftAnimation ${
              state.theme.id === '' ? 'text-cyan-200' : 'text-cyan-500'
            }`}
            sectionId={'about'}
            componentID={'navButtonAbout'}
          />
          <MainNavButton
            label={'SKILLS'}
            icon={<GiSkills />}
            additionalCSS={`dropBounceLeftAnimation ${
              state.theme.id === '' ? 'text-amber-200' : 'text-amber-500'
            }`}
            sectionId={'skills'}
            componentID={'navButtonSkills'}
          />
        </div>
        <div className="flex justify-center h-1/2">
          <MainNavButton
            label={'PORTFOLIO'}
            icon={<GiWoodFrame />}
            additionalCSS={`dropBounceLeftAnimation ${
              state.theme.id === '' ? 'text-violet-200' : 'text-violet-500'
            }`}
            sectionId={'portfolio'}
            componentID={'navButtonPortfolio'}
          />
          <MainNavButton
            label={'CONTACT'}
            icon={<GiEnvelope />}
            additionalCSS={`dropBounceLeftAnimation ${
              state.theme.id === '' ? 'text-emerald-200' : 'text-emerald-500'
            }`}
            sectionId={'contact'}
            componentID={'navButtonContact'}
          />
        </div>
      </div>
      <div ref={ref} className={`w-full ${inView ? 'slide-in-left' : ''} `}>
        <ThemeSwitcher additionalCSS="text-4xl w-64 px-3" showName={true} />
      </div>
    </div>
  );
};

export default MainNavMenu;
