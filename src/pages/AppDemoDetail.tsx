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
            onClick={onBack}
            className="p-2 rounded-xl hover:bg-white/5 border border-white/[0.08] hover:border-white/[0.15] text-white/70 hover:text-white transition-all flex items-center justify-center"
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
            <div className="py-16 px-6 bg-[#070d1a]">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black mb-3">Ce que ce module vous apporte</h2>
                  <p className="text-white/40 text-base max-w-xl mx-auto">Chaque fonctionnalité a été conçue spécifiquement pour les défis hospitaliers de l'Hôpital Ndamatou.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {app.valueAdded.map((val, idx) => {
                    const col = BENEFIT_COLORS[idx % BENEFIT_COLORS.length];
                    return (
                      <div
                        key={idx}
                        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-xl overflow-hidden"
                      >
                        {/* Number indicator */}
                        <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.04] select-none pointer-events-none">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${col.bg} border ${col.border} ${col.text} mb-4`}>
                          {BENEFIT_ICONS[idx % BENEFIT_ICONS.length]}
                        </div>
                        
                        <p className="text-base font-semibold text-white/90 leading-relaxed">{val}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="py-16 px-6 bg-gradient-to-t from-[#060c16] to-[#070d1a] text-center border-t border-white/[0.06]">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-black mb-3">Prêt à explorer le module ?</h3>
                <p className="text-white/40 mb-8 text-base">Accédez au tableau de bord simulé en conditions réelles pour vous faire une idée précise de l'interface de travail.</p>
                <button
                  onClick={() => setIsExploring(true)}
                  className="btn-primary text-lg px-12 py-4 flex items-center gap-3 mx-auto shadow-xl shadow-primary/20"
                >
                  <Play className="w-5 h-5 fill-current" /> Explorer le Tableau de Bord
                </button>
                <p className="text-xs text-white/20 mt-4 flex items-center justify-center gap-1.5">
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
