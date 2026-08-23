"use client";

import React from "react";
import { PenTool, CheckCircle2, Layout, Award, Sparkles } from "lucide-react";

export interface TopperPaperSheetProps {
  paperPresentationTip?: string | null;
}

export function TopperPaperSheet({ paperPresentationTip }: TopperPaperSheetProps) {
  const tip =
    paperPresentationTip ||
    "Draw a neat block flow diagram connecting all 6 phases with arrows in serial order. Label SRS under Analysis and DDS under Design for full 5 marks.";

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Cut-Marker Presentation Header */}
      <div className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-primary" />
            <h3 className="text-base font-bold text-foreground">Topper&apos;s Answer Sheet Formatting Guide</h3>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-bold border border-primary/20">
            605 / 604 Cut-Marker Standard
          </span>
        </div>

        {/* Paper Margin & Marker Tip Banner */}
        <div className="p-4 rounded-xl bg-canvas border border-border space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-analogy uppercase">
            <Award className="w-4 h-4" /> Board Examiner Marking Rule
          </div>
          <p className="text-xs text-foreground/90 leading-relaxed font-sans">
            {tip}
          </p>
        </div>
      </div>

      {/* Simulated Topper Answer Sheet Container */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#090D16] border border border-border shadow-2xl relative space-y-6 font-sans">
        {/* Answer Sheet Top Margins */}
        <div className="flex items-center justify-between border-b-2 border-primary/40 pb-3 text-xs font-mono text-muted">
          <span>Q. No. 3 (a) • Punjab Board Pattern</span>
          <span className="text-primary font-bold">Marks: 5/5</span>
        </div>

        {/* Heading Hierarchy Simulation */}
        <div className="space-y-5">
          {/* Main Title with 605 Cut Marker */}
          <div>
            <span className="text-xs font-mono text-muted block mb-1">
              [ 605 Main Heading • Double Underlined ]
            </span>
            <h2 className="text-xl font-black text-primary uppercase tracking-wide border-b-2 border-primary inline-block pb-1">
              SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)
            </h2>
          </div>

          {/* Definition Heading with 604 Marker */}
          <div className="space-y-2 pl-2 border-l-2 border-border">
            <span className="text-[10px] font-mono text-muted block">
              [ 604 Sub-Heading • Single Underlined ]
            </span>
            <h3 className="text-sm font-bold text-analogy uppercase tracking-wider underline">
              1. Definition:
            </h3>
            <p className="text-xs text-foreground/90 leading-relaxed italic pl-2 border-l border-primary/30">
              &ldquo;SDLC is a structured step-by-step process used by software engineers to build high-quality software systems.&rdquo;
            </p>
          </div>

          {/* Diagram Guideline Box */}
          <div className="p-4 rounded-xl bg-surface/80 border border-primary/30 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-primary font-bold">
              <span>[ 605 Flowchart Diagram • Centered ]</span>
              <span>Must Use Ruler & Lead Pencil</span>
            </div>

            {/* Cyclic Flowchart Visual Simulation */}
            <div className="p-4 bg-canvas rounded-lg border border-border flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                1. Planning
              </span>
              <span className="text-muted">➔</span>
              <span className="px-2.5 py-1 rounded bg-analogy/20 text-analogy border border-analogy/30">
                2. Analysis (SRS)
              </span>
              <span className="text-muted">➔</span>
              <span className="px-2.5 py-1 rounded bg-tech/20 text-tech border border-tech/30">
                3. Design (DDS)
              </span>
              <span className="text-muted">➔</span>
              <span className="px-2.5 py-1 rounded bg-surface text-foreground border border-border">
                4. Coding
              </span>
              <span className="text-muted">➔</span>
              <span className="px-2.5 py-1 rounded bg-surface text-foreground border border-border">
                5. Testing
              </span>
              <span className="text-muted">➔</span>
              <span className="px-2.5 py-1 rounded bg-surface text-foreground border border-border">
                6. Deploy
              </span>
            </div>
          </div>

          {/* Key Presentation Rules List */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono text-muted uppercase tracking-wider">
              3 Paper Presentation Rules for Full Marks:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { title: "Use Blue Ink Only", desc: "Write main answer with Blue Fountain pen, headers with 605/604 Cut Marker." },
                { title: "Highlight Technical Terms", desc: "Enclose SRS, DDS, Feasibility, ERD in neat quotes or marker boxes." },
                { title: "Draw Ending Line", desc: "Draw a double line after completing answer before starting next question." },
              ].map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-surface border border-border text-xs space-y-1"
                >
                  <div className="flex items-center gap-1.5 font-bold text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-tech shrink-0" />
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-[11px] text-muted leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopperPaperSheet;
