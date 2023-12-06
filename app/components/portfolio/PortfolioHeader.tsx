'use client';

import { GiDigHole } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';

const PortfolioHeader = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <div
      ref={ref}
      className={`${inView ? 'slide-in-left' : 'slide-off-right'} `}
    >
      <h2 className="text-2xl font-bold flex text-cyan-400 mb-4 items-center justify-center">
        <GiDigHole />
        DIG
      </h2>
    </div>
  );
};

export default PortfolioHeader;
