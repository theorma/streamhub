'use client';

import { useState, useEffect } from 'react';

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('age_verified', 'true');
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center shadow-2xl">
        <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border border-red-500/30">
          18+
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Aviso de Contenido Adultos / Adult Content</h2>
        <p className="text-zinc-400 text-sm mb-6">
          Esta plataforma contiene enlaces y retransmisiones para mayores de 18 años. Al continuar, confirmas que tienes al menos 18 años de edad o la mayoría de edad legal en tu jurisdicción.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleConfirm}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            Soy mayor de 18 años / Enter
          </button>
          <button
            onClick={handleReject}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
          >
            Salir / Exit
          </button>
        </div>
      </div>
    </div>
  );
}