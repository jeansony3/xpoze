import { CAREERS, ROADMAPS, PROGRAMS, CAREER_SALARIES } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return CAREERS.map((c) => ({ id: c.id }));
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = CAREERS.find((c) => c.id === id);
  if (!career) notFound();

  const roadmap = ROADMAPS.find((r) => r.careerId === id);
  const relatedPrograms = PROGRAMS.filter(
    (p) => p.domain === career.domain
  );

  const RIASEC_LABELS: Record<string, string> = {
    R: "Reyalis",
    I: "Envestigatè",
    A: "Atis",
    S: "Sosyal",
    E: "Antreprenè",
    C: "Konvansyonèl",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/careers"
        className="text-[#1E8FE1] text-sm hover:underline mb-6 block"
      >
        ← Retounen nan karyè yo
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0B1D51] to-[#1E8FE1] text-white rounded-2xl p-8 mb-8">
        <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block">
          {career.domain}
        </span>
        <h1 className="text-3xl font-bold mb-2">{career.name}</h1>
        <p className="text-blue-100">{career.description}</p>
        <div className="flex gap-4 mt-4 flex-wrap">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            💰 {career.salary}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            📈 {career.outlook}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subjects */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-3">
              📚 Matyè enpòtan
            </h2>
            <div className="flex flex-wrap gap-2">
              {career.subjects.map((s) => (
                <span
                  key={s}
                  className="bg-[#EEF4FF] text-[#0B1D51] text-sm px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-3">
              💡 Konpetans kle
            </h2>
            <div className="flex flex-wrap gap-2">
              {career.skills.map((s) => (
                <span
                  key={s}
                  className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          {roadmap && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">
                🗺️ Roadmap — depi lekòl rive inivèsite
              </h2>
              <div className="space-y-4">
                {roadmap.steps.map((step, i) => (
                  <div key={step.grade} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#1E8FE1] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < roadmap.steps.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-200 mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {step.grade}
                      </h3>
                      <ul className="space-y-1">
                        {step.actions.map((a) => (
                          <li
                            key={a}
                            className="text-gray-600 text-sm flex gap-2"
                          >
                            <span className="text-blue-400 mt-0.5">•</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-amber-50 rounded-lg p-4">
                <h3 className="font-semibold text-amber-800 mb-2">
                  📄 Dokiman pou prepare
                </h3>
                <ul className="space-y-1">
                  {roadmap.documents.map((d) => (
                    <li key={d} className="text-amber-700 text-sm flex gap-2">
                      <span>✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {!roadmap && (
            <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-300 text-center text-gray-500">
              Roadmap pou karyè sa a ap vini byento.
            </div>
          )}

          {/* Salary Chart */}
          {CAREER_SALARIES[id] && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-1">
                💰 Pwogresyon salaryal (USD/an)
              </h2>
              <p className="text-gray-400 text-xs mb-5">
                Estimasyon selon eksperyans — varye selon peyi ak sektè
              </p>
              <div className="space-y-5">
                {CAREER_SALARIES[id].map((row, idx) => {
                  const globalMax = Math.max(
                    ...CAREER_SALARIES[id].map((r) => r.max)
                  );
                  const barMinPct = (row.min / globalMax) * 100;
                  const barMaxPct = (row.max / globalMax) * 100;
                  return (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-700">
                          {row.level}
                        </span>
                        <span className="text-xs text-[#1E8FE1] font-semibold">
                          ${row.min.toLocaleString()} – ${row.max.toLocaleString()}
                        </span>
                      </div>
                      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                        {/* min bar */}
                        <div
                          className="absolute top-0 h-full rounded-full bg-[#0B1D51]/30"
                          style={{ width: `${barMinPct}%` }}
                        />
                        {/* max bar */}
                        <div
                          className="absolute top-0 h-full rounded-full bg-[#1E8FE1]"
                          style={{
                            left: `${barMinPct}%`,
                            width: `${barMaxPct - barMinPct}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-gray-300 text-xs mt-4">
                Barre bleye = fouchèt salè; barre gri = depa minimòm
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* RIASEC */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Pwofil RIASEC</h3>
            <div className="flex gap-2 flex-wrap">
              {career.riasecCodes.map((c) => (
                <span
                  key={c}
                  className="bg-[#EEF4FF] text-[#0B1D51] font-semibold px-3 py-1 rounded-full text-sm"
                >
                  {c} — {RIASEC_LABELS[c]}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Si pwofil ou mache, fè tès oryantasyon an.
            </p>
            <Link
              href="/quiz"
              className="text-[#1E8FE1] text-sm font-medium hover:underline mt-2 block"
            >
              Fè tès RIASEC →
            </Link>
          </div>

          {/* Related programs */}
          {relatedPrograms.length > 0 && (
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                Pwogram ki koresponn
              </h3>
              <div className="space-y-3">
                {relatedPrograms.map((p) => (
                  <Link
                    key={p.id}
                    href={`/universities/${p.universityId}`}
                    className="block hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors"
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {p.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {p.universityName} · {p.country}
                    </div>
                    <div className="text-xs text-[#1E8FE1] mt-0.5">
                      {p.duration} · {p.language}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mentors CTA */}
          <div className="bg-[#EEF4FF] rounded-xl p-5 border border-[#1E8FE1]/30">
            <h3 className="font-semibold text-[#0B1D51] mb-2">
              🤝 Pale ak yon mentor
            </h3>
            <p className="text-[#0B1D51] text-sm mb-3">
              Jwenn yon pwofesyonèl nan {career.domain} pou konsèy pratik.
            </p>
            <Link
              href={`/mentors?domain=${career.domain}`}
              className="bg-[#1E8FE1] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#142366] transition-colors inline-block"
            >
              Wè mentor →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
