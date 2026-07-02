import { useState } from 'react';
import { ArrowLeft, Play, Lock, Sparkles, Database, CheckCircle, HelpCircle } from 'lucide-react';
import type { AppMetadata } from '../lib/appsMetadata';
import BlockedModal from '../components/BlockedModal';

interface Props {
  app: AppMetadata;
  onBack: () => void;
}

export default function AppDemoDetail({ app, onBack }: Props) {
  const [isExploring, setIsExploring] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060c16] text-white flex flex-col relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 border-b border-border bg-[#0a1424]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-xl hover:bg-surface border border-border/60 hover:border-border text-white/70 hover:text-white transition-all flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{app.emoji}</span>
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                {app.name} 
                <span className="text-[10px] tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-full">
                  {app.categoryLabel}
                </span>
              </h2>
              <p className="text-xs text-white/50">{app.tagline}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isExploring ? (
            <button 
              onClick={() => setIsExploring(true)} 
              className="btn-primary py-2 px-5 text-sm flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Play className="w-4 h-4" /> Lancer la démo
            </button>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold">
              <Lock className="w-3.5 h-3.5" /> MODE DÉMONSTRATION
            </div>
          )}
        </div>
      </header>

      {/* Main Content Pane */}
      <div className="relative z-10 flex-1 flex flex-col overflow-y-auto">
        {!isExploring ? (
          /* ========================================================= */
          /* 1. COMMERCIAL LANDING PITCH VIEW                           */
          /* ========================================================= */
          <div className="max-w-4xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center animate-fade-in">
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl shadow-primary/5">
                {app.emoji}
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">{app.name}</h1>
              <p className="text-lg md:text-xl font-medium text-primary mb-6">{app.tagline}</p>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                {app.pitch}
              </p>
            </div>

            {/* Value Props / Added Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {app.valueAdded.map((val, idx) => (
                <div key={idx} className="glass-panel border-border/40 p-6 flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Bénéfice Clé</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Big Action Button */}
            <div className="text-center">
              <button 
                onClick={() => setIsExploring(true)}
                className="btn-primary text-lg px-10 py-4 flex items-center gap-3 mx-auto shadow-xl shadow-primary/25"
              >
                <Play className="w-5 h-5 fill-current" /> Explorer le Module Interactif
              </button>
              <p className="text-xs text-white/30 mt-3 flex items-center justify-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> Comprend un tableau de bord simulé avec des données de test réalistes.
              </p>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* 2. SIMULATED DASHBOARD VIEW                                */
          /* ========================================================= */
          <div className="p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col gap-8 animate-fade-in">
            {/* Dashboard Header Panel */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/40 pb-6 shrink-0">
              <div>
                <h3 className="text-2xl font-black tracking-tight mb-1 flex items-center gap-2">
                  Console Centrale · {app.name}
                </h3>
                <p className="text-sm text-white/50">Aperçu en conditions réelles d'exploitation hospitalière.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={handleActionClick}
                  className="btn-primary py-2.5 px-5 text-sm flex items-center gap-2"
                >
                  Action Métier
                </button>
                <button 
                  onClick={() => setIsExploring(false)} 
                  className="btn-outline py-2.5 px-4 text-sm"
                >
                  Retour aux Informations
                </button>
              </div>
            </div>

            {/* Stats Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
              {app.stats.map((stat, i) => (
                <div key={i} className="glass-card p-5 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                    <h4 className="text-3xl font-black tracking-tight">{stat.value}</h4>
                  </div>
                  <div className="p-2 rounded-lg bg-surface border border-border/80">
                    <CheckCircle className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Data Table */}
              <div className="lg:col-span-2 glass-panel border-border/60 overflow-hidden shadow-xl">
                <div className="px-6 py-5 border-b border-border/40 flex justify-between items-center bg-[#0d1726]/40">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" /> {app.itemsTitle}
                  </h4>
                  <button 
                    onClick={handleActionClick}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    + Exporter CSV
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-surface/50 border-b border-border/40 text-[10px] uppercase font-bold text-white/40 tracking-wider">
                        {app.itemsHeaders.map((head) => (
                          <th key={head.key} className="px-6 py-3.5 text-left">{head.label}</th>
                        ))}
                        <th className="px-6 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {app.items.map((item, idx) => (
                        <tr key={idx} className="border-b border-border/30 hover:bg-surface/30 transition-colors">
                          {app.itemsHeaders.map((head) => (
                            <td key={head.key} className="px-6 py-4 text-sm font-semibold text-white/80">
                              {item[head.key]}
                            </td>
                          ))}
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={handleActionClick}
                              className="text-xs font-bold text-primary hover:text-white transition-colors bg-primary/10 hover:bg-primary px-3 py-1.5 rounded-lg border border-primary/20"
                            >
                              Gérer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Auxiliary Panel (Charts/Tension) */}
              <div className="glass-panel border-border/60 p-6 flex flex-col gap-6">
                <h4 className="font-bold text-white flex items-center gap-2">
                  {app.chartTitle ? app.chartTitle : "Taux de tension du Service"}
                </h4>
                
                <div className="flex flex-col gap-4">
                  {(app.chartData || [
                    { label: "Capacité disponible", pct: 70, color: "bg-accent" },
                    { label: "Capacité affectée", pct: 20, color: "bg-primary" },
                    { label: "Capacité critique", pct: 10, color: "bg-red-500" }
                  ]).map((data, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-semibold text-white/70 mb-2">
                        <span>{data.label}</span>
                        <span>{data.pct}%</span>
                      </div>
                      <div className="h-2 w-full bg-surface border border-border/40 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${data.color} rounded-full`}
                          style={{ width: `${data.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-surface border border-border/50 flex gap-3 items-start mt-4">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-xs text-white/50 leading-relaxed">
                    Ce panneau modélise les données de performance associées aux opérations de l'application. En version de production, il se connecte à vos flux IoT et bases hospitalières.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Blocked Modal pop-up */}
      <BlockedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appName={app.name}
      />
    </div>
  );
}
