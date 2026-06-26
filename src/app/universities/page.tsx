"use client";
import { useState } from "react";
import Link from "next/link";
import { PROGRAMS, UNIVERSITIES } from "@/lib/data";

const domains = ["Tous", ...Array.from(new Set(PROGRAMS.map((p) => p.domain)))];
const countries = ["Tous", ...Array.from(new Set(PROGRAMS.map((p) => p.country)))];
const levels = ["Tous", ...Array.from(new Set(PROGRAMS.map((p) => p.level)))];

export default function UniversitiesPage() {
  const [domain, setDomain] = useState("Tous");
  const [country, setCountry] = useState("Tous");
  const [level, setLevel] = useState("Tous");
  const [search, setSearch] = useState("");
  const [onlyScholarship, setOnlyScholarship] = useState(false);

  const filtered = PROGRAMS.filter((p) => {
    if (domain !== "Tous" && p.domain !== domain) return false;
    if (country !== "Tous" && p.country !== country) return false;
    if (level !== "Tous" && p.level !== level) return false;
    if (onlyScholarship && !p.scholarship) return false;
    if (
      search &&
      !p.name.toLowerCase().includes(search.toLowerCase()) &&
      !p.universityName.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Katalòg Inivèsite ak Pwogram
        </h1>
        <p className="text-gray-600">
          {PROGRAMS.length} pwogram nan {UNIVERSITIES.length} inivèsite. Filtre
          pa domèn, peyi, nivo, ak pri.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 mb-8 space-y-4">
        <input
          type="text"
          placeholder="Chèche pwogram oswa inivèsite..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Domèn
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {domains.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Peyi
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Nivo etid
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {levels.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            checked={onlyScholarship}
            onChange={(e) => setOnlyScholarship(e.target.checked)}
            className="rounded"
          />
          Montre sèlman pwogram ak bous disponib
        </label>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {filtered.length} rezilta
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((prog) => (
          <Link
            key={prog.id}
            href={`/universities/${prog.universityId}`}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-blue-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="font-semibold text-gray-900">{prog.name}</h2>
                <p className="text-gray-500 text-sm">{prog.universityName}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                  {prog.domain}
                </span>
                {prog.scholarship && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                    🎓 Bous
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <div className="text-gray-500">
                📍 {prog.country}
              </div>
              <div className="text-gray-500">⏱ {prog.duration}</div>
              <div className="text-gray-500">🌐 {prog.language}</div>
              <div className="text-gray-500">📅 Dat limit: {prog.deadline}</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="font-medium text-gray-900">
                  {prog.tuitionMin === 0 ? "Gratis" : `$${prog.tuitionMin}`}
                  {prog.tuitionMax > prog.tuitionMin
                    ? ` — $${prog.tuitionMax}`
                    : ""}
                </span>
                <span className="text-gray-400"> /{prog.currency}</span>
              </div>
              <span className="text-blue-600 text-sm font-medium">
                Wè detay →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          Pa gen pwogram ki koresponn ak filtè ou yo.
        </div>
      )}
    </div>
  );
}
