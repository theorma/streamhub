// components/AgeVerificationModal.jsx
'use client';
import { useState, useEffect } from 'react';

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (!verified) setIsOpen(true);
    
    // Detectar idioma del navegador
    if (navigator.language.startsWith('en')) {
      setLang('en');
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('age_verified', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const content = {
    es: {
      title: "Confirmación de Edad",
      text: "Este sitio contiene material para adultos (+18). Debes tener la edad legal para acceder.",
      btnConfirm: "Tengo +18 años / Entrar",
      btnExit: "Salir"
    },
    en: {
      title: "Age Verification",
      text: "This website contains adult content (+18). You must be of legal age to enter.",
      btnConfirm: "I am 18 or older / Enter",
      btnExit: "Exit"
    }
  };

  const t = content[lang];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 text-white">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl max-w-md w-full text-center space-y-4">
        <div className="flex justify-end gap-2 text-xs">
          <button onClick={() => setLang('es')} className={lang === 'es' ? 'font-bold underline' : 'opacity-50'}>ES</button>
          <span>|</span>
          <button onClick={() => setLang('en')} className={lang === 'en' ? 'font-bold underline' : 'opacity-50'}>EN</button>
        </div>
        <h2 className="text-xl font-bold">{t.title}</h2>
        <p className="text-zinc-400 text-sm">{t.text}</p>
        <div className="flex flex-col gap-2 pt-2">
          <button onClick={handleConfirm} className="bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold">
            {t.btnConfirm}
          </button>
        </div>
      </div>
    </div>
  );
}