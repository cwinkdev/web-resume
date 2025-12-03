import SkillSection from './SkillSection';
import { useApp } from '@/app/hooks/useApp';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Skills = () => {
  const { state } = useApp();
  const [activeIndex, setActiveIndex] = useState(1); // Start with Core Skills in center

  const skillSections = [
    { label: 'Broad Proficiencies', type: 'broad' },
    { label: 'Core Skills', type: 'core' },
    { label: 'Intangibles', type: 'intangible' },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 3);
  };

  const getPosition = (index: number) => {
    let offset = index - activeIndex;
    // Normalize offset to -1, 0, or 1
    if (offset > 1) offset -= 3;
    if (offset < -1) offset += 3;

    if (offset === 0) {
      // Center position - largest and in front
      return {
        translateX: 0,
        scale: 1,
        zIndex: 30,
        opacity: 1,
      };
    } else if (offset === 1) {
      // Right side - smaller and behind
      return {
        translateX: 350,
        scale: 0.8,
        zIndex: 10,
        opacity: 0.6,
      };
    } else {
      // Left side (offset === -1) - smaller and behind
      return {
        translateX: -350,
        scale: 0.8,
        zIndex: 10,
        opacity: 0.6,
      };
    }
  };

  return (
    <section
      className={`${
        state.currentSection === 'skills' ? 'slide-in-left' : ''
      } p-8 xl:pt-0 h-fit min-h-screen w-full text-center flex items-center xl:w-3/4 xl:m-auto`}
      aria-labelledby="skills-heading"
    >
      <div
        className={`${
          state.theme.id === 'theme1' ? '' : ''
        } min-h-[700px] xl:min-h-fit h-fit text-baseText text-lg justify-evenly rounded-lg py-2 w-full relative `}
      >
        <h2
          id="skills-heading"
          className={`text-4xl text-accent mb-6 ${
            state.currentSection === 'skills' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          What I can do for you...
        </h2>

        {/* Mobile: Keep original layout */}
        <div className="flex flex-col xl:hidden gap-4 max-w-[1100px] mx-auto">
          {skillSections.map((section, index) => (
            <SkillSection
              key={index}
              label={section.label}
              type={section.type}
              isSideSection={index !== 1}
            />
          ))}
        </div>

        {/* Desktop: Carousel with 3D effect */}
        <div className="hidden xl:block relative h-[550px] overflow-visible">
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {skillSections.map((section, index) => {
              const position = getPosition(index);
              const isCenter = index === activeIndex;
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${position.translateX}px) scale(${position.scale}) ${
                      !isCenter ? 'translateZ(-50px)' : 'translateZ(0px)'
                    }`,
                    zIndex: position.zIndex,
                    opacity: position.opacity,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <SkillSection
                    label={section.label}
                    type={section.type}
                    isSideSection={false}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-base2 border border-base3 shadow-lg shadow-baseShadow hover:bg-base1 transition-colors duration-200 text-primary text-2xl"
            aria-label="Previous skill category"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-base2 border border-base3 shadow-lg shadow-baseShadow hover:bg-base1 transition-colors duration-200 text-primary text-2xl"
            aria-label="Next skill category"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="mt-8"></div>
      </div>
    </section>
  );
};

export default Skills;
