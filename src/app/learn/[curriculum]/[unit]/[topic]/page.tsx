"use client";

import React, { useState } from "react";
import { DualLaneVisual } from "@/components/pedagogy/DualLaneVisual";
import { OfficialTheoryTab } from "@/components/pedagogy/OfficialTheoryTab";
import { TopperPaperSheet } from "@/components/pedagogy/TopperPaperSheet";
import { CheckpointMCQ } from "@/components/pedagogy/CheckpointMCQ";
import localUnitData from "@/data/punjab-11/unit-01.json";
import {
  BookOpen,
  Flame,
  Clock,
  Layers,
  FileText,
  PenTool,
  HelpCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function TopicPage({
  params,
}: {
  params: { curriculum: string; unit: string; topic: string };
}) {
  const topicData = localUnitData.unit.topics[0];
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"visual" | "theory" | "topper" | "mcq">("visual");

  const currentStage = topicData.conceptStages[activeStageIdx];

  const stagesNav = [
    { num: 1, name: "Planning", title: "Planning & Feasibility" },
    { num: 2, name: "Analysis", title: "Requirement Analysis" },
    { num: 3, name: "Design", title: "System Design" },
    { num: 4, name: "Coding", title: "Implementation" },
    { num: 5, name: "Testing", title: "Testing & QA" },
    { num: 6, name: "Deploy", title: "Deployment" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 animate-in fade-in duration-300">
      {/* Top Hero Banner */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-surface border border-border shadow-xl overflow-hidden space-y-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Unit 1 • Topic {topicData.topicCode}
          </span>
          <span className="px-3 py-1 rounded-full bg-analogy/10 text-analogy text-xs font-mono font-medium border border-analogy/20 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-analogy" /> {topicData.examFrequencyBadge}
          </span>
          <span className="px-3 py-1 rounded-full bg-canvas text-muted text-xs font-mono border border-border flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-tech" /> 25 Mins Study
          </span>
        </div>

        {/* Topic Title */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            {topicData.title}
          </h1>
          <p className="text-xs md:text-sm text-muted leading-relaxed max-w-3xl">
            {topicData.verbatimDefinition}
          </p>
        </div>

        {/* 6-Stage Interactive Stepper */}
        <div className="pt-2 border-t border-border/60">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-2">
            SDLC 6-Stage Interactive Stepper
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {stagesNav.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStageIdx(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  activeStageIdx === idx
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-canvas border-border text-foreground hover:bg-surface-hover"
                }`}
              >
                <span
                  className={`text-[10px] font-mono font-bold ${
                    activeStageIdx === idx ? "text-white/80" : "text-primary"
                  }`}
                >
                  Phase 0{s.num}
                </span>
                <span className="text-xs font-semibold leading-snug truncate">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Pedagogy Navigation Tabs */}
      <div className="flex items-center gap-2 bg-surface p-1.5 rounded-2xl border border-border overflow-x-auto">
        {[
          { id: "visual", label: "Dual-Lane Visual Comparison", icon: Layers, color: "text-primary" },
          { id: "theory", label: "Official Textbook Theory", icon: FileText, color: "text-tech" },
          { id: "topper", label: "Topper Paper Formatting", icon: PenTool, color: "text-analogy" },
          { id: "mcq", label: "Exam Checkpoints", icon: HelpCircle, color: "text-primary" },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-canvas text-foreground shadow-sm border border-border"
                  : "text-muted hover:text-foreground hover:bg-surface-hover/50"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? tab.color : ""}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Tab Content Display */}
      <div>
        {activeTab === "visual" && <DualLaneVisual stage={currentStage as any} />}

        {activeTab === "theory" && (
          <OfficialTheoryTab
            theoryNote={{
              verbatimDefinition: topicData.verbatimDefinition,
              technicalBreakdown:
                "SDLC encompasses 6 core phases: Planning & Feasibility, Requirement Analysis (SRS), System Design (DDS/UML), Implementation (Coding), Testing & QA, and Deployment & Maintenance.",
              paperPresentationTip: topicData.paperPresentationTip,
              boardMarks: 5,
              pastPapers: topicData.pastPapers,
              examFrequencyBadge: topicData.examFrequencyBadge,
            }}
          />
        )}

        {activeTab === "topper" && (
          <TopperPaperSheet paperPresentationTip={topicData.paperPresentationTip} />
        )}

        {activeTab === "mcq" && (
          <CheckpointMCQ questions={topicData.assessmentQuestions as any} />
        )}
      </div>
    </div>
  );
}
