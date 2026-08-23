"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Presentation,
  Play,
  Clock,
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  Users,
  BarChart2,
  ChevronRight,
  Sparkles,
  Flame,
  LayoutDashboard,
} from "lucide-react";
import { UNIT_01_DATA } from "@/data/curriculum/unit-01";
import { detectWeakAreas, MOCK_QUIZ_ATTEMPTS } from "@/lib/weak-area-detector";

export default function TeacherDashboard() {
  const weakAreas = detectWeakAreas(MOCK_QUIZ_ATTEMPTS);
  const criticalAreas = weakAreas.filter((w) => w.isCritical);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between font-sans">
      {/* Top Console Header */}
      <header className="h-16 w-full bg-slate-950 border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
            HUB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base text-white">Teacher Command Hub</h1>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Classroom Presenter Console
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Punjab Boards • SNC Grade 11 Computer Science
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Student View
          </Link>
          <Link
            href="/stage/sdlc-phases-and-workflow"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono shadow-md transition-all flex items-center gap-2"
          >
            <Presentation className="w-4 h-4" /> Launch Projector Display
          </Link>
        </div>
      </header>

      {/* Main Dashboard Body */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-8 space-y-8">
        {/* Top Hero Banner */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-indigo-950/60 text-indigo-400 text-xs font-mono font-bold border border-indigo-800/60 inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Classroom Session Ready
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Period 3: Grade 11 CS (Sargodha Board)
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Topic 1.2 carries <strong className="text-amber-400">1 Long Question (5 Marks)</strong> in BISE Sargodha/Lahore board pairing.
            </p>
          </div>

          <Link
            href="/teach/sdlc-phases-and-workflow"
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono shadow-lg transition-all flex items-center gap-2 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" /> Open Presenter Console
          </Link>
        </div>

        {/* Critical Weak Area Detector Notification */}
        {criticalAreas.length > 0 && (
          <div className="p-6 rounded-3xl bg-rose-950/30 border border-rose-800/60 text-rose-200 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-rose-400 font-mono font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" /> Batch Weak Area Alert Detected ({criticalAreas.length} Critical Issue)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {criticalAreas.map((diag, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-rose-900/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">{diag.subConceptTag}</span>
                    <span className="text-xs font-mono font-extrabold text-rose-400 px-2 py-0.5 rounded bg-rose-950 border border-rose-800">
                      {diag.avgAccuracy}% Batch Accuracy
                    </span>
                  </div>
                  <p className="text-xs text-rose-300/90 leading-relaxed">
                    {diag.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lesson Roadmap Modules */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" /> Unit 1 Lesson Modules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UNIT_01_DATA.topics.map((topic) => (
              <div
                key={topic.id}
                className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 text-xs font-mono font-bold border border-indigo-800">
                      {topic.topicCode}
                    </span>
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      {topic.examFrequencyBadge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{topic.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {topic.verbatimDefinition}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">Duration: {topic.duration}</span>
                  <Link
                    href={`/teach/${topic.slug}`}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <span>Launch Console</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-10 w-full bg-slate-950 border-t border-slate-800 px-6 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>CS Studio 11 • Teacher Command Hub</span>
        <span>Copyright © 2026 Uzair Salman</span>
      </footer>
    </div>
  );
}
