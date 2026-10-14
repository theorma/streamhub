import "./globals.css";
import AgeVerificationModal from '../components/AgeVerificationModal';
import Script from 'next/script'; // Importamos Script de Next.js

export const metadata = {
  title: "StreamHub - Transmisiones en Vivo 24/7",
  description: "Disfruta de eventos deportivos, noticias y señales en vivo en HD sin interrupciones.",
  keywords: ["live stream", "deportes en vivo", "transmision en directo", "streaming free"],
  openGraph: {
    title: "StreamHub - Live Stream Network",
    description: "Señales en vivo con la mejor calidad HD.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <AgeVerificationModal />
        {children}

        {/* AQUÍ PEGAS TU CÓDIGO DE POPUNDER / ANUNCIOS */}
        {/* Ejemplo con código publicitario de la red */}
        <Script
          id="popunder-ad"
          strategy="afterInteractive"
          src="URL_DEL_SCRIPT_DE_TU_RED_DE_ANUNCIOS"
        />
      </body>
    </html>
  );
}