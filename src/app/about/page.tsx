"use client";
import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function AboutPage() {
  const { t, lang } = useT();

  const stats = [
    { n: "500+", label: { ht: "Elèv enskri", fr: "Élèves inscrits", en: "Students enrolled", es: "Estudiantes inscritos" } },
    { n: "22+",  label: { ht: "Inivèsite mondyal", fr: "Universités mondiales", en: "World universities", es: "Universidades mundiales" } },
    { n: "6+",   label: { ht: "Mentor aktif", fr: "Mentors actifs", en: "Active mentors", es: "Mentores activos" } },
    { n: "8",    label: { ht: "Domèn karyè", fr: "Domaines de carrière", en: "Career fields", es: "Campos profesionales" } },
  ];

  const steps = [
    {
      icon: "🧠",
      title: { ht: "Tès RIASEC", fr: "Test RIASEC", en: "RIASEC Test", es: "Test RIASEC" },
      desc: { ht: "Yon analiz syantifik 18 kesyon ki revele pwofil oryantasyon ou.", fr: "Une analyse scientifique de 18 questions qui révèle votre profil d'orientation.", en: "An 18-question scientific analysis that reveals your orientation profile.", es: "Un análisis científico de 18 preguntas que revela tu perfil de orientación." },
    },
    {
      icon: "🎓",
      title: { ht: "Eksplore Inivèsite", fr: "Explorer les Universités", en: "Explore Universities", es: "Explorar Universidades" },
      desc: { ht: "Chwazi nan 22+ inivèsite mondyal ak filtre pa domèn, peyi, ak bous.", fr: "Choisissez parmi 22+ universités mondiales, filtrées par domaine, pays et bourse.", en: "Choose from 22+ world universities filtered by field, country, and scholarships.", es: "Elige entre 22+ universidades mundiales filtradas por campo, país y becas." },
    },
    {
      icon: "🤝",
      title: { ht: "Mentorship Gratis", fr: "Mentorat Gratuit", en: "Free Mentorship", es: "Mentoría Gratuita" },
      desc: { ht: "Konekte dirèkteman ak pwofesyonèl Ayisyen nan domèn ou vle a.", fr: "Connectez-vous directement avec des professionnels haïtiens dans votre domaine.", en: "Connect directly with Haitian professionals in your desired field.", es: "Conéctate directamente con profesionales haitianos en tu campo deseado." },
    },
    {
      icon: "🌍",
      title: { ht: "Gid Imigrasyon", fr: "Guide d'Immigration", en: "Immigration Guide", es: "Guía de Inmigración" },
      desc: { ht: "Tout enfòmasyon pou visa, transfert diplòm, SSN, finans, ak plis.", fr: "Toutes les informations sur les visas, transferts de diplôme, SSN, finances et plus.", en: "All information on visas, degree transfers, SSN, finances, and more.", es: "Toda la información sobre visas, transferencias de título, SSN, finanzas y más." },
    },
  ];

  const values = [
    {
      icon: "🔓",
      title: { ht: "Aksè lib", fr: "Accès libre", en: "Open access", es: "Acceso abierto" },
      desc: { ht: "Tout zouti gratis pou tout elèv Ayiti, sanzeksepsyon.", fr: "Tous les outils gratuits pour tous les élèves haïtiens, sans exception.", en: "All tools free for every Haitian student, no exceptions.", es: "Todas las herramientas gratuitas para todos los estudiantes haitianos, sin excepción." },
    },
    {
      icon: "🎯",
      title: { ht: "Pèsonalize", fr: "Personnalisé", en: "Personalized", es: "Personalizado" },
      desc: { ht: "Rekòmandasyon baze sou pwofil RIASEC ak sitiyasyon chak elèv.", fr: "Recommandations basées sur le profil RIASEC et la situation de chaque élève.", en: "Recommendations based on each student's RIASEC profile and situation.", es: "Recomendaciones basadas en el perfil RIASEC y la situación de cada estudiante." },
    },
    {
      icon: "🤲",
      title: { ht: "Kominote", fr: "Communauté", en: "Community", es: "Comunidad" },
      desc: { ht: "Kreye koneksyon reyèl ant elèv, mentor, ak pwofesyonèl.", fr: "Créer des connexions réelles entre élèves, mentors et professionnels.", en: "Building real connections between students, mentors, and professionals.", es: "Construyendo conexiones reales entre estudiantes, mentores y profesionales." },
    },
  ];

  const l = (obj: Record<string, string>) => obj[lang] ?? obj["ht"];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B1D51] text-white overflow-hidden py-28 px-5">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute top-12 right-16 w-40 h-40 border-2 border-[#1E8FE1]/20 rounded-sm rotate-12 hidden lg:block" />
        <div className="absolute bottom-12 left-24 w-24 h-24 bg-[#1E8FE1]/10 rounded-full hidden lg:block" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#1E8FE1]/40 bg-[#1E8FE1]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#4AAEF0] mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-[#00C6FF] rounded-full" />
            {t("about", "title")}
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Transforming<br />
            <span className="blue-gradient-text">Career Orientation</span><br />
            into Opportunity
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            {t("about", "missionText")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.n}>
              <div className="text-4xl font-black text-[#1E8FE1] mb-1">{s.n}</div>
              <div className="text-gray-500 text-sm">{l(s.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-5 geo-bg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-10 border border-[#0B1D51]/8 shadow-sm">
            <div className="w-12 h-12 bg-[#EEF4FF] rounded-xl flex items-center justify-center text-2xl mb-5">🎯</div>
            <h2 className="text-2xl font-black text-[#0B1D51] mb-4">{t("about", "mission")}</h2>
            <p className="text-gray-600 leading-relaxed">{t("about", "missionText")}</p>
          </div>
          <div className="bg-[#0B1D51] rounded-2xl p-10 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#1E8FE1]/20 rounded-xl flex items-center justify-center text-2xl mb-5">🌟</div>
              <h2 className="text-2xl font-black text-white mb-4">{t("about", "vision")}</h2>
              <p className="text-white/60 leading-relaxed">{t("about", "visionText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">{t("about", "howTitle")}</span>
            <h2 className="text-4xl font-black text-[#0B1D51] mt-3">{t("about", "howTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-[#F0F5FF] rounded-2xl p-7 border border-[#0B1D51]/8 relative">
                <div className="text-4xl font-black text-[#1E8FE1]/20 mb-3">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[#0B1D51] mb-2">{l(s.title)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{l(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-5 bg-[#0B1D51] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white">
              {lang === "ht" ? "Valè nou" : lang === "fr" ? "Nos valeurs" : lang === "en" ? "Our values" : "Nuestros valores"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{l(v.title)}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{l(v.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">{t("about", "founder")}</span>
            <h2 className="text-4xl font-black text-[#0B1D51] mt-3">Marc-Kendy Losier</h2>
            <p className="text-gray-400 text-sm mt-1">Xpozer · Fondatè & CEO</p>
          </div>
          <div className="bg-gradient-to-br from-[#0B1D51] to-[#142366] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            {/* Avatar */}
            <div className="relative z-10 shrink-0">
              <div className="w-36 h-36 bg-[#1E8FE1] rounded-full flex items-center justify-center text-white text-5xl font-black shadow-2xl shadow-blue-500/30">
                M
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#00C6FF] rounded-full w-10 h-10 flex items-center justify-center text-[#0B1D51] font-black text-sm shadow-lg">
                ✓
              </div>
            </div>
            <div className="relative z-10 text-center md:text-left">
              <blockquote className="text-white text-lg md:text-xl leading-relaxed italic mb-6">
                &ldquo;{t("about", "founderBio")}&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["🇭🇹 Haïti", "💡 EdTech", "🎓 Éducation", "🚀 Innovation"].map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-5 geo-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">{t("about", "impact")}</span>
            <h2 className="text-4xl font-black text-[#0B1D51] mt-3">
              {lang === "ht" ? "Enpak nou sou lavi elèv" : lang === "fr" ? "Notre impact sur la vie des élèves" : lang === "en" ? "Our impact on students' lives" : "Nuestro impacto en la vida de los estudiantes"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "📈", n: "87%", label: { ht: "Elèv ki jwenn direksyon karyè apre tès RIASEC a", fr: "Élèves qui trouvent une orientation professionnelle après le test RIASEC", en: "Students who find career direction after the RIASEC test", es: "Estudiantes que encuentran dirección profesional tras el test RIASEC" } },
              { icon: "🎓", n: "63%", label: { ht: "Ogmantasyon nan aplikasyon inivèsite nan 6 mwa", fr: "Augmentation des candidatures universitaires en 6 mois", en: "Increase in university applications within 6 months", es: "Aumento en solicitudes universitarias en 6 meses" } },
              { icon: "🤝", n: "200+", label: { ht: "Sesyon mentor konplète chak mwa", fr: "Sessions de mentorat complètes chaque mois", en: "Mentor sessions completed each month", es: "Sesiones de mentoría completadas cada mes" } },
              { icon: "🌍", n: "12+", label: { ht: "Peyi kote elèv Xpoze ap etidye", fr: "Pays où les élèves Xpoze étudient", en: "Countries where Xpoze students are studying", es: "Países donde estudian los alumnos de Xpoze" } },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#0B1D51]/8 flex items-center gap-6">
                <div className="w-16 h-16 bg-[#EEF4FF] rounded-2xl flex items-center justify-center text-3xl shrink-0">{item.icon}</div>
                <div>
                  <div className="text-4xl font-black text-[#1E8FE1]">{item.n}</div>
                  <div className="text-gray-500 text-sm mt-1">{l(item.label)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1E8FE1] to-[#00C6FF] py-20 px-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-black mb-4">
            {lang === "ht" ? "Rejwenn misyon nou an" : lang === "fr" ? "Rejoignez notre mission" : lang === "en" ? "Join our mission" : "Únete a nuestra misión"}
          </h2>
          <p className="text-white/80 text-lg mb-10">
            {lang === "ht" ? "Chak elèv merite yon chans. Ede n chanje istwa Ayiti." : lang === "fr" ? "Chaque élève mérite une chance. Aidez-nous à changer l'histoire d'Haïti." : lang === "en" ? "Every student deserves a chance. Help us change Haiti's story." : "Cada estudiante merece una oportunidad. Ayúdanos a cambiar la historia de Haití."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-[#0B1D51] hover:bg-[#142366] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-2xl hover:-translate-y-0.5">
              {lang === "ht" ? "Enskri gratis →" : lang === "fr" ? "S'inscrire gratuitement →" : lang === "en" ? "Sign up free →" : "Regístrate gratis →"}
            </Link>
            <Link href="/mentors" className="bg-white/15 border border-white/30 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              {lang === "ht" ? "Tounen mentor" : lang === "fr" ? "Devenir mentor" : lang === "en" ? "Become a mentor" : "Ser mentor"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
