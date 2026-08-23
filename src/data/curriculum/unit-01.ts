import { Unit } from "@/types/curriculum";

export const UNIT_01_DATA: Unit = {
  id: "unit-1",
  unitNumber: 1,
  title: "Introduction to Software Development",
  pairingSchemeNote: "Board Pairing 2026: Unit 1 carries 1 Long Q (Part A - 5 Marks) + 2 Short Qs (4 Marks)",
  progressPercent: 42,
  topics: [
    {
      id: "topic-1.1",
      topicCode: "Topic 1.1",
      title: "Software Basics & Classification",
      slug: "software-basics-and-classification",
      duration: "15 mins",
      examFrequencyBadge: "Repeated Short Question",
      pastPapers: ["BISE Lahore 2023 (Q2)", "BISE Sargodha 2024 (MCQ 1)"],
      verbatimDefinition: "Software is a collection of instructions, data, or programs used to operate computers and execute specific tasks. It is broadly classified into System Software (OS, Utility programs) and Application Software (Word Processors, Web Browsers).",
      paperPresentationTip: "Draw a clean classification tree diagram showing System Software vs Application Software with 605 cut marker.",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "System Software vs Application Software",
          rwSub: "Engine & Dashboard Analogy",
          rwEn: "System software acts like a car's engine and transmission system, while application software is like the air conditioner and audio system that riders interact with.",
          rwUr: "سسٹم سافٹ ویئر گاڑی کے انجن کی طرح بنیادی کام چلاتا ہے جبکہ ایپلیکیشن سافٹ ویئر سہولیات (ایئر کنڈیشنر، میوزک پلیئر) فراہم کرتا ہے۔",
          rwVisLabel: "Car Engine vs Interior Accessories",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="160" height="100" rx="6" fill="#131720" stroke="#38bdf8" stroke-width="1.5"/><text x="45" y="40" fill="#38bdf8" font-weight="bold" font-size="11">SYSTEM ENGINE</text><text x="45" y="65" fill="#94a3b8" font-size="10">• OS Kernel &amp; Drivers</text><text x="45" y="85" fill="#94a3b8" font-size="10">• Memory Management</text><rect x="210" y="15" width="160" height="100" rx="6" fill="#131720" stroke="#f59e0b" stroke-width="1.5"/><text x="225" y="40" fill="#f59e0b" font-weight="bold" font-size="11">APP ACCESSORIES</text><text x="225" y="65" fill="#94a3b8" font-size="10">• MS Office &amp; Browsers</text><text x="225" y="85" fill="#94a3b8" font-size="10">• Games &amp; Media Players</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="160" height="100" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/><text x="45" y="40" fill="#0369a1" font-weight="bold" font-size="11">SYSTEM ENGINE</text><text x="45" y="65" fill="#334155" font-size="10">• OS Kernel &amp; Drivers</text><text x="45" y="85" fill="#334155" font-size="10">• Memory Management</text><rect x="210" y="15" width="160" height="100" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><text x="225" y="40" fill="#b45309" font-weight="bold" font-size="11">APP ACCESSORIES</text><text x="225" y="65" fill="#334155" font-size="10">• MS Office &amp; Browsers</text><text x="225" y="85" fill="#334155" font-size="10">• Games &amp; Media Players</text></svg>`,
          swSub: "Operating System & Utility Programs",
          swDel: "Windows 11 Kernel, Device Drivers, Compiler Translator Tools.",
          swWarn: "Without System Software, hardware components cannot communicate with application software.",
          swVisLabel: "Layered Software Architecture",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="15" width="320" height="25" rx="4" fill="#0284c7"/><text x="140" y="32" fill="#fff" font-weight="bold" font-size="10">USER APPLICATIONS</text><rect x="40" y="48" width="320" height="25" rx="4" fill="#0d9488"/><text x="130" y="65" fill="#fff" font-weight="bold" font-size="10">SYSTEM SOFTWARE (OS)</text><rect x="40" y="81" width="320" height="25" rx="4" fill="#334155"/><text x="160" y="98" fill="#fff" font-weight="bold" font-size="10">HARDWARE</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="15" width="320" height="25" rx="4" fill="#0284c7"/><text x="140" y="32" fill="#fff" font-weight="bold" font-size="10">USER APPLICATIONS</text><rect x="40" y="48" width="320" height="25" rx="4" fill="#0d9488"/><text x="130" y="65" fill="#fff" font-weight="bold" font-size="10">SYSTEM SOFTWARE (OS)</text><rect x="40" y="81" width="320" height="25" rx="4" fill="#64748b"/><text x="160" y="98" fill="#fff" font-weight="bold" font-size="10">HARDWARE</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 2 (a) • Board Short Answer Guide",
        qNum: "Q. No 2 (a)",
        heading: "CLASSIFICATION OF SOFTWARE",
        definitionText: "Software is divided into System Software (manages hardware) and Application Software (performs end-user tasks).",
        presentationRules: [
          "Use 605 Cut Marker for main heading: SYSTEM SOFTWARE vs APPLICATION SOFTWARE",
          "Draw 2-column comparative table with bullet points",
          "Give 2 verbatim examples per category (e.g. Windows 11 vs MS Word)"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-1-1",
          questionType: "MCQ",
          statement: "Which of the following is classified as System Software?",
          options: [
            "A. MS PowerPoint",
            "B. Operating System (Windows 11)",
            "C. Google Chrome",
            "D. Adobe Photoshop"
          ],
          correctOption: 1,
          rubricNotes: "Official Marking Scheme: 1 Mark for Option B (Operating System). System software manages core hardware resources. (BISE Sargodha 2024)",
          subConceptTag: "Software Classification"
        }
      ]
    },
    {
      id: "topic-1.2",
      topicCode: "Topic 1.2",
      title: "Software Development Life Cycle (SDLC)",
      slug: "sdlc-phases-and-workflow",
      duration: "25 mins",
      examFrequencyBadge: "Repeated Board Long Q",
      pastPapers: [
        "BISE Sargodha 2024 (Q3)",
        "BISE Lahore 2022 (Q5)",
        "BISE Rawalpindi 2023 (Q2)",
        "BISE Gujranwala 2024 (MCQ 4)"
      ],
      verbatimDefinition: "Software Development Life Cycle (SDLC) is a standard structured framework consisting of sequential phases used by software engineers to plan, analyze, design, code, test, deploy, and maintain quality software systems.",
      paperPresentationTip: "Draw a neat block flow diagram connecting all 6 phases with arrows in serial order. Label SRS under Analysis and DDS under Design for full 5 marks.",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "Requirement Gathering & Analysis",
          teacherSpokenCue: "جب آپ کوئی نیا مکان بنانا چاہتے ہیں تو اینٹیں خریدنے سے پہلے مالک کی خواہشات، بجٹ اور قانونی منظوری حاصل کرتے ہیں، بالکل ایسے ہی سافٹ ویئر شروع کرنے سے پہلے SRS Document تیار کیا جاتا ہے۔",
          rwSub: "Client Survey & Land Plot",
          rwEn: "Surveying the land plot and meeting the family to decide how many bedrooms, bathrooms, and parking spaces are required.",
          rwUr: "گھر بنانے سے پہلے فیملی سے مل کر کمروں، کچن اور بجٹ کی تفصیلی ضروریات معلوم کرنا۔",
          rwVisLabel: "Plot & Needs Survey",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="160" height="100" rx="6" fill="#131720" stroke="#d97706" stroke-width="1.5"/><text x="45" y="40" fill="#f59e0b" font-weight="bold" font-size="11">Owner Wishlist</text><circle cx="55" cy="62" r="3.5" fill="#10b981"/><text x="70" y="66" fill="#94a3b8" font-size="10">4 Bedrooms</text><circle cx="55" cy="84" r="3.5" fill="#10b981"/><text x="70" y="88" fill="#94a3b8" font-size="10">Double Garage</text><circle cx="55" cy="106" r="3.5" fill="#10b981"/><text x="70" y="110" fill="#94a3b8" font-size="10">Solar Wiring</text><rect x="220" y="20" width="150" height="90" rx="6" fill="#181d26" stroke="#475569"/><text x="240" y="48" fill="#38bdf8" font-size="11" font-weight="bold">Land Survey</text><path d="M240 68 L340 68 M240 88 L310 88" stroke="#64748b" stroke-width="2"/></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="160" height="100" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><text x="45" y="40" fill="#b45309" font-weight="bold" font-size="11">Owner Wishlist</text><circle cx="55" cy="62" r="3.5" fill="#059669"/><text x="70" y="66" fill="#334155" font-size="10">4 Bedrooms</text><circle cx="55" cy="84" r="3.5" fill="#059669"/><text x="70" y="88" fill="#334155" font-size="10">Double Garage</text><circle cx="55" cy="106" r="3.5" fill="#059669"/><text x="70" y="110" fill="#334155" font-size="10">Solar Wiring</text><rect x="220" y="20" width="150" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><text x="240" y="48" fill="#0284c7" font-size="11" font-weight="bold">Land Survey</text><path d="M240 68 L340 68 M240 88 L310 88" stroke="#94a3b8" stroke-width="2"/></svg>`,
          swSub: "SRS Specification & Constraints",
          swDel: "Software Requirement Specification (SRS) document, User Stories, and Functional vs Non-Functional constraints.",
          swWarn: "Developers build features nobody wanted; 100% budget wasted.",
          swVisLabel: "SRS Document Scope",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="340" height="110" rx="6" fill="#131720" stroke="#0d9488" stroke-width="1.5"/><rect x="45" y="25" width="140" height="80" rx="4" fill="#181d26"/><text x="55" y="44" fill="#2dd4bf" font-weight="bold" font-size="10">Functional Reqs</text><text x="55" y="65" fill="#94a3b8" font-size="9.5">• User Login</text><text x="55" y="83" fill="#94a3b8" font-size="9.5">• Checkout Cart</text><rect x="215" y="25" width="140" height="80" rx="4" fill="#181d26"/><text x="225" y="44" fill="#c084fc" font-weight="bold" font-size="10">Non-Functional</text><text x="225" y="65" fill="#94a3b8" font-size="9.5">• &lt; 2s Load Time</text><text x="225" y="83" fill="#94a3b8" font-size="9.5">• 99.9% Uptime</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="340" height="110" rx="6" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/><rect x="45" y="25" width="140" height="80" rx="4" fill="#ffffff" stroke="#ccfbf1"/><text x="55" y="44" fill="#0f766e" font-weight="bold" font-size="10">Functional Reqs</text><text x="55" y="65" fill="#475569" font-size="9.5">• User Login</text><text x="55" y="83" fill="#475569" font-size="9.5">• Checkout Cart</text><rect x="215" y="25" width="140" height="80" rx="4" fill="#ffffff" stroke="#f3e8ff"/><text x="225" y="44" fill="#7e22ce" font-weight="bold" font-size="10">Non-Functional</text><text x="225" y="65" fill="#475569" font-size="9.5">• &lt; 2s Load Time</text><text x="225" y="83" fill="#475569" font-size="9.5">• 99.9% Uptime</text></svg>`
        },
        {
          stageNumber: 2,
          stageTitle: "System Design & Architecture",
          teacherSpokenCue: "اینٹیں رکھنے سے پہلے مکان کا تفصیلی بلوا پرنٹ نقشہ کاغذ پر ڈرا کیا جاتا ہے۔ سافٹ ویئر انجینئرز UML Diagrams اور DB Schemas بناتے ہیں۔",
          rwSub: "House Blueprint & Layout Map",
          rwEn: "Architects draw 2D/3D maps showing exact room sizes, electrical wiring routes, and plumbing pipes before any brick is purchased.",
          rwUr: "عمارت کا باقاعدہ نقشہ اور ڈرائنگ بنانا جس میں کمروں کی پیمائش اور پائپ لائنز طے ہوتی ہیں۔",
          rwVisLabel: "2D Architectural Floorplan",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="15" width="320" height="100" fill="#131720" stroke="#d97706" stroke-width="1.5"/><line x1="160" y1="15" x2="160" y2="115" stroke="#d97706" stroke-width="1.5"/><line x1="40" y1="70" x2="160" y2="70" stroke="#d97706" stroke-width="1.5"/><text x="60" y="45" fill="#cbd5e1" font-size="10" font-weight="bold">Master Bed</text><text x="75" y="98" fill="#cbd5e1" font-size="10" font-weight="bold">Kitchen</text><text x="210" y="70" fill="#cbd5e1" font-size="11" font-weight="bold">Living Hall &amp; Dining</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="15" width="320" height="100" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><line x1="160" y1="15" x2="160" y2="115" stroke="#d97706" stroke-width="1.5"/><line x1="40" y1="70" x2="160" y2="70" stroke="#d97706" stroke-width="1.5"/><text x="60" y="45" fill="#78350f" font-size="10" font-weight="bold">Master Bed</text><text x="75" y="98" fill="#78350f" font-size="10" font-weight="bold">Kitchen</text><text x="210" y="70" fill="#78350f" font-size="11" font-weight="bold">Living Hall &amp; Dining</text></svg>`,
          swSub: "UML & Database Architecture",
          swDel: "UML Diagrams (Class, Use Case, Sequence), Database ER Schemas, and UI Screen Wireframes.",
          swWarn: "Spaghetti Code! Making a single change later breaks 10 other modules.",
          swVisLabel: "UML Class Diagram",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="130" height="100" rx="4" fill="#131720" stroke="#0d9488" stroke-width="1.5"/><rect x="30" y="15" width="130" height="22" fill="#115e59"/><text x="65" y="30" fill="#ffffff" font-weight="bold" font-size="10">User Class</text><text x="40" y="55" fill="#94a3b8" font-size="9">- id: int</text><text x="40" y="70" fill="#94a3b8" font-size="9">- name: string</text><line x1="30" y1="80" x2="160" y2="80" stroke="#334155"/><text x="40" y="98" fill="#2dd4bf" font-size="9">+ login()</text><path d="M160 60 L240 60" stroke="#0d9488" stroke-width="1.5"/><rect x="240" y="15" width="130" height="100" rx="4" fill="#131720" stroke="#10b981" stroke-width="1.5"/><rect x="240" y="15" width="130" height="22" fill="#047857"/><text x="270" y="30" fill="#ffffff" font-weight="bold" font-size="10">Order Class</text><text x="250" y="55" fill="#94a3b8" font-size="9">- orderId: int</text><text x="250" y="70" fill="#94a3b8" font-size="9">- total: float</text><line x1="240" y1="80" x2="370" y2="80" stroke="#334155"/><text x="250" y="98" fill="#34d399" font-size="9">+ placeOrder()</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="130" height="100" rx="4" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/><rect x="30" y="15" width="130" height="22" fill="#0d9488"/><text x="65" y="30" fill="#ffffff" font-weight="bold" font-size="10">User Class</text><text x="40" y="55" fill="#475569" font-size="9">- id: int</text><text x="40" y="70" fill="#475569" font-size="9">- name: string</text><line x1="30" y1="80" x2="160" y2="80" stroke="#ccfbf1"/><text x="40" y="98" fill="#0f766e" font-size="9">+ login()</text><path d="M160 60 L240 60" stroke="#0d9488" stroke-width="1.5"/><rect x="240" y="15" width="130" height="100" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><rect x="240" y="15" width="130" height="22" fill="#10b981"/><text x="270" y="30" fill="#ffffff" font-weight="bold" font-size="10">Order Class</text><text x="250" y="55" fill="#475569" font-size="9">- orderId: int</text><text x="250" y="70" fill="#475569" font-size="9">- total: float</text><line x1="240" y1="80" x2="370" y2="80" stroke="#d1fae5"/><text x="250" y="98" fill="#047857" font-size="9">+ placeOrder()</text></svg>`
        },
        {
          stageNumber: 3,
          stageTitle: "Coding & Implementation",
          teacherSpokenCue: "نقشہ منظور ہونے پر راج مستری اینٹیں اور سیمنٹ لگاتے ہیں۔ پروگرامرز Python یا C++ میں کوڈ لکھتے ہیں۔",
          rwSub: "Masonry & Physical Construction",
          rwEn: "Masons and laborers laying concrete foundations, placing bricks, and constructing physical walls.",
          rwUr: "مستری اور مزدوروں کا اینٹیں چننا اور سیمنٹ کے ذریعے باقاعدہ تعمیر شروع کرنا۔",
          rwVisLabel: "Bricklaying & Structure",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="105" width="300" height="12" fill="#334155"/><rect x="60" y="82" width="45" height="18" fill="#b45309" stroke="#78350f"/><rect x="110" y="82" width="45" height="18" fill="#b45309" stroke="#78350f"/><rect x="160" y="82" width="45" height="18" fill="#b45309" stroke="#78350f"/><rect x="210" y="82" width="45" height="18" fill="#b45309" stroke="#78350f"/><rect x="85" y="60" width="45" height="18" fill="#d97706" stroke="#78350f"/><rect x="135" y="60" width="45" height="18" fill="#d97706" stroke="#78350f"/><rect x="185" y="60" width="45" height="18" fill="#d97706" stroke="#78350f"/></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="105" width="300" height="12" fill="#cbd5e1"/><rect x="60" y="82" width="45" height="18" fill="#d97706" stroke="#92400e"/><rect x="110" y="82" width="45" height="18" fill="#d97706" stroke="#92400e"/><rect x="160" y="82" width="45" height="18" fill="#d97706" stroke="#92400e"/><rect x="210" y="82" width="45" height="18" fill="#d97706" stroke="#92400e"/><rect x="85" y="60" width="45" height="18" fill="#f59e0b" stroke="#92400e"/><rect x="135" y="60" width="45" height="18" fill="#f59e0b" stroke="#92400e"/><rect x="185" y="60" width="45" height="18" fill="#f59e0b" stroke="#92400e"/></svg>`,
          swSub: "Writing Code in Python",
          swDel: "Source Code (.py / .cpp files), Database Tables Created, and API Endpoints.",
          swWarn: "Without coding, ideas remain forever on paper with zero working capability.",
          swVisLabel: "Python Code Editor",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="340" height="110" rx="6" fill="#131720" stroke="#334155" stroke-width="1.5"/><circle cx="48" cy="22" r="3" fill="#ef4444"/><circle cx="58" cy="22" r="3" fill="#f59e0b"/><circle cx="68" cy="22" r="3" fill="#10b981"/><text x="45" y="50" fill="#f43f5e" font-family="monospace" font-size="10">def</text><text x="70" y="50" fill="#38bdf8" font-family="monospace" font-size="10">calculate_grade(marks):</text><text x="65" y="70" fill="#f43f5e" font-family="monospace" font-size="10">if</text><text x="85" y="70" fill="#e2e8f0" font-family="monospace" font-size="10">marks &gt;= 80:</text><text x="85" y="90" fill="#c084fc" font-family="monospace" font-size="10">return <tspan fill="#a3e635">&quot;A+ Grade&quot;</tspan></text><text x="65" y="108" fill="#f43f5e" font-family="monospace" font-size="10">else:</text><text x="85" y="108" fill="#c084fc" font-family="monospace" font-size="10">return <tspan fill="#a3e635">&quot;Pass&quot;</tspan></text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="340" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><circle cx="48" cy="22" r="3" fill="#ef4444"/><circle cx="58" cy="22" r="3" fill="#f59e0b"/><circle cx="68" cy="22" r="3" fill="#10b981"/><text x="45" y="50" fill="#e11d48" font-family="monospace" font-size="10">def</text><text x="70" y="50" fill="#0284c7" font-family="monospace" font-size="10">calculate_grade(marks):</text><text x="65" y="70" fill="#e11d48" font-family="monospace" font-size="10">if</text><text x="85" y="70" fill="#1e293b" font-family="monospace" font-size="10">marks &gt;= 80:</text><text x="85" y="90" fill="#7c3aed" font-family="monospace" font-size="10">return <tspan fill="#16a34a">&quot;A+ Grade&quot;</tspan></text><text x="65" y="108" fill="#e11d48" font-family="monospace" font-size="10">else:</text><text x="85" y="108" fill="#7c3aed" font-family="monospace" font-size="10">return <tspan fill="#16a34a">&quot;Pass&quot;</tspan></text></svg>`
        },
        {
          stageNumber: 4,
          stageTitle: "Testing & Quality Assurance",
          teacherSpokenCue: "گھر میں شفٹ ہونے سے پہلے پانی کے پائپوں کا پریشر ٹیسٹ اور بجلی کی وائرنگ چیک کی جاتی ہے۔ QA ٹیسٹرز بگز تلاش کرتے ہیں۔",
          rwSub: "Plumbing & Electrical Safety Tests",
          rwEn: "Testing plumbing pressure, gas leakage, and electrical circuit breakers before shifting into the house.",
          rwUr: "گھر میں شفٹ ہونے سے پہلے گیس، پانی کے پائپ اور بجلی کی وائرنگ کا مکمل معائنہ کرنا۔",
          rwVisLabel: "Pressure & Leak Testing",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#10b981" stroke-width="1.5"/><text x="80" y="50" fill="#34d399" font-weight="bold" font-size="11">✓ Plumbing Pressure: PASSED</text><text x="80" y="75" fill="#34d399" font-weight="bold" font-size="11">✓ Electrical Breakers: PASSED</text><text x="80" y="100" fill="#f87171" font-weight="bold" font-size="11">✗ Window Seal Leak: FIXED</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><text x="80" y="50" fill="#047857" font-weight="bold" font-size="11">✓ Plumbing Pressure: PASSED</text><text x="80" y="75" fill="#047857" font-weight="bold" font-size="11">✓ Electrical Breakers: PASSED</text><text x="80" y="100" fill="#b91c1c" font-weight="bold" font-size="11">✗ Window Seal Leak: FIXED</text></svg>`,
          swSub: "Unit, Integration & System Testing",
          swDel: "Test Cases Log, Bug Tracking Sheet, and User Acceptance Testing (UAT) Sign-off.",
          swWarn: "Critical bugs crash production on launch day, causing financial loss.",
          swVisLabel: "Automated QA Test Suite",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="340" height="100" rx="6" fill="#131720" stroke="#0d9488" stroke-width="1.5"/><text x="50" y="45" fill="#2dd4bf" font-family="monospace" font-size="11">PASS src/auth.test.py (14ms)</text><text x="50" y="70" fill="#2dd4bf" font-family="monospace" font-size="11">PASS src/cart.test.py (22ms)</text><text x="50" y="95" fill="#38bdf8" font-family="monospace" font-size="11">Tests: 2 passed, 2 total</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="340" height="100" rx="6" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/><text x="50" y="45" fill="#0f766e" font-family="monospace" font-size="11">PASS src/auth.test.py (14ms)</text><text x="50" y="70" fill="#0f766e" font-family="monospace" font-size="11">PASS src/cart.test.py (22ms)</text><text x="50" y="95" fill="#0284c7" font-family="monospace" font-size="11">Tests: 2 passed, 2 total</text></svg>`
        },
        {
          stageNumber: 5,
          stageTitle: "Deployment & Release",
          teacherSpokenCue: "مکان کی چابیاں مالک کے حوالے کرنا اور گھر میں منتقل ہونا۔ سافٹ ویئر کو لائیو سرور پر ڈیپلائے کرنا۔",
          rwSub: "Housewarming & Keys Handover",
          rwEn: "Handing over keys to the family during housewarming celebration and occupancy approval.",
          rwUr: "مالک کو مکان کی چابیاں سپرد کرنا تاکہ وہ منتقل ہو سکے۔",
          rwVisLabel: "Occupancy Approval",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#f59e0b" stroke-width="1.5"/><text x="80" y="55" fill="#f59e0b" font-weight="bold" font-size="12">KEY HANDOVER &amp; PERMIT</text><text x="80" y="80" fill="#94a3b8" font-size="10">• Occupancy Certificate Granted</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><text x="80" y="55" fill="#b45309" font-weight="bold" font-size="12">KEY HANDOVER &amp; PERMIT</text><text x="80" y="80" fill="#475569" font-size="10">• Occupancy Certificate Granted</text></svg>`,
          swSub: "Cloud Production Release",
          swDel: "Production Release Package, Server Logs, User Manual.",
          swWarn: "Skipping deployment prep causes downtime during live customer release.",
          swVisLabel: "AWS Live Deployment",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#10b981" stroke-width="1.5"/><text x="80" y="55" fill="#34d399" font-weight="bold" font-size="12">AWS CLOUD INSTANCE LIVE</text><text x="80" y="80" fill="#38bdf8" font-size="10">• SSL Active • Status 100% Operational</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><text x="80" y="55" fill="#047857" font-weight="bold" font-size="12">AWS CLOUD INSTANCE LIVE</text><text x="80" y="80" fill="#0284c7" font-size="10">• SSL Active • Status 100% Operational</text></svg>`
        },
        {
          stageNumber: 6,
          stageTitle: "Maintenance & Operations",
          teacherSpokenCue: "وقت کے ساتھ گھر میں سفیدی، پینٹ اور پائپوں کی مرمت کرنا تاکہ مکان پائیدار رہے۔",
          rwSub: "Annual Renovations & Repairs",
          rwEn: "Scheduling annual paint touch-ups, plumbing repairs, and solar maintenance.",
          rwUr: "وقت کے ساتھ مکان کی سفیدی، پینٹ اور پائپوں کی مرمت تاکہ عمارت محفوظ رہے۔",
          rwVisLabel: "Annual House Repairs",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#f59e0b" stroke-width="1.5"/><text x="80" y="55" fill="#f59e0b" font-weight="bold" font-size="12">ANNUAL HOUSE RENOVATION</text><text x="80" y="80" fill="#94a3b8" font-size="10">• Wall Touch-ups • Roof Leak Seals</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><text x="80" y="55" fill="#b45309" font-weight="bold" font-size="12">ANNUAL HOUSE RENOVATION</text><text x="80" y="80" fill="#475569" font-size="10">• Wall Touch-ups • Roof Leak Seals</text></svg>`,
          swSub: "Security Updates & Bug Fixes",
          swDel: "Security Patches, Upgrades Log, Performance Tunes.",
          swWarn: "Unmaintained software suffers data breaches from cyber exploits.",
          swVisLabel: "Patches & Upgrades",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#131720" stroke="#0d9488" stroke-width="1.5"/><text x="80" y="55" fill="#2dd4bf" font-weight="bold" font-size="12">SECURITY PATCH v1.4 APPLIED</text><text x="80" y="80" fill="#34d399" font-size="10">• DB Indexes Optimized • Zero Vulnerabilities</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="300" height="90" rx="6" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/><text x="80" y="55" fill="#0f766e" font-weight="bold" font-size="12">SECURITY PATCH v1.4 APPLIED</text><text x="80" y="80" fill="#047857" font-size="10">• DB Indexes Optimized • Zero Vulnerabilities</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 3 (a) • Board Long Answer Guide",
        qNum: "Q. No 3 (a)",
        heading: "SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)",
        definitionText: "Software Development Life Cycle (SDLC) is a standard structured framework consisting of sequential phases used by software engineers to plan, analyze, design, code, test, deploy, and maintain quality software systems.",
        presentationRules: [
          "Use 605 Cut Marker for main header: SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)",
          "Draw neat cyclic flowchart connecting all 6 phases with lead pencil",
          "Explicitly label SRS under Stage 1 and DDS under Stage 2 for full 5 marks"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-sdlc-1",
          questionType: "MCQ",
          statement: "Which document is created as the primary output deliverable of the System Design phase in SDLC?",
          options: [
            "A. Software Requirement Specification (SRS)",
            "B. Design Document Specification (DDS)",
            "C. Feasibility Study Report",
            "D. User Acceptance Testing (UAT) Report"
          ],
          correctOption: 1,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for option B (DDS). Note: SRS belongs to Requirement Analysis, while DDS belongs to System Design. (BISE Sargodha 2024 / Lahore 2022)",
          subConceptTag: "SDLC Deliverables"
        },
        {
          id: "mcq-sdlc-2",
          questionType: "MCQ",
          statement: "In which phase of SDLC are software engineers responsible for writing actual program code modules?",
          options: [
            "A. Planning Phase",
            "B. Requirement Analysis Phase",
            "C. Implementation Phase",
            "D. Testing Phase"
          ],
          correctOption: 2,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for option C (Implementation / Coding Phase). Code creation happens in Stage 3. (BISE Gujranwala 2024)",
          subConceptTag: "SDLC Workflow"
        }
      ]
    }
  ]
};
