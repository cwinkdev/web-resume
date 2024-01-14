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
        <p className=" text-secondary mb-4">Front-End Developer</p>
        <a href="mailto:cjwinkler0@gmail.com" className="text-lg">
          cjwinkler0@gmail.com
        </a>
        <p className="text-secondary">North Augusta, SC - USA</p>
      </div>
      <div className="border-b border-secondary mx-auto w-1/2 xl:w-1/3 opacity-50"></div>
      <p className="h-2 text-accent">Check out my Github profile!</p>

      <a
        href="https://github.com/cwinkdev"
        className="flex justify-center items-center text-xl bg-base w-fit p-2 px-4 mx-auto rounded-lg border border-base3"
      >
        <SiGithub />
        <p className="ml-2 mb-1">cwinkdev</p>
      </a>

      <div className="border-b border-secondary mx-auto w-1/2 xl:w-1/3 opacity-50"></div>
      <div className="flex flex-col items-center">
        <a
          href="/path-to-resume.pdf"
          download
          className="flex justify-center items-center text-xl bg-base w-fit p-2 px-4 mx-auto rounded-lg border border-base3"
        >
          <GiCloudDownload />
          <p className="ml-2 mb-1">Download resume</p>
        </a>
      </div>
      <p className="text-accent">Thanks for taking a look!</p>
    </div>
  );
};

export default ContactInfo;
