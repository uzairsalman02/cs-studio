"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Settings,
  Upload,
  RotateCcw,
  CheckCircle2,
  LayoutDashboard,
  ShieldCheck,
  Palette,
  Eye,
  Save,
  Flame,
  Moon,
  Sun,
} from "lucide-react";
import { useBrand, ColorScheme } from "@/context/BrandContext";

export default function BrandAppearanceSettings() {
  const { settings, updateBrandSettings, resetBrandSettings } = useBrand();

  // Local Form State
  const [formState, setFormState] = useState({
    appName: settings.appName,
    badgeText: settings.badgeText,
    subtitle: settings.subtitle,
    logoImageUrl: settings.logoImageUrl,
    logoText: settings.logoText,
    colorScheme: settings.colorScheme,
    copyrightHolder: settings.copyrightHolder,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState((prev) => ({
          ...prev,
          logoImageUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateBrandSettings(formState);
    setToastMessage("✅ Brand Settings Saved Successfully!");
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleReset = () => {
    resetBrandSettings();
    setFormState({
      appName: "CS Studio 11",
      badgeText: "PECTAA 2023",
      subtitle: "Punjab Boards • Grade 11 (1st Year)",
      logoImageUrl: null,
      logoText: "CS",
      colorScheme: "indigo",
      copyrightHolder: "Uzair Salman",
    });
    setToastMessage("🔄 Reset to Default Brand Settings");
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between font-sans">
      {/* 1. Header Bar */}
      <header className="h-16 w-full bg-slate-950 border-b border-slate-800 px-6 flex items-center justify-between z-40 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
            {formState.logoText || "CS"}
          </div>
          <div>
            <h1 className="font-bold text-base text-white">Brand &amp; Appearance Settings</h1>
            <p className="text-[11px] text-slate-400 font-mono">
              Super Admin Customization Engine
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Back to Admin Hub
          </Link>
        </div>
      </header>

      {/* 2. Main Content Body */}
      <div className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-8 space-y-8">
        {/* Toast Alert Banner */}
        {toastMessage && (
          <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs font-mono font-bold flex items-center justify-between shadow-lg animate-in fade-in">
            <span>{toastMessage}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
        )}

        {/* Live Interactive Header Preview Card */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Eye className="w-4 h-4" /> Live Component Preview
          </span>
          <div className="p-4 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              {formState.logoImageUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={formState.logoImageUrl}
                  alt="Logo"
                  className="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
                  {formState.logoText || "CS"}
                </div>
              )}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {formState.appName || "CS Studio 11"}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    {formState.badgeText || "PECTAA 2023"}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {formState.subtitle || "Punjab Boards • Grade 11"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">
                Copyright © 2026 {formState.copyrightHolder || "Uzair Salman"}
              </span>
            </div>
          </div>
        </div>

        {/* Settings Form Grid */}
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Platform Identity */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Settings className="w-4 h-4 text-indigo-400" /> Platform Identity &amp; Badges
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-mono mb-1">App Display Name</label>
                <input
                  type="text"
                  value={formState.appName}
                  onChange={(e) => setFormState({ ...formState, appName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">Curriculum Badge Text</label>
                <input
                  type="text"
                  value={formState.badgeText}
                  onChange={(e) => setFormState({ ...formState, badgeText: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">Target Subtitle</label>
                <input
                  type="text"
                  value={formState.subtitle}
                  onChange={(e) => setFormState({ ...formState, subtitle: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">Copyright Author Name</label>
                <input
                  type="text"
                  value={formState.copyrightHolder}
                  onChange={(e) => setFormState({ ...formState, copyrightHolder: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Box 2: Logo & Color Theme */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Palette className="w-4 h-4 text-teal-400" /> Logo Assets &amp; Color Scheme
            </h3>

            <div className="space-y-4 text-xs">
              {/* Logo Upload */}
              <div className="space-y-2">
                <label className="block text-slate-400 font-mono">Custom Brand Logo Image</label>
                <div className="flex items-center gap-3">
                  <label className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 cursor-pointer flex items-center gap-2 transition-all">
                    <Upload className="w-4 h-4 text-indigo-400" />
                    <span>Upload Image File</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  {formState.logoImageUrl && (
                    <button
                      type="button"
                      onClick={() => setFormState({ ...formState, logoImageUrl: null })}
                      className="text-xs font-mono text-rose-400 hover:underline"
                    >
                      Clear Image
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-mono mb-1">Fallback Logo Text</label>
                <input
                  type="text"
                  value={formState.logoText}
                  onChange={(e) => setFormState({ ...formState, logoText: e.target.value })}
                  maxLength={3}
                  className="w-24 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono uppercase outline-none focus:border-indigo-500"
                />
              </div>

              {/* Color Scheme Selector */}
              <div className="space-y-2 pt-2">
                <label className="block text-slate-400 font-mono">Global Color Theme</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "indigo", name: "Editorial Indigo", color: "bg-indigo-600" },
                    { id: "emerald", name: "Emerald Focus", color: "bg-emerald-600" },
                    { id: "blue", name: "Royal Blue", color: "bg-blue-600" },
                    { id: "amber", name: "Amber Sunset", color: "bg-amber-600" },
                  ].map((scheme) => (
                    <button
                      key={scheme.id}
                      type="button"
                      onClick={() => setFormState({ ...formState, colorScheme: scheme.id as ColorScheme })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                        formState.colorScheme === scheme.id
                          ? "bg-slate-900 border-indigo-500 text-white font-bold"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded-full ${scheme.color}`} />
                      <span className="text-xs">{scheme.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="md:col-span-2 flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Reset to Defaults
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono shadow-lg transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Global Changes
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="h-10 w-full bg-slate-950 border-t border-slate-800 px-6 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>{formState.appName} • Brand Engine</span>
        <span>Copyright © 2026 {formState.copyrightHolder}</span>
      </footer>
    </div>
  );
}
