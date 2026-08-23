import React from "react";
import { TopicStudio } from "@/components/studio/TopicStudio";

export default function LearningTopicPage({
  params,
}: {
  params: { curriculum: string; unit: string; topic: string };
}) {
  const initialTopicId = params.topic === "topic-1-1" ? "topic-1.1" : "topic-1.2";
  return <TopicStudio initialTopicId={initialTopicId} />;
}
