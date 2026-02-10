"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type TeamMemberProfile = {
  name: string;
  role?: string;
  image: string;
  biography?: string;
  linkedInUrl?: string;
};

type TeamMemberModalProps = {
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
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamMemberModal({
  isOpen,
  onClose,
  member,
  allMembers,
  currentIndex,
  onPrev,
  onNext,
}: TeamMemberModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (member) setImgError(false);
  }, [member?.name]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasPrev = allMembers.length > 1 && currentIndex > 0;
  const hasNext = allMembers.length > 1 && currentIndex < allMembers.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-name"
      aria-label="Team member profile"
    >
      {/* Backdrop — tap to close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/25"
        aria-label="Close"
      />

      {/* Sheet panel — full height, slides in from right */}
      <aside
        className="team-member-sheet relative z-10 flex h-full w-full max-w-md flex-col overflow-hidden bg-white shadow-xl sm:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar: close */}
        <div className="flex shrink-0 items-center justify-end border-b border-gray-100 px-4 py-3">
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {member ? (
            <>
              {/* Profile block */}
              <div className="flex gap-4 pt-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  {!imgError ? (
                    <Image
                      src={member.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-2xl font-semibold text-gray-400">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 id="team-member-name" className="text-xl font-bold tracking-tight text-gray-900">
                    {member.name}
                  </h2>
                  {member.role && (
                    <p className="mt-0.5 text-sm text-gray-500">{member.role}</p>
                  )}
                  {member.linkedInUrl && (
                    <a
                      href={member.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              {member.biography && (
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
                    {member.biography}
                  </p>
                </div>
              )}
            </>
          ) : null}
        </div>

        {/* Prev / Next — only when multiple members */}
        {allMembers.length > 1 && (
          <div className="shrink-0 flex items-center justify-center gap-3 border-t border-gray-100 py-4">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
              aria-label="Previous team member"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-40"
              aria-label="Next team member"
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
