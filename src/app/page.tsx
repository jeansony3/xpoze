"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Replace with your real YouTube video ID when available
  const INTRO_VIDEO_ID = "dQw4w9WgXcQ";

  return (
    <div>
      {/* ── VIDEO HERO ── */}
      <section className="relative bg-[#0B1D51] text-white overflow-hidden min-h-screen flex items-center">
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid opacity-30" />

        {/* Geometric shapes */}
        <div className="absolute top-12 right-16 w-28 h-28 border-4 border-[#1E8FE1]/20 rounded-sm rotate-6 hidden lg:block" />
        <div className="absolute top-8 right-52 w-20 h-20 bg-[#1E8FE1]/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-24 right-24 w-48 h-48 border border-[#1E8FE1]/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-16 right-64 w-10 h-10 bg-[#00C6FF]/15 rounded-full hidden lg:block" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#00C6FF] rounded-full hidden lg:block" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#1E8FE1]/15 to-transparent hidden lg:block" style={{right:'38%'}} />

        <div className="max-w-7xl mx-auto px-5 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#1E8FE1]/40 bg-[#1E8FE1]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#4AAEF0] mb-8 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-[#00C6FF] rounded-full animate-pulse" />
              Platfòm #1 oryantasyon karyè ann Ayiti
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              Transforming<br />
              <span className="blue-gradient-text">Career</span><br />
              Orientation<br />
              into Opportunity.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Xpoze ede elèv finisan Ayiti dekouvri pwofil yo, jwenn bon inivèsite,
              ak konekte ak mentor pwofesyonèl — tout gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="group inline-flex items-center justify-center gap-3 bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-2xl shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Kòmanse Tès Oryantasyon
                <span className="bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm">→</span>
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <span className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">▶</span>
                Wè ki sa Xpoze ye
              </button>
            </div>
            {/* Social proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {["ML","JB","SC","FE","NT"].map((ini,i)=>(
                  <div key={ini} className="w-9 h-9 rounded-full border-2 border-[#0B1D51] flex items-center justify-center text-xs font-bold text-white" style={{background:`hsl(${200+i*20},70%,45%)`}}>{ini}</div>
                ))}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">+500 elèv enskri</div>
                <div className="text-white/40 text-xs">Rejwenn kominote Xpoze a</div>
              </div>
            </div>
          </div>

          {/* Right: Video player card */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl shadow-black/40 border border-white/10"
              onClick={() => setVideoOpen(true)}
            >
              {/* Thumbnail / preview */}
              <div className="aspect-video bg-gradient-to-br from-[#0D2266] to-[#1E8FE1]/30 flex flex-col items-center justify-center relative">
                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 blueprint-grid opacity-40" />
                {/* Geometric accents */}
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-[#1E8FE1]/30 rounded-sm rotate-12" />
                <div className="absolute bottom-4 right-6 w-10 h-10 bg-[#1E8FE1]/20 rounded-full" />
                <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-[#00C6FF] rounded-full" />
                {/* Play button */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-[#1E8FE1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/40 group-hover:scale-110 transition-transform">
                    <span className="text-white text-3xl ml-1">▶</span>
                  </div>
                  <div className="text-white font-bold text-lg">Ki sa Xpoze ye?</div>
                  <div className="text-white/50 text-sm mt-1">Gade videyo entwodiksyon an</div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-mono">
                  2:30
                </div>
                {/* Live badge */}
                <div className="absolute top-4 right-4 bg-[#1E8FE1] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  XPOZE TV
                </div>
              </div>
              {/* Video info bar */}
              <div className="bg-[#0D2266]/80 backdrop-blur-sm px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">Xpoze — Oryantasyon Karyè</div>
                  <div className="text-white/40 text-xs mt-0.5">Marc-Kendy Losier · Fondatè Xpoze</div>
                </div>
                <div className="flex gap-2 items-center text-white/40 text-xs">
                  <span>👁 1.2k</span>
                  <span>❤️ 248</span>
                </div>
              </div>
            </div>

            {/* Mini episode cards below */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[
                { title: "Tès RIASEC — kijan li travay?", duration: "1:45", views: "890" },
                { title: "Kòman jwenn bous etid?", duration: "3:12", views: "1.4k" },
              ].map((v) => (
                <button
                  key={v.title}
                  onClick={() => setVideoOpen(true)}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-left hover:bg-white/10 transition-colors group"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#0D2266] to-[#142366] rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 blueprint-grid opacity-30" />
                    <div className="w-8 h-8 bg-[#1E8FE1]/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs ml-0.5">▶</span>
                    </div>
                    <span className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1 rounded font-mono">{v.duration}</span>
                  </div>
                  <div className="text-white/80 text-xs font-medium leading-tight">{v.title}</div>
                  <div className="text-white/30 text-xs mt-0.5">👁 {v.views}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium flex items-center gap-2"
            >
              ✕ Fèmen
            </button>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white/50 text-sm">
                Ou vle pataje videyo sa a?{" "}
                <Link href="/about" className="text-[#1E8FE1] hover:underline" onClick={() => setVideoOpen(false)}>
                  Aprann plis sou Xpoze →
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
          {[
            { n: "8+", label: "Domèn karyè" },
            { n: "22+", label: "Inivèsite mondyal" },
            { n: "40+", label: "Pwogram etid" },
            { n: "6+", label: "Mentor aktif" },
            { n: "18", label: "Kesyon tès RIASEC" },
          ].map(s=>(
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
              Tout sa ou bezwen<br/>
              <span className="blue-gradient-text">nan yon sèl kote</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon:"🧠", title:"Tès Oryantasyon RIASEC", desc:"18 kesyon pou dekouvri pwofil ou ak jwenn rekòmandasyon karyè pèsonalize baze sou syans.", href:"/quiz", tag:"5 minit", bg:"from-[#0B1D51] to-[#142366]" },
              { icon:"🎓", title:"Katalòg Inivèsite", desc:"22+ inivèsite mondyal — MIT, Harvard, Oxford, ak plis. Filtre pa domèn, pri, lang, peyi ak bous.", href:"/universities", tag:"22 inivèsite", bg:"from-[#1265A0] to-[#1E8FE1]" },
              { icon:"🗺️", title:"Roadmap Karyè", desc:"Plan etap pa etap depi 3èm rive aplikasyon inivèsite — matyè, konpetans, salè, ak dokiman.", href:"/careers", tag:"8 karyè", bg:"from-[#0B1D51] to-[#142366]" },
              { icon:"🤝", title:"Mentorship 1-a-1", desc:"Konekte ak pwofesyonèl verifye ki ka gide ou dirèkteman sou karyè ou vle a. Gratis.", href:"/mentors", tag:"6 mentor", bg:"from-[#1265A0] to-[#1E8FE1]" },
              { icon:"🌍", title:"Immigration", desc:"Visa, transfert de diplôme, SSN, permis de conduire, Finance 101, Crédit 101, DMV pratik.", href:"/immigration", tag:"9 gid", bg:"from-[#0B1D51] to-[#142366]" },
              { icon:"📺", title:"Podcast & Live", desc:"Videyo, podcast audio, ak webinar live ak pwofesyonèl Ayisyen ki pataje istwa yo.", href:"/podcasts", tag:"🔴 Live", bg:"from-[#1265A0] to-[#1E8FE1]" },
            ].map((f)=>(
              <Link key={f.title} href={f.href} className="card-lift group bg-white rounded-2xl p-7 border border-[#0B1D51]/8 overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.bg} opacity-5 rounded-bl-full`} />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#EEF4FF] rounded-xl flex items-center justify-center text-2xl">{f.icon}</div>
                  <span className="bg-[#EEF4FF] text-[#1E8FE1] text-xs font-bold px-3 py-1 rounded-full">{f.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1D51] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="text-[#1E8FE1] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">Eksplore <span>→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-5 bg-[#0B1D51] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#1E8FE1]/20 rounded-sm rotate-12 hidden lg:block" />
        <div className="absolute bottom-12 right-16 w-20 h-20 bg-[#1E8FE1]/10 rounded-full hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#1E8FE1] font-bold text-xs tracking-widest uppercase">Pwosesis</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">3 etap pou kòmanse</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n:"01", title:"Fè tès ou", desc:"Repon 18 kesyon RIASEC pou dekouvri pwofil ou ak resevwa rekòmandasyon karyè pèsonalize.", icon:"🧠" },
              { n:"02", title:"Eksplore opsyon ou", desc:"Konpare inivèsite mondyal, pwogram, ak roadmap karyè ki mache ak pwofil ou.", icon:"🔍" },
              { n:"03", title:"Konekte ak mentor", desc:"Pale dirèkteman ak yon pwofesyonèl nan domèn ou vle a. Sesyon 1-a-1 oswa webinar gratis.", icon:"🤝" },
            ].map((s)=>(
              <div key={s.n} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
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
            <Link href="/register" className="inline-flex items-center gap-3 bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-2xl shadow-blue-500/30 hover:-translate-y-0.5">
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
              { name:"Chantal M.", grade:"Rhéto Lettres", text:"Tès la te ede m konprann ke mwen ta renmen travay nan jounalism. Kounye a mwen gen yon plan klè!", stars:5 },
              { name:"Pierre-André J.", grade:"Philo Sciences", text:"Grâce à Xpoze, mwen te konnen egzakteman ki dokiman pou prepare pou aplike nan UEH Médecine.", stars:5 },
              { name:"Roseline D.", grade:"2ème Secondaire", text:"Mentor mwen an te eksplike m tout chemen pou vin avokate. M santi m prè kounye a.", stars:5 },
            ].map((t)=>(
              <div key={t.name} className="bg-[#F0F5FF] rounded-2xl p-7 border border-[#0B1D51]/8">
                <div className="flex gap-0.5 mb-4">{Array.from({length:t.stars}).map((_,i)=><span key={i} className="text-[#1E8FE1]">★</span>)}</div>
                <p className="text-[#0B1D51]/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0B1D51] rounded-full flex items-center justify-center text-sm font-bold text-white">{t.name.charAt(0)}</div>
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
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Prêt pou kòmanse<br/>vwayaj karyè ou?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Plis 500 elèv deja sou Xpoze. Enskri gratis nan 30 segonn ak jwenn premye rekòmandasyon ou.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="inline-flex items-center justify-center gap-2 bg-[#0B1D51] hover:bg-[#142366] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-2xl hover:-translate-y-0.5">
              Enskri gratis kounye a →
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              Aprann plis sou Xpoze
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
