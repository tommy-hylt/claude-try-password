import { ReactNode } from 'react';
import { StorageContext } from './StorageContext';
import { useStorage } from './useStorage';

export function StorageProvider({ children }: { children: ReactNode }) {
  const storage = useStorage();

  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
}
