"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, Award, RefreshCw, ArrowRight } from "lucide-react";

export interface MCQQuestion {
  id: string;
  statement: string;
  options: string[];
  correctOption: number; // 0-indexed
  rubricNotes?: string | null;
}

export interface CheckpointMCQProps {
  questions: MCQQuestion[];
}

export function CheckpointMCQ({ questions }: CheckpointMCQProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (submitted[questionId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleCheckAnswer = (questionId: string) => {
    if (selectedAnswers[questionId] === undefined) return;
    setSubmitted((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleReset = (questionId: string) => {
    setSelectedAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  if (!questions || questions.length === 0) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-analogy" />
          <h3 className="text-base font-bold text-foreground">Interactive Board Exam Checkpoints</h3>
        </div>
        <span className="px-2.5 py-1 rounded-md bg-analogy/10 text-analogy text-xs font-mono font-bold border border-analogy/20">
          Self Assessment
        </span>
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isSelected = selectedAnswers[q.id] !== undefined;
          const isSubmitted = submitted[q.id];
          const selectedIdx = selectedAnswers[q.id];
          const isCorrect = selectedIdx === q.correctOption;

          return (
            <div
              key={q.id || idx}
              className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-4 transition-all"
            >
              {/* Question Header & Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-wider">
                    Question {idx + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground leading-relaxed">
                    {q.statement}
                  </h4>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-canvas text-muted text-[10px] font-mono border border-border shrink-0 flex items-center gap-1">
                  <Award className="w-3 h-3 text-analogy" /> Punjab Board MCQ
                </span>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {q.options.map((option, optIdx) => {
                  const isOptionSelected = selectedIdx === optIdx;
                  const isThisCorrectOption = optIdx === q.correctOption;

                  let optionStyle =
                    "bg-canvas border-border text-foreground/90 hover:border-primary/50";

                  if (isSubmitted) {
                    if (isThisCorrectOption) {
                      optionStyle = "bg-tech/15 border-tech text-tech font-bold";
                    } else if (isOptionSelected && !isCorrect) {
                      optionStyle = "bg-primary/15 border-primary text-primary font-bold";
                    } else {
                      optionStyle = "bg-canvas/50 border-border/40 text-muted opacity-60";
                    }
                  } else if (isOptionSelected) {
                    optionStyle = "bg-primary/10 border-primary text-primary font-semibold shadow-sm";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      disabled={isSubmitted}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-2 ${optionStyle}`}
                    >
                      <span>{option}</span>
                      {isSubmitted && isThisCorrectOption && (
                        <CheckCircle2 className="w-4 h-4 text-tech shrink-0" />
                      )}
                      {isSubmitted && isOptionSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-primary shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit / Reset Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-border/60">
                {!isSubmitted ? (
                  <button
                    onClick={() => handleCheckAnswer(q.id)}
                    disabled={!isSelected}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-primary text-white shadow-md hover:bg-primary/90"
                        : "bg-surface-hover text-muted cursor-not-allowed border border-border"
                    }`}
                  >
                    <span>Check Answer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleReset(q.id)}
                    className="px-3 py-1.5 rounded-lg bg-canvas border border-border text-muted hover:text-foreground text-xs font-mono transition-all flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3" /> Try Again
                  </button>
                )}

                {isSubmitted && (
                  <span
                    className={`text-xs font-mono font-bold ${
                      isCorrect ? "text-tech" : "text-primary"
                    }`}
                  >
                    {isCorrect ? "✓ Correct Answer!" : "✗ Incorrect - See Rubric"}
                  </span>
                )}
              </div>

              {/* Rubric Notes Explanation */}
              {isSubmitted && q.rubricNotes && (
                <div className="p-3.5 rounded-xl bg-canvas border border-border text-xs text-muted leading-relaxed space-y-1 animate-in fade-in">
                  <span className="font-mono text-[10px] text-analogy uppercase font-bold block">
                    Board Marking Rubric Explanation:
                  </span>
                  <p className="text-foreground/90">{q.rubricNotes}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckpointMCQ;
