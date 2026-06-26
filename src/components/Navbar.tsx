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
    { href: "/podcasts", label: "Podcast" },
    { href: "/live", label: "🔴 Live" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">X</span>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            poze
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname.startsWith(l.href)
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:text-indigo-600 transition-colors"
              >
                <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {user.name.split(" ")[0]}
              </Link>
              <button
                onClick={logout}
                className="text-sm text-gray-400 hover:text-red-500 transition-colors"
              >
                Dekonekte
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-600 font-medium hover:text-indigo-600 transition-colors"
              >
                Konekte
              </Link>
              <Link
                href="/register"
                className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Enskri gratis
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-5 h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex gap-3 px-4">
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm text-indigo-600 font-medium">
                  Tableau de bord
                </Link>
                <button onClick={logout} className="text-sm text-red-500">
                  Dekonekte
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-gray-700">Konekte</Link>
                <Link href="/register" className="text-sm text-indigo-600 font-semibold">
                  Enskri gratis →
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
