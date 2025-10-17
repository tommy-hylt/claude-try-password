import { ReactNode, useState } from 'react';
import { TabContext } from './TabContext';
import { TabValue } from './tabValue';

export function TabProvider({ children }: { children: ReactNode }) {
  const [currentTab, setCurrentTab] = useState<TabValue>('view');

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
}
