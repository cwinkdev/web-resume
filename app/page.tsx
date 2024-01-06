'use client';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import QuickNavMenu from './components/quickNavMenu/QuickNavMenu';
import { useApp } from './hooks/useApp';
import Link from 'next/link';
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
                console.log('a');
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'about',
                }));
                break;
              case 'skills':
                console.log('s');
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'skills',
                }));
                break;
              case 'portfolio':
                console.log('p');
                setState((prevState) => ({
                  ...prevState,
                  currentSection: 'portfolio',
                }));
                break;
              case 'contact':
                console.log('c');
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
      { threshold: 0.7 },
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
        className={`fixed top-0 w-full z-30 bg-base ${
          state.showQuickNav ? 'lg:h-0 h-16' : 'h-24'
        } shadow-md shadow-neutral-00 border-b duration-300 border-neutral-700`}
      >
        <Link
          href={`#top`}
          onClick={(e) => handleClick(e, 'top')}
          className="text-center text-primary font-mono h-14 flex"
        >
          <p
            className="text-2xl m-auto"
            style={{ transform: `translateX(${state.offset}px)` }}
          >
            Christian Winkler
          </p>
        </Link>
        <QuickNavMenu />

        <div className="h-14 w-full justify-center flex relative">
          <p
            className={`text-center absolute top-0 h-full text-accent font-mono ${
              state.theme.id === 'theme1'
                ? 'text-baseText'
                : state.theme.id === ''
                ? 'text-accent'
                : 'text-baseText'
            }`}
            style={{ transform: `translateX(${state.offset}px)` }}
          >
            {'> '}
            {typedText}
            <span className="cursor"></span>
          </p>
        </div>
      </div>

      <section
        id="main"
        className="flex min-h-screen items-center flex-col font-extralight px-8 overflow-x-hidden lg:w-3/4 lg:mx-auto"
      >
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
