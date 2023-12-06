'use client';

import { GiMoon } from 'react-icons/gi';
import { AppState } from '../types';
import React, { createContext, useState, ReactNode } from 'react';

const initialState: AppState = {
  theme: { id: '', name: 'Dark', icon: <GiMoon />, colors: 'bg-white' },
  offset: 0,
  showQuickNav: false,
  currentSection: 'top',
};

export const AppStateContext = createContext<{
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}>({
  state: initialState,
  setState: () => {},
});

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AppState>(initialState);

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};
