"use client";

import React, { useState } from "react";
import { MessageSquareQuote, Award, Hand, Zap, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

export interface TeacherCueBarProps {
  spokenCue: string;
  stageTitle: string;
  stageNumber: number;
  onTriggerPoll: () => void;
  onNextStage: () => void;
}

export function TeacherCueBar({
  spokenCue,
  stageTitle,
  stageNumber,
  onTriggerPoll,
  onNextStage,
}: TeacherCueBarProps) {
  const [showMisconception, setShowMisconception] = useState(false);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 animate-in slide-in-from-bottom-6 duration-300">
      <div className="p-4 rounded-2xl bg-[#0F172A]/95 border-2 border-primary shadow-2xl backdrop-blur-xl text-white space-y-3">
        {/* Top Header & Exam Weightage */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              👨🏫 Projector Stage Mode Active
            </span>
            <span className="text-xs text-slate-400 font-mono">
              • Phase 0{stageNumber}: {stageTitle}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>5 Marks Long Q • Lahore/Sargodha 2024</span>
          </div>
        </div>

        {/* Spoken Teacher Cue */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-1">
            <MessageSquareQuote className="w-3 h-3" /> Teacher Prompt (استاد کی آواز)
          </span>
          <p className="urdu-script text-base text-slate-100 font-semibold leading-relaxed">
            {spokenCue}
          </p>
        </div>

        {/* Misconception Alert Popup */}
        {showMisconception && (
          <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs leading-relaxed space-y-1 animate-in fade-in">
            <div className="flex items-center gap-1.5 font-bold font-mono text-rose-400">
              <AlertCircle className="w-4 h-4" /> Common Student Misconception (محتاط رہیں)
            </div>
            <p>
              Students often confuse the <strong>Analysis Phase (SRS)</strong> with the <strong>System Design Phase (DDS)</strong>. Remind them: Analysis gathers <em>&ldquo;WHAT to build&rdquo;</em>, while Design determines <em>&ldquo;HOW to build&rdquo;</em>.
            </p>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-700/60">
          <div className="flex items-center gap-2">
            <button
              onClick={onTriggerPoll}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Hand className="w-3.5 h-3.5 text-amber-300" />
              <span>✋ Trigger Hands-Up Poll</span>
            </button>

            <button
              onClick={() => setShowMisconception(!showMisconception)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-semibold transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>{showMisconception ? "Hide Misconception" : "⚡ Common Misconception"}</span>
            </button>
          </div>

          <button
            onClick={onNextStage}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95 ml-auto"
          >
            <span>Next Stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherCueBar;
