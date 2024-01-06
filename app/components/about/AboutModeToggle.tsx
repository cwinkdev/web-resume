import { useSwipeable } from 'react-swipeable';
import { useInView } from 'react-intersection-observer';
import { useApp } from '@/app/hooks/useApp';

interface AboutModeToggleProps {
  isLongVersion: boolean;
  setIsLongVersion: (isLongVersion: boolean) => void;
}

const AboutModeToggle = ({
  setIsLongVersion,
  isLongVersion,
}: AboutModeToggleProps) => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state } = useApp();

  // Handlers for swipe actions
  const handlers = useSwipeable({
    onSwipedLeft: () => setIsLongVersion(false),
    onSwipedRight: () => setIsLongVersion(true),
    trackMouse: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? 'slide-in-left' : ''
      } flex w-56 justify-center mx-auto text-center text-sm my-4`}
    >
      <p className="my-auto text-primary">Version:</p>
      <div
        {...handlers}
        className="w-40 h-6 mx-auto rounded-full flex shadow-md shadow-baseShadow bg-base2 text-baseText relative font-light box-border border border-base3"
      >
        <div
          onClick={() => setIsLongVersion(false)}
          className={`${
            isLongVersion ? 'font-normal' : 'font-bold'
          } w-1/2 flex h-full rounded-l-full duration-300`}
        >
          <p className="m-auto"> Short</p>
        </div>
        <div
          className={`${
            isLongVersion ? 'font-bold' : 'font-normal'
          } w-1/2 flex h-full rounded-r-full duration-300 `}
          onClick={() => setIsLongVersion(true)}
        >
          <p className="m-auto">Long</p>
        </div>
        <div
          className={`${isLongVersion ? 'right-0' : 'right-20'} ${
            state.theme.id === 'theme1'
              ? 'bg-cyan-400 bg-opacity-20 border-base3'
              : state.theme.id === 'theme2'
              ? 'bg-white bg-opacity-10 border-2 border-accent'
              : 'bg-white bg-opacity-10 border-secondary'
          } absolute duration-500 shadow-md shadow-baseShadow h-full w-1/2 border rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default AboutModeToggle;
