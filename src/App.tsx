import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {currentView === 'landing' ? (
        <LandingPage onNavigate={() => setCurrentView('dashboard')} />
      ) : (
        <Dashboard onNavigate={() => setCurrentView('landing')} />
      )}
    </div>
  );
}

export default App;
