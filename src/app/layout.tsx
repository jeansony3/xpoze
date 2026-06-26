import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpoze — Transforming Career Orientation into Opportunity",
  description: "Platfòm dijital ki ede elèv finisan Ayiti dekouvri karyè yo, jwenn inivèsite, ak konekte ak mentor pwofesyonèl.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen bg-[#F0F5FF] flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#0B1D51] text-white pt-16 pb-8 relative overflow-hidden">
          {/* Geometric decoration */}
          <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
            <div className="absolute bottom-8 right-8 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute bottom-16 right-32 w-20 h-20 border-2 border-[#1E8FE1] rounded-full" />
            <div className="absolute bottom-32 right-12 w-10 h-10 bg-[#1E8FE1] rounded-sm rotate-45" />
          </div>
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 relative">
            <div className="md:col-span-2">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#1E8FE1] font-black text-2xl">X</span>
                <span className="text-white font-bold text-xl">poze</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-4">
                Transforming Career Orientation into Opportunity — pou chak elèv Ayiti.
              </p>
              <p className="text-white/30 text-xs">Xpozer: Marc-Kendy Losier</p>
            </div>
            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-[#1E8FE1] mb-4">Platfòm</h4>
              <ul className="text-white/50 text-sm space-y-2.5">
                {["/quiz/Tès oryantasyon","/careers/Karyè","/universities/Inivèsite","/mentors/Mentor","/immigration/Immigration","/podcasts/Podcast","/live/Sesyon Live"].map(item => {
                  const [href, label] = item.split("/").slice(1).reduce((a,b,i,arr) => i===0 ? [`/${b}`,""] : [a[0], arr.slice(1).join("/")], ["",""]) as [string,string];
                  const parts = item.split("/");
                  return (
                    <li key={parts[1]}>
                      <a href={`/${parts[1]}`} className="hover:text-white transition-colors">{parts[2]}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-[#1E8FE1] mb-4">Kontakt</h4>
              <ul className="text-white/50 text-sm space-y-2.5">
                <li>info@xpoze.ht</li>
                <li>Port-au-Prince, Haïti</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-5 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/30 text-xs">© 2025 Xpoze. Tout dwa rezève.</p>
            <p className="text-white/30 text-xs">Transforming Career Orientation into Opportunity</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
