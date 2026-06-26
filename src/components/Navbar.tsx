"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/lib/store";
import { useLangStore, useT, LANG_LABELS, type Lang } from "@/lib/i18n";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const { lang, setLang } = useLangStore();
  const { t } = useT();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { href: "/quiz",         label: t("nav", "quiz") },
    { href: "/careers",      label: t("nav", "careers") },
    { href: "/universities", label: t("nav", "universities") },
    { href: "/mentors",      label: t("nav", "mentors") },
    { href: "/immigration",  label: t("nav", "immigration") },
    { href: "/podcasts",     label: t("nav", "podcasts") },
    { href: "/live",         label: t("nav", "live") },
    { href: "/about",        label: t("nav", "about") },
  ];

  return (
    <nav className="bg-[#0B1D51] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group shrink-0">
          <span className="text-[#1E8FE1] font-black text-2xl tracking-tight group-hover:text-[#4AAEF0] transition-colors">X</span>
          <span className="text-white font-bold text-xl tracking-tight">poze</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
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

        {/* Right side: lang + auth */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/8"
            >
              <span className="text-base">{lang === "ht" ? "🇭🇹" : lang === "fr" ? "🇫🇷" : lang === "en" ? "🇺🇸" : "🇪🇸"}</span>
              <span>{LANG_LABELS[lang]}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-[#142366] border border-white/10 rounded-xl overflow-hidden shadow-xl min-w-[140px]">
                {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full text-left flex items-center gap-2 px-3 py-2.5 text-sm transition-colors ${
                      lang === l ? "text-[#1E8FE1] bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{l === "ht" ? "🇭🇹" : l === "fr" ? "🇫🇷" : l === "en" ? "🇺🇸" : "🇪🇸"}</span>
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth */}
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
                {t("nav", "logout")}
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-white/70 font-medium hover:text-white transition-colors">
                {t("nav", "login")}
              </Link>
              <Link
                href="/register"
                className="bg-[#1E8FE1] hover:bg-[#4AAEF0] text-white text-sm font-bold px-5 py-2 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
              >
                {t("nav", "register")}
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
          {/* Mobile lang switcher */}
          <div className="pt-3 border-t border-white/10 flex gap-2 px-2 flex-wrap">
            {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs px-2 py-1 rounded-lg transition-colors ${lang === l ? "bg-[#1E8FE1] text-white" : "bg-white/10 text-white/60"}`}
              >
                {l === "ht" ? "🇭🇹" : l === "fr" ? "🇫🇷" : l === "en" ? "🇺🇸" : "🇪🇸"} {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <div className="pt-2 flex gap-3 px-2">
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm text-[#1E8FE1] font-medium" onClick={() => setMenuOpen(false)}>{t("nav", "dashboard")}</Link>
                <button onClick={logout} className="text-sm text-red-400">{t("nav", "logout")}</button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-white/70" onClick={() => setMenuOpen(false)}>{t("nav", "login")}</Link>
                <Link href="/register" className="text-sm text-[#1E8FE1] font-bold" onClick={() => setMenuOpen(false)}>{t("nav", "register")} →</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
