import { useContext } from 'react';
import { StorageProvider } from './storages/StorageProvider';
import { TabProvider } from './tabs/TabProvider';
import { TabContext } from './tabs/TabContext';
import { TabBar } from './tabs/TabBar';
import { View } from './views/View';
import { Raw } from './raws/Raw';
import './App.css';

function AppContent() {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('AppContent must be used within TabProvider');
  }

  const { currentTab } = context;

  return (
    <div className="App">
      <h1>PickPassword</h1>
      <TabBar />
      {currentTab === 'view' && <View />}
      {currentTab === 'raw' && <Raw />}
    </div>
  );
}

function App() {
  return (
    <StorageProvider>
      <TabProvider>
        <AppContent />
      </TabProvider>
    </StorageProvider>
  );
}

export default App;
