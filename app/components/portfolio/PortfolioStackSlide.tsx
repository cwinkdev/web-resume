interface PortfolioStackSlideProps {
  activeProject: number;
}

const PortfolioStackSlide = ({ activeProject }: PortfolioStackSlideProps) => {
  if (activeProject === 0) {
    return (
      <div className="rounded-3xl h-[500px] xl:pt-24 flex flex-col justify-evenly xl:text-xl">
        <div>
          <div className="flex justify-center">
            <div className="w-1/12 my-auto border-b border-cyan-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-cyan-400">CORE TECH</p>
            <div className="w-1/12 my-auto border-b border-cyan-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>React</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>ESLint</p>
            <p>Firebase Firestore DB</p>
            <p>Tailwind CSS</p>
            <p>Spotify API</p>
            <p>Google Vision API</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-2 xl:mt-8">
            <div className="w-1/12 my-auto border-b border-cyan-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-cyan-400">Deployment</p>
            <div className="w-1/12 my-auto border-b border-cyan-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>Vercel</p>
            <p>GitHub</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-2 xl:mt-8">
            <div className="w-1/12 my-auto border-b border-cyan-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-cyan-400">UX Packages</p>
            <div className="w-1/12 my-auto border-b border-cyan-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>react-icons</p>
            <p>react-select</p>
            <p>react-toastify </p>
            <p>react-webcam</p>
          </div>
        </div>
      </div>
    );
  }
  if (activeProject === 1) {
    return (
      <div className="rounded-3xl h-[500px] xl:pt-24 flex flex-col justify-evenly xl:text-xl">
        <div>
          <div className="flex justify-center">
            <div className="w-1/12 my-auto border-b border-violet-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-violet-400">CORE TECH</p>
            <div className="w-1/12 my-auto border-b border-violet-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>React</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>ESLint</p>
            <p>MongoDB</p>
            <p>Tailwind CSS</p>
            <p>Whisper AI</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-2 xl:mt-8">
            <div className="w-1/12 my-auto border-b border-violet-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-violet-400">Deployment</p>
            <div className="w-1/12 my-auto border-b border-violet-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>Vercel</p>
            <p>GitHub</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-2 xl:mt-8">
            <div className="w-1/12 my-auto border-b border-violet-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-violet-400">
              UX Packages
            </p>
            <div className="w-1/12 my-auto border-b border-violet-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>react-icons</p>
            <p>react-select</p>
            <p>react-slick</p>
            <p>react-youtube</p>
            <p>react-twitter-embed</p>
            <p>slick-carousel</p>
          </div>
        </div>
      </div>
    );
  }
  if (activeProject === 2) {
    return (
      <div className="rounded-3xl h-[500px] xl:pt-24 flex flex-col justify-evenly xl:text-xl">
        <div>
          <div className="flex justify-center">
            <div className="w-1/12 my-auto border-b border-emerald-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-emerald-400">CORE TECH</p>
            <div className="w-1/12 my-auto border-b border-emerald-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>React</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>Tailwind CSS</p>
            <p>ESLint</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-2 xl:mt-8">
            <div className="w-1/12 my-auto border-b border-emerald-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-emerald-400">Deployment</p>
            <div className="w-1/12 my-auto border-b border-emerald-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>Vercel</p>
            <p>GitHub</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-2 xl:mt-8">
            <div className="w-1/12 my-auto border-b border-emerald-200 opacity-60"></div>
            <p className="mx-1 my-auto font-bold text-emerald-400">UX Packages</p>
            <div className="w-1/12 my-auto border-b border-emerald-200 opacity-60"></div>
          </div>
          <div className="text-sm font-light xl:text-lg text-baseText">
            <p>react-icons</p>
            <p>swiper</p>
            <p>react-intersection-observer</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PortfolioStackSlide;
