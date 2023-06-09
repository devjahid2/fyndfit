'use client';
import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

import { createContext, useState } from 'react';

const inter = IBM_Plex_Sans({
  weight: '400',
  preload: false,
});
export const metadata = {
  title: 'fyndfit',
  description: 'Generated by fyndfit',
};

export const AppContext = createContext({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context, setContext] = useState({
    language: 'ENGLISH',
  });

  return (
    <html lang="en">
      <head></head>
      <AppContext.Provider value={[context, setContext]}>
        <body className={inter.className}>{children}</body>
      </AppContext.Provider>
    </html>
  );
}
