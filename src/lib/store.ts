"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "student" | "mentor" | "admin";
  grade?: string;
  interests?: string[];
  riasecResult?: Record<string, number>;
  savedPrograms?: string[];
  quizCompleted?: boolean;
};

type AuthStore = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      updateUser: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
    }),
    { name: "xpoze-auth" }
  )
);
