import Link from "next/link";

const articles = [
  {
    date: "Mas 2025",
    category: "Pwogram",
    title: "Vijend Haiti lanse batch 4 inkibatè biznis jèn ak 25 patisipan nouvo",
    excerpt: "Apre twa batch ki fòme 95 antreprenè jèn, Vijend Haiti ouvri enskripsyon pou 4yèm batch inkibatè biznis 6 mwa a. Entansyon an klè: mennen plis jèn Ayisyen nan antrepreneryat dirab.",
    tag: "Antrepreneryat",
    color: "bg-[#F5A623]",
  },
  {
    date: "Jan 2025",
    category: "Kominote",
    title: "Enstallasyon sistèm dlo potab nan 3 nouvo kominote nan Tiburon",
    excerpt: "Gras ak yon patenarya ak DINEPA ak yon gwoup donè prive, Vijend Haiti rive ba 3 kominote zòn Tiburon aksè dirab ak dlo pwòp — premye fwa pou anpil fanmi yo.",
    tag: "Kominote",
    color: "bg-[#002B6E]",
  },
  {
    date: "Nov 2024",
    category: "Evènman",
    title: "Selebrasyon 4.5 zan Vijend Haiti: Bilan & Remèt Pri Antrepreneryat",
    excerpt: "Nan yon selebrasyon ki reyini plis pase 300 manm kominote, partenè, ak benefisyè, Vijend Haiti te prezante bilan 4.5 zan li epi remèt 5 pri antrepreneryat jèn.",
    tag: "Evènman",
    color: "bg-[#CE1126]",
  },
  {
    date: "Sep 2024",
    category: "Edikasyon",
    title: "50 nouvo bous etid distribiye — 32 pou jèn fi, 18 pou jèn gason",
    excerpt: "Pwogram bous anyèl Vijend Haiti kontinye pran plas: ane 2024-2025, 50 jèn resevwa yon bous konplè pou fè etid segondè oswa teknik. Priyorite pou jèn fi ak zòn riral.",
    tag: "Edikasyon",
    color: "bg-[#1A6B3C]",
  },
  {
    date: "Jen 2024",
    category: "Rekonèsans",
    title: "Vijend Haiti nominé pou Pri Eksèlans Sosyete Sivil 2024",
    excerpt: "Yon pwodij pou ekip Vijend Haiti. Nominasyon an rekonèt travay konsistan ak transparans eksepsyonèl òganizasyon an nan domèn devlopman kominote ann Ayiti.",
    tag: "Rekonèsans",
    color: "bg-[#6B21A8]",
  },
  {
    date: "Avril 2024",
    category: "Agrikilti",
    title: "Premye bèl rekòt kooperativ agrikòl Vijend Haiti nan Leogane",
    excerpt: "Dezan travay ak 80 fanm agrikiltè nan Leogane pote premye gwo rezilta: rekòt 3x pi pwoduktif, vant direk sou mache lokal, ak yon kès kominote k ap grandi.",
    tag: "Agrikilti",
    color: "bg-[#1A6B3C]",
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#002B6E] text-white overflow-hidden py-28 px-5">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5A623]/40 bg-[#F5A623]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F5A623] mb-8 tracking-wide uppercase">
            Nouvèl & Aktyalite
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">Sa k ap Pase nan Vijend Haiti</h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Dènye nouvèl, istwa siksè, ak anons nan kominote Vijend Haiti.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((a, i) => (
              <article key={i} className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-lift ${i === 0 ? "md:col-span-2" : ""}`}>
                <div className={`${a.color} h-2 w-full`} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400 text-xs">{a.date}</span>
                    <span className="bg-[#F8F6F0] text-[#002B6E] text-xs font-semibold px-2.5 py-0.5 rounded-full border border-[#002B6E]/10">
                      {a.tag}
                    </span>
                  </div>
                  <h2 className={`font-black text-[#002B6E] mb-3 leading-tight ${i === 0 ? "text-2xl" : "text-lg"}`}>
                    {a.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.excerpt}</p>
                  <div className="mt-5">
                    <Link href="#" className="text-[#CE1126] text-sm font-semibold hover:text-[#A50D1E] transition-colors">
                      Li plis →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-5 bg-[#F8F6F0]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#002B6E] mb-3">Rete Enfòme</h2>
          <p className="text-gray-500 mb-8">Resevwa nouvèl Vijend Haiti dirèkteman nan bwat imèl ou.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Adrès imèl ou..."
              className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-[#002B6E] focus:ring-2 focus:ring-[#002B6E]/10"
            />
            <button className="bg-[#002B6E] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#003587] transition-colors whitespace-nowrap">
              Enskri →
            </button>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 px-5 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-gray-500 text-sm mb-4">Swiv nou sou rezo sosyal pou dènye nouvèl yo :</p>
          <a
            href="https://www.facebook.com/vijendhaiti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1565D8] transition-colors"
          >
            <span className="font-black text-lg">f</span>
            Swiv Vijend Haiti sou Facebook
          </a>
        </div>
      </section>
    </div>
  );
}
