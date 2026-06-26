import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dekouvri Karyè ou, Bati Avni ou
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Xpoze ede elèv finisan Ayiti jwenn bon karyè, bon inivèsite, ak
            mentor pwofesyonèl pou gide yo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              🎯 Kòmanse Tès Oryantasyon
            </Link>
            <Link
              href="/register"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Enskri Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "8+", label: "Domèn karyè" },
            { number: "5+", label: "Inivèsite" },
            { number: "8+", label: "Pwogram" },
            { number: "6+", label: "Mentor aktif" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-blue-600">{s.number}</div>
              <div className="text-gray-600 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kijan Xpoze travay?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧠",
                title: "Tès Oryantasyon",
                desc: "Repon 18 kesyon pou dekouvri pwofil RIASEC ou ak domèn karyè ki mache ak pèsonalite ou.",
                href: "/quiz",
                cta: "Kòmanse tès",
              },
              {
                icon: "🎓",
                title: "Katalòg Inivèsite",
                desc: "Eksplore inivèsite ann Ayiti ak aletranje. Filtre pa domèn, pri, lang, ak peyi.",
                href: "/universities",
                cta: "Wè inivèsite",
              },
              {
                icon: "🗺️",
                title: "Roadmap Karyè",
                desc: "Yon plan etap pa etap depi 3èm rive nan aplikasyon inivèsite pou chak karyè.",
                href: "/careers",
                cta: "Eksplore karyè",
              },
              {
                icon: "🤝",
                title: "Konekte ak Mentor",
                desc: "Jwenn pwofesyonèl ekspèrte nan domèn ou enterese a pou sesyon 1-a-1.",
                href: "/mentors",
                cta: "Jwenn mentor",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{f.desc}</p>
                <Link
                  href={f.href}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            3 etap pou jwenn karyè idéal ou
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Fè tès ou",
                desc: "Repon kèk kesyon sou enterè ak pèsonalite ou. Resevwa rekòmandasyon karyè pèsonalize.",
              },
              {
                step: "2",
                title: "Eksplore opsyon ou",
                desc: "Wè inivèsite, pwogram, ak karyè ki mache ak pwofil ou. Konpare pri, kondisyon, ak opòtinite.",
              },
              {
                step: "3",
                title: "Konekte ak mentor",
                desc: "Pale dirèkteman ak yon pwofesyonèl ki nan domèn ou enterese a pou konsèy pratik.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/register"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kòmanse jodi a — gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sa elèv di sou Xpoze
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chantal M.",
                grade: "Rhéto Lettres",
                text: "Tès la te ede m konprann ke mwen ta renmen travay nan jounalism. Kounye a mwen gen yon plan klè!",
              },
              {
                name: "Pierre-André J.",
                grade: "Philo Sciences",
                text: "Grâce à Xpoze, mwen te konnen egzakteman ki dokiman pou prepare pou aplike nan UEH Médecine.",
              },
              {
                name: "Roseline D.",
                grade: "2ème Secondaire",
                text: "Mentor mwen an te eksplike m tout chemen pou vin avokate. M santi m prè kounye a.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <p className="text-gray-700 text-sm italic mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
