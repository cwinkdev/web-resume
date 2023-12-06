import { useState } from 'react';
import { useApp } from '../../hooks/useApp';
import { GiMoon, GiPartyPopper, GiSun } from 'react-icons/gi';

const themes = [
  { id: '', icon: <GiMoon />, colors: 'bg-white' },
  { id: 'theme1', icon: <GiSun />, colors: 'bg-black' },
  { id: 'theme2', icon: <GiPartyPopper />, colors: 'bg-purple-400' },
];

interface ThemeSwitcherProps {
  translateX: number;
}

const ThemeSwitcher = ({ translateX }: ThemeSwitcherProps) => {
  const { state, setState, changeTheme } = useApp();
  const [themeIndex, setThemeIndex] = useState(0); // Current theme index

  const cycleTheme = () => {
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextThemeIndex);
    setState((prevState) => ({
      ...prevState,
      theme: themes[nextThemeIndex].id,
      themeIcon: themes[nextThemeIndex].icon,
    }));
    changeTheme(themes[nextThemeIndex].id);
  };

  return (
    <div
      className="theme-switcher-container"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <button
        onClick={cycleTheme}
        className="rounded-full p-1.5 border-2 border-base3" // Add more styling as needed
      >
        <div className="text-2xl text-primary">{state.themeIcon}</div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
