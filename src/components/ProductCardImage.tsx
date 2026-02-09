"use client";

import { useState } from "react";
import BlurInImage from "@/components/BlurInImage";

type Props = {
  src: string;
  alt: string;
};

export default function ProductCardImage({ src, alt }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="h-full w-full bg-gradient-to-b from-gray-900 to-black"
        aria-hidden
      />
    );
  }

  return (
    <BlurInImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}
