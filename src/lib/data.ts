export type Career = {
  id: string;
  name: string;
  nameHT: string;
  domain: string;
  riasecCodes: string[];
  description: string;
  subjects: string[];
  skills: string[];
  salary: string;
  outlook: string;
};

export type University = {
  id: string;
  name: string;
  country: string;
  city: string;
  type: string;
  languages: string[];
  website: string;
  programs: Program[];
};

export type Program = {
  id: string;
  name: string;
  nameHT: string;
  domain: string;
  duration: string;
  level: string;
  language: string;
  tuitionMin: number;
  tuitionMax: number;
  currency: string;
  deadline: string;
  scholarship: boolean;
  requirements: string[];
  universityId: string;
  universityName: string;
  country: string;
};

export type Mentor = {
  id: string;
  name: string;
  profession: string;
  domain: string;
  bio: string;
  languages: string[];
  country: string;
  availability: string;
  sessions: number;
  rating: number;
  avatar: string;
};

export type RoadmapStep = {
  grade: string;
  actions: string[];
};

export type CareerRoadmap = {
  careerId: string;
  steps: RoadmapStep[];
  documents: string[];
};

export const CAREERS: Career[] = [
  {
    id: "medecine",
    name: "Médecine",
    nameHT: "Medsin",
    domain: "Santé",
    riasecCodes: ["I", "S"],
    description: "Diagnostiquer et traiter les maladies humaines.",
    subjects: ["Biologie", "Chimie", "Physique", "Mathématiques"],
    skills: ["Empathie", "Rigueur", "Communication", "Résolution de problèmes"],
    salary: "$800-3000/mois",
    outlook: "Très haute demande en Haïti",
  },
  {
    id: "informatique",
    name: "Informatique / Génie Logiciel",
    nameHT: "Enfòmatik",
    domain: "Technologie",
    riasecCodes: ["I", "R"],
    description: "Concevoir et développer des logiciels et systèmes informatiques.",
    subjects: ["Mathématiques", "Physique", "Logique"],
    skills: ["Programmation", "Analyse", "Créativité", "Travail en équipe"],
    salary: "$600-5000/mois",
    outlook: "Secteur en forte croissance mondiale",
  },
  {
    id: "gestion",
    name: "Gestion / Administration des affaires",
    nameHT: "Jesyon Biznis",
    domain: "Commerce",
    riasecCodes: ["E", "C"],
    description: "Gérer des organisations, des projets et des ressources humaines.",
    subjects: ["Économie", "Mathématiques", "Comptabilité"],
    skills: ["Leadership", "Communication", "Organisation", "Négociation"],
    salary: "$500-3000/mois",
    outlook: "Forte demande dans le secteur privé haïtien",
  },
  {
    id: "droit",
    name: "Droit",
    nameHT: "Dwa",
    domain: "Juridique",
    riasecCodes: ["E", "S"],
    description: "Conseiller, représenter et défendre les droits des individus et organisations.",
    subjects: ["Histoire", "Français", "Philosophie", "Sociologie"],
    skills: ["Argumentation", "Recherche", "Rédaction", "Éloquence"],
    salary: "$600-4000/mois",
    outlook: "Stable, spécialités en droit des affaires très demandées",
  },
  {
    id: "architecture",
    name: "Architecture & Génie Civil",
    nameHT: "Achitekti & Jeni Sivil",
    domain: "Ingénierie",
    riasecCodes: ["R", "A", "I"],
    description: "Concevoir et construire des bâtiments et infrastructures.",
    subjects: ["Mathématiques", "Physique", "Dessin technique"],
    skills: ["Créativité", "Précision", "Gestion de projet", "Vision spatiale"],
    salary: "$700-4000/mois",
    outlook: "Haute demande post-reconstruction en Haïti",
  },
  {
    id: "education",
    name: "Sciences de l'Éducation",
    nameHT: "Syans Edikasyon",
    domain: "Éducation",
    riasecCodes: ["S", "A"],
    description: "Former et éduquer les générations futures.",
    subjects: ["Psychologie", "Philosophie", "Sociologie", "Français"],
    skills: ["Patience", "Communication", "Pédagogie", "Empathie"],
    salary: "$300-1500/mois",
    outlook: "Pilier du développement national",
  },
  {
    id: "agronomie",
    name: "Agronomie / Agriculture",
    nameHT: "Agwonomi",
    domain: "Agriculture",
    riasecCodes: ["R", "I"],
    description: "Améliorer les techniques agricoles et la sécurité alimentaire.",
    subjects: ["Biologie", "Chimie", "Sciences naturelles"],
    skills: ["Analyse", "Terrain", "Innovation", "Durabilité"],
    salary: "$400-2000/mois",
    outlook: "Secteur stratégique pour Haïti",
  },
  {
    id: "communication",
    name: "Communication / Journalisme",
    nameHT: "Kominikasyon",
    domain: "Médias",
    riasecCodes: ["A", "E", "S"],
    description: "Informer, analyser et diffuser des contenus médiatiques.",
    subjects: ["Français", "Histoire", "Sociologie"],
    skills: ["Rédaction", "Investigation", "Expression orale", "Numérique"],
    salary: "$300-2000/mois",
    outlook: "Évolution vers le digital",
  },
];

export const UNIVERSITIES: University[] = [
  {
    id: "ueh",
    name: "Université d'État d'Haïti (UEH)",
    country: "Haïti",
    city: "Port-au-Prince",
    type: "Public",
    languages: ["Français", "Créole"],
    website: "https://ueh.edu.ht",
    programs: [],
  },
  {
    id: "quisqueya",
    name: "Université Quisqueya",
    country: "Haïti",
    city: "Port-au-Prince",
    type: "Privé",
    languages: ["Français", "Anglais"],
    website: "https://uniq.edu.ht",
    programs: [],
  },
  {
    id: "notre-dame",
    name: "Université Notre-Dame d'Haïti",
    country: "Haïti",
    city: "Port-au-Prince",
    type: "Privé",
    languages: ["Français"],
    website: "https://undh.edu.ht",
    programs: [],
  },
  {
    id: "uag",
    name: "Université des Antilles (Guadeloupe)",
    country: "France",
    city: "Pointe-à-Pitre",
    type: "Public",
    languages: ["Français"],
    website: "https://univ-antilles.fr",
    programs: [],
  },
  {
    id: "uqam",
    name: "Université du Québec à Montréal (UQAM)",
    country: "Canada",
    city: "Montréal",
    type: "Public",
    languages: ["Français"],
    website: "https://uqam.ca",
    programs: [],
  },
];

export const PROGRAMS: Program[] = [
  {
    id: "ueh-med",
    name: "Doctorat en Médecine",
    nameHT: "Doktora Medsin",
    domain: "Santé",
    duration: "7 ans",
    level: "Doctorat",
    language: "Français",
    tuitionMin: 0,
    tuitionMax: 500,
    currency: "USD/an",
    deadline: "Octobre",
    scholarship: true,
    requirements: ["Bac scientifique", "Concours d'entrée", "Certificat médical"],
    universityId: "ueh",
    universityName: "Université d'État d'Haïti (UEH)",
    country: "Haïti",
  },
  {
    id: "ueh-droit",
    name: "Licence en Droit",
    nameHT: "Lisans Dwa",
    domain: "Juridique",
    duration: "4 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 0,
    tuitionMax: 300,
    currency: "USD/an",
    deadline: "Septembre",
    scholarship: true,
    requirements: ["Bac", "Dossier scolaire"],
    universityId: "ueh",
    universityName: "Université d'État d'Haïti (UEH)",
    country: "Haïti",
  },
  {
    id: "quisqueya-info",
    name: "Licence en Informatique",
    nameHT: "Lisans Enfòmatik",
    domain: "Technologie",
    duration: "4 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 2000,
    tuitionMax: 3500,
    currency: "USD/an",
    deadline: "Août",
    scholarship: false,
    requirements: ["Bac", "Test de niveau", "Lettre de motivation"],
    universityId: "quisqueya",
    universityName: "Université Quisqueya",
    country: "Haïti",
  },
  {
    id: "quisqueya-gestion",
    name: "Licence en Gestion des Affaires",
    nameHT: "Lisans Jesyon Biznis",
    domain: "Commerce",
    duration: "4 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 2000,
    tuitionMax: 3500,
    currency: "USD/an",
    deadline: "Août",
    scholarship: false,
    requirements: ["Bac", "Dossier scolaire"],
    universityId: "quisqueya",
    universityName: "Université Quisqueya",
    country: "Haïti",
  },
  {
    id: "notre-dame-edu",
    name: "Licence en Sciences de l'Éducation",
    nameHT: "Lisans Syans Edikasyon",
    domain: "Éducation",
    duration: "4 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 1500,
    tuitionMax: 2500,
    currency: "USD/an",
    deadline: "Septembre",
    scholarship: true,
    requirements: ["Bac", "Lettre de motivation", "Références"],
    universityId: "notre-dame",
    universityName: "Université Notre-Dame d'Haïti",
    country: "Haïti",
  },
  {
    id: "uag-droit",
    name: "Licence en Droit",
    nameHT: "Lisans Dwa (Frans)",
    domain: "Juridique",
    duration: "3 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 3000,
    tuitionMax: 5000,
    currency: "USD/an",
    deadline: "Mai",
    scholarship: true,
    requirements: ["Bac français équivalent", "Parcoursup", "Niveau B2 français"],
    universityId: "uag",
    universityName: "Université des Antilles",
    country: "France",
  },
  {
    id: "uqam-info",
    name: "Baccalauréat en Informatique",
    nameHT: "Bakaloreya Enfòmatik (Kanada)",
    domain: "Technologie",
    duration: "3 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 6000,
    tuitionMax: 10000,
    currency: "USD/an",
    deadline: "Février",
    scholarship: true,
    requirements: ["Diplôme secondaire", "Test de français", "Relevés de notes"],
    universityId: "uqam",
    universityName: "Université du Québec à Montréal",
    country: "Canada",
  },
  {
    id: "ueh-agro",
    name: "Licence en Agronomie",
    nameHT: "Lisans Agwonomi",
    domain: "Agriculture",
    duration: "4 ans",
    level: "Licence",
    language: "Français",
    tuitionMin: 0,
    tuitionMax: 400,
    currency: "USD/an",
    deadline: "Octobre",
    scholarship: true,
    requirements: ["Bac scientifique", "Concours d'entrée"],
    universityId: "ueh",
    universityName: "Université d'État d'Haïti (UEH)",
    country: "Haïti",
  },
];

export const MENTORS: Mentor[] = [
  {
    id: "m1",
    name: "Dr. Marie-Claire Desrosiers",
    profession: "Médecin Pédiatre",
    domain: "Santé",
    bio: "Médecin avec 15 ans d'expérience en pédiatrie. Ancienne résidente à l'Hôpital de l'Université d'État d'Haïti. Passionnée par la formation de la prochaine génération de médecins haïtiens.",
    languages: ["Français", "Créole", "Anglais"],
    country: "Haïti",
    availability: "Week-ends",
    sessions: 48,
    rating: 4.9,
    avatar: "MC",
  },
  {
    id: "m2",
    name: "Jean-Baptiste Pierre",
    profession: "Ingénieur Logiciel Senior",
    domain: "Technologie",
    bio: "Dev full-stack avec 10 ans d'expérience. Travaille actuellement dans une startup tech à Montréal. Alumni de l'Université Quisqueya.",
    languages: ["Français", "Créole", "Anglais"],
    country: "Canada",
    availability: "Soirs (EST)",
    sessions: 92,
    rating: 4.8,
    avatar: "JB",
  },
  {
    id: "m3",
    name: "Me. Sophia Belizaire",
    profession: "Avocate d'Affaires",
    domain: "Juridique",
    bio: "Avocate spécialisée en droit des affaires et droit international. Diplômée de l'UEH et de Paris II Panthéon-Assas. Consultante pour plusieurs entreprises régionales.",
    languages: ["Français", "Créole", "Anglais", "Espagnol"],
    country: "Haïti",
    availability: "Mercredi après-midi",
    sessions: 35,
    rating: 5.0,
    avatar: "SB",
  },
  {
    id: "m4",
    name: "Frantz Estimable",
    profession: "Directeur d'École & Pédagogue",
    domain: "Éducation",
    bio: "25 ans dans l'éducation nationale. Directeur d'un lycée privé à Port-au-Prince. Formateur certifié en pédagogie active et curriculum design.",
    languages: ["Français", "Créole"],
    country: "Haïti",
    availability: "Samedi matin",
    sessions: 67,
    rating: 4.7,
    avatar: "FE",
  },
  {
    id: "m5",
    name: "Nadège Thermilus",
    profession: "Architecte & Urbaniste",
    domain: "Ingénierie",
    bio: "Architecte primée, spécialisée en construction parasismique et logement abordable. Fondatrice d'un cabinet d'architecture social à Haïti.",
    languages: ["Français", "Créole", "Anglais"],
    country: "Haïti",
    availability: "Vendredi soir",
    sessions: 29,
    rating: 4.9,
    avatar: "NT",
  },
  {
    id: "m6",
    name: "Réginald Cajuste",
    profession: "Agronome & Entrepreneur",
    domain: "Agriculture",
    bio: "Fondateur d'une coopérative agricole dans l'Artibonite. Expert en agriculture durable et sécurité alimentaire. Diplômé de la Faculté d'Agronomie de l'UEH.",
    languages: ["Français", "Créole"],
    country: "Haïti",
    availability: "Dimanche",
    sessions: 41,
    rating: 4.6,
    avatar: "RC",
  },
];

export const ROADMAPS: CareerRoadmap[] = [
  {
    careerId: "medecine",
    steps: [
      {
        grade: "3ème",
        actions: [
          "Concentre-toi sur Biologie, Chimie, Physique, Maths",
          "Rejoins un club de sciences à l'école",
          "Lis des articles de vulgarisation médicale",
          "Fais du bénévolat dans un centre de santé communautaire",
        ],
      },
      {
        grade: "2ème",
        actions: [
          "Prépare ton dossier académique (relève de notes)",
          "Participe aux olympiades de sciences",
          "Commence à étudier l'anatomie de base",
          "Rencontre un médecin mentor via Xpoze",
        ],
      },
      {
        grade: "Rhéto",
        actions: [
          "Prépare le concours d'entrée en médecine (UEH)",
          "Étudie les annales des concours précédents",
          "Améliore ton niveau d'anglais (littérature médicale)",
          "Identifie des bourses disponibles",
        ],
      },
      {
        grade: "Philo",
        actions: [
          "Constitue ton dossier complet d'admission",
          "Passe le concours d'entrée en médecine",
          "Prépare une lettre de motivation",
          "Explore des programmes à l'étranger en backup",
        ],
      },
    ],
    documents: [
      "Relevé de notes (4 dernières années)",
      "Acte de naissance",
      "Certificat médical",
      "Photos d'identité",
      "Lettre de motivation",
      "Lettre de recommandation d'un professeur",
    ],
  },
  {
    careerId: "informatique",
    steps: [
      {
        grade: "3ème",
        actions: [
          "Apprends les bases de la programmation (Python, Scratch)",
          "Suis des cours en ligne gratuits (freeCodeCamp, Khan Academy)",
          "Développe ta logique avec les maths et puzzles",
          "Monte ton premier site web simple",
        ],
      },
      {
        grade: "2ème",
        actions: [
          "Apprends HTML/CSS/JavaScript basique",
          "Crée des petits projets personnels",
          "Rejoins des communautés tech locales",
          "Explore les métiers: dev web, data, cybersécurité, IA",
        ],
      },
      {
        grade: "Rhéto",
        actions: [
          "Construis un portfolio de 2-3 projets",
          "Prépare les tests d'entrée universitaires",
          "Certifications gratuites (Google, Meta sur Coursera)",
          "Commence à chercher des stages d'été",
        ],
      },
      {
        grade: "Philo",
        actions: [
          "Finalise ton portfolio GitHub",
          "Postule dans les universités cibles",
          "Prépare des entretiens techniques de base",
          "Networking: LinkedIn, communautés tech haïtiennes",
        ],
      },
    ],
    documents: [
      "Relevé de notes",
      "Portfolio de projets (GitHub ou site web)",
      "Lettre de motivation",
      "CV académique",
      "Lettre de recommandation",
      "Acte de naissance",
    ],
  },
];

export const RIASEC_QUESTIONS = [
  // Realistic
  { id: 1, type: "R", text: "Mwen renmen travay ak zouti ak ekipman." },
  { id: 2, type: "R", text: "Mwen pito fè bagay ak men mwen pase pale sou yo." },
  { id: 3, type: "R", text: "Mwen enterese nan mekanik, elektrisite, oswa jeni." },
  // Investigative
  { id: 4, type: "I", text: "Mwen renmen rezoud pwoblèm konplèks ak syantifik." },
  { id: 5, type: "I", text: "Mwen renmen fè rechèch ak analiz done." },
  { id: 6, type: "I", text: "Mwen enterese nan syans, medsin, oswa teknoloji." },
  // Artistic
  { id: 7, type: "A", text: "Mwen renmen eksprime tèt mwen atravè atizana, mizik, oswa ekri." },
  { id: 8, type: "A", text: "Mwen renmen kreye bagay orijinal ak inovatif." },
  { id: 9, type: "A", text: "Mwen atire pa dizay, fotografi, oswa teyat." },
  // Social
  { id: 10, type: "S", text: "Mwen renmen ede lòt moun ak pwoblèm yo." },
  { id: 11, type: "S", text: "Mwen bon nan kominike ak travay ann ekip." },
  { id: 12, type: "S", text: "Mwen enterese nan ansèyman, swen, oswa travay sosyal." },
  // Enterprising
  { id: 13, type: "E", text: "Mwen renmen dirije ak pran inisyativ nan yon gwoup." },
  { id: 14, type: "E", text: "Mwen enterese nan biznis, vant, oswa jesyon." },
  { id: 15, type: "E", text: "Mwen renmen konvenk lòt moun ak negosye." },
  // Conventional
  { id: 16, type: "C", text: "Mwen renmen organize, klasifye ak jere done." },
  { id: 17, type: "C", text: "Mwen pito travay avèk règ klè ak pwosedi." },
  { id: 18, type: "C", text: "Mwen bon nan kontabilite, administrasyon, ak travay biwo." },
];

export function getCareersByRiasec(codes: string[]): Career[] {
  return CAREERS.filter((c) =>
    c.riasecCodes.some((code) => codes.includes(code))
  ).sort((a, b) => {
    const aScore = a.riasecCodes.filter((c) => codes.includes(c)).length;
    const bScore = b.riasecCodes.filter((c) => codes.includes(c)).length;
    return bScore - aScore;
  });
}
