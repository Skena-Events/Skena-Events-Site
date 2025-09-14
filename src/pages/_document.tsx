import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="lv">
      <Head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="description" content="Skena Events — skatuves, gaismas un skaņas noma visā Latvijā." />
        <meta property="og:title" content="Skena Events" />
        <meta property="og:description" content="Skatuves, gaismas un skaņas noma visā Latvijā." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skenaevents.lv" />
        <meta property="og:image" content="/og.jpg" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
