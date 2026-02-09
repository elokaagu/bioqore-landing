"use client";

import Image from "next/image";
import { useState } from "react";
import BlurInImage from "@/components/BlurInImage";

type Props = {
  name: string;
  role?: string;
  image: string;
  onClick?: () => void;
};

function getInitials(name: string) {
  return name
    .split(/[\s,]+/)
    .filter((s) => s.length > 0)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
}

export default function TeamMemberCard({ name, role, image, onClick }: Props) {
  const [imageError, setImageError] = useState(false);
  const Wrapper = onClick ? "button" : "div";
  const wrapperProps = onClick
    ? { type: "button" as const, onClick, className: "border-t border-gray-200 pt-6 w-full text-left cursor-pointer hover:opacity-90 transition-opacity" }
    : { className: "border-t border-gray-200 pt-6" };

  return (
    <Wrapper {...wrapperProps}>
      <div className="relative aspect-square w-28 overflow-hidden rounded-xl bg-gray-200 sm:w-32">
        {!imageError ? (
          <BlurInImage
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 112px, 128px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-300 text-lg font-semibold text-gray-500">
            {getInitials(name)}
          </div>
        )}
      </div>
      <p className="mt-4 text-base font-semibold text-[var(--color-main)]">{name}</p>
      {role && <p className="mt-0.5 text-sm text-[var(--color-body)]">{role}</p>}
    </Wrapper>
  );
}
