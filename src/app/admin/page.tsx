"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  BookOpen,
  HelpCircle,
  Settings,
  LayoutDashboard,
  ExternalLink,
  Edit,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
} from "lucide-react";
import { useBrand } from "@/context/BrandContext";

export default function AdminDashboardOverview() {
  const { settings } = useBrand();

  const manifestTopics = [
    {
      code: "Topic 1.1",
      title: "Software Basics & Classification",
      unit: "Unit 1",
      status: "Published",
      svgCount: 2,
      topperSheet: "Available ✓",
      learnLink: "/learn/punjab-11/unit-01/topic-1-1",
      teachLink: "/teach/software-basics-and-classification",
    },
    {
      code: "Topic 1.2",
      title: "Software Development Life Cycle (SDLC)",
      unit: "Unit 1",
      status: "Published",
      svgCount: 12,
      topperSheet: "Available ✓",
      learnLink: "/learn/punjab-11/unit-01/topic-1-2",
      teachLink: "/teach/sdlc-phases-and-workflow",
    },
    {
      code: "Topic 1.3",
      title: "Waterfall Model & V-Model",
      unit: "Unit 1",
      status: "Published",
      svgCount: 4,
      topperSheet: "Available ✓",
      learnLink: "/learn/punjab-11/unit-01/topic-1-3",
      teachLink: "/teach/sdlc-phases-and-workflow",
    },
    {
      code: "Topic 1.4",
      title: "Agile & Extreme Programming",
      unit: "Unit 1",
      status: "Draft",
      svgCount: 2,
      topperSheet: "Pending",
      learnLink: "/learn/punjab-11/unit-01/topic-1-4",
      teachLink: "/teach/sdlc-phases-and-workflow",
    },
    {
      code: "Topic 1.5",
      title: "System Design Tools & Diagrams",
      unit: "Unit 1",
      status: "Draft",
      svgCount: 3,
      topperSheet: "Pending",
      learnLink: "/learn/punjab-11/unit-01/topic-1-5",
      teachLink: "/teach/sdlc-phases-and-workflow",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between font-sans">
      {/* 1. Super Admin TopBar */}
      <header className="h-16 w-full bg-slate-950 border-b border-slate-800 px-6 flex items-center justify-between z-40 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
            {settings.logoText || "CS"}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base text-white">{settings.appName}</h1>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                Production Live
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Super Admin Management Portal &amp; Telemetry
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Student View
          </Link>
          <Link
            href="/admin/settings"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono shadow-md transition-all flex items-center gap-2"
          >
            <Settings className="w-4 h-4" /> Brand &amp; Appearance Settings
          </Link>
        </div>
      </header>

      {/* 2. Main Admin Dashboard Body */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-8 space-y-8">
        {/* Top Hero Banner */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 text-xs font-mono font-bold border border-indigo-800 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Super Admin Credentials Verified
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Curriculum Control &amp; Branding Engine
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Manage platform identity ({settings.appName} • {settings.badgeText}), inspect curriculum topic manifests, and configure global appearance settings.
            </p>
          </div>

          <Link
            href="/admin/settings"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-500 hover:opacity-90 text-white font-bold text-xs font-mono shadow-lg transition-all flex items-center gap-2 shrink-0"
          >
            <Settings className="w-4 h-4" /> Edit Global Settings
          </Link>
        </div>

        {/* 4-Card System Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                Enrolled Students
              </span>
              <div className="p-2 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white font-mono">1,420</h3>
              <p className="text-[11px] text-slate-400 font-medium">BISE Sargodha &amp; Lahore</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                Curriculum Coverage
              </span>
              <div className="p-2 rounded-xl bg-teal-950 text-teal-400 border border-teal-800">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white font-mono">6 / 6 Units</h3>
              <p className="text-[11px] text-slate-400 font-medium">Single National Curriculum</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                Question Bank
              </span>
              <div className="p-2 rounded-xl bg-amber-950 text-amber-400 border border-amber-800">
                <HelpCircle className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white font-mono">850 Qs</h3>
              <p className="text-[11px] text-slate-400 font-medium">Mapped with Rubric Notes</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold">
                Security Status
              </span>
              <div className="p-2 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-emerald-400 font-mono">Active ✓</h3>
              <p className="text-[11px] text-slate-400 font-medium">Anti-Tamper Guard Active</p>
            </div>
          </div>
        </div>

        {/* Curriculum Topic Manifest Table */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Topic Manifest</h3>
              <p className="text-xs text-slate-400">
                Manage, preview, and audit published topics across Grade 11 CS syllabus.
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-400 font-bold">
              {manifestTopics.length} Topics Cataloged
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Topic Code</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">SVG Vectors</th>
                  <th className="py-3 px-4">Topper Guide</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {manifestTopics.map((topic, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-400">
                      {topic.code}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {topic.title}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono">
                      {topic.unit}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          topic.status === "Published"
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                            : "bg-amber-950 text-amber-400 border border-amber-800"
                        }`}
                      >
                        {topic.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">
                      {topic.svgCount} Vectors
                    </td>
                    <td className="py-3.5 px-4 font-mono text-emerald-400">
                      {topic.topperSheet}
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <Link
                        href={topic.learnLink}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-mono text-[11px] transition-colors"
                      >
                        <span>Student View</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <Link
                        href={topic.teachLink}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-indigo-950 hover:bg-indigo-900 text-indigo-300 border border-indigo-800 font-mono text-[11px] transition-colors"
                      >
                        <span>Teacher Console</span>
                        <Edit className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-10 w-full bg-slate-950 border-t border-slate-800 px-6 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>{settings.appName} • Super Admin Management Portal</span>
        <span>Copyright © 2026 {settings.copyrightHolder}</span>
      </footer>
    </div>
  );
}
