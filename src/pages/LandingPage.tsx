import { useState } from 'react';
import { ChevronRight, Stethoscope, HeartPulse, Search } from 'lucide-react';
import { APPS_METADATA } from '../lib/appsMetadata';

interface Props {
  onSelectApp: (appId: string) => void;
}

type CategoryType = 'all' | 'soins' | 'flux' | 'gestion' | 'reseau';

const CATEGORY_COLORS: Record<string, string> = {
  soins:   'bg-rose-500/10 border-rose-500/20 text-rose-400',
  flux:    'bg-amber-500/10 border-amber-500/20 text-amber-400',
  gestion: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  reseau:  'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
};

export default function LandingPage({ onSelectApp }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all',     label: 'Tous les modules' },
    { id: 'soins',   label: '🩺 Soin & Diagnostic' },
    { id: 'flux',    label: '🚚 Logistique & Flux' },
    { id: 'gestion', label: '📋 Gestion & RH' },
    { id: 'reseau',  label: '🌐 Patient & Réseau' },
  ];

  const filteredApps = APPS_METADATA.filter(app => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.pitch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'linear-gradient(160deg, #040d1e 0%, #060f20 40%, #050b18 100%)' }}>
      
      {/* Background ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-30" style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full animate-fade-in border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-400/25">
            <Stethoscope className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-3xl font-extrabold tracking-tight block leading-tight text-white">Ndamatou<span className="text-cyan-400">.Suite</span></span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold block">Next-Gen Hospital · Touba, Sénégal</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#catalogue" className="text-sm font-semibold text-white/50 hover:text-white transition-colors hidden md:block">
            33 Applications
          </a>
          <button
            onClick={() => document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group flex items-center gap-2 py-2.5 px-5"
          >
            Explorer le catalogue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto w-full pt-20 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-white/80">Version de Démonstration Interactive</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          La Suite Hospitalière<br />
          <span className="text-gradient">Complète & Intégrée.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 mb-12 max-w-3xl font-light animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Découvrez la puissance de nos 33 modules. Cliquez sur une application pour explorer sa fiche commerciale et tester son tableau de bord en conditions réelles.
        </p>

        <button
          onClick={() => document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary text-lg px-8 py-4 flex items-center gap-3 group animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <HeartPulse className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Voir le Catalogue d'Applications
        </button>
      </main>

      {/* Catalogue Section */}
      <section
        id="catalogue"
        className="relative z-10 w-full py-24 scroll-mt-6"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(4,10,22,0.95) 8%, rgba(5,11,20,1) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Ndamatou.Suite · 33 Modules
            </div>
            <h2 className="text-4xl font-black mb-3">Catalogue des Applications</h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">Explorez l'écosystème Ndamatou.Suite. Sélectionnez un module pour commencer.</p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 p-4 rounded-2xl border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.02)' }}>
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Rechercher une application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-cyan-500/40 transition-all border border-white/[0.07] focus:border-cyan-500/30"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as CategoryType)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                      : 'border-white/[0.08] text-white/50 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.04]'
                  }`}
                  style={selectedCategory !== cat.id ? { background: 'rgba(255,255,255,0.02)' } : undefined}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-xs text-white/30 font-medium mb-6">
            {filteredApps.length} application{filteredApps.length > 1 ? 's' : ''} affichée{filteredApps.length > 1 ? 's' : ''}
          </p>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.map((app) => {
              const catColor = CATEGORY_COLORS[app.category] || 'bg-white/5 border-white/10 text-white/50';
              return (
                <div
                  key={app.id}
                  onClick={() => onSelectApp(app.id)}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/5 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
                  />

                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{app.emoji}</span>
                      <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${catColor}`}>
                        {app.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                      {app.name}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400/70 mb-3">{app.tagline}</p>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-3">{app.pitch}</p>
                  </div>

                  <div className="relative px-6 py-4 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[10px] text-white/25 font-mono">hopital/{app.id}</span>
                    <span className="text-xs font-bold text-cyan-400/60 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                      Découvrir la démo <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-20 rounded-2xl border border-dashed border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.01)' }}>
              <p className="text-white/30 text-lg">Aucune application ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] py-8 text-center text-sm text-white/30" style={{ background: 'rgba(4,9,18,0.8)' }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Hôpital Ndamatou de Touba. Tous droits réservés.</p>
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400/80">DÉMO PRÉSENTATION</span>
        </div>
      </footer>
    </div>
  );
}
