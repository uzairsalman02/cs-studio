"use client";

import React, { useState, useEffect } from "react";
import { X, Timer, CheckCircle, Award, BarChart2, Sparkles, RefreshCw } from "lucide-react";

export interface PollQuestion {
  statement: string;
  options: string[];
  correctOption: number;
  rubricNotes: string;
  boardBadge?: string;
}

export interface ClassroomPollModalProps {
  isOpen: boolean;
  onClose: () => void;
  question?: PollQuestion;
}

const DEFAULT_QUESTION: PollQuestion = {
  statement: "Which document represents the formal primary output of the Requirement Analysis phase in SDLC?",
  options: [
    "A. Project Scope Charter",
    "B. Software Requirement Specification (SRS)",
    "C. Design Document Specification (DDS)",
    "D. User Acceptance Testing Report"
  ],
  correctOption: 1,
  rubricNotes: "Official Board Answer: SRS (Software Requirement Specification). Award 1 mark for correct option and mention of SRS in theoretical long answers. (BISE Lahore 2023 / Rawalpindi 2022)",
  boardBadge: "BISE Lahore 2023 / Rawalpindi 2022"
};

export function ClassroomPollModal({ isOpen, onClose, question = DEFAULT_QUESTION }: ClassroomPollModalProps) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  // Simulated class voting percentages
  const pollResults = [12, 78, 6, 4];

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(30);
      setIsRevealed(false);
      setSelectedOpt(null);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRevealed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#0F172A] border-2 border-indigo-500/60 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 space-y-6 text-white font-sans">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-slate-700 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <BarChart2 className="w-6 h-6 text-indigo-400" /> Classroom Live Poll Showdown
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* 30s Countdown Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-sm font-bold border ${
              timeLeft > 10
                ? "bg-slate-800 text-emerald-400 border-emerald-500/40"
                : "bg-rose-950 text-rose-400 border-rose-500/50 animate-pulse"
            }`}>
              <Timer className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projector-Optimized Question Statement */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
              Projector Question #1
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
              {question.boardBadge || "Board Exam Checkpoint"}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-snug">
            {question.statement}
          </h3>
        </div>

        {/* Options Grid & Live Vote Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((opt, idx) => {
            const isCorrect = idx === question.correctOption;
            const percentage = pollResults[idx] || 0;

            return (
              <button
                key={idx}
                onClick={() => setSelectedOpt(idx)}
                className={`relative p-4 rounded-2xl border-2 text-left transition-all overflow-hidden flex flex-col justify-between ${
                  isRevealed
                    ? isCorrect
                      ? "bg-emerald-950/60 border-emerald-500 text-white"
                      : "bg-slate-900/60 border-slate-800 text-slate-400"
                    : selectedOpt === idx
                    ? "bg-indigo-950/80 border-indigo-500 text-white"
                    : "bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-600"
                }`}
              >
                {/* Live Vote Percentage Fill */}
                {isRevealed && (
                  <div
                    className={`absolute top-0 left-0 bottom-0 opacity-25 pointer-events-none transition-all duration-1000 ${
                      isCorrect ? "bg-emerald-500" : "bg-indigo-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                )}

                <div className="relative z-10 flex items-center justify-between gap-2 mb-2">
                  <span className="text-base font-bold leading-snug">{opt}</span>
                  {isRevealed && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                </div>

                {isRevealed && (
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono pt-2 border-t border-slate-800">
                    <span className="text-slate-400">Class Votes</span>
                    <span className={`font-bold ${isCorrect ? "text-emerald-400" : "text-slate-300"}`}>
                      {percentage}% ({Math.round(percentage * 0.4)} students)
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Rubric Reveal & Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{isRevealed ? "Hide Rubric" : "⚡ Reveal Answer & Class Votes"}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all ml-auto"
          >
            Close Stage Modal
          </button>
        </div>

        {/* Rubric Breakdown Box */}
        {isRevealed && (
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs leading-relaxed space-y-1 animate-in fade-in">
            <span className="font-mono text-amber-400 uppercase font-bold text-[11px] block">
              Punjab Board Official Marking Rubric:
            </span>
            <p className="text-slate-200">{question.rubricNotes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassroomPollModal;
