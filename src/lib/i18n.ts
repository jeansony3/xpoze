"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "ht" | "fr" | "en" | "es";

export const LANG_LABELS: Record<Lang, string> = {
  ht: "Kreyòl",
  fr: "Français",
  en: "English",
  es: "Español",
};

type LangStore = { lang: Lang; setLang: (l: Lang) => void };

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({ lang: "ht", setLang: (lang) => set({ lang }) }),
    { name: "xpoze-lang" }
  )
);

// Core UI translations
const T = {
  nav: {
    quiz:         { ht: "Tès Oryantasyon", fr: "Test Orientation", en: "Orientation Test", es: "Test Orientación" },
    careers:      { ht: "Karyè",           fr: "Carrières",        en: "Careers",          es: "Carreras" },
    universities: { ht: "Inivèsite",       fr: "Universités",      en: "Universities",     es: "Universidades" },
    mentors:      { ht: "Mentor",          fr: "Mentors",          en: "Mentors",          es: "Mentores" },
    immigration:  { ht: "Immigration",     fr: "Immigration",      en: "Immigration",      es: "Inmigración" },
    podcasts:     { ht: "Podcast",         fr: "Podcast",          en: "Podcast",          es: "Podcast" },
    live:         { ht: "Live",            fr: "En direct",        en: "Live",             es: "En vivo" },
    about:        { ht: "Sou Nou",         fr: "À propos",         en: "About",            es: "Nosotros" },
    login:        { ht: "Konekte",         fr: "Connexion",        en: "Log In",           es: "Iniciar sesión" },
    register:     { ht: "Enskri gratis",   fr: "S'inscrire",       en: "Sign up free",     es: "Registrarse" },
    logout:       { ht: "Dekonekte",       fr: "Déconnecter",      en: "Log out",          es: "Cerrar sesión" },
    dashboard:    { ht: "Tableau de bord", fr: "Tableau de bord",  en: "Dashboard",        es: "Panel" },
  },
  hero: {
    badge:    { ht: "Platfòm #1 pou elèv Ayiti", fr: "Plateforme #1 pour étudiants haïtiens", en: "Platform #1 for Haitian students", es: "Plataforma #1 para estudiantes haitianos" },
    h1a:      { ht: "Transfòme",           fr: "Transformez",      en: "Transform",        es: "Transforma" },
    h1b:      { ht: "Oryantasyon Karyè",   fr: "Orientation Carrière", en: "Career Orientation", es: "Orientación Profesional" },
    h1c:      { ht: "an Opòtinite",        fr: "en Opportunité",   en: "into Opportunity", es: "en Oportunidad" },
    sub:      { ht: "Dekouvri karyè ou, jwenn inivèsite ki fèt pou ou, epi konekte ak mentor pwofesyonèl — tout gratis.", fr: "Découvrez votre carrière, trouvez l'université faite pour vous et connectez-vous avec des mentors professionnels — entièrement gratuit.", en: "Discover your career, find the university made for you, and connect with professional mentors — all free.", es: "Descubre tu carrera, encuentra la universidad para ti y conéctate con mentores profesionales — todo gratis." },
    cta1:     { ht: "Kòmanse Tès Ou",      fr: "Commencer le test", en: "Start Your Test",  es: "Comenzar Test" },
    cta2:     { ht: "Wè ki sa Xpoze ye",   fr: "Voir Xpoze en action", en: "See Xpoze in action", es: "Ver Xpoze en acción" },
    stat1:    { ht: "Elèv aktif",          fr: "Élèves actifs",    en: "Active students",  es: "Estudiantes activos" },
    stat2:    { ht: "Inivèsite mondyal",   fr: "Universités mondiales", en: "World universities", es: "Universidades mundiales" },
    stat3:    { ht: "Mentor ekspè",        fr: "Mentors experts",  en: "Expert mentors",   es: "Mentores expertos" },
    stat4:    { ht: "Gratis pou tout tan", fr: "Gratuit pour toujours", en: "Free forever", es: "Gratis para siempre" },
  },
  about: {
    title:    { ht: "Sou Xpoze",           fr: "À propos de Xpoze", en: "About Xpoze",     es: "Acerca de Xpoze" },
    mission:  { ht: "Misyon nou",          fr: "Notre mission",    en: "Our mission",      es: "Nuestra misión" },
    missionText: {
      ht: "Xpoze kreye pou bay chak elèv Ayiti chans yo merite — dekouvri karyè, jwenn bon inivèsite, konekte ak mentor, epi fè pwojè lavi yo tounen reyalite.",
      fr: "Xpoze a été créé pour donner à chaque élève haïtien la chance qu'il mérite — découvrir sa voie, trouver la bonne université, se connecter avec des mentors et réaliser ses projets de vie.",
      en: "Xpoze was built to give every Haitian student the chance they deserve — to discover their path, find the right university, connect with mentors, and turn their life goals into reality.",
      es: "Xpoze fue creado para dar a cada estudiante haitiano la oportunidad que merece — descubrir su camino, encontrar la universidad correcta, conectarse con mentores y convertir sus metas en realidad.",
    },
    vision:   { ht: "Vizyon nou",          fr: "Notre vision",     en: "Our vision",       es: "Nuestra visión" },
    visionText: {
      ht: "Yon Ayiti kote chak jèn gen aksè ak enfòmasyon, resous, ak rezo ki kapab chanje lavi yo.",
      fr: "Un Haïti où chaque jeune a accès aux informations, ressources et réseaux qui peuvent transformer sa vie.",
      en: "A Haiti where every young person has access to the information, resources, and networks that can change their life.",
      es: "Un Haití donde cada joven tiene acceso a la información, recursos y redes que pueden cambiar su vida.",
    },
    founder:  { ht: "Fondatè",             fr: "Fondateur",        en: "Founder",          es: "Fundador" },
    founderBio: {
      ht: "Marc-Kendy Losier se kreye Xpoze ak yon sèl vizyon: fè oryantasyon karyè tounen yon pòt louvri pou chak elèv Ayiti. Kòm yon jèn ki konnen defi sistèm edikasyon an, li vle chanje istwa a.",
      fr: "Marc-Kendy Losier a créé Xpoze avec une seule vision : transformer l'orientation professionnelle en une porte ouverte pour chaque élève haïtien. En tant que jeune connaissant les défis du système éducatif, il veut changer l'histoire.",
      en: "Marc-Kendy Losier created Xpoze with one vision: to turn career orientation into an open door for every Haitian student. As a young person who knows the challenges of the education system, he wants to change the story.",
      es: "Marc-Kendy Losier creó Xpoze con una sola visión: convertir la orientación profesional en una puerta abierta para cada estudiante haitiano. Como joven que conoce los desafíos del sistema educativo, quiere cambiar la historia.",
    },
    impact:   { ht: "Enpak nou",           fr: "Notre impact",     en: "Our impact",       es: "Nuestro impacto" },
    howTitle: { ht: "Kijan Xpoze travay",  fr: "Comment Xpoze fonctionne", en: "How Xpoze works", es: "Cómo funciona Xpoze" },
  },
  dashboard: {
    welcome:  { ht: "Bonjou",              fr: "Bonjour",          en: "Hello",            es: "Hola" },
    goLive:   { ht: "Kòmanse Live",        fr: "Démarrer en direct", en: "Go Live",        es: "Ir en vivo" },
    createPost: { ht: "Kreye Pòs",         fr: "Créer un post",    en: "Create Post",      es: "Crear publicación" },
    students: { ht: "Elèv",               fr: "Élèves",           en: "Students",         es: "Estudiantes" },
    sessions: { ht: "Sesyon",             fr: "Sessions",         en: "Sessions",         es: "Sesiones" },
    requests: { ht: "Demann",             fr: "Demandes",         en: "Requests",         es: "Solicitudes" },
    profile:  { ht: "Pwofil",             fr: "Profil",           en: "Profile",          es: "Perfil" },
  },
  footer: {
    platform: { ht: "Platfòm",            fr: "Plateforme",       en: "Platform",         es: "Plataforma" },
    contact:  { ht: "Kontakt",            fr: "Contact",          en: "Contact",          es: "Contacto" },
    rights:   { ht: "Tout dwa rezève.",   fr: "Tous droits réservés.", en: "All rights reserved.", es: "Todos los derechos reservados." },
    tagline:  { ht: "Transforming Career Orientation into Opportunity", fr: "Transforming Career Orientation into Opportunity", en: "Transforming Career Orientation into Opportunity", es: "Transformando la Orientación Profesional en Oportunidad" },
  },
} as const;

export type TranslationKey = typeof T;

export function useT() {
  const { lang } = useLangStore();
  return {
    t: (section: keyof TranslationKey, key: string): string => {
      const sec = T[section] as Record<string, Record<Lang, string>>;
      return sec[key]?.[lang] ?? sec[key]?.["ht"] ?? key;
    },
    lang,
  };
}

// Direct accessor for non-hook contexts
export function getT(lang: Lang, section: keyof TranslationKey, key: string): string {
  const sec = T[section] as Record<string, Record<Lang, string>>;
  return sec[key]?.[lang] ?? sec[key]?.["ht"] ?? key;
}
