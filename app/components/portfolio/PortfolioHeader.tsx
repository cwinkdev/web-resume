'use client';

import { useApp } from '@/app/hooks/useApp';
import { GiDigHole } from 'react-icons/gi';

const PortfolioHeader = () => {
  const { state } = useApp();

  return (
    <div>
      <a
        href="https://dig-in-the-crate.vercel.app/"
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-2xl font-bold flex text-cyan-400 mb-4 items-center justify-center`}
      >
        <GiDigHole />
        DIG
      </a>
    </div>
  );
};

export default PortfolioHeader;
