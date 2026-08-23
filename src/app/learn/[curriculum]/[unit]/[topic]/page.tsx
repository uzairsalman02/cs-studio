"use client";

import React from "react";
import { TopicStudio } from "@/components/studio/TopicStudio";

export default function SpecificTopicPage({
  params,
}: {
  params: { curriculum: string; unit: string; topic: string };
}) {
  const topicSlug = params.topic || "topic-1.2";
  return <TopicStudio initialTopicId={topicSlug} />;
}
