"use client";
import { useState } from "react";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const volunteerRoles = [
  "Edikatè / Antrenè",
  "Travayè Sosyal",
  "Pwofesyonèl Sante",
  "Ekspè Teknik (IT, Agrikilti, Finans…)",
  "Kominikasyon & Rezo Sosyal",
  "Lojistik & Transpò",
  "Jesyon Pwojè",
  "Lòt",
];

export default function ContactPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#002B6E] text-white overflow-hidden py-28 px-5">
        <div className="absolute inset-0 haiti-grid opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#F5A623]/40 bg-[#F5A623]/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#F5A623] mb-8 tracking-wide uppercase">
            Kontakte Nou
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Rejwenn Misyon Nou
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Kèlkeswa fason ou vle kontribye — don, volontarya, patenarya — nou la pou ou.
          </p>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-24 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#CE1126] font-bold text-xs tracking-widest uppercase">Sipòte Nou</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Fè yon Don</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              100% don yo dirèkteman sèvi pwogram kominote yo. Zèro frè administratif pou donasyon anba $500.
            </p>
          </div>

          <div className="bg-[#F8F6F0] rounded-2xl p-8 border border-[#002B6E]/8">
            {/* Amount selector */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {donationAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                  className={`py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                    selectedAmount === amt && !customAmount
                      ? "bg-[#002B6E] border-[#002B6E] text-white shadow-lg"
                      : "bg-white border-gray-200 text-[#002B6E] hover:border-[#002B6E]"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Lòt montan ($)"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
              className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-[#002B6E] mb-6"
            />

            {/* Impact display */}
            <div className="bg-[#002B6E]/5 border border-[#002B6E]/10 rounded-xl p-4 mb-6 text-sm text-[#002B6E]">
              {(() => {
                const amt = customAmount ? Number(customAmount) : selectedAmount;
                if (!amt) return "Chwazi yon montan pou wè enpak ou.";
                if (amt >= 500) return `$${amt} kapab finanse yon mwa konplè fòmasyon pou 5 jèn antreprenè.`;
                if (amt >= 100) return `$${amt} kapab peye materyèl lekòl pou 10 elèv pandan yon trimès.`;
                if (amt >= 50) return `$${amt} kapab finanse yon sesyon titorat pou 3 timoun pandan yon mwa.`;
                if (amt >= 25) return `$${amt} kapab bay yon fanmi semans pou yon sezon rekòt.`;
                return `$${amt} — chak kontribisyon konte. Mèsi anpil.`;
              })()}
            </div>

            <button className="w-full bg-[#CE1126] hover:bg-[#E8304A] text-white font-black py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 text-lg">
              Fè yon Don Jodi a →
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">Peman sekirize · Resi elektwonik otomatik · Don tax-deductible</p>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-24 px-5 geo-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#F5A623] font-bold text-xs tracking-widest uppercase">Volontarya</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Vin Volontè</h2>
            <p className="text-gray-500 mt-3">Ou pa bezwen dola — tan ou ak konpetans ou gen valè gwo pou nou.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#1A6B3C]/20 shadow-sm">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-[#002B6E] mb-2">Mèsi anpil!</h3>
              <p className="text-gray-500">Nou resevwa fòmilè ou a. Yon manm ekip nou an pral kontakte ou nan 48 zè k ap vini yo.</p>
            </div>
          ) : (
            <form
              className="bg-white rounded-2xl p-8 border border-[#002B6E]/8 shadow-sm space-y-5"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#002B6E] font-semibold text-sm mb-2">Non Konplè *</label>
                  <input required type="text" placeholder="Jean Marie Dupont" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B6E]" />
                </div>
                <div>
                  <label className="block text-[#002B6E] font-semibold text-sm mb-2">Imèl *</label>
                  <input required type="email" placeholder="ou@imèl.com" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B6E]" />
                </div>
              </div>
              <div>
                <label className="block text-[#002B6E] font-semibold text-sm mb-2">Telefòn</label>
                <input type="tel" placeholder="+509 xxxx xxxx" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B6E]" />
              </div>
              <div>
                <label className="block text-[#002B6E] font-semibold text-sm mb-2">Domèn Ekspertiz *</label>
                <select required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#002B6E]">
                  <option value="">Chwazi yon domèn...</option>
                  {volunteerRoles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[#002B6E] font-semibold text-sm mb-2">Mesaj / Motivasyon</label>
                <textarea rows={4} placeholder="Di nou kisa ki motive ou, ki eksperyans ou gen, ak kouman ou vle kontribye..." className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B6E] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#002B6E] hover:bg-[#003587] text-white font-black py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                Soumèt Aplikasyon Volontè →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-24 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#CE1126] font-bold text-xs tracking-widest uppercase">Kolaborasyon</span>
            <h2 className="text-4xl font-black text-[#002B6E] mt-3">Vin Patnè</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Nou ouvri pou patenarya ak ONG, antrepriz, inivèsite, ak enstitisyon gouvènmantal ki pataje valè nou yo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🤝", title: "Patenarya Pwogram", desc: "Kòdinasyon sou teren, pataj resous, ak enpak konbine." },
              { icon: "💰", title: "Finansman Enstitisyonèl", desc: "Sipò finansye pou pwogram espesifik oswa operasyon jeneral." },
              { icon: "📣", title: "Defans & Visiblite", desc: "Ede nou pote vwa Vijend Haiti pi lwen nan espas nasyonal ak entènasyonal." },
            ].map((p) => (
              <div key={p.title} className="bg-[#F8F6F0] rounded-2xl p-7 border border-[#002B6E]/8 card-lift text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-black text-[#002B6E] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 px-5 bg-[#002B6E]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          {[
            { icon: "📧", title: "Imèl", val: "info@vijendhaiti.org" },
            { icon: "📍", title: "Adrès", val: "Port-au-Prince, Haïti" },
            { icon: "📘", title: "Facebook", val: "facebook.com/vijendhaiti" },
          ].map((c) => (
            <div key={c.title}>
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-[#F5A623] font-bold text-xs tracking-wide uppercase mb-1">{c.title}</div>
              <div className="text-white/70 text-sm">{c.val}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
