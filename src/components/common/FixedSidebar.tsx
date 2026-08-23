"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Circle, PlayCircle, BookOpen, Flame, ChevronRight } from "lucide-react";

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
    title: "Introduction to Software",
    status: "completed",
    duration: "15 mins",
    path: "/learn/punjab-11/unit-1/topic-1.1",
  },
  {
    id: "1.2",
    code: "Topic 1.2",
    title: "SDLC Phases & Workflow",
    status: "active",
    duration: "25 mins",
    path: "/learn/punjab-11/unit-1/topic-1.2",
  },
  {
    id: "1.3",
    code: "Topic 1.3",
    title: "Waterfall Model & V-Model",
    status: "upcoming",
    duration: "20 mins",
    path: "/learn/punjab-11/unit-1/topic-1.3",
  },
  {
    id: "1.4",
    code: "Topic 1.4",
    title: "Agile Methodology & Scrum",
    status: "upcoming",
    duration: "30 mins",
    path: "/learn/punjab-11/unit-1/topic-1.4",
  },
  {
    id: "1.5",
    code: "Topic 1.5",
    title: "System Design Tools & Diagrams",
    status: "upcoming",
    duration: "25 mins",
    path: "/learn/punjab-11/unit-1/topic-1.5",
  },
];

export function FixedSidebar() {
  return (
    <aside className="w-72 h-full bg-surface border-r border-border flex flex-col shrink-0 overflow-hidden">
      {/* Top Banner: Unit & Pairing Scheme Tag */}
      <div className="p-4 border-b border-border bg-canvas/40 shrink-0 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-semibold text-primary uppercase tracking-wider flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> Unit 1 Curriculum
          </span>
          <span className="text-[10px] font-mono text-muted">Grade 11</span>
        </div>

        <h2 className="text-sm font-bold text-foreground tracking-tight leading-snug">
          Software Development
        </h2>

        {/* Board Pairing Scheme Tag */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-analogy/10 border border-analogy/25 text-analogy text-[11px] font-mono font-medium">
          <Flame className="w-3.5 h-3.5 fill-analogy shrink-0" />
          <span>Exam Weight: 1 Long Q + 2 Short Qs</span>
        </div>
      </div>

      {/* Scrollable Container: Inner Topic List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
        <div className="px-2 py-1 text-[10px] font-mono text-muted uppercase tracking-wider">
          Unit Topics & Syllabus
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
                  ? "bg-primary/10 border-primary/40 text-foreground shadow-sm"
                  : isCompleted
                  ? "bg-surface-hover/50 border-border/60 text-foreground/80 hover:bg-surface-hover"
                  : "bg-transparent border-transparent text-muted hover:text-foreground hover:bg-surface-hover/40"
              }`}
            >
              <div className="pt-0.5 shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-tech fill-tech/20" />
                ) : isActive ? (
                  <PlayCircle className="w-4 h-4 text-primary fill-primary/20 animate-pulse" />
                ) : (
                  <Circle className="w-4 h-4 text-muted/60" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? "text-primary font-bold" : "text-muted"
                    }`}
                  >
                    {topic.code}
                  </span>
                  <span className="text-[9px] font-mono text-muted/80">{topic.duration}</span>
                </div>
                <h3
                  className={`text-xs leading-snug truncate ${
                    isActive ? "font-semibold text-foreground" : "font-normal"
                  }`}
                >
                  {topic.title}
                </h3>
              </div>

              {isActive && (
                <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 self-center" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Sidebar Footer Info */}
      <div className="p-3 border-t border-border bg-canvas/30 shrink-0 flex items-center justify-between text-[10px] text-muted font-mono">
        <span>Progress: 1 / 5 Topics</span>
        <span className="text-primary font-medium">20%</span>
      </div>
    </aside>
  );
}

export default FixedSidebar;
