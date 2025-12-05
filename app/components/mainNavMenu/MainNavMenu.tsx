import { useApp } from '@/app/hooks/useApp';
import MainNavButton from './MainNavButton';
import { GiEnvelope, GiPerson, GiSkills, GiWoodFrame } from 'react-icons/gi';
import ThemeSwitcher from '../quickNavMenu/ThemeSwitcher';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface MainNavMenuProps {}

const MainNavMenu = ({}: MainNavMenuProps) => {
  const { state, handleClick } = useApp();
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);

  const sections = [
    {
      label: 'ABOUT ME',
      icon: <GiPerson />,
      sectionId: 'about',
      color: state.theme.id === ''
        ? 'text-cyan-200'
        : state.theme.id === 'theme2'
        ? 'text-cyan-300'
        : 'text-cyan-500',
      borderColor: 'border-cyan-400',
      bgGradient: 'from-cyan-900/20 to-transparent',
    },
    {
      label: 'SKILLS',
      icon: <GiSkills />,
      sectionId: 'skills',
      color: state.theme.id === ''
        ? 'text-amber-200'
        : state.theme.id === 'theme2'
        ? 'text-yellow-300'
        : 'text-amber-500',
      borderColor: 'border-amber-400',
      bgGradient: 'from-amber-900/20 to-transparent',
    },
    {
      label: 'PORTFOLIO',
      icon: <GiWoodFrame />,
      sectionId: 'portfolio',
      color: state.theme.id === ''
        ? 'text-violet-200'
        : state.theme.id === 'theme2'
        ? 'text-pink-300'
        : 'text-violet-500',
      borderColor: 'border-violet-400',
      bgGradient: 'from-violet-900/20 to-transparent',
    },
    {
      label: 'CONTACT',
      icon: <GiEnvelope />,
      sectionId: 'contact',
      color: state.theme.id === ''
        ? 'text-emerald-200'
        : state.theme.id === 'theme2'
        ? 'text-green-300'
        : 'text-emerald-500',
      borderColor: 'border-emerald-400',
      bgGradient: 'from-emerald-900/20 to-transparent',
    },
  ];

  return (
    <div className="flex flex-col w-full text-center pt-8 xl:pt-12">
      <div
        ref={ref}
        className={`w-full ${inView ? 'slide-in-left' : ''} `}
      >
        <div className="mb-4 xl:mb-8">
          <ThemeSwitcher
            additionalCSS=""
            showName={true}
          />
        </div>
      </div>

      {/* Mobile: Keep original layout */}
      <div className="xl:hidden">
        <div>
          <p className="text-baseText text-lg opacity-80 font-thin tracking-wide mb-10 mt-10">
            Hop to a specific section
          </p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-6 max-w-5xl mx-auto mb-4">
          {sections.map((section, index) => (
            <MainNavButton
              key={section.sectionId}
              label={section.label}
              icon={section.icon}
              additionalCSS={`dropBounceLeftAnimation ${section.color}`}
              sectionId={section.sectionId}
              componentID={`navButton${section.sectionId}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Video Game UI with diagonal panels */}
      <div className="hidden xl:block w-full overflow-visible">
        <div className="flex items-center justify-center gap-3 h-[45vh] max-w-[1400px] mx-auto px-8 overflow-visible">
          {sections.map((section, index) => {
            const skewAngle = -8; // All panels use the same skew angle
            return (
              <Link
                key={section.sectionId}
                href={`#${section.sectionId}`}
                onClick={(e) => handleClick(e, section.sectionId)}
                className="group flex-1 h-full relative overflow-visible outline-none focus:outline-none z-0 group-hover:z-50 transition-all duration-500"
                aria-label={`Navigate to ${section.label} section`}
              >
                <div
                  className={`relative w-full h-full bg-gradient-to-br ${section.bgGradient} border-l-4 ${section.borderColor} bg-base1/80 shadow-lg shadow-baseShadow transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:shadow-black/50 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:border-accent`}
                  style={{
                    transform: `skewX(${skewAngle}deg)`,
                    transformOrigin: 'center',
                  }}
                >
                  {/* Inner content - unskewed */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-6"
                    style={{
                      transform: `skewX(${-skewAngle}deg)`,
                    }}
                  >
                    <div className={`${section.color} text-5xl mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-baseText uppercase tracking-wider group-hover:text-accent transition-colors duration-500">
                      {section.label}
                    </h3>
                  </div>
                  {/* Hover overlay effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainNavMenu;
