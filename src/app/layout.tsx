import "./globals.css";

import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Toaster } from "react-hot-toast";
import { Inter, Calistoga } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "Gabriel Samo",
  description:
    "Personal website created by me, heavily inspired by Frontend Tribe"
};

export const runtime = "edge";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
