import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpoze — Oryantasyon Akademik ak Karyè pou Elèv Ayiti",
  description: "Platfòm dijital ki ede elèv finisan Ayiti dekouvri karyè yo, jwenn inivèsite, ak konekte ak mentor pwofesyonèl.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen bg-[#f8f7ff] flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-indigo-950 text-white pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-orange-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">X</span>
                </div>
                <span className="text-xl font-bold">poze</span>
              </div>
              <p className="text-indigo-300 text-sm leading-relaxed max-w-xs">
                Ede elèv Ayiti dekouvri chemen karyè yo, eksplore inivèsite, ak konekte
                ak mentor pwofesyonèl — tout gratis.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase text-indigo-400 mb-4">
                Platfòm
              </h4>
              <ul className="text-indigo-300 text-sm space-y-2">
                <li><a href="/quiz" className="hover:text-white transition-colors">Tès oryantasyon</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Karyè</a></li>
                <li><a href="/universities" className="hover:text-white transition-colors">Inivèsite</a></li>
                <li><a href="/mentors" className="hover:text-white transition-colors">Mentor</a></li>
                <li><a href="/podcasts" className="hover:text-white transition-colors">Podcast</a></li>
                <li><a href="/live" className="hover:text-white transition-colors">Sesyon Live</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase text-indigo-400 mb-4">
                Kontakt
              </h4>
              <ul className="text-indigo-300 text-sm space-y-2">
                <li>📧 info@xpoze.ht</li>
                <li>📍 Port-au-Prince, Haïti</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 pt-6 border-t border-indigo-900 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-indigo-500 text-sm">© 2025 Xpoze. Tout dwa rezève.</p>
            <p className="text-indigo-500 text-sm">Fèt avèk ❤️ pou elèv Ayiti</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
