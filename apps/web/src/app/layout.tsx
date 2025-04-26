import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import { AppHeader } from "@/components/app-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth App",
  description: "Sistema de autenticação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`flex justify-center h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full">
          <Toaster />
          <AppHeader />
          <div className="max-w-7xl mx-auto p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
