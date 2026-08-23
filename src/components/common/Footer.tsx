"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-8 w-full bg-white dark:bg-[#161b26] border-t border-slate-200 dark:border-slate-800/90 px-4 md:px-6 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono z-40 shrink-0">
      {/* Left Side: Brand & SNC Attribution */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-slate-700 dark:text-slate-300">CS Studio 11</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <BookOpen className="w-3 h-3 text-indigo-500" /> Single National Curriculum (PECTAA 2023)
        </span>
      </div>

      {/* Center: Legal Copyright */}
      <div className="hidden md:flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
        <span>Copyright © 2026 Uzair Salman. All Rights Reserved.</span>
      </div>

      {/* Right Side: Links */}
      <div className="flex items-center gap-3">
        <Link href="/admin" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
          Admin Portal
        </Link>
        <span>•</span>
        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
          <ShieldCheck className="w-3 h-3" /> Anti-Tamper Active
        </span>
      </div>
    </footer>
  );
}

export default Footer;
