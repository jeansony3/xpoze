import { UNIVERSITIES, PROGRAMS } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return UNIVERSITIES.map((u) => ({ id: u.id }));
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const university = UNIVERSITIES.find((u) => u.id === id);
  if (!university) notFound();

  const programs = PROGRAMS.filter((p) => p.universityId === id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/universities"
        className="text-blue-600 text-sm hover:underline mb-6 block"
      >
        ← Retounen nan inivèsite yo
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mb-3 inline-block">
              {university.type} · {university.country}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {university.name}
            </h1>
            <div className="flex gap-3 flex-wrap text-sm text-gray-600">
              <span>📍 {university.city}</span>
              <span>🌐 {university.languages.join(", ")}</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">
            {university.name.charAt(0)}
          </div>
        </div>
      </div>

      {/* Programs */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Pwogram disponib ({programs.length})
      </h2>

      <div className="space-y-4">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{prog.name}</h3>
                <p className="text-gray-500 text-sm">{prog.nameHT}</p>
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                  {prog.level}
                </span>
                {prog.scholarship && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                    🎓 Bous disponib
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
              <div>
                <span className="text-gray-400 text-xs">Dire</span>
                <div className="font-medium text-gray-700">{prog.duration}</div>
              </div>
              <div>
                <span className="text-gray-400 text-xs">Lang</span>
                <div className="font-medium text-gray-700">{prog.language}</div>
              </div>
              <div>
                <span className="text-gray-400 text-xs">Pri (an)</span>
                <div className="font-medium text-gray-700">
                  {prog.tuitionMin === 0
                    ? "Gratis"
                    : `$${prog.tuitionMin}–$${prog.tuitionMax}`}
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xs">Dat limit</span>
                <div className="font-medium text-gray-700">{prog.deadline}</div>
              </div>
            </div>

            <div>
              <span className="text-xs font-medium text-gray-500">
                Kondisyon admisyon:
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {prog.requirements.map((r) => (
                  <span
                    key={r}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {programs.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            Pa gen pwogram ki dokimante pou inivèsite sa a pou kounye a.
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">
          Bezwen plis enfòmasyon?
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          Pale ak yon mentor ki pase nan inivèsite sa a pou jwenn konsèy detaye
          ak eksperyans pèsonèl.
        </p>
        <Link
          href="/mentors"
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 inline-block"
        >
          Jwenn yon mentor →
        </Link>
      </div>
    </div>
  );
}
