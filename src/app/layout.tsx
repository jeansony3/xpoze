import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vijend Haiti — Bati Ayiti Ansanm",
  description:
    "Vijend Haiti se yon òganizasyon à but non lucratif ki dedye a edikasyon, devlopman kominote, ak ranfòsman kapasite jèn Ayiti depi me 2020.",
};

const footerLinks = {
  Organisation: [
    { href: "/about", label: "Kiyès Nou" },
    { href: "/about#team", label: "Ekip Fondatè" },
    { href: "/about#history", label: "Istwa Nou" },
    { href: "/impact", label: "Enpak Nou" },
  ],
  Pwogram: [
    { href: "/programs#education", label: "Edikasyon" },
    { href: "/programs#youth", label: "Jèn" },
    { href: "/programs#community", label: "Kominote" },
    { href: "/programs#economic", label: "Ekonomik" },
  ],
  "Patisipe": [
    { href: "/contact#volunteer", label: "Volontè" },
    { href: "/contact#donate", label: "Fè yon Don" },
    { href: "/contact#partner", label: "Patnè" },
    { href: "/contact", label: "Kontakte Nou" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ht" className={geistSans.variable}>
      <body className="antialiased min-h-screen bg-[#F8F6F0] flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>

        <footer className="bg-[#002B6E] text-white pt-16 pb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
            <div className="absolute top-8 right-8 w-48 h-48 border-4 border-[#F5A623] rounded-full" />
            <div className="absolute top-24 right-32 w-24 h-24 border-2 border-[#CE1126] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 relative">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F5A623] to-[#CE1126] flex items-center justify-center">
                  <span className="text-white font-black text-sm">VH</span>
                </div>
                <span className="text-white font-black text-lg">Vijend Haiti</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Bati yon Ayiti pi fò — ansanm, pa nan pawòl men pa aksyon reyèl nan kominote nou yo.
              </p>
              <p className="text-white/30 text-xs">Fondé en mai 2020 · Port-au-Prince, Haïti</p>
              <div className="flex gap-3 mt-4">
                <a href="https://www.facebook.com/vijendhaiti" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-[#1877F2] transition-all text-xs font-bold">
                  f
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-bold text-xs tracking-widest uppercase text-[#F5A623] mb-4">{title}</h4>
                <ul className="text-white/50 text-sm space-y-2.5">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-5 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/30 text-xs">© 2025 Vijend Haiti. Tout dwa rezève.</p>
            <p className="text-white/30 text-xs">Fondé par Jean Sony Joseph, Edmond Simplice & Ilioreste Charles</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
