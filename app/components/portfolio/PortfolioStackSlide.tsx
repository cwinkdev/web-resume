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
            <p>React 18.2.0</p>
            <p>Next.js 14.0.3</p>
            <p>TypeScript 5.1.3</p>
            <p>ESLint 8.42.0</p>
            <p>Firebase Firestore DB</p>
            <p>Tailwind CSS 3.3.2</p>
            <p>Spotify API </p>
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
            <p>React 18.2.0</p>
            <p>Next.js 13.4.12</p>
            <p>TypeScript 5.1.6</p>
            <p>ESLint 8.45.0</p>
            <p>MongoDB 5.7.0</p>
            <p>Tailwind CSS 3.3.3</p>
            <p>Whisper AI </p>
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
};

export default PortfolioStackSlide;
