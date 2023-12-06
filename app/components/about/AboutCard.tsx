import { aboutMeText } from '../../data/aboutMe';
import { splitIntoLines } from '../../utils/splitParagraph';
import { useInView } from 'react-intersection-observer';

interface AboutCardProps {
  isLongVersion: boolean;
}

const AboutCard = ({ isLongVersion }: AboutCardProps) => {
  const aboutMeLines = splitIntoLines(aboutMeText, 32);
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <>
      {isLongVersion ? (
        <div
          ref={ref}
          className={`${
            inView ? 'slide-in-right' : 'slide-off-left'
          } mt-4 h-[450px] font-light relative overflow-hidden crawl-container shadow-black shadow-inner border-y border-emerald-400 rounded-lg`}
          style={{
            backgroundImage: 'url(./space.jpg)', // Adjust the path as needed
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the background image
          }}
        >
          {aboutMeLines.map((line, index) => (
            <div
              key={line}
              className="crawl-line text-xl font-bold text-yellow-400"
              style={{
                opacity: 1 - index * 0.1, // Decrease opacity for each subsequent line
                transform: `translateY(${index * 10}vh) scale(${
                  1 - index * 0.05
                })`, // Move up and scale down each line
                animationDelay: `${index * 2}s`, // Delay each line's animation
              }}
            >
              {line}
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={ref}
          className={`${
            inView ? 'slide-in-right' : 'slide-off-left'
          } mt-4 h-[450px] flex flex-col font-light relative overflow-y-auto shadow-black bg-base shadow-md border-y border-secondary rounded-lg`}
        >
          <div className="bg-base2 text-left mt-4 py-2 shadow-black shadow-sm">
            <h2 className="pl-4 text-2xl font-semibold text-primary">
              CHRISTIAN WINKLER
            </h2>
          </div>
          <div className="flex px-4 mt-6">
            <div className="border-r border-secondary"></div>
            <p
              className={`pl-4 text-left text-sm text-baseText font-light duration-300`}
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
