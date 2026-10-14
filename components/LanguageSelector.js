"use client";

import { LANGUAGES } from "../config";

export default function LanguageSelector({ currentLang, onSelectLang }) {
  return (
    <div className="flex items-center space-x-1 bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelectLang(lang.code)}
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
            currentLang === lang.code
              ? "bg-amber-500 text-black font-bold shadow-lg"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
          title={lang.label}
        >
          <span className="mr-1">{lang.flag}</span>
          <span>{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}