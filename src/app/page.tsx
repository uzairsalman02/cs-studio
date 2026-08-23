"use client";

import React, { useState } from "react";
import { ShieldCheck, Palette, Code2, BookOpen, Lock } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState("editorial-indigo");

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <main className="flex-1 flex flex-col justify-between p-8 max-w-6xl mx-auto w-full">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary flex items-center justify-center text-primary">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">CS Studio</h1>
            <p className="text-xs text-muted font-mono">Punjab Grade 11 CS • Interactive Pedagogy Engine</p>
          </div>
        </div>

        {/* Theme Switcher Buttons */}
        <div className="flex items-center gap-2 bg-surface p-1.5 rounded-xl border border-border">
          <Palette className="w-4 h-4 text-muted ml-2" />
          {[
            { id: "editorial-indigo", label: "Indigo" },
            { id: "obsidian-projector", label: "Obsidian" },
            { id: "emerald-focus", label: "Emerald" },
            { id: "copper-warmth", label: "Copper" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => switchTheme(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                theme === t.id
                  ? "bg-primary text-white shadow-md"
                  : "text-muted hover:text-foreground hover:bg-surface-hover"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-8">
        {/* Core Architecture Card */}
        <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Modular Architecture</h3>
          <p className="text-xs text-muted leading-relaxed">
            Structured boundaries across generic UI components, pedagogy modules, live presenter views, and security guards.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-primary/15 text-primary text-[10px] font-mono font-medium border border-primary/30">
              src/components
            </span>
          </div>
        </div>

        {/* Urdu Script & Dual Pedagogy Card */}
        <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
          <div className="w-8 h-8 rounded-lg bg-analogy/10 border border-analogy/30 flex items-center justify-center text-analogy">
            <BookOpen className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Bilingual Pedagogy</h3>
          <div className="p-3 rounded-lg bg-canvas border border-border">
            <p className="urdu-script text-sm text-analogy font-bold">
              کمپیوٹر سائنس کا جدید اور تعلیمی نظام
            </p>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            Integrated RTL support using Noto Nastaliq Urdu typography for Punjab Grade 11 curriculum hooks.
          </p>
        </div>

        {/* Anti-Tamper & Security Guard Card */}
        <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
          <div className="w-8 h-8 rounded-lg bg-tech/10 border border-tech/30 flex items-center justify-center text-tech">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Anti-Tamper Protection</h3>
          <p className="text-xs text-muted leading-relaxed">
            Right-click inspection and developer tool shortcuts are intercepted with discreet security notifications.
          </p>
          <div className="p-3 rounded-lg bg-canvas border border-border">
            <code className="text-[11px] font-mono text-tech">
              AntiTamperGuard: ContextMenu & KeyDown Intercepted
            </code>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted font-mono">
        <span>Active Palette: <strong className="text-primary">{theme}</strong></span>
        <span className="flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-tech" /> Built with Next.js 14 App Router
        </span>
      </footer>
    </main>
  );
}
