"use client";

import { useRef, useState } from "react";

const VIDEO_SRC = "/video%20test.mp4";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      data-voyager-video=""
      className="relative mt-20 w-full max-w-4xl overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-xl"
      style={{ aspectRatio: "16 / 9" }}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="h-full w-full object-cover"
        playsInline
        muted
        loop
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 transition-opacity hover:bg-black/20"
          aria-label="Play demo video"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm transition-transform hover:scale-110">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              className="ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-sm font-medium tracking-wide text-white/80">
            Watch demo
          </span>
        </button>
      )}
    </div>
  );
}
