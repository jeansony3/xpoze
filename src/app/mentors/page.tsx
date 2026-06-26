"use client";
import { useState } from "react";
import { MENTORS } from "@/lib/data";
import { useAuthStore } from "@/lib/store";
import Link from "next/link";

const domains = ["Tous", ...Array.from(new Set(MENTORS.map((m) => m.domain)))];
const countries = ["Tous", ...Array.from(new Set(MENTORS.map((m) => m.country)))];

export default function MentorsPage() {
  const { user } = useAuthStore();
  const [domain, setDomain] = useState("Tous");
  const [country, setCountry] = useState("Tous");
  const [requestedId, setRequestedId] = useState<string | null>(null);

  const filtered = MENTORS.filter((m) => {
    if (domain !== "Tous" && m.domain !== domain) return false;
    if (country !== "Tous" && m.country !== country) return false;
    return true;
  });

  function handleRequest(mentorId: string) {
    if (!user) return;
    setRequestedId(mentorId);
    setTimeout(() => setRequestedId(null), 3000);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Konekte ak Mentor
        </h1>
        <p className="text-gray-600">
          Jwenn yon pwofesyonèl ekspèrte ki ka gide ou sou karyè ou vle a.
          Sesyon 1-a-1 gratis pou elèv ki enskri.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-500 mb-1 block">
            Domèn
          </label>
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {domains.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-500 mb-1 block">
            Peyi
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {countries.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col"
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#1E8FE1] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                {mentor.avatar}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{mentor.name}</h2>
                <p className="text-gray-500 text-sm">{mentor.profession}</p>
                <span className="bg-[#EEF4FF] text-[#1E8FE1] text-xs px-2 py-0.5 rounded-full mt-1 inline-block">
                  {mentor.domain}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 flex-1">{mentor.bio}</p>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">📍 Peyi</span>
                <span className="text-gray-700 font-medium">{mentor.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">🕐 Disponibilite</span>
                <span className="text-gray-700 font-medium">{mentor.availability}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">🌐 Lang</span>
                <span className="text-gray-700 font-medium text-right">
                  {mentor.languages.join(", ")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">⭐ Evalyasyon</span>
                <span className="text-gray-700 font-medium">
                  {mentor.rating}/5 ({mentor.sessions} sesyon)
                </span>
              </div>
            </div>

            {user ? (
              requestedId === mentor.id ? (
                <div className="bg-green-50 text-green-700 text-sm px-4 py-2 rounded-lg text-center font-medium">
                  ✓ Demann voye! Mentor an pral kontakte ou.
                </div>
              ) : (
                <button
                  onClick={() => handleRequest(mentor.id)}
                  className="w-full bg-[#1E8FE1] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#142366] transition-colors"
                >
                  Mande yon sesyon
                </button>
              )
            ) : (
              <Link
                href="/register"
                className="w-full bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-center block"
              >
                Enskri pou konekte →
              </Link>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          Pa gen mentor ki koresponn ak filtè ou yo.
        </div>
      )}
    </div>
  );
}
