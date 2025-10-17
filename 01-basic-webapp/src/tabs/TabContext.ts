import { createContext } from 'react';
import { TabValue } from './tabValue';

export interface TabContextType {
  currentTab: TabValue;
  setCurrentTab: (tab: TabValue) => void;
}

export const TabContext = createContext<TabContextType | null>(null);
