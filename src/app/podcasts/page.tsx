"use client";
import { useState } from "react";

type Episode = {
  id: string;
  title: string;
  guest: string;
  role: string;
  domain: string;
  duration: string;
  date: string;
  description: string;
  audioUrl: string | null;
  youtubeId: string | null;
  tags: string[];
};

const EPISODES: Episode[] = [
  {
    id: "ep1",
    title: "Kijan mwen te vin Enjenyè Softwè?",
    guest: "Jean-Baptiste Pierre",
    role: "Ingénieur Logiciel Senior @ Montréal",
    domain: "Technologie",
    duration: "42 min",
    date: "2025-06-10",
    description:
      "Jean-Baptiste pataje vwayaj li depi lekòl teknik ann Ayiti rive nan yon karrye tech aletranje. Konsèy pratik sou kòman aprann pwograme, kreye yon portfolio, ak jwenn premye travay ou nan domèn la.",
    audioUrl: null,
    youtubeId: null,
    tags: ["Tech", "Étude à l'étranger", "Carrière"],
  },
  {
    id: "ep2",
    title: "Medsin ann Ayiti: reyalite ak espwa",
    guest: "Dr. Marie-Claire Desrosiers",
    role: "Médecin Pédiatre, Port-au-Prince",
    domain: "Santé",
    duration: "55 min",
    date: "2025-05-28",
    description:
      "Dr. Desrosiers pale sou parcours li nan Fakilte Medsin UEH, defi yo, ak rekonpans travay la. Li bay konsèy pou jèn ki vle antre nan domèn sante a.",
    audioUrl: null,
    youtubeId: null,
    tags: ["Santé", "UEH", "Médecine"],
  },
  {
    id: "ep3",
    title: "Dwa des affaires: opòtinite nan Karayib la",
    guest: "Me. Sophia Belizaire",
    role: "Avocate d'Affaires, Haïti / Paris",
    domain: "Juridique",
    duration: "38 min",
    date: "2025-05-14",
    description:
      "Sophia eksplike kòman dwa des affaires se youn nan espesyalizasyon ki pi peye nan rejyon an. Li pale sou UEH, Paris II, ak kòman konbine de kilti juridik.",
    audioUrl: null,
    youtubeId: null,
    tags: ["Droit", "Affaires", "International"],
  },
  {
    id: "ep4",
    title: "Agrikilti modèn: nouri Ayiti demen",
    guest: "Réginald Cajuste",
    role: "Agronome & Entrepreneur, Artibonite",
    domain: "Agriculture",
    duration: "47 min",
    date: "2025-04-30",
    description:
      "Réginald montre kòman agrikilti dirab pa sèlman yon vokasyon, men yon opòtinite biznis serye. Diskisyon sou teknoloji agrikòl, kooperativ, ak sipò gouvènman.",
    audioUrl: null,
    youtubeId: null,
    tags: ["Agriculture", "Entrepreneuriat", "Durabilité"],
  },
  {
    id: "ep5",
    title: "Achitekti ak reziyans: bati Ayiti miyò",
    guest: "Nadège Thermilus",
    role: "Architecte & Urbaniste",
    domain: "Ingénierie",
    duration: "51 min",
    date: "2025-04-12",
    description:
      "Nadège diskite sou wòl achitèk nan konstwi vil ki rezistan kont tranbleman tè ak inondasyon. Enpòtans dizèn sosyal ak achitekti abòdab.",
    audioUrl: null,
    youtubeId: null,
    tags: ["Architecture", "Résilience", "Urban"],
  },
  {
    id: "ep6",
    title: "Edikasyon: chanje Ayiti yon elèv alafwa",
    guest: "Frantz Estimable",
    role: "Directeur d'École & Pédagogue",
    domain: "Éducation",
    duration: "44 min",
    date: "2025-03-25",
    description:
      "Frantz diskite sou defi sistèm edikasyon an, inovasyon pedagojik, ak kòman pwofesè ak direktè ka gen plis enpak nan kominote yo.",
    audioUrl: null,
    youtubeId: null,
    tags: ["Éducation", "Pédagogie", "Impact"],
  },
];

const domains = ["Tous", ...Array.from(new Set(EPISODES.map((e) => e.domain)))];

const DOMAIN_COLORS: Record<string, string> = {
  Technologie: "bg-blue-100 text-blue-700",
  Santé: "bg-green-100 text-green-700",
  Juridique: "bg-purple-100 text-purple-700",
  Agriculture: "bg-lime-100 text-lime-700",
  Ingénierie: "bg-orange-100 text-orange-700",
  Éducation: "bg-amber-100 text-amber-700",
};

export default function PodcastsPage() {
  const [filter, setFilter] = useState("Tous");
  const [playing, setPlaying] = useState<string | null>(null);

  const filtered = EPISODES.filter(
    (e) => filter === "Tous" || e.domain === filter
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          🎙️ Xpoze Podcast
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3">
          Aprann nan eksperyans reyèl
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Pwofesyonèl Ayisyen pataje istwa yo, konsèy pratik, ak chemen karyè
          yo pou inspire prochèn jenerasyon an.
        </p>
      </div>

      {/* Featured episode */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-2xl p-8 mb-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
            ⭐ Episòd Featyè
          </span>
          <h2 className="text-2xl font-black mb-2">{EPISODES[0].title}</h2>
          <p className="text-indigo-200 text-sm mb-1">
            {EPISODES[0].guest} · {EPISODES[0].role}
          </p>
          <p className="text-indigo-200 text-sm mb-6 max-w-xl leading-relaxed">
            {EPISODES[0].description}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setPlaying(playing === EPISODES[0].id ? null : EPISODES[0].id)
              }
              className="flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              {playing === EPISODES[0].id ? "⏸ Pause" : "▶ Koute kounye a"}
            </button>
            <span className="text-indigo-300 text-sm">
              ⏱ {EPISODES[0].duration}
            </span>
          </div>
          {playing === EPISODES[0].id && (
            <div className="mt-4 bg-white/10 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[3, 5, 4, 7, 5, 3, 6, 4, 5, 3, 7, 5, 4].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-orange-400 rounded-full animate-pulse"
                      style={{ height: `${h * 4}px`, animationDelay: `${i * 80}ms` }}
                    />
                  ))}
                </div>
                <span className="text-white/70 text-sm">
                  Kap jwe... (demo mode)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {domains.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              filter === d
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Episode list */}
      <div className="space-y-4">
        {filtered.map((ep, i) => (
          <div
            key={ep.id}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 transition-all hover:shadow-md"
          >
            <div className="flex gap-5 items-start">
              {/* Number */}
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 font-black text-lg flex items-center justify-center flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold text-gray-900 leading-tight">
                    {ep.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${DOMAIN_COLORS[ep.domain] || "bg-gray-100 text-gray-600"}`}
                  >
                    {ep.domain}
                  </span>
                </div>
                <p className="text-indigo-600 text-sm font-medium mb-1">
                  {ep.guest} — <span className="text-gray-500 font-normal">{ep.role}</span>
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {ep.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {ep.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs">⏱ {ep.duration}</span>
                    <button
                      onClick={() =>
                        setPlaying(playing === ep.id ? null : ep.id)
                      }
                      className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
                        playing === ep.id
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {playing === ep.id ? "⏸ Pause" : "▶ Koute"}
                    </button>
                  </div>
                </div>
                {playing === ep.id && (
                  <div className="mt-3 bg-indigo-50 rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[3, 5, 4, 7, 5, 3, 6].map((h, idx) => (
                        <div
                          key={idx}
                          className="w-1 bg-indigo-400 rounded-full animate-pulse"
                          style={{ height: `${h * 3}px`, animationDelay: `${idx * 100}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-indigo-600 text-xs font-medium">
                      Kap jwe — {ep.duration} (demo mode)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit CTA */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-black mb-2">Ou vle pataje istwa ou?</h3>
        <p className="text-orange-100 mb-6">
          Nou ap chèche pwofesyonèl Ayisyen ki pret pataje eksperyans yo ak
          prochèn jenerasyon an.
        </p>
        <a
          href="mailto:podcast@xpoze.ht"
          className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
        >
          Kontakte nou → podcast@xpoze.ht
        </a>
      </div>
    </div>
  );
}
