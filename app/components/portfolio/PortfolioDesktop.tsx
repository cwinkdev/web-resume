import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import {
  portfolioSlidesWide,
  tldlSlidesWide,
} from '@/app/data/portfolioSlides';
import { handleClientScriptLoad } from 'next/script';
import { act } from 'react-dom/test-utils';

interface PortfolioDesktopProps {
  activeProject: number;
  setActiveIndex: (index: number) => void;
}

const PortfolioDesktop = ({
  setActiveIndex,
  activeProject,
}: PortfolioDesktopProps) => {
  let slides = activeProject === 0 ? portfolioSlidesWide : tldlSlidesWide;

  return (
    <div className="hidden xl:block">
      <Swiper
        spaceBetween={0}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation
        className="hidden w-11/12 text-white border shadow-md border-neutral-500 rounded-3xl bg-base shadow-baseShadow my-swiper-container-wide"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex flex-col">
            <div
              style={{
                backgroundImage: slide.href,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height: '600px',
              }}
              className="rounded-t-3xl"
            ></div>
            <div className="absolute z-20 flex justify-between w-full h-12 px-4 text-lg border-t rounded-b-2xl bg-zinc-950 border-neutral-600"></div>
          </SwiperSlide>
        ))}
        <SwiperSlide key={5} className="relative">
          <PortfolioStackSlide activeProject={activeProject} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortfolioDesktop;
