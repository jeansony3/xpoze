export type LiveSession = {
  id: string;
  title: string;
  host: string;
  role: string;
  domain: string;
  date: string;
  time: string;
  duration: string;
  spots: number;
  spotsLeft: number;
  isLive: boolean;
  description: string;
  tags: string[];
};

export const LIVE_SESSIONS: LiveSession[] = [
  {
    id: "live1",
    title: "Kòman aplike nan inivèsite Kanada — sesyon kesyon/repons",
    host: "Jean-Baptiste Pierre",
    role: "Ingénieur Logiciel, Montréal",
    domain: "Technologie",
    date: "2025-07-02",
    time: "18h00 (Haiti)",
    duration: "90 min",
    spots: 50,
    spotsLeft: 12,
    isLive: false,
    description:
      "Jean-Baptiste ap repon tout kesyon ou sou pwosesis aplikasyon pou inivèsite kanadyen — visa, dokiman, bous, ak kòman adapte ou nan yon nouvo peyi.",
    tags: ["Canada", "Visa", "Université", "Tech"],
  },
  {
    id: "live2",
    title: "LIVE: Tès RIASEC — Kòman entèprete rezilta ou?",
    host: "Équipe Xpoze",
    role: "Conseillère en orientation",
    domain: "Oryantasyon",
    date: "2025-06-28",
    time: "17h00 (Haiti)",
    duration: "60 min",
    spots: 100,
    spotsLeft: 34,
    isLive: true,
    description:
      "Yon sesyon live pou ede elèv konprann rezilta tès RIASEC yo ak kòman itilize yo pou chwazi bon karyè ak bon inivèsite.",
    tags: ["RIASEC", "Orientation", "Gratuit"],
  },
  {
    id: "live3",
    title: "Lèt motivasyon ki mache: workshop pratik",
    host: "Me. Sophia Belizaire",
    role: "Avocate & Mentor Xpoze",
    domain: "Juridique",
    date: "2025-07-08",
    time: "19h00 (Haiti)",
    duration: "75 min",
    spots: 30,
    spotsLeft: 8,
    isLive: false,
    description:
      "Sophia ap travay dirèkteman ak elèv yo pou revize ak amelyore lèt motivasyon yo. Pote lèt ou, resevwa feedback reyèl.",
    tags: ["Lettre de motivation", "Admission", "Workshop"],
  },
  {
    id: "live4",
    title: "Medsin ann Ayiti: Concours UEH — estrateji ak konsèy",
    host: "Dr. Marie-Claire Desrosiers",
    role: "Médecin Pédiatre, UEH Alumni",
    domain: "Santé",
    date: "2025-07-15",
    time: "18h30 (Haiti)",
    duration: "90 min",
    spots: 60,
    spotsLeft: 27,
    isLive: false,
    description:
      "Dr. Desrosiers ap pataje estrateji pou reyisi konkour antre nan Fakilte Medsin UEH — matyè pou konsentre, kalifikasyon, ak kòman prepare dòsye.",
    tags: ["UEH", "Médecine", "Concours"],
  },
  {
    id: "live5",
    title: "Agrikilti & Biznis: kreye yon kooperativ ki reyisi",
    host: "Réginald Cajuste",
    role: "Agronome & Entrepreneur",
    domain: "Agriculture",
    date: "2025-07-20",
    time: "16h00 (Haiti)",
    duration: "60 min",
    spots: 40,
    spotsLeft: 40,
    isLive: false,
    description:
      "Aprann kòman konbine agrikilti ak antreprenaryat pou kreye yon biznis dirab. Réginald ap pataje modèl kooperativ li ak leson li aprann.",
    tags: ["Agriculture", "Entreprise", "Coopérative"],
  },
];
