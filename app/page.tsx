'use client';

import About from './components/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';
import QuickNavMenu from './components/quickNavMenu/QuickNavMenu';
import { useApp } from './hooks/useApp';
import Link from 'next/link';
import MainNavMenu from './components/mainNavMenu/MainNavMenu';

export default function Home() {
  const { state, handleClick, typedText } = useApp();

  return (
    <div id="top" className="relative ">
      <div
        className={`fixed top-0 w-full z-30 bg-black ${
          state.showQuickNav ? 'h-16' : 'h-24'
        } shadow-sm shadow-neutral-950 border-b duration-300 border-neutral-700`}
      >
        <Link
          href={`#top`}
          onClick={(e) => handleClick(e, 'top')}
          className=" text-center font-mono h-14 flex"
        >
          <p
            className="text-2xl m-auto text-emerald-500"
            style={{ transform: `translateX(${state.offset}px)` }}
          >
            Christian Winkler
          </p>
        </Link>
        <QuickNavMenu />

        <div className="h-14 w-full justify-center flex relative">
          <p
            className={`text-center absolute top-0 h-full text-emerald-100 font-mono`}
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
        className="flex min-h-screen items-center flex-col bg-gradient-to-b font-extralight from-stone-950 to-stone-900 px-8 overflow-x-hidden"
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
