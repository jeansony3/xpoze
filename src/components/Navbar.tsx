"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Akèy" },
  { href: "/about", label: "Kiyès Nou" },
  { href: "/programs", label: "Pwogram" },
  { href: "/impact", label: "Enpak" },
  { href: "/news", label: "Nouvèl" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="bg-[#002B6E] border-b border-white/10 sticky top-0 z-50 shadow-lg shadow-[#002B6E]/20">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F5A623] to-[#CE1126] flex items-center justify-center shadow-md">
            <span className="text-white font-black text-sm">VH</span>
          </div>
          <div className="leading-tight">
            <span className="text-white font-black text-base tracking-tight block">Vijend Haiti</span>
            <span className="text-[#F5A623]/70 text-[9px] font-medium tracking-widest uppercase block -mt-0.5">Organisation à But Non Lucratif</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(l.href)
                  ? "text-[#F5A623] bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/8"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact#donate"
            className="bg-[#CE1126] hover:bg-[#E8304A] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-red-900/30 hover:-translate-y-0.5"
          >
            Fè yon Don
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block w-full h-0.5 bg-current rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-full h-0.5 bg-current rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-0.5 bg-current rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#002B6E] border-t border-white/10 px-5 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-[#F5A623]/20 text-[#F5A623]"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact#donate"
              className="block text-center bg-[#CE1126] text-white font-bold px-5 py-3 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              Fè yon Don
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
