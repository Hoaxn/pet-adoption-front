/** @format */

import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QM35YBD0EJ"
          ></script>

          <link href="/assets/dist/css/bootstrap.min.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />

          <link href="/assets/dist/css/style.css" rel="stylesheet" />
          <link href="/assets/dist/css/custom.css" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="96x96" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="128x128" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/favicon.ico" />

          <script src="/assets/dist/js/bootstrap.bundle.min.js" defer></script>
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
