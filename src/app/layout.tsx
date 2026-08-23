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
  title: "CS Studio 11 • Single National Curriculum (PECTAA 2023)",
  description: "Computer Science Class 11 interactive learning studio and classroom presenter for Punjab Boards.",
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
    >
      <body className="h-screen w-screen overflow-hidden flex flex-col justify-between bg-slate-100 text-slate-800 dark:bg-[#0f131a] dark:text-slate-200 font-sans">
        {children}
        <AntiTamperGuard />
      </body>
    </html>
  );
}
