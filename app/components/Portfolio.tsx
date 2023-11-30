import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';

const Portfolio = () => {
  const slides = [
    'url(./digHome.jpg)',
    'url(./albumModal.png)',
    'url(./trackList.png)',
    'url(./scanResult.png)',
    'url(./albumsList.png)',
  ];

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
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="border-2 border-neutral-500 rounded-3xl w-11/12 shadow-lg shadow-black my-swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative ">
            <div
              style={{
                backgroundImage: slide,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height: '70vh',
              }}
              className="rounded-3xl"
            ></div>
            <div className="flex absolute bg-gradient-to-t from-black to-neutral-900 border-t border-neutral-600 bg-opacity-90 bottom-0 h-36 w-full">
              <p className="text-sm font-light text-cyan-100 m-auto">
                Some Words
              </p>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide key={5} className="relative">
          <div className="rounded-3xl h-[65vh] flex flex-col justify-evenly align-middle">
            <div>
              <div className="flex justify-center">
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
                <p className="mx-1 my-auto text-cyan-400 font-bold">
                  CORE TECH
                </p>
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
              </div>
              <div className="text-sm font-light">
                <p>React 18.2.0</p>
                <p>Next.js 14.0.3</p>
                <p>TypeScript 5.1.3</p>
                <p>Firebase Firestore DB</p>
                <p>Tailwind CSS 3.3.2</p>
                <p>Spotify API </p>
                <p>Google Vision API</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-2">
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
                <p className="mx-1 my-auto text-cyan-400 font-bold">
                  Deployment
                </p>
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
              </div>
              <div className="text-sm font-light">
                <p>Vercel</p>
                <p>GitHub</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-2">
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
                <p className="mx-1 my-auto text-cyan-400 font-bold">
                  UX Packages
                </p>
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
              </div>
              <div className="text-sm font-light">
                <p>react-icons</p>
                <p>react-select</p>
                <p>react-toastify </p>
                <p>react-webcam</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-2">
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
                <p className="mx-1 my-auto text-cyan-400 font-bold">Logging</p>
                <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
              </div>
              <p className="text-sm font-light">winston</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
