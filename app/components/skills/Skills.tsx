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
      // Center position - largest and in front, overlapping side cards
      return {
        translateX: 0,
        scale: 1.15,
        zIndex: 30,
        opacity: 1,
      };
    } else if (offset === 1) {
      // Right side - smaller and behind
      return {
        translateX: 250,
        scale: 0.75,
        zIndex: 10,
        opacity: 0.6,
      };
    } else {
      // Left side (offset === -1) - smaller and behind
      return {
        translateX: -250,
        scale: 0.75,
        zIndex: 10,
        opacity: 0.6,
      };
    }
  };

  return (
    <section
      className="p-8 xl:pt-0 h-screen min-h-screen w-full text-center flex items-center justify-center xl:w-3/4 xl:m-auto bg-base1 relative"
      aria-labelledby="skills-heading"
    >
      <div
        className={`${
          state.theme.id === 'theme1' ? '' : ''
        } w-full text-baseText text-lg rounded-lg py-2 relative flex flex-col items-center justify-center`}
      >
        <h2
          id="skills-heading"
          className="text-4xl text-accent mb-6"
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
                    isActive={isCenter}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - positioned relative to outer boxes */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 -translate-y-1/2 z-50 text-primary text-6xl hover:scale-110 hover:opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded"
            style={{
              right: 'calc(50% + 250px + 105px + 50px)', // Center + translateX + half scaled box width (280*0.75/2=105) + padding
            }}
            aria-label="Previous skill category"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 z-50 text-primary text-6xl hover:scale-110 hover:opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded"
            style={{
              left: 'calc(50% + 250px + 105px + 50px)', // Center + translateX + half scaled box width (280*0.75/2=105) + padding
            }}
            aria-label="Next skill category"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
