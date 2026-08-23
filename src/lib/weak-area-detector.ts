export interface QuizAttempt {
  studentId: string;
  topicId: string;
  topicTitle: string;
  subConceptTag: string;
  score: number; // 0 or 1 per question, or total score
  total: number;
  timestamp?: number;
}

export interface WeakAreaDiagnostic {
  subConceptTag: string;
  topicTitle: string;
  avgAccuracy: number; // percentage 0 to 100
  totalAttempts: number;
  isCritical: boolean; // true if accuracy < 65%
  recommendation: string;
}

export function detectWeakAreas(attempts: QuizAttempt[]): WeakAreaDiagnostic[] {
  if (!attempts || attempts.length === 0) return [];

  const grouped: Record<
    string,
    { topicTitle: string; totalScore: number; totalPossible: number; count: number }
  > = {};

  for (const attempt of attempts) {
    const tag = attempt.subConceptTag || "General Concept";
    if (!grouped[tag]) {
      grouped[tag] = {
        topicTitle: attempt.topicTitle || "Computer Science 11",
        totalScore: 0,
        totalPossible: 0,
        count: 0,
      };
    }
    grouped[tag].totalScore += attempt.score;
    grouped[tag].totalPossible += attempt.total;
    grouped[tag].count += 1;
  }

  const diagnostics: WeakAreaDiagnostic[] = [];

  for (const [tag, data] of Object.entries(grouped)) {
    const accuracyPercent =
      data.totalPossible > 0 ? Math.round((data.totalScore / data.totalPossible) * 100) : 0;
    const isCritical = accuracyPercent < 65;

    let recommendation = "Classroom understanding is optimal.";
    if (accuracyPercent < 50) {
      recommendation = `CRITICAL: Re-teach ${tag} with physical real-world analogies and board diagram.`;
    } else if (accuracyPercent < 65) {
      recommendation = `WARNING: Conduct a 3-minute rapid quiz on ${tag} before next unit test.`;
    }

    diagnostics.push({
      subConceptTag: tag,
      topicTitle: data.topicTitle,
      avgAccuracy: accuracyPercent,
      totalAttempts: data.count,
      isCritical,
      recommendation,
    });
  }

  // Sort critical weak areas first
  return diagnostics.sort((a, b) => a.avgAccuracy - b.avgAccuracy);
}

export const MOCK_QUIZ_ATTEMPTS: QuizAttempt[] = [
  { studentId: "s1", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Deliverables", score: 0, total: 1 },
  { studentId: "s2", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Deliverables", score: 0, total: 1 },
  { studentId: "s3", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Deliverables", score: 1, total: 1 },
  { studentId: "s4", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Deliverables", score: 0, total: 1 },

  { studentId: "s1", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Workflow", score: 1, total: 1 },
  { studentId: "s2", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Workflow", score: 1, total: 1 },
  { studentId: "s3", topicId: "topic-1.2", topicTitle: "Software Development Life Cycle", subConceptTag: "SDLC Workflow", score: 0, total: 1 },

  { studentId: "s1", topicId: "topic-1.1", topicTitle: "Software Basics & Classification", subConceptTag: "Software Classification", score: 1, total: 1 },
  { studentId: "s2", topicId: "topic-1.1", topicTitle: "Software Basics & Classification", subConceptTag: "Software Classification", score: 1, total: 1 },
];
