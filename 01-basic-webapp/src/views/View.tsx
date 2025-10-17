import { SearchProvider } from '../searches/SearchProvider';
import { SearchInput } from '../searches/SearchInput';
import { List } from '../lists/List';
import './View.css';

export function View() {
  return (
    <SearchProvider>
      <div className="views-View">
        <SearchInput />
        <List />
      </div>
    </SearchProvider>
  );
}
