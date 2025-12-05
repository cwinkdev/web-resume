import { useState } from 'react';
import { useApp } from '@/app/hooks/useApp';
import PortfolioHeader from './PortfolioHeader';
import ProjectShowcase from './ProjectShowcase';
import { projects } from '@/app/data/projects';

const Portfolio = () => {
  const { state } = useApp();
  const [activeProject, setActiveProject] = useState(3);
  const currentProject = projects[activeProject];

  return (
    <section
      className="p-4 xl:p-8 pt-16 xl:pt-20 min-h-screen h-screen overflow-hidden bg-base1 w-full text-center relative xl:w-full xl:mx-auto flex flex-col"
      aria-labelledby="portfolio-heading"
    >
      <div
        className={`flex-1 flex flex-col overflow-hidden ${
          state.currentSection === 'portfolio' ? 'slide-in-right' : ''
        } `}
      >
        <h2 id="portfolio-heading" className="sr-only">Projects</h2>
        <div className="w-full max-w-[90rem] mx-auto mb-4">
          <h3 className="text-3xl xl:text-4xl font-bold text-primary text-left">
            My Projects
          </h3>
        </div>
        <PortfolioHeader
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        <div className="flex-1 overflow-hidden">
          <ProjectShowcase project={currentProject} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
