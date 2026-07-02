import { X, Lock, PhoneCall, ShoppingCart } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
}

export default function BlockedModal({ isOpen, onClose, appName }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-[#0d1e36] p-6 shadow-2xl animate-slide-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
          <Lock className="w-6 h-6 animate-pulse" />
        </div>

        {/* Texts */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Version de Démonstration</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Le module <strong className="text-primary">{appName}</strong> est disponible à la commande.
            Toutes les actions interactives sont désactivées dans cette version d'aperçu.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button 
            onClick={onClose}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Passer Commande
          </button>
          <button 
            onClick={onClose}
            className="w-full btn-outline py-3 flex items-center justify-center gap-2 border-border/80 hover:border-primary/50"
          >
            <PhoneCall className="w-4 h-4 text-primary" /> Contacter le Support Commercial
          </button>
        </div>
      </div>
    </div>
  );
}
