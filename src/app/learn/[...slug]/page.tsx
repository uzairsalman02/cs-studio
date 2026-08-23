"use client";

import React from "react";
import { TopicStudio } from "@/components/studio/TopicStudio";

export default function CatchAllLearnPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const lastSlug = params.slug?.[params.slug.length - 1] || "topic-1.2";
  return <TopicStudio initialTopicId={lastSlug} />;
}
