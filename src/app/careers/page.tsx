"use client";
import { useState } from "react";
import Link from "next/link";
import { CAREERS } from "@/lib/data";

const domains = ["Tous", ...Array.from(new Set(CAREERS.map((c) => c.domain)))];

export default function CareersPage() {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = CAREERS.filter((c) => {
    const matchDomain = filter === "Tous" || c.domain === filter;
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.nameHT.toLowerCase().includes(search.toLowerCase());
    return matchDomain && matchSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Eksplore Karyè yo
        </h1>
        <p className="text-gray-600">
          Dekouvri domèn karyè, matyè enpòtan, ak chemen pou rive la.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Chèche yon karyè..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FE1]"
        />
        <div className="flex gap-2 flex-wrap">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === d
                  ? "bg-[#1E8FE1] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((career) => (
          <Link
            key={career.id}
            href={`/careers/${career.id}`}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-[#1E8FE1]"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="font-semibold text-gray-900">{career.name}</h2>
                <p className="text-gray-500 text-xs">{career.nameHT}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                {career.domain}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{career.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {career.subjects.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600 font-medium">💰 {career.salary}</span>
              <span className="text-[#1E8FE1] font-medium">Wè roadmap →</span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          Pa gen karyè ki koresponn ak rechèch ou.
        </div>
      )}
    </div>
  );
}
