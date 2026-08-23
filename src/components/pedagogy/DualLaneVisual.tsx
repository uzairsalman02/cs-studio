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
      <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-surface to-canvas border border-primary/25 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-wider">
          <MessageSquareQuote className="w-4 h-4 text-analogy" /> Teacher Spoken Cue (استاد کی آواز)
        </div>
        <p className="urdu-script text-base text-foreground font-semibold">
          {stage.teacherSpokenCue}
        </p>
      </div>

      {/* Dual Lane Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lane 1: Real-World Physical Analogy */}
        <div className="p-6 rounded-2xl bg-surface border-2 border-analogy/40 space-y-4 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-analogy/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-analogy/15 text-analogy text-xs font-mono font-bold border border-analogy/40 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" /> Lane 1: Real-World Analogy • حقیقی دنیا کی مثال
              </span>
              <span className="text-xs font-mono text-muted font-bold">Phase {stage.stageNumber}</span>
            </div>

            <h3 className="text-lg font-bold text-foreground tracking-tight">
              {stage.stageTitle}
            </h3>

            {/* Urdu Analogy Card */}
            <div className="p-4 rounded-xl bg-canvas border border-border space-y-1">
              <span className="text-[10px] font-mono text-analogy uppercase tracking-wider block font-bold">
                عملی مثال (اردو)
              </span>
              <p className="urdu-script text-base text-foreground font-medium leading-relaxed">
                {stage.realWorldAnalogyUr}
              </p>
            </div>

            {/* English Explanation */}
            <p className="text-xs text-muted leading-relaxed">
              {stage.realWorldAnalogyEn}
            </p>
          </div>

          {/* Rich SVG Vector Graphic Container */}
          {stage.realWorldVisualSvg && (
            <div className="pt-4 border-t border-border/60">
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-2">
                Physical Construction Analogy Blueprint
              </span>
              <div className="w-full h-44 bg-slate-950/80 rounded-xl p-4 border border-slate-800 flex items-center justify-center relative overflow-hidden shadow-inner">
                <SvgRenderer svgMarkup={stage.realWorldVisualSvg} className="w-full h-full max-h-36 text-analogy" />
              </div>
            </div>
          )}
        </div>

        {/* Lane 2: Software Engineering Equivalent */}
        <div className="p-6 rounded-2xl bg-surface border-2 border-tech/40 space-y-4 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-tech/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-tech/15 text-tech text-xs font-mono font-bold border border-tech/40 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> Lane 2: Software Engineering Equivalent • سافٹ ویئر انجینئرنگ
              </span>
              <span className="text-xs font-mono text-muted font-bold">Phase {stage.stageNumber}</span>
            </div>

            <h3 className="text-lg font-bold text-foreground tracking-tight">
              Engineering Deliverables
            </h3>

            {/* Technical Deliverables Pills */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-tech uppercase tracking-wider block font-bold">
                Required Technical Output Artifacts
              </span>
              <div className="flex flex-wrap gap-2">
                {stage.softwareDeliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-canvas text-foreground text-xs font-mono border border-border flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-tech shrink-0" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Standard software engineering documentation, source code modules, and testing artifacts produced in Phase {stage.stageNumber}.
            </p>
          </div>

          {/* Rich SVG Vector Graphic Container */}
          {stage.softwareVisualSvg && (
            <div className="pt-4 border-t border-border/60">
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-2">
                Software Engineering Deliverable Diagram
              </span>
              <div className="w-full h-44 bg-slate-950/80 rounded-xl p-4 border border-slate-800 flex items-center justify-center relative overflow-hidden shadow-inner">
                <SvgRenderer svgMarkup={stage.softwareVisualSvg} className="w-full h-full max-h-36 text-tech" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skip Fatal Consequence Warning Badge */}
      {stage.skipWarning && (
        <div className="p-4 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-start gap-3 text-xs text-foreground shadow-md">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-primary font-mono uppercase tracking-wider text-[11px] block">
              Fatal Consequence of Skipping Phase {stage.stageNumber}
            </span>
            <p className="text-muted leading-relaxed">{stage.skipWarning}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DualLaneVisual;
