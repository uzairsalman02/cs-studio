"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Layers,
  Compass,
  PenTool,
  HelpCircle,
  Sun,
  Moon,
  Settings,
  Flame,
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  CheckCircle2,
  Home,
  Code,
  AlertTriangle,
  RefreshCw,
  ArrowRight,
  FileText,
  CheckSquare,
} from "lucide-react";

export function TopicStudio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [activePhase, setActivePhase] = useState(1);

  // MCQ State
  const [mcq1Selected, setMcq1Selected] = useState<number | null>(null);
  const [mcq1Submitted, setMcq1Submitted] = useState(false);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(hasDarkClass);
  }, []);

  const handleThemeToggle = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const phasesData = [
    {
      stageNumber: 1,
      stageTitle: "Requirement Gathering & Analysis",
      rwSub: "Client Survey & Land Plot",
      rwEn: "Surveying the land plot and meeting the family to decide how many bedrooms, bathrooms, and parking spaces are required.",
      rwUr: "گھر بنانے سے پہلے فیملی سے مل کر کمروں، کچن اور بجٹ کی تفصیلی ضروریات معلوم کرنا۔",
      rwVisLabel: "Plot & Needs Survey",
      rwSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="15" width="160" height="100" rx="6" fill="#131720" stroke="#d97706" strokeWidth="1.5" />
          <text x="45" y="40" fill="#f59e0b" fontWeight="bold" fontSize="11">Owner Wishlist</text>
          <circle cx="55" cy="62" r="3.5" fill="#10b981" />
          <text x="70" y="66" fill="#94a3b8" fontSize="10">4 Bedrooms</text>
          <circle cx="55" cy="84" r="3.5" fill="#10b981" />
          <text x="70" y="88" fill="#94a3b8" fontSize="10">Double Garage</text>
          <circle cx="55" cy="106" r="3.5" fill="#10b981" />
          <text x="70" y="110" fill="#94a3b8" fontSize="10">Solar Wiring</text>
          <rect x="220" y="20" width="150" height="90" rx="6" fill="#181d26" stroke="#475569" />
          <text x="240" y="48" fill="#38bdf8" fontSize="11" fontWeight="bold">Land Survey</text>
          <path d="M240 68 L340 68 M240 88 L310 88" stroke="#64748b" strokeWidth="2" />
        </svg>
      ),
      rwSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="15" width="160" height="100" rx="6" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
          <text x="45" y="40" fill="#b45309" fontWeight="bold" fontSize="11">Owner Wishlist</text>
          <circle cx="55" cy="62" r="3.5" fill="#059669" />
          <text x="70" y="66" fill="#334155" fontSize="10">4 Bedrooms</text>
          <circle cx="55" cy="84" r="3.5" fill="#059669" />
          <text x="70" y="88" fill="#334155" fontSize="10">Double Garage</text>
          <circle cx="55" cy="106" r="3.5" fill="#059669" />
          <text x="70" y="110" fill="#334155" fontSize="10">Solar Wiring</text>
          <rect x="220" y="20" width="150" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="240" y="48" fill="#0284c7" fontSize="11" fontWeight="bold">Land Survey</text>
          <path d="M240 68 L340 68 M240 88 L310 88" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      ),
      swSub: "SRS Specification & Constraints",
      swDel: "Software Requirement Specification (SRS) document, User Stories, and Functional vs Non-Functional constraints.",
      swWarn: "Developers build features nobody wanted; 100% budget wasted.",
      swVisLabel: "SRS Document Scope",
      swSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="10" width="340" height="110" rx="6" fill="#131720" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="45" y="25" width="140" height="80" rx="4" fill="#181d26" />
          <text x="55" y="44" fill="#2dd4bf" fontWeight="bold" fontSize="10">Functional Reqs</text>
          <text x="55" y="65" fill="#94a3b8" fontSize="9.5">• User Login</text>
          <text x="55" y="83" fill="#94a3b8" fontSize="9.5">• Checkout Cart</text>
          <rect x="215" y="25" width="140" height="80" rx="4" fill="#181d26" />
          <text x="225" y="44" fill="#c084fc" fontWeight="bold" fontSize="10">Non-Functional</text>
          <text x="225" y="65" fill="#94a3b8" fontSize="9.5">• &lt; 2s Load Time</text>
          <text x="225" y="83" fill="#94a3b8" fontSize="9.5">• 99.9% Uptime</text>
        </svg>
      ),
      swSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="10" width="340" height="110" rx="6" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="45" y="25" width="140" height="80" rx="4" fill="#ffffff" stroke="#ccfbf1" />
          <text x="55" y="44" fill="#0f766e" fontWeight="bold" fontSize="10">Functional Reqs</text>
          <text x="55" y="65" fill="#475569" fontSize="9.5">• User Login</text>
          <text x="55" y="83" fill="#475569" fontSize="9.5">• Checkout Cart</text>
          <rect x="215" y="25" width="140" height="80" rx="4" fill="#ffffff" stroke="#f3e8ff" />
          <text x="225" y="44" fill="#7e22ce" fontWeight="bold" fontSize="10">Non-Functional</text>
          <text x="225" y="65" fill="#475569" fontSize="9.5">• &lt; 2s Load Time</text>
          <text x="225" y="83" fill="#475569" fontSize="9.5">• 99.9% Uptime</text>
        </svg>
      )
    },
    {
      stageNumber: 2,
      stageTitle: "System Design & Architecture",
      rwSub: "House Blueprint & Layout Map",
      rwEn: "Architects draw 2D/3D maps showing exact room sizes, electrical wiring routes, and plumbing pipes before any brick is purchased.",
      rwUr: "عمارت کا باقاعدہ نقشہ اور ڈرائنگ بنانا جس میں کمروں کی پیمائش اور پائپ لائنز طے ہوتی ہیں۔",
      rwVisLabel: "2D Architectural Floorplan",
      rwSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="40" y="15" width="320" height="100" fill="#131720" stroke="#d97706" strokeWidth="1.5" />
          <line x1="160" y1="15" x2="160" y2="115" stroke="#d97706" strokeWidth="1.5" />
          <line x1="40" y1="70" x2="160" y2="70" stroke="#d97706" strokeWidth="1.5" />
          <text x="60" y="45" fill="#cbd5e1" fontSize="10" fontWeight="bold">Master Bed</text>
          <text x="75" y="98" fill="#cbd5e1" fontSize="10" fontWeight="bold">Kitchen</text>
          <text x="210" y="70" fill="#cbd5e1" fontSize="11" fontWeight="bold">Living Hall &amp; Dining</text>
        </svg>
      ),
      rwSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="40" y="15" width="320" height="100" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
          <line x1="160" y1="15" x2="160" y2="115" stroke="#d97706" strokeWidth="1.5" />
          <line x1="40" y1="70" x2="160" y2="70" stroke="#d97706" strokeWidth="1.5" />
          <text x="60" y="45" fill="#78350f" fontSize="10" fontWeight="bold">Master Bed</text>
          <text x="75" y="98" fill="#78350f" fontSize="10" fontWeight="bold">Kitchen</text>
          <text x="210" y="70" fill="#78350f" fontSize="11" fontWeight="bold">Living Hall &amp; Dining</text>
        </svg>
      ),
      swSub: "UML & Database Architecture",
      swDel: "UML Diagrams (Class, Use Case, Sequence), Database ER Schemas, and UI Screen Wireframes.",
      swWarn: "Spaghetti Code! Making a single change later breaks 10 other modules.",
      swVisLabel: "UML Class Diagram",
      swSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="15" width="130" height="100" rx="4" fill="#131720" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="30" y="15" width="130" height="22" fill="#115e59" />
          <text x="65" y="30" fill="#ffffff" fontWeight="bold" fontSize="10">User Class</text>
          <text x="40" y="55" fill="#94a3b8" fontSize="9">- id: int</text>
          <text x="40" y="70" fill="#94a3b8" fontSize="9">- name: string</text>
          <line x1="30" y1="80" x2="160" y2="80" stroke="#334155" />
          <text x="40" y="98" fill="#2dd4bf" fontSize="9">+ login()</text>
          <path d="M160 60 L240 60" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="240" y="15" width="130" height="100" rx="4" fill="#131720" stroke="#10b981" strokeWidth="1.5" />
          <rect x="240" y="15" width="130" height="22" fill="#047857" />
          <text x="270" y="30" fill="#ffffff" fontWeight="bold" fontSize="10">Order Class</text>
          <text x="250" y="55" fill="#94a3b8" fontSize="9">- orderId: int</text>
          <text x="250" y="70" fill="#94a3b8" fontSize="9">- total: float</text>
          <line x1="240" y1="80" x2="370" y2="80" stroke="#334155" />
          <text x="250" y="98" fill="#34d399" fontSize="9">+ placeOrder()</text>
        </svg>
      ),
      swSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="15" width="130" height="100" rx="4" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="30" y="15" width="130" height="22" fill="#0d9488" />
          <text x="65" y="30" fill="#ffffff" fontWeight="bold" fontSize="10">User Class</text>
          <text x="40" y="55" fill="#475569" fontSize="9">- id: int</text>
          <text x="40" y="70" fill="#475569" fontSize="9">- name: string</text>
          <line x1="30" y1="80" x2="160" y2="80" stroke="#ccfbf1" />
          <text x="40" y="98" fill="#0f766e" fontSize="9">+ login()</text>
          <path d="M160 60 L240 60" stroke="#0d9488" strokeWidth="1.5" />
          <rect x="240" y="15" width="130" height="100" rx="4" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
          <rect x="240" y="15" width="130" height="22" fill="#10b981" />
          <text x="270" y="30" fill="#ffffff" fontWeight="bold" fontSize="10">Order Class</text>
          <text x="250" y="55" fill="#475569" fontSize="9">- orderId: int</text>
          <text x="250" y="70" fill="#475569" fontSize="9">- total: float</text>
          <line x1="240" y1="80" x2="370" y2="80" stroke="#d1fae5" />
          <text x="250" y="98" fill="#047857" fontSize="9">+ placeOrder()</text>
        </svg>
      )
    },
    {
      stageNumber: 3,
      stageTitle: "Coding & Implementation",
      rwSub: "Masonry & Physical Construction",
      rwEn: "Masons and laborers laying concrete foundations, placing bricks, and constructing physical walls.",
      rwUr: "مستری اور مزدوروں کا اینٹیں چننا اور سیمنٹ کے ذریعے باقاعدہ تعمیر شروع کرنا۔",
      rwVisLabel: "Bricklaying & Structure",
      rwSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="105" width="300" height="12" fill="#334155" />
          <rect x="60" y="82" width="45" height="18" fill="#b45309" stroke="#78350f" />
          <rect x="110" y="82" width="45" height="18" fill="#b45309" stroke="#78350f" />
          <rect x="160" y="82" width="45" height="18" fill="#b45309" stroke="#78350f" />
          <rect x="210" y="82" width="45" height="18" fill="#b45309" stroke="#78350f" />
          <rect x="85" y="60" width="45" height="18" fill="#d97706" stroke="#78350f" />
          <rect x="135" y="60" width="45" height="18" fill="#d97706" stroke="#78350f" />
          <rect x="185" y="60" width="45" height="18" fill="#d97706" stroke="#78350f" />
        </svg>
      ),
      rwSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="105" width="300" height="12" fill="#cbd5e1" />
          <rect x="60" y="82" width="45" height="18" fill="#d97706" stroke="#92400e" />
          <rect x="110" y="82" width="45" height="18" fill="#d97706" stroke="#92400e" />
          <rect x="160" y="82" width="45" height="18" fill="#d97706" stroke="#92400e" />
          <rect x="210" y="82" width="45" height="18" fill="#d97706" stroke="#92400e" />
          <rect x="85" y="60" width="45" height="18" fill="#f59e0b" stroke="#92400e" />
          <rect x="135" y="60" width="45" height="18" fill="#f59e0b" stroke="#92400e" />
          <rect x="185" y="60" width="45" height="18" fill="#f59e0b" stroke="#92400e" />
        </svg>
      ),
      swSub: "Writing Code in Python",
      swDel: "Source Code (.py / .cpp files), Database Tables Created, and API Endpoints.",
      swWarn: "Without coding, ideas remain forever on paper with zero working capability.",
      swVisLabel: "Python Code Editor",
      swSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="10" width="340" height="110" rx="6" fill="#131720" stroke="#334155" strokeWidth="1.5" />
          <circle cx="48" cy="22" r="3" fill="#ef4444" />
          <circle cx="58" cy="22" r="3" fill="#f59e0b" />
          <circle cx="68" cy="22" r="3" fill="#10b981" />
          <text x="45" y="50" fill="#f43f5e" fontFamily="monospace" fontSize="10">def</text>
          <text x="70" y="50" fill="#38bdf8" fontFamily="monospace" fontSize="10">calculate_grade(marks):</text>
          <text x="65" y="70" fill="#f43f5e" fontFamily="monospace" fontSize="10">if</text>
          <text x="85" y="70" fill="#e2e8f0" fontFamily="monospace" fontSize="10">marks &gt;= 80:</text>
          <text x="85" y="90" fill="#c084fc" fontFamily="monospace" fontSize="10">return <tspan fill="#a3e635">&quot;A+ Grade&quot;</tspan></text>
          <text x="65" y="108" fill="#f43f5e" fontFamily="monospace" fontSize="10">else:</text>
          <text x="85" y="108" fill="#c084fc" fontFamily="monospace" fontSize="10">return <tspan fill="#a3e635">&quot;Pass&quot;</tspan></text>
        </svg>
      ),
      swSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="10" width="340" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="48" cy="22" r="3" fill="#ef4444" />
          <circle cx="58" cy="22" r="3" fill="#f59e0b" />
          <circle cx="68" cy="22" r="3" fill="#10b981" />
          <text x="45" y="50" fill="#e11d48" fontFamily="monospace" fontSize="10">def</text>
          <text x="70" y="50" fill="#0284c7" fontFamily="monospace" fontSize="10">calculate_grade(marks):</text>
          <text x="65" y="70" fill="#e11d48" fontFamily="monospace" fontSize="10">if</text>
          <text x="85" y="70" fill="#1e293b" fontFamily="monospace" fontSize="10">marks &gt;= 80:</text>
          <text x="85" y="90" fill="#7c3aed" fontFamily="monospace" fontSize="10">return <tspan fill="#16a34a">&quot;A+ Grade&quot;</tspan></text>
          <text x="65" y="108" fill="#e11d48" fontFamily="monospace" fontSize="10">else:</text>
          <text x="85" y="108" fill="#7c3aed" fontFamily="monospace" fontSize="10">return <tspan fill="#16a34a">&quot;Pass&quot;</tspan></text>
        </svg>
      )
    },
    {
      stageNumber: 4,
      stageTitle: "Testing & Quality Assurance",
      rwSub: "Plumbing & Electrical Safety Tests",
      rwEn: "Testing plumbing pressure, gas leakage, and electrical circuit breakers before shifting into the house.",
      rwUr: "گھر میں شفٹ ہونے سے پہلے گیس، پانی کے پائپ اور بجلی کی وائرنگ کا مکمل معائنہ کرنا۔",
      rwVisLabel: "Pressure & Leak Testing",
      rwSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#10b981" strokeWidth="1.5" />
          <text x="80" y="50" fill="#34d399" fontWeight="bold" fontSize="11">✓ Plumbing Pressure: PASSED</text>
          <text x="80" y="75" fill="#34d399" fontWeight="bold" fontSize="11">✓ Electrical Breakers: PASSED</text>
          <text x="80" y="100" fill="#f87171" fontWeight="bold" fontSize="11">✗ Window Seal Leak: FIXED</text>
        </svg>
      ),
      rwSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
          <text x="80" y="50" fill="#047857" fontWeight="bold" fontSize="11">✓ Plumbing Pressure: PASSED</text>
          <text x="80" y="75" fill="#047857" fontWeight="bold" fontSize="11">✓ Electrical Breakers: PASSED</text>
          <text x="80" y="100" fill="#b91c1c" fontWeight="bold" fontSize="11">✗ Window Seal Leak: FIXED</text>
        </svg>
      ),
      swSub: "Unit, Integration & System Testing",
      swDel: "Test Cases Log, Bug Tracking Sheet, and User Acceptance Testing (UAT) Sign-off.",
      swWarn: "Critical bugs crash production on launch day, causing financial loss.",
      swVisLabel: "Automated QA Test Suite",
      swSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="15" width="340" height="100" rx="6" fill="#131720" stroke="#0d9488" strokeWidth="1.5" />
          <text x="50" y="45" fill="#2dd4bf" fontFamily="monospace" fontSize="11">PASS src/auth.test.py (14ms)</text>
          <text x="50" y="70" fill="#2dd4bf" fontFamily="monospace" fontSize="11">PASS src/cart.test.py (22ms)</text>
          <text x="50" y="95" fill="#38bdf8" fontFamily="monospace" fontSize="11">Tests: 2 passed, 2 total</text>
        </svg>
      ),
      swSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="30" y="15" width="340" height="100" rx="6" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
          <text x="50" y="45" fill="#0f766e" fontFamily="monospace" fontSize="11">PASS src/auth.test.py (14ms)</text>
          <text x="50" y="70" fill="#0f766e" fontFamily="monospace" fontSize="11">PASS src/cart.test.py (22ms)</text>
          <text x="50" y="95" fill="#0284c7" fontFamily="monospace" fontSize="11">Tests: 2 passed, 2 total</text>
        </svg>
      )
    },
    {
      stageNumber: 5,
      stageTitle: "Deployment & Release",
      rwSub: "Housewarming & Keys Handover",
      rwEn: "Handing over keys to the family during housewarming celebration and occupancy approval.",
      rwUr: "مالک کو مکان کی چابیاں سپرد کرنا تاکہ وہ منتقل ہو سکے۔",
      rwVisLabel: "Occupancy Approval",
      rwSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="80" y="55" fill="#f59e0b" fontWeight="bold" fontSize="12">KEY HANDOVER &amp; PERMIT</text>
          <text x="80" y="80" fill="#94a3b8" fontSize="10">• Occupancy Certificate Granted</text>
        </svg>
      ),
      rwSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
          <text x="80" y="55" fill="#b45309" fontWeight="bold" fontSize="12">KEY HANDOVER &amp; PERMIT</text>
          <text x="80" y="80" fill="#475569" fontSize="10">• Occupancy Certificate Granted</text>
        </svg>
      ),
      swSub: "Cloud Production Release",
      swDel: "Production Release Package, Server Logs, User Manual.",
      swWarn: "Skipping deployment prep causes downtime during live customer release.",
      swVisLabel: "AWS Live Deployment",
      swSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#10b981" strokeWidth="1.5" />
          <text x="80" y="55" fill="#34d399" fontWeight="bold" fontSize="12">AWS CLOUD INSTANCE LIVE</text>
          <text x="80" y="80" fill="#38bdf8" fontSize="10">• SSL Active • Status 100% Operational</text>
        </svg>
      ),
      swSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
          <text x="80" y="55" fill="#047857" fontWeight="bold" fontSize="12">AWS CLOUD INSTANCE LIVE</text>
          <text x="80" y="80" fill="#0284c7" fontSize="10">• SSL Active • Status 100% Operational</text>
        </svg>
      )
    },
    {
      stageNumber: 6,
      stageTitle: "Maintenance & Operations",
      rwSub: "Annual Renovations & Repairs",
      rwEn: "Scheduling annual paint touch-ups, plumbing repairs, and solar maintenance.",
      rwUr: "وقت کے ساتھ مکان کی سفیدی، پینٹ اور پائپوں کی مرمت تاکہ عمارت محفوظ رہے۔",
      rwVisLabel: "Annual House Repairs",
      rwSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="80" y="55" fill="#f59e0b" fontWeight="bold" fontSize="12">ANNUAL HOUSE RENOVATION</text>
          <text x="80" y="80" fill="#94a3b8" fontSize="10">• Wall Touch-ups • Roof Leak Seals</text>
        </svg>
      ),
      rwSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
          <text x="80" y="55" fill="#b45309" fontWeight="bold" fontSize="12">ANNUAL HOUSE RENOVATION</text>
          <text x="80" y="80" fill="#475569" fontSize="10">• Wall Touch-ups • Roof Leak Seals</text>
        </svg>
      ),
      swSub: "Security Updates & Bug Fixes",
      swDel: "Security Patches, Upgrades Log, Performance Tunes.",
      swWarn: "Unmaintained software suffers data breaches from cyber exploits.",
      swVisLabel: "Patches & Upgrades",
      swSvgDark: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#0d9488" strokeWidth="1.5" />
          <text x="80" y="55" fill="#2dd4bf" fontWeight="bold" fontSize="12">SECURITY PATCH v1.4 APPLIED</text>
          <text x="80" y="80" fill="#34d399" fontSize="10">• DB Indexes Optimized • Zero Vulnerabilities</text>
        </svg>
      ),
      swSvgLight: (
        <svg className="w-full h-full max-h-32" viewBox="0 0 400 130" fill="none">
          <rect x="50" y="20" width="300" height="90" rx="6" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
          <text x="80" y="55" fill="#0f766e" fontWeight="bold" fontSize="12">SECURITY PATCH v1.4 APPLIED</text>
          <text x="80" y="80" fill="#047857" fontSize="10">• DB Indexes Optimized • Zero Vulnerabilities</text>
        </svg>
      )
    }
  ];

  const currentPhaseData = phasesData[activePhase - 1];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100 dark:bg-[#0f131a] text-slate-800 dark:text-slate-200 transition-colors">
      {/* 1. Top Header Layer */}
      <header className="h-16 w-full bg-white dark:bg-[#161b26] border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between z-40 shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold font-mono shadow-md text-sm">
            CS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight">
                CS Studio 11
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                PECTAA 2023
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:inline-block">
              Punjab Boards • Grade 11 (1st Year)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center font-mono">
                US
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-none">
                    Uzair Salman
                  </span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 uppercase">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  Sargodha Board • 4 Day Streak <Flame className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                </span>
              </div>
            </div>

            <Link
              href="/admin"
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              title="Admin Studio Settings"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Main Studio Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-8 space-y-6">
        {/* Progress & 5 Step Tabs Header */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40">
                Unit 1 • Topic 1.2
              </span>
              <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                Software Development Life Cycle (SDLC)
              </h1>
            </div>
            <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
              Step {currentStep} of 5
            </span>
          </div>

          {/* 5 Step Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {[
              { id: 1, label: "1. Definition", icon: BookOpen },
              { id: 2, label: "2. Concept & Flowchart", icon: Layers },
              { id: 3, label: "3. Phase Explorer", icon: Compass },
              { id: 4, label: "4. Topper Sheet", icon: PenTool },
              { id: 5, label: "5. Practice Test", icon: HelpCircle },
            ].map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs font-bold"
                      : "bg-slate-50 dark:bg-[#131722] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold leading-tight truncate">{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step View Container */}
        <div>
          {/* Step 1: Definition */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/40">
                    5 Marks Board Long Question • Sargodha/Lahore 2024
                  </span>
                  <span className="text-xs font-mono text-slate-400">PCTB Textbook Standard</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  &ldquo;Software Development Life Cycle (SDLC) is a standard structured framework consisting of sequential phases used by software engineers to plan, analyze, design, code, test, deploy, and maintain quality software systems.&rdquo;
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                    Board Marking Rubric Keywords Checklist (5 Marks)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "✓ Verbatim Definition (1 Mark)",
                      "✓ SRS & DDS Deliverables Mentioned (1.5 Marks)",
                      "✓ Sequential 6-Phase Flowchart (1.5 Marks)",
                      "✓ Key Term Highlights (QA, Maintenance) (1 Mark)",
                    ].map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Concept & Flowchart */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Real-World House Construction Analogy
                </h3>

                <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase font-bold block">
                    عملی مثال (اردو)
                  </span>
                  <p className="urdu-script text-base text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                    اگر آپ مکان بنانا چاہتے ہیں تو پہلے اینٹیں نہیں رکھتے بلکہ پلاٹ کا سروے، بجٹ اور نقشہ بناتے ہیں۔ اسی طرح سافٹ ویئر بنانے کے لیے پہلے 6 مرحلہ وار مراحل طے کیے جاتے ہیں۔
                  </p>
                </div>

                {/* Cyclic SDLC Flowchart SVG */}
                <div className="p-4 bg-slate-50 dark:bg-[#0a0d13] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  <svg className="w-full h-full max-h-40" viewBox="0 0 500 140" fill="none">
                    <rect x="10" y="50" width="70" height="40" rx="6" fill="#4f46e5" />
                    <text x="22" y="74" fill="#fff" fontSize="10" fontWeight="bold">1. SRS</text>
                    <path d="M85 70 L115 70" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />

                    <rect x="120" y="50" width="70" height="40" rx="6" fill="#0d9488" />
                    <text x="130" y="74" fill="#fff" fontSize="10" fontWeight="bold">2. Design</text>
                    <path d="M195 70 L225 70" stroke="#0d9488" strokeWidth="2" />

                    <rect x="230" y="50" width="70" height="40" rx="6" fill="#d97706" />
                    <text x="240" y="74" fill="#fff" fontSize="10" fontWeight="bold">3. Code</text>
                    <path d="M305 70 L335 70" stroke="#d97706" strokeWidth="2" />

                    <rect x="340" y="50" width="70" height="40" rx="6" fill="#10b981" />
                    <text x="352" y="74" fill="#fff" fontSize="10" fontWeight="bold">4. Test</text>
                    <path d="M415 70 L445 70" stroke="#10b981" strokeWidth="2" />

                    <rect x="445" y="50" width="50" height="40" rx="6" fill="#64748b" />
                    <text x="450" y="74" fill="#fff" fontSize="9" fontWeight="bold">5. Deploy</text>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Phase Explorer */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in">
              {/* 6 Stage Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  { num: 1, name: "Requirements" },
                  { num: 2, name: "Design" },
                  { num: 3, name: "Coding" },
                  { num: 4, name: "Testing" },
                  { num: 5, name: "Deploy" },
                  { num: 6, name: "Maintain" },
                ].map((s) => (
                  <button
                    key={s.num}
                    onClick={() => setActivePhase(s.num)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      activePhase === s.num
                        ? "bg-indigo-600 text-white border-indigo-600 font-bold shadow-xs"
                        : "bg-white dark:bg-[#161b26] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-80">Stage 0{s.num}</span>
                    <span className="text-xs font-semibold leading-tight truncate block">{s.name}</span>
                  </button>
                ))}
              </div>

              {/* Dual-Lane Cards for Active Phase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-amber-400/60 dark:border-amber-500/40 space-y-4 shadow-xs">
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/50 inline-block">
                      🏡 Lane 1: Real-World Analogy
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {currentPhaseData.rwSub}
                    </h4>
                    <div className="p-3 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
                      <p className="urdu-script text-sm text-slate-800 dark:text-slate-200 font-medium">
                        {currentPhaseData.rwUr}
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{currentPhaseData.rwEn}</p>
                  </div>
                  <div className="h-36 rounded-lg bg-slate-50 dark:bg-[#0a0d13] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center">
                    {isDarkMode ? currentPhaseData.rwSvgDark : currentPhaseData.rwSvgLight}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-teal-400/60 dark:border-teal-500/40 space-y-4 shadow-xs">
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 text-xs font-mono font-bold border border-teal-200 dark:border-teal-800/50 inline-block">
                      💻 Lane 2: Software Equivalent
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {currentPhaseData.swSub}
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{currentPhaseData.swDel}</p>
                  </div>
                  <div className="h-36 rounded-lg bg-slate-50 dark:bg-[#0a0d13] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center">
                    {isDarkMode ? currentPhaseData.swSvgDark : currentPhaseData.swSvgLight}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Topper Sheet */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4 font-sans">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <span className="text-xs font-mono text-amber-400 font-bold">Q. No 3 (a) • Board Cut Marker Guide</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">Marks: 5/5</span>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400">[ 605 Cut Marker Header ]</span>
                  <h2 className="text-xl font-black text-indigo-400 border-b-2 border-indigo-400 inline-block pb-1">
                    SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-3">
                    &ldquo;SDLC is a structured step-by-step process used by software engineers to build high-quality software systems.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Practice Test */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Q1. Which document is created as the primary output deliverable of the System Design phase in SDLC?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "A. Software Requirement Specification (SRS)",
                    "B. Design Document Specification (DDS)",
                    "C. Feasibility Study Report",
                    "D. User Acceptance Testing (UAT) Report"
                  ].map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => !mcq1Submitted && setMcq1Selected(idx)}
                      className={`p-3 rounded-xl border text-xs text-left transition-all font-medium ${
                        mcq1Submitted
                          ? idx === 1
                            ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold"
                            : mcq1Selected === idx
                            ? "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-700 dark:text-rose-300 font-bold"
                            : "bg-slate-50 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-400"
                          : mcq1Selected === idx
                          ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-300 font-bold"
                          : "bg-slate-50 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  {!mcq1Submitted ? (
                    <button
                      onClick={() => setMcq1Submitted(true)}
                      disabled={mcq1Selected === null}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                        mcq1Selected !== null
                          ? "bg-indigo-600 text-white hover:bg-indigo-500"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setMcq1Selected(null);
                        setMcq1Submitted(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" /> Try Again
                    </button>
                  )}
                  {mcq1Submitted && (
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {mcq1Selected === 1 ? "✓ Correct Answer! Award 1 Mark" : "✗ Option B (DDS) is correct"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 3. Bottom Navigation Layer */}
      <div className="max-w-5xl mx-auto w-full px-6 py-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161b26] rounded-t-2xl shadow-xs">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1) as any)}
          disabled={currentStep === 1}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
            currentStep === 1
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
              : "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300"
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Previous Step
        </button>

        <span className="text-xs font-mono font-bold text-slate-500">
          Step {currentStep} of 5
        </span>

        <button
          onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1) as any)}
          disabled={currentStep === 5}
          className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
            currentStep === 5
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-xs"
          }`}
        >
          <span>{currentStep === 5 ? "Completed ✓" : "Next Step"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4. Footer Layer */}
      <footer className="h-10 w-full bg-white dark:bg-[#161b26] border-t border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
        <span>CS Studio 11 • Single National Curriculum (PECTAA 2023)</span>
        <span className="hidden md:inline">Copyright © 2026 Uzair Salman. All Rights Reserved.</span>
      </footer>
    </div>
  );
}

export default TopicStudio;
