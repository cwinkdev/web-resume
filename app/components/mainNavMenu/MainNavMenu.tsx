import MainNavButton from './MainNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';

interface MainNavMenuProps {}

const MainNavMenu = ({}: MainNavMenuProps) => {
  return (
    <div className="w-full grid grid-rows-2 grid-cols-1 text-center h-[500px] my-auto">
      <div className="flex justify-evenly">
        <MainNavButton
          label={'ABOUT'}
          icon={<GiPerson />}
          additionalCSS={'dropBounceLeftAnimation text-cyan-200'}
          sectionId={'about'}
        />
        <MainNavButton
          label={'SKILLS'}
          icon={<GiSkills />}
          additionalCSS={'dropBounceRightAnimation text-amber-200'}
          sectionId={'skills'}
        />
      </div>
      <div className="flex justify-evenly">
        <MainNavButton
          label={'PORTFOLIO'}
          icon={<GiWoodFrame />}
          additionalCSS={'dropBounceLeftAnimation text-violet-200'}
          sectionId={'portfolio'}
        />
        <MainNavButton
          label={'CONTACT'}
          icon={<GiEnvelope />}
          additionalCSS={'dropBounceRightAnimation text-emerald-200'}
          sectionId={'contact'}
        />
      </div>
    </div>
  );
};

export default MainNavMenu;
