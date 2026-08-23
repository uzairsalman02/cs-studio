import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Load Unit 1 JSON Data
  const jsonPath = path.join(process.cwd(), "src/data/punjab-11/unit-01.json");
  const rawData = fs.readFileSync(jsonPath, "utf-8");
  const unitData = JSON.parse(rawData);

  // 1. Seed Global Settings
  const settings = await prisma.appGlobalSettings.upsert({
    where: { id: "global-settings" },
    update: {
      appName: "CS Studio 11",
      appLogoCode: "CS",
      curriculumTagline: "Class 11 Computer Science • SNC Punjab",
      activePaletteId: "editorial-indigo",
      copyrightHolder: "Uzair Salman",
      antiTamperEnabled: true,
    },
    create: {
      id: "global-settings",
      appName: "CS Studio 11",
      appLogoCode: "CS",
      curriculumTagline: "Class 11 Computer Science • SNC Punjab",
      activePaletteId: "editorial-indigo",
      copyrightHolder: "Uzair Salman",
      antiTamperEnabled: true,
    },
  });
  console.log("✅ AppGlobalSettings seeded:", settings.appName);

  // 2. Seed Curriculum
  const curriculum = await prisma.curriculum.upsert({
    where: { id: "curriculum-snc-11" },
    update: {
      title: "Punjab Board - SNC 2023 / PECTAA",
      boardType: "SNC_PUNJAB",
      isActive: true,
      displayOrder: 1,
    },
    create: {
      id: "curriculum-snc-11",
      title: "Punjab Board - SNC 2023 / PECTAA",
      boardType: "SNC_PUNJAB",
      isActive: true,
      displayOrder: 1,
    },
  });
  console.log("✅ Curriculum seeded:", curriculum.title);

  // 3. Seed Unit 1
  const unit = await prisma.unit.upsert({
    where: { id: "unit-1" },
    update: {
      curriculumId: curriculum.id,
      unitNumber: unitData.unit.unitNumber,
      title: unitData.unit.title,
      pairingSchemeNote: unitData.unit.pairingSchemeNote,
    },
    create: {
      id: "unit-1",
      curriculumId: curriculum.id,
      unitNumber: unitData.unit.unitNumber,
      title: unitData.unit.title,
      pairingSchemeNote: unitData.unit.pairingSchemeNote,
    },
  });
  console.log("✅ Unit 1 seeded:", unit.title);

  // 4. Seed Topic 1.2 (SDLC)
  const topicRaw = unitData.unit.topics[0];
  const topic = await prisma.topic.upsert({
    where: { slug: topicRaw.slug },
    update: {
      unitId: unit.id,
      topicCode: topicRaw.topicCode,
      title: topicRaw.title,
      examFrequencyBadge: topicRaw.examFrequencyBadge,
      pastPapers: topicRaw.pastPapers,
    },
    create: {
      id: topicRaw.id,
      unitId: unit.id,
      topicCode: topicRaw.topicCode,
      title: topicRaw.title,
      slug: topicRaw.slug,
      examFrequencyBadge: topicRaw.examFrequencyBadge,
      pastPapers: topicRaw.pastPapers,
    },
  });
  console.log("✅ Topic seeded:", topic.topicCode, "-", topic.title);

  // 5. Seed TopicTheoryNote
  const theoryNote = await prisma.topicTheoryNote.upsert({
    where: { id: `note-${topic.id}` },
    update: {
      verbatimDefinition: topicRaw.verbatimDefinition,
      technicalBreakdown:
        "SDLC encompasses 6 core phases: Planning & Feasibility, Requirement Analysis (SRS), System Design (DDS/UML), Implementation (Coding), Testing & QA, and Deployment & Maintenance.",
      paperPresentationTip: topicRaw.paperPresentationTip,
      boardMarks: 5,
    },
    create: {
      id: `note-${topic.id}`,
      topicId: topic.id,
      verbatimDefinition: topicRaw.verbatimDefinition,
      technicalBreakdown:
        "SDLC encompasses 6 core phases: Planning & Feasibility, Requirement Analysis (SRS), System Design (DDS/UML), Implementation (Coding), Testing & QA, and Deployment & Maintenance.",
      paperPresentationTip: topicRaw.paperPresentationTip,
      boardMarks: 5,
    },
  });
  console.log("✅ Theory Note seeded for:", topic.topicCode);

  // 6. Clean existing stages & questions for idempotent seed
  await prisma.topicConceptStage.deleteMany({ where: { topicId: topic.id } });
  await prisma.assessmentQuestion.deleteMany({ where: { topicId: topic.id } });

  // 7. Seed 6 Concept Stages
  for (const stage of topicRaw.conceptStages) {
    await prisma.topicConceptStage.create({
      data: {
        topicId: topic.id,
        stageNumber: stage.stageNumber,
        stageTitle: stage.stageTitle,
        teacherSpokenCue: stage.teacherSpokenCue,
        realWorldAnalogyEn: stage.realWorldAnalogyEn,
        realWorldAnalogyUr: stage.realWorldAnalogyUr,
        realWorldVisualSvg: stage.realWorldVisualSvg,
        softwareDeliverables: stage.softwareDeliverables,
        skipWarning: stage.skipWarning,
        softwareVisualSvg: stage.softwareVisualSvg,
      },
    });
  }
  console.log(`✅ Seeded ${topicRaw.conceptStages.length} Concept Stages for Topic 1.2`);

  // 8. Seed Assessment Questions
  for (const q of topicRaw.assessmentQuestions) {
    await prisma.assessmentQuestion.create({
      data: {
        id: q.id,
        topicId: topic.id,
        questionType: q.questionType,
        statement: q.statement,
        options: q.options,
        correctOption: q.correctOption,
        rubricNotes: q.rubricNotes,
      },
    });
  }
  console.log(`✅ Seeded ${topicRaw.assessmentQuestions.length} Checkpoint Questions`);

  console.log("🎉 Database seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
