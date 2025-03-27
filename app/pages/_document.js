// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for better font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts with &display=optional to improve performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&family=Concert+One&family=Fugaz+One&family=Kanit:wght@100..900&family=Lilita+One&family=Nabla&family=Nunito:wght@200..1000&family=Orbitron:wght@400..900&family=Oswald:wght@200..700&family=Press+Start+2P&family=Silkscreen:wght@400;700&family=Varela+Round&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=optional"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
