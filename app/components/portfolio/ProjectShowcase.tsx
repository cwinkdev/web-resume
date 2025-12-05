'use client';

import { useApp } from '@/app/hooks/useApp';
import { Project } from '@/app/data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase = ({ project }: ProjectShowcaseProps) => {
  const { state } = useApp();

  // Prevent scroll propagation when scrolling within boxes
  const handleWheel = (e: React.WheelEvent<HTMLDivElement | HTMLUListElement>) => {
    const element = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = element;

    // Use a small threshold for boundary detection
    const threshold = 1;
    const isAtTop = scrollTop <= threshold;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - threshold;

    // Check if content is scrollable
    const isScrollable = scrollHeight > clientHeight;

    if (!isScrollable) {
      return; // Allow page scroll if box isn't scrollable
    }

    // If we can scroll within the box, prevent page scroll
    if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
      e.stopPropagation();
    }
  };

  const getAccentColor = () => {
    if (project.title === 'DIG') {
      return state.theme.id === ''
        ? 'text-cyan-400 border-cyan-400'
        : state.theme.id === 'theme2'
        ? 'text-cyan-300 border-cyan-300'
        : 'text-cyan-500 border-cyan-500';
    } else if (project.title.includes('Music Bingo') || project.title.includes('MBP')) {
      return state.theme.id === ''
        ? 'text-pink-400 border-pink-400'
        : state.theme.id === 'theme2'
        ? 'text-pink-300 border-pink-300'
        : 'text-pink-500 border-pink-500';
    } else if (project.title.includes('DJ Gaspar') || project.title.includes('Gaspar')) {
      return state.theme.id === ''
        ? 'text-violet-400 border-violet-400'
        : state.theme.id === 'theme2'
        ? 'text-pink-400 border-pink-400'
        : 'text-violet-500 border-violet-500';
    } else if (project.title.includes('TPL')) {
      return state.theme.id === ''
        ? 'text-blue-400 border-blue-400'
        : state.theme.id === 'theme2'
        ? 'text-blue-300 border-blue-300'
        : 'text-blue-500 border-blue-500';
    } else {
      return state.theme.id === ''
        ? 'text-emerald-400 border-emerald-400'
        : state.theme.id === 'theme2'
        ? 'text-green-400 border-green-400'
        : 'text-emerald-500 border-emerald-500';
    }
  };

  const accentColor = getAccentColor();

  const getGradientColor = () => {
    if (project.title === 'DIG') {
      return state.theme.id === ''
        ? 'rgba(34, 211, 238, 0.1)'
        : state.theme.id === 'theme2'
        ? 'rgba(103, 232, 249, 0.1)'
        : 'rgba(6, 182, 212, 0.1)';
    } else if (project.title.includes('Music Bingo') || project.title.includes('MBP')) {
      return state.theme.id === ''
        ? 'rgba(244, 114, 182, 0.1)'
        : state.theme.id === 'theme2'
        ? 'rgba(249, 168, 212, 0.1)'
        : 'rgba(236, 72, 153, 0.1)';
    } else if (project.title.includes('DJ Gaspar') || project.title.includes('Gaspar')) {
      return state.theme.id === ''
        ? 'rgba(196, 181, 253, 0.1)'
        : state.theme.id === 'theme2'
        ? 'rgba(244, 114, 182, 0.1)'
        : 'rgba(167, 139, 250, 0.1)';
    } else if (project.title.includes('TPL')) {
      return state.theme.id === ''
        ? 'rgba(96, 165, 250, 0.1)'
        : state.theme.id === 'theme2'
        ? 'rgba(147, 197, 253, 0.1)'
        : 'rgba(59, 130, 246, 0.1)';
    } else {
      return state.theme.id === ''
        ? 'rgba(52, 211, 153, 0.1)'
        : state.theme.id === 'theme2'
        ? 'rgba(74, 222, 128, 0.1)'
        : 'rgba(16, 185, 129, 0.1)';
    }
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto h-full flex flex-col">
      {/* Main Card Container */}
      <div
        className="flex-1 bg-base2 border-2 border-t-0 border-base3 rounded-b-lg shadow-lg shadow-baseShadow p-4 xl:p-6 flex flex-col overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--color-base2), ${getGradientColor()})`,
        }}
      >
        {/* Header with Image */}
        <div className="mb-6 xl:mb-8">
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
            {/* Image Section - More Prominent */}
            <div className="xl:w-1/3 flex-shrink-0">
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
                className="w-full h-48 xl:h-64 rounded-lg border-2 border-base3 shadow-md shadow-baseShadow bg-base"
              />
            </div>

            {/* Title and Description */}
            <div className="xl:flex-1 text-left">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className={`text-3xl xl:text-4xl font-bold `}>
                  {project.title}
                </h3>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${accentColor} hover:opacity-80 transition-opacity duration-300 text-base`}
                    aria-label={`Visit ${project.title} website`}
                  >
                    <span>Visit Site</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
              </div>
              <p className="text-baseText text-base xl:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex-1 grid xl:grid-cols-3 gap-6 xl:gap-8 text-left overflow-hidden min-h-0">
        <div className="flex flex-col min-h-0 bg-base1 border border-base3 rounded-lg p-4 xl:p-6 shadow-md shadow-baseShadow">
          <h4 className={`text-xl font-bold mb-4 ${accentColor} flex-shrink-0`}>
            Key Features
          </h4>
          <ul
            className="space-y-3 overflow-y-auto flex-1 min-h-0 pr-2"
            style={{ overscrollBehavior: 'contain' }}
            onWheel={handleWheel}
          >
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="text-baseText text-base flex items-start">
                <span className={`mr-3 ${accentColor} flex-shrink-0 mt-1.5 text-lg`}>•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
 {project.technicalHighlights && (
          <div className="flex flex-col min-h-0 bg-base1 border border-base3 rounded-lg p-4 xl:p-6 shadow-md shadow-baseShadow">
            <h4 className={`text-xl font-bold mb-4 ${accentColor} flex-shrink-0`}>
              Technical Highlights
            </h4>
            <ul
              className="space-y-3 overflow-y-auto flex-1 min-h-0 pr-2"
              style={{ overscrollBehavior: 'contain' }}
              onWheel={handleWheel}
            >
              {project.technicalHighlights.map((highlight, index) => (
                <li key={index} className="text-baseText text-base flex items-start">
                  <span className={`mr-3 ${accentColor} flex-shrink-0 mt-1.5 text-lg`}>•</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col min-h-0 bg-base1 border border-base3 rounded-lg p-4 xl:p-6 shadow-md shadow-baseShadow">

          <div
            className="space-y-4 overflow-y-auto flex-1 min-h-0 pr-2"
            style={{ overscrollBehavior: 'contain' }}
            onWheel={handleWheel}
          >
            {project.techStack.frontend && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Frontend
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.frontend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.backend && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Backend
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.backend.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.cloud && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Cloud
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.cloud.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.core && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Core Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.core.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.deployment && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Deployment
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.deployment.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.packages && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  UX Packages
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.packages.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.thirdParty && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Third-Party Integrations
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.thirdParty.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.techStack.developmentTools && (
              <div>
                <h5 className={`text-base font-semibold mb-2.5 ${accentColor}`}>
                  Development Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.developmentTools.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1.5 bg-base1 border border-base3 rounded text-baseText text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>


        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
