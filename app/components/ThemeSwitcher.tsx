import { useState } from 'react';
import { useApp } from '../hooks/useApp';

const themes = ['', 'theme1', 'theme2']; // Array of theme classes

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
      theme: themes[themeIndex],
    }));
    changeTheme(themes[themeIndex]);
  };

  return (
    <div
      className="theme-switcher-container"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <button
        onClick={cycleTheme}
        className="rounded-full p-2 border-2 border-gray-300" // Add more styling as needed
      >
        {state.theme}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
