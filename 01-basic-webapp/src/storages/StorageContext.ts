import { createContext } from 'react';
import { PasswordEntry } from './passwordEntry';

export interface StorageContextType {
  entries: PasswordEntry[];
  allEntries: PasswordEntry[];
  addEntry: (site: string, username: string, password: string, remark: string) => void;
  updateEntry: (id: string, updates: Partial<Omit<PasswordEntry, 'id' | 'status'>>) => void;
  deleteEntry: (id: string) => void;
  setAllEntries: (entries: PasswordEntry[]) => void;
}

export const StorageContext = createContext<StorageContextType | null>(null);
