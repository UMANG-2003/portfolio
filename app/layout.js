// app/layout.js (or RootLayout.js in `app` directory)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UMANG-WEBDEV PORTFOLIO",
  description: "It is my webdev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <div id="stars" className="absolute"></div>
        <div id="stars2" className="absolute"></div>
        <div id="stars3" className="absolute"></div>
      </body>
    </html>
  );
}
