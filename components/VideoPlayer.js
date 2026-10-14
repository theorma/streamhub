"use client";

import { useState } from "react";
import { SITE_CONFIG, TRANSLATIONS } from "../config";

export default function VideoPlayer({ embedId = "17232272", lang = "es" }) {
  const [showAdOverlay, setShowAdOverlay] = useState(true);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;

  const handlePlayerClick = () => {
    if (SITE_CONFIG.popunderUrl) {
      window.open(SITE_CONFIG.popunderUrl, "_blank");
    }
    setShowAdOverlay(false);
  };

  return (
    <div 
      className="w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl relative group"
      style={{ aspectRatio: "16/9", minHeight: "280px" }}
    >
      <iframe
        src={`https://www.rtve.es/drmn/embed/video/${embedId}`}
        title="Live Stream"
        className="w-full h-full border-0 absolute top-0 left-0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

      {showAdOverlay && (
        <div 
          onClick={handlePlayerClick}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-black/40"
        >
          <div className="bg-zinc-900/90 border border-amber-500/40 px-4 py-2 rounded-xl text-center max-w-xs shadow-2xl space-y-1 pointer-events-none mb-4">
            <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-mono uppercase">
              {t.streamReady}
            </span>
            <p className="text-xs font-semibold text-white">
              {t.clickToPlay}
            </p>
          </div>

          <div className="w-16 h-16 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all">
            <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}