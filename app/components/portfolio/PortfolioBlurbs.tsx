'use client';

import { useInView } from 'react-intersection-observer';

interface PortfolioBlurbsProps {
  activeIndex: number;
  slides: any;
}
const PortfolioBlurbs = ({ activeIndex, slides }: PortfolioBlurbsProps) => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <div
      ref={ref}
      className={`${inView ? 'slide-in-left' : 'slide-off-right'} mt-4`}
    >
      <p className="text-cyan-400 text-lg mx-6">
        {activeIndex === slides.length
          ? 'Tech Stack'
          : slides[activeIndex].text}
      </p>
    </div>
  );
};

export default PortfolioBlurbs;
