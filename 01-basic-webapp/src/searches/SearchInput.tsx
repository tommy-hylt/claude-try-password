import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import './SearchInput.css';

export function SearchInput() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('SearchInput must be used within SearchProvider');
  }

  const { searchQuery, setSearchQuery } = context;

  return (
    <input
      type="text"
      className="searches-SearchInput"
      placeholder="Search by site name..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
