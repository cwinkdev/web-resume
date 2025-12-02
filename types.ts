import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ThemeProps {
  id: string;
  name: string;
  icon: ReactNode;
  colors: string;
}

export interface AppState {
  theme: ThemeProps;
  offset: number;
  showQuickNav: boolean;
  currentSection: string;
}
