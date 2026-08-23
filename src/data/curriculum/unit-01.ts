import { Unit } from "@/types/curriculum";

export const UNIT_01_DATA: Unit = {
  id: "unit-1",
  unitNumber: 1,
  title: "Introduction to Software Development",
  pairingSchemeNote: "Board Pairing 2026: Unit 1 carries 1 Long Q (Part A - 5 Marks) + 2 Short Qs (4 Marks)",
  progressPercent: 100,
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
          teacherSpokenCue: "سسٹم سافٹ ویئر گاڑی کے انجن کی طرح بنیادی کام چلاتا ہے جبکہ ایپلیکیشن سافٹ ویئر سہولیات فراہم کرتا ہے۔",
          rwSub: "Engine & Dashboard Analogy",
          rwEn: "System software acts like a car's engine and transmission system, while application software is like the air conditioner and audio system.",
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
          teacherSpokenCue: "اگر آپ نیا مکان بنانا چاہتے ہیں تو اینٹیں خریدنے سے پہلے مالک کی خواہشات، بجٹ اور قانونی منظوری حاصل کرتے ہیں، بالکل ایسے ہی سافٹ ویئر شروع کرنے سے پہلے SRS تیار کیا جاتا ہے۔",
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
          teacherSpokenCue: "اینٹیں رکھنے سے پہلے مکان کا تفصیلی نقشہ بنایا جاتا ہے۔ سافٹ ویئر انجینئرز UML Diagrams اور DB Schemas بناتے ہیں۔",
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
          teacherSpokenCue: "گھر میں شفٹ ہونے سے پہلے پانی کے پائپوں کا پریشر ٹیسٹ اور بجلی کی وائرنگ چیک کی جاتی ہے۔",
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
    },
    {
      id: "topic-1.3",
      topicCode: "Topic 1.3",
      title: "Software Development Models (Waterfall vs Agile / Scrum)",
      slug: "sdlc-waterfall-vs-agile-models",
      duration: "20 mins",
      examFrequencyBadge: "Repeated Board Long Q",
      pastPapers: ["BISE Lahore 2024 (Q4)", "BISE Sargodha 2023 (Q3)"],
      verbatimDefinition: "Software Development Models define the execution strategy of SDLC. The Waterfall Model is linear and sequential, suitable for fixed requirements. Agile/Scrum is iterative and flexible, delivering software in short 2-week sprints.",
      paperPresentationTip: "Draw a comparative 2-column table distinguishing Waterfall (Linear, High Risk, Fixed Requirements) vs Agile (Iterative, Sprints, Dynamic Requirements).",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "Linear Waterfall Model",
          teacherSpokenCue: "واٹرفال ماڈل آبشار کی طرح اوپر سے نیچے بہتا ہے؛ ایک بار مرحلہ گزر جائے تو واپس نہیں جایا جا سکتا۔",
          rwSub: "Concrete Bridge Construction",
          rwEn: "Building a concrete bridge follows strict linear steps: Pillar casting ➔ Concrete pouring ➔ Road surfacing. You cannot change foundation design halfway.",
          rwUr: "کنکریٹ پل کی تعمیر میں بنیادیں بھرنے کے بعد سائز تبدیل نہیں کیا جا سکتا، بالکل ایسے ہی واٹرفال میں تبدیلی مشکل ہوتی ہے۔",
          rwVisLabel: "Linear Waterfall Flow",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="100" height="25" rx="4" fill="#4f46e5"/><text x="45" y="32" fill="#fff" font-size="10" font-weight="bold">Requirements</text><path d="M130 27 L160 45" stroke="#6366f1" stroke-width="2"/><rect x="160" y="45" width="100" height="25" rx="4" fill="#0d9488"/><text x="185" y="62" fill="#fff" font-size="10" font-weight="bold">Design</text><path d="M260 57 L290 75" stroke="#0d9488" stroke-width="2"/><rect x="290" y="75" width="90" height="25" rx="4" fill="#d97706"/><text x="315" y="92" fill="#fff" font-size="10" font-weight="bold">Coding</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="100" height="25" rx="4" fill="#4f46e5"/><text x="45" y="32" fill="#fff" font-size="10" font-weight="bold">Requirements</text><path d="M130 27 L160 45" stroke="#6366f1" stroke-width="2"/><rect x="160" y="45" width="100" height="25" rx="4" fill="#0d9488"/><text x="185" y="62" fill="#fff" font-size="10" font-weight="bold">Design</text><path d="M260 57 L290 75" stroke="#0d9488" stroke-width="2"/><rect x="290" y="75" width="90" height="25" rx="4" fill="#d97706"/><text x="315" y="92" fill="#fff" font-size="10" font-weight="bold">Coding</text></svg>`,
          swSub: "Rigid Sequential Deliverables",
          swDel: "Fixed SRS Contract, Sequential Milestone Reports.",
          swWarn: "Late requirement changes in Waterfall require restarting the entire cycle.",
          swVisLabel: "Waterfall Phase Cascade",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#131720" stroke="#4f46e5" stroke-width="1.5"/><text x="60" y="50" fill="#818cf8" font-weight="bold" font-size="11">WATERFALL CASCADE</text><text x="60" y="75" fill="#94a3b8" font-size="10">• SRS Signed ➔ Design ➔ Coding ➔ Testing</text><text x="60" y="95" fill="#f87171" font-size="10">• Zero Backtracking Allowed</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#f4f4f5" stroke="#4f46e5" stroke-width="1.5"/><text x="60" y="50" fill="#4338ca" font-weight="bold" font-size="11">WATERFALL CASCADE</text><text x="60" y="75" fill="#3f3f46" font-size="10">• SRS Signed ➔ Design ➔ Coding ➔ Testing</text><text x="60" y="95" fill="#dc2626" font-size="10">• Zero Backtracking Allowed</text></svg>`
        },
        {
          stageNumber: 2,
          stageTitle: "Iterative Agile & Scrum Sprints",
          teacherSpokenCue: "ایجائل ماڈل میں دو دو ہفتوں کے اسپرنٹس (Sprints) میں سافٹ ویئر تیار کر کے گاہک کو دکھایا جاتا ہے۔",
          rwSub: "Modular House Additions",
          rwEn: "Building a house modularly: completing the ground floor first for occupancy while designing the first floor based on live feedback.",
          rwUr: "پہلے گراؤنڈ فلور بنا کر رہائش اختیار کرنا اور تجربے کی روشنی میں فرسٹ فلور تعمیر کرنا۔",
          rwVisLabel: "2-Week Sprint Cycle",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="65" r="45" stroke="#10b981" stroke-width="2" fill="#131720"/><text x="175" y="62" fill="#34d399" font-weight="bold" font-size="11">SPRINT</text><text x="172" y="76" fill="#94a3b8" font-size="9">2-Week Loop</text><path d="M155 65 A45 45 0 0 1 245 65" stroke="#10b981" stroke-width="3" stroke-dasharray="4 2"/></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="65" r="45" stroke="#10b981" stroke-width="2" fill="#ecfdf5"/><text x="175" y="62" fill="#047857" font-weight="bold" font-size="11">SPRINT</text><text x="172" y="76" fill="#374151" font-size="9">2-Week Loop</text><path d="M155 65 A45 45 0 0 1 245 65" stroke="#10b981" stroke-width="3" stroke-dasharray="4 2"/></svg>`,
          swSub: "Continuous Integration & Incremental Release",
          swDel: "Product Backlog, Sprint Burndown Charts, Working Software Increments.",
          swWarn: "Agile requires continuous customer participation; lack of feedback stalls sprints.",
          swVisLabel: "Agile Iterative Loop",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#131720" stroke="#10b981" stroke-width="1.5"/><text x="60" y="50" fill="#34d399" font-weight="bold" font-size="11">AGILE SCRUM ITERATION</text><text x="60" y="75" fill="#94a3b8" font-size="10">• Plan ➔ Sprint Build ➔ Review ➔ Retrospective</text><text x="60" y="95" fill="#34d399" font-size="10">• High Customer Satisfaction ✓</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><text x="60" y="50" fill="#047857" font-weight="bold" font-size="11">AGILE SCRUM ITERATION</text><text x="60" y="75" fill="#374151" font-size="10">• Plan ➔ Sprint Build ➔ Review ➔ Retrospective</text><text x="60" y="95" fill="#047857" font-size="10">• High Customer Satisfaction ✓</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 4 (a) • Board Long Answer Guide",
        qNum: "Q. No 4 (a)",
        heading: "WATERFALL MODEL vs AGILE MODEL",
        definitionText: "Waterfall is a rigid sequential SDLC model best suited for projects with stable requirements. Agile is an iterative model focusing on rapid 2-week sprint releases and continuous feedback.",
        presentationRules: [
          "Draw 2-column comparative table with 605 Cut Marker",
          "Include contrast criteria: Flexibility, Risk, Customer Involvement, Delivery Time",
          "Draw small Waterfall cascade & Agile sprint loop diagrams"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-1-3-1",
          questionType: "MCQ",
          statement: "Which SDLC model is most suitable when project requirements are completely fixed and unchanging?",
          options: [
            "A. Agile Model",
            "B. Waterfall Model",
            "C. Extreme Programming",
            "D. Evolutionary Model"
          ],
          correctOption: 1,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for Option B (Waterfall Model). Fixed requirements suit linear progression. (BISE Lahore 2024)",
          subConceptTag: "SDLC Models"
        }
      ]
    },
    {
      id: "topic-1.4",
      topicCode: "Topic 1.4",
      title: "Software Cost Estimation & Project Planning",
      slug: "software-cost-estimation-and-planning",
      duration: "20 mins",
      examFrequencyBadge: "Important Short Q",
      pastPapers: ["BISE Sargodha 2023 (Q2)", "BISE Rawalpindi 2024 (MCQ 2)"],
      verbatimDefinition: "Software Cost Estimation involves predicting the effort, time, and budget required to develop software. Metrics include Lines of Code (LoC) and Function Points (FP). Project planning uses Gantt Charts for schedule tracking.",
      paperPresentationTip: "Write short notes on LoC vs Function Points and define Scope Creep clearly with bullet points.",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "Effort Metrics (LoC & Function Points)",
          teacherSpokenCue: "جس طرح سڑک کا خرچہ کلومیٹر میں ماپا جاتا ہے، سافٹ ویئر کا سائز Lines of Code اور Function Points میں ناپا جاتا ہے۔",
          rwSub: "Material Ledger & Cost Estimation",
          rwEn: "Estimating construction budget based on total brick count (LoC equivalent) vs functional room utility (Function Point equivalent).",
          rwUr: "عمارت کا خرچہ اینٹوں کی تعداد (Lines of Code) یا کمروں کی افادیت (Function Points) سے تخمینہ لگانا۔",
          rwVisLabel: "LoC vs Function Point Comparison",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="150" height="90" rx="6" fill="#131720" stroke="#f59e0b" stroke-width="1.5"/><text x="55" y="45" fill="#f59e0b" font-weight="bold" font-size="11">Lines of Code (LoC)</text><text x="55" y="70" fill="#94a3b8" font-size="10">• Code volume count</text><rect x="210" y="20" width="150" height="90" rx="6" fill="#131720" stroke="#38bdf8" stroke-width="1.5"/><text x="225" y="45" fill="#38bdf8" font-weight="bold" font-size="11">Function Points (FP)</text><text x="225" y="70" fill="#94a3b8" font-size="10">• User feature utility</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="150" height="90" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><text x="55" y="45" fill="#b45309" font-weight="bold" font-size="11">Lines of Code (LoC)</text><text x="55" y="70" fill="#374151" font-size="10">• Code volume count</text><rect x="210" y="20" width="150" height="90" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/><text x="225" y="45" fill="#0369a1" font-weight="bold" font-size="11">Function Points (FP)</text><text x="225" y="70" fill="#374151" font-size="10">• User feature utility</text></svg>`,
          swSub: "COCOMO & Gantt Chart Scheduling",
          swDel: "Project Schedule, COCOMO Estimation Report, Resource Histogram.",
          swWarn: "Uncontrolled scope expansion without budget revision causes project failure (Scope Creep).",
          swVisLabel: "Gantt Chart Timeline",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="25" width="120" height="15" rx="3" fill="#4f46e5"/><text x="45" y="36" fill="#fff" font-size="8">Phase 1: SRS</text><rect x="140" y="50" width="120" height="15" rx="3" fill="#0d9488"/><text x="145" y="61" fill="#fff" font-size="8">Phase 2: Design</text><rect x="240" y="75" width="120" height="15" rx="3" fill="#10b981"/><text x="245" y="86" fill="#fff" font-size="8">Phase 3: Coding</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="25" width="120" height="15" rx="3" fill="#4f46e5"/><text x="45" y="36" fill="#fff" font-size="8">Phase 1: SRS</text><rect x="140" y="50" width="120" height="15" rx="3" fill="#0d9488"/><text x="145" y="61" fill="#fff" font-size="8">Phase 2: Design</text><rect x="240" y="75" width="120" height="15" rx="3" fill="#10b981"/><text x="245" y="86" fill="#fff" font-size="8">Phase 3: Coding</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 2 (b) • Board Short Answer Guide",
        qNum: "Q. No 2 (b)",
        heading: "SOFTWARE COST ESTIMATION & SCOPE CREEP",
        definitionText: "Software cost estimation predicts budget, timeline, and developer effort using metrics such as Function Points and COCOMO model. Scope Creep refers to uncontrolled growth in project requirements without budget adjustments.",
        presentationRules: [
          "Define Function Points (FP) and Lines of Code (LoC)",
          "Highlight Scope Creep warning in a red/alert box",
          "Mention Gantt Chart as the primary scheduling tool"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-1-4-1",
          questionType: "MCQ",
          statement: "Uncontrolled growth in project requirements during software development without budget adjustments is known as:",
          options: [
            "A. Scope Creep",
            "B. Feature Freeze",
            "C. COCOMO Estimation",
            "D. Sprint Velocity"
          ],
          correctOption: 0,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for Option A (Scope Creep). (BISE Rawalpindi 2024)",
          subConceptTag: "Cost Estimation & Planning"
        }
      ]
    },
    {
      id: "topic-1.5",
      topicCode: "Topic 1.5",
      title: "System Analysis, Modeling & UML Diagrams",
      slug: "system-analysis-and-uml-diagrams",
      duration: "25 mins",
      examFrequencyBadge: "Repeated Board Long Q",
      pastPapers: ["BISE Gujranwala 2024 (Q5)", "BISE Lahore 2023 (Q3)"],
      verbatimDefinition: "System Analysis involves studying system requirements to create visual models. Unified Modeling Language (UML) provides standard diagrams: Use Case Diagrams model actor interactions, while Class Diagrams model structural attributes and methods.",
      paperPresentationTip: "Draw a neat Use Case Diagram showing Actor stick figures connected to oval Use Cases inside a system boundary box.",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "Use Case Diagrams (Actors & Boundaries)",
          teacherSpokenCue: "یوژ کیس ڈایاگرام میں ایکٹر (Actor) اور سسٹم کے افعال (Use Cases) کو بیضوی شکل میں دکھایا جاتا ہے۔",
          rwSub: "Bank ATM Customer Interaction",
          rwEn: "A customer (Actor) interacting with an ATM machine (System Boundary) to perform Withdraw Cash or Check Balance (Use Cases).",
          rwUr: "بینک اے ٹی ایم (سسٹم) کے سامنے کسٹمر (ایکٹر) کا کیش نکالنا یا بیلنس چیک کرنا۔",
          rwVisLabel: "Actor & Use Case Interaction",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="40" r="12" stroke="#38bdf8" stroke-width="2"/><line x1="60" y1="52" x2="60" y2="85" stroke="#38bdf8" stroke-width="2"/><line x1="40" y1="65" x2="80" y2="65" stroke="#38bdf8" stroke-width="2"/><line x1="60" y1="85" x2="45" y2="110" stroke="#38bdf8" stroke-width="2"/><line x1="60" y1="85" x2="75" y2="110" stroke="#38bdf8" stroke-width="2"/><rect x="140" y="15" width="220" height="100" rx="6" fill="#131720" stroke="#475569"/><ellipse cx="250" cy="45" rx="55" ry="18" fill="#1e293b" stroke="#0d9488"/><text x="218" y="48" fill="#2dd4bf" font-size="9" font-weight="bold">Withdraw Cash</text><ellipse cx="250" cy="85" rx="55" ry="18" fill="#1e293b" stroke="#0d9488"/><text x="216" y="88" fill="#2dd4bf" font-size="9" font-weight="bold">Check Balance</text><line x1="80" y1="65" x2="195" y2="45" stroke="#94a3b8" stroke-width="1.5"/><line x1="80" y1="65" x2="195" y2="85" stroke="#94a3b8" stroke-width="1.5"/></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="40" r="12" stroke="#0284c7" stroke-width="2"/><line x1="60" y1="52" x2="60" y2="85" stroke="#0284c7" stroke-width="2"/><line x1="40" y1="65" x2="80" y2="65" stroke="#0284c7" stroke-width="2"/><line x1="60" y1="85" x2="45" y2="110" stroke="#0284c7" stroke-width="2"/><line x1="60" y1="85" x2="75" y2="110" stroke="#0284c7" stroke-width="2"/><rect x="140" y="15" width="220" height="100" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><ellipse cx="250" cy="45" rx="55" ry="18" fill="#ccfbf1" stroke="#0d9488"/><text x="218" y="48" fill="#0f766e" font-size="9" font-weight="bold">Withdraw Cash</text><ellipse cx="250" cy="85" rx="55" ry="18" fill="#ccfbf1" stroke="#0d9488"/><text x="216" y="88" fill="#0f766e" font-size="9" font-weight="bold">Check Balance</text><line x1="80" y1="65" x2="195" y2="45" stroke="#64748b" stroke-width="1.5"/><line x1="80" y1="65" x2="195" y2="85" stroke="#64748b" stroke-width="1.5"/></svg>`,
          swSub: "UML Behavioral Modeling",
          swDel: "Use Case Specification, Actor Hierarchy, System Boundary Box.",
          swWarn: "Omitting actor relationships leads to missing authorization levels in code.",
          swVisLabel: "System Boundary & Use Cases",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#131720" stroke="#38bdf8" stroke-width="1.5"/><text x="60" y="50" fill="#38bdf8" font-weight="bold" font-size="11">UML USE CASE MODEL</text><text x="60" y="75" fill="#94a3b8" font-size="10">• Actor: User / Admin | Oval: Use Cases</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/><text x="60" y="50" fill="#0369a1" font-weight="bold" font-size="11">UML USE CASE MODEL</text><text x="60" y="75" fill="#374151" font-size="10">• Actor: User / Admin | Oval: Use Cases</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 3 (b) • Board Long Answer Guide",
        qNum: "Q. No 3 (b)",
        heading: "UNIFIED MODELING LANGUAGE (UML) DIAGRAMS",
        definitionText: "UML is a standardized visual modeling language in software engineering. Use Case Diagrams illustrate system functionality from the user's perspective, while Class Diagrams model structural attributes and methods.",
        presentationRules: [
          "Draw stick figure for Actor with clear label",
          "Draw ovals for Use Cases inside a rectangle (System Boundary)",
          "Use 605 Cut Marker for diagram titles"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-1-5-1",
          questionType: "MCQ",
          statement: "In a UML Use Case Diagram, an external entity that interacts with the system is represented as a(n):",
          options: [
            "A. Oval",
            "B. Stick Figure (Actor)",
            "C. Diamond",
            "D. Rectangle Class"
          ],
          correctOption: 1,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for Option B (Actor / Stick Figure). (BISE Gujranwala 2024)",
          subConceptTag: "UML Modeling"
        }
      ]
    },
    {
      id: "topic-1.6",
      topicCode: "Topic 1.6",
      title: "Software Quality Assurance (Verification vs Validation & QA Testing)",
      slug: "sqa-verification-vs-validation-testing",
      duration: "20 mins",
      examFrequencyBadge: "Repeated Board Long Q",
      pastPapers: ["BISE Sargodha 2024 (Q5)", "BISE Lahore 2022 (Q4)"],
      verbatimDefinition: "Software Quality Assurance (SQA) ensures software meets quality standards. Verification evaluates intermediate artifacts without running code ('Are we building the product right?'). Validation tests the final software against requirements ('Are we building the right product?').",
      paperPresentationTip: "Draw a 2-column comparative table contrasting Verification (Static Code Review, Inspections) vs Validation (Dynamic Code Execution, UAT).",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "Verification vs Validation",
          teacherSpokenCue: "ویرفی کیشن کا مطلب ہے 'کیا ہم کام صحیح کر رہے ہیں؟' اور ویلی ڈیشن کا مطلب ہے 'کیا ہم صحیح کام کر رہے ہیں؟'",
          rwSub: "Blueprint Audit vs Road Test",
          rwEn: "Verification is inspecting the blueprint on paper before building. Validation is taking the finished car for a test drive on the road.",
          rwUr: "ویرفی کیشن کاغذ پر نقشہ دیکھنا ہے جبکہ ویلی ڈیشن تیار گاڑی کو روڈ پر چلا کر ٹیسٹ کرنا ہے۔",
          rwVisLabel: "Blueprint Review vs Road Test",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="160" height="100" rx="6" fill="#131720" stroke="#38bdf8" stroke-width="1.5"/><text x="45" y="40" fill="#38bdf8" font-weight="bold" font-size="11">VERIFICATION</text><text x="45" y="65" fill="#94a3b8" font-size="10">• Static Code Reviews</text><text x="45" y="85" fill="#94a3b8" font-size="10">• &quot;Building product right?&quot;</text><rect x="210" y="15" width="160" height="100" rx="6" fill="#131720" stroke="#10b981" stroke-width="1.5"/><text x="225" y="40" fill="#10b981" font-weight="bold" font-size="11">VALIDATION</text><text x="225" y="65" fill="#94a3b8" font-size="10">• Dynamic System Testing</text><text x="225" y="85" fill="#94a3b8" font-size="10">• &quot;Building right product?&quot;</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="15" width="160" height="100" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/><text x="45" y="40" fill="#0369a1" font-weight="bold" font-size="11">VERIFICATION</text><text x="45" y="65" fill="#374151" font-size="10">• Static Code Reviews</text><text x="45" y="85" fill="#374151" font-size="10">• &quot;Building product right?&quot;</text><rect x="210" y="15" width="160" height="100" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><text x="225" y="40" fill="#047857" font-weight="bold" font-size="11">VALIDATION</text><text x="225" y="65" fill="#374151" font-size="10">• Dynamic System Testing</text><text x="225" y="85" fill="#374151" font-size="10">• &quot;Building right product?&quot;</text></svg>`,
          swSub: "Black-Box vs White-Box Testing",
          swDel: "Test Plan, Verification Checklist, Validation Execution Report.",
          swWarn: "Confusing verification with validation leads to passing code that fails client business requirements.",
          swVisLabel: "Testing Methodologies",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#131720" stroke="#10b981" stroke-width="1.5"/><text x="60" y="50" fill="#34d399" font-weight="bold" font-size="11">SQA TESTING MATRIX</text><text x="60" y="75" fill="#94a3b8" font-size="10">• Black-Box: Inputs/Outputs | White-Box: Internal Logic</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><text x="60" y="50" fill="#047857" font-weight="bold" font-size="11">SQA TESTING MATRIX</text><text x="60" y="75" fill="#374151" font-size="10">• Black-Box: Inputs/Outputs | White-Box: Internal Logic</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 5 (a) • Board Long Answer Guide",
        qNum: "Q. No 5 (a)",
        heading: "VERIFICATION vs VALIDATION IN SQA",
        definitionText: "Verification evaluates software artifacts during development without executing code to ensure compliance with specs. Validation evaluates the completed software by executing it to ensure user satisfaction.",
        presentationRules: [
          "Use 2-column comparative table with 605 Cut Marker headings",
          "Include golden questions: 'Building product right?' vs 'Building right product?'",
          "List static techniques (Reviews, Inspections) vs dynamic techniques (System Testing, UAT)"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-1-6-1",
          questionType: "MCQ",
          statement: "Which SQA activity checks if we are 'building the right product' according to customer requirements?",
          options: [
            "A. Verification",
            "B. Validation",
            "C. Static Inspection",
            "D. Syntax Compilation"
          ],
          correctOption: 1,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for Option B (Validation). Validation evaluates customer satisfaction against requirements. (BISE Sargodha 2024)",
          subConceptTag: "SQA & Testing"
        }
      ]
    },
    {
      id: "topic-1.7",
      topicCode: "Topic 1.7",
      title: "Software Maintenance, Debugging & Evolution",
      slug: "software-maintenance-debugging-and-evolution",
      duration: "20 mins",
      examFrequencyBadge: "Repeated Short Question",
      pastPapers: ["BISE Lahore 2024 (Q3)", "BISE Gujranwala 2023 (Q4)"],
      verbatimDefinition: "Software Maintenance modifies software after delivery to correct faults, improve performance, or adapt to a changed environment. The 4 types are Corrective, Adaptive, Perfective, and Preventive. Testing detects bugs, whereas Debugging locates and fixes them.",
      paperPresentationTip: "Define the 4 types of maintenance clearly and highlight Testing vs Debugging differences in a bulleted table.",
      conceptStages: [
        {
          stageNumber: 1,
          stageTitle: "4 Maintenance Types & Debugging",
          teacherSpokenCue: "ٹیسٹنگ کا کام کیڑے (Bugs) تلاش کرنا ہے جبکہ ڈیبگنگ کا کام ان کیڑوں کو تلاش کر کے ختم کرنا ہے۔",
          rwSub: "Car Servicing & Upgrades",
          rwEn: "Fixing a punctured tire (Corrective), adjusting engine for CNG fuel (Adaptive), installing turbocharger (Perfective), and changing oil (Preventive).",
          rwUr: "پنکچر لگانا (Corrective)، دوسرے ایندھن پر منتقل ہونا (Adaptive)، انجن کو طاقتور بنانا (Perfective) اور آئل بدلنا (Preventive)۔",
          rwVisLabel: "4 Types of Maintenance",
          rwSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="80" height="90" rx="4" fill="#131720" stroke="#f87171"/><text x="25" y="45" fill="#f87171" font-size="9" font-weight="bold">Corrective</text><text x="25" y="65" fill="#94a3b8" font-size="8">Fix Bugs</text><rect x="110" y="20" width="80" height="90" rx="4" fill="#131720" stroke="#38bdf8"/><text x="115" y="45" fill="#38bdf8" font-size="9" font-weight="bold">Adaptive</text><text x="115" y="65" fill="#94a3b8" font-size="8">OS Upgrade</text><rect x="200" y="20" width="80" height="90" rx="4" fill="#131720" stroke="#34d399"/><text x="205" y="45" fill="#34d399" font-size="9" font-weight="bold">Perfective</text><text x="205" y="65" fill="#94a3b8" font-size="8">Speed Up</text><rect x="290" y="20" width="80" height="90" rx="4" fill="#131720" stroke="#c084fc"/><text x="295" y="45" fill="#c084fc" font-size="9" font-weight="bold">Preventive</text><text x="295" y="65" fill="#94a3b8" font-size="8">Refactor</text></svg>`,
          rwSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="80" height="90" rx="4" fill="#fef2f2" stroke="#dc2626"/><text x="25" y="45" fill="#991b1b" font-size="9" font-weight="bold">Corrective</text><text x="25" y="65" fill="#374151" font-size="8">Fix Bugs</text><rect x="110" y="20" width="80" height="90" rx="4" fill="#f0f9ff" stroke="#0284c7"/><text x="115" y="45" fill="#0369a1" font-size="9" font-weight="bold">Adaptive</text><text x="115" y="65" fill="#374151" font-size="8">OS Upgrade</text><rect x="200" y="20" width="80" height="90" rx="4" fill="#ecfdf5" stroke="#059669"/><text x="205" y="45" fill="#047857" font-size="9" font-weight="bold">Perfective</text><text x="205" y="65" fill="#374151" font-size="8">Speed Up</text><rect x="290" y="20" width="80" height="90" rx="4" fill="#f3e8ff" stroke="#7e22ce"/><text x="295" y="45" fill="#6b21a8" font-size="9" font-weight="bold">Preventive</text><text x="295" y="65" fill="#374151" font-size="8">Refactor</text></svg>`,
          swSub: "Testing vs Debugging Process",
          swDel: "Bug Fix Release Notes, Patch Files, Debugger Breakpoint Logs.",
          swWarn: "Failing to apply preventive maintenance leads to technical debt and code erosion.",
          swVisLabel: "Testing vs Debugging Matrix",
          swSvgDark: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#131720" stroke="#c084fc" stroke-width="1.5"/><text x="60" y="50" fill="#c084fc" font-weight="bold" font-size="11">TESTING vs DEBUGGING</text><text x="60" y="75" fill="#94a3b8" font-size="10">• Testing: Finds presence of errors | Debugging: Locates &amp; fixes cause</text></svg>`,
          swSvgLight: `<svg viewBox="0 0 400 130" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="320" height="90" rx="6" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.5"/><text x="60" y="50" fill="#6b21a8" font-weight="bold" font-size="11">TESTING vs DEBUGGING</text><text x="60" y="75" fill="#374151" font-size="10">• Testing: Finds presence of errors | Debugging: Locates &amp; fixes cause</text></svg>`
        }
      ],
      topperSheet: {
        title: "Q. No 2 (c) • Board Short Answer Guide",
        qNum: "Q. No 2 (c)",
        heading: "SOFTWARE MAINTENANCE & DEBUGGING",
        definitionText: "Software Maintenance modifies delivered software to fix errors (Corrective), adapt to new OS environments (Adaptive), enhance performance (Perfective), or prevent future bugs (Preventive). Testing detects errors, whereas Debugging locates and corrects them.",
        presentationRules: [
          "List the 4 types of maintenance with 1 line example each",
          "Draw 2-column contrast table for Testing vs Debugging",
          "Use 605 Cut Marker for headings"
        ]
      },
      assessmentQuestions: [
        {
          id: "mcq-1-7-1",
          questionType: "MCQ",
          statement: "The process of locating, analyzing, and fixing bugs/errors in computer program code is called:",
          options: [
            "A. Testing",
            "B. Debugging",
            "C. Compiling",
            "D. Deployment"
          ],
          correctOption: 1,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for Option B (Debugging). Testing detects errors; Debugging locates and fixes them. (BISE Lahore 2024)",
          subConceptTag: "Testing_vs_Debugging"
        },
        {
          id: "mcq-1-7-2",
          questionType: "MCQ",
          statement: "Modifying software to adapt to a new operating system or hardware environment is called:",
          options: [
            "A. Corrective Maintenance",
            "B. Adaptive Maintenance",
            "C. Perfective Maintenance",
            "D. Preventive Maintenance"
          ],
          correctOption: 1,
          rubricNotes: "Official Board Marking Scheme: Award 1 Mark for Option B (Adaptive Maintenance). (BISE Gujranwala 2023)",
          subConceptTag: "Software Maintenance"
        }
      ]
    }
  ]
};
