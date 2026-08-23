"use client";

import React from "react";

export interface SvgRendererProps {
  svgMarkup: string;
  className?: string;
}

export function SvgRenderer({ svgMarkup, className = "" }: SvgRendererProps) {
  if (!svgMarkup) return null;

  return (
    <div
      className={`svg-container w-full h-full flex items-center justify-center text-primary ${className}`}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

export default SvgRenderer;
