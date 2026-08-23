"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Circle, PlayCircle, BookOpen, Flame, ChevronRight, AlertCircle } from "lucide-react";

export interface TopicItem {
  id: string;
  code: string;
  title: string;
  status: "completed" | "active" | "upcoming";
  duration: string;
  path: string;
}

const UNIT_TOPICS: TopicItem[] = [
  {
    id: "1.1",
    code: "Topic 1.1",
    title: "Software Basics & Types",
    status: "completed",
    duration: "15 mins",
    path: "/learn/punjab-11/unit-01/topic-1-1",
  },
  {
    id: "1.2",
    code: "Topic 1.2",
    title: "SDLC Phases & Workflow",
    status: "active",
    duration: "25 mins",
    path: "/learn/punjab-11/unit-01/topic-1-2",
  },
  {
    id: "1.3",
    code: "Topic 1.3",
    title: "Waterfall Model & V-Model",
    status: "upcoming",
    duration: "20 mins",
    path: "/learn/punjab-11/unit-01/topic-1-3",
  },
  {
    id: "1.4",
    code: "Topic 1.4",
    title: "Agile & Extreme Programming",
    status: "upcoming",
    duration: "30 mins",
    path: "/learn/punjab-11/unit-01/topic-1-4",
  },
  {
    id: "1.5",
    code: "Topic 1.5",
    title: "System Design Tools & Diagrams",
    status: "upcoming",
    duration: "25 mins",
    path: "/learn/punjab-11/unit-01/topic-1-5",
  },
];

export function FixedSidebar() {
  return (
    <aside className="w-72 h-full bg-white dark:bg-[#131722] border-r border-slate-200 dark:border-slate-800/90 flex flex-col shrink-0 overflow-hidden shadow-xs">
      {/* Top Unit Banner */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#0f131a]/40 shrink-0 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> Current Unit
          </span>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
            42% Done
          </span>
        </div>

        <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
          Unit 1: Introduction to Software Development
        </h2>
      </div>

      {/* Scrollable Topic List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
        <div className="px-2 py-1 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
          Syllabus Topics (PECTAA 2023)
        </div>

        {UNIT_TOPICS.map((topic) => {
          const isActive = topic.status === "active";
          const isCompleted = topic.status === "completed";

          return (
            <Link
              key={topic.id}
              href={topic.path}
              className={`group flex items-start gap-2.5 p-2.5 rounded-xl border transition-all ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm font-semibold"
                  : isCompleted
                  ? "bg-slate-50 dark:bg-[#161b26] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  : "bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/40"
              }`}
            >
              <div className="pt-0.5 shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                ) : isActive ? (
                  <PlayCircle className={`w-4 h-4 ${isActive ? "text-indigo-400 dark:text-indigo-600" : "text-indigo-500"} animate-pulse`} />
                ) : (
                  <Circle className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span
                    className={`text-[10px] font-mono ${
                      isActive
                        ? "text-indigo-300 dark:text-indigo-600 font-bold"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {topic.code}
                  </span>
                  <span className="text-[9px] font-mono opacity-80">{topic.duration}</span>
                </div>
                <h3 className="text-xs leading-snug truncate font-medium">
                  {topic.title}
                </h3>
              </div>

              {isActive && (
                <ChevronRight className="w-3.5 h-3.5 shrink-0 self-center opacity-80" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Pinned Bottom Board Pairing Card */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0f131a] shrink-0">
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-300 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-amber-700 dark:text-amber-400">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Board Pairing 2026
          </div>
          <p className="text-[11px] leading-tight text-amber-800/90 dark:text-amber-200/90">
            Unit 1 carries <strong>1 Long Q (Part A - 5 Marks)</strong> + <strong>2 Short Qs (4 Marks)</strong>.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default FixedSidebar;
