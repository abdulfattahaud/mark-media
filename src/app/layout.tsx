import type { Metadata } from "next";
import { Urbanist, Syne } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Media",
  description: "Mark Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body data-navigation-status='not-active' className={`${urbanist.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
