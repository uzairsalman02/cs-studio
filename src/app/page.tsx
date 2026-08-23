"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Flame,
  Sun,
  Moon,
  Settings,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  ChevronRight,
  PlayCircle,
  FileText,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Layers,
} from "lucide-react";
import { UNIT_01_DATA } from "@/data/curriculum/unit-01";

export default function StudentDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const unitsList = [
    {
      id: "unit-1",
      unitNumber: 1,
      title: "Introduction to Software Development",
      description: "SDLC phases, Waterfall vs Agile models, and SRS/DDS technical deliverables.",
      status: "active",
      progress: 42,
      topicsCount: 5,
      boardMarks: "9 Marks (1 Long + 2 Short)",
      link: "/learn/punjab-11/unit-01/topic-1-2",
    },
    {
      id: "unit-2",
      unitNumber: 2,
      title: "Data Communication & Networks",
      description: "OSI 7-layer model, IP addressing, routers, switches, and network topologies.",
      status: "upcoming",
      progress: 0,
      topicsCount: 6,
      boardMarks: "12 Marks (1 Long + 3 Short)",
      link: "#",
    },
    {
      id: "unit-3",
      unitNumber: 3,
      title: "Database Management Systems (DBMS)",
      description: "Relational DBs, ER Diagrams, Normalization (1NF to 3NF), and SQL queries.",
      status: "upcoming",
      progress: 0,
      topicsCount: 7,
      boardMarks: "14 Marks (1 Long + 4 Short)",
      link: "#",
    },
    {
      id: "unit-4",
      unitNumber: 4,
      title: "Programming Fundamentals & Control Flow",
      description: "Algorithms, Flowcharts, C++/Python syntax, Conditionals, and Loops.",
      status: "upcoming",
      progress: 0,
      topicsCount: 8,
      boardMarks: "15 Marks (1 Long + 4 Short)",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100 dark:bg-[#0f131a] text-slate-800 dark:text-slate-200 transition-colors font-sans">
      {/* 1. TopBar Header */}
      <header className="h-16 w-full bg-white dark:bg-[#161b26] border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 flex items-center justify-between z-40 shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
            CS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight">
                CS Studio 11
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                PECTAA 2023
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:inline-block">
              Punjab Boards • Grade 11 (1st Year)
            </span>
          </div>
        </div>

        {/* Center Search Bar */}
        <div className="hidden md:flex items-center gap-2 w-96 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-xs">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search syllabus topics, board questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
          />
        </div>

        {/* Right User & Theme Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center font-mono">
                US
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-none">
                    Uzair Salman
                  </span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 uppercase">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  Sargodha Board • 4 Day Streak <Flame className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                </span>
              </div>
            </div>

            <Link
              href="/admin"
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              title="Admin Studio Settings"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Main Dashboard Body */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-8 space-y-8">
        {/* Welcome Hero Banner */}
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40 inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" /> Punjab Board Curriculum 2026
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Welcome back, Uzair! 🚀
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              You are currently studying <strong className="text-slate-900 dark:text-slate-100">Unit 1: Introduction to Software Development</strong>. Topic 1.2 carries a 5-mark repeated board long question.
            </p>
          </div>

          <Link
            href="/learn/punjab-11/unit-01/topic-1-2"
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0"
          >
            <PlayCircle className="w-4 h-4" /> Resume Learning Studio
          </Link>
        </div>

        {/* 4-Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">
                Syllabus Covered
              </span>
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <BarChart3 className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono">42%</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                2 of 9 Units completed
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">
                Board Past Papers
              </span>
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono">15 Qs</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Mapped to BISE Sargodha/Lahore
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">
                Active Streak
              </span>
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                <Flame className="w-4 h-4 fill-amber-500" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono">4 Days</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Keep daily learning active
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-bold">
                Exam Readiness
              </span>
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono">88%</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Based on MCQ Checkpoints
              </p>
            </div>
          </div>
        </div>

        {/* Units Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Syllabus Units &amp; Learning Modules
            </h2>
            <span className="text-xs font-mono text-slate-500 font-bold">
              Single National Curriculum (PECTAA 2023)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unitsList.map((unit) => {
              const isActive = unit.status === "active";
              return (
                <div
                  key={unit.id}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-5 ${
                    isActive
                      ? "bg-white dark:bg-[#161b26] border-indigo-400/60 dark:border-indigo-500/40 shadow-xs"
                      : "bg-white/60 dark:bg-[#161b26]/50 border-slate-200 dark:border-slate-800 opacity-80"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40">
                        Unit 0{unit.unitNumber}
                      </span>
                      <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                        {unit.boardMarks}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {unit.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {unit.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                        <span>Progress</span>
                        <span>{unit.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-[#0f131a] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full transition-all"
                          style={{ width: `${unit.progress}%` }}
                        />
                      </div>
                    </div>

                    {isActive ? (
                      <Link
                        href={unit.link}
                        className="w-full py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold font-mono flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                      >
                        <span>Open Learning Studio</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-[#0f131a] text-slate-400 text-xs font-mono font-semibold cursor-not-allowed"
                      >
                        Upcoming Unit
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Footer */}
      <footer className="h-12 w-full bg-white dark:bg-[#161b26] border-t border-slate-200 dark:border-slate-800 px-6 md:px-8 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
        <span>CS Studio 11 • Single National Curriculum (PECTAA 2023)</span>
        <span className="hidden md:inline">Copyright © 2026 Uzair Salman. All Rights Reserved.</span>
      </footer>
    </div>
  );
}
