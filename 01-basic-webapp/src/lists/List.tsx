import { useContext } from 'react';
import { SearchContext } from '../searches/SearchContext';
import { Card } from '../cards/Card';
import { AddButton } from './AddButton';
import './List.css';

export function List() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('List must be used within SearchProvider');
  }

  const { filteredEntries } = context;

  return (
    <div className="lists-List">
      {filteredEntries.map(entry => (
        <Card key={entry.id} entry={entry} />
      ))}
      <AddButton />
    </div>
  );
}
