import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ThemeProps {
  id: string;
  name: string;
  icon: any;
  colors: string;
}

export interface AppState {
  theme: ThemeProps;
  offset: number;
  showQuickNav: boolean;
  currentSection: string;
}
