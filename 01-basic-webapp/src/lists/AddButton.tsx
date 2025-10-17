import { useContext } from 'react';
import { StorageContext } from '../storages/StorageContext';
import './List.css';

export function AddButton() {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error('AddButton must be used within StorageProvider');
  }

  const { addEntry } = context;

  const handleAdd = () => {
    addEntry('New Site', '', '', '');
  };

  return (
    <button className="lists-AddButton" onClick={handleAdd}>
      + Add Password
    </button>
  );
}
