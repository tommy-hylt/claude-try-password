import { useContext } from 'react';
import { TabContext } from './TabContext';
import { TabValue } from './tabValue';
import './TabItem.css';

interface TabItemProps {
  value: TabValue;
  label: string;
}

export function TabItem({ value, label }: TabItemProps) {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('TabItem must be used within TabProvider');
  }

  const { currentTab, setCurrentTab } = context;
  const isActive = currentTab === value;

  return (
    <button
      className={`tabs-TabItem ${isActive ? 'active' : ''}`}
      onClick={() => setCurrentTab(value)}
    >
      {label}
    </button>
  );
}
