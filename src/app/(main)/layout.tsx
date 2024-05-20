import './globals.css';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Tenor_Sans } from 'next/font/google';

import { Header } from '@/sections';
import { Footer } from '@/sections';

import { metaData } from '@/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: metaData.title,
  description: metaData.description,
  icons: {
    icon: [
      { url: 'favicon/favicon.ico' },
      { url: 'favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: 'favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: 'favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: ['favicon/favicon.ico'],
    apple: [{ url: 'favicon/apple-touch-icon.png' }],
    other: [{ rel: 'manifest', url: 'favicon/site.webmanifest' }],
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: metaData.title,
    description: metaData.description,
    siteName: metaData.title,
    images: '/images/ogp/ogp.webp',
  },
  other: {
    'color-scheme': 'light',
  },
};

const tenor = Tenor_Sans({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-tenor',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='uk' className={`${tenor.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
