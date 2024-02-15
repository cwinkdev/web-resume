'use client';

import { useApp } from '@/app/hooks/useApp';
import { useInView } from 'react-intersection-observer';

interface PortfolioBlurbsProps {
  activeIndex: number;
  activeProject: number;
  slides: any;
}
const PortfolioBlurbs = ({
  activeIndex,
  activeProject,
  slides,
}: PortfolioBlurbsProps) => {
  const { state } = useApp();

  return (
    <div className={`mt-4`}>
      <p className={`text-baseText text-lg mx-6`}>
        {activeIndex === slides.length
          ? 'Tech Stack'
          : slides[activeIndex].text}
      </p>
    </div>
  );
};

export default PortfolioBlurbs;
