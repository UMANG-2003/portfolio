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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&family=Concert+One&family=Fugaz+One&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lilita+One&family=Nabla&family=Nunito:wght@200..1000&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Press+Start+2P&family=Silkscreen:wght@400;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div id="stars" className="absolute "></div>
        <div id="stars2" className="absolute "></div>
        <div id="stars3" className="absolute "></div>
      </body>
    </html>
  );
}
