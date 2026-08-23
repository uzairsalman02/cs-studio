"use client";

import React, { useState } from "react";
import { Header } from "@/components/common/Header";
import { FixedSidebar } from "@/components/common/FixedSidebar";
import { Footer } from "@/components/common/Footer";

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeMode, setActiveMode] = useState<"student" | "projector">("student");

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between bg-slate-50 dark:bg-[#0f131a] text-slate-900 dark:text-slate-100 font-sans">
      {/* Fixed Top Header */}
      <Header
        activeMode={activeMode}
        onModeChange={(mode) => setActiveMode(mode)}
      />

      {/* Middle Section: Pinned Sidebar & Main Workspace */}
      <div className="flex-1 flex overflow-hidden min-h-0 relative">
        {/* Pinned Left Sidebar */}
        <FixedSidebar />

        {/* Main Interactive Workspace */}
        <main className="flex-1 h-full overflow-y-auto p-6 md:p-8 bg-slate-50 dark:bg-[#0f131a]">
          {children}
        </main>
      </div>

      {/* Branded Bottom Footer */}
      <Footer />
    </div>
  );
}
