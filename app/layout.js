import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ Import Next.js Script component
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
  title: "UMANG - MERN Stack Developer",
  description: "portfolio of Umang, a MERN stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Use Script component instead of <script> */}
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
