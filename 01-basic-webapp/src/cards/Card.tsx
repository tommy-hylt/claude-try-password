import { useState, useContext } from 'react';
import { StorageContext } from '../storages/StorageContext';
import { PasswordEntry } from '../storages/passwordEntry';
import './Card.css';

interface CardProps {
  entry: PasswordEntry;
}

export function Card({ entry }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [site, setSite] = useState(entry.site);
  const [username, setUsername] = useState(entry.username);
  const [password, setPassword] = useState(entry.password);
  const [remark, setRemark] = useState(entry.remark);

  const context = useContext(StorageContext);

  if (!context) {
    throw new Error('Card must be used within StorageProvider');
  }

  const { updateEntry, deleteEntry } = context;

  const handleSave = () => {
    if (!site.trim()) {
      alert('Site name cannot be empty');
      return;
    }
    updateEntry(entry.id, { site, username, password, remark });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setSite(entry.site);
    setUsername(entry.username);
    setPassword(entry.password);
    setRemark(entry.remark);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteEntry(entry.id);
  };

  return (
    <div className="cards-Card">
      <div className="cards-Card-row">
        <label>Site:</label>
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          disabled={!isEditing}
          className="cards-Card-input"
        />
      </div>

      <div className="cards-Card-row">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={!isEditing}
          className="cards-Card-input"
        />
      </div>

      <div className="cards-Card-row">
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!isEditing}
          className="cards-Card-input"
        />
      </div>

      <div className="cards-Card-row">
        <label>Remark:</label>
        <input
          type="text"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          disabled={!isEditing}
          className="cards-Card-input"
        />
      </div>

      <div className="cards-Card-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}
