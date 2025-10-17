import { createContext } from 'react';
import { PasswordEntry } from '../storages/passwordEntry';

export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredEntries: PasswordEntry[];
}

export const SearchContext = createContext<SearchContextType | null>(null);
