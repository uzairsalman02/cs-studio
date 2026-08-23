"use client";

import React from "react";
import { BookOpen, Flame, Clock, ArrowRight, ShieldCheck, Layers, HelpCircle, CheckCircle } from "lucide-react";

export default function TopicPage({
  params,
}: {
  params: { curriculum: string; unit: string; topic: string };
}) {
  const topicId = params.topic.replace("topic-", "");

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-in fade-in duration-300">
      {/* Topic Hero Banner */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-surface border border-border shadow-xl overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Unit 1 • Topic {topicId}
          </span>
          <span className="px-3 py-1 rounded-full bg-analogy/10 text-analogy text-xs font-mono font-medium border border-analogy/20 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-analogy" /> Pairing Scheme: 1 Long Q + 2 Short Qs
          </span>
          <span className="px-3 py-1 rounded-full bg-canvas text-muted text-xs font-mono border border-border flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-tech" /> 25 Mins Study
          </span>
        </div>

        {/* Hero Title & Description */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            Software Development Life Cycle (SDLC)
          </h1>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
            A systematic, phased framework used by software engineering teams to design, develop, test, and deploy high-quality software applications.
          </p>
        </div>

        {/* Urdu Introduction Hook */}
        <div className="p-4 rounded-2xl bg-canvas border border-border space-y-1">
          <span className="text-[10px] font-mono text-analogy uppercase tracking-wider">Urdu Pedagogy Hook</span>
          <p className="urdu-script text-base text-foreground font-semibold">
            سافٹ ویئر ڈیولپمنٹ لائف سائیکل (SDLC) ایک منظم طریقہ کار ہے جس کے ذریعے سافٹ ویئر تیار، ٹیسٹ اور انسٹال کیا جاتا ہے۔
          </p>
        </div>
      </div>

      {/* SDLC 6 Core Phases Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" /> The 6 Core Phases of SDLC
          </h2>
          <span className="text-xs text-muted font-mono">Curriculum Standard</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { phase: "01", name: "Requirement Analysis", desc: "Gathering business needs & user requirements" },
            { phase: "02", name: "System Design", desc: "Architecture, data models & UI mockups" },
            { phase: "03", name: "Coding & Implementation", desc: "Writing source code using programming languages" },
            { phase: "04", name: "Testing & QA", desc: "Verifying bugs, security & functionality" },
            { phase: "05", name: "Deployment & Release", desc: "Installing system on production environment" },
            { phase: "06", name: "Maintenance & Support", desc: "Fixing issues & updating features post-launch" },
          ].map((p) => (
            <div
              key={p.phase}
              className="p-4 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                  Phase {p.phase}
                </span>
                <CheckCircle className="w-4 h-4 text-tech opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Call to Action Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/15 via-surface to-canvas border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-analogy" /> Interactive Exam Self-Assessment
          </h4>
          <p className="text-xs text-muted">
            Test your understanding of SDLC phases with Board Exam multiple-choice & short questions.
          </p>
        </div>
        <button className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md shrink-0">
          <span>Start Practice Quiz</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
