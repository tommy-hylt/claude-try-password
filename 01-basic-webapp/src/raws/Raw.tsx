import { useState, useContext, useEffect } from 'react';
import { StorageContext } from '../storages/StorageContext';
import { PasswordEntry } from '../storages/passwordEntry';
import './Raw.css';

export function Raw() {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error('Raw must be used within StorageProvider');
  }

  const { allEntries, setAllEntries } = context;
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setJsonText(JSON.stringify(allEntries, null, 2));
  }, [allEntries]);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);

      if (!Array.isArray(parsed)) {
        setError('JSON must be an array');
        return;
      }

      for (const entry of parsed) {
        if (!entry.id || !entry.status || !entry.site) {
          setError('Each entry must have id, status, and site fields');
          return;
        }
      }

      setAllEntries(parsed as PasswordEntry[]);
      setError('');
      alert('Saved successfully!');
    } catch (err) {
      setError('Invalid JSON: ' + (err as Error).message);
    }
  };

  const handleReset = () => {
    setJsonText(JSON.stringify(allEntries, null, 2));
    setError('');
  };

  return (
    <div className="raws-Raw">
      <div className="raws-Raw-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {error && <div className="raws-Raw-error">{error}</div>}

      <textarea
        className="raws-Raw-textarea"
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
}
