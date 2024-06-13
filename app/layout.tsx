import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akwei's Portfolio",
  description: "Modern & Minimal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {/*default theme not changing to dark*/}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-W-2xl lg:max-W-[60vw] flex flex-col items-center justify-center">
         
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100"> Dynamic web Magic with Next.js</h2>
        </div>
      </div>
    </html>
  );
}