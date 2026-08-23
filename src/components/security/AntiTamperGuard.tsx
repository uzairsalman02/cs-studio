"use client";

import React, { useEffect, useState, useCallback } from "react";
import { ShieldAlert } from "lucide-react";

export function AntiTamperGuard() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const triggerToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    const timer = setTimeout(() => {
      setToastVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerToast("🔒 Protected Educational Material • Source inspection disabled");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12, Ctrl+Shift+I / Cmd+Option+I, Ctrl+Shift+J / Cmd+Option+J, Ctrl+U / Cmd+U
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;
      const isOptionOrShift = e.altKey || e.shiftKey;

      if (
        e.key === "F12" ||
        (isCmdOrCtrl && isOptionOrShift && (e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) ||
        (isCmdOrCtrl && (e.key === "u" || e.key === "U"))
      ) {
        e.preventDefault();
        triggerToast("🔒 Protected Educational Material • Source inspection disabled");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerToast]);

  if (!toastVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-4 py-3 bg-surface border border-border text-foreground text-sm rounded-lg shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      role="alert"
    >
      <ShieldAlert className="w-4 h-4 text-analogy shrink-0" />
      <span className="font-medium tracking-wide">{toastMessage}</span>
    </div>
  );
}

export default AntiTamperGuard;
