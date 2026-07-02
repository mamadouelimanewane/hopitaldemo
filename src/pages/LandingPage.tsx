import { Activity, Shield, Zap, ChevronRight, Stethoscope, Brain, Database, HeartPulse } from 'lucide-react';

interface Props {
  onNavigate: () => void;
}

export default function LandingPage({ onNavigate }: Props) {
  const features = [
    { icon: <Activity className="w-6 h-6 text-primary" />, title: "34 Modules Intégrés", desc: "De la prise de rendez-vous à la chirurgie, tout est centralisé." },
    { icon: <Brain className="w-6 h-6 text-secondary" />, title: "Diagnostic IA", desc: "Assistance au diagnostic propulsée par des algorithmes de pointe." },
    { icon: <Shield className="w-6 h-6 text-accent" />, title: "Sécurité Maximale", desc: "Conformité stricte aux normes médicales et chiffrement bout en bout." },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Temps Réel", desc: "Données synchronisées instantanément entre tous les services." },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[150px] mix-blend-screen" />
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
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">Découvrir</a>
          <a href="#" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">Solutions</a>
          <button onClick={onNavigate} className="btn-primary ml-4 group flex items-center gap-2 py-2.5">
            Voir la Démo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto w-full pt-12 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-white/90">Prêt pour le déploiement immédiat</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          L'Hôpital du Futur,<br />
          <span className="text-gradient">Aujourd'hui.</span>
        </h1>
        
        <p className="text-xl text-white/60 mb-12 max-w-2xl font-light animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Ndamatou.Suite est la plateforme hospitalière unifiée la plus avancée. 
          Gérez vos patients, votre logistique, et vos finances avec une fluidité absolue.
        </p>
        
        <div className="flex items-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button onClick={onNavigate} className="btn-primary text-lg px-8 py-4 flex items-center gap-3 group">
            <HeartPulse className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Lancer le Dashboard
          </button>
          <button className="btn-outline text-lg px-8 py-4 flex items-center gap-3">
            <Database className="w-5 h-5" />
            Architecture Technique
          </button>
        </div>
      </main>

      {/* Features Grid */}
      <div className="relative z-10 w-full border-t border-border bg-background/50 backdrop-blur-3xl py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-6 animate-slide-up" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-4 border border-border">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
