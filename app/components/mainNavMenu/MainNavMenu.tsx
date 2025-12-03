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
    <div className="flex flex-col w-full text-center pt-8 xl:pt-12">
      <div
        ref={ref}
        className={`w-full ${inView ? 'slide-in-left' : ''} `}
      >
        <div className="mb-4 xl:mb-6">
          <ThemeSwitcher
            additionalCSS=""
            showName={true}
          />
        </div>
      </div>
    <div>
        <p className="text-baseText text-lg xl:text-xl opacity-80 font-thin tracking-wide mb-10 mt-10">
          Hop to a specific section
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-6 xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-8 xl:max-w-5xl xl:mx-auto mb-4 xl:mb-6">
        <MainNavButton
          label={'ABOUT ME'}
          icon={<GiPerson />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme.id === ''
              ? 'text-cyan-200'
              : state.theme.id === 'theme2'
              ? 'text-cyan-300'
              : 'text-cyan-500'
          }`}
          sectionId={'about'}
          componentID={'navButtonAbout'}
        />
        <MainNavButton
          label={'SKILLS'}
          icon={<GiSkills />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme.id === ''
              ? 'text-amber-200'
              : state.theme.id === 'theme2'
              ? 'text-yellow-300'
              : 'text-amber-500'
          }`}
          sectionId={'skills'}
          componentID={'navButtonSkills'}
        />
        <MainNavButton
          label={'PORTFOLIO'}
          icon={<GiWoodFrame />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme.id === ''
              ? 'text-violet-200'
              : state.theme.id === 'theme2'
              ? 'text-pink-300'
              : 'text-violet-500'
          }`}
          sectionId={'portfolio'}
          componentID={'navButtonPortfolio'}
        />
        <MainNavButton
          label={'CONTACT'}
          icon={<GiEnvelope />}
          additionalCSS={`dropBounceLeftAnimation ${
            state.theme.id === ''
              ? 'text-emerald-200'
              : state.theme.id === 'theme2'
              ? 'text-green-300'
              : 'text-emerald-500'
          }`}
          sectionId={'contact'}
          componentID={'navButtonContact'}
        />
      </div>

    </div>
  );
};

export default MainNavMenu;
