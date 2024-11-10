import type { Metadata } from "next";
import localFont from "next/font/local";
import MainLayout from "../layouts/MainLayout";  // MainLayout'ı buraya ekle
import "./globals.css";

// Font yapılandırması
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata ayarları
export const metadata: Metadata = {
  title: "My Next.js Project",
  description: "A simple Next.js project with a custom layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout> {/* MainLayout içerikleri buraya eklenecek */}
      </body>
    </html>
  );
}
