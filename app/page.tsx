'use client';

import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import QuickNavMenu from './components/quickNavMenu/QuickNavMenu';
import { useApp } from './hooks/useApp';
import Link from 'next/link';
import MainNavMenu from './components/mainNavMenu/MainNavMenu';

export default function Home() {
  const { state, handleClick, typedText } = useApp();

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
          state.showQuickNav ? 'h-16' : 'h-24'
        } shadow-md shadow-neutral-00 border-b duration-300 border-neutral-700`}
      >
        <Link
          href={`#top`}
          onClick={(e) => handleClick(e, 'top')}
          className=" text-center text-primary font-mono h-14 flex"
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
        className="flex min-h-screen items-center flex-col font-extralight px-8 overflow-x-hidden lg:w-1/2 lg:mx-auto"
      >
        <MainNavMenu />
      </section>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
