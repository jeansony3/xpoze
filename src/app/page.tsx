import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white py-28 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-200 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Platfòm #1 oryantasyon karyè ann Ayiti
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-3xl">
            Dekouvri Karyè ou.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Bati Avni ou.
            </span>
          </h1>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl leading-relaxed">
            Xpoze ede elèv finisan Ayiti dekouvri pwofil yo, jwenn bon inivèsite,
            ak konekte ak mentor pwofesyonèl — tout gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quiz"
              className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              🎯 Kòmanse Tès Oryantasyon
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all backdrop-blur-sm"
            >
              Enskri Gratis
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6 text-sm text-indigo-300">
            <div className="flex -space-x-2">
              {["MC", "JB", "SB", "FE", "NT"].map((initials) => (
                <div key={initials} className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-indigo-900 flex items-center justify-center text-xs font-bold">
                  {initials}
                </div>
              ))}
            </div>
            <span>+500 elèv ki deja enskri</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "8+", label: "Domèn karyè", icon: "🎯" },
            { number: "5+", label: "Inivèsite", icon: "🎓" },
            { number: "8+", label: "Pwogram etid", icon: "📚" },
            { number: "6+", label: "Mentor aktif", icon: "🤝" },
          ].map((s) => (
            <div key={s.label} className="group">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-3xl font-black text-indigo-600">{s.number}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-[#f8f7ff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">
              Fonksyonalite
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              Tout sa ou bezwen nan yon sèl kote
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🧠",
                color: "bg-violet-100 text-violet-600",
                title: "Tès Oryantasyon",
                desc: "18 kesyon RIASEC pou dekouvri domèn karyè ki pi mache ak pèsonalite ou.",
                href: "/quiz",
                cta: "Fè tès",
              },
              {
                icon: "🎓",
                color: "bg-blue-100 text-blue-600",
                title: "Katalòg Inivèsite",
                desc: "Filtre pwogram ann Ayiti ak aletranje pa domèn, pri, lang ak peyi.",
                href: "/universities",
                cta: "Eksplore",
              },
              {
                icon: "🗺️",
                color: "bg-orange-100 text-orange-600",
                title: "Roadmap Karyè",
                desc: "Plan etap pa etap depi 3èm rive aplikasyon inivèsite, ak lis dokiman.",
                href: "/careers",
                cta: "Wè roadmap",
              },
              {
                icon: "🤝",
                color: "bg-green-100 text-green-600",
                title: "Mentorship 1-a-1",
                desc: "Konekte ak pwofesyonèl verifye nan domèn ou vle a pou sesyon gratis.",
                href: "/mentors",
                cta: "Jwenn mentor",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="card-hover group bg-white rounded-2xl p-6 border border-gray-100 flex flex-col"
              >
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed">{f.desc}</p>
                <div className="mt-4 text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  {f.cta} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">
              Pwosesis
            </span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">
              3 etap pou kòmanse
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-200 via-orange-200 to-indigo-200" />
            {[
              {
                step: "01",
                color: "bg-indigo-600",
                title: "Fè tès ou",
                desc: "5 minit pou dekouvri pwofil RIASEC ou ak resevwa rekòmandasyon karyè pèsonalize.",
              },
              {
                step: "02",
                color: "bg-orange-500",
                title: "Eksplore opsyon ou",
                desc: "Konpare inivèsite, pwogram, ak roadmap pou chak karyè ki mache ak ou.",
              },
              {
                step: "03",
                color: "bg-green-500",
                title: "Konekte ak mentor",
                desc: "Jwenn yon pwofesyonèl nan domèn ou vle a pou konsèy dirèk ak pratik.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <div className={`w-16 h-16 ${s.color} text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-5 shadow-lg`}>
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Kòmanse jodi a — gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-950 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black">Sa elèv di sou Xpoze</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Chantal M.",
                grade: "Rhéto Lettres",
                text: "Tès la te ede m konprann ke mwen ta renmen travay nan jounalism. Kounye a mwen gen yon plan klè!",
                stars: 5,
              },
              {
                name: "Pierre-André J.",
                grade: "Philo Sciences",
                text: "Grâce à Xpoze, mwen te konnen egzakteman ki dokiman pou prepare pou aplike nan UEH Médecine.",
                stars: 5,
              },
              {
                name: "Roseline D.",
                grade: "2ème Secondaire",
                text: "Mentor mwen an te eksplike m tout chemen pou vin avokate. M santi m prè kounye a.",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-indigo-100 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-indigo-300 text-xs">{t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-black mb-4">
            Kòmanse vwayaj karyè ou jodi a
          </h2>
          <p className="text-orange-100 mb-8">
            Plis 500 elèv deja sou Xpoze. Pa kite chans pase — enskri gratis nan
            30 segonn.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Enskri gratis kounye a →
          </Link>
        </div>
      </section>
    </div>
  );
}
