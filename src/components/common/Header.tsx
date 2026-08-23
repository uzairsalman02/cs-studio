"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Presentation, Flame, Sparkles, Settings } from "lucide-react";

export interface HeaderProps {
  onModeChange?: (mode: "student" | "projector") => void;
  activeMode?: "student" | "projector";
}

export function Header({ onModeChange, activeMode = "student" }: HeaderProps) {
  const [mode, setMode] = useState<"student" | "projector">(activeMode);

  const handleModeToggle = (newMode: "student" | "projector") => {
    setMode(newMode);
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  return (
    <header className="h-16 w-full bg-surface/80 backdrop-blur-md border-b border-border px-4 md:px-6 flex items-center justify-between z-40 shrink-0">
      {/* Left Side: Brand Logo & SNC Punjab Badge */}
      <div className="flex items-center gap-3">
        <Link href="/learn/punjab-11/unit-01/topic-1-2" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-primary via-analogy to-tech p-[1.5px] rounded-xl shadow-sm group-hover:scale-105 transition-transform">
            <div className="bg-canvas px-2.5 py-1 rounded-[10.5px] flex items-center justify-center font-mono font-bold text-sm text-primary tracking-wider">
              CS
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-foreground tracking-tight">CS Studio 11</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-2.5 h-2.5" /> SNC Punjab
              </span>
            </div>
            <span className="text-[10px] text-muted font-mono hidden md:inline-block">
              Class 11 Computer Science • Board Syllabus
            </span>
          </div>
        </Link>
      </div>

      {/* Right Side: Mode Switcher, Admin Link, Streak Pill */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mode Toggle Switcher */}
        <div className="flex items-center bg-canvas p-1 rounded-xl border border-border">
          <button
            onClick={() => handleModeToggle("student")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              mode === "student"
                ? "bg-surface text-foreground shadow-sm border border-border"
                : "text-muted hover:text-foreground"
            }`}
          >
            <GraduationCap className={`w-3.5 h-3.5 ${mode === "student" ? "text-primary" : ""}`} />
            <span className="hidden sm:inline">Student Mode</span>
          </button>

          <button
            onClick={() => handleModeToggle("projector")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              mode === "projector"
                ? "bg-surface text-foreground shadow-sm border border-border"
                : "text-muted hover:text-foreground"
            }`}
          >
            <Presentation className={`w-3.5 h-3.5 ${mode === "projector" ? "text-analogy" : ""}`} />
            <span className="hidden sm:inline">Projector Stage</span>
          </button>
        </div>

        {/* User Streak & Profile Pill */}
        <div className="flex items-center gap-2 pl-2 border-l border-border/60">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-analogy/10 border border-analogy/20 text-analogy text-xs font-semibold font-mono">
            <Flame className="w-3.5 h-3.5 fill-analogy" />
            <span>4 Days</span>
          </div>

          {/* Admin Studio Link Gear */}
          <Link
            href="/admin"
            className="p-1.5 rounded-xl bg-canvas border border-border text-muted hover:text-primary transition-all flex items-center justify-center"
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
