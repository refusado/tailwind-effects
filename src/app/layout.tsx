import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Providers } from './providers';
import { Nunito } from 'next/font/google';
import { Footer } from '@/components/Footer';

const nunitoFont = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tailwind Effects',
  description: 'Collection of cool effects using Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`overflow-x-hidden overflow-y-scroll bg-background text-foreground dark scrollbar-thin ${nunitoFont.className}`}
    >
      <body className="relative -z-20 min-h-screen min-w-full">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
