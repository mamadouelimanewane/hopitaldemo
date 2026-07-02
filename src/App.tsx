import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AppDemoDetail from './pages/AppDemoDetail';
import { APPS_METADATA } from './lib/appsMetadata';

function App() {
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  const selectedApp = APPS_METADATA.find(app => app.id === selectedAppId);

  return (
    <div className="min-h-screen bg-[#050b14] text-white font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {selectedApp ? (
        <AppDemoDetail 
          app={selectedApp} 
          onBack={() => setSelectedAppId(null)} 
        />
      ) : (
        <LandingPage 
          onSelectApp={(appId) => setSelectedAppId(appId)} 
        />
      )}
    </div>
  );
}

export default App;
