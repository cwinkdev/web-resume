import { SiGithub } from 'react-icons/si';
import { GiCloudDownload } from 'react-icons/gi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-8 pt-20 h-screen w-full text-center text-baseText"
    >
      <div
        className={`border-secondary min-h-[700px] h-fit bg-base justify-evenly flex flex-col rounded-lg border-y py-4 px-6 w-full relative shadow-md shadow-black`}
      >
        <h2 className="text-3xl font-semibold text-primary">Contact Info</h2>
        <div className="border-b border-accent mx-auto w-1/2"></div>
        <div className="">
          <p className="text-xl font-semibold ">Christian Winkler</p>
          <p className=" text-accent mb-4">Front-End Developer</p>
          <a href="mailto:cjwinkler0@gmail.com" className="text-lg">
            cjwinkler0@gmail.com
          </a>
          <p className="text-accent">North Augusta, SC - USA</p>
        </div>
        <a
          href="https://github.com/birdbonez"
          className="flex justify-center items-center text-2xl bg-base2 w-fit p-2 px-4 mx-auto rounded-lg border border-base3"
        >
          <SiGithub />
          <p className="ml-2">birdbonez</p>
        </a>
        <div className="border-b border-accent mx-auto w-1/2 my-4"></div>
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
        <div className="border-b border-accent mx-auto w-1/2 my-4"></div>
        <p className="text-primary">Thanks for checking out my resume!</p>
      </div>
    </section>
  );
};

export default Contact;
