import { useApp } from '@/app/hooks/useApp';
import { aboutMeText } from '../../data/aboutMe';
import { splitIntoLines } from '../../utils/splitParagraph';
import { useInView } from 'react-intersection-observer';

interface AboutCardProps {
  isLongVersion: boolean;
}

const AboutCard = ({ isLongVersion }: AboutCardProps) => {
  const aboutMeLines = splitIntoLines(aboutMeText, 29);
  const aboutMeLinesWide = splitIntoLines(aboutMeText, 48);

  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state } = useApp();

  return (
    <>
      {isLongVersion ? (
        <div
          ref={ref}
          className={`${
            inView ? 'slide-in-right' : ''
          } mt-4 h-[450px] w-full max-w-[min(100%,350px)] xl:max-w-none xl:w-[750px] font-light mx-auto relative overflow-hidden crawl-container shadow-baseShadow shadow-inner border-y border-secondary ${
            state.theme.id === 'theme1'
              ? 'rounded-sm'
              : state.theme.id === ''
              ? 'rounded-xl'
              : 'rounded-lg'
          }`}
          style={{
            backgroundImage: 'url(./space.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="xl:hidden">
            {aboutMeLines.map((line, index) => (
              <div
                key={line}
                className="w-full text-xl font-bold crawl-line xl:text-2xl"
                style={{
                  opacity: 1 - index * 0.1,
                  transform: `translateY(${index * 10}vh) scale(${
                    1 - index * 0.05
                  })`,
                  animationDelay: `${index * 2}s`,
                }}
              >
                {line}
              </div>
            ))}
          </div>
          <div className="hidden xl:block">
            {aboutMeLinesWide.map((line, index) => (
              <div
                key={line}
                className="w-full text-xl font-bold crawl-line xl:text-2xl"
                style={{
                  opacity: 1 - index * 0.1,
                  transform: `translateY(${index * 10}vh) scale(${
                    1 - index * 0.05
                  })`,
                  animationDelay: `${index * 2}s`,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={ref}
          style={{
            backgroundImage:
              state.theme.id === 'theme1' ? 'url(./abstractCardBG.png)' : '',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className={`${inView ? 'slide-in-right' : ''}  ${
            state.theme.id === 'theme1'
              ? 'border border-base3 rounded-sm'
              : state.theme.id === ''
              ? 'border-y border-secondary rounded-xl'
              : 'border-y border-secondary rounded-lg'
          } mt-4 h-[380px] w-full max-w-[min(100%,350px)] xl:max-w-none xl:h-[340px] xl:w-[750px] mx-auto flex flex-col font-light relative overflow-y-auto shadow-baseShadow bg-base shadow-md rounded-lg`}
        >
          <div
            className={`bg-base2 text-left mt-4 py-2 border-y border-accent shadow-baseShadow shadow-md`}
          >
            <h2 className="pl-4 text-2xl font-semibold text-primary">
              CHRISTIAN WINKLER
            </h2>
          </div>
          <div className="flex px-4 mt-6 xl:mt-0 xl:p-8">
            <div className="border-r border-secondary"></div>
            <p
              className={`pl-4 text-left xl:text-lg text-sm text-baseText duration-300`}
            >
              {aboutMeText}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCard;
