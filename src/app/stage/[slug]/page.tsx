"use client";

import React, { useState, useEffect } from "react";
import { subscribeToSync, SyncPayload } from "@/lib/sync-channel";
import { UNIT_01_DATA } from "@/data/curriculum/unit-01";
import { Topic, SDLCStage } from "@/types/curriculum";
import { BookOpen, Layers, Compass, PenTool, HelpCircle, Award, CheckCircle2 } from "lucide-react";

export default function ProjectorDisplayView({
  params,
}: {
  params: { slug: string };
}) {
  const topicSlug = params.slug || "sdlc-phases-and-workflow";
  const activeTopic: Topic =
    UNIT_01_DATA.topics.find((t) => t.slug === topicSlug) || UNIT_01_DATA.topics[1];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [revealedAnswerId, setRevealedAnswerId] = useState<string | null>(null);

  // Subscribe to Web BroadcastChannel sync events
  useEffect(() => {
    const unsubscribe = subscribeToSync((payload: SyncPayload) => {
      if (payload.activeSlideIndex !== undefined) {
        setActiveSlideIndex(payload.activeSlideIndex);
      }
      if (payload.revealedAnswerId !== undefined) {
        setRevealedAnswerId(payload.revealedAnswerId);
      }
    });

    return () => unsubscribe();
  }, []);

  const slides = [
    { type: "HOOK", title: "Classroom Introduction Hook" },
    { type: "DEFINITION", title: "Verbatim Board Definition" },
    { type: "EXPLORER", stageIdx: 0, title: "Stage 1: Requirements" },
    { type: "EXPLORER", stageIdx: 1, title: "Stage 2: System Design" },
    { type: "EXPLORER", stageIdx: 2, title: "Stage 3: Coding & Implementation" },
    { type: "EXPLORER", stageIdx: 3, title: "Stage 4: Testing & QA" },
    { type: "EXPLORER", stageIdx: 4, title: "Stage 5: Deployment" },
    { type: "EXPLORER", stageIdx: 5, title: "Stage 6: Maintenance" },
    { type: "TOPPER", title: "Topper Paper Presentation" },
    { type: "QUIZ", mcqIdx: 0, title: "Classroom Checkpoint Q1" },
    { type: "QUIZ", mcqIdx: 1, title: "Classroom Checkpoint Q2" },
  ];

  const currentSlide = slides[activeSlideIndex] || slides[0];
  const currentStage: SDLCStage =
    activeTopic.conceptStages[currentSlide.stageIdx ?? 0] || activeTopic.conceptStages[0];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0f131a] text-slate-100 flex flex-col justify-between p-8 md:p-12 font-sans select-none">
      {/* Distraction-Free Projector Header */}
      <header className="flex items-center justify-between border-b-2 border-slate-800 pb-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-2xl flex items-center justify-center text-white font-black text-xl font-mono shadow-lg">
            CS
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-indigo-950 text-indigo-400 font-mono text-sm font-bold border border-indigo-800">
                {activeTopic.topicCode}
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {activeTopic.title}
              </h1>
            </div>
            <span className="text-sm font-mono text-slate-400">
              Single National Curriculum (PECTAA 2023) • Punjab Boards
            </span>
          </div>
        </div>

        <span className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-mono font-bold text-amber-400">
          PROJECTOR STAGE ACTIVE
        </span>
      </header>

      {/* Main Scaled-Up High-Contrast Content Stage */}
      <main className="flex-1 flex items-center justify-center py-8 px-4 overflow-hidden">
        {currentSlide.type === "HOOK" && (
          <div className="max-w-4xl text-center space-y-6 animate-in fade-in">
            <span className="px-4 py-1.5 rounded-full bg-amber-950/60 text-amber-400 font-mono font-bold text-sm border border-amber-800 inline-block">
              🏡 Real-Life Analogy Introduction
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Building a 4-Bedroom House vs Software Engineering
            </h2>
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <p className="urdu-script text-2xl md:text-3xl text-amber-200 font-bold leading-relaxed">
                کیا ہم زمین کا نقشہ اور مالک کی خواہشات معلوم کیے بغیر اینٹیں رکھنا شروع کر سکتے ہیں؟
              </p>
            </div>
          </div>
        )}

        {currentSlide.type === "DEFINITION" && (
          <div className="max-w-4xl space-y-6 text-center animate-in fade-in">
            <span className="px-4 py-1.5 rounded-full bg-indigo-950 text-indigo-400 font-mono font-bold text-sm border border-indigo-800 inline-block">
              Verbatim Textbook Definition
            </span>
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-indigo-500/40 text-xl md:text-2xl text-slate-100 font-medium leading-relaxed shadow-2xl">
              &ldquo;{activeTopic.verbatimDefinition}&rdquo;
            </div>
          </div>
        )}

        {currentSlide.type === "EXPLORER" && (
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-in fade-in">
            {/* Lane 1: Real World Analogy */}
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-amber-500/40 space-y-5 shadow-xl">
              <span className="px-3.5 py-1 rounded-full bg-amber-950 text-amber-400 text-sm font-mono font-bold border border-amber-800 inline-block">
                🏡 Lane 1: Real-World Analogy
              </span>
              <h3 className="text-2xl font-bold text-white">{currentStage.rwSub}</h3>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="urdu-script text-xl text-amber-200 font-semibold">{currentStage.rwUr}</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{currentStage.rwEn}</p>
              <div className="h-44 rounded-xl bg-slate-950 border border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: currentStage.rwSvgDark }} />
              </div>
            </div>

            {/* Lane 2: Software Architecture */}
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-teal-500/40 space-y-5 shadow-xl">
              <span className="px-3.5 py-1 rounded-full bg-teal-950 text-teal-400 text-sm font-mono font-bold border border-teal-800 inline-block">
                💻 Lane 2: Software Equivalent
              </span>
              <h3 className="text-2xl font-bold text-white">{currentStage.swSub}</h3>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <p className="text-sm text-teal-300 font-bold">{currentStage.swDel}</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-mono">
                Deliverables: SRS Document, DDS Schemas, Python/C++ Source Code.
              </p>
              <div className="h-44 rounded-xl bg-slate-950 border border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: currentStage.swSvgDark }} />
              </div>
            </div>
          </div>
        )}

        {currentSlide.type === "TOPPER" && activeTopic.topperSheet && (
          <div className="w-full max-w-4xl p-8 rounded-3xl bg-slate-900 border-2 border-indigo-500/40 space-y-6 shadow-2xl animate-in fade-in">
            <span className="px-4 py-1.5 rounded-full bg-amber-950 text-amber-400 font-mono font-bold text-sm border border-amber-800 inline-block">
              {activeTopic.topperSheet.title}
            </span>
            <h2 className="text-3xl font-black text-indigo-400 border-b-2 border-indigo-400 pb-2">
              {activeTopic.topperSheet.heading}
            </h2>
            <p className="text-lg text-slate-200 italic border-l-4 border-indigo-500 pl-4">
              &ldquo;{activeTopic.topperSheet.definitionText}&rdquo;
            </p>
          </div>
        )}

        {currentSlide.type === "QUIZ" && activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0] && (
          <div className="w-full max-w-4xl space-y-6 animate-in fade-in">
            <span className="px-4 py-1.5 rounded-full bg-indigo-950 text-indigo-400 font-mono font-bold text-sm border border-indigo-800 inline-block">
              Classroom Showdown Checkpoint
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0].statement}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0].options.map((opt, idx) => {
                const isCorrect = idx === activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0].correctOption;
                const isRevealed = revealedAnswerId !== null;

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border-2 text-lg font-semibold transition-all ${
                      isRevealed && isCorrect
                        ? "bg-emerald-950/80 border-emerald-400 text-emerald-200 font-bold scale-[1.02] shadow-xl"
                        : "bg-slate-900 border-slate-800 text-slate-200"
                    }`}
                  >
                    {opt} {isRevealed && isCorrect && "✓ (CORRECT ANSWER)"}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Projector Display Footer */}
      <footer className="flex items-center justify-between border-t-2 border-slate-800 pt-4 shrink-0 font-mono text-sm text-slate-500">
        <span>CS Studio 11 • Classroom Projector Mode</span>
        <span>HDMI 1080p Multimedia View</span>
      </footer>
    </div>
  );
}
