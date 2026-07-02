import { useState } from 'react';
import { ArrowLeft, Play, Lock, CheckCircle2, Database, HelpCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';
import type { AppMetadata } from '../lib/appsMetadata';
import BlockedModal from '../components/BlockedModal';

interface Props {
  app: AppMetadata;
  onBack: () => void;
}

// Icônes tournantes pour les bénéfices
const BENEFIT_ICONS = [
  <TrendingUp className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
  <Clock className="w-5 h-5" />,
  <Award className="w-5 h-5" />,
];

const BENEFIT_COLORS = [
  { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
];

const BENEFIT_STYLES = [
  {
    bg: "bg-gradient-to-br from-cyan-500/10 via-cyan-950/20 to-transparent",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/5 hover:shadow-cyan-400/20",
    numText: "text-cyan-500/20 group-hover:text-cyan-400/40"
  },
  {
    bg: "bg-gradient-to-br from-indigo-500/10 via-indigo-950/20 to-transparent",
    border: "border-indigo-500/30 hover:border-indigo-400/60",
    text: "text-indigo-400",
    glow: "shadow-indigo-500/5 hover:shadow-indigo-400/20",
    numText: "text-indigo-500/20 group-hover:text-indigo-400/40"
  },
  {
    bg: "bg-gradient-to-br from-emerald-500/10 via-emerald-950/20 to-transparent",
    border: "border-emerald-500/30 hover:border-emerald-400/60",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/5 hover:shadow-emerald-400/20",
    numText: "text-emerald-500/20 group-hover:text-emerald-400/40"
  },
  {
    bg: "bg-gradient-to-br from-amber-500/10 via-amber-950/20 to-transparent",
    border: "border-amber-500/30 hover:border-amber-400/60",
    text: "text-amber-400",
    glow: "shadow-amber-500/5 hover:shadow-amber-400/20",
    numText: "text-amber-500/20 group-hover:text-amber-400/40"
  }
];

export default function AppDemoDetail({ app, onBack }: Props) {
  const [isExploring, setIsExploring] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060c16] text-white flex flex-col relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-100px] w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[130px]" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 border-b border-white/[0.06] bg-[#0a1424]/90 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="p-2 rounded-xl hover:bg-white/10 border border-white/[0.08] hover:border-white/[0.2] text-white/70 hover:text-white transition-all flex items-center justify-center cursor-pointer relative z-30"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{app.emoji}</span>
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                {app.name}
                <span className="text-[10px] tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-2.5 py-0.5 rounded-full">
                  {app.categoryLabel}
                </span>
              </h2>
              <p className="text-xs text-white/40">{app.tagline}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isExploring ? (
            <button
              onClick={() => setIsExploring(true)}
              className="btn-primary py-2 px-5 text-sm flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Play className="w-4 h-4 fill-current" /> Lancer la démo
            </button>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <Lock className="w-3.5 h-3.5" /> MODE DÉMONSTRATION
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col overflow-y-auto">
        {!isExploring ? (
          /* ===================================================================== */
          /* PAGE COMMERCIALE — Présentation complète de l'application             */
          /* ===================================================================== */
          <div className="animate-fade-in">
            {/* HERO SECTION */}
            <div className="relative border-b border-white/[0.06] bg-gradient-to-br from-[#0a1830] via-[#080f1e] to-[#060c18] py-20 px-6 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px]" />
              </div>
              <div className="relative max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-semibold text-white/60 uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Module Disponible · Ndamatou.Suite
                </div>
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center text-6xl mx-auto mb-6 shadow-2xl shadow-cyan-500/10">
                  {app.emoji}
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
                  {app.name}
                </h1>
                <p className="text-lg font-semibold text-cyan-400 mb-6 tracking-wide">{app.tagline}</p>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                  {app.pitch}
                </p>
              </div>
            </div>

            {/* STATS ROW */}
            <div className="bg-[#08101e] border-b border-white/[0.06] py-8 px-6">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {app.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className={`p-2.5 rounded-xl border ${BENEFIT_COLORS[i % BENEFIT_COLORS.length].bg} ${BENEFIT_COLORS[i % BENEFIT_COLORS.length].border} ${BENEFIT_COLORS[i % BENEFIT_COLORS.length].text}`}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-xs text-white/40 font-medium uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BÉNÉFICES DÉTAILLÉS */}
            <div className="py-20 px-6 bg-[#050b16] relative overflow-hidden border-t border-white/[0.04]">
              {/* Extra background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

              <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
                    Valeur Ajoutée & Impact
                  </div>
                  <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                    Ce que ce module <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">vous apporte</span>
                  </h2>
                  <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
                    Chaque fonctionnalité a été conçue spécifiquement pour relever les défis de l'Hôpital Ndamatou.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {app.valueAdded.map((val, idx) => {
                    const style = BENEFIT_STYLES[idx % BENEFIT_STYLES.length];
                    return (
                      <div
                        key={idx}
                        className={`group relative rounded-2xl border ${style.border} ${style.bg} p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${style.glow} overflow-hidden`}
                      >
                        {/* Neon floating number */}
                        <div className={`absolute top-4 right-6 text-6xl font-black ${style.numText} select-none pointer-events-none transition-colors duration-300 font-mono`}>
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] ${style.text} mb-4 shrink-0 shadow-inner`}>
                            {BENEFIT_ICONS[idx % BENEFIT_ICONS.length]}
                          </div>
                          <div className="flex-1">
                            <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] ${style.text} mb-3`}>
                              Bénéfice Clé
                            </span>
                            <p className="text-base font-bold text-white leading-relaxed">{val}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="py-20 px-6 bg-gradient-to-t from-[#040810] to-[#050b16] relative overflow-hidden border-t border-white/[0.04]">
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 mb-6">
                  Démonstration Interactive
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à explorer le module ?</h3>
                <p className="text-white/50 mb-10 text-base max-w-xl mx-auto leading-relaxed">
                  Accédez au tableau de bord simulé en conditions réelles pour vous faire une idée précise de l'ergonomie et de la simplicité de l'interface de travail.
                </p>
                <button
                  onClick={() => setIsExploring(true)}
                  className="btn-primary text-lg px-12 py-4 flex items-center gap-3 mx-auto shadow-2xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Play className="w-5 h-5 fill-current" /> Explorer le Tableau de Bord
                </button>
                <p className="text-xs text-white/30 mt-4 flex items-center justify-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> Données simulées • Toutes les actions sont désactivées en version démo
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* ===================================================================== */
          /* TABLEAU DE BORD SIMULÉ                                                */
          /* ===================================================================== */
          <div className="p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col gap-8 animate-fade-in">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/[0.06]">
              <div>
                <h3 className="text-2xl font-black tracking-tight mb-1">
                  Console {app.emoji} {app.name}
                </h3>
                <p className="text-sm text-white/40">Simulation en conditions réelles d'exploitation hospitalière.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleActionClick}
                  className="btn-primary py-2.5 px-5 text-sm flex items-center gap-2"
                >
                  Action Principale
                </button>
                <button
                  onClick={() => setIsExploring(false)}
                  className="btn-outline py-2.5 px-4 text-sm hover:border-cyan-500/30"
                >
                  ← Voir la Présentation
                </button>
              </div>
            </div>

            {/* Stats Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 shrink-0">
              {app.stats.map((stat, i) => {
                const col = BENEFIT_COLORS[i % BENEFIT_COLORS.length];
                return (
                  <div key={i} className={`rounded-2xl border ${col.border} ${col.bg} p-5 flex justify-between items-center`}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-white/40">{stat.label}</p>
                      <h4 className={`text-3xl font-black tracking-tight ${col.text}`}>{stat.value}</h4>
                    </div>
                    <div className={`p-2.5 rounded-xl ${col.bg} border ${col.border}`}>
                      <CheckCircle2 className={`w-5 h-5 ${col.text}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Data Table */}
              <div className="lg:col-span-2 rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden shadow-2xl">
                <div className="px-6 py-5 border-b border-white/[0.06] flex justify-between items-center bg-white/[0.02]">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-cyan-400" /> {app.itemsTitle}
                  </h4>
                  <button
                    onClick={handleActionClick}
                    className="text-xs text-cyan-400 font-bold hover:underline"
                  >
                    + Exporter CSV
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white/[0.02] border-b border-white/[0.06] text-[10px] uppercase font-bold text-white/30 tracking-wider">
                        {app.itemsHeaders.map((head) => (
                          <th key={head.key} className="px-6 py-3.5 text-left">{head.label}</th>
                        ))}
                        <th className="px-6 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {app.items.map((item, idx) => (
                        <tr key={idx} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                          {app.itemsHeaders.map((head) => (
                            <td key={head.key} className="px-6 py-4 text-sm font-semibold text-white/80">
                              {item[head.key]}
                            </td>
                          ))}
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={handleActionClick}
                              className="text-xs font-bold text-cyan-400 hover:text-white transition-colors bg-cyan-500/10 hover:bg-cyan-500 px-3 py-1.5 rounded-lg border border-cyan-500/20"
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

              {/* Auxiliary Panel */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col gap-5">
                <h4 className="font-bold text-white text-sm">
                  {app.chartTitle ?? "Indicateurs de Performance"}
                </h4>

                <div className="flex flex-col gap-4">
                  {(app.chartData ?? [
                    { label: "Capacité disponible", pct: 70, color: "bg-emerald-500" },
                    { label: "Capacité affectée", pct: 20, color: "bg-cyan-500" },
                    { label: "Capacité critique", pct: 10, color: "bg-red-500" }
                  ]).map((data, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-semibold text-white/60 mb-1.5">
                        <span>{data.label}</span>
                        <span className="font-black text-white">{data.pct}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${data.color} rounded-full transition-all duration-700`}
                          style={{ width: `${data.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] flex gap-3 items-start">
                  <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/40 leading-relaxed">
                    En production, ce panneau se connecte en temps réel à vos flux IoT, bases médicales et automates hospitaliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Blocked Modal */}
      <BlockedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appName={app.name}
      />
    </div>
  );
}
