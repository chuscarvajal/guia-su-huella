import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guía su Huella | Adiestramiento Canino en Sevilla",
  description: "Adiestramiento canino en Sevilla con métodos positivos. Socialización, obediencia y educación canina en entorno natural. 5.0★ en Google.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
