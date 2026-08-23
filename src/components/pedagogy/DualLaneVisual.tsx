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
        <div className="p-6 rounded-2xl bg-surface border border-analogy/30 space-y-4 shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-analogy/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-analogy/15 text-analogy text-xs font-mono font-bold border border-analogy/30 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" /> Lane 1: Real-World Analogy
              </span>
              <span className="text-xs font-mono text-muted font-bold">Phase {stage.stageNumber}</span>
            </div>

            <h3 className="text-lg font-bold text-foreground tracking-tight">
              {stage.stageTitle}
            </h3>

            {/* Urdu Analogy Card */}
            <div className="p-3.5 rounded-xl bg-canvas border border-border">
              <span className="text-[10px] font-mono text-analogy uppercase tracking-wider block mb-1">
                عملی مثال (اردو)
              </span>
              <p className="urdu-script text-sm text-foreground font-medium">
                {stage.realWorldAnalogyUr}
              </p>
            </div>

            {/* English Explanation */}
            <p className="text-xs text-muted leading-relaxed">
              {stage.realWorldAnalogyEn}
            </p>
          </div>

          {/* SVG Vector Graphic */}
          {stage.realWorldVisualSvg && (
            <div className="pt-4 border-t border-border/50">
              <div className="w-full h-24 bg-canvas/60 rounded-xl p-3 border border-border/50 flex items-center justify-center">
                <SvgRenderer svgMarkup={stage.realWorldVisualSvg} className="h-16 text-analogy" />
              </div>
            </div>
          )}
        </div>

        {/* Lane 2: Software Engineering Equivalent */}
        <div className="p-6 rounded-2xl bg-surface border border-tech/30 space-y-4 shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tech/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-tech/15 text-tech text-xs font-mono font-bold border border-tech/30 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> Lane 2: Software Equivalent
              </span>
              <span className="text-xs font-mono text-muted font-bold">Technical Deliverables</span>
            </div>

            <h3 className="text-lg font-bold text-foreground tracking-tight">
              Engineering Artifacts
            </h3>

            {/* Technical Deliverables Pills */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-tech uppercase tracking-wider block">
                Required Technical Artifacts
              </span>
              <div className="flex flex-wrap gap-2">
                {stage.softwareDeliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-canvas text-foreground text-xs font-mono border border-border flex items-center gap-1.5"
                  >
                    <CheckSquare className="w-3 h-3 text-tech" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Standard technical documentation and software code generated during Phase {stage.stageNumber}.
            </p>
          </div>

          {/* SVG Vector Graphic */}
          {stage.softwareVisualSvg && (
            <div className="pt-4 border-t border-border/50">
              <div className="w-full h-24 bg-canvas/60 rounded-xl p-3 border border-border/50 flex items-center justify-center">
                <SvgRenderer svgMarkup={stage.softwareVisualSvg} className="h-16 text-tech" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skip Fatal Consequence Warning Badge */}
      {stage.skipWarning && (
        <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex items-start gap-3 text-xs text-foreground">
          <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
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
