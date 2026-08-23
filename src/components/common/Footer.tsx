"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="h-8 w-full bg-surface/90 border-t border-border px-6 flex items-center justify-between text-[11px] text-muted shrink-0 z-30">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-tech inline-block" />
        <span>Punjab Curriculum & Textbook Board (PCTB) • Class 11 Computer Science</span>
      </div>
      <div className="font-mono text-[10px]">
        Copyright © 2026 Uzair Salman. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
