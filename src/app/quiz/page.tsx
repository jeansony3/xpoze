"use client";
import { useState } from "react";
import Link from "next/link";
import { RIASEC_QUESTIONS, CAREERS, getCareersByRiasec } from "@/lib/data";
import { useAuthStore } from "@/lib/store";

type RiasecScores = Record<string, number>;

export default function QuizPage() {
  const { user, updateUser } = useAuthStore();
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<RiasecScores>({});

  const RIASEC_LABELS: Record<string, string> = {
    R: "Reyalis (Realistic)",
    I: "Envestigatè (Investigative)",
    A: "Atis (Artistic)",
    S: "Sosyal (Social)",
    E: "Antreprenè (Enterprising)",
    C: "Konvansyonèl (Conventional)",
  };

  const RIASEC_COLORS: Record<string, string> = {
    R: "bg-orange-500",
    I: "bg-blue-500",
    A: "bg-purple-500",
    S: "bg-green-500",
    E: "bg-red-500",
    C: "bg-yellow-500",
  };

  function handleAnswer(qid: number, val: number) {
    setAnswers((prev) => ({ ...prev, [qid]: val }));
  }

  function calculateResults() {
    const s: RiasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    RIASEC_QUESTIONS.forEach((q) => {
      s[q.type] = (s[q.type] || 0) + (answers[q.id] || 0);
    });
    const max = Math.max(...Object.values(s));
    const normalized: RiasecScores = {};
    Object.keys(s).forEach((k) => {
      normalized[k] = max > 0 ? Math.round((s[k] / max) * 100) : 0;
    });
    setScores(normalized);
    if (user) {
      updateUser({ riasecResult: normalized, quizCompleted: true });
    }
    setStep("results");
  }

  const topCodes = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([k]) => k);

  const recommended = getCareersByRiasec(topCodes);
  const answered = Object.keys(answers).length;
  const total = RIASEC_QUESTIONS.length;

  if (step === "intro") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-6">🧠</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tès Oryantasyon RIASEC
        </h1>
        <p className="text-gray-600 mb-6">
          Tès sa a baze sou modèl RIASEC (John Holland). Li ede ou dekouvri
          kalite travay ki pi mache ak pèsonalite ak enterè ou. Repon{" "}
          <strong>18 kesyon</strong> — sèlman 5 minit!
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">
            6 pwofil RIASEC yo:
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(RIASEC_LABELS).map(([k, v]) => (
              <div key={k} className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full ${RIASEC_COLORS[k]} text-white text-xs flex items-center justify-center font-bold`}
                >
                  {k}
                </span>
                <span className="text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setStep("quiz")}
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kòmanse tès la →
        </button>
      </div>
    );
  }

  if (step === "quiz") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Tès Oryantasyon</h1>
            <span className="text-sm text-gray-500">
              {answered}/{total} repon
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(answered / total) * 100}%` }}
            />
          </div>
        </div>

        <p className="text-gray-600 mb-8 text-sm">
          Pou chak afirmasyon, chwazi nivo akò ou: 1 = Pa ditou dakò, 5 = Totalman dakò
        </p>

        <div className="space-y-6">
          {RIASEC_QUESTIONS.map((q) => (
            <div
              key={q.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-200"
            >
              <p className="text-gray-900 font-medium mb-4">
                {q.id}. {q.text}
              </p>
              <div className="flex gap-3 justify-between">
                {[1, 2, 3, 4, 5].map((v) => (
                  <button
                    key={v}
                    onClick={() => handleAnswer(q.id, v)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                      answers[q.id] === v
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
                <span>Pa dakò</span>
                <span>Dakò anpil</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={calculateResults}
            disabled={answered < total}
            className={`font-semibold px-8 py-3 rounded-lg transition-colors ${
              answered >= total
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {answered < total
              ? `Repon tout kesyon yo (${total - answered} rete)`
              : "Wè rezilta mwen →"}
          </button>
        </div>
      </div>
    );
  }

  // Results
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Rezilta Tès ou
        </h1>
        <p className="text-gray-600">
          Baze sou repons ou yo, men pwofil RIASEC ou ak rekòmandasyon karyè
          ki mache ak ou.
        </p>
      </div>

      {/* RIASEC scores */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
        <h2 className="font-semibold text-gray-900 mb-4">Pwofil RIASEC ou</h2>
        <div className="space-y-3">
          {Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .map(([code, pct]) => (
              <div key={code}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">
                    {RIASEC_LABELS[code]}
                  </span>
                  <span className="text-gray-500">{pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${RIASEC_COLORS[code]}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Career recommendations */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Karyè rekòmande pou ou
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {recommended.map((career) => (
          <Link
            key={career.id}
            href={`/careers/${career.id}`}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow hover:border-blue-300"
          >
            <h3 className="font-semibold text-gray-900 mb-1">{career.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{career.description}</p>
            <div className="flex gap-2 flex-wrap">
              {career.riasecCodes.map((c) => (
                <span
                  key={c}
                  className={`text-xs text-white px-2 py-0.5 rounded-full ${RIASEC_COLORS[c]}`}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-3 text-sm text-gray-500">
              💰 {career.salary}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/universities"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 text-center"
        >
          Eksplore inivèsite →
        </Link>
        <Link
          href="/mentors"
          className="bg-white text-blue-600 border border-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 text-center"
        >
          Jwenn yon mentor →
        </Link>
        <button
          onClick={() => {
            setStep("intro");
            setAnswers({});
            setScores({});
          }}
          className="text-gray-600 text-sm underline"
        >
          Refè tès la
        </button>
      </div>
    </div>
  );
}
