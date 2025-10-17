import { TabItem } from './TabItem';
import './TabBar.css';

export function TabBar() {
  return (
    <div className="tabs-TabBar">
      <TabItem value="view" label="View" />
      <TabItem value="raw" label="Raw" />
    </div>
  );
}
