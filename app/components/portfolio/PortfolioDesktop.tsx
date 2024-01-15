import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import { portfolioSlidesWide as slides } from '@/app/data/portfolioSlides';
import { handleClientScriptLoad } from 'next/script';

interface PortfolioDesktopProps {
  activeProject: number;
  setActiveIndex: (index: number) => void;
}

const PortfolioDesktop = ({
  setActiveIndex,
  activeProject,
}: PortfolioDesktopProps) => {
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
        className="border hidden border-neutral-500 rounded-3xl text-white w-11/12 bg-base shadow-md shadow-baseShadow my-swiper-container-wide"
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
            <div className="absolute w-full text-lg z-20 rounded-b-2xl bg-zinc-950 border-t border-neutral-600 flex justify-between px-4 h-12"></div>
          </SwiperSlide>
        ))}
        <SwiperSlide key={5} className="relative">
          <PortfolioStackSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortfolioDesktop;
