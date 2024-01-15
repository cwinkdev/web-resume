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
    <div className="flex justify-evenly w-56 mx-auto">
      <button
        onClick={() => setActiveProject(0)}
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-2xl font-bold flex text-cyan-400 mb-4 z-50 items-center duration-300 justify-center ${
          activeProject === 0 ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <GiDigHole />
        DIG
      </button>
      <div className="h-8 border-l"></div>
      <button
        onClick={() => setActiveProject(1)}
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-2xl font-bold flex text-violet-400 mb-4 z-50 items-center duration-300 justify-center ${
          activeProject === 1 ? 'opacity-100' : 'opacity-50'
        }`}
      >
        TLDL
      </button>
    </div>
  );
};

export default PortfolioHeader;
