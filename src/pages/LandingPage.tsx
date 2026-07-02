import { useState } from 'react';
import { ChevronRight, Stethoscope, HeartPulse, Search } from 'lucide-react';
import { APPS_METADATA } from '../lib/appsMetadata';

interface Props {
  onSelectApp: (appId: string) => void;
}

type CategoryType = 'all' | 'soins' | 'flux' | 'gestion' | 'reseau';

export default function LandingPage({ onSelectApp }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');



  const categories = [
    { id: 'all', label: 'Tous les modules' },
    { id: 'soins', label: 'Soin & Diagnostic' },
    { id: 'flux', label: 'Logistique & Flux' },
    { id: 'gestion', label: 'Gestion & RH' },
    { id: 'reseau', label: 'Patient & Réseau' },
  ];

  const filteredApps = APPS_METADATA.filter(app => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.pitch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen flex flex-col bg-[#050b14]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[130px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-400/25">
            <Stethoscope className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-3xl font-extrabold tracking-tight block leading-tight text-white">Ndamatou<span className="text-cyan-400">.Suite</span></span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold block">Next-Gen Hospital</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#catalogue" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">Découvrir les 33 Apps</a>
          <button 
            onClick={() => {
              const el = document.getElementById('catalogue');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary ml-4 group flex items-center gap-2 py-2.5"
          >
            Explorer le catalogue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto w-full pt-16 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-white/90">Version de Démonstration Interactive</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          La Suite Hospitalière<br />
          <span className="text-gradient">Complète & Intégrée.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl font-light animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Découvrez la puissance et la synergie de nos 33 modules. Cliquez sur n'importe quelle application ci-dessous pour explorer sa fiche commerciale et tester son tableau de bord en conditions réelles.
        </p>

        <div className="flex items-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => {
              const el = document.getElementById('catalogue');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-8 py-4 flex items-center gap-3 group"
          >
            <HeartPulse className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Voir le Catalogue d'Applications
          </button>
        </div>
      </main>

      {/* Main Apps Catalogue Section */}
      <section id="catalogue" className="relative z-10 w-full border-t border-border bg-[#070e1a]/80 backdrop-blur-3xl py-24 scroll-mt-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Catalogue des Applications</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Explorez l'écosystème Ndamatou.Suite. Sélectionnez un module pour commencer.</p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Rechercher une application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as CategoryType)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-surface hover:bg-surfaceHover text-white/60 hover:text-white border border-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => onSelectApp(app.id)}
                className="glass-card p-6 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{app.emoji}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface border border-border text-white/60">
                      {app.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {app.name} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm font-medium text-primary/80 mb-3">{app.tagline}</p>
                  <p className="text-sm text-white/50 leading-relaxed line-clamp-3">{app.pitch}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-white/40 group-hover:text-white/80 transition-colors">
                  <span>Dossier : hopital/{app.id}</span>
                  <span className="font-semibold text-primary/80 group-hover:text-primary">Découvrir la démo</span>
                </div>
              </div>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-surface/20">
              <p className="text-white/40 text-lg">Aucune application ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-[#040910] py-8 text-center text-sm text-white/40 mt-auto">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Hôpital Ndamatou de Touba. Tous droits réservés.</p>
          <div className="flex gap-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent">DÉMO PRÉSENTATION</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

