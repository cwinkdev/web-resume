const PortfolioStackSlide = () => {
  return (
    <div className="rounded-3xl h-[500px] flex flex-col justify-evenly">
      <div>
        <div className="flex justify-center">
          <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
          <p className="mx-1 my-auto text-cyan-400 font-bold">CORE TECH</p>
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
          <p className="mx-1 my-auto text-cyan-400 font-bold">Deployment</p>
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
          <p className="mx-1 my-auto text-cyan-400 font-bold">UX Packages</p>
          <div className="w-1/12 border-b border-cyan-200 my-auto opacity-60"></div>
        </div>
        <div className="text-sm font-light">
          <p>react-icons</p>
          <p>react-select</p>
          <p>react-toastify </p>
          <p>react-webcam</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStackSlide;
