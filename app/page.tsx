'use client';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import QuickNavMenu from './components/quickNavMenu/QuickNavMenu';
import { useApp } from './hooks/useApp';
import MainNavMenu from './components/mainNavMenu/MainNavMenu';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { state, setState, handleClick, typedText } = useApp();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case 'about':
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'about',
                }));
                break;
              case 'skills':
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'skills',
                }));
                break;
              case 'portfolio':
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'portfolio',
                }));
                break;
              case 'contact':
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'contact',
                }));
                break;
              default:
                break;
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div
      id="top"
      className={`relative duration-500 bg-base1 text-baseText overflow-x-hidden`}
    >
      <div
        style={{
          backgroundImage:
            state.theme.id === 'theme1' ? 'url(./abstractCardBG.png)' : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`fixed top-0 w-full bg-base ${
          state.showQuickNav ? 'xl:h-0 h-16' : 'h-24'
        } shadow-md shadow-neutral-00 border-b z-20 duration-300 border-neutral-700`}
      >
        <QuickNavMenu />
        <div
          style={{ transform: `translateX(${state.offset}px)` }}
          className="z-30 flex flex-col m-auto font-mono text-center text-primary w-fit h-14"
        >
          <p className="m-auto mt-4 text-2xl">Christian Winkler</p>

          <div className="relative flex justify-center w-full h-14">
            <p
              className={`text-center absolute top-0 h-full text-accent font-mono ${
                state.theme.id === 'theme1'
                  ? 'text-baseText'
                  : state.theme.id === ''
                  ? 'text-accent'
                  : 'text-baseText'
              }`}
            >
              {'> '}
              {typedText}
              <span className="cursor"></span>
            </p>
          </div>
        </div>
      </div>

      <section
        id="main"
        className="relative z-0 flex flex-col items-center w-full min-h-screen px-8 overflow-x-hidden font-extralight xl:mx-auto"
      >
        <div
          style={{
            backgroundImage: 'url(./abstractBG2.png)',
            backgroundPosition: 'center',
          }}
          className={`${
            state.theme.id === 'theme1'
              ? 'opacity-20'
              : state.theme.id === ''
              ? 'opacity-100'
              : 'opacity-20'
          } absolute w-full h-full`}
        ></div>
        <MainNavMenu />
      </section>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
      <div id="portfolio" ref={portfolioRef}>
        <Portfolio />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
