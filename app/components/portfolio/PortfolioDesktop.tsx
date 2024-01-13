import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import { portfolioSlidesWide as slides } from '@/app/data/portfolioSlides';

interface PortfolioDesktopProps {
  setActiveIndex: (index: number) => void;
}

const PortfolioDesktop = ({ setActiveIndex }: PortfolioDesktopProps) => {
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
        className="border-2 hidden border-neutral-500 rounded-3xl text-white w-11/12 bg-base shadow-md shadow-baseShadow my-swiper-container-wide"
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
              className="rounded-3xl"
            ></div>
            <div className="flex flex-col absolute bottom- w-full bg-gradient-to-t from-black to-neutral-900 h-12 -bottom-1">
              <div className="w-full rounded-b-2xl border-t border-neutral-600 "></div>
            </div>
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
