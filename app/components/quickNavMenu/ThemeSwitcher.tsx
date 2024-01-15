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
      className="h-32 flex flex-col "
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
        } ${
          themes[themeIndex].colors
        } ${additionalCSS} bg-base2 shadow-sm shadow-baseShadow justify-between mx-auto flex p-1.5 border-2 border-base3 hover:border-accent duration-300`}
      >
        <div className={`${themes[themeIndex].colors}`}>{state.theme.icon}</div>
        {showName ? (
          <p className={`text-baseText text-lg font-semibold m-auto px-3`}>
            {themes[themeIndex].name}
          </p>
        ) : null}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
