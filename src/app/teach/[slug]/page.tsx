"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Presentation,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Mic,
  Award,
  Sparkles,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Clock,
  BookOpen,
  Layers,
  PenTool,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { broadcastState, SyncPayload } from "@/lib/sync-channel";
import { UNIT_01_DATA } from "@/data/curriculum/unit-01";
import { Topic, SDLCStage } from "@/types/curriculum";

export default function TeacherPresenterConsole({
  params,
}: {
  params: { slug: string };
}) {
  const topicSlug = params.slug || "sdlc-phases-and-workflow";
  const activeTopic: Topic =
    UNIT_01_DATA.topics.find((t) => t.slug === topicSlug) || UNIT_01_DATA.topics[1];

  // Presenter State
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [revealedAnswerId, setRevealedAnswerId] = useState<string | null>(null);
  const [timerSeconds, setTimerSeconds] = useState(1800); // 30 minutes period countdown
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Synchronize state changes to BroadcastChannel
  const syncToProjector = (
    slideIdx: number,
    revealedId: string | null,
    trigger: SyncPayload["actionTrigger"]
  ) => {
    broadcastState({
      activeTopicSlug: topicSlug,
      activeSlideIndex: slideIdx,
      revealedAnswerId: revealedId,
      timerRemainingSeconds: timerSeconds,
      actionTrigger: trigger,
    });
  };

  // Lesson Roadmap Slides (5 core steps + 6 concept stages = 11 preview slides)
  const slides = [
    { type: "HOOK", title: "Verbal Classroom Hook", duration: "3m" },
    { type: "DEFINITION", title: "Textbook Definition & Rubric", duration: "5m" },
    { type: "EXPLORER", title: "SDLC Stage 1: Requirements", duration: "2.5m", stageIdx: 0 },
    { type: "EXPLORER", title: "SDLC Stage 2: System Design", duration: "2.5m", stageIdx: 1 },
    { type: "EXPLORER", title: "SDLC Stage 3: Coding & Code", duration: "2.5m", stageIdx: 2 },
    { type: "EXPLORER", title: "SDLC Stage 4: Testing & QA", duration: "2.5m", stageIdx: 3 },
    { type: "EXPLORER", title: "SDLC Stage 5: Deployment", duration: "2.5m", stageIdx: 4 },
    { type: "EXPLORER", title: "SDLC Stage 6: Maintenance", duration: "2.5m", stageIdx: 5 },
    { type: "TOPPER", title: "605 Cut Marker Presentation", duration: "5m" },
    { type: "QUIZ", title: "Rapid-Fire Checkpoint Q1", duration: "3.5m", mcqIdx: 0 },
    { type: "QUIZ", title: "Rapid-Fire Checkpoint Q2", duration: "3.5m", mcqIdx: 1 },
  ];

  const currentSlide = slides[activeSlideIndex] || slides[0];
  const currentStage: SDLCStage =
    activeTopic.conceptStages[currentSlide.stageIdx ?? 0] || activeTopic.conceptStages[0];

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const handleNextSlide = () => {
    if (activeSlideIndex < slides.length - 1) {
      const nextIdx = activeSlideIndex + 1;
      setActiveSlideIndex(nextIdx);
      setRevealedAnswerId(null);
      syncToProjector(nextIdx, null, "CHANGE_SLIDE");
    }
  };

  const handlePrevSlide = () => {
    if (activeSlideIndex > 0) {
      const prevIdx = activeSlideIndex - 1;
      setActiveSlideIndex(prevIdx);
      setRevealedAnswerId(null);
      syncToProjector(prevIdx, null, "CHANGE_SLIDE");
    }
  };

  const handleSelectSlide = (idx: number) => {
    setActiveSlideIndex(idx);
    setRevealedAnswerId(null);
    syncToProjector(idx, null, "CHANGE_SLIDE");
  };

  const handleRevealAnswer = (answerId: string) => {
    const nextRevealed = revealedAnswerId === answerId ? null : answerId;
    setRevealedAnswerId(nextRevealed);
    syncToProjector(activeSlideIndex, nextRevealed, "REVEAL_ANSWER");
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between bg-slate-950 text-slate-100 font-sans">
      {/* 1. Dark Top Command Bar */}
      <header className="h-16 w-full bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between z-40 shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
            TCH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm text-white">{activeTopic.title}</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 font-bold">
                {activeTopic.topicCode}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Teacher Presenter Console • Synced via Web BroadcastChannel
            </span>
          </div>
        </div>

        {/* Center Live Countdown Timer Controls */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="font-mono font-black text-base text-amber-400">
            {formatTimer(timerSeconds)}
          </span>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            title={isTimerRunning ? "Pause Timer" : "Start Class Timer"}
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setTimerSeconds(1800)}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Reset 30m Timer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Launch Projector Button */}
        <div className="flex items-center gap-3">
          <Link
            href={`/stage/${topicSlug}`}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono shadow-md transition-all flex items-center gap-2"
          >
            <Presentation className="w-4 h-4" /> Launch Projector Stage ↗
          </Link>
        </div>
      </header>

      {/* 2. Middle Body: Left Lesson Roadmap + Main Stage Canvas */}
      <div className="flex-1 flex overflow-hidden min-h-0 relative">
        {/* Left Lesson Roadmap Sidebar */}
        <aside className="w-80 h-full bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 overflow-hidden">
          <div className="p-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> Lesson Roadmap
            </span>
            <span className="text-[10px] font-mono text-slate-400 font-bold">30 Mins Total</span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            {slides.map((s, idx) => {
              const isCurrent = activeSlideIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                    isCurrent
                      ? "bg-indigo-600 text-white border-indigo-500 font-bold shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`text-[10px] font-mono ${isCurrent ? "text-indigo-200 font-bold" : "text-slate-500"}`}>
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs leading-snug truncate font-medium">{s.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono shrink-0 px-2 py-0.5 rounded ${isCurrent ? "bg-indigo-700 text-white" : "bg-slate-800 text-slate-400"}`}>
                    {s.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Stage Preview Canvas */}
        <main className="flex-1 h-full overflow-y-auto p-6 md:p-8 space-y-6 bg-slate-950">
          {/* Amber Verbal Prompt Banner for Teacher */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60 text-amber-200 flex flex-wrap items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <Mic className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">
                  استاد کے لیے خصوصی رہنمائی (Teacher Spoken Hook)
                </span>
                <p className="urdu-script text-base text-amber-100 font-semibold leading-relaxed">
                  {currentStage.teacherSpokenCue || "کلاس سے سوال پوچھیں: کیا ہم ضرورت معلوم کیے بغیر سافٹ ویئر تیار کر سکتے ہیں؟"}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/40 shrink-0 flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Ask Classroom First
            </span>
          </div>

          {/* Slide Preview Canvas Box */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6 min-h-[360px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-indigo-400 font-bold">
                  PROJECTOR PREVIEW • SLIDE {activeSlideIndex + 1} OF {slides.length}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  Stage: {currentStage.stageTitle}
                </span>
              </div>

              {/* Dynamic Slide Preview Content */}
              {currentSlide.type === "HOOK" && (
                <div className="space-y-3">
                  <h2 className="text-2xl font-black text-white">Classroom Discussion Hook</h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Start period by asking students to relate building a physical 4-bedroom house with owner requirements to engineering a software system.
                  </p>
                </div>
              )}

              {currentSlide.type === "DEFINITION" && (
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-white">Verbatim Textbook Definition</h2>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-indigo-300 leading-relaxed font-mono">
                    &ldquo;{activeTopic.verbatimDefinition}&rdquo;
                  </div>
                </div>
              )}

              {currentSlide.type === "EXPLORER" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/40 space-y-2">
                    <span className="text-xs font-mono text-amber-400 font-bold">🏡 Real-World Analogy</span>
                    <h3 className="text-sm font-bold text-white">{currentStage.rwSub}</h3>
                    <p className="urdu-script text-sm text-amber-200">{currentStage.rwUr}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/40 space-y-2">
                    <span className="text-xs font-mono text-teal-400 font-bold">💻 Software Architecture</span>
                    <h3 className="text-sm font-bold text-white">{currentStage.swSub}</h3>
                    <p className="text-xs text-slate-300 font-semibold">{currentStage.swDel}</p>
                  </div>
                </div>
              )}

              {currentSlide.type === "TOPPER" && activeTopic.topperSheet && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold">605 Cut Marker Board Guide</span>
                  <h3 className="text-lg font-black text-indigo-400">{activeTopic.topperSheet.heading}</h3>
                  <p className="text-xs text-slate-300 italic">&ldquo;{activeTopic.topperSheet.definitionText}&rdquo;</p>
                </div>
              )}

              {currentSlide.type === "QUIZ" && activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0] && (
                <div className="space-y-3">
                  <span className="text-xs font-mono text-indigo-400 font-bold">Rapid-Fire Diagnostic Question</span>
                  <h3 className="text-base font-bold text-white">
                    {activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0].statement}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0].options.map((opt, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs font-medium ${
                          revealedAnswerId === `mcq-${currentSlide.mcqIdx}-${idx}` || idx === activeTopic.assessmentQuestions[currentSlide.mcqIdx ?? 0].correctOption
                            ? "bg-emerald-950 border-emerald-500 text-emerald-300 font-bold"
                            : "bg-slate-950 border-slate-800 text-slate-300"
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Controllers Row */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={handlePrevSlide}
                disabled={activeSlideIndex === 0}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 ${
                  activeSlideIndex === 0 ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Previous Slide
              </button>

              {currentSlide.type === "QUIZ" && (
                <button
                  onClick={() => handleRevealAnswer(`mcq-${currentSlide.mcqIdx}-correct`)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono shadow-md flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>{revealedAnswerId ? "Hide Answer on Projector" : "⚡ Reveal Answer on Projector"}</span>
                </button>
              )}

              <button
                onClick={handleNextSlide}
                disabled={activeSlideIndex === slides.length - 1}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-1.5 ${
                  activeSlideIndex === slides.length - 1 ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                <span>Next Slide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Board Marking Guidance Callout */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" /> Board Exam Marking Guidance
            </div>
            <p className="text-slate-300 leading-relaxed">
              Official BISE Sargodha/Lahore Marking Scheme: 1.5 Marks deducted if SRS and DDS deliverables are omitted. Remind students to highlight key technical terms with 605 Cut Marker.
            </p>
          </div>
        </main>
      </div>

      {/* 3. Bottom Status Footer */}
      <footer className="h-10 w-full bg-slate-950 border-t border-slate-800 px-6 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>CS Studio 11 • Teacher Presenter Console</span>
        <span className="text-emerald-400 font-bold">● Broadcast Channel Active</span>
      </footer>
    </div>
  );
}
