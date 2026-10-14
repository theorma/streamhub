import "./globals.css";
import AgeVerificationModal from "@/components/AgeVerificationModal";

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
      </body>
    </html>
  );
}