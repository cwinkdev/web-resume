import { useState } from 'react';
import { aboutMeText } from '../data/aboutMe';
import { splitIntoLines } from '../utils/splitParagraph';

const About = () => {
  const [isLongVersion, setIsLongVersion] = useState<boolean>();
  const aboutMeLines = splitIntoLines(aboutMeText, 32);
  return (
    <section
      id="about"
      className="pt-20 h-screen w-full text-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div className="border-2 rounded-full shadow-lg shadow-black h-40 bg-neutral-700 w-40 mx-auto my-4"></div>

      <div className="flex w-56 justify-center mx-auto text-center text-sm my-4">
        <p className="my-auto text-emerald-200">Version:</p>
        <div className="w-40 h-6 mx-auto rounded-full flex shadow-sm shadow-black relative font-light box-border border border-neutral-500">
          <div
            onClick={() => setIsLongVersion(false)}
            className="w-1/2 flex h-full rounded-l-full bg-neutral-900"
          >
            <p className="m-auto"> Short</p>
          </div>
          <div
            className="w-1/2 flex h-full rounded-r-full bg-neutral-900"
            onClick={() => setIsLongVersion(true)}
          >
            <p className="m-auto">Long</p>
          </div>
          <div
            className={`${
              isLongVersion ? 'right-0' : 'right-20'
            } absolute duration-500 shadow-lg shadow-black h-full w-1/2 border border-emerald-500 bg-white bg-opacity-20 rounded-full`}
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
        <div className="mt-4 h-[450px] flex flex-col font-light relative overflow-y-auto shadow-black bg-neutral-900 shadow-inner border-y border-emerald-400 rounded-lg">
          <div className="bg-neutral-950 text-left mt-4 py-2 shadow-black shadow-sm">
            <h2 className="pl-12 text-2xl font-semibold text-emerald-500">
              CHRISTIAN WINKLER
            </h2>
          </div>
          <div className="flex px-12 mt-4">
            <div className="border-r border-emerald-600"></div>
            <p className={`pl-4 text-left font-light duration-300`}>
              {aboutMeText}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
