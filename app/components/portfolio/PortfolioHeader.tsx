'use client';

import { useApp } from '@/app/hooks/useApp';

interface PortfolioHeaderProps {
  activeProject: number;
  setActiveProject: (activeIndex: number) => void;
}

interface ProjectHeaderItem {
  index: number;
  label: string;
  ariaLabel: string;
  defaultColor: string;
}

const projectHeaders: ProjectHeaderItem[] = [
  {
    index: 3,
    label: 'TPL Assessment Tool',
    ariaLabel: 'View TPL project',
    defaultColor: 'text-blue-400',
  },
  {
    index: 1,
    label: 'Music Bingo Pro',
    ariaLabel: 'View Music Bingo Pro project',
    defaultColor: 'text-pink-400',
  },
  {
    index: 0,
    label: 'Dig In The Crate',
    ariaLabel: 'View DIG project',
    defaultColor: 'text-cyan-400',
  },
  {
    index: 2,
    label: 'DJ Gaspar',
    ariaLabel: 'View DJ Gaspar Productions project',
    defaultColor: 'text-violet-400',
  },
];

const PortfolioHeader = ({
  activeProject,
  setActiveProject,
}: PortfolioHeaderProps) => {
  const { state } = useApp();

  const getBorderRadius = (idx: number, total: number): string => {
    if (idx === 0) return 'rounded-tl-[14px]'; // First tab: rounded top-left only
    if (idx === total - 1) return 'rounded-tr-[14px]'; // Last tab: rounded top-right only
    return ''; // Middle tabs: no rounding
  };

  const getBorderStyle = (idx: number, isActive: boolean, total: number) => {
    const borders: string[] = [];

    // Top border - all tabs
    borders.push('border-t-2');

    // Left border - only first tab
    if (idx === 0) {
      borders.push('border-l-2');
    } else {
      borders.push('border-l-0');
    }

    // Right border - all tabs
    borders.push('border-r-2');

    // Bottom border - only inactive tabs
    if (!isActive) {
      borders.push('');
    } else {
      borders.push('border-b-0');
    }

    return borders.join(' ');
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto mb-0">
      <div className="flex w-full items-end relative h-[52px]">
        {projectHeaders.map((project, idx) => {
          const isActive = activeProject === project.index;
          return (
            <button
              key={project.index}
              onClick={() => setActiveProject(project.index)}
              className={`
                ${project.defaultColor}
                ${getBorderStyle(idx, isActive, projectHeaders.length)}
                ${getBorderRadius(idx, projectHeaders.length)}
                border-base3
                ${isActive ? 'bg-base2 h-[52px] z-30 font-bold opacity-100 pt-3 pb-4' : 'bg-base1 h-[44px] z-10 font-thin opacity-60 hover:opacity-80 pt-2 pb-3 translate-y-[3px]'}

                relative flex flex-1 items-center justify-center
                outline-none focus:outline-none
                transition-all duration-300
                px-[18px]
              `}
              aria-label={project.ariaLabel}
              aria-pressed={isActive}
              type="button"
            >
              <span className="text-lg xl:text-xl whitespace-nowrap">
                {project.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-base2" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioHeader;
