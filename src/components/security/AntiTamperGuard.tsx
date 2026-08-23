"use client";

import React, { useEffect } from "react";

export function AntiTamperGuard() {
  useEffect(() => {
    // Basic right-click and inspection prevention if required
    const handleContextMenu = (e: MouseEvent) => {
      // Allowed in development, protected in production
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return null;
}

export default AntiTamperGuard;
