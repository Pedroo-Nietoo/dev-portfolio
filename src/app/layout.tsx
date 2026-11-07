import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/i18n/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pedro Nieto",
  description: "Portfolio of Pedro Nieto, Full-Stack Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider defaultLang="en">
          <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
