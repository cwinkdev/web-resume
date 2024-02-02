import { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { GiMoon, GiPartyPopper, GiSun } from 'react-icons/gi';

const themes = [
  { id: '', name: 'Modern Dark', icon: <GiMoon />, colors: 'text-yellow-100' },
  {
    id: 'theme1',
    name: 'Sleek Professional',
    icon: <GiSun />,
    colors: 'text-amber-600',
  },
  {
    id: 'theme2',
    name: 'Vibrant Fun',
    icon: <GiPartyPopper />,
    colors: 'text-yellow-200',
  },
];

interface ThemeSwitcherProps {
  translateX?: number;
  additionalCSS?: string;
  showName: boolean;
}

const ThemeSwitcher = ({
  translateX,
  additionalCSS,
  showName,
}: ThemeSwitcherProps) => {
  const { state, setState, changeTheme } = useApp();
  const [themeIndex, setThemeIndex] = useState(0); // Current theme index

  const cycleTheme = () => {
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextThemeIndex);
    setState((prevState) => ({
      ...prevState,
      theme: themes[nextThemeIndex],
    }));
    changeTheme(themes[nextThemeIndex].id);
  };

  return (
    <div
      className="flex flex-col h-32"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      {showName ? <h2 className="font-semibold">View mode:</h2> : null}
      <button
        onClick={cycleTheme}
        className={`${
          state.theme.id === 'theme1'
            ? 'rounded-sm'
            : state.theme.id === ''
            ? 'rounded-xl'
            : 'rounded-full'
        } ${themes[themeIndex].colors} ${additionalCSS} relative
   group bg-base shadow-sm xl:mt-0 shadow-baseShadow justify-between mx-auto flex border border-base3 xl:hover:border-accent duration-300`}
      >
        <div
          className={`${
            state.theme.id === 'theme1'
              ? 'rounded-sm'
              : state.theme.id === ''
              ? 'rounded-xl'
              : 'rounded-full'
          } absolute w-[0%] xl:group-hover:w-[100%] opacity-0 xl:group-hover:opacity-100 h-full bg-base2 z-0 duration-500 left-0`}
        ></div>
        <div className={`${themes[themeIndex].colors} z-10 m-1.5 xl:text-3xl`}>
          {state.theme.icon}
        </div>
        {showName ? (
          <p className={`text-baseText text-lg font-semibold m-auto px-3 z-10`}>
            {themes[themeIndex].name}
          </p>
        ) : null}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
