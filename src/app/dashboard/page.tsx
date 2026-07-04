"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";
import { CAREERS, getCareersByRiasec } from "@/lib/data";
import { LIVE_SESSIONS } from "@/lib/liveSessions";
import { useT } from "@/lib/i18n";

// ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────

function StudentDashboard() {
  const { user } = useAuthStore();
  const { lang } = useT();
  const [registered, setRegistered] = useState<Set<string>>(new Set());
  if (!user) return null;

  const liveNow = LIVE_SESSIONS.filter((s) => s.isLive);
  const upcomingSessions = LIVE_SESSIONS.filter((s) => !s.isLive).slice(0, 3);

  const riasecResult = user.riasecResult;
  const topCodes = riasecResult
    ? Object.entries(riasecResult).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([k]) => k)
    : [];
  const recommended = riasecResult ? getCareersByRiasec(topCodes).slice(0, 3) : [];

  const RIASEC_COLORS: Record<string, string> = {
    R: "bg-orange-500", I: "bg-blue-600", A: "bg-purple-500",
    S: "bg-green-500", E: "bg-red-500", C: "bg-yellow-500",
  };

  const steps = [
    { done: true, label: { ht: "Kreye kont", fr: "Créer un compte", en: "Create account", es: "Crear cuenta" }, desc: { ht: "Ou enskri sou Xpoze", fr: "Vous êtes inscrit sur Xpoze", en: "You're registered on Xpoze", es: "Estás registrado en Xpoze" }, icon: "✓" },
    { done: !!user.quizCompleted, label: { ht: "Fè tès oryantasyon", fr: "Faire le test d'orientation", en: "Take orientation test", es: "Hacer test de orientación" }, desc: { ht: user.quizCompleted ? "Tès konplète!" : "Dekouvri pwofil RIASEC ou", fr: user.quizCompleted ? "Test complété!" : "Découvrez votre profil RIASEC", en: user.quizCompleted ? "Test complete!" : "Discover your RIASEC profile", es: user.quizCompleted ? "¡Test completado!" : "Descubre tu perfil RIASEC" }, icon: user.quizCompleted ? "✓" : "2", href: "/quiz" },
    { done: false, label: { ht: "Eksplore inivèsite", fr: "Explorer les universités", en: "Explore universities", es: "Explorar universidades" }, desc: { ht: "Jwenn pwogram ki mache ak ou", fr: "Trouvez les programmes qui vous conviennent", en: "Find programs that match you", es: "Encuentra programas que te convengan" }, icon: "3", href: "/universities" },
    { done: false, label: { ht: "Konekte ak mentor", fr: "Se connecter avec un mentor", en: "Connect with mentor", es: "Conectar con mentor" }, desc: { ht: "Sesyon 1-a-1 gratis", fr: "Session 1-à-1 gratuite", en: "Free 1-on-1 session", es: "Sesión 1-a-1 gratis" }, icon: "4", href: "/mentors" },
  ];

  const l = (obj: Record<string, string>) => obj[lang] ?? obj["ht"];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-[#0B1D51] to-[#142366] text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-[#1E8FE1] rounded-full flex items-center justify-center text-white text-xl font-black">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {lang === "ht" ? "Bonjou" : lang === "fr" ? "Bonjour" : lang === "en" ? "Hello" : "Hola"}, {user.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-blue-100 text-sm">{user.grade ? `${user.grade} · ` : ""}{lang === "ht" ? "Kont elèv" : lang === "fr" ? "Compte élève" : lang === "en" ? "Student account" : "Cuenta estudiante"}</p>
            </div>
          </div>
          {user.quizCompleted && riasecResult && (
            <div className="mt-4 flex gap-2 flex-wrap">
              {Object.entries(riasecResult).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([code, pct]) => (
                <span key={code} className={`${RIASEC_COLORS[code]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {code}: {pct}%
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-4">{lang === "ht" ? "Pwogrè ou" : lang === "fr" ? "Votre progression" : lang === "en" ? "Your progress" : "Tu progreso"}</h2>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${s.done ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className={`text-sm font-medium ${s.done ? "text-gray-900" : "text-gray-500"}`}>{l(s.label)}</div>
                    <div className="text-xs text-gray-400">{l(s.desc)}</div>
                    {!s.done && s.href && (
                      <Link href={s.href} className="text-xs text-[#1E8FE1] hover:underline">
                        {lang === "ht" ? "Fè sa kounye a →" : lang === "fr" ? "Faire maintenant →" : lang === "en" ? "Do it now →" : "Hacerlo ahora →"}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {!user.quizCompleted ? (
            <div className="bg-[#EEF4FF] border border-[#1E8FE1]/30 rounded-xl p-6">
              <h2 className="font-semibold text-gray-900 mb-2">🧠 {lang === "ht" ? "Fè tès oryantasyon ou" : lang === "fr" ? "Faites votre test d'orientation" : lang === "en" ? "Take your orientation test" : "Haz tu test de orientación"}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {lang === "ht" ? "Ou poko fè tès RIASEC ou. Pran 5 minit pou dekouvri karyè ki pi mache ak ou." : lang === "fr" ? "Vous n'avez pas encore fait votre test RIASEC. Prenez 5 minutes pour découvrir la carrière qui vous correspond." : lang === "en" ? "You haven't taken your RIASEC test yet. Take 5 minutes to discover the career that best suits you." : "Aún no has hecho tu test RIASEC. Tómate 5 minutos para descubrir la carrera más adecuada para ti."}
              </p>
              <Link href="/quiz" className="bg-[#1E8FE1] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#142366] transition-colors inline-block">
                {lang === "ht" ? "Kòmanse tès la →" : lang === "fr" ? "Commencer le test →" : lang === "en" ? "Start the test →" : "Empezar el test →"}
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-gray-900 mb-4">
                🎯 {lang === "ht" ? "Karyè rekòmande pou ou" : lang === "fr" ? "Carrières recommandées" : lang === "en" ? "Recommended careers" : "Carreras recomendadas"}
              </h2>
              <div className="space-y-3">
                {recommended.map((career) => (
                  <Link key={career.id} href={`/careers/${career.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{career.name}</div>
                      <div className="text-xs text-gray-500">{career.domain} · {career.salary}</div>
                    </div>
                    <span className="text-[#1E8FE1] text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link href="/quiz" className="text-[#1E8FE1] text-sm hover:underline mt-3 block">
                {lang === "ht" ? "Refè tès la" : lang === "fr" ? "Refaire le test" : lang === "en" ? "Retake test" : "Repetir test"}
              </Link>
            </div>
          )}

          {/* Live sessions — watch & sign up (students never see a Go Live button) */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                {lang === "ht" ? "Sesyon Live k ap vini" : lang === "fr" ? "Sessions live à venir" : lang === "en" ? "Upcoming live sessions" : "Próximas sesiones en vivo"}
              </h2>
              <Link href="/live" className="text-[#1E8FE1] text-xs font-semibold hover:underline">
                {lang === "ht" ? "Wè tout →" : lang === "fr" ? "Voir tout →" : lang === "en" ? "See all →" : "Ver todo →"}
              </Link>
            </div>

            {/* Live NOW */}
            {liveNow.map((s) => (
              <div key={s.id} className="bg-gradient-to-r from-red-600 to-rose-500 rounded-xl p-4 mb-4 text-white flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-white text-red-600 text-[10px] font-black px-2 py-0.5 rounded-full">🔴 LIVE</span>
                    <span className="text-red-100 text-xs">{s.spotsLeft} {lang === "ht" ? "plas rete" : lang === "fr" ? "places restantes" : lang === "en" ? "spots left" : "plazas restantes"}</span>
                  </div>
                  <div className="font-bold text-sm">{s.title}</div>
                  <div className="text-red-100 text-xs">{s.host} · ⏱ {s.duration}</div>
                </div>
                <Link href="/live" className="bg-white text-red-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-center shrink-0">
                  ▶ {lang === "ht" ? "Gade kounye a" : lang === "fr" ? "Regarder" : lang === "en" ? "Watch now" : "Ver ahora"}
                </Link>
              </div>
            ))}

            {/* Upcoming */}
            <div className="space-y-3">
              {upcomingSessions.map((s) => (
                <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-[#EEF4FF] rounded-xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-[#1E8FE1] font-black text-sm leading-none">{s.date.split("-")[2]}</span>
                    <span className="text-[#1E8FE1]/60 text-[9px] font-bold uppercase">{["","jan","fev","mas","avr","me","jen","jiy","out","sep","okt","nov","des"][parseInt(s.date.split("-")[1])]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm truncate">{s.title}</div>
                    <div className="text-xs text-gray-500">{s.host} · {s.time}</div>
                  </div>
                  {registered.has(s.id) ? (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-lg shrink-0">
                      ✓ {lang === "ht" ? "Enskri" : lang === "fr" ? "Inscrit" : lang === "en" ? "Signed up" : "Inscrito"}
                    </span>
                  ) : (
                    <button
                      onClick={() => setRegistered((prev) => new Set(prev).add(s.id))}
                      className="bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0"
                    >
                      {lang === "ht" ? "Enskri" : lang === "fr" ? "S'inscrire" : lang === "en" ? "Sign up" : "Inscribirse"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/universities", icon: "🎓", label: { ht: "Inivèsite", fr: "Universités", en: "Universities", es: "Universidades" }, desc: "22+ mondyal" },
              { href: "/careers", icon: "🗺️", label: { ht: "Karyè", fr: "Carrières", en: "Careers", es: "Carreras" }, desc: `${CAREERS.length} domèn` },
              { href: "/mentors", icon: "🤝", label: { ht: "Mentor", fr: "Mentors", en: "Mentors", es: "Mentores" }, desc: "6 disponib" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{l(item.label)}</div>
                <div className="text-gray-500 text-xs">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MENTOR DASHBOARD ─────────────────────────────────────────────────────────

function MentorDashboard() {
  const { user } = useAuthStore();
  const { lang } = useT();
  const [tab, setTab] = useState<"overview" | "post" | "live">("overview");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postTag, setPostTag] = useState("Conseil");
  const [postSent, setPostSent] = useState(false);
  const [liveTitle, setLiveTitle] = useState("");
  const [liveDate, setLiveDate] = useState("");
  const [liveDesc, setLiveDesc] = useState("");
  const [liveSent, setLiveSent] = useState(false);

  if (!user) return null;

  const l = (obj: Record<string, string>) => obj[lang] ?? obj["ht"];

  const stats = [
    { icon: "👥", n: "12", label: { ht: "Elèv ak ou", fr: "Élèves avec vous", en: "Students with you", es: "Estudiantes contigo" } },
    { icon: "📅", n: "8", label: { ht: "Sesyon fini", fr: "Sessions terminées", en: "Sessions done", es: "Sesiones hechas" } },
    { icon: "⭐", n: "4.9", label: { ht: "Nòt mwayen", fr: "Note moyenne", en: "Average rating", es: "Calificación media" } },
    { icon: "📩", n: "3", label: { ht: "Nouvo demann", fr: "Nouvelles demandes", en: "New requests", es: "Nuevas solicitudes" } },
  ];

  const requests = [
    { name: "Chantal M.", grade: "Rhéto Lettres", topic: { ht: "Jounalism & Kominikasyon", fr: "Journalisme & Communication", en: "Journalism & Communication", es: "Periodismo & Comunicación" }, time: "2h" },
    { name: "Pierre-André J.", grade: "Philo Sciences", topic: { ht: "Medsin — Inivèsite Lòt bò", fr: "Médecine — Université à l'étranger", en: "Medicine — Abroad University", es: "Medicina — Universidad en el exterior" }, time: "5h" },
    { name: "Roseline D.", grade: "2ème Sec", topic: { ht: "Dwa & Pwofil RIASEC", fr: "Droit & Profil RIASEC", en: "Law & RIASEC profile", es: "Derecho & Perfil RIASEC" }, time: "1j" },
  ];

  const posts = [
    { title: { ht: "5 fason pou prepare aplikasyon inivèsite ou", fr: "5 façons de préparer votre candidature universitaire", en: "5 ways to prepare your university application", es: "5 formas de preparar tu solicitud universitaria" }, views: 342, date: "15 jan" },
    { title: { ht: "Ki sa tès RIASEC aprann nou sou tèt nou", fr: "Ce que le test RIASEC nous apprend sur nous-mêmes", en: "What the RIASEC test teaches us about ourselves", es: "Lo que el test RIASEC nos enseña sobre nosotros mismos" }, views: 218, date: "8 jan" },
  ];

  const tags = ["Conseil", "Carrière", "Université", "Immigration", "Finance", "Motivation"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0B1D51] to-[#142366] text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#1E8FE1] rounded-full flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-blue-500/30">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{user.name.split(" ")[0]}</h1>
                <span className="bg-[#1E8FE1]/30 text-[#4AAEF0] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#1E8FE1]/30">
                  {lang === "ht" ? "Mentor Verifye" : lang === "fr" ? "Mentor Vérifié" : lang === "en" ? "Verified Mentor" : "Mentor Verificado"} ✓
                </span>
              </div>
              <p className="text-blue-100 text-sm">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setTab("live")}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-red-500/30"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {lang === "ht" ? "Kòmanse Live" : lang === "fr" ? "Démarrer en direct" : lang === "en" ? "Go Live" : "Ir en vivo"}
            </button>
            <button
              onClick={() => setTab("post")}
              className="flex items-center gap-2 bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white font-bold px-5 py-2.5 rounded-xl transition-all"
            >
              ✏️ {lang === "ht" ? "Kreye Pòs" : lang === "fr" ? "Créer un post" : lang === "en" ? "Create Post" : "Crear publicación"}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className="text-3xl font-black text-[#1E8FE1]">{s.n}</div>
            <div className="text-gray-500 text-xs mt-0.5">{l(s.label)}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-100 pb-3">
        {[
          { id: "overview", label: { ht: "Aperçu", fr: "Aperçu", en: "Overview", es: "Resumen" } },
          { id: "post", label: { ht: "Kreye Pòs", fr: "Créer un post", en: "Create Post", es: "Crear publicación" } },
          { id: "live", label: { ht: "Planifye Live", fr: "Planifier Live", en: "Schedule Live", es: "Programar Live" } },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as typeof tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t.id ? "bg-[#1E8FE1] text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
          >
            {l(t.label)}
          </button>
        ))}
      </div>

      {/* Tab: Overview */}
      {tab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Session Requests */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#0B1D51]">
                📩 {lang === "ht" ? "Demann sesyon" : lang === "fr" ? "Demandes de session" : lang === "en" ? "Session requests" : "Solicitudes de sesión"}
              </h2>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">{requests.length} {lang === "ht" ? "nouvo" : lang === "fr" ? "nouvelles" : lang === "en" ? "new" : "nuevas"}</span>
            </div>
            <div className="space-y-3">
              {requests.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#F0F5FF] rounded-xl border border-[#0B1D51]/5">
                  <div className="w-10 h-10 bg-[#0B1D51] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#0B1D51] text-sm">{r.name}</div>
                    <div className="text-gray-500 text-xs">{r.grade} · {l(r.topic)}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-gray-400 text-xs mb-1">{r.time}</div>
                    <button className="bg-[#1E8FE1] text-white text-xs font-bold px-3 py-1 rounded-lg hover:bg-[#4AAEF0] transition-colors">
                      {lang === "ht" ? "Aksepte" : lang === "fr" ? "Accepter" : lang === "en" ? "Accept" : "Aceptar"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-[#0B1D51] mb-5">
              📝 {lang === "ht" ? "Pòs resan ou" : lang === "fr" ? "Vos posts récents" : lang === "en" ? "Your recent posts" : "Tus posts recientes"}
            </h2>
            <div className="space-y-3">
              {posts.map((p, i) => (
                <div key={i} className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-[#0B1D51] text-sm mb-1">{l(p.title)}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>👁 {p.views} {lang === "ht" ? "vit" : "vues"}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setTab("post")} className="text-[#1E8FE1] text-sm font-medium hover:underline mt-4 block">
              + {lang === "ht" ? "Ekri nouvo pòs" : lang === "fr" ? "Écrire un nouveau post" : lang === "en" ? "Write a new post" : "Escribir nuevo post"}
            </button>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href: "/mentors", icon: "👤", label: { ht: "Pwofil piblik", fr: "Profil public", en: "Public profile", es: "Perfil público" } },
              { href: "/live", icon: "📺", label: { ht: "Sesyon live", fr: "Sessions live", en: "Live sessions", es: "Sesiones live" } },
              { href: "/podcasts", icon: "🎙️", label: { ht: "Podcast", fr: "Podcast", en: "Podcast", es: "Podcast" } },
              { href: "/careers", icon: "🗺️", label: { ht: "Karyè", fr: "Carrières", en: "Careers", es: "Carreras" } },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-[#F0F5FF] rounded-xl p-4 border border-[#0B1D51]/5 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-[#0B1D51]">{l(item.label)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Create Post */}
      {tab === "post" && (
        <div className="max-w-2xl">
          {postSent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-green-700 mb-2">
                {lang === "ht" ? "Pòs pibliye!" : lang === "fr" ? "Post publié!" : lang === "en" ? "Post published!" : "¡Post publicado!"}
              </h2>
              <p className="text-green-600 text-sm mb-6">
                {lang === "ht" ? "Elèv yo ap wè pòs ou kounye a." : lang === "fr" ? "Les élèves voient votre post maintenant." : lang === "en" ? "Students can see your post now." : "Los estudiantes pueden ver tu post ahora."}
              </p>
              <button onClick={() => { setPostSent(false); setPostTitle(""); setPostBody(""); }} className="bg-[#1E8FE1] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#4AAEF0] transition-colors">
                {lang === "ht" ? "Ekri yon lòt" : lang === "fr" ? "En écrire un autre" : lang === "en" ? "Write another" : "Escribir otro"}
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-black text-[#0B1D51] mb-6">
                ✏️ {lang === "ht" ? "Kreye Pòs Nouvo" : lang === "fr" ? "Créer un nouveau post" : lang === "en" ? "Create New Post" : "Crear nuevo post"}
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                    {lang === "ht" ? "Tit" : lang === "fr" ? "Titre" : lang === "en" ? "Title" : "Título"}
                  </label>
                  <input
                    type="text"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    placeholder={lang === "ht" ? "Ekri tit pòs ou..." : lang === "fr" ? "Écrivez le titre de votre post..." : lang === "en" ? "Write your post title..." : "Escribe el título de tu post..."}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FE1]/40 focus:border-[#1E8FE1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                    {lang === "ht" ? "Kontni" : lang === "fr" ? "Contenu" : lang === "en" ? "Content" : "Contenido"}
                  </label>
                  <textarea
                    rows={6}
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    placeholder={lang === "ht" ? "Ekri mesaj ou pou elèv yo..." : lang === "fr" ? "Écrivez votre message pour les élèves..." : lang === "en" ? "Write your message for students..." : "Escribe tu mensaje para los estudiantes..."}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FE1]/40 focus:border-[#1E8FE1] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                    {lang === "ht" ? "Etikèt" : lang === "fr" ? "Étiquette" : lang === "en" ? "Tag" : "Etiqueta"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button key={tag} onClick={() => setPostTag(tag)} className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${postTag === tag ? "bg-[#1E8FE1] text-white" : "bg-[#EEF4FF] text-[#1E8FE1] hover:bg-[#1E8FE1]/20"}`}>
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => postTitle && postBody && setPostSent(true)}
                  disabled={!postTitle || !postBody}
                  className="w-full bg-[#1E8FE1] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4AAEF0] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  {lang === "ht" ? "Pibliye Pòs" : lang === "fr" ? "Publier le post" : lang === "en" ? "Publish Post" : "Publicar post"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab: Go Live */}
      {tab === "live" && (
        <div className="max-w-2xl">
          {liveSent ? (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🔴</div>
              <h2 className="text-2xl font-black text-red-600 mb-2">
                {lang === "ht" ? "Sesyon live planifye!" : lang === "fr" ? "Session live planifiée!" : lang === "en" ? "Live session scheduled!" : "¡Sesión live programada!"}
              </h2>
              <p className="text-red-500 text-sm mb-2 font-semibold">{liveTitle}</p>
              <p className="text-gray-500 text-sm mb-6">{liveDate}</p>
              <button onClick={() => { setLiveSent(false); setLiveTitle(""); setLiveDate(""); setLiveDesc(""); }} className="bg-red-500 text-white font-bold px-6 py-2 rounded-xl hover:bg-red-400 transition-colors">
                {lang === "ht" ? "Planifye yon lòt" : lang === "fr" ? "En planifier une autre" : lang === "en" ? "Schedule another" : "Programar otra"}
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#0B1D51]">
                    {lang === "ht" ? "Planifye Sesyon Live" : lang === "fr" ? "Planifier une session en direct" : lang === "en" ? "Schedule a Live Session" : "Programar sesión en vivo"}
                  </h2>
                  <p className="text-gray-400 text-xs">
                    {lang === "ht" ? "Elèv yo ap resevwa notifikasyon" : lang === "fr" ? "Les élèves recevront une notification" : lang === "en" ? "Students will receive a notification" : "Los estudiantes recibirán una notificación"}
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                    {lang === "ht" ? "Tit sesyon" : lang === "fr" ? "Titre de la session" : lang === "en" ? "Session title" : "Título de la sesión"}
                  </label>
                  <input
                    type="text"
                    value={liveTitle}
                    onChange={(e) => setLiveTitle(e.target.value)}
                    placeholder={lang === "ht" ? "Ex: Kijan prepare aplikasyon Harvard?" : lang === "fr" ? "Ex: Comment préparer sa candidature à Harvard?" : lang === "en" ? "Ex: How to prepare your Harvard application?" : "Ej: ¿Cómo preparar tu solicitud a Harvard?"}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                    {lang === "ht" ? "Dat ak lè" : lang === "fr" ? "Date et heure" : lang === "en" ? "Date and time" : "Fecha y hora"}
                  </label>
                  <input
                    type="datetime-local"
                    value={liveDate}
                    onChange={(e) => setLiveDate(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                    {lang === "ht" ? "Deskripsyon" : lang === "fr" ? "Description" : lang === "en" ? "Description" : "Descripción"}
                  </label>
                  <textarea
                    rows={4}
                    value={liveDesc}
                    onChange={(e) => setLiveDesc(e.target.value)}
                    placeholder={lang === "ht" ? "Ki sa nou pral diskite?" : lang === "fr" ? "Qu'allons-nous discuter?" : lang === "en" ? "What will we discuss?" : "¿Qué discutiremos?"}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 resize-none"
                  />
                </div>
                <div className="bg-[#FEF2F2] border border-red-100 rounded-xl p-4 text-sm text-red-600">
                  💡 {lang === "ht" ? "Sesyon live yo ka rive nan 500 elèv anrejistreman." : lang === "fr" ? "Les sessions live peuvent atteindre 500 élèves inscrits." : lang === "en" ? "Live sessions can reach 500 registered students." : "Las sesiones live pueden llegar a 500 estudiantes registrados."}
                </div>
                <button
                  onClick={() => liveTitle && liveDate && setLiveSent(true)}
                  disabled={!liveTitle || !liveDate}
                  className="w-full bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-400 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  {lang === "ht" ? "Konfime Live" : lang === "fr" ? "Confirmer le Live" : lang === "en" ? "Confirm Live" : "Confirmar Live"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  if (user.role === "mentor" || user.role === "admin") return <MentorDashboard />;
  return <StudentDashboard />;
}
