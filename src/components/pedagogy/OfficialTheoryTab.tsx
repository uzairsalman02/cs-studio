"use client";

import React from "react";
import { BookOpen, Award, Layers, CheckCircle, FileText, Sparkles } from "lucide-react";

export interface TheoryNoteData {
  verbatimDefinition: string;
  technicalBreakdown: string;
  paperPresentationTip?: string | null;
  boardMarks?: number;
  pastPapers?: string[];
  examFrequencyBadge?: string | null;
}

export interface OfficialTheoryTabProps {
  theoryNote: TheoryNoteData;
}

export function OfficialTheoryTab({ theoryNote }: OfficialTheoryTabProps) {
  const pastPapersList = theoryNote.pastPapers || [
    "BISE Lahore 2024 Group 1 (Q3)",
    "BISE Rawalpindi 2023 Group 2 (Q5)",
    "BISE Multan 2022 Group 1 (Q2)",
    "BISE Gujranwala 2024 (MCQ 4)",
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Textbook Verbatim Definition Card */}
      <div className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-base font-bold text-foreground">Official Textbook Verbatim Definition</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-bold border border-primary/20">
              {theoryNote.boardMarks || 5} Marks Question
            </span>
            <span className="px-2.5 py-1 rounded-md bg-tech/10 text-tech text-xs font-mono font-bold border border-tech/20">
              PCTB Standard
            </span>
          </div>
        </div>

        {/* Verbatim Definition Box */}
        <div className="p-4 rounded-xl bg-canvas border border-border/80 leading-relaxed font-sans text-sm text-foreground space-y-2">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
            Exact Board Textbook Text
          </span>
          <p className="text-foreground/90 font-medium">
            &ldquo;{theoryNote.verbatimDefinition}&rdquo;
          </p>
        </div>

        {/* Highlighted Technical Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-muted uppercase tracking-wider">Technical Breakdown</h4>
          <p className="text-xs text-muted leading-relaxed">{theoryNote.technicalBreakdown}</p>
        </div>
      </div>

      {/* SDLC Deliverables Breakdown Table */}
      <div className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-tech" />
          <h3 className="text-base font-bold text-foreground">SDLC Deliverables Breakdown</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border bg-canvas/60 text-muted font-mono uppercase text-[10px]">
                <th className="p-3">Phase Number</th>
                <th className="p-3">Phase Title</th>
                <th className="p-3">Primary Deliverable</th>
                <th className="p-3">Output Artifact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {[
                { phase: "01", title: "Planning & Feasibility", deliv: "Feasibility Report", artifact: "Project Charter" },
                { phase: "02", title: "Requirement Analysis", deliv: "SRS Document", artifact: "Use Case Specs" },
                { phase: "03", title: "System Design", deliv: "DDS Document", artifact: "ERD & Architecture" },
                { phase: "04", title: "Implementation", deliv: "Source Code Modules", artifact: "API Docs" },
                { phase: "05", title: "Testing & QA", deliv: "Test Cases Report", artifact: "UAT Sign-off" },
                { phase: "06", title: "Deployment", deliv: "Production Build", artifact: "User Guide" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-hover/50 transition-colors">
                  <td className="p-3 font-mono font-bold text-primary">{row.phase}</td>
                  <td className="p-3 font-medium text-foreground">{row.title}</td>
                  <td className="p-3 font-mono text-tech">{row.deliv}</td>
                  <td className="p-3 text-muted">{row.artifact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Past Paper Frequency Indicator */}
      <div className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-analogy" />
            <h3 className="text-base font-bold text-foreground">Punjab Board Exam Frequency</h3>
          </div>
          {theoryNote.examFrequencyBadge && (
            <span className="px-2.5 py-1 rounded-full bg-analogy/10 text-analogy text-xs font-mono font-bold border border-analogy/20">
              {theoryNote.examFrequencyBadge}
            </span>
          )}
        </div>

        <p className="text-xs text-muted">
          This topic has appeared repeatedly in Punjab Board annual examinations across Lahore, Rawalpindi, Multan, and Gujranwala boards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {pastPapersList.map((paper, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-canvas border border-border text-xs font-mono text-foreground/90 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-analogy shrink-0" />
              <span>{paper}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfficialTheoryTab;
