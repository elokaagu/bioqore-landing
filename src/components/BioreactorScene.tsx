"use client";

import { lazy, Suspense, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

/**
 * Replace with your Spline scene URL after exporting.
 * Export → Code (React) → Copy the scene URL.
 */
const SCENE_URL =
  "https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode";

export default function BioreactorScene({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-[var(--color-blue-accent)]" />
            <span className="text-sm text-gray-400">Loading 3D model...</span>
          </div>
        </div>
      )}

      <Suspense fallback={null}>
        <Spline
          scene={SCENE_URL}
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Suspense>
    </div>
  );
}
