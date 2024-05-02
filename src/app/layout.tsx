import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Tailwind Effects",
  description: "Collection of cool effects using Tailwind CSS",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden overflow-y-scroll dark scrollbar-thin">
      <body className="min-w-full min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
