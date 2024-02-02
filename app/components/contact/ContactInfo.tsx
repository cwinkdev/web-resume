'use client';

import { SiGithub } from 'react-icons/si';
import { GiCloudDownload } from 'react-icons/gi';

const ContactInfo = () => {
  return (
    <div
      className={`min-h-[700px] h-fit justify-evenly flex flex-col py-4 px-6 w-full`}
    >
      <h2 className="text-3xl font-semibold text-primary">Contact Info</h2>
      <div className="">
        <p className="text-xl font-semibold ">Christian Winkler</p>
        <p className="mb-4  text-secondary">Front-End Developer</p>
        <a href="mailto:cjwinkler0@gmail.com" className="text-lg">
          cjwinkler0@gmail.com
        </a>
        <p className="text-secondary">North Augusta, SC - USA</p>
      </div>
      <div className="w-1/2 mx-auto border-b opacity-50 border-secondary xl:w-1/3"></div>
      <p className="h-2 text-accent">Check out my Github profile!</p>

      <a
        href="https://github.com/cwinkdev"
        className="relative flex items-center justify-center p-2 px-4 mx-auto text-xl duration-700 border rounded-lg bg-base w-fit hover:border-accent border-base3 group"
      >
        <div className="absolute w-[0%] group-hover:w-[100%] opacity-0 group-hover:opacity-100 h-full bg-base2 z-0 duration-500 rounded-lg left-0"></div>
        <div className="z-10 flex items-center">
          <SiGithub />
          <p className="mb-1 ml-2">cwinkdev</p>
        </div>
      </a>

      <div className="w-1/2 mx-auto border-b opacity-50 border-secondary xl:w-1/3"></div>
      <div className="flex flex-col items-center">
        <a
          href="/path-to-resume.pdf"
          download
          className="relative flex items-center justify-center p-2 px-4 mx-auto text-xl border rounded-lg bg-base w-fit hover:border-accent group border-base3"
        >
          <div className="absolute w-[0%] group-hover:w-[100%] opacity-0 group-hover:opacity-100 h-full bg-base2 z-0 duration-500 rounded-lg left-0"></div>
          <div className="z-10 flex items-center">
            <GiCloudDownload />
            <p className="mb-1 ml-2">Download resume</p>{' '}
          </div>
        </a>
      </div>
      <p className="text-accent">Thanks for taking a look!</p>
    </div>
  );
};

export default ContactInfo;
