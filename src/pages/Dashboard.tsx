import { useState, useEffect } from 'react';
import { ArrowLeft, Bell, Search, LayoutDashboard, Users, Activity, BedDouble, Plus, AlertCircle, Clock, TrendingUp } from 'lucide-react';

interface Props {
  onNavigate: () => void;
}

export default function Dashboard({ onNavigate }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Patients Actifs", value: "847", icon: <Users className="text-primary w-5 h-5" />, trend: "+12%" },
    { label: "Lits Disponibles", value: "42 / 300", icon: <BedDouble className="text-secondary w-5 h-5" />, trend: "-3%" },
    { label: "Urgences (1h)", value: "14", icon: <Activity className="text-red-500 w-5 h-5" />, trend: "+2" },
    { label: "Activité Globale", value: "94%", icon: <TrendingUp className="text-accent w-5 h-5" />, trend: "Optimal" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#060d18]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-surface/50 backdrop-blur-xl flex flex-col animate-fade-in">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center mr-3 shadow-md shadow-cyan-400/20">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">Ndamatou<span className="text-cyan-400">.Suite</span></span>
        </div>
        
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
              <LayoutDashboard className="w-5 h-5" /> Vue Centrale
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-surface hover:text-white transition-colors">
              <Users className="w-5 h-5" /> Dossiers Patients
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-surface hover:text-white transition-colors">
              <BedDouble className="w-5 h-5" /> Gestion Lits
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <button onClick={onNavigate} className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-full px-3 py-2">
            <ArrowLeft className="w-4 h-4" /> Quitter la Démo
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden animate-fade-in">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-surface/50 backdrop-blur-md flex items-center justify-between px-8 shrink-0">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Rechercher un patient, un lit, un médecin..." 
              className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg text-white/60 hover:bg-surface hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-primary p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a1628] border-2 border-transparent" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Tableau de bord Général</h1>
              <p className="text-sm text-white/50">Bienvenue sur le centre de contrôle de l'Hôpital Ndamatou.</p>
            </div>
            <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Nouvelle Admission
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-5 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-surface border border-border">
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-surface ${stat.trend.includes('-') ? 'text-red-400' : 'text-accent'}`}>
                    {stat.trend}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                  <p className="text-xs text-white/50 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Urgences (takes 2 columns) */}
            <div className="col-span-2 glass-panel p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" /> Flux des Urgences
                </h2>
                <button className="text-xs text-primary font-medium hover:underline">Voir tout</button>
              </div>
              <div className="space-y-4">
                {[
                  { id: "URG-847", name: "Amadou Diallo", triage: "Niveau 2 (Rouge)", time: "10 min", status: "Pris en charge" },
                  { id: "URG-848", name: "Sokhna Ndiaye", triage: "Niveau 3 (Orange)", time: "25 min", status: "En attente médecin" },
                  { id: "URG-849", name: "Ousmane Fall", triage: "Niveau 4 (Vert)", time: "45 min", status: "Salle d'attente" },
                ].map((urg, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-surface/50 border border-border/50 hover:bg-surface transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center font-mono text-xs text-white/40">
                        {urg.id.split('-')[1]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{urg.name}</p>
                        <p className="text-xs text-white/50 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" /> Attente: {urg.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${urg.triage.includes('Rouge') ? 'bg-red-500/10 text-red-500' : urg.triage.includes('Orange') ? 'bg-orange-500/10 text-orange-400' : 'bg-accent/10 text-accent'}`}>
                        {urg.triage}
                      </span>
                      <span className="text-xs text-white/60 w-32 text-right">{urg.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capacités lits */}
            <div className="glass-panel p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-lg font-bold mb-6">Tension par Service</h2>
              <div className="space-y-6">
                {[
                  { label: "Réanimation", pct: 95, color: "bg-red-500" },
                  { label: "Médecine Interne", pct: 82, color: "bg-orange-400" },
                  { label: "Chirurgie", pct: 60, color: "bg-primary" },
                  { label: "Maternité", pct: 45, color: "bg-accent" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">{s.label}</span>
                      <span className="font-bold">{s.pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
