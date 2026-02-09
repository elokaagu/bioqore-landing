"use client";

import { useState } from "react";
import BlurInImage from "@/components/BlurInImage";

type Props = {
  src: string;
  alt: string;
};

export default function RoadmapMilestoneImage({ src, alt }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300"
        aria-hidden
      />
    );
  }

  return (
    <BlurInImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 120px, 180px"
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}
