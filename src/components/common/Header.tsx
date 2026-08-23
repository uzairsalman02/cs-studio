"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Presentation, Flame, Sparkles, Settings, Sun, Moon } from "lucide-react";

export interface HeaderProps {
  onModeChange?: (mode: "student" | "projector") => void;
  activeMode?: "student" | "projector";
}

export function Header({ onModeChange, activeMode = "student" }: HeaderProps) {
  const [mode, setMode] = useState<"student" | "projector">(activeMode);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode status
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(hasDarkClass);
  }, []);

  const handleThemeToggle = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const handleModeToggle = (newMode: "student" | "projector") => {
    setMode(newMode);
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  return (
    <header className="h-16 w-full bg-white/90 dark:bg-[#161b26]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between z-40 shrink-0">
      {/* Left Side: Brand Logo & SNC Punjab Badge */}
      <div className="flex items-center gap-3">
        <Link href="/learn/punjab-11/unit-01/topic-1-2" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-indigo-500 via-amber-500 to-teal-500 p-[1.5px] rounded-xl shadow-sm group-hover:scale-105 transition-transform">
            <div className="bg-slate-900 px-2.5 py-1 rounded-[10.5px] flex items-center justify-center font-mono font-bold text-sm text-indigo-400 tracking-wider">
              CS
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight">
                CS Studio 11
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/40">
                <Sparkles className="w-2.5 h-2.5" /> SNC Punjab
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden md:inline-block">
              Class 11 Computer Science • Board Syllabus
            </span>
          </div>
        </Link>
      </div>

      {/* Right Side: Mode Switcher, Dark/Light Toggle, Admin Link, Streak Pill */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* Mode Toggle Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-[#0f131a] p-1 rounded-xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => handleModeToggle("student")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              mode === "student"
                ? "bg-white dark:bg-[#161b26] text-slate-900 dark:text-slate-100 shadow-sm border border-slate-200 dark:border-slate-700"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <GraduationCap className={`w-3.5 h-3.5 ${mode === "student" ? "text-indigo-500" : ""}`} />
            <span className="hidden sm:inline">Student Mode</span>
          </button>

          <button
            onClick={() => handleModeToggle("projector")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              mode === "projector"
                ? "bg-white dark:bg-[#161b26] text-slate-900 dark:text-slate-100 shadow-sm border border-slate-200 dark:border-slate-700"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Presentation className={`w-3.5 h-3.5 ${mode === "projector" ? "text-amber-500" : ""}`} />
            <span className="hidden sm:inline">Projector Stage</span>
          </button>
        </div>

        {/* Light / Dark Mode Toggle Button */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-center"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-600" />
          )}
        </button>

        {/* User Streak Pill */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4 Days</span>
          </div>

          {/* Admin Studio Settings Link */}
          <Link
            href="/admin"
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center justify-center"
            title="Admin Studio Settings"
          >
            <Settings className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
