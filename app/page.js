"use client";

import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { SITE_CONFIG, LANGUAGES, TRANSLATIONS } from "../config";

export default function Home() {
  const [lang, setLang] = useState("es");
  const [showStickyFooter, setShowStickyFooter] = useState(true);
  const [showStickyWidget, setShowStickyWidget] = useState(true);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;

  return (
    <div 
      dir={lang === "ar" ? "rtl" : "ltr"} 
      className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans pb-24 sm:pb-28"
    >
      {/* Header / Navbar con Selector de 8 Idiomas */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {SITE_CONFIG.siteName}
            </span>
            <span className="text-[10px] sm:text-xs bg-red-950/60 text-red-400 border border-red-800/60 px-2.5 py-0.5 rounded-full font-semibold">
              {t.liveBadge}
            </span>
          </div>

          {/* Selector de Idiomas */}
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-xs gap-1 overflow-x-auto">
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                onClick={() => setLang(item.code)}
                className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 shrink-0 ${
                  lang === item.code
                    ? "bg-amber-500 text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
                title={item.label}
              >
                <span>{item.flag}</span>
                <span>{item.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        
        {/* Ad Slot Leaderboard Superior */}
        <div 
          id="ad-slot-header"
          className="w-full h-16 sm:h-20 mb-6 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-500 uppercase tracking-widest text-center px-2"
        >
          {t.advertisement} (728x90 Header)
        </div>

        {/* Layout Principal Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Columna Principal - Reproductor */}
          <section className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                {t.popularEvents}
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm">
                {t.clickToPlay}
              </p>
            </div>
            
            {/* Reproductor con Gatillo Publicitario y RTVE Embed */}
            <VideoPlayer embedId={SITE_CONFIG.rtveVideoId} lang={lang} />

            {/* Ad Slot #1 Debajo del Video */}
            <div
              id="ad-slot-banner-1"
              className="w-full h-24 sm:h-28 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-500 uppercase tracking-widest text-center px-2"
            >
              {t.advertisement} #1 (Main Banner 728x90)
            </div>

            {/* Ad Slot #2 Debajo del Video */}
            <div
              id="ad-slot-banner-2"
              className="w-full h-36 sm:h-44 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-500 uppercase tracking-widest text-center px-2"
            >
              {t.advertisement} #2 (Native Ad / Banner)
            </div>
          </section>

          {/* Columna Lateral - Publicidad Estática */}
          <aside className="space-y-6">
            <div
              id="ad-slot-sidebar-1"
              className="w-full h-64 sm:h-72 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-500 uppercase tracking-widest text-center px-2"
            >
              {t.advertisement} (Sidebar 300x250)
            </div>

            <div
              id="ad-slot-sidebar-2"
              className="w-full h-52 sm:h-60 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-500 uppercase tracking-widest text-center px-2"
            >
              {t.advertisement} (Sidebar 300x250)
            </div>

            <div
              id="ad-slot-sidebar-3"
              className="w-full h-52 sm:h-60 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs text-zinc-500 uppercase tracking-widest text-center px-2"
            >
              {t.advertisement} (Sidebar Bottom Right)
            </div>
          </aside>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 text-center sm:text-start">
            © {new Date().getFullYear()} {SITE_CONFIG.siteName}. Live stream network.
          </p>
          <div className="flex items-center space-x-6 text-xs text-zinc-400">
            <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href={SITE_CONFIG.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* ANUNCIO FLOTANTE IZQUIERDO */}
      {showStickyWidget && (
        <div 
          id="ad-slot-sticky-left"
          className="fixed bottom-24 left-4 z-40 hidden md:flex w-48 h-36 bg-zinc-900/90 border border-zinc-700 shadow-2xl rounded-xl flex-col items-center justify-center p-2 backdrop-blur-md"
        >
          <div className="w-full flex justify-between items-center mb-1 px-1">
            <span className="text-[9px] text-zinc-500 font-mono">ADS</span>
            <button onClick={() => setShowStickyWidget(false)} className="text-zinc-400 hover:text-white text-[10px]">✕</button>
          </div>
          <div className="flex-1 w-full border border-dashed border-zinc-800 rounded flex items-center justify-center text-[10px] text-zinc-400 text-center uppercase p-1">
            {t.advertisement} Widget
          </div>
        </div>
      )}

      {/* ANUNCIO FLOTANTE PIE DE PÁGINA */}
      {showStickyFooter && (
        <div 
          id="ad-slot-sticky-footer"
          className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl h-20 bg-zinc-900/95 border-t border-x border-zinc-700 shadow-2xl rounded-t-xl flex items-center justify-between p-2 backdrop-blur-md px-4"
        >
          <div className="flex-1 h-full border border-dashed border-zinc-800 rounded flex items-center justify-center text-[11px] text-zinc-400 text-center uppercase tracking-wider">
            {t.advertisement} Sticky Footer
          </div>
          <button onClick={() => setShowStickyFooter(false)} className="ml-3 text-zinc-400 hover:text-white text-xs bg-zinc-800 border border-zinc-700 rounded-full w-6 h-6 flex items-center justify-center shrink-0">✕</button>
        </div>
      )}

    </div>
  );
}