import Link from "next/link";

const founders = [
  {
    name: "Jean Sony Joseph",
    role: "Ko-Fondatè & Direktè Egzekitif",
    initials: "JSJ",
    color: "from-[#002B6E] to-[#0044AA]",
    bio: `Jean Sony Joseph se yon edikatè ak militan sosyal ki te dedye plis pase yon deseni pou batay pou dwa jèn Ayisyen. Fòme nan pedagoji ak devlopman kominote, li te konprann depi lontan ke chanjman vèritab pa sòti nan asistans extèrn — li kòmanse nan kominote yo.

Nan kriz sanitè ki te fèmen Ayiti an 2020, Jean Sony te wè yon opòtinite. Olye pou atann, li te rasanble de zanmi fidèl epi yo te kreye Vijend Haiti — yon reponse lokal, rapidman, ak entèlijans.

Vizyon li: yon Ayiti kote chak timoun ka etidye, chak fanm ka antreprann, epi chak kominote ka kanpe sou pwòp pye l.`,
    tags: ["Edikasyon", "Liderchip", "Devlopman Sosyal", "Kominote"],
  },
  {
    name: "Edmond Simplice",
    role: "Ko-Fondatè & Direktè Pwogram",
    initials: "ES",
    color: "from-[#CE1126] to-[#A50D1E]",
    bio: `Edmond Simplice se yon moun tèren. Lè lòt moun pale nan reyinyon, Edmond ap travay nan kominote. Se li ki bati sistèm distribisyon sèvis Vijend Haiti yo — ak efisyans, transparans, ak respè pou diyite chak moun.

Espesyalis nan mobilizasyon kominote ak jesyon pwojè, Edmond asire chak dola done se yon dola ki rive jwenn moun ki vrèman bezwen l.

Li pote avèk li kreyativite, eneji, ak yon konpreyansyon pwofon sou reyalite kominote Ayisyen yo.`,
    tags: ["Jesyon Pwojè", "Tèren", "Transpàrans", "Mobilizasyon"],
  },
  {
    name: "Ilioreste Charles",
    role: "Ko-Fondatè & Direktè Estrateji",
    initials: "IC",
    color: "from-[#F5A623] to-[#D4891A]",
    bio: `Ilioreste Charles konbine yon mantal estratejik mondyal ak yon rasin kominote ki pa janm koupe. Li se ponn ant vizyon fondatè yo ak realite operasyonèl la.

Atravè analiz done, patenarya estratejik, ak planifikasyon alontèm, Ilioreste asire Vijend Haiti pa sèlman satisfè bezwen jodi a — men li bati yon poto mitan solid pou demen.

Kwayan fèvyan nan lide ke ONG ki pi pisan yo se sa ki travay pou rann tèt yo inil — paske kominote yo rive kanpe pou kont yo.`,
    tags: ["Estrateji", "Analiz", "Patenarya", "Inovasyon"],
  },
];

const milestones = [
  { year: "Me 2020", event: "Fondasyong Vijend Haiti nan moman kriz COVID-19 ann Ayiti." },
  { year: "Jiyè 2020", event: "Premye pwogram distribisyon — 200 fanmi nan Leogane resevwa sipò ijans." },
  { year: "Jan 2021", event: "Lanse pwogram alfabetizasyon pou adilt — 80 patisipan pou premye sesyon." },
  { year: "Me 2021", event: "1ye anivèsè — 500 moun sèvi, 3 kominote partenè, enpak klèman mezirèb." },
  { year: "2022", event: "Ekspansyon nan zòn riral — Leogane, Tiburon, ak Fond-des-Blancs." },
  { year: "2023", event: "Lanse pwogram antrepreneryat jèn ak premye inkibatè biznis Vijend Haiti." },
  { year: "2024", event: "500+ moun sèvi chak ane, 12+ pwogram aktif, rekonesans nasyonal." },
  { year: "2025 →", event: "Faz ekspansyon III — lanse platfòm dijital ak patenarya entènasyonal." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#002B6E] text-white overflow-hidden py-28 px-5">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="absolute top-12 right-16 w-48 h-48 border border-[#F5A623]/15 rounded-full" />
        <div className="absolute bottom-12 left-16 w-32 h-32 bg-[#CE1126]/10 rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5A623]/40 bg-[#F5A623]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F5A623] mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
            Kiyès Nou
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Istwa Vijend Haiti
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Twa moun. Yon vizyon. Yon ansyen konviksyon — ke pèp Ayisyen an pote anndan li tout fòs ki nesesè pou transfòme pwòp desten li.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#F8F6F0] rounded-2xl p-10 border border-[#002B6E]/8">
            <div className="w-12 h-12 bg-[#002B6E] rounded-xl flex items-center justify-center text-white text-2xl mb-5">🎯</div>
            <h2 className="text-2xl font-black text-[#002B6E] mb-4">Misyon Nou</h2>
            <p className="text-gray-600 leading-relaxed">
              Vijend Haiti egziste pou ranfòse kapasite kominote Ayisyen yo — nan edikasyon, ekonomi, ak koit sosyal —
              pou yo ka devlope pwòp solisyon pou pwòp defi yo, san depandans.
            </p>
          </div>
          <div className="bg-[#002B6E] rounded-2xl p-10 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 haiti-grid opacity-20" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center text-2xl mb-5">🌟</div>
              <h2 className="text-2xl font-black text-white mb-4">Vizyon Nou</h2>
              <p className="text-white/60 leading-relaxed">
                Nou imajine yon Ayiti kote chak kominote gen mwayen pou fleri — kote jèn yo gen opòtinite,
                fanm yo dirije, ak jistis ekonomik se reyalite, pa sèlman yon rèv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History / Timeline */}
      <section id="history" className="py-24 px-5 geo-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#CE1126] font-bold text-xs tracking-widest uppercase">Chemen Nou Fè</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Istwa Nou</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#002B6E] via-[#CE1126] to-[#F5A623]" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 pl-16 relative">
                  <div className="absolute left-0 w-12 h-12 bg-white border-2 border-[#002B6E] rounded-full flex items-center justify-center text-[#002B6E] font-black text-xs shrink-0 shadow-md">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-[#002B6E]/8 shadow-sm flex-1 card-lift">
                    <span className="text-[#CE1126] font-bold text-xs tracking-wide uppercase">{m.year}</span>
                    <p className="text-gray-700 mt-2 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="team" className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F5A623] font-bold text-xs tracking-widest uppercase">Bòs Yo</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Ko-Fondatè Vijend Haiti</h2>
            <p className="text-gray-500 mt-3">Twa vwa. Yon sèl misyon.</p>
          </div>

          <div className="space-y-12">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
              >
                {/* Avatar side */}
                <div className="shrink-0 text-center">
                  <div className={`w-36 h-36 bg-gradient-to-br ${f.color} rounded-full flex items-center justify-center text-white text-4xl font-black shadow-2xl mx-auto`}>
                    {f.initials}
                  </div>
                  <h3 className="font-black text-[#002B6E] text-xl mt-4">{f.name}</h3>
                  <p className="text-[#CE1126] text-sm font-semibold mt-1">{f.role}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                    {f.tags.map((tag) => (
                      <span key={tag} className="bg-[#F8F6F0] text-[#002B6E] text-xs px-2.5 py-1 rounded-full font-medium border border-[#002B6E]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-[#F8F6F0] rounded-2xl p-8 border border-[#002B6E]/8 flex-1">
                  {f.bio.split("\n\n").map((para, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed mb-4 last:mb-0">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-5 bg-[#002B6E] relative overflow-hidden">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white">Prensip ki Gide Nou</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Apropriyasyon Lokal", desc: "Chak pwogram fèt avèk kominote a, pa pou li. Kominote a posede rezilta a." },
              { title: "Responsablite Rasyonèl", desc: "Nou pibliye tout rapò finansye nou piblikman. Donasyon ou se yon konfyans — nou respekte l." },
              { title: "Ekite & Inklizyon", desc: "Pwogram nou yo priyorize fanm, timoun, andikape, ak pèp nan maji." },
              { title: "Efè Long Tèm", desc: "Nou pa chèche titèl rapid. Nou bati sistèm ki dire, pa sèlman distribye kado ki fini vit." },
            ].map((v) => (
              <div key={v.title} className="bg-white/6 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-bold text-[#F5A623] mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#002B6E] mb-4">Rejwenn Mouvman An</h2>
          <p className="text-gray-500 mb-8">Misyon nou poko fini. Chak men ki leve pou Ayiti fè diferans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="bg-[#002B6E] text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg">
              Wè Pwogram Nou →
            </Link>
            <Link href="/contact#volunteer" className="border-2 border-[#CE1126] text-[#CE1126] font-bold px-8 py-4 rounded-xl hover:bg-[#CE1126] hover:text-white transition-all">
              Vin Volontè
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
