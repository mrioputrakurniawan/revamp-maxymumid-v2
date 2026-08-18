import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxymum ID — Creative Agency",
  description:
    "Maxymum ID is an Indonesian creative agency turning causes into campaigns through visual, digital, and audio-visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}