import 'swiper/swiper-bundle.css';
import { portfolioSlides as slides } from '@/app/data/portfolioSlides';
import { useState } from 'react';
import { useApp } from '@/app/hooks/useApp';
import PortfolioHeader from './PortfolioHeader';
import PortfolioBlurbs from './PortfolioBlurbs';
import PortfolioMobile from './PortfolioMobile';
import PortfolioDesktop from './PortfolioDesktop';

const Portfolio = () => {
  const { state } = useApp();
  const [activeProject, setActiveProject] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`p-8 pt-20 min-h-screen h-screen ${
        state.theme.id === '' ? 'bg-gradient-to-b' : ''
      } from-transparent via-cyan-950 to-transparent w-full text-center relative xl:w-full xl:mx-auto`}
    >
      <div
        className={`${
          state.currentSection === 'portfolio' ? 'slide-in-right' : ''
        } `}
      >
        <PortfolioHeader
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        <PortfolioMobile
          setActiveIndex={setActiveIndex}
          activeProject={activeProject}
        />
        <PortfolioDesktop
          setActiveIndex={setActiveIndex}
          activeProject={activeProject}
        />
        <PortfolioBlurbs
          activeIndex={activeIndex}
          activeProject={activeProject}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default Portfolio;
