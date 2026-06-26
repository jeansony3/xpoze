import Link from "next/link";

const programs = [
  {
    id: "education",
    icon: "📚",
    color: "bg-[#002B6E]",
    accent: "#002B6E",
    title: "Edikasyon & Alfabetizasyon",
    tagline: "Konesans se pouvwa ki pa janm vòlè.",
    desc: "Nou ofri klas alfabetizasyon pou adilt, sipò eskolè pou timoun, fòmasyon teknik sèrtifye, ak bous edikasyon pou jèn ki pa gen mwayen peye lekòl.",
    activities: [
      "Klas alfabetizasyon pou adilt (3x pa semèn)",
      "Titorat gratis pou elèv fondamantal ak segondè",
      "Fòmasyon teknik: elektrisite, plombi, koutu, enfòmatik",
      "Bous etid pou 50 jèn chak ane",
      "Bibliyotèk kominote ak sant òdinatè",
    ],
    impact: "800+ elèv sèvi depi 2020",
  },
  {
    id: "youth",
    icon: "💡",
    color: "bg-[#F5A623]",
    accent: "#D4891A",
    title: "Antrepreneryat & Jèn",
    tagline: "Jèn Ayisyen pa bezwen kite peyi l pou reyisi.",
    desc: "Pwogram nou an idantifye jèn ki gen talan ak idè, epi nou ba yo zouti, fòmasyon, ak rezo pou transfòme rèv yo an biznis reyèl.",
    activities: [
      "Inkibatè biznis 6 mwa (batches de 20 jèn)",
      "Atelye manadjman, maketing, ak finans",
      "Kouching endividyèl ak mentor ekspè",
      "Konkou biznis ak pri lajan kach",
      "Rezo alumni pou sipò kontinyèl",
    ],
    impact: "120 jèn antreprenè fòme",
  },
  {
    id: "community",
    icon: "🤝",
    color: "bg-[#CE1126]",
    accent: "#CE1126",
    title: "Devlopman Kominote",
    tagline: "Kominote solid = nasyon solid.",
    desc: "Nou travay tèt-a-tèt ak lidè lokal pou idantifye ak rezoud pwoblèm enfrastrikti, santé, ak koyezyon sosyal ki afekte kominote yo chak jou.",
    activities: [
      "Konstriksyon ak reparasyon sistèm dlo potab",
      "Pwogram ijyèn ak asenisman kominote",
      "Fòmasyon lidè kominote ak ajan sante vilaj",
      "Reparasyon lekòl ak sant kominote yo",
      "Pwogram swen mantal apre katastwòf",
    ],
    impact: "15 kominote benefisyè",
  },
  {
    id: "economic",
    icon: "🌱",
    color: "bg-[#1A6B3C]",
    accent: "#1A6B3C",
    title: "Reyilizans Agrikòl & Ekonomik",
    tagline: "Yon vant plen, yon espri lib.",
    desc: "Ayiti gen potansyèl agrikòl enòm. Nou ede fanm ak fanmi agrikòl yo jwenn teknik modèn, semans amelyore, ak aksè direk nan mache pou kenbe lajan nan men yo.",
    activities: [
      "Fòmasyon agrikilti dirab ak climate-smart",
      "Distribisyon semans amelyore ak zouti agrikòl",
      "Òganizasyon kooperativ agrikòl kominote",
      "Aksè nan mikwo-kredi pou agrikiltè",
      "Koneksyon direk ak mache lokal ak iben",
    ],
    impact: "200+ fanm agrikiltè sèvi",
  },
  {
    id: "emergency",
    icon: "🚨",
    color: "bg-[#6B21A8]",
    accent: "#6B21A8",
    title: "Reponse Ijans",
    tagline: "Premye sou teren. Dènye pou kite.",
    desc: "Ayiti fè fas a katastwòf natirèl ak kriz regilye. Ekip Vijend Haiti toujou prè pou mobilize vit, distribye sipò ijans, ak kòdinasyon ak sektè piblik la ak rès sosyete sivil la.",
    activities: [
      "Stòk ijans: manje, dlo, materyèl premye swen",
      "Ekip volontè ki fòme nan jesyon katastwòf",
      "Kòdinasyon ak sistèm pwoteksyon sivil la",
      "Sipò sikolojik pou viktim katastwòf",
      "Rekonstwiksyon rapid ak materyèl ak fòmasyon",
    ],
    impact: "3 reponse ijans kòdinasyon depi 2020",
  },
];

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#002B6E] text-white overflow-hidden py-28 px-5">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5A623]/40 bg-[#F5A623]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F5A623] mb-8 tracking-wide uppercase">
            Sa Nou Fè
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">Pwogram Vijend Haiti</h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Chak pwogram nou an kòmanse ak yon kesyon senp: kisa kominote a vrèman bezwen? Reponse a gide tout sa nou fè.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {programs.map((p, i) => (
            <div key={p.id} id={p.id} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-start`}>
              {/* Icon panel */}
              <div className={`shrink-0 w-full md:w-72 ${p.color} rounded-2xl p-10 text-white flex flex-col items-center text-center`}>
                <span className="text-6xl mb-5">{p.icon}</span>
                <h3 className="font-black text-xl mb-2">{p.title}</h3>
                <p className="text-white/70 text-sm italic mb-6">&ldquo;{p.tagline}&rdquo;</p>
                <div className="border-t border-white/20 pt-5 w-full">
                  <p className="text-white font-black text-lg">{p.impact}</p>
                  <p className="text-white/60 text-xs mt-1">Rezilta kumulatif</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="text-gray-600 text-lg leading-relaxed mb-7">{p.desc}</p>
                <h4 className="font-black text-[#002B6E] mb-4 text-sm tracking-wide uppercase">Aktivite Prensipèl</h4>
                <ul className="space-y-3">
                  {p.activities.map((act) => (
                    <li key={act} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: p.accent }}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600 text-sm leading-snug">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 bg-[#F8F6F0] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#002B6E] mb-4">Vin Fè Pati Solisyon An</h2>
          <p className="text-gray-500 mb-8">Pwogram yo fèt posib gras ak sipò volontè ak donasyon. Ou kapab fè diferans jodi a.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#donate" className="bg-[#CE1126] text-white font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg">
              Sipòte yon Pwogram →
            </Link>
            <Link href="/contact#volunteer" className="border-2 border-[#002B6E] text-[#002B6E] font-bold px-8 py-4 rounded-xl hover:bg-[#002B6E] hover:text-white transition-all">
              Vin Volontè
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
