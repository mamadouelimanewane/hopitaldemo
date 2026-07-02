export interface AppMetadata {
  id: string;
  name: string;
  emoji: string;
  category: 'soins' | 'flux' | 'gestion' | 'reseau';
  categoryLabel: string;
  tagline: string;
  pitch: string;
  valueAdded: string[];
  stats: { label: string; value: string; color: string }[];
  itemsTitle: string;
  items: { [key: string]: string | number }[];
  itemsHeaders: { key: string; label: string }[];
  chartTitle?: string;
  chartData?: { label: string; pct: number; color: string }[];
}

export const APPS_METADATA: AppMetadata[] = [
  {
    id: "ambu-track",
    name: "Ambu-Track",
    emoji: "🚑",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Régulation des Ambulances & SAMU",
    pitch: "Suivi en temps réel de la flotte d'ambulances pour optimiser le temps de réponse lors des interventions d'urgence.",
    valueAdded: [
      "Géolocalisation GPS en temps réel des ambulances",
      "Calcul d'itinéraire optimal pour éviter les embouteillages de Touba",
      "Télétransmission des constantes du patient en route vers les urgences",
      "Coordination directe avec le service de régulation"
    ],
    stats: [
      { label: "Ambulances Actives", value: "8 / 12", color: "text-primary" },
      { label: "Temps de réponse moyen", value: "11 min", color: "text-accent" },
      { label: "Urgences en cours", value: "3", color: "text-red-500" }
    ],
    itemsTitle: "État des Véhicules de Secours",
    itemsHeaders: [
      { key: "immat", label: "Véhicule" },
      { key: "chauffeur", label: "Chauffeur" },
      { key: "status", label: "Statut" },
      { key: "dest", label: "Destination" }
    ],
    items: [
      { immat: "DK-104-AB", chauffeur: "Modou Fall", status: "En intervention", dest: "Quartier Darou Marnane" },
      { immat: "DB-302-AA", chauffeur: "Cheikh Ndiaye", status: "Retour base", dest: "Hôpital Ndamatou" },
      { immat: "SL-482-CC", chauffeur: "Ousmane Diop", status: "Disponible", dest: "Base centrale" }
    ],
    chartTitle: "Taux d'occupation des ambulances",
    chartData: [
      { label: "Urgences Vitales", pct: 60, color: "bg-red-500" },
      { label: "Transferts simples", pct: 30, color: "bg-primary" },
      { label: "Maintenance", pct: 10, color: "bg-yellow-500" }
    ]
  },
  {
    id: "blood-sync",
    name: "Blood-Sync",
    emoji: "🩸",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Banque de Sang & Transfusion",
    pitch: "Gestion intelligente des stocks de poches de sang et mise en relation rapide avec les donneurs pour éviter les pénuries critiques.",
    valueAdded: [
      "Alertes automatiques en cas de niveau critique sur un groupe sanguin",
      "Gestion de la chaîne du froid des glacières de transport",
      "Base de données sécurisée des donneurs volontaires",
      "Traçabilité complète de la poche de sang du donneur au receveur"
    ],
    stats: [
      { label: "Stock Total", value: "142 poches", color: "text-accent" },
      { label: "Alerte Groupe O-", value: "CRITIQUE", color: "text-red-500" },
      { label: "Demandes en attente", value: "4", color: "text-primary" }
    ],
    itemsTitle: "État des Réserves par Groupe",
    itemsHeaders: [
      { key: "groupe", label: "Groupe Sanguin" },
      { key: "poches", label: "Poches disponibles" },
      { key: "alerte", label: "Niveau d'Alerte" }
    ],
    items: [
      { groupe: "O négatif (O-)", poches: 3, alerte: "CRITIQUE (Alerte SMS)" },
      { groupe: "A positif (A+)", poches: 45, alerte: "Sécurisé" },
      { groupe: "B positif (B+)", poches: 28, alerte: "Modéré" },
      { groupe: "O positif (O+)", poches: 54, alerte: "Sécurisé" }
    ],
    chartTitle: "Répartition par Catégorie de Réserve",
    chartData: [
      { label: "Stock Sécurisé", pct: 70, color: "bg-accent" },
      { label: "Stock Alerte", pct: 20, color: "bg-yellow-500" },
      { label: "Stock Critique", pct: 10, color: "bg-red-500" }
    ]
  },
  {
    id: "chatbot-triage",
    name: "Chatbot Triage",
    emoji: "🤖",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "IA d'Orientation & Triage",
    pitch: "Assistant conversationnel intelligent pour orienter les patients à leur arrivée et évaluer le niveau d'urgence médicale.",
    valueAdded: [
      "Triage automatisé basé sur les protocoles officiels",
      "Disponible 24/7 en français et Wolof",
      "Désengorgement des urgences de l'Hôpital",
      "Génération d'une fiche d'admission pré-remplie"
    ],
    stats: [
      { label: "Conversations du jour", value: "312", color: "text-primary" },
      { label: "Temps moyen d'orientation", value: "1.5 min", color: "text-accent" },
      { label: "Précision du triage", value: "94.2%", color: "text-secondary" }
    ],
    itemsTitle: "Dernières Orientations IA",
    itemsHeaders: [
      { key: "patient", label: "Patient" },
      { key: "symptomes", label: "Symptômes" },
      { key: "gravite", label: "Orientation" }
    ],
    items: [
      { patient: "Mame Diarra Seck", symptomes: "Douleur thoracique irradiante", gravite: "Urgences Vitales (Rouge)" },
      { patient: "Abdoulaye Sow", symptomes: "Fièvre 39° + toux sèche", gravite: "Médecine Générale (Vert)" },
      { patient: "Sokhna Fall", symptomes: "Traumatisme cheville suspect", gravite: "Traumatologie (Orange)" }
    ]
  },
  {
    id: "chncak-academy",
    name: "Ndamatou Academy",
    emoji: "🎓",
    category: "gestion",
    categoryLabel: "Gestion & RH",
    tagline: "Formation Médicale Continue",
    pitch: "Plateforme d'e-learning et de formation continue pour le personnel médical, paramédical et administratif de l'Hôpital.",
    valueAdded: [
      "Suivi des heures de formation continue obligatoire",
      "Évaluations et quiz interactifs certifiants",
      "Bibliothèque de protocoles de soins internes",
      "Classes virtuelles pour les formations inter-hospitalières"
    ],
    stats: [
      { label: "Apprenants actifs", value: "247", color: "text-secondary" },
      { label: "Modules disponibles", value: "34", color: "text-primary" },
      { label: "Taux de réussite", value: "89%", color: "text-accent" }
    ],
    itemsTitle: "Formations Clés de la Semaine",
    itemsHeaders: [
      { key: "titre", label: "Formation" },
      { key: "formateur", label: "Formateur" },
      { key: "inscrits", label: "Apprenants" }
    ],
    items: [
      { titre: "Soins intensifs en néonatologie", formateur: "Dr. Fatou Mbaye", inscrits: 28 },
      { titre: "Techniques de dialyse avancées", formateur: "Dr. Ousmane Fall", inscrits: 19 },
      { titre: "Radiologie numérique & IA", formateur: "Pr. Amadou Diallo", inscrits: 42 }
    ]
  },
  {
    id: "chncak-connect",
    name: "Ndamatou-Connect",
    emoji: "🤝",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Portail Collaboratif des Praticiens",
    pitch: "Réseau social professionnel sécurisé pour la collaboration, le partage de cas cliniques complexes et la téléexpertise.",
    valueAdded: [
      "Messagerie instantanée cryptée de bout en bout",
      "Partage d'images médicales DICOM anonymisées",
      "Demandes de second avis médical simplifiées",
      "Groupes thématiques par spécialité"
    ],
    stats: [
      { label: "Médecins inscrits", value: "148", color: "text-primary" },
      { label: "Cas cliniques partagés", value: "89", color: "text-accent" },
      { label: "Second avis validés", value: "34", color: "text-secondary" }
    ],
    itemsTitle: "Demandes de Second Avis en Cours",
    itemsHeaders: [
      { key: "demandeur", label: "Médecin" },
      { key: "specialite", label: "Spécialité" },
      { key: "status", label: "Statut" }
    ],
    items: [
      { demandeur: "Dr. Sow (Urgences)", specialite: "Cardiologie", status: "En attente du Pr. Ndiaye" },
      { demandeur: "Dr. Mbaye (Pédiatrie)", specialite: "Neurologie", status: "Avis rendu par Dr. Sy" }
    ]
  },
  {
    id: "chncak-med-learn",
    name: "Ndamatou MedLearn",
    emoji: "📖",
    category: "gestion",
    categoryLabel: "Gestion & RH",
    tagline: "Base Documentaire Médicale",
    pitch: "Outil d'accès rapide aux connaissances médicales, thèses, guides thérapeutiques nationaux et internationaux.",
    valueAdded: [
      "Moteur de recherche sémantique indexant 10k+ articles scientifiques",
      "Mises à jour automatiques des recommandations OMS",
      "Accès hors-ligne aux protocoles d'urgence",
      "Intégration d'outils de calcul de doses médicamenteuses"
    ],
    stats: [
      { label: "Documents indexés", value: "12 400", color: "text-primary" },
      { label: "Consultations / mois", value: "2 840", color: "text-accent" },
      { label: "Protocoles d'urgence", value: "87", color: "text-red-500" }
    ],
    itemsTitle: "Derniers Documents Mis en Ligne",
    itemsHeaders: [
      { key: "titre", label: "Document" },
      { key: "auteur", label: "Catégorie" },
      { key: "date", label: "Mise en ligne" }
    ],
    items: [
      { titre: "Guide de prise en charge du Paludisme Grave 2026", auteur: "Ministère de la Santé", date: "20/06/2026" },
      { titre: "Protocole Hygiène Covid-19 & Grippe A", auteur: "Comité Qualité", date: "15/06/2026" }
    ]
  },
  {
    id: "chncak-predict-ia",
    name: "Predict-IA",
    emoji: "📈",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Prédiction de l'Affluence Hospitalière",
    pitch: "Algorithme d'intelligence artificielle anticipant l'affluence aux urgences et l'occupation des lits à 7 jours.",
    valueAdded: [
      "Prévision des pics d'affluence (Magal de Touba, hivernages)",
      "Optimisation de la planification des plannings de garde",
      "Alerte précoce en cas de risque de saturation des services",
      "Économies de coûts d'exploitation et de personnel de réserve"
    ],
    stats: [
      { label: "Précision des prédictions", value: "91.8%", color: "text-accent" },
      { label: "Affluence demain (Prévu)", value: "+14% (Moyenne)", color: "text-primary" },
      { label: "Alerte tension", value: "Aucune", color: "text-green-500" }
    ],
    itemsTitle: "Prévisions des Entrées Urgences",
    itemsHeaders: [
      { key: "jour", label: "Jour" },
      { key: "prev", label: "Entrées Prévues" },
      { key: "confiance", label: "Taux de Confiance" }
    ],
    items: [
      { jour: "Lundi (Demain)", prev: "112 patients", confiance: "94%" },
      { jour: "Mardi", prev: "94 patients", confiance: "91%" },
      { jour: "Mercredi", prev: "134 patients (Pic attendu)", confiance: "88%" }
    ]
  },
  {
    id: "dmp-gateway",
    name: "DMP-Gateway",
    emoji: "📁",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Passerelle Dossier Médical Partagé",
    pitch: "Module d'intégration sécurisé pour lier les dossiers patients locaux au Dossier Médical Partagé National du Sénégal.",
    valueAdded: [
      "Synchronisation automatique et transparente en arrière-plan",
      "Conformité avec les normes internationales HL7 et FHIR",
      "Sécurisation des données via cryptographie avancée",
      "Fiche patient unifiée accessible en cas d'urgence nationale"
    ],
    stats: [
      { label: "Dossiers synchronisés", value: "8 470", color: "text-primary" },
      { label: "Statut Passerelle", value: "OPÉRATIONNEL", color: "text-accent" },
      { label: "Délai moyen de synco", value: "2.4s", color: "text-secondary" }
    ],
    itemsTitle: "Flux d'intégration en Temps Réel",
    itemsHeaders: [
      { key: "patient", label: "Patient" },
      { key: "type", label: "Type d'acte" },
      { key: "status", label: "Intégration" }
    ],
    items: [
      { patient: "Amadou Ndour", type: "Compte-rendu IRM", status: "Synchronisé" },
      { patient: "Mariama Bâ", type: "Bilan biologique", status: "Synchronisé" },
      { patient: "Cheikh Fall", type: "Fiche d'admission", status: "En cours" }
    ]
  },
  {
    id: "don-financement",
    name: "Don & Diaspora",
    emoji: "🌍",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Financement Participatif Participatif",
    pitch: "Outil de collecte de dons nationaux et internationaux pour financer l'équipement technologique et les projets solidaires.",
    valueAdded: [
      "Collectes dédiées à des projets spécifiques (Scanner, Dialyse)",
      "Passerelles de paiement locales (Wave, OM) et internationales",
      "Espace donateur transparent montrant l'utilisation des fonds",
      "Programmes de parrainage et de mécénat diaspora"
    ],
    stats: [
      { label: "Fonds récoltés", value: "142M FCFA", color: "text-accent" },
      { label: "Donateurs actifs", value: "2 847", color: "text-primary" },
      { label: "Projets financés", value: "12", color: "text-secondary" }
    ],
    itemsTitle: "Projets Prioritaires en Recherche de Financement",
    itemsHeaders: [
      { key: "projet", label: "Projet" },
      { key: "cible", label: "Objectif (FCFA)" },
      { key: "avanc", label: "Collecté (%)" }
    ],
    items: [
      { projet: "Scanner IRM 3 Tesla", cible: "85M", avanc: "79%" },
      { projet: "4 Générateurs d'hémodialyse", cible: "28M", avanc: "64%" },
      { projet: "Extension du Pavillon Pédiatrique", cible: "45M", avanc: "48%" }
    ]
  },
  {
    id: "don-organes",
    name: "Don d'Organes",
    emoji: "🫀",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Registre & Coordination des Dons",
    pitch: "Gestion éthique et sécurisée du registre de consentement au don d'organes et coordination des greffes rénales.",
    valueAdded: [
      "Registre national de consentement inviolable (chiffré)",
      "Algorithme de compatibilité HLA donneur/receveur",
      "Alertes en temps réel auprès de l'équipe de transplantation",
      "Suivi post-opératoire rigoureux des donneurs vivants"
    ],
    stats: [
      { label: "Inscrits au registre", value: "1 240", color: "text-primary" },
      { label: "Greffes coordonnées", value: "14", color: "text-accent" },
      { label: "Patients sur liste d'attente", value: "189", color: "text-red-500" }
    ],
    itemsTitle: "Suivi des compatibilités en cours",
    itemsHeaders: [
      { key: "receveur", label: "Receveur" },
      { key: "compat", label: "Donneurs potentiels" },
      { key: "urgence", label: "Priorité" }
    ],
    items: [
      { receveur: "Ibrahima Koné", compat: "2 compatibles", urgence: "Haute" },
      { receveur: "Aïssatou Fall", compat: "1 compatible", urgence: "Critique" }
    ]
  },
  {
    id: "eco-hopital",
    name: "Éco-Hôpital",
    emoji: "🌱",
    category: "gestion",
    categoryLabel: "Gestion & RH",
    tagline: "Optimisation de l'Empreinte Écologique",
    pitch: "Suivi et réduction des consommations énergétiques, de l'utilisation de plastique et gestion du tri écologique hospitalier.",
    valueAdded: [
      "Tableau de bord de suivi de consommation d'eau et électricité",
      "Indicateurs de réduction de papier (objectif 100% numérique)",
      "Optimisation du tri des déchets en interne",
      "Suivi des économies financières générées"
    ],
    stats: [
      { label: "Économie Énergie / an", value: "-14.2%", color: "text-accent" },
      { label: "Déchets recyclés / mois", value: "1.2 tonne", color: "text-primary" },
      { label: "Réduction papier", value: "85%", color: "text-secondary" }
    ],
    itemsTitle: "Objectifs Éco-Responsables de l'Hôpital",
    itemsHeaders: [
      { key: "dept", label: "Département" },
      { key: "obj", label: "Objectif" },
      { key: "avancement", label: "Statut" }
    ],
    items: [
      { dept: "Administration", obj: "100% Sans Papier", avancement: "92% d'achèvement" },
      { dept: "Bloc Opératoire", obj: "Recyclage matériel plastique", avancement: "En cours d'expérimentation" },
      { dept: "Cuisine", obj: "Compostage des biodéchets", avancement: "Opérationnel" }
    ]
  },
  {
    id: "epidemio-watch",
    name: "Épidémio-Watch",
    emoji: "🦠",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Surveillance Épidémiologique",
    pitch: "Système d'alerte précoce pour détecter et surveiller la propagation des maladies infectieuses (Paludisme, Dengue).",
    valueAdded: [
      "Cartographie en temps réel des cas signalés",
      "Calcul des taux de reproduction et d'incidence",
      "Alertes instantanées SMS destinées aux autorités sanitaires",
      "Corrélation automatique avec les données climatiques"
    ],
    stats: [
      { label: "Cas signalés aujourd'hui", value: "47", color: "text-red-500" },
      { label: "Maladies sous surveillance", value: "8", color: "text-primary" },
      { label: "Zones en alerte active", value: "2", color: "text-accent" }
    ],
    itemsTitle: "Alerte Maladies Infectieuses",
    itemsHeaders: [
      { key: "maladie", label: "Maladie" },
      { key: "cas", label: "Cas cette semaine" },
      { key: "tend", label: "Tendance" }
    ],
    items: [
      { maladie: "Paludisme", cas: 124, tend: "+23% (Hausse saisonnière)" },
      { maladie: "Dengue", cas: 8, tend: "Stable" },
      { maladie: "Rougeole", cas: 2, tend: "-80% (Campagne vaccinale active)" }
    ]
  },
  {
    id: "factu-care",
    name: "FactuCare",
    emoji: "💳",
    category: "gestion",
    categoryLabel: "Gestion & RH",
    tagline: "Facturation & Assurances",
    pitch: "Facturation automatisée des actes médicaux et gestion du tiers payant avec la CMU et les IPM.",
    valueAdded: [
      "Calculatrice automatique de tarification des actes",
      "Télétransmission instantanée aux assurances",
      "Suivi des encaissements physiques et mobiles (Orange Money, Wave)",
      "Reporting financier quotidien et mensuel automatique"
    ],
    stats: [
      { label: "Encaissé ce jour", value: "2.4M FCFA", color: "text-accent" },
      { label: "Dossiers CMU traités", value: "112", color: "text-primary" },
      { label: "Taux de recouvrement", value: "89%", color: "text-secondary" }
    ],
    itemsTitle: "Factures Récentes à Traiter",
    itemsHeaders: [
      { key: "patient", label: "Patient" },
      { key: "acte", label: "Acte médical" },
      { key: "montant", label: "Montant" },
      { key: "status", label: "Statut" }
    ],
    items: [
      { patient: "Abdoulaye Diop", acte: "Scanner cérébral", montant: "45 000 FCFA", status: "Payé" },
      { patient: "Aminata Sall", acte: "Césarienne + Séjour 3 jours", montant: "150 000 FCFA", status: "Tiers-payant IPM" },
      { patient: "Oumar Ndiaye", acte: "Consultation générale", montant: "10 000 FCFA", status: "En attente" }
    ]
  },
  {
    id: "hemo-care",
    name: "Hémo-Care",
    emoji: "🏥",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Gestion de l'Hémodialyse",
    pitch: "Suivi clinique personnalisé des insuffisants rénaux chroniques et planification intelligente des séances de dialyse.",
    valueAdded: [
      "Planification des lits et machines de dialyse par session",
      "Suivi de la courbe de poids et des paramètres cliniques du patient",
      "Gestion des stocks de filtres, concentrés et tubulures",
      "Module d'urgence en cas de complication intra-dialytique"
    ],
    stats: [
      { label: "Patients réguliers", value: "124", color: "text-primary" },
      { label: "Séances aujourd'hui", value: "48 / 48", color: "text-accent" },
      { label: "Générateurs actifs", value: "16", color: "text-secondary" }
    ],
    itemsTitle: "Séances de Dialyse - Session en cours",
    itemsHeaders: [
      { key: "lit", label: "Poste" },
      { key: "patient", label: "Patient" },
      { key: "duree", label: "Durée Restante" },
      { key: "debit", label: "Débit sanguin" }
    ],
    items: [
      { lit: "Poste 01", patient: "Cheikh Tidiane Sy", duree: "1h45", debit: "300 ml/min" },
      { lit: "Poste 02", patient: "Awa Ndiaye", duree: "2h15", debit: "280 ml/min" },
      { lit: "Poste 03", patient: "Mamadou Fall", duree: "0h30", debit: "320 ml/min" }
    ]
  },
  {
    id: "ia-diagnostic",
    name: "IA Diagnostic",
    emoji: "🧠",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Intelligence Artificielle de Diagnostic",
    pitch: "Outil d'intelligence artificielle assistant les radiologues et cardiologues dans l'interprétation des images et des signaux.",
    valueAdded: [
      "Détection automatisée des pneumonies sur radio thoracique",
      "Analyse d'ECG 12 dérivations en temps réel",
      "Calcul des indices de gravité clinique en oncologie",
      "Précision de diagnostic améliorée de 30% en moyenne"
    ],
    stats: [
      { label: "Scans analysés / jour", value: "1 240", color: "text-primary" },
      { label: "Taux de précision IA", value: "94.7%", color: "text-accent" },
      { label: "Temps d'analyse moyen", value: "3.2s", color: "text-secondary" }
    ],
    itemsTitle: "Analyses IA en cours",
    itemsHeaders: [
      { key: "pat", label: "Patient" },
      { key: "type", label: "Type d'examen" },
      { key: "res", label: "Alerte IA" },
      { key: "conf", label: "Confiance" }
    ],
    items: [
      { pat: "Ousmane Diop", type: "Radio Thorax", res: "Foyer infectieux suspect", conf: "89%" },
      { pat: "Amadou Ndour", type: "IRM Cérébrale", res: "Anévrisme détecté", conf: "92%" },
      { pat: "Aïssatou Fall", type: "ECG", res: "Rythme normal", conf: "97%" }
    ]
  },
  {
    id: "indoor-guide",
    name: "Indoor-Guide",
    emoji: "🗺️",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Guidage Intérieur des Patients",
    pitch: "Système de géolocalisation et de guidage interactif indoor pour aider les patients à trouver leur service dans l'hôpital.",
    valueAdded: [
      "Cartographie 3D de tous les pavillons de l'hôpital",
      "Itinéraire adapté pour les personnes à mobilité réduite",
      "Bornes tactiles de guidage couplées à l'application mobile",
      "Optimisation du flux des visiteurs"
    ],
    stats: [
      { label: "Recherches de chemin", value: "1 480 / jour", color: "text-primary" },
      { label: "Temps d'orientation gagné", value: "8 min", color: "text-accent" },
      { label: "Bornes fonctionnelles", value: "8 / 8", color: "text-secondary" }
    ],
    itemsTitle: "Destinations les plus recherchées",
    itemsHeaders: [
      { key: "dest", label: "Destination" },
      { key: "freq", label: "Recherches (Jour)" },
      { key: "attente", label: "Temps de trajet moyen" }
    ],
    items: [
      { dest: "Centre d'Hémodialyse", freq: 450, attente: "2 min 30s" },
      { dest: "Radiologie & Scanner", freq: 310, attente: "1 min 45s" },
      { dest: "Laboratoire d'analyses", freq: 280, attente: "3 min" }
    ]
  },
  {
    id: "lab-connect",
    name: "Lab-Connect",
    emoji: "🔬",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Laboratoire Connecté",
    pitch: "Interconnexion des automates d'analyses médicales et transmission automatique des résultats aux dossiers patients.",
    valueAdded: [
      "Connexion bidirectionnelle avec les automates Sysmex et Cobas",
      "Élimination complète des erreurs de saisie manuelle",
      "Alerte automatique par SMS/Email pour les valeurs critiques",
      "Validation biologique en ligne par signature électronique"
    ],
    stats: [
      { label: "Analyses en cours", value: "342", color: "text-primary" },
      { label: "Résultats prêts", value: "89", color: "text-accent" },
      { label: "Délai d'analyse moyen", value: "4.2 heures", color: "text-secondary" }
    ],
    itemsTitle: "Analyses en cours d'analyse",
    itemsHeaders: [
      { key: "num", label: "N° Échantillon" },
      { key: "patient", label: "Patient" },
      { key: "analyse", label: "Examen demandé" },
      { key: "status", label: "Statut" }
    ],
    items: [
      { num: "PRE-4827", patient: "Mame Diarra Seck", analyse: "NFS complète", status: "En cours" },
      { num: "PRE-4828", patient: "Ibrahima Koné", analyse: "Biochimie rénale", status: "Prioritaire" },
      { num: "PRE-4830", patient: "Oumar Ndiaye", analyse: "Uroculture (ECBU)", status: "En culture" }
    ]
  },
  {
    id: "magal-surge",
    name: "Magal-Surge",
    emoji: "🕋",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Planification Spécifique Grand Magal",
    pitch: "Module de planification d'urgence pour faire face à l'affluence massive de patients lors du grand Magal de Touba.",
    valueAdded: [
      "Planification des lits et stocks d'urgence",
      "Mobilisation et gestion des plannings des équipes bénévoles",
      "Connexion en temps réel avec les tentes médicales mobiles",
      "Suivi des incidents majeurs et tri des urgences de masse"
    ],
    stats: [
      { label: "Lits d'urgence réservés", value: "150", color: "text-red-500" },
      { label: "Médecins mobilisés", value: "120", color: "text-accent" },
      { label: "Tentes de secours liées", value: "18", color: "text-primary" }
    ],
    itemsTitle: "Points de Secours Actifs (Période Magal)",
    itemsHeaders: [
      { key: "emplacement", label: "Zone" },
      { key: "type", label: "Type d'Unité" },
      { key: "med", label: "Personnel" },
      { key: "statut", label: "Statut" }
    ],
    items: [
      { emplacement: "Grande Mosquée Touba", type: "Poste Médical Avancé", med: "3 médecins, 6 IDE", statut: "En veille active" },
      { emplacement: "Rond-point Mbacké", type: "Ambulance Stationnée", med: "1 chauffeur, 2 secouristes", statut: "Disponible" },
      { emplacement: "Hôpital Ndamatou", type: "Pavillon de Tri principal", med: "12 médecins urgentistes", statut: "Opérationnel" }
    ]
  },
  {
    id: "mater-neo",
    name: "Mater-Néo",
    emoji: "👶",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Maternité & Néonatologie Connectées",
    pitch: "Suivi obstétrical des patientes, édition informatisée du partogramme et surveillance en néonatologie.",
    valueAdded: [
      "Partogramme dynamique et interactif en temps réel",
      "Suivi de la courbe de croissance foetale et de vaccination",
      "Surveillance de la température et constantes des couveuses connectées",
      "Génération automatique des avis de naissance"
    ],
    stats: [
      { label: "Naissances ce jour", value: "14", color: "text-accent" },
      { label: "Couveuses occupées", value: "6 / 8", color: "text-primary" },
      { label: "Partogrammes actifs", value: "4", color: "text-secondary" }
    ],
    itemsTitle: "Partogrammes et accouchements en cours",
    itemsHeaders: [
      { key: "chambre", label: "Chambre" },
      { key: "pat", label: "Maman" },
      { key: "dil", label: "Dilatation Col" },
      { key: "status", label: "État" }
    ],
    items: [
      { chambre: "Chambre 04", pat: "Fatou Mbaye", dil: "5 cm", status: "Travail phase active" },
      { chambre: "Chambre 01", pat: "Aïssatou Diop", dil: "9 cm", status: "Accouchement imminent" },
      { chambre: "Box Néonat 2", pat: "Bébé Ndiaye", dil: "—", status: "Sous couveuse chauffante (Stable)" }
    ]
  },
  {
    id: "morgue-sync",
    name: "Morgue-Sync",
    emoji: "⚰️",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Gestion de la Chambre Funéraire",
    pitch: "Suivi logistique et administratif de la morgue, enregistrement des décès et aide aux démarches administratives des familles.",
    valueAdded: [
      "Registre de traçabilité des corps numérique infalsifiable",
      "Gestion des casiers réfrigérés (disponibilités, température)",
      "Génération automatique des certificats de décès et de transport",
      "Coordination avec les entreprises de pompes funèbres"
    ],
    stats: [
      { label: "Casiers Disponibles", value: "12 / 24", color: "text-accent" },
      { label: "Corps présents", value: "12", color: "text-primary" },
      { label: "Démarches finalisées", value: "100%", color: "text-secondary" }
    ],
    itemsTitle: "Registre des entrées récentes",
    itemsHeaders: [
      { key: "id", label: "N° Enregistrement" },
      { key: "defunt", label: "Défunt" },
      { key: "casier", label: "Casier" },
      { key: "heure", label: "Entrée" }
    ],
    items: [
      { id: "DEF-2026-084", defunt: "Inconnu (Retrouvé voie publique)", casier: "Casier 04", heure: "Il y a 2h" },
      { id: "DEF-2026-083", defunt: "Serigne Modou Mbacké", casier: "Casier 12", heure: "Hier, 18h30" },
      { id: "DEF-2026-082", defunt: "Fatoumata Diallo", casier: "Casier 08", heure: "Hier, 14h00" }
    ]
  },
  {
    id: "neuroscan-ia",
    name: "NeuroScan-IA",
    emoji: "🧠",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Analyse IRM & Scanner Cérébral par IA",
    pitch: "Module IA ultra-spécifique pour la détection précoce des AVC, des tumeurs cérébrales et des anomalies micro-vasculaires.",
    valueAdded: [
      "Détection automatique des AVC ischémiques et hémorragiques en < 60s",
      "Segmentation 3D automatique des volumes tumoraux",
      "Calcul des indices de perfusion cérébrale",
      "Alerte prioritaire pop-up pour les médecins de garde"
    ],
    stats: [
      { label: "AVC détectés / mois", value: "24", color: "text-red-500" },
      { label: "Précision AVC", value: "96.4%", color: "text-accent" },
      { label: "Temps d'exécution", value: "12s", color: "text-primary" }
    ],
    itemsTitle: "IRM Cérébrales Récentes validées par IA",
    itemsHeaders: [
      { key: "patient", label: "Patient" },
      { key: "diag", label: "Suspicion IA" },
      { key: "score", label: "Confiance" }
    ],
    items: [
      { patient: "Cheikh Bamba Dieng", diag: "Hémorragie méningée mineure", score: "94%" },
      { patient: "Aminata Kane", diag: "Pas d'anomalie visible", score: "99%" }
    ]
  },
  {
    id: "nutri-care",
    name: "Nutri-Care",
    emoji: "🥗",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Suivi Nutritionnel & Diététique",
    pitch: "Outil de dépistage de la dénutrition hospitalière, de prescription de régimes thérapeutiques et de gestion de la restauration clinique.",
    valueAdded: [
      "Dépistage systématique de la dénutrition à l'admission",
      "Prescription personnalisée de compléments nutritionnels",
      "Interconnexion directe avec les cuisines pour la préparation des repas",
      "Fiche diététique intégrée au dossier médical"
    ],
    stats: [
      { label: "Régimes actifs", value: "148", color: "text-primary" },
      { label: "Repas spéciaux / jour", value: "210", color: "text-accent" },
      { label: "Dépistages réalisés", value: "98%", color: "text-secondary" }
    ],
    itemsTitle: "Prescriptions Diététiques Récentes",
    itemsHeaders: [
      { key: "patient", label: "Patient" },
      { key: "regime", label: "Régime Prescrit" },
      { key: "chambre", label: "Chambre" }
    ],
    items: [
      { patient: "Ibrahima Koné", regime: "Sans sel - Hyposodé strict", chambre: "Chambre 104-B" },
      { patient: "Moustapha Sow", regime: "Mixé - Dépistage dénutrition", chambre: "Chambre 212-A" }
    ]
  },
  {
    id: "patient-mobile",
    name: "Espace Patient Mobile",
    emoji: "📱",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Application Mobile Patient",
    pitch: "Espace personnel sécurisé pour le patient afin de gérer ses rendez-vous, recevoir ses ordonnances et consulter ses résultats.",
    valueAdded: [
      "Prise de rendez-vous en ligne facile 24h/24",
      "Accès aux ordonnances dématérialisées (QR Code pour pharmacie)",
      "Paiement des consultations à distance (Wave, OM)",
      "Carnet de vaccination numérique à jour"
    ],
    stats: [
      { label: "Utilisateurs actifs", value: "12.8k", color: "text-accent" },
      { label: "Rendez-vous pris via l'app", value: "65%", color: "text-primary" },
      { label: "Paiements mobiles validés", value: "85M FCFA", color: "text-secondary" }
    ],
    itemsTitle: "Rendez-vous pris aujourd'hui par l'application",
    itemsHeaders: [
      { key: "pat", label: "Patient" },
      { key: "med", label: "Médecin" },
      { key: "heure", label: "Heure" }
    ],
    items: [
      { pat: "Modou Ndiaye", med: "Dr. Ousmane Fall (Cardio)", heure: "10h30" },
      { pat: "Aïssatou Sow", med: "Dr. Fatou Mbaye (Néphro)", heure: "11h00" }
    ]
  },
  {
    id: "psych-care",
    name: "Psych-Care",
    emoji: "🧠",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Suivi Psychiatrique & Santé Mentale",
    pitch: "Dossier clinique ultra-spécifique pour la psychiatrie, avec suivi des consultations, thérapies et thérapies de groupe.",
    valueAdded: [
      "Suivi clinique avec échelle d'évaluation de l'humeur et du comportement",
      "Gestion stricte de l'anonymat et des autorisations d'accès",
      "Planification des ateliers de réhabilitation psychosociale",
      "Traçabilité des traitements neuroleptiques à longue durée d'action"
    ],
    stats: [
      { label: "Suivis actifs", value: "89", color: "text-primary" },
      { label: "Consultations / sem", value: "24", color: "text-accent" },
      { label: "Ateliers thérapeutiques", value: "3 / semaine", color: "text-secondary" }
    ],
    itemsTitle: "Planning des ateliers thérapeutiques",
    itemsHeaders: [
      { key: "atelier", label: "Atelier" },
      { key: "animateur", label: "Animateur" },
      { key: "heure", label: "Horaire" }
    ],
    items: [
      { atelier: "Art-thérapie & Peinture", animateur: "Dr. Aminata Diop", heure: "Mardi, 14h-16h" },
      { atelier: "Groupe de parole & Réhabilitation", animateur: "Oumar Sall (Infirmier)", heure: "Jeudi, 10h-12h" }
    ]
  },
  {
    id: "qualite-accred",
    name: "Qualité-JCI",
    emoji: "🏆",
    category: "gestion",
    categoryLabel: "Gestion & RH",
    tagline: "Normes & Accréditation JCI",
    pitch: "Outil de pilotage de la qualité et de préparation à l'accréditation Joint Commission International (JCI).",
    valueAdded: [
      "Tableau de bord de suivi des indicateurs internationaux de sécurité des patients (IPSG)",
      "Déclaration et traitement des événements indésirables (EIG)",
      "Planification des audits internes et des visites de conformité",
      "Gestion documentaire des procédures de soins validées"
    ],
    stats: [
      { label: "Score Conformité Global", value: "87.3%", color: "text-accent" },
      { label: "Non-conformités résolues", value: "92%", color: "text-primary" },
      { label: "Audits JCI complétés", value: "14", color: "text-secondary" }
    ],
    itemsTitle: "Actions qualité prioritaires en attente",
    itemsHeaders: [
      { key: "action", label: "Action Corrective" },
      { key: "dept", label: "Service" },
      { key: "prio", label: "Priorité" }
    ],
    items: [
      { action: "Double vérification de l'identité du patient", dept: "Urgences & Bloc", prio: "Critique" },
      { action: "Sécurisation du stockage des médicaments à haut risque", dept: "Pharmacie centrale", prio: "Haute" }
    ]
  },
  {
    id: "rehab-track",
    name: "Rehab-Track",
    emoji: "🚶",
    category: "soins",
    categoryLabel: "Soin & Diagnostic",
    tagline: "Kinésithérapie & Rééducation",
    pitch: "Planification des séances de kinésithérapie, suivi de la récupération motrice et fiches d'exercices personnalisées.",
    valueAdded: [
      "Planification dynamique des plateaux techniques et des box de rééducation",
      "Évaluation chiffrée de la mobilité articulaire (goniométrie numérique)",
      "Création de programmes d'exercices illustrés pour le retour à domicile",
      "Suivi post-AVC et traumatologie"
    ],
    stats: [
      { label: "Séances planifiées / jour", value: "32", color: "text-primary" },
      { label: "Patients pris en charge", value: "78", color: "text-accent" },
      { label: "Taux de récupération moyen", value: "84%", color: "text-secondary" }
    ],
    itemsTitle: "Planning du plateau technique",
    itemsHeaders: [
      { key: "kine", label: "Kinésithérapeute" },
      { key: "patient", label: "Patient" },
      { key: "heure", label: "Heure" },
      { key: "type", label: "Type de soin" }
    ],
    items: [
      { kine: "Alassane Diallo", patient: "Moussa Sène", heure: "09h00", type: "Rééducation post-fracture fémur" },
      { kine: "Aïda Fall", patient: "Khady Syll", heure: "10h15", type: "Réadaptation motrice post-AVC" }
    ]
  },
  {
    id: "rh-medical",
    name: "RH Médical",
    emoji: "👥",
    category: "gestion",
    categoryLabel: "Gestion & RH",
    tagline: "Gestion du Personnel & Plannings",
    pitch: "Gestion administrative des dossiers du personnel hospitalier, des congés, des formations et plannings de gardes.",
    valueAdded: [
      "Édition automatique des plannings de garde réglementaires (24h/48h)",
      "Demande et validation en ligne des congés et absences",
      "Suivi des effectifs réels présents par service en temps réel",
      "Calcul des indemnités de garde pour la paie"
    ],
    stats: [
      { label: "Effectif total", value: "847", color: "text-primary" },
      { label: "Taux de présence", value: "94.2%", color: "text-accent" },
      { label: "Gardes planifiées", value: "100%", color: "text-secondary" }
    ],
    itemsTitle: "Gardes de nuit planifiées ce soir",
    itemsHeaders: [
      { key: "dept", label: "Service" },
      { key: "medecin", label: "Médecin de garde" },
      { key: "ide", label: "Infirmiers de garde" }
    ],
    items: [
      { dept: "Urgences", medecin: "Dr. Oumar Sall", ide: "2 IDE, 1 Aide-soignant" },
      { dept: "Maternité / Néonat", medecin: "Dr. Awa Diagne", ide: "2 Sages-femmes" },
      { dept: "Réanimation / Dialyse", medecin: "Dr. Ousmane Sy", ide: "1 IDE" }
    ]
  },
  {
    id: "sante-reseau",
    name: "Réseau Santé SN",
    emoji: "🌐",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Réseau Inter-hospitalier Sénégal",
    pitch: "Système d'interconnexion sécurisé entre l'Hôpital Ndamatou, les dispensaires locaux et les grands centres régionaux.",
    valueAdded: [
      "Partage sécurisé de dossiers cliniques inter-établissements",
      "Module d'organisation des transferts sanitaires d'urgence",
      "Annuaire mis à jour en temps réel de tous les lits disponibles du réseau",
      "Téléexpertises et téléconsultations réseau"
    ],
    stats: [
      { label: "Établissements liés", value: "14", color: "text-primary" },
      { label: "Dossiers partagés", value: "12.8k", color: "text-accent" },
      { label: "Latence API Réseau", value: "12ms", color: "text-secondary" }
    ],
    itemsTitle: "Statut des centres de santé du réseau",
    itemsHeaders: [
      { key: "nom", label: "Établissement" },
      { key: "ville", label: "Ville" },
      { key: "type", label: "Niveau" },
      { key: "status", label: "Statut" }
    ],
    items: [
      { nom: "Hôpital Ndamatou (Principal)", ville: "Touba", type: "Niveau 3", status: "En ligne" },
      { nom: "Hôpital de Fann", ville: "Dakar", type: "Niveau 3", status: "En ligne" },
      { nom: "Centre de Santé Gare", ville: "Touba", type: "Niveau 1", status: "En ligne" },
      { nom: "Poste de Santé Darou Khoudoss", ville: "Touba", type: "Niveau 0", status: "Maintenance" }
    ]
  },
  {
    id: "smart-beds",
    name: "Smart Beds",
    emoji: "🛏️",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Gestion Intelligente des Lits",
    pitch: "Suivi en temps réel de l'état d'occupation des lits de l'hôpital pour fluidifier les admissions et réduire le temps d'attente.",
    valueAdded: [
      "Capteurs IoT de présence patient dans les lits",
      "Signalisation automatique des lits libérés nécessitant un nettoyage",
      "Affectation automatique des patients admis aux lits disponibles",
      "Indicateurs de durée moyenne de séjour (DMS) par service"
    ],
    stats: [
      { label: "Taux d'occupation", value: "87%", color: "text-red-500" },
      { label: "Lits disponibles", value: "52", color: "text-accent" },
      { label: "Lits en cours de nettoyage", value: "12", color: "text-yellow-500" }
    ],
    itemsTitle: "Occupation par Service d'Hospitalisation",
    itemsHeaders: [
      { key: "service", label: "Service" },
      { key: "total", label: "Lits Totaux" },
      { key: "occ", label: "Lits Occupés" },
      { key: "dispo", label: "Lits Libres" }
    ],
    items: [
      { service: "Médecine Interne", total: 60, occ: 58, dispo: 2 },
      { service: "Chirurgie", total: 48, occ: 35, dispo: 9 },
      { service: "Pédiatrie", total: 24, occ: 20, dispo: 4 }
    ],
    chartTitle: "Répartition des Lits",
    chartData: [
      { label: "Occupés", pct: 87, color: "bg-red-500" },
      { label: "Libres", pct: 10, color: "bg-accent" },
      { label: "Nettoyage", pct: 3, color: "bg-yellow-500" }
    ]
  },
  {
    id: "smart-pharma",
    name: "Smart Pharma",
    emoji: "💊",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Pharmacie Hospitalière & Stocks",
    pitch: "Gestion complète du stock de médicaments de l'hôpital, de la réception des commandes à la dispensation nominative.",
    valueAdded: [
      "Traçabilité complète par code-barres et numéros de lots",
      "Alerte automatique sur les dates de péremption proches",
      "Dispensation nominative quotidienne assistée",
      "Optimisation des commandes pour éviter les ruptures de molécules vitales"
    ],
    stats: [
      { label: "Références en stock", value: "2 840", color: "text-primary" },
      { label: "Alertes Péremption", value: "12", color: "text-red-500" },
      { label: "Commandes à valider", value: "3", color: "text-accent" }
    ],
    itemsTitle: "Stocks Critiques en Réapprovisionnement",
    itemsHeaders: [
      { key: "nom", label: "Molécule / Médicament" },
      { key: "seuil", label: "Seuil critique" },
      { key: "stock", label: "Stock Actuel" },
      { key: "status", label: "Statut" }
    ],
    items: [
      { nom: "Paracétamol 1g injectable", seuil: "500 flacons", stock: "120 flacons", status: "Commande passée" },
      { nom: "Amoxicilline 500mg/5ml suspension", seuil: "100 flacons", stock: "15 flacons", status: "Urgent - À commander" },
      { nom: "Insuline Glargine 100 U/ml", seuil: "50 stylos", stock: "45 stylos", status: "Correct" }
    ]
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    emoji: "📦",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Logistique Générale & Approvisionnement",
    pitch: "Suivi logistique global : consommables médicaux, draps, restauration, et matériels stérilisés pour le bloc opératoire.",
    valueAdded: [
      "Suivi des livraisons fournisseurs en temps réel",
      "Gestion centralisée des bons de commande internes par service",
      "Planification automatique des cycles de blanchisserie et nettoyage",
      "Alertes automatiques sur les stocks de consommables courants (gants, seringues)"
    ],
    stats: [
      { label: "Bons de commande du jour", value: "47", color: "text-primary" },
      { label: "Livraisons attendues", value: "6", color: "text-accent" },
      { label: "Taux de service logistique", value: "98.2%", color: "text-secondary" }
    ],
    itemsTitle: "Livraisons Attendues Aujourd'hui",
    itemsHeaders: [
      { key: "fourn", label: "Fournisseur" },
      { key: "contenu", label: "Contenu" },
      { key: "heure", label: "Heure Prévue" }
    ],
    items: [
      { fourn: "Sénégal Médical S.A.", contenu: "Gants stériles & seringues", heure: "14h00" },
      { fourn: "La Lingerie de Touba", contenu: "Draps propres de rechange", heure: "11h30" }
    ]
  },
  {
    id: "touba-med-care",
    name: "Touba MedCare",
    emoji: "🕌",
    category: "reseau",
    categoryLabel: "Patient & Réseau",
    tagline: "Coordination Locale Touba",
    pitch: "Portail destiné aux structures médicales locales de Touba pour faciliter l'adressage et le suivi des patients transférés.",
    valueAdded: [
      "Système d'adressage simple pour les cabinets médicaux privés",
      "Messagerie de coordination directe entre les soignants",
      "Suivi du parcours patient post-transfert",
      "Intégration d'outils d'éducation thérapeutique en Wolof"
    ],
    stats: [
      { label: "Centres partenaires", value: "42", color: "text-primary" },
      { label: "Patients transférés ce mois", value: "112", color: "text-accent" },
      { label: "Retours d'information envoyés", value: "100%", color: "text-secondary" }
    ],
    itemsTitle: "Transferts Récents reçus",
    itemsHeaders: [
      { key: "provenance", label: "Provenance" },
      { key: "motif", label: "Motif" },
      { key: "status", label: "Statut" }
    ],
    items: [
      { provenance: "Cabinet Darou Khoudoss", motif: "Insuffisance rénale aiguë", status: "Admis en Néphrologie" },
      { provenance: "Poste de Santé Gare", motif: "Suspicion d'infarctus", status: "Pris en charge aux Urgences" }
    ]
  },
  {
    id: "waste-control",
    name: "Waste Control",
    emoji: "♻️",
    category: "flux",
    categoryLabel: "Logistique & Flux",
    tagline: "Gestion des Déchets Médicaux (DASRI)",
    pitch: "Traçabilité complète des Déchets d'Activités de Soins à Risques Infectieux (DASRI) pour la conformité environnementale et sanitaire.",
    valueAdded: [
      "Traçabilité par pesée électronique et étiquettes QR Code des bacs",
      "Suivi de la chaîne de transport des déchets vers l'incinérateur",
      "Alertes en cas de dépassement des délais légaux de stockage",
      "Génération automatique des bordereaux de suivi des déchets (BSD)"
    ],
    stats: [
      { label: "Pesée DASRI ce jour", value: "142 kg", color: "text-red-500" },
      { label: "Bacs en attente de collecte", value: "8", color: "text-yellow-500" },
      { label: "Conformité sanitaire", value: "100%", color: "text-accent" }
    ],
    itemsTitle: "Bacs de DASRI en attente d'incinération",
    itemsHeaders: [
      { key: "id", label: "Code Bac" },
      { key: "poids", label: "Poids" },
      { key: "service", label: "Service Émetteur" },
      { key: "date", label: "Date de Pesée" }
    ],
    items: [
      { id: "DASRI-482", poids: "12.4 kg", service: "Bloc Opératoire", date: "02/07/2026 08h30" },
      { id: "DASRI-483", poids: "8.1 kg", service: "Laboratoire", date: "02/07/2026 09h00" }
    ]
  }
];
