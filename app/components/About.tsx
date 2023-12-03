import { useState } from 'react';
import { aboutMeText } from '../data/aboutMe';
import { splitIntoLines } from '../utils/splitParagraph';

const About = () => {
  const [isLongVersion, setIsLongVersion] = useState<boolean>();
  const aboutMeLines = splitIntoLines(aboutMeText, 32);
  return (
    <section id="about" className="pt-20 p-8 h-screen w-full text-center">
      <div className="border-2 rounded-full shadow-md shadow-black h-40 bg-base2 w-40 mx-auto my-4"></div>

      <div className="flex w-56 justify-center mx-auto text-center text-sm my-4">
        <p className="my-auto text-primary">Version:</p>
        <div className="w-40 h-6 mx-auto rounded-full flex shadow-sm shadow-black bg-base1 text-baseText relative font-light box-border border border-base3">
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
            className={`${
              isLongVersion ? 'right-0' : 'right-20'
            } absolute duration-500 shadow-md shadow-black h-full w-1/2 border border-secondary bg-white bg-opacity-10 rounded-full`}
          ></div>
        </div>
      </div>
      {isLongVersion ? (
        <div
          className="mt-4 h-[450px] font-light relative overflow-hidden crawl-container shadow-black shadow-inner border-y border-emerald-400 rounded-lg"
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
        <div className="mt-4 h-[450px] flex flex-col font-light relative overflow-y-auto shadow-black bg-base shadow-md border-y border-secondary rounded-lg">
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
    </section>
  );
};

export default About;
