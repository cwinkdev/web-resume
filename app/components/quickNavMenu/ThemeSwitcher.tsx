import { useState, useEffect } from 'react';
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
    name: 'Party Mode',
    icon: <GiPartyPopper />,
    colors: 'text-pink-400',
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
  const [themeIndex, setThemeIndex] = useState(0);

  // Find current theme index based on state
  const getCurrentThemeIndex = () => {
    return themes.findIndex(t => t.id === state.theme.id);
  };

  // Sync themeIndex when state.theme changes
  useEffect(() => {
    const currentIndex = getCurrentThemeIndex();
    if (currentIndex !== -1) {
      setThemeIndex(currentIndex);
    }
  }, [state.theme.id]);

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = themes.find(t => t.id === themeId);
    if (selectedTheme) {
      setState((prevState) => ({
        ...prevState,
        theme: selectedTheme,
      }));
      changeTheme(themeId);
    }
  };

  const cycleTheme = () => {
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextThemeIndex);
    const nextTheme = themes[nextThemeIndex];
    setState((prevState) => ({
      ...prevState,
      theme: nextTheme,
    }));
    changeTheme(nextTheme.id);
  };

  const getBorderRadius = (themeId: string) => {
    if (themeId === 'theme1') return 'rounded-sm';
    if (themeId === 'theme2') return 'rounded-full';
    return 'rounded-xl';
  };

  // If showName is false (sidebar/quick nav), show single cycling button
  if (!showName) {
    return (
      <div
        className="flex flex-col"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <button
          onClick={cycleTheme}
          className={`${getBorderRadius(state.theme.id)} ${state.theme.colors} ${additionalCSS} relative
            group bg-base shadow-sm shadow-baseShadow justify-center mx-auto flex border border-base3 hover:border-accent duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base`}
          aria-label={`Change theme. Current theme: ${state.theme.name}`}
          aria-pressed="false"
          type="button"
        >
          <div
            className={`${getBorderRadius(state.theme.id)} absolute w-[0%] group-hover:w-[100%] opacity-0 group-hover:opacity-100 h-full bg-base2 z-0 duration-500 left-0`}
          ></div>
          <div className={`${state.theme.colors} z-10 m-1.5 text-2xl`}>
            {state.theme.icon}
          </div>
        </button>
      </div>
    );
  }

  // If showName is true (landing page), show all 3 icons with current theme name (same for desktop and mobile)
  return (
    <div
      className="flex flex-col"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <div className="flex flex-col items-center w-fit mx-auto p-3 rounded-lg">
        <p className={`text-baseText text-sm font-semibold mb-3 px-3`}>
          <span className="font-thin opacity-70">Current Theme:</span> {state.theme.name}
        </p>
        <div className="flex gap-3 justify-center">
          {themes.map((theme) => {
            const isActive = state.theme.id === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`${getBorderRadius(theme.id)} ${theme.colors} p-2.5 relative
                  group bg-base shadow-md shadow-baseShadow border-2 ${
                    isActive
                      ? 'border-accent scale-105 shadow-accent/20'
                      : 'border-base3 hover:border-accent/50'
                  } hover:border-accent hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base transition-all`}
                aria-label={`Select ${theme.name} theme`}
                aria-pressed={isActive}
                type="button"
              >
                <div className={`${theme.colors} text-xl xl:text-2xl`}>
                  {theme.icon}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
