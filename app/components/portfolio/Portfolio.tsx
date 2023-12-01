import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import { portfolioSlides as slides } from '@/app/data/portfolioSlides';
import { useState } from 'react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      id="portfolio"
      className="p-8 pt-32 h-screen bg-neutral-950 w-full text-center relative"
    >
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">DIG</h2>
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
        className="border-2 border-neutral-500 rounded-2xl w-11/12 shadow-lg shadow-black my-swiper-container"
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
      <div className="mt-4">
        <p className="text-cyan-200 text-lg mx-6">
          {activeIndex === slides.length
            ? 'Tech Stack'
            : slides[activeIndex].text}
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
