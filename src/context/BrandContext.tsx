"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ColorScheme = "indigo" | "emerald" | "blue" | "amber";

export interface BrandSettings {
  appName: string;
  badgeText: string;
  subtitle: string;
  logoImageUrl: string | null;
  logoText: string;
  colorScheme: ColorScheme;
  copyrightHolder: string;
}

const DEFAULT_BRAND_SETTINGS: BrandSettings = {
  appName: "CS Studio 11",
  badgeText: "PECTAA 2023",
  subtitle: "Punjab Boards • Grade 11 (1st Year)",
  logoImageUrl: null,
  logoText: "CS",
  colorScheme: "indigo",
  copyrightHolder: "Uzair Salman",
};

interface BrandContextType {
  settings: BrandSettings;
  updateBrandSettings: (newSettings: Partial<BrandSettings>) => void;
  resetBrandSettings: () => void;
}

const BrandContext = createContext<BrandContextType>({
  settings: DEFAULT_BRAND_SETTINGS,
  updateBrandSettings: () => {},
  resetBrandSettings: () => {},
});

const STORAGE_KEY = "cs_studio_brand_settings";

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<BrandSettings>(DEFAULT_BRAND_SETTINGS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSettings({ ...DEFAULT_BRAND_SETTINGS, ...JSON.parse(saved) });
      }
    } catch (err) {
      console.warn("Could not load brand settings from localStorage:", err);
    }
  }, []);

  const updateBrandSettings = (newSettings: Partial<BrandSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.warn("Could not save brand settings to localStorage:", err);
      }
      return updated;
    });
  };

  const resetBrandSettings = () => {
    setSettings(DEFAULT_BRAND_SETTINGS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn("Could not clear brand settings from localStorage:", err);
    }
  };

  return (
    <BrandContext.Provider value={{ settings, updateBrandSettings, resetBrandSettings }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}
