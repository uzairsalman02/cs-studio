"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Layers,
  Compass,
  PenTool,
  HelpCircle,
  Sun,
  Moon,
  Settings,
  Flame,
  ChevronLeft,
  ChevronRight,
  Award,
  CheckCircle2,
  Home,
  Code,
  AlertTriangle,
  RefreshCw,
  PlayCircle,
  Circle,
  FileText,
  CheckSquare,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";
import { UNIT_01_DATA } from "@/data/curriculum/unit-01";
import { Topic, SDLCStage } from "@/types/curriculum";

export interface TopicStudioProps {
  initialTopicId?: string;
}

export function TopicStudio({ initialTopicId = "topic-1.2" }: TopicStudioProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState(initialTopicId);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [activePhaseNumber, setActivePhaseNumber] = useState(1);

  // Active Topic Data
  const activeTopic: Topic =
    UNIT_01_DATA.topics.find((t) => t.id === selectedTopicId) || UNIT_01_DATA.topics[1];

  // Active SDLC Stage Data (default to Stage 1 if undefined)
  const currentPhaseData: SDLCStage =
    activeTopic.conceptStages[activePhaseNumber - 1] || activeTopic.conceptStages[0];

  // MCQ State
  const [selectedMcqOption, setSelectedMcqOption] = useState<number | null>(null);
  const [isMcqSubmitted, setIsMcqSubmitted] = useState(false);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(hasDarkClass);
  }, []);

  const handleThemeToggle = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const handleMcqSelect = (idx: number) => {
    if (isMcqSubmitted) return;
    setSelectedMcqOption(idx);
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between bg-slate-100 dark:bg-[#0f131a] text-slate-800 dark:text-slate-200 transition-colors font-sans">
      {/* 1. Header Layer */}
      <header className="h-16 w-full bg-white dark:bg-[#161b26] border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between z-40 shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
              CS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight">
                  CS Studio 11
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                  PECTAA 2023
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:inline-block">
                Punjab Boards • Grade 11 (1st Year)
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
          </Link>

          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center font-mono">
                US
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-none">
                    Uzair Salman
                  </span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 uppercase">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  Sargodha Board • 4 Day Streak <Flame className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                </span>
              </div>
            </div>

            <Link
              href="/admin"
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              title="Admin Studio Settings"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Middle Body (Fixed Left Syllabus Sidebar + Main 5-Layer Slide Studio) */}
      <div className="flex-1 flex overflow-hidden min-h-0 relative">
        {/* Fixed Left Syllabus Sidebar */}
        <aside className="w-72 h-full bg-white dark:bg-[#131722] border-r border-slate-200 dark:border-slate-800/90 flex flex-col shrink-0 overflow-hidden shadow-xs hidden md:flex">
          {/* Top Unit Banner */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#0f131a]/40 shrink-0 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> Current Unit
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                {UNIT_01_DATA.progressPercent}% Done
              </span>
            </div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
              Unit {UNIT_01_DATA.unitNumber}: {UNIT_01_DATA.title}
            </h2>
          </div>

          {/* Topics Scrollable List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
            <div className="px-2 py-1 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
              Syllabus Topics (PECTAA 2023)
            </div>

            {UNIT_01_DATA.topics.map((t) => {
              const isSelected = selectedTopicId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTopicId(t.id);
                    setCurrentStep(1);
                    setActivePhaseNumber(1);
                  }}
                  className={`w-full text-left flex items-start gap-2.5 p-2.5 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm font-semibold"
                      : "bg-white dark:bg-[#161b26] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <div className="pt-0.5 shrink-0">
                    {isSelected ? (
                      <PlayCircle className="w-4 h-4 text-indigo-400 dark:text-indigo-600 animate-pulse" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className={`text-[10px] font-mono ${isSelected ? "text-indigo-300 dark:text-indigo-600 font-bold" : "text-slate-400"}`}>
                        {t.topicCode}
                      </span>
                      <span className="text-[9px] font-mono opacity-80">{t.duration}</span>
                    </div>
                    <h3 className="text-xs leading-snug truncate font-medium">{t.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pinned Board Pairing Alert Card */}
          <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0f131a] shrink-0">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-300 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-amber-700 dark:text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Board Pairing 2026
              </div>
              <p className="text-[11px] leading-tight text-amber-800/90 dark:text-amber-200/90">
                {UNIT_01_DATA.pairingSchemeNote}
              </p>
            </div>
          </div>
        </aside>

        {/* Main 5-Layer Topic Studio Stage */}
        <main className="flex-1 h-full overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Progress & 5 Step Tabs Header */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40">
                  {activeTopic.topicCode}
                </span>
                <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                  {activeTopic.title}
                </h1>
              </div>
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                Step {currentStep} of 5
              </span>
            </div>

            {/* 5 Step Navigation Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {[
                { id: 1, label: "1. Definition", icon: BookOpen },
                { id: 2, label: "2. Concept & Diagram", icon: Layers },
                { id: 3, label: "3. Phase Explorer", icon: Compass },
                { id: 4, label: "4. Topper Sheet", icon: PenTool },
                { id: 5, label: "5. Practice Test", icon: HelpCircle },
              ].map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs font-bold"
                        : "bg-slate-50 dark:bg-[#131722] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-semibold leading-tight truncate">{step.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Step View Container */}
          <div>
            {/* Step 1: Definition Layer */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/40">
                      {activeTopic.examFrequencyBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      Past Papers: {activeTopic.pastPapers.join(", ")}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                    &ldquo;{activeTopic.verbatimDefinition}&rdquo;
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                      Board Marking Rubric Keywords Checklist
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "✓ Verbatim Definition (1 Mark)",
                        "✓ Key Deliverables & Artifacts (1.5 Marks)",
                        "✓ Sequential Flowchart / Tree Diagram (1.5 Marks)",
                        "✓ Correct Technical Terminology (1 Mark)",
                      ].map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Concept & Diagram Layer */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Real-World Analogy &amp; Visual Flowchart
                  </h3>

                  <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1">
                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase font-bold block">
                      عملی مثال (اردو)
                    </span>
                    <p className="urdu-script text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                      {currentPhaseData.rwUr}
                    </p>
                  </div>

                  {/* Cyclic Flowchart Vector SVG */}
                  <div className="p-4 bg-slate-50 dark:bg-[#0a0d13] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    <svg className="w-full h-full max-h-40" viewBox="0 0 500 140" fill="none">
                      <rect x="10" y="50" width="70" height="40" rx="6" fill="#4f46e5" />
                      <text x="22" y="74" fill="#fff" fontSize="10" fontWeight="bold">1. SRS</text>
                      <path d="M85 70 L115 70" stroke="#6366f1" strokeWidth="2" />

                      <rect x="120" y="50" width="70" height="40" rx="6" fill="#0d9488" />
                      <text x="130" y="74" fill="#fff" fontSize="10" fontWeight="bold">2. Design</text>
                      <path d="M195 70 L225 70" stroke="#0d9488" strokeWidth="2" />

                      <rect x="230" y="50" width="70" height="40" rx="6" fill="#d97706" />
                      <text x="240" y="74" fill="#fff" fontSize="10" fontWeight="bold">3. Code</text>
                      <path d="M305 70 L335 70" stroke="#d97706" strokeWidth="2" />

                      <rect x="340" y="50" width="70" height="40" rx="6" fill="#10b981" />
                      <text x="352" y="74" fill="#fff" fontSize="10" fontWeight="bold">4. Test</text>
                      <path d="M415 70 L445 70" stroke="#10b981" strokeWidth="2" />

                      <rect x="445" y="50" width="50" height="40" rx="6" fill="#64748b" />
                      <text x="450" y="74" fill="#fff" fontSize="9" fontWeight="bold">5. Deploy</text>
                    </svg>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                    💡 <strong className="text-slate-900 dark:text-slate-200">Paper Tip:</strong> {activeTopic.paperPresentationTip}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Phase Explorer Layer */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in">
                {/* Stage Stepper Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {activeTopic.conceptStages.map((stage) => (
                    <button
                      key={stage.stageNumber}
                      onClick={() => setActivePhaseNumber(stage.stageNumber)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        activePhaseNumber === stage.stageNumber
                          ? "bg-indigo-600 text-white border-indigo-600 font-bold shadow-xs"
                          : "bg-white dark:bg-[#161b26] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <span className="text-[10px] font-mono block opacity-80">Stage 0{stage.stageNumber}</span>
                      <span className="text-xs font-semibold leading-tight truncate block">{stage.stageTitle}</span>
                    </button>
                  ))}
                </div>

                {/* Symmetrical Dual-Lane Architecture Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Lane 1: Real-World Analogy */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-amber-400/60 dark:border-amber-500/40 space-y-4 shadow-xs">
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/50 inline-block">
                        🏡 Lane 1: Real-World Analogy
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {currentPhaseData.rwSub}
                      </h4>
                      <div className="p-3 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
                        <p className="urdu-script text-sm text-slate-800 dark:text-slate-200 font-medium">
                          {currentPhaseData.rwUr}
                        </p>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{currentPhaseData.rwEn}</p>
                    </div>
                    <div className="h-36 rounded-lg bg-slate-50 dark:bg-[#0a0d13] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                      <div dangerouslySetInnerHTML={{ __html: isDarkMode ? currentPhaseData.rwSvgDark : currentPhaseData.rwSvgLight }} />
                    </div>
                  </div>

                  {/* Lane 2: Software Equivalent */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-teal-400/60 dark:border-teal-500/40 space-y-4 shadow-xs">
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 text-xs font-mono font-bold border border-teal-200 dark:border-teal-800/50 inline-block">
                        💻 Lane 2: Software Equivalent
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {currentPhaseData.swSub}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{currentPhaseData.swDel}</p>
                    </div>
                    <div className="h-36 rounded-lg bg-slate-50 dark:bg-[#0a0d13] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                      <div dangerouslySetInnerHTML={{ __html: isDarkMode ? currentPhaseData.swSvgDark : currentPhaseData.swSvgLight }} />
                    </div>
                  </div>
                </div>

                {/* Fatal Warning Card */}
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 flex items-start gap-3 text-xs text-rose-900 dark:text-rose-200">
                  <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-700 dark:text-rose-300 font-mono uppercase text-[11px] block">
                      Fatal Consequence of Skipping Stage 0{activePhaseNumber}
                    </span>
                    <p className="text-rose-800/90 dark:text-rose-200/90 leading-relaxed">
                      {currentPhaseData.swWarn}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Topper Sheet Layer */}
            {currentStep === 4 && activeTopic.topperSheet && (
              <div className="space-y-6 animate-in fade-in">
                <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4 font-sans">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                    <span className="text-xs font-mono text-amber-400 font-bold">{activeTopic.topperSheet.title}</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">Marks: 5/5</span>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-slate-400">[ 605 Cut Marker Header ]</span>
                    <h2 className="text-xl font-black text-indigo-400 border-b-2 border-indigo-400 inline-block pb-1">
                      {activeTopic.topperSheet.heading}
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-3">
                      &ldquo;{activeTopic.topperSheet.definitionText}&rdquo;
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-mono text-amber-400 uppercase font-bold block">Presentation Rules:</span>
                      {activeTopic.topperSheet.presentationRules.map((rule, idx) => (
                        <p key={idx} className="text-xs font-mono text-slate-300">
                          • {rule}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Practice Test Layer */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in">
                {activeTopic.assessmentQuestions.map((q) => (
                  <div key={q.id} className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {q.subConceptTag || "Exam Checkpoint"}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">Board MCQ</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {q.statement}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleMcqSelect(idx)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all font-medium ${
                            isMcqSubmitted
                              ? idx === q.correctOption
                                ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold"
                                : selectedMcqOption === idx
                                ? "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-700 dark:text-rose-300 font-bold"
                                : "bg-slate-50 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-400"
                              : selectedMcqOption === idx
                              ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-300 font-bold"
                              : "bg-slate-50 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {!isMcqSubmitted ? (
                        <button
                          onClick={() => setIsMcqSubmitted(true)}
                          disabled={selectedMcqOption === null}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                            selectedMcqOption !== null
                              ? "bg-indigo-600 text-white hover:bg-indigo-500"
                              : "bg-slate-100 text-slate-400 cursor-not-allowed"
                          }`}
                        >
                          Check Answer
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedMcqOption(null);
                            setIsMcqSubmitted(false);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono flex items-center gap-1"
                        >
                          <RefreshCw className="w-3 h-3" /> Try Again
                        </button>
                      )}

                      {isMcqSubmitted && (
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {selectedMcqOption === q.correctOption
                            ? "✓ Correct Answer! Award 1 Mark"
                            : `Format: Option ${String.fromCharCode(65 + q.correctOption)} is correct`}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* 3. Bottom Step Navigation Layer */}
      <div className="h-14 w-full bg-white dark:bg-[#161b26] border-t border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shadow-xs shrink-0 z-40">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1) as any)}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
            currentStep === 1
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
              : "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300"
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous Step
        </button>

        <span className="text-xs font-mono font-bold text-slate-500">
          Step {currentStep} of 5
        </span>

        <button
          onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1) as any)}
          disabled={currentStep === 5}
          className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
            currentStep === 5
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-xs"
          }`}
        >
          <span>{currentStep === 5 ? "Completed ✓" : "Next Step"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4. Footer Layer */}
      <footer className="h-10 w-full bg-white dark:bg-[#161b26] border-t border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
        <span>CS Studio 11 • Single National Curriculum (PECTAA 2023)</span>
        <span className="hidden md:inline">Copyright © 2026 Uzair Salman. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default TopicStudio;
