"use client";

import React from "react";
import { SvgRenderer } from "./SvgRenderer";
import { Home, Code, AlertTriangle, MessageSquareQuote, CheckSquare, Sparkles } from "lucide-react";

export interface DualLaneStageData {
  stageNumber: number;
  stageTitle: string;
  teacherSpokenCue: string;
  realWorldAnalogyEn: string;
  realWorldAnalogyUr: string;
  realWorldVisualSvg?: string | null;
  softwareDeliverables: string[];
  skipWarning?: string | null;
  softwareVisualSvg?: string | null;
}

export interface DualLaneVisualProps {
  stage: DualLaneStageData;
}

export function DualLaneVisual({ stage }: DualLaneVisualProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Teacher Spoken Cue Banner */}
      <div className="p-4.5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-slate-50 dark:from-indigo-950/30 dark:via-[#161b26] dark:to-[#0f131a] border border-indigo-200/80 dark:border-indigo-800/40 space-y-2 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          <MessageSquareQuote className="w-4 h-4 text-amber-500" /> Teacher Spoken Cue (استاد کی آواز)
        </div>
        <p className="urdu-script text-base text-slate-800 dark:text-slate-100 font-semibold leading-relaxed">
          {stage.teacherSpokenCue}
        </p>
      </div>

      {/* Dual Lane Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lane 1: Real-World Physical Analogy */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-amber-400/60 dark:border-amber-500/40 space-y-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/50 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" /> Lane 1: Real-World Analogy • حقیقی دنیا کی مثال
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold">
                Phase 0{stage.stageNumber}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {stage.stageTitle}
            </h3>

            {/* Urdu Analogy Card */}
            <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1">
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-bold">
                عملی مثال (اردو)
              </span>
              <p className="urdu-script text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                {stage.realWorldAnalogyUr}
              </p>
            </div>

            {/* English Explanation */}
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {stage.realWorldAnalogyEn}
            </p>
          </div>

          {/* SVG Vector Graphic Box */}
          {stage.realWorldVisualSvg && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                Physical Construction Vector Analogy
              </span>
              <div className="w-full h-40 bg-slate-50 dark:bg-[#0a0d13] rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-inner">
                <SvgRenderer svgMarkup={stage.realWorldVisualSvg} className="w-full h-full max-h-32 text-amber-500" />
              </div>
            </div>
          )}
        </div>

        {/* Lane 2: Software Engineering Equivalent */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-teal-400/60 dark:border-teal-500/40 space-y-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 text-xs font-mono font-bold border border-teal-200 dark:border-teal-800/50 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> Lane 2: Software Engineering Equivalent • سافٹ ویئر انجینئرنگ
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold">
                Phase 0{stage.stageNumber}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Engineering Deliverables
            </h3>

            {/* Technical Deliverables Pills */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider block font-bold">
                Required Technical Output Artifacts
              </span>
              <div className="flex flex-wrap gap-2">
                {stage.softwareDeliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-[#0f131a] text-slate-800 dark:text-slate-200 text-xs font-mono border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-xs"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-teal-500 shrink-0" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard software engineering documentation, source code modules, and testing artifacts produced in Phase {stage.stageNumber}.
            </p>
          </div>

          {/* SVG Vector Graphic Box */}
          {stage.softwareVisualSvg && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                Software Engineering Deliverable Diagram
              </span>
              <div className="w-full h-40 bg-slate-50 dark:bg-[#0a0d13] rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-inner">
                <SvgRenderer svgMarkup={stage.softwareVisualSvg} className="w-full h-full max-h-32 text-teal-500" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skip Fatal Consequence Warning Badge */}
      {stage.skipWarning && (
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 flex items-start gap-3 text-xs text-rose-900 dark:text-rose-200 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-rose-700 dark:text-rose-300 font-mono uppercase tracking-wider text-[11px] block">
              Fatal Consequence of Skipping Phase 0{stage.stageNumber}
            </span>
            <p className="text-rose-800/90 dark:text-rose-200/90 leading-relaxed">{stage.skipWarning}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DualLaneVisual;
