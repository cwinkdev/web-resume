import { SiGithub } from 'react-icons/si';
import { GiCloudDownload } from 'react-icons/gi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-8 pt-20 h-screen w-full text-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div
        className={`border-emerald-400 min-h-[700px] h-fit bg-gradient-to-b from-neutral-900 to-neutral-950 justify-evenly flex flex-col rounded-lg border-y py-4 px-6 w-full relative shadow-lg shadow-black`}
      >
        <h2 className="text-3xl font-semibold text-emerald-400">
          Contact Info
        </h2>
        <div className="border-b border-emerald-200 mx-auto w-1/2"></div>
        <div className="">
          <p className="text-xl font-semibold ">Christian Winkler</p>
          <p className=" text-emerald-100 mb-4">Front-End Developer</p>
          <a href="mailto:cjwinkler0@gmail.com" className="text-lg">
            cjwinkler0@gmail.com
          </a>
          <p className="text-emerald-100">North Augusta, SC - USA</p>
        </div>
        <a
          href="https://github.com/birdbonez"
          className="flex justify-center items-center text-2xl bg-neutral-800 w-fit p-2 px-4 mx-auto rounded-lg border border-neutral-600"
        >
          <SiGithub />
          <p className="ml-2">birdbonez</p>
        </a>
        <div className="border-b border-emerald-200 mx-auto w-1/2 my-4"></div>
        <div className="flex flex-col items-center">
          <a
            href="/path-to-resume.pdf"
            download
            className="flex justify-center items-center text-xl"
          >
            <GiCloudDownload />
            <p className="ml-2">Download resume</p>
          </a>
        </div>
        <div className="border-b border-emerald-200 mx-auto w-1/2 my-4"></div>
        <p className="text-emerald-100">Thanks for checking out my resume!</p>
      </div>
    </section>
  );
};

export default Contact;
