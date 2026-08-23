import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Nastaliq_Urdu, JetBrains_Mono } from "next/font/google";
import { AntiTamperGuard } from "@/components/security/AntiTamperGuard";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CS Studio • Interactive Pedagogy & Presenter",
  description: "Digital computer science education and presentation platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${notoNastaliqUrdu.variable} ${jetBrainsMono.variable}`}
      data-theme="editorial-indigo"
    >
      <body className="h-screen w-screen overflow-hidden flex flex-col justify-between no-select bg-canvas text-foreground font-sans">
        {children}
        <AntiTamperGuard />
      </body>
    </html>
  );
}
