import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-[#0B1D51] text-white overflow-hidden min-h-[92vh] flex items-center">
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid opacity-40" />

        {/* Geometric shapes — matching brand image */}
        <div className="absolute top-12 right-16 w-28 h-28 border-4 border-[#1E8FE1]/30 rounded-sm rotate-6 hidden lg:block" />
        <div className="absolute top-8 right-52 w-20 h-20 bg-[#1E8FE1]/15 rounded-full hidden lg:block" />
        <div className="absolute bottom-24 right-24 w-48 h-48 border border-[#1E8FE1]/15 rounded-full hidden lg:block" />
        <div className="absolute bottom-16 right-64 w-10 h-10 bg-[#00C6FF]/20 rounded-full hidden lg:block" />
        <div className="absolute top-1/3 right-8 w-2 h-2 bg-[#1E8FE1] rounded-full hidden lg:block" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#00C6FF] rounded-full hidden lg:block" />
        {/* Diagonal line accent */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#1E8FE1]/20 to-transparent hidden lg:block" style={{right: '38%'}} />

        <div className="max-w-7xl mx-auto px-5 py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#1E8FE1]/40 bg-[#1E8FE1]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#4AAEF0] mb-8 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#00C6FF] rounded-full animate-pulse" />
              Platfòm #1 oryantasyon karyè ann Ayiti
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              Transforming
              <br />
              <span className="blue-gradient-text">Career</span>
              <br />
              Orientation
              <br />
              into Opportunity.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Xpoze ede elèv finisan Ayiti dekouvri pwofil yo, jwenn bon
              inivèsite, ak konekte ak mentor pwofesyonèl — tout gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="group inline-flex items-center justify-center gap-3 bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-2xl shadow-blue-500/30 hover:shadow-blue-400/40 hover:-translate-y-0.5"
              >
                Kòmanse Tès Oryantasyon
                <span className="bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm">→</span>
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Enskri gratis
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {["ML","JB","SC","FE","NT"].map((ini, i) => (
                  <div
                    key={ini}
                    className="w-9 h-9 rounded-full border-2 border-[#0B1D51] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `hsl(${200 + i*20}, 70%, 45%)` }}
                  >
                    {ini}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">+500 elèv enskri</div>
                <div className="text-white/40 text-xs">Rejwenn kominote Xpoze a</div>
              </div>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { n: "8+", label: "Domèn karyè", icon: "🎯", accent: "#1E8FE1" },
              { n: "5+", label: "Inivèsite", icon: "🎓", accent: "#00C6FF" },
              { n: "6+", label: "Mentor aktif", icon: "🤝", accent: "#1E8FE1" },
              { n: "100%", label: "Gratis", icon: "✨", accent: "#00C6FF" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/8 transition-colors"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-4xl font-black mb-1" style={{ color: s.accent }}>{s.n}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
          {[
            { n: "8+", label: "Domèn karyè" },
            { n: "5+", label: "Inivèsite partenè" },
            { n: "8+", label: "Pwogram etid" },
            { n: "6+", label: "Mentor aktif" },
            { n: "18", label: "Kesyon tès RIASEC" },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black text-[#1E8FE1]">{s.n}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-5 geo-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">Fonksyonalite</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1D51] mt-3 leading-tight">
              Tout sa ou bezwen<br />
              <span className="blue-gradient-text">nan yon sèl kote</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Tès Oryantasyon RIASEC",
                desc: "18 kesyon pou dekouvri pwofil ou ak jwenn rekòmandasyon karyè pèsonalize baze sou syans.",
                href: "/quiz",
                tag: "5 minit",
                bg: "from-[#0B1D51] to-[#142366]",
              },
              {
                icon: "🎓",
                title: "Katalòg Inivèsite",
                desc: "Eksplore inivèsite ann Ayiti ak aletranje. Filtre pa domèn, pri, lang, peyi ak bous disponib.",
                href: "/universities",
                tag: "5 peyi",
                bg: "from-[#1265A0] to-[#1E8FE1]",
              },
              {
                icon: "🗺️",
                title: "Roadmap Karyè",
                desc: "Plan etap pa etap depi 3èm rive aplikasyon inivèsite — matyè, konpetans, ak dokiman.",
                href: "/careers",
                tag: "8 karyè",
                bg: "from-[#0B1D51] to-[#142366]",
              },
              {
                icon: "🤝",
                title: "Mentorship 1-a-1",
                desc: "Konekte ak pwofesyonèl verifye ki ka gide ou dirèkteman sou karyè ou vle a. Gratis.",
                href: "/mentors",
                tag: "6 mentor",
                bg: "from-[#1265A0] to-[#1E8FE1]",
              },
              {
                icon: "🎙️",
                title: "Podcast Xpoze",
                desc: "Pwofesyonèl Ayisyen pataje istwa yo, konsèy pratik, ak chemen karyè pou inspire ou.",
                href: "/podcasts",
                tag: "6 episòd",
                bg: "from-[#0B1D51] to-[#142366]",
              },
              {
                icon: "📺",
                title: "Sesyon Live",
                desc: "Webinar interaktif pou poze kesyon dirèkteman bay ekspè. Rezève plas ou gratis.",
                href: "/live",
                tag: "🔴 Live",
                bg: "from-[#1265A0] to-[#1E8FE1]",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="card-lift group bg-white rounded-2xl p-7 border border-[#0B1D51]/8 overflow-hidden relative"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.bg} opacity-5 rounded-bl-full`} />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#EEF4FF] rounded-xl flex items-center justify-center text-2xl">
                    {f.icon}
                  </div>
                  <span className="bg-[#EEF4FF] text-[#1E8FE1] text-xs font-bold px-3 py-1 rounded-full">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D51] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="text-[#1E8FE1] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Eksplore <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-5 bg-[#0B1D51] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        {/* Geometric accents */}
        <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#1E8FE1]/20 rounded-sm rotate-12 hidden lg:block" />
        <div className="absolute bottom-12 right-16 w-20 h-20 bg-[#1E8FE1]/10 rounded-full hidden lg:block" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">Pwosesis</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              3 etap pou kòmanse
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Fè tès ou",
                desc: "Repon 18 kesyon RIASEC pou dekouvri pwofil ou ak resevwa rekòmandasyon karyè pèsonalize.",
                icon: "🧠",
              },
              {
                n: "02",
                title: "Eksplore opsyon ou",
                desc: "Konpare inivèsite, pwogram, ak roadmap karyè ki mache ak pwofil ou — ak pri ak kondisyon.",
                icon: "🔍",
              },
              {
                n: "03",
                title: "Konekte ak mentor",
                desc: "Pale dirèkteman ak yon pwofesyonèl nan domèn ou vle a. Sesyon 1-a-1 oswa webinar gratis.",
                icon: "🤝",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-5xl font-black text-[#1E8FE1]/30">{s.n}</div>
                  <div className="text-3xl">{s.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/register"
              className="inline-flex items-center gap-3 bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-2xl shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Kòmanse jodi a — gratis
              <span className="bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center text-sm">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">Temwayaj</span>
            <h2 className="text-4xl font-black text-[#0B1D51] mt-3">Sa elèv di sou Xpoze</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Chantal M.", grade: "Rhéto Lettres", text: "Tès la te ede m konprann ke mwen ta renmen travay nan jounalism. Kounye a mwen gen yon plan klè!", stars: 5 },
              { name: "Pierre-André J.", grade: "Philo Sciences", text: "Grâce à Xpoze, mwen te konnen egzakteman ki dokiman pou prepare pou aplike nan UEH Médecine.", stars: 5 },
              { name: "Roseline D.", grade: "2ème Secondaire", text: "Mentor mwen an te eksplike m tout chemen pou vin avokate. M santi m prè kounye a.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-[#F0F5FF] rounded-2xl p-7 border border-[#0B1D51]/8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({length: t.stars}).map((_,i) => (
                    <span key={i} className="text-[#1E8FE1]">★</span>
                  ))}
                </div>
                <p className="text-[#0B1D51]/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0B1D51] rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1D51] text-sm">{t.name}</div>
                    <div className="text-[#1E8FE1] text-xs">{t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1E8FE1] to-[#00C6FF] py-20 px-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-16 w-32 h-32 border-2 border-white/20 rounded-sm rotate-12" />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Prêt pou kòmanse<br />vwayaj karyè ou?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Plis 500 elèv deja sou Xpoze. Enskri gratis nan 30 segonn ak jwenn premye rekòmandasyon ou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#0B1D51] hover:bg-[#142366] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-2xl hover:-translate-y-0.5"
            >
              Enskri gratis kounye a →
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Fè tès oryantasyon
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
