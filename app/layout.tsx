import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BTC Realtime Dashboard",
  description: "A real-time dashboard for Bitcoin price and stats using Next.js, WebSockets, and TradingView charts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider>
          <div className="max-w-7xl mx-auto">
            <Header />
            <main className="min-h-screen bg-[rgb(var(--background))]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
