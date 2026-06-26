import Link from "next/link";

const stats = [
  { n: "2020", label: "Ane fondasyong" },
  { n: "3", label: "Ko-fondatè visyonè" },
  { n: "500+", label: "Moun sèvi chak ane" },
  { n: "12+", label: "Pwogram aktif" },
];

const programs = [
  {
    icon: "📚",
    title: "Edikasyon & Fòmasyon",
    desc: "Nou sipòte jèn Ayisyen ak pwogram alfabetizasyon, fòmasyon pwofesyonèl, ak bous etid pou kase sik povrete.",
    color: "from-[#002B6E] to-[#003587]",
    href: "/programs#education",
  },
  {
    icon: "🤝",
    title: "Devlopman Kominote",
    desc: "Nou travay dirèkteman ak kominote lokal pou ranfòse enstitisyon, amelyore enfrastrikti debaz, ak kreye lyen solid.",
    color: "from-[#CE1126] to-[#A50D1E]",
    href: "/programs#community",
  },
  {
    icon: "💡",
    title: "Antrepreneryat Jèn",
    desc: "Nou fòme jèn Ayisyen pou devlope pwòp biznis yo, ak aksè nan mentor, zouti, ak rezo pwofesyonèl.",
    color: "from-[#F5A623] to-[#D4891A]",
    href: "/programs#youth",
  },
  {
    icon: "🌱",
    title: "Reyilizans Agrikòl",
    desc: "Nou ede fanm ak fanmi agrikòl aksede a teknik modèn, semans amelyore, ak mache pou amelyore sekirite alimantè.",
    color: "from-[#1A6B3C] to-[#145A32]",
    href: "/programs#economic",
  },
];

const testimonials = [
  {
    quote: "Vijend Haiti te chanje lavi mwen nèt. Mwen te yon elèv ki pa t ka peye lekòl, jodi a mwen se technicien sèrtifye.",
    name: "Frantzy M.",
    role: "Benefisyè pwogram fòmasyon",
  },
  {
    quote: "Gras ak sipò Vijend Haiti, kominote nou an gen dlo pwòp pou premye fwa an 15 zan. Sa se yon mirak reyèl.",
    name: "Roseline J.",
    role: "Manm kominote Delmas",
  },
  {
    quote: "Vijend Haiti pa yon ONG ki vini kite kado epi ale. Yo rete, yo travay avèk nou, yo kwè nan nou.",
    name: "Pastor Élie B.",
    role: "Lidè kominote Leogane",
  },
];

const values = [
  { icon: "🇭🇹", title: "Haïtyanite", desc: "Nou fyè de rasinen nou. Tout sa nou fè reflete idantite, kilti, ak kouraj pèp Ayisyen an." },
  { icon: "💪", title: "Reziyans", desc: "Nou kwè nan kapasite pèp Ayisyen pou kanpe ankò malgre tout epreV yo." },
  { icon: "🌍", title: "Solidarite", desc: "Nou travay nan kolektif — pa fòs yon sèl moun, men fòs kominote entye a." },
  { icon: "📢", title: "Transparans", desc: "Nou rann kont piblikman sou chak don ak pwogram nou reyalize." },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-[#002B6E] text-white overflow-hidden min-h-screen flex items-center">
        {/* Background grid */}
        <div className="absolute inset-0 haiti-grid opacity-40" />

        {/* Haitian flag color accent bars */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#002B6E] via-[#CE1126] to-[#002B6E] opacity-60" />
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#CE1126] via-[#002B6E] to-[#CE1126] opacity-60" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 border border-[#F5A623]/10 rounded-full" />
        <div className="absolute top-32 right-32 w-48 h-48 border border-[#CE1126]/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-white/5 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#CE1126]/5 rounded-full" />

        <div className="max-w-7xl mx-auto px-5 py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#F5A623]/40 bg-[#F5A623]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F5A623] mb-8 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full animate-pulse" />
              Organisation à But Non Lucratif · Depi Me 2020
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] mb-6 tracking-tight">
              Bati Ayiti<br />
              <span className="gold-gradient-text">Ansanm</span>
            </h1>

            <p className="text-white/65 text-xl leading-relaxed mb-10 max-w-lg">
              Vijend Haiti se yon mouvman sivik ki kwè ke chanjman vèritab kòmanse nan kominote — pa nan
              kado ki vini sòti deyò, men nan fòs ki deja anndan pèp Ayisyen an.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs"
                className="bg-[#CE1126] hover:bg-[#E8304A] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-2xl shadow-red-900/40 hover:-translate-y-0.5 text-center"
              >
                Dekouvri Pwogram Nou →
              </Link>
              <Link
                href="/contact#donate"
                className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all text-center"
              >
                Sipòte Misyon Nou
              </Link>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.n}
                className="bg-white/6 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-black text-[#F5A623] mb-2">{s.n}</div>
                <div className="text-white/60 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 64 L0 32 Q360 0 720 32 Q1080 64 1440 32 L1440 64 Z" fill="#F8F6F0" />
          </svg>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section className="bg-[#F8F6F0] py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#002B6E] text-2xl md:text-3xl font-bold leading-relaxed">
            &ldquo;Nou pa tann sekouris — nou <span className="text-[#CE1126]">se</span> sekouris.
            Vijend Haiti se vwa, men, ak kè kominote Ayisyen ki refize bese bra.&rdquo;
          </p>
          <p className="text-gray-400 text-sm mt-6">— Jean Sony Joseph, Ko-fondatè</p>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CE1126] font-bold text-xs tracking-widest uppercase">Sa Nou Fè</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#002B6E] mt-3 mb-4">Pwogram Nou Yo</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Chak pwogram nou reyalize chita sou yon bezwen reyèl — idantifye dirèkteman ak kominote nou sèvi yo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((p) => (
              <Link key={p.title} href={p.href} className="group card-lift">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full">
                  <div className={`bg-gradient-to-br ${p.color} p-8 flex items-center gap-4`}>
                    <span className="text-4xl">{p.icon}</span>
                    <h3 className="text-xl font-black text-white leading-tight">{p.title}</h3>
                  </div>
                  <div className="p-7">
                    <p className="text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                    <span className="text-[#CE1126] font-semibold text-sm group-hover:gap-3 flex items-center gap-1 transition-all">
                      Aprann plis <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border-2 border-[#002B6E] text-[#002B6E] font-bold px-8 py-3.5 rounded-xl hover:bg-[#002B6E] hover:text-white transition-all"
            >
              Wè tout pwogram yo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-5 geo-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] font-bold text-xs tracking-widest uppercase">Kisa Nou Kwè</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Valè Fondamantal Nou</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-[#002B6E]/8 shadow-sm card-lift">
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="text-lg font-black text-[#002B6E] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-5 bg-[#002B6E] relative overflow-hidden">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] font-bold text-xs tracking-widest uppercase">Vwa Kominote</span>
            <h2 className="text-4xl font-black text-white mt-3">Sa Benefisyè Yo Di</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/6 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-[#F5A623] text-4xl font-black leading-none mb-4">&ldquo;</div>
                <p className="text-white/80 leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="border-t border-white/10 pt-5">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS PREVIEW ── */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#CE1126] font-bold text-xs tracking-widest uppercase">Ko-Fondatè</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Twa Moun, Yon Vizyon</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Nan mwa me 2020, nan moman ki te pi difisil pou Ayiti, twa jèn te deside fè yon bagay — pa pale, men aji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jean Sony Joseph", role: "Ko-Fondatè & Direktè Egzekitif", initials: "JSJ", bio: "Visyonè ak edikatè angaje, Jean Sony konsekre lavi l nan devlopman kominote ak jistis sosyal ann Ayiti." },
              { name: "Edmond Simplice", role: "Ko-Fondatè & Direktè Pwogram", initials: "ES", bio: "Yon èkspert nan mobilizasyon kominote ak jesyon pwojè, Edmond bati pont ant òganizasyon an ak kominote sèvi yo." },
              { name: "Ilioreste Charles", role: "Ko-Fondatè & Direktè Estrateji", initials: "IC", bio: "Strateji kalibra mondyal ak rasin lokal fò — Ilioreste redikte chak inisyativ pou maksimize enpak reyèl sou teren." },
            ].map((f) => (
              <div key={f.name} className="text-center card-lift">
                <div className="w-24 h-24 bg-gradient-to-br from-[#002B6E] to-[#CE1126] rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-5 shadow-lg">
                  {f.initials}
                </div>
                <h3 className="font-black text-[#002B6E] text-lg">{f.name}</h3>
                <p className="text-[#CE1126] text-xs font-semibold mt-1 mb-3">{f.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about#team" className="text-[#002B6E] font-semibold hover:text-[#CE1126] transition-colors">
              Aprann plis sou ekip fondatè a →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA DONATE ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#CE1126] to-[#8B0C1A] py-20 px-5">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5A623]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <div className="text-5xl mb-6">🤲</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ede Nou Chanje Lavi</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Chak dola ou bay se yon jèn ki aksede fòmasyon, yon fanmi ki jwenn dlo pwòp, yon kominote ki rekonstwi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#donate"
              className="bg-white text-[#CE1126] hover:bg-[#F8F6F0] font-black px-10 py-4 rounded-xl transition-all shadow-2xl hover:-translate-y-0.5"
            >
              Fè yon Don Jodi a
            </Link>
            <Link
              href="/contact#volunteer"
              className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Vin Volontè
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
