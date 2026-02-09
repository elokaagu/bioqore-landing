"use client";

import { useEffect, useState } from "react";
import BlurInImage from "@/components/BlurInImage";

export type TeamMemberProfile = {
  name: string;
  role?: string;
  image: string;
  biography?: string;
  linkedInUrl?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMemberProfile | null;
  allMembers: TeamMemberProfile[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
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

export default function TeamMemberModal({
  isOpen,
  onClose,
  member,
  allMembers,
  currentIndex,
  onPrev,
  onNext,
}: Props) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (member) setImageError(false);
  }, [member]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasPrev = allMembers.length > 1 && currentIndex > 0;
  const hasNext = allMembers.length > 1 && currentIndex < allMembers.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-start"
      role="dialog"
      aria-modal="true"
      aria-label="Team member profile"
    >
      {/* Backdrop: blur + dim */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        aria-label="Close"
      />

      {/* Sheet from left: fixed width so it reads as a drawer, not a full-screen modal */}
      <div className="team-member-panel relative z-10 flex h-full w-full max-w-[min(24rem,90vw)] flex-col overflow-hidden bg-white shadow-2xl sm:max-w-lg">

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 hover:text-gray-800"
          aria-label="Close profile"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-1 flex-col overflow-y-auto p-8 pt-12">
          {member ? (
            <>
              {/* Header: photo + name + title */}
              <div className="flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-200">
                  {!imageError ? (
                    <BlurInImage
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-300 text-xl font-semibold text-gray-500">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-xl font-bold tracking-tight text-[var(--color-main)]">
                    {member.name}
                  </h3>
                  {member.role && (
                    <p className="mt-0.5 text-sm text-[var(--color-body)]">{member.role}</p>
                  )}
                  {member.linkedInUrl && (
                    <a
                      href={member.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {/* Biography */}
              {member.biography && (
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--color-body)]">
                    {member.biography}
                  </p>
                </div>
              )}
            </>
          ) : null}
        </div>

        {/* Prev / Next */}
        {allMembers.length > 1 && (
          <div className="flex shrink-0 gap-2 border-t border-gray-200 p-4">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
              aria-label="Previous team member"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
              aria-label="Next team member"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
