"use client";

import React from "react";
import { BookOpen, Award, Layers, FileText } from "lucide-react";

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
      <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Official Textbook Verbatim Definition
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40">
              {theoryNote.boardMarks || 5} Marks Question
            </span>
            <span className="px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-xs font-mono font-bold border border-teal-200 dark:border-teal-800/40">
              PCTB Standard
            </span>
          </div>
        </div>

        {/* Verbatim Definition Box */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 leading-relaxed font-sans text-sm text-slate-800 dark:text-slate-200 space-y-2">
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block font-bold">
            Exact Board Textbook Text
          </span>
          <p className="font-medium text-slate-900 dark:text-slate-100">
            &ldquo;{theoryNote.verbatimDefinition}&rdquo;
          </p>
        </div>

        {/* Technical Breakdown */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
            Technical Breakdown
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {theoryNote.technicalBreakdown}
          </p>
        </div>
      </div>

      {/* SDLC Deliverables Breakdown Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            SDLC Deliverables Breakdown
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0f131a] text-slate-500 dark:text-slate-400 font-mono uppercase text-[10px]">
                <th className="p-3">Phase</th>
                <th className="p-3">Title</th>
                <th className="p-3">Primary Deliverable</th>
                <th className="p-3">Output Artifact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
              {[
                { phase: "01", title: "Planning & Feasibility", deliv: "Feasibility Report", artifact: "Project Charter" },
                { phase: "02", title: "Requirement Analysis", deliv: "SRS Document", artifact: "Use Case Specs" },
                { phase: "03", title: "System Design", deliv: "DDS Document", artifact: "ERD & Architecture" },
                { phase: "04", title: "Implementation", deliv: "Source Code Modules", artifact: "API Docs" },
                { phase: "05", title: "Testing & QA", deliv: "Test Cases Report", artifact: "UAT Sign-off" },
                { phase: "06", title: "Deployment", deliv: "Production Build", artifact: "User Guide" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">{row.phase}</td>
                  <td className="p-3 font-medium">{row.title}</td>
                  <td className="p-3 font-mono text-teal-600 dark:text-teal-400">{row.deliv}</td>
                  <td className="p-3 text-slate-500 dark:text-slate-400">{row.artifact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Past Paper Frequency Indicator */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Punjab Board Exam Frequency
            </h3>
          </div>
          {theoryNote.examFrequencyBadge && (
            <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/40">
              {theoryNote.examFrequencyBadge}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {pastPapersList.map((paper, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{paper}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfficialTheoryTab;
