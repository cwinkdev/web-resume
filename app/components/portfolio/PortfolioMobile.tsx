import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import { portfolioSlides, tldlSlides } from '@/app/data/portfolioSlides';

interface PortfolioMobileProps {
  setActiveIndex: (index: number) => void;
  activeProject: number;
}

const PortfolioMobile = ({
  setActiveIndex,
  activeProject,
}: PortfolioMobileProps) => {
  let slides = activeProject === 0 ? portfolioSlides : tldlSlides;

  return (
    <div className="xl:hidden">
      <Swiper
        spaceBetween={0}
        modules={[Pagination]}
        slidesPerView={1}
        loop={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="w-11/12 text-white border-2 shadow-md border-neutral-500 rounded-3xl bg-zinc-900 shadow-baseShadow my-swiper-container"
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
            <div className="absolute flex flex-col w-full h-12 bottom- bg-gradient-to-t from-black to-neutral-900 -bottom-1">
              <div className="w-full border-t rounded-b-2xl border-neutral-600 "></div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide key={5} className="relative">
          <PortfolioStackSlide activeProject={activeProject} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortfolioMobile;
