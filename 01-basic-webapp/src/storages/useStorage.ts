import { useState, useEffect } from 'react';
import { PasswordEntry, createEntry, isActive } from './passwordEntry';

const STORAGE_KEY = 'storages-useStorage-1';

function loadFromStorage(): PasswordEntry[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to load from storage:', error);
    return [];
  }
}

function saveToStorage(entries: PasswordEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Failed to save to storage:', error);
  }
}

export function useStorage() {
  const [entries, setEntries] = useState<PasswordEntry[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(entries);
  }, [entries]);

  const addEntry = (site: string, username: string, password: string, remark: string) => {
    const newEntry = createEntry(site, username, password, remark);
    setEntries(prev => [...prev, newEntry]);
  };

  const updateEntry = (id: string, updates: Partial<Omit<PasswordEntry, 'id' | 'status'>>) => {
    setEntries(prev => prev.map(entry =>
      entry.id === id ? { ...entry, ...updates } : entry
    ));
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.map(entry =>
      entry.id === id ? { ...entry, status: 'deleted' as const } : entry
    ));
  };

  const getActiveEntries = () => entries.filter(isActive);

  const getAllEntries = () => entries;

  const setAllEntries = (newEntries: PasswordEntry[]) => {
    setEntries(newEntries);
  };

  return {
    entries: getActiveEntries(),
    allEntries: getAllEntries(),
    addEntry,
    updateEntry,
    deleteEntry,
    setAllEntries
  };
}
