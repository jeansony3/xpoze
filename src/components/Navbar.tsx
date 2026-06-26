"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/lib/store";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/quiz", label: "Tès Oryantasyon" },
    { href: "/careers", label: "Karyè" },
    { href: "/universities", label: "Inivèsite" },
    { href: "/mentors", label: "Mentor" },
    { href: "/immigration", label: "Immigration" },
    { href: "/podcasts", label: "Podcast" },
    { href: "/live", label: "Live" },
  ];

  return (
    <nav className="bg-[#0B1D51] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-[#1E8FE1] font-black text-2xl tracking-tight group-hover:text-[#4AAEF0] transition-colors">X</span>
          <span className="text-white font-bold text-xl tracking-tight">poze</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                pathname.startsWith(l.href)
                  ? "text-[#1E8FE1] bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/8"
              } ${l.href === "/live" ? "flex items-center gap-1.5" : ""}`}
            >
              {l.href === "/live" && (
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
              {l.label}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm text-white/80 font-medium hover:text-white transition-colors"
              >
                <div className="w-7 h-7 bg-[#1E8FE1] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {user.name.split(" ")[0]}
              </Link>
              <button
                onClick={logout}
                className="text-sm text-white/40 hover:text-red-400 transition-colors"
              >
                Dekonekte
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-white/70 font-medium hover:text-white transition-colors">
                Konekte
              </Link>
              <Link
                href="/register"
                className="bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white text-sm font-bold px-5 py-2 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
              >
                Enskri gratis
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="lg:hidden bg-[#142366] border-t border-white/10 px-5 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "bg-[#1E8FE1]/20 text-[#4AAEF0]"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.href === "/live" && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-3 px-2 mt-2">
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm text-[#1E8FE1] font-medium">Tableau de bord</Link>
                <button onClick={logout} className="text-sm text-red-400">Dekonekte</button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-white/70">Konekte</Link>
                <Link href="/register" className="text-sm text-[#1E8FE1] font-bold">Enskri gratis →</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
