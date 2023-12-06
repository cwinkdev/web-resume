import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface AppState {
  theme: string;
  themeIcon: any;
  offset: number;
  showQuickNav: boolean;
  currentSection: string;
}
