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
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          <span className="text-blue-600">X</span>poze
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-gray-700 font-medium hover:text-blue-600"
              >
                👤 {user.name.split(" ")[0]}
              </Link>
              <button
                onClick={logout}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Dekonekte
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-700 font-medium hover:text-blue-600"
              >
                Konekte
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enskri gratis
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200 flex gap-3">
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm text-blue-600">
                  Tableau de bord
                </Link>
                <button onClick={logout} className="text-sm text-red-600">
                  Dekonekte
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-gray-700">
                  Konekte
                </Link>
                <Link href="/register" className="text-sm text-blue-600 font-medium">
                  Enskri gratis
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
