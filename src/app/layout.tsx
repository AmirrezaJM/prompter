import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-work-sans",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Writely",
  description: "Create and manage your writing prompts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.variable} ${notoSans.variable} font-sans bg-slate-50`}
      >
        <Header />
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
