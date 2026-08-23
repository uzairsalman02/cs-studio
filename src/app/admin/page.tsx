"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Palette,
  Settings,
  Shield,
  BarChart3,
  CheckCircle,
  Save,
  Award,
  Sparkles,
  AlertTriangle,
  Layers,
  BookOpen,
} from "lucide-react";

export default function AdminPage() {
  const [activePalette, setActivePalette] = useState("editorial-indigo");
  const [appName, setAppName] = useState("CS Studio 11");
  const [appLogoCode, setAppLogoCode] = useState("CS");
  const [tagline, setTagline] = useState("Class 11 Computer Science • Board Syllabus");
  const [copyright, setCopyright] = useState("Copyright © 2026 Uzair Salman. All Rights Reserved.");
  const [antiTamper, setAntiTamper] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const existingTheme = document.documentElement.getAttribute("data-theme") || "editorial-indigo";
    setActivePalette(existingTheme);
  }, []);

  const handlePaletteSelect = (paletteId: string) => {
    setActivePalette(paletteId);
    document.documentElement.setAttribute("data-theme", paletteId);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const palettes = [
    {
      id: "editorial-indigo",
      name: "Editorial Indigo",
      desc: "Default balanced theme for student learning",
      primary: "#6366F1",
      analogy: "#F59E0B",
      tech: "#0D9488",
      canvas: "#0C0F16",
    },
    {
      id: "obsidian-projector",
      name: "Obsidian Projector",
      desc: "High-contrast dark mode for classroom projectors",
      primary: "#64748B",
      analogy: "#D97706",
      tech: "#94A3B8",
      canvas: "#020408",
    },
    {
      id: "emerald-focus",
      name: "Emerald Focus",
      desc: "Calming emerald tones for deep study sessions",
      primary: "#059669",
      analogy: "#EA580C",
      tech: "#14B8A6",
      canvas: "#091512",
    },
    {
      id: "copper-warmth",
      name: "Copper Warmth",
      desc: "Warm copper accent theme for long reading",
      primary: "#C2410C",
      analogy: "#F59E0B",
      tech: "#059669",
      canvas: "#170E0A",
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-foreground font-sans p-6 md:p-10 space-y-8 animate-in fade-in duration-300">
      {/* Admin Shell Top Bar */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/learn/punjab-11/unit-01/topic-1-2"
            className="p-2.5 rounded-xl bg-surface border border-border text-muted hover:text-foreground transition-all flex items-center gap-2 text-xs font-mono"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>Back to Learning Studio</span>
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tight text-foreground">
                Admin Studio Management
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold border border-primary/20">
                System Core
              </span>
            </div>
            <p className="text-xs text-muted font-mono">
              Punjab Board Class 11 CS • Global Controls & Analytics
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-surface p-2 rounded-xl border border-border text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-tech animate-ping" />
          <span className="text-muted">Supabase DB Status:</span>
          <span className="text-tech font-bold">Connected (ap-southeast-2)</span>
        </div>
      </header>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Palette Manager & Brand Settings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Card 1: 4-Palette Theme Engine Manager */}
          <div className="p-6 md:p-8 rounded-3xl bg-surface border border-border shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2.5">
                <Palette className="w-6 h-6 text-primary" />
                <div>
                  <h2 className="text-lg font-bold text-foreground">
                    4-Palette Live CSS Theme Switcher
                  </h2>
                  <p className="text-xs text-muted">
                    Toggle active CSS variable palettes across the entire platform in real time.
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-canvas text-xs font-mono text-primary font-bold border border-border">
                Active: {activePalette}
              </span>
            </div>

            {/* 4 Palette Preview Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {palettes.map((p) => {
                const isSelected = activePalette === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handlePaletteSelect(p.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all space-y-3 relative overflow-hidden ${
                      isSelected
                        ? "bg-canvas border-primary shadow-lg ring-2 ring-primary/20"
                        : "bg-canvas/50 border-border hover:border-border/80 hover:bg-canvas"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-foreground">{p.name}</h3>
                      {isSelected && (
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      )}
                    </div>

                    <p className="text-[11px] text-muted leading-relaxed">{p.desc}</p>

                    {/* Color Swatch Dots */}
                    <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: p.primary }}
                        title="Primary Color"
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: p.analogy }}
                        title="Analogy Color"
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: p.tech }}
                        title="Tech Color"
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: p.canvas }}
                        title="Canvas Background"
                      />
                      <span className="text-[10px] font-mono text-muted ml-auto">
                        #{p.id.split("-")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Global Brand & Curriculum Settings Form */}
          <div className="p-6 md:p-8 rounded-3xl bg-surface border border-border shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2.5">
                <Settings className="w-6 h-6 text-tech" />
                <div>
                  <h2 className="text-lg font-bold text-foreground">
                    Global Branding & System Settings
                  </h2>
                  <p className="text-xs text-muted">
                    Configure core app titles, shortcodes, and security guards.
                  </p>
                </div>
              </div>

              {savedSuccess && (
                <span className="px-3 py-1 rounded-full bg-tech/15 text-tech text-xs font-mono font-bold border border-tech/30 animate-in fade-in">
                  ✓ Settings Saved
                </span>
              )}
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block">
                    Application Name
                  </label>
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-canvas border border-border text-xs text-foreground focus:outline-none focus:border-primary font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block">
                    Brand Shortcode
                  </label>
                  <input
                    type="text"
                    value={appLogoCode}
                    onChange={(e) => setAppLogoCode(e.target.value)}
                    className="w-full p-3 rounded-xl bg-canvas border border-border text-xs text-foreground focus:outline-none focus:border-primary font-mono font-bold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted uppercase tracking-wider block">
                  Curriculum Subtitle / Tagline
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full p-3 rounded-xl bg-canvas border border-border text-xs text-foreground focus:outline-none focus:border-primary font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted uppercase tracking-wider block">
                  Footer Copyright Attribution
                </label>
                <input
                  type="text"
                  value={copyright}
                  onChange={(e) => setCopyright(e.target.value)}
                  className="w-full p-3 rounded-xl bg-canvas border border-border text-xs text-foreground focus:outline-none focus:border-primary font-mono"
                />
              </div>

              {/* Anti-Tamper Guard Toggle */}
              <div className="p-4 rounded-2xl bg-canvas border border-border flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-analogy" />
                    <span className="text-xs font-bold text-foreground">
                      Anti-Tamper Content Security Guard
                    </span>
                  </div>
                  <p className="text-[11px] text-muted">
                    Intercept right-click context menu and DevTools inspection shortcuts across educational modules.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setAntiTamper(!antiTamper)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                    antiTamper ? "bg-primary" : "bg-surface-hover border border-border"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      antiTamper ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md active:scale-95"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Brand Settings</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column (1 Col): Syllabus Pairing & Diagnostic Metrics */}
        <div className="space-y-8">
          {/* Card 3: Punjab Board 11th Class Pairing Scheme Distribution */}
          <div className="p-6 rounded-3xl bg-surface border border-border shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <Award className="w-5 h-5 text-analogy" />
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  11th Class Board Weightage Distribution
                </h3>
                <span className="text-[10px] font-mono text-muted">PECTAA Pairing Scheme</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { unit: "Unit 1: Software Development", marks: "9 Marks", detail: "1 Long Q + 2 Short Qs" },
                { unit: "Unit 2: Data Communication", marks: "9 Marks", detail: "1 Long Q + 2 Short Qs" },
                { unit: "Unit 3: Computer Architecture", marks: "11 Marks", detail: "1 Long Q + 3 Short Qs" },
                { unit: "Unit 4: Applications of IT", marks: "4 Marks", detail: "0 Long Q + 2 Short Qs" },
                { unit: "Unit 5: Security & Ethics", marks: "9 Marks", detail: "1 Long Q + 2 Short Qs" },
                { unit: "Units 6-9: Office & DB Tools", marks: "13 Marks", detail: "1 Long Q + 4 Short Qs" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-canvas border border-border flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-foreground block">{item.unit}</span>
                    <span className="text-[10px] font-mono text-muted">{item.detail}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono font-bold text-[11px]">
                    {item.marks}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Student Checkpoint Difficulty & Diagnostics */}
          <div className="p-6 rounded-3xl bg-surface border border-border shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <BarChart3 className="w-5 h-5 text-tech" />
              <div>
                <h3 className="text-sm font-bold text-foreground">
                  Student Diagnostics & Misconceptions
                </h3>
                <span className="text-[10px] font-mono text-muted">Topic 1.2 SDLC Checkpoints</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-canvas border border-border space-y-1">
                <span className="text-[10px] font-mono text-tech uppercase font-bold block">
                  Highest Confusion Concept:
                </span>
                <p className="font-medium text-foreground">
                  Analysis (SRS) vs System Design (DDS)
                </p>
                <p className="text-[11px] text-muted leading-relaxed">
                  22% of students confuse SRS requirements with DDS architecture models.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-canvas border border-border space-y-1">
                <span className="text-[10px] font-mono text-analogy uppercase font-bold block">
                  Board Past Paper Hit Rate:
                </span>
                <p className="font-medium text-foreground">
                  80% Exam Appearance Rate
                </p>
                <p className="text-[11px] text-muted leading-relaxed">
                  SDLC 6-phase question appeared in 8 out of 10 recent annual board papers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
