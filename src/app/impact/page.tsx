import Link from "next/link";

const stats = [
  { n: "5,000+", label: "Moun Sèvi Dirèkteman", icon: "👥" },
  { n: "15", label: "Kominote Aktif", icon: "🗺️" },
  { n: "12+", label: "Pwogram Kouri", icon: "📋" },
  { n: "800+", label: "Elèv Edike", icon: "🎓" },
  { n: "120", label: "Antreprenè Fòme", icon: "💼" },
  { n: "200+", label: "Fanm Agrikiltè Sèvi", icon: "🌱" },
];

const stories = [
  {
    name: "Marie-Claire D.",
    location: "Leogane",
    program: "Alfabetizasyon Adilt",
    story: "Mwen te gen 42 an lè mwen aprann li pou premye fwa. Gras ak Vijend Haiti, jodi a mwen ka li resi medikal pitit mwen yo, mwen ka siyen pwòp dokiman mwen yo. Sa se libète.",
    initials: "MC",
    color: "bg-[#002B6E]",
  },
  {
    name: "Patrick L.",
    location: "Port-au-Prince",
    program: "Inkibatè Biznis Jèn",
    story: "Mwen te gen yon rèv pou kreye yon biznis lawozèl nan zòn mwen an, men mwen pa t konnen kote kòmanse. Vijend Haiti ba mwen fòmasyon, kouching, ak premye kapital mwen. Jodi a mwen gen 3 anplwaye.",
    initials: "PL",
    color: "bg-[#CE1126]",
  },
  {
    name: "Rosenie M.",
    location: "Tiburon",
    program: "Agrikilti Dirab",
    story: "Anvan Vijend Haiti, m te vann rekòt mwen pou ri. Jodi a, ak teknik yo te anseye mwen yo ak kooperativ yo te ede mwen kreye a, mwen reyalize 3x plis revni sou menm tè a.",
    initials: "RM",
    color: "bg-[#1A6B3C]",
  },
];

const sdgs = [
  { n: "SDG 1", title: "Eliminasyon Povrete", desc: "Pwogram ekonomik nou yo ede fanmi soti nan povrete ekstrim." },
  { n: "SDG 2", title: "Faim Zewo", desc: "Agrikilti dirab ak kooperativ alimantè." },
  { n: "SDG 4", title: "Edikasyon Kalite", desc: "Aksè lib ak kalite edikasyon pou tout moun." },
  { n: "SDG 8", title: "Travay Diyite", desc: "Antrepreneryat ak fòmasyon pwofesyonèl." },
  { n: "SDG 10", title: "Redwi Inegalite", desc: "Priyorize kominote an maji." },
  { n: "SDG 17", title: "Patenarya", desc: "Kòdinasyon ak gwoup lokal ak entènasyonal." },
];

export default function ImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#002B6E] text-white overflow-hidden py-28 px-5">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5A623]/40 bg-[#F5A623]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F5A623] mb-8 tracking-wide uppercase">
            Enpak Nou
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Chif ki Pale. Istwa ki Touche.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Depi me 2020, Vijend Haiti travay chak jou pou transfòme lavi reyèl — yon kominote, yon moun, yon opotinite pou tan.
          </p>
        </div>
      </section>

      {/* Stats grid */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#CE1126] font-bold text-xs tracking-widest uppercase">Chif Kle</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Depi Fondasyong Nou</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.n} className="bg-[#F8F6F0] rounded-2xl p-8 text-center border border-[#002B6E]/8 card-lift">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-4xl font-black text-[#002B6E] mb-2">{s.n}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 px-5 geo-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] font-bold text-xs tracking-widest uppercase">Vwa Benefisyè</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Istwa Reyèl, Chanjman Reyèl</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl overflow-hidden border border-[#002B6E]/8 shadow-sm card-lift">
                <div className={`${s.color} p-6 flex items-center gap-4`}>
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-lg">
                    {s.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold">{s.name}</div>
                    <div className="text-white/60 text-xs">{s.location}</div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#F8F6F0] text-[#002B6E] text-xs font-semibold px-2.5 py-1 rounded-full mb-4 border border-[#002B6E]/10">
                    {s.program}
                  </span>
                  <p className="text-gray-600 leading-relaxed italic text-sm">&ldquo;{s.story}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="py-24 px-5 bg-[#002B6E] relative overflow-hidden">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white">Alinye ak Objektif Mondyal</h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto">
              Travay Vijend Haiti kontribiye dirèkteman nan Objektif Devlopman Dirab (SDG) yo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {sdgs.map((s) => (
              <div key={s.n} className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-[#F5A623] font-black text-xs tracking-wide mb-2">{s.n}</div>
                <div className="text-white font-bold mb-2">{s.title}</div>
                <div className="text-white/50 text-sm leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#002B6E] mb-4">Transparans Total</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Nou pibliye rapò anyèl nou piblikman. Ou ka jwenn detay sou kote chak dola ale.
            Sijèsyon, kritik, kesyon — tout byenveni.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {["Rapò 2022", "Rapò 2023", "Rapò 2024"].map((r) => (
              <div key={r} className="bg-[#F8F6F0] rounded-xl p-6 border border-[#002B6E]/8 text-[#002B6E] font-bold">
                📄 {r}
                <p className="text-gray-400 text-xs font-normal mt-1">Disponib sou demann</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="text-[#CE1126] font-semibold hover:text-[#A50D1E] transition-colors">
            Mande yon rapò → kontakte nou
          </Link>
        </div>
      </section>
    </div>
  );
}
