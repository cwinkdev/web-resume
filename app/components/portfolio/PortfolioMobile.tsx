import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import { portfolioSlides as slides } from '@/app/data/portfolioSlides';

interface PortfolioMobileProps {
  setActiveIndex: (index: number) => void;
}

const PortfolioMobile = ({ setActiveIndex }: PortfolioMobileProps) => {
  return (
    <div className="xl:hidden">
      <Swiper
        spaceBetween={0}
        modules={[Pagination]}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="border-2 border-neutral-500 rounded-3xl text-white w-11/12 bg-zinc-900 shadow-md shadow-baseShadow my-swiper-container"
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

export default PortfolioMobile;
