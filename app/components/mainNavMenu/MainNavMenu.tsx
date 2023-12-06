import { useApp } from '@/app/hooks/useApp';
import MainNavButton from './MainNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';

interface MainNavMenuProps {}

const MainNavMenu = ({}: MainNavMenuProps) => {
  const { state } = useApp();

  return (
    <div className="w-full grid grid-rows-2 grid-cols-1 text-center h-[500px] my-auto">
      <div className="flex justify-evenly">
        <MainNavButton
          label={'ABOUT'}
          icon={<GiPerson />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme === '' ? 'text-cyan-200' : 'text-cyan-500'
          }`}
          sectionId={'about'}
          componentID={'navButtonAbout'}
        />
        <MainNavButton
          label={'SKILLS'}
          icon={<GiSkills />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme === '' ? 'text-amber-200' : 'text-amber-500'
          }`}
          sectionId={'skills'}
          componentID={'navButtonSkills'}
        />
      </div>
      <div className="flex justify-evenly">
        <MainNavButton
          label={'PORTFOLIO'}
          icon={<GiWoodFrame />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme === '' ? 'text-violet-200' : 'text-violet-500'
          }`}
          sectionId={'portfolio'}
          componentID={'navButtonPortfolio'}
        />
        <MainNavButton
          label={'CONTACT'}
          icon={<GiEnvelope />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme === '' ? 'text-emerald-200' : 'text-emerald-500'
          }`}
          sectionId={'contact'}
          componentID={'navButtonContact'}
        />
      </div>
    </div>
  );
};

export default MainNavMenu;
