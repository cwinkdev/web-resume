'use client';

import { useApp } from '@/app/hooks/useApp';
import { GiDigHole } from 'react-icons/gi';

interface PortfolioHeaderProps {
  activeProject: number;
  setActiveProject: (activeIndex: number) => void;
}
const PortfolioHeader = ({
  activeProject,
  setActiveProject,
}: PortfolioHeaderProps) => {
  const { state } = useApp();

  return (
    <div className="flex w-80 mx-auto justify-evenly">
      <button
        onClick={() => setActiveProject(0)}
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === 'theme2'
            ? 'text-cyan-300'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-2xl font-bold flex text-cyan-400 mb-4 z-50 items-center duration-300 justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded ${
          activeProject === 0 ? 'opacity-100' : 'opacity-50'
        }`}
        aria-label="View DIG project"
        aria-pressed={activeProject === 0}
        type="button"
      >
        <GiDigHole aria-hidden="true" />
        <span>DIG</span>
      </button>
      <div className="h-8 border-l" aria-hidden="true"></div>
      <button
        onClick={() => setActiveProject(1)}
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === 'theme2'
            ? 'text-pink-400'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-2xl font-bold flex text-violet-400 mb-4 z-50 items-center duration-300 justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded ${
          activeProject === 1 ? 'opacity-100' : 'opacity-50'
        }`}
        aria-label="View TLDL project"
        aria-pressed={activeProject === 1}
        type="button"
      >
        <span>TLDL</span>
      </button>
      <div className="h-8 border-l" aria-hidden="true"></div>
      <button
        onClick={() => setActiveProject(2)}
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === 'theme2'
            ? 'text-pink-400'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-2xl font-bold flex text-emerald-400 mb-4 z-50 items-center duration-300 justify-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base rounded ${
          activeProject === 2 ? 'opacity-100' : 'opacity-50'
        }`}
        aria-label="View TPL project"
        aria-pressed={activeProject === 2}
        type="button"
      >
        <span>TPL</span>
      </button>
    </div>
  );
};

export default PortfolioHeader;
