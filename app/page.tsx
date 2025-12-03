'use client';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import QuickNavMenu from './components/quickNavMenu/QuickNavMenu';
import { useApp } from './hooks/useApp';
import MainNavMenu from './components/mainNavMenu/MainNavMenu';
import ScrollIndicator from './components/ScrollIndicator';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { state, setState, typedText } = useApp();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!isMounted) return;
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

    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [setState]);
  return (
    <div
      id="top"
      className={`relative duration-500 bg-base1 text-baseText overflow-x-hidden`}
    >
      <header
        style={{
          backgroundImage:
            state.theme.id === 'theme1'
              ? 'url(./abstractCardBG.png)'
              : state.theme.id === 'theme2'
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)'
              : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`fixed top-0 w-full ${
          state.showQuickNav ? 'xl:h-0 h-16' : 'h-24'
        }  z-20 duration-300 `}
        role="banner"
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
                  : state.theme.id === 'theme2'
                  ? 'text-accent'
                  : 'text-accent'
              }`}
            >
              {'> '}
              {typedText}
              <span className="cursor"></span>
            </p>
          </div>
        </div>
      </header>

      <main
        id="main"
        className="relative z-0 flex flex-col items-center w-full min-h-screen px-8 overflow-x-hidden font-extralight xl:mx-auto pt-24 pb-24 bg-base1"
        role="main"
      >
        <div
          style={{
            backgroundImage: 'url(./abstractBG2.png)',
            backgroundPosition: 'center',
          }}
          className={`${
            state.theme.id === 'theme1'
              ? 'opacity-20'
              : state.theme.id === 'theme2'
              ? 'opacity-30'
              : 'opacity-100'
          } absolute w-full h-full`}
        ></div>

        <MainNavMenu />
        <ScrollIndicator />
      </main>
      <section id="about" ref={aboutRef} aria-label="About section" className="relative">
        <About />
      </section>
      <section id="skills" ref={skillsRef} aria-label="Skills section" className="relative">
        <Skills />
      </section>
      <section id="portfolio" ref={portfolioRef} aria-label="Portfolio section" className="relative">
        <Portfolio />
      </section>
      <section id="contact" ref={contactRef} aria-label="Contact section" className="relative">
        <Contact />
      </section>
    </div>
  );
}
