const Contact = () => {
  return (
    <section
      id="contact"
      className="p-8 pt-32 h-screen bg-neutral-950 w-full text-center"
    >
      <h2 className="text-3xl font-bold text-emerald-400">Contact Info</h2>
      <div className="border-b border-emerald-200 mx-auto w-1/2"></div>
      <div className="text-cyan-100 mt-8">
        <p className="text-xl font-semibold">Christian Winkler</p>
        <p className="mb-8">Front-End Developer</p>
        <a href="mailto:cjwinkler0@gmail.com">cjwinkler0@gmail.com</a>
        <p className="pb-8">North Augusta, SC - USA</p>
        <div>
          <a href="https://github.com/johndoe"></a>
        </div>
        <a href="/path-to-resume.pdf" download>
          Download Resume
        </a>
        <p className="mt-8">Thanks for checking out my resume!</p>
      </div>
    </section>
  );
};

export default Contact;
