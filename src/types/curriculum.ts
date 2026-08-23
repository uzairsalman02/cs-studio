export interface SDLCStage {
  stageNumber: number;
  stageTitle: string;
  teacherSpokenCue?: string;
  rwSub: string;
  rwEn: string;
  rwUr: string;
  rwVisLabel: string;
  rwSvgDark: string;
  rwSvgLight: string;
  swSub: string;
  swDel: string;
  swWarn: string;
  swVisLabel: string;
  swSvgDark: string;
  swSvgLight: string;
}

export interface TopperSheetItem {
  title: string;
  qNum: string;
  heading: string;
  definitionText: string;
  presentationRules: string[];
}

export interface MCQ {
  id: string;
  questionType: "MCQ" | "SHORT" | "LONG";
  statement: string;
  options: string[];
  correctOption: number;
  rubricNotes: string;
  subConceptTag?: string;
}

export interface Topic {
  id: string;
  topicCode: string;
  title: string;
  slug: string;
  duration: string;
  examFrequencyBadge: string;
  pastPapers: string[];
  verbatimDefinition: string;
  paperPresentationTip: string;
  conceptStages: SDLCStage[];
  topperSheet?: TopperSheetItem;
  assessmentQuestions: MCQ[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  pairingSchemeNote: string;
  progressPercent: number;
  topics: Topic[];
}

export interface Curriculum {
  id: string;
  title: string;
  boardType: string;
  isActive: boolean;
  units: Unit[];
}
