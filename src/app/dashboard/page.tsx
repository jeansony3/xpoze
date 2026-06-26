"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";
import { CAREERS, getCareersByRiasec } from "@/lib/data";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  const riasecResult = user.riasecResult;
  const topCodes = riasecResult
    ? Object.entries(riasecResult)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(([k]) => k)
    : [];
  const recommended = riasecResult ? getCareersByRiasec(topCodes).slice(0, 3) : [];

  const RIASEC_COLORS: Record<string, string> = {
    R: "bg-orange-500",
    I: "bg-blue-500",
    A: "bg-purple-500",
    S: "bg-green-500",
    E: "bg-red-500",
    C: "bg-yellow-500",
  };

  const steps = [
    {
      done: true,
      label: "Kreye kont",
      desc: "Ou enskri sou Xpoze",
      icon: "✓",
    },
    {
      done: !!user.quizCompleted,
      label: "Fè tès oryantasyon",
      desc: user.quizCompleted ? "Tès konplète!" : "Dekouvri pwofil RIASEC ou",
      icon: user.quizCompleted ? "✓" : "2",
      href: "/quiz",
    },
    {
      done: false,
      label: "Eksplore inivèsite",
      desc: "Jwenn pwogram ki mache ak ou",
      icon: "3",
      href: "/universities",
    },
    {
      done: false,
      label: "Konekte ak mentor",
      desc: "Sesyon 1-a-1 gratis",
      icon: "4",
      href: "/mentors",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Welcome */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl p-8 mb-8">
        <h1 className="text-2xl font-bold mb-1">
          Bonjou, {user.name.split(" ")[0]}! 👋
        </h1>
        <p className="text-blue-100">
          {user.grade
            ? `${user.grade} · Kont elèv`
            : user.role === "mentor"
            ? "Kont mentor"
            : "Kont Xpoze"}
        </p>
        {user.quizCompleted && riasecResult && (
          <div className="mt-4 flex gap-2 flex-wrap">
            {Object.entries(riasecResult)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([code, pct]) => (
                <span
                  key={code}
                  className={`${RIASEC_COLORS[code]} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {code}: {pct}%
                </span>
              ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-4">Pwogrè ou</h2>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      s.done
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-medium ${
                        s.done ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {s.label}
                    </div>
                    <div className="text-xs text-gray-400">{s.desc}</div>
                    {!s.done && s.href && (
                      <Link
                        href={s.href}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Fè sa kounye a →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quiz CTA or Results */}
          {!user.quizCompleted ? (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                🧠 Fè tès oryantasyon ou
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Ou poko fè tès RIASEC ou. Pran 5 minit pou dekouvri karyè ki pi
                mache ak ou.
              </p>
              <Link
                href="/quiz"
                className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Kòmanse tès la →
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">
                🎯 Karyè rekòmande pou ou
              </h2>
              <div className="space-y-3">
                {recommended.map((career) => (
                  <Link
                    key={career.id}
                    href={`/careers/${career.id}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {career.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {career.domain} · {career.salary}
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/quiz"
                className="text-blue-600 text-sm hover:underline mt-3 block"
              >
                Refè tès la
              </Link>
            </div>
          )}

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/universities", icon: "🎓", label: "Inivèsite", desc: `${8} pwogram` },
              { href: "/careers", icon: "🗺️", label: "Karyè", desc: `${CAREERS.length} domèn` },
              { href: "/mentors", icon: "🤝", label: "Mentor", desc: "6 disponib" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">{l.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">
                  {l.label}
                </div>
                <div className="text-gray-500 text-xs">{l.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
