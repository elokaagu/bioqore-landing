"use client";

import Script from "next/script";

const UNICORN_STUDIO_SCRIPT =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <Script
        src={UNICORN_STUDIO_SCRIPT}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window === "undefined") return;
          const u = (window as unknown as { UnicornStudio?: { init: () => void } }).UnicornStudio;
          if (u && typeof u.init === "function") u.init();
        }}
      />
      <div className="absolute inset-0 min-h-screen w-full">
        <div
          data-us-project="FQt784boUVPeZAfj4SsL"
          className="block h-full min-h-screen w-full"
          style={{ width: "100%", height: "100%", minHeight: "100vh" }}
        />
      </div>
    </section>
  );
}
