"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store";

// Mock users for demo
const MOCK_USERS = [
  { id: "1", email: "eleve@demo.ht", password: "demo123", name: "Marie Dupont", role: "student" as const, grade: "Rhéto" },
  { id: "2", email: "mentor@demo.ht", password: "demo123", name: "Dr. Pierre", role: "mentor" as const },
  { id: "3", email: "admin@xpoze.ht", password: "admin123", name: "Admin Xpoze", role: "admin" as const },
];

export default function LoginPage() {
  const { login } = useAuthStore();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 500));
    const found = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      login(found);
      router.push("/dashboard");
    } else {
      setError("Email oswa modpas la pa bon. Eseye: eleve@demo.ht / demo123");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Konekte</h1>
          <p className="text-gray-600">
            Pa gen kont?{" "}
            <Link href="/register" className="text-[#1E8FE1] font-medium hover:underline">
              Enskri gratis
            </Link>
          </p>
        </div>

        {/* Demo credentials hint */}
        <div className="bg-[#EEF4FF] border border-[#1E8FE1]/30 rounded-xl p-4 mb-6 text-sm">
          <p className="font-semibold text-[#0B1D51] mb-1">Kont demo:</p>
          <p className="text-[#1E8FE1]">📧 eleve@demo.ht · 🔑 demo123</p>
          <p className="text-[#1E8FE1]">📧 mentor@demo.ht · 🔑 demo123</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adrès email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FE1]"
              placeholder="ou@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modpas
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E8FE1]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1E8FE1] text-white font-semibold py-3 rounded-lg hover:bg-[#142366] transition-colors disabled:opacity-50"
          >
            {loading ? "Kap konekte..." : "Konekte"}
          </button>
        </form>
      </div>
    </div>
  );
}
