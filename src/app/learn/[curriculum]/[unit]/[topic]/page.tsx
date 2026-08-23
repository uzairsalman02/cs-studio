"use client";

import React, { useState } from "react";
import { Mic, Award, Sparkles, BookOpen, Clock, Flame, Home, Code, CheckSquare, AlertTriangle, Layers, FileText, PenTool, HelpCircle, Code2, CheckCircle2, RefreshCw } from "lucide-react";

export default function LearningTopicPage() {
  const [isDark, setIsDark] = useState(false);
  const [currentMode, setCurrentMode] = useState<"student" | "teacher">("student");
  const [activePhase, setActivePhase] = useState(1);
  const [activeTab, setActiveTab] = useState<"visual" | "theory" | "topper" | "mcq">("visual");

  // Assessment Questions State
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phasesData = [
    {
      num: "Phase 01 of 06",
      title: "Requirement Gathering & Analysis",
      cue: "Class! Ask: If a client asks for an E-commerce store, can we build it without asking what payment methods they support?",
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
      num: "Phase 02 of 06",
      title: "System Design & Architecture",
      cue: "Class! Ask students: If an architect starts laying bricks without drawing blueprints, what happens to the plumbing and electrical wires later?",
      rwSub: "House Blueprint & Layout Map",
      rwEn: "Architects draw 2D/3D maps showing exact room sizes, electrical wiring routes, and plumbing pipes before any brick is purchased.",
      rwUr: "عمارت کا باقاعدہ نقشہ اور ڈرائنگ بنانا جس میں کمروں کی پیمائش اور پائپ لائنز طے ہوتی ہیں تاکہ بعد میں دیواریں توڑ کر پائپ نہ ڈالنے پڑیں۔",
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
      num: "Phase 03 of 06",
      title: "Coding & Implementation",
      cue: "Tell students: Coding is translating the approved design into Python. Design is where the real architecture happens.",
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
      num: "Phase 04 of 06",
      title: "Testing & Quality Assurance",
      cue: "Ask: Can we move into a house before checking if the water pipes leak?",
      rwSub: "Plumbing & Electrical Safety Tests",
      rwEn: "Testing plumbing pressure, gas leakage, and electrical circuit breakers before shifting into the house.",
      rwUr: "گھر میں شفٹ ہونے سے پہلے گیس، پانی کے پائپ اور بجلی کی وائرنگ کا مکمل معائنہ کرنا تاکہ حادثہ نہ ہو۔",
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
      num: "Phase 05 of 06",
      title: "Deployment & Release",
      cue: "Tell students: Deployment is housewarming! Handing over keys to the live customer.",
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
      num: "Phase 06 of 06",
      title: "Maintenance & Operations",
      cue: "Explain: Software maintenance is annual paint touch-ups and fixing security vulnerabilities.",
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

  const handleMCQSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOpt(idx);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24 animate-in fade-in duration-300">
      {/* Teacher Spoken Cue Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2.5">
          <Mic className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-700 dark:text-amber-400 block">
              Teacher Spoken Cue (استاد کی آواز)
            </span>
            <p className="urdu-script text-base text-amber-950 dark:text-amber-100 font-semibold leading-relaxed">
              {currentPhaseData.cue}
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold border border-amber-500/40 shrink-0 flex items-center gap-1">
          <Award className="w-3.5 h-3.5" /> 5 Marks Board Question
        </span>
      </div>

      {/* Main Topic Header Card */}
      <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800/40 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Topic 1.2
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/40 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 fill-amber-500" /> Repeated Board Long Q
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0f131a] text-slate-600 dark:text-slate-400 text-xs font-mono border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-500" /> 25 Mins Study
            </span>
          </div>

          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">
            Past Papers: Sargodha &apos;24, Lahore &apos;22, RWP &apos;23
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Software Development Life Cycle (SDLC)
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Software Development Life Cycle (SDLC) is a standard structured framework consisting of sequential phases used by software engineers to plan, analyze, design, code, test, deploy, and maintain quality software systems.
          </p>
        </div>

        {/* 6-Stage Stepper Tabs */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-bold">
            SDLC 6-Phase Interactive Stepper
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { num: 1, name: "Requirements" },
              { num: 2, name: "Design" },
              { num: 3, name: "Coding" },
              { num: 4, name: "Testing" },
              { num: 5, name: "Deploy" },
              { num: 6, name: "Maintain" },
            ].map((s) => {
              const isSelected = activePhase === s.num;
              return (
                <button
                  key={s.num}
                  onClick={() => setActivePhase(s.num)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs font-bold"
                      : "bg-white dark:bg-[#131722] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isSelected ? "text-indigo-300 dark:text-indigo-600" : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    Stage 0{s.num}
                  </span>
                  <span className="text-xs font-semibold leading-snug truncate">{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Primary Pedagogy Navigation Tabs */}
      <div className="flex items-center gap-2 bg-white dark:bg-[#161b26] p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-xs">
        {[
          { id: "visual", label: "Dual-Lane Visual Comparison", icon: Layers, color: "text-indigo-500" },
          { id: "theory", label: "Official Textbook Theory", icon: FileText, color: "text-teal-500" },
          { id: "topper", label: "Topper Paper Formatting", icon: PenTool, color: "text-amber-500" },
          { id: "mcq", label: "Exam Checkpoints", icon: HelpCircle, color: "text-indigo-500" },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-slate-100 dark:bg-[#0f131a] text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? tab.color : ""}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dual-Lane Visual Display */}
      {activeTab === "visual" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lane 1: Real World Analogy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-amber-400/60 dark:border-amber-500/40 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold border border-amber-200 dark:border-amber-800/50 flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5" /> 🏡 Real-World Analogy
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold">
                    {currentPhaseData.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {currentPhaseData.rwSub}
                </h3>

                <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1">
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-bold">
                    عملی مثال (اردو)
                  </span>
                  <p className="urdu-script text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {currentPhaseData.rwUr}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {currentPhaseData.rwEn}
                </p>
              </div>

              {/* Crisp SVG Vector Container */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                  {currentPhaseData.rwVisLabel}
                </span>
                <div className="h-36 rounded-lg bg-white dark:bg-[#0a0d13] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner">
                  {isDark ? currentPhaseData.rwSvgDark : currentPhaseData.rwSvgLight}
                </div>
              </div>
            </div>

            {/* Lane 2: Software Equivalent */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border-2 border-teal-400/60 dark:border-teal-500/40 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 text-xs font-mono font-bold border border-teal-200 dark:border-teal-800/50 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" /> 💻 Software Equivalent
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold">
                    {currentPhaseData.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {currentPhaseData.swSub}
                </h3>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider block font-bold">
                    Required Software Deliverables
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {currentPhaseData.swDel}
                  </p>
                </div>
              </div>

              {/* Crisp SVG Vector Container */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                  {currentPhaseData.swVisLabel}
                </span>
                <div className="h-36 rounded-lg bg-white dark:bg-[#0a0d13] border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner">
                  {isDark ? currentPhaseData.swSvgDark : currentPhaseData.swSvgLight}
                </div>
              </div>
            </div>
          </div>

          {/* Fatal Consequence Alert Box */}
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 flex items-start gap-3 text-xs text-rose-900 dark:text-rose-200 shadow-xs">
            <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-rose-700 dark:text-rose-300 font-mono uppercase tracking-wider text-[11px] block">
                Fatal Consequence of Skipping Stage 0{activePhase}
              </span>
              <p className="text-rose-800/90 dark:text-rose-200/90 leading-relaxed">
                {currentPhaseData.swWarn}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Official Theory Tab Display */}
      {activeTab === "theory" && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 animate-in fade-in">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Official Textbook Definition &amp; Breakdown
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f131a] border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            &ldquo;Software Development Life Cycle (SDLC) is a standard structured framework consisting of sequential phases used by software engineers to plan, analyze, design, code, test, deploy, and maintain quality software systems.&rdquo;
          </div>
        </div>
      )}

      {/* Topper Paper Formatting Display */}
      {activeTab === "topper" && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 animate-in fade-in">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <PenTool className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              605 Cut-Marker Heading Presentation Rules
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-2">
            <span className="text-amber-400 font-bold block">[ 605 Cut Marker Header ]</span>
            <h2 className="text-lg font-black text-indigo-400 border-b border-indigo-400 inline-block">
              SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)
            </h2>
            <p className="text-slate-300 text-xs pt-2">
              Draw neat block flow diagram with lead pencil. Label SRS under Stage 1 and DDS under Stage 2 for full 5 marks.
            </p>
          </div>
        </div>
      )}

      {/* Exam Checkpoints Display */}
      {activeTab === "mcq" && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161b26] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 animate-in fade-in">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-indigo-500" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Board Exam MCQ Checkpoint
            </h3>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Q1. Which document is created as the primary output deliverable of the System Design phase in SDLC?
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "A. Software Requirement Specification (SRS)",
                "B. Design Document Specification (DDS)",
                "C. Feasibility Study Report",
                "D. User Acceptance Testing (UAT) Report"
              ].map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMCQSelect(idx)}
                  className={`p-3 rounded-xl border text-xs text-left transition-all font-medium ${
                    isSubmitted
                      ? idx === 1
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold"
                        : selectedOpt === idx
                        ? "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-700 dark:text-rose-300 font-bold"
                        : "bg-slate-50 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-400"
                      : selectedOpt === idx
                      ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-300 font-bold"
                      : "bg-slate-50 dark:bg-[#0f131a] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              {!isSubmitted ? (
                <button
                  onClick={() => setIsSubmitted(true)}
                  disabled={selectedOpt === null}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedOpt !== null
                      ? "bg-indigo-600 text-white shadow-xs hover:bg-indigo-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSelectedOpt(null);
                    setIsSubmitted(false);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Try Again
                </button>
              )}

              {isSubmitted && (
                <span className={`text-xs font-mono font-bold ${selectedOpt === 1 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                  {selectedOpt === 1 ? "✓ Correct Answer! Award 1 Mark" : "✗ Incorrect - Option B (DDS) is correct"}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
