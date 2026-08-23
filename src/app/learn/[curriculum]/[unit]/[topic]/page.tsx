"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DualLaneVisual } from "@/components/pedagogy/DualLaneVisual";
import { OfficialTheoryTab } from "@/components/pedagogy/OfficialTheoryTab";
import { TopperPaperSheet } from "@/components/pedagogy/TopperPaperSheet";
import { CheckpointMCQ } from "@/components/pedagogy/CheckpointMCQ";
import { TeacherCueBar } from "@/components/presenter/TeacherCueBar";
import { ClassroomPollModal } from "@/components/presenter/ClassroomPollModal";
import localUnitData from "@/data/punjab-11/unit-01.json";
import {
  BookOpen,
  Flame,
  Clock,
  Layers,
  FileText,
  PenTool,
  HelpCircle,
  Code2,
  Presentation,
  Loader2,
  Mic,
  Award,
  Sparkles,
} from "lucide-react";

const PythonPlayground = dynamic(
  () => import("@/components/pedagogy/PythonPlayground"),
  {
    loading: () => (
      <div className="p-8 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-3 text-sm text-slate-500">
        <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
        <span>Initializing Python Pyodide WASM Runtime...</span>
      </div>
    ),
    ssr: false,
  }
);

export default function TopicPage({
  params,
}: {
  params: { curriculum: string; unit: string; topic: string };
}) {
  const topicData = localUnitData.unit.topics[0];
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "visual" | "theory" | "topper" | "mcq" | "python"
  >("visual");
  const [isPollOpen, setIsPollOpen] = useState(false);
  const [isProjectorMode, setIsProjectorMode] = useState(false);

  const currentStage = topicData.conceptStages[activeStageIdx];

  const stagesNav = [
    { num: 1, name: "Requirements", title: "Requirement Analysis" },
    { num: 2, name: "Design", title: "System Design (DDS)" },
    { num: 3, name: "Coding", title: "Implementation" },
    { num: 4, name: "Testing", title: "Testing & QA" },
    { num: 5, name: "Deploy", title: "Deployment" },
    { num: 6, name: "Maintain", title: "Maintenance" },
  ];

  const handleNextStage = () => {
    setActiveStageIdx((prev) => (prev + 1) % stagesNav.length);
  };

  return (
    <div
      className={`max-w-5xl mx-auto space-y-6 pb-24 animate-in fade-in duration-300 ${
        isProjectorMode ? "text-lg scale-[1.01] transition-all" : ""
      }`}
    >
      {/* Teacher Spoken Hook Alert (Active when Classroom Mode is toggled or visible) */}
      {isProjectorMode && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <Mic className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase font-bold text-amber-700 dark:text-amber-400 block">
                Classroom Stage Hook (استاد کی آواز)
              </span>
              <p className="urdu-script text-base text-amber-950 dark:text-amber-100 font-semibold leading-relaxed">
                {currentStage.teacherSpokenCue}
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold border border-amber-500/40 shrink-0 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" /> 5 Marks Board Long Q
          </span>
        </div>
      )}

      {/* Main Topic Header Card */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden space-y-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        {/* Badges & Presentation Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Topic {topicData.topicCode}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/40 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 fill-amber-500" /> {topicData.examFrequencyBadge}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0f131a] text-slate-600 dark:text-slate-400 text-xs font-mono border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-500" /> 25 Mins Study
            </span>
          </div>

          <button
            onClick={() => setIsProjectorMode(!isProjectorMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all flex items-center gap-1.5 ${
              isProjectorMode
                ? "bg-amber-500 text-slate-950 border-amber-500 shadow-xs"
                : "bg-slate-100 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>{isProjectorMode ? "Classroom Mode Active" : "Classroom Stage"}</span>
          </button>
        </div>

        {/* Topic Title */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {topicData.title}
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            {topicData.verbatimDefinition}
          </p>
        </div>

        {/* Past Paper Frequency Indicator */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span className="font-bold text-slate-700 dark:text-slate-300">Past Paper Frequency:</span>
          {topicData.pastPapers.map((paper, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800"
            >
              {paper}
            </span>
          ))}
        </div>

        {/* 6-Stage Stepper Grid */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-bold">
            SDLC 6-Stage Workflow Stepper
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {stagesNav.map((s, idx) => {
              const isSelected = activeStageIdx === idx;
              return (
                <button
                  key={s.num}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs font-bold"
                      : "bg-white dark:bg-[#131722] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isSelected ? "text-indigo-300 dark:text-indigo-600" : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    Stage 0{s.num}
                  </span>
                  <span className="text-xs font-semibold leading-snug truncate">{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex items-center gap-2 bg-white dark:bg-[#161b26] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-xs">
        {[
          { id: "visual", label: "Dual-Lane Visual Comparison", icon: Layers, color: "text-indigo-500" },
          { id: "theory", label: "Official Textbook Theory", icon: FileText, color: "text-teal-500" },
          { id: "topper", label: "Topper Paper Formatting", icon: PenTool, color: "text-amber-500" },
          { id: "mcq", label: "Exam Checkpoints", icon: HelpCircle, color: "text-indigo-500" },
          { id: "python", label: "Python WASM Lab", icon: Code2, color: "text-teal-500" },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-slate-100 dark:bg-[#0f131a] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
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
                "SDLC encompasses 6 core phases: Requirement Analysis (SRS), System Design (DDS/UML), Implementation (Coding), Testing & QA, Deployment, and Maintenance.",
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

        {activeTab === "python" && <PythonPlayground />}
      </div>

      {/* Teacher Cue Bar Floating Controls */}
      {isProjectorMode && (
        <TeacherCueBar
          stageNumber={currentStage.stageNumber}
          stageTitle={currentStage.stageTitle}
          spokenCue={currentStage.teacherSpokenCue}
          onTriggerPoll={() => setIsPollOpen(true)}
          onNextStage={handleNextStage}
        />
      )}

      {/* Classroom Poll Modal */}
      <ClassroomPollModal
        isOpen={isPollOpen}
        onClose={() => setIsPollOpen(false)}
      />
    </div>
  );
}
