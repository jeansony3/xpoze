import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xpoze — Oryantasyon Akademik ak Karyè pou Elèv Ayiti",
  description:
    "Platfòm dijital ki ede elèv finisan Ayiti dekouvri karyè yo, jwenn inivèsite, ak konekte ak mentor pwofesyonèl.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white py-10 mt-20">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">
                <span className="text-blue-400">X</span>poze
              </h3>
              <p className="text-gray-400 text-sm">
                Ede elèv Ayiti dekouvri chemen karyè yo ak reyalize rèv yo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Lyen rapid</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li><a href="/quiz" className="hover:text-white">Tès oryantasyon</a></li>
                <li><a href="/universities" className="hover:text-white">Inivèsite</a></li>
                <li><a href="/careers" className="hover:text-white">Karyè</a></li>
                <li><a href="/mentors" className="hover:text-white">Mentor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Kontakt</h4>
              <p className="text-gray-400 text-sm">info@xpoze.ht</p>
              <p className="text-gray-400 text-sm">Port-au-Prince, Haïti</p>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm mt-8">
            © 2025 Xpoze. Tout dwa rezève.
          </div>
        </footer>
      </body>
    </html>
  );
}
