import { ReactNode, useState, useContext, useMemo } from 'react';
import { SearchContext } from './SearchContext';
import { StorageContext } from '../storages/StorageContext';

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const storageContext = useContext(StorageContext);

  if (!storageContext) {
    throw new Error('SearchProvider must be used within StorageProvider');
  }

  const { entries } = storageContext;

  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) {
      return entries;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return entries.filter(entry =>
      entry.site.toLowerCase().includes(lowerQuery)
    );
  }, [entries, searchQuery]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredEntries }}>
      {children}
    </SearchContext.Provider>
  );
}
