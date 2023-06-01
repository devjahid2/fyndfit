"use client";
import "./globals.css";
import { Lexend } from "next/font/google";
import { createContext, useState } from "react";

const inter = Lexend({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fyndfit",
//   description: "This is multi language app",
// };
export const AppContext = createContext({});

export default function RootLayout({children,}: {children: React.ReactNode;}) {

  const [context, setContext] = useState({
    language: "ENGLISH",
  });

  return (
    <html lang="en">
      <head>
        <title>Fyndfit</title>
        <meta name="description" content="This is multi language app" />
      </head>
        <AppContext.Provider value={[context, setContext]}>
          <body className={inter.className}>
              {children}
          </body>
        </AppContext.Provider>
    </html>
  );
}
