"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/lib/store";

type LiveSession = {
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

const SESSIONS: LiveSession[] = [
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

const DOMAIN_COLORS: Record<string, string> = {
  Technologie: "bg-blue-100 text-blue-700",
  Santé: "bg-green-100 text-green-700",
  Juridique: "bg-purple-100 text-purple-700",
  Agriculture: "bg-lime-100 text-lime-700",
  Oryantasyon: "bg-indigo-100 text-indigo-700",
  Éducation: "bg-amber-100 text-amber-700",
};

export default function LivePage() {
  const { user } = useAuthStore();
  const [registered, setRegistered] = useState<Set<string>>(new Set());

  function register(id: string) {
    setRegistered((prev) => new Set(prev).add(id));
  }

  const liveNow = SESSIONS.filter((s) => s.isLive);
  const upcoming = SESSIONS.filter((s) => !s.isLive);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Sesyon Live & Webinar
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-3">
          Aprann dirèkteman ak pwofesyonèl
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Sesyon live interaktif pou poze kesyon ou dirèkteman bay mentor ak
          ekspè. Tout sesyon gratis pou manm Xpoze.
        </p>
      </div>

      {/* Live NOW section */}
      {liveNow.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            Kounye a — EN DIRECT
          </h2>
          {liveNow.map((session) => (
            <div
              key={session.id}
              className="bg-gradient-to-br from-red-600 to-rose-500 rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white text-red-600 text-xs font-black px-3 py-1 rounded-full">
                    🔴 LIVE
                  </span>
                  <span className="text-red-200 text-sm">{session.spotsLeft} plas rete</span>
                </div>
                <h3 className="text-2xl font-black mb-2">{session.title}</h3>
                <p className="text-red-200 mb-1 text-sm">
                  {session.host} · {session.role}
                </p>
                <p className="text-red-100 mb-6 max-w-xl leading-relaxed text-sm">
                  {session.description}
                </p>
                <div className="flex gap-4 items-center">
                  {user ? (
                    registered.has(session.id) ? (
                      <a
                        href="#"
                        className="flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors"
                      >
                        📺 Rejwenn sesyon an
                      </a>
                    ) : (
                      <button
                        onClick={() => register(session.id)}
                        className="flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors"
                      >
                        ▶ Rejwenn LIVE la
                      </button>
                    )
                  ) : (
                    <Link
                      href="/register"
                      className="flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors"
                    >
                      Enskri pou patisipe →
                    </Link>
                  )}
                  <span className="text-red-200 text-sm">⏱ {session.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upcoming sessions */}
      <h2 className="text-xl font-black text-gray-900 mb-6">
        📅 Sesyon k ap vini yo
      </h2>
      <div className="space-y-4">
        {upcoming.map((session) => {
          const isReg = registered.has(session.id);
          const isFull = session.spotsLeft === 0;
          const fillPct = Math.round(
            ((session.spots - session.spotsLeft) / session.spots) * 100
          );

          return (
            <div
              key={session.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Date block */}
                <div className="flex-shrink-0 bg-indigo-50 rounded-xl px-4 py-3 text-center min-w-[80px]">
                  <div className="text-xs font-semibold text-indigo-500 uppercase">
                    {new Date(session.date).toLocaleDateString("fr", { month: "short" })}
                  </div>
                  <div className="text-2xl font-black text-indigo-700">
                    {new Date(session.date).getDate()}
                  </div>
                  <div className="text-xs text-indigo-400">{session.time}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-1 flex-wrap">
                    <h3 className="font-bold text-gray-900 leading-tight flex-1">
                      {session.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${DOMAIN_COLORS[session.domain] || "bg-gray-100 text-gray-600"}`}
                    >
                      {session.domain}
                    </span>
                  </div>

                  <p className="text-indigo-600 text-sm font-medium mb-1">
                    {session.host}{" "}
                    <span className="text-gray-400 font-normal">· {session.role}</span>
                  </p>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {session.description}
                  </p>

                  {/* Spots bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>{session.spots - session.spotsLeft} enskri</span>
                      <span className={session.spotsLeft < 15 ? "text-red-500 font-semibold" : ""}>
                        {session.spotsLeft} plas rete / {session.spots}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${fillPct > 80 ? "bg-red-500" : "bg-indigo-500"}`}
                        style={{ width: `${fillPct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex gap-2 flex-wrap">
                      {session.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="text-xs text-gray-400">⏱ {session.duration}</span>
                    </div>

                    {user ? (
                      isReg ? (
                        <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                          ✓ Ou enskri
                        </span>
                      ) : isFull ? (
                        <span className="text-red-500 text-sm font-semibold">
                          Konplè
                        </span>
                      ) : (
                        <button
                          onClick={() => register(session.id)}
                          className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
                        >
                          Rezève plas mwen →
                        </button>
                      )
                    ) : (
                      <Link
                        href="/register"
                        className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
                      >
                        Enskri pou rezève →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Host CTA */}
      <div className="mt-12 bg-indigo-950 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center gap-6 justify-between">
        <div>
          <h3 className="text-xl font-black mb-2">
            Ou vle anime yon sesyon?
          </h3>
          <p className="text-indigo-300 text-sm max-w-md">
            Si ou se yon pwofesyonèl ki vle pataje eksperyans ou ak elèv Ayiti,
            kontakte nou pou planifye yon sesyon live.
          </p>
        </div>
        <a
          href="mailto:live@xpoze.ht"
          className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
        >
          Pwpoze yon sesyon →
        </a>
      </div>
    </div>
  );
}
